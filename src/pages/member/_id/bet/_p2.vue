<template>
  <div class="content">
    <b-card header="รายชื่อเพื่อนทั้งหมด" class="text-center" header-bg-variant="info">
      <span class="textshow">
        {{
        friend[0] ? 'ต้องการท้า ' + friend[0].name : ' '
        }}
      </span>
      <br />
      <span class="textshow">
        {{
        friend[0] ? 'มี ' + friend[0].coin + ' coin' : ' '
        }}
      </span>
      <br />
      <span class="textshow2">
        {{
        users ? 'คุณมี ' + users.coin + ' coin' : '' }}
      </span>
      <b-form>
        <label for="topic">ต้องการจะท้าให้เพื่อนทำอะไร</label>
        <b-input id="topic" type="text" v-model="form.topic" placeholder="สิ่งที่ต้องการจะท้า"></b-input>
        <label for="coin">มูลค่า</label>
        <b-input
          id="coin"
          min="1"
          type="number"
          :max="more"
          v-model.number="form.coin"
          placeholder="จำนวน coin"
        ></b-input>
        <div class v-if="friend[0]">
          <b-button
            class="button"
            @click="betSend"
            variant="outline-primary"
            :disabled="isValid"
          >ท้าไปเล้ย !</b-button>
          <nuxt-link :to="{ name: 'member-id-bet', params: { id: $route.params.id } }">
            <b-button class="button" variant="outline-danger">ยกเลิก</b-button>
          </nuxt-link>
        </div>
        <p v-if="this.coinleft < 1" style="color: red;">* อย่างน้อยต้องมี 1 coin น้า :D</p>
        <p
          v-if="
            this.friend[0]
              ? this.friend[0].coin <= 0
                ? true
                : false
              : false < 1
          "
          style="color: red;"
        >* อย่างน้อยเพื่อนต้องมี 1 coin นะ! :D</p>
        <p v-if="form.coin < 1" style="color: red;">
          <b-alert
            show
            variant="danger"
            style="margin-top:10px;
            width:55%;"
          >* อย่างน้อยต้อง 1 coin ! :D</b-alert>
        </p>
        <p v-if="isValid" style="color: red;">
          <b-alert
            show
            variant="danger"
            style="margin-top:10px;
            width:55%;"
          >* กรอกตามจำนวนเงินที่สามารถกรอกได้นะ ! :D</b-alert>
        </p>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        player1: this.$route.params.id,
        player2: this.$route.params.p2,
        accept: false,
        coin: 1,
        topic: '',
        winner: '',
        loser: '',
      },
      friend: [],
      coinleft: 0,
      u:{}
    }
  },
  methods: {
    async betSend() {
      this.$store.dispatch('createBet', {
        ...this.form,
        name1: this.users.name,
        name2: this.friend[0].name,
      })
      await this.$store.dispatch('discountMoney', this.form.coin)
      this.$router.push('/member/' + this.$route.params.id + '/bet')
    },
  },
  computed: {
    more() {
      if (this.friend[0]) {
        if (this.coinleft > this.friend[0].coin) return this.friend[0].coin
        else return this.coinleft
      } else return this.coinleft
    },
    isValid() {
      if (this.friend[0]) {
        if (
          this.form.coin > this.friend[0].coin ||
          this.form.coin < 1 ||
          this.form.coin > this.users.coin
        )
          return true
      } else return false
    },
    users() {
      return this.$store.getters.getUser
    },
  },

  async mounted() {
    this.u = this.$store.getters.getUser
    if(!this.u)
      this.$router.push('/login')
    else{
      if (this.u.role != 'member')
        this.$router.push('/')
      else
        if (this.u.uid != this.$route.params.id)
          this.$router.push('/member/'+this.u.uid)

    }
    await this.$store.dispatch('getSearchMember', this.$route.params.p2)
    this.friend = this.$store.getters.getAllFriend
    this.coinleft = this.$store.getters.getUser.coin
  },
  beforeDestroy() {
    this.$store.commit('setFriendSearch', '')
  },
}
</script>

<style scoped>
.textshow {
  font-size: 45px;
  margin-bottom: 10px;
}
.textshow {
  font-size: 25px;
  margin-bottom: 10px;
}
label {
  float: left;
  margin-top: 10px;
  padding-left: 5px;
}
.content {
  max-width: 1140px;
  margin: 20px auto;
}
.button {
  float: right;
  padding: 10px;
  margin: 10px 10px;
  /* margin-top: 10px; */
  width: 150px;
}
</style>
