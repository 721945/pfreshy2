<template>
  <section v-if="this.teamCoin.length > 0">
    <div class="card card-x" v-for="(eachteam, index) in teamCoin" :key="eachteam.team">
      <div class="card-body">
        <div>
          <font-awesome-icon
            v-if="
              user != null ? (user.team == eachteam.team ? true : false) : false
            "
            icon="dollar-sign"
            class="text-danger"
            style="font-size: 50px; float: left;"
          />
          <font-awesome-icon
            v-else
            icon="dollar-sign"
            class="text-info"
            style="font-size: 50px; float: left;"
          />
          <div class="text-right">
            <h5
              v-if="
                user != null
                  ? user.team == eachteam.team
                    ? true
                    : false
                  : false
              "
            >[ {{ eachteam.teamname }} ]</h5>
            <h5 v-else>{{ eachteam.teamname }}</h5>
            <h3>{{ eachteam.coin }}</h3>
          </div>
        </div>
      </div>
      <div class="showcontent" v-if="load == 4">
        <div
          class="card-footer"
          v-if="
            user != null
              ? user.role == 'staff' || user.role == 'admin'
                ? true
                : false
              : false
          "
        >
          <form>
            <b-input-group size="sm">
              <b-input
                type="number"
                placeholder="จำนวน Coin "
                min="0"
                v-model.number="formTeam[index]"
              ></b-input>
              <b-input-group-append>
                <b-button
                  variant="outline-secondary"
                  @click="AddTeamCoin(eachteam.team, index)"
                >ตกลง</b-button>
              </b-input-group-append>
            </b-input-group>
          </form>
        </div>
      </div>
      <div class="showcontent" v-if="load == 5">
        <div
          class="card-footer"
          v-if="
            user != null
              ? user.role == 'staff' || user.role == 'admin'
                ? true
                : false
              : false
          "
        >
          <form>
            <b-input-group size="sm">
              <b-input
                type="number"
                placeholder="จำนวน Coin "
                min="0"
                v-model.number="formTeam[index]"
              ></b-input>
              <b-input-group-append>
                <b-button
                  variant="outline-secondary"
                  @click="DisTeamCoin(eachteam.team, index)"
                >ตกลง</b-button>
              </b-input-group-append>
            </b-input-group>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    load: Number,
  },
  data() {
    return {
      formTeam: [],
      teamCoin: [],
      // teamName: ,
      user: {},
      st: 0,
    }
  },
  async mounted() {
    this.teamCoin = this.$store.getters.getAllTeamCoin
    if (this.teamCoin.length == 0) await this.$store.dispatch('getAllTeamCoin')
    this.teamCoin = this.$store.getters.getAllTeamCoin
    this.user = this.$store.getters.getUser
  },
  computed: {
    users() {
      return (this.user = this.$store.getters.getUser)
    },
    test() {
      return this.$store.getters.getAllTeamCoin
    },
  },
  updated() {
    this.teamCoin = this.$store.getters.getAllTeamCoin
  },
  beforeDestroy() {
    this.$store.commit('setAllTeamCoin', '')
  },
  methods: {
    async DisTeamCoin(team, int) {
      if(typeof this.formTeam[int] == 'number'){
        await this.$store.dispatch('discountCoinTeamStaff', {
          coin: this.formTeam[int],
        team: team,
        index: int,
      })
      this.teamCoin = this.$store.getters.getAllTeamCoin
      this.formTeam = []
      }
      else
        alert('Please enter only number')
    },
    async AddTeamCoin(team, int) {
      console.log(typeof this.formTeam[int]);
      if(typeof this.formTeam[int] == 'number'){
      await this.$store.dispatch('discountCoinTeamStaff', {
        coin: -this.formTeam[int],
        team: team,
        index: int,
      })
      this.teamCoin = await this.$store.getters.getAllTeamCoin
      this.formTeam = []
      }
      else
        alert('Please enter only number')
    },
  },
}
</script>

<style scoped>
.card-x {
  margin: 10px;
  flex: 1 0 21%;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
}
section {
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  /* gap: 10px; */
  /* flex-basis: 25%; */
}
@media only screen and (max-width: 1028px) {
  .card-x {
    flex: 1 0 45%;
  }
}
@media only screen and (max-width: 600px) {
  .card-x {
    flex: 1 0 100%;
  }
}
</style>
