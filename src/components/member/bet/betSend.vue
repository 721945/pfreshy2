<template>
  <div class="cont" v-if="load == 1">
    <a class="text3" style="font-size: 30px;">คำท้าที่ได้ส่งไป !</a>
    <div class="show-table" v-if="this.items.length > 0">
      <b-pagination
        v-if="this.rows > this.perPage"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
      ></b-pagination>
      <p class="mt-3" v-if="this.rows > this.perPage">Current Page: {{ currentPage }}</p>
      <b-table
        hover
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        @row-clicked="showModal"
      >
        <template v-slot:cell(uid)="data">
          <nuxt-link
            :to="{
              name: 'member-id-bet-p2',
              params: { id: $route.params.id, p2: data.value },
            }"
          >
            <b-button>ท้า</b-button>
          </nuxt-link>
        </template>
      </b-table>
    </div>
    <div class="show-content" v-else>
      <a class="notext">
        <b-alert show variant="warning">ไม่มีข้อมูล !</b-alert>
      </a>
    </div>
    <b-modal
      id="modal-b"
      title="ต้องการยกเลิกคำท้าหรือไม่ ?"
      centered
      @ok="cancel"
      ok-title="ตกลง"
      cancel-title="ยกเลิก"
    >
      <a class="text3">{{ 'คำท้าคือ ' + bet.topic }}</a>
      <br />
      <a>{{ 'จำนวน : ' + bet.coin + ' coin' }}</a>

      <a v-show="st != 0">{{ test }}</a>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    load: Number,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          key: 'name1',
          label: 'คนท้า',
        },
        {
          key: 'name2',
          label: 'คนได้รับคำท้า',
        },
        {
          key: 'topic',
          label: 'หัวข้อที่ทำการท้า',
        },
        {
          key: 'coin',
          label: 'มูลค่า',
          sortable: true,
        },
      ],
      bet: {},
      items: [],
      st: 0,
    }
  },
  async mounted() {
    await this.$store.dispatch('LoadBetSend')
    this.items = this.$store.getters.getBetSend
  },
  computed: {
    rows() {
      return this.items.length
    },
    test() {
      return this.$store.getters.getBetSend
    },
  },
  updated() {
    this.items = this.$store.getters.getBetSend
  },
  methods: {
    async cancel() {
      // alert('test')
      this.$store.dispatch('BetCancel', this.bet)
      await this.$store.dispatch('discountMoney', -this.bet.coin)
      this.$router.push('/member/' + this.$route.params.id + '/bet')
      this.items = this.$store.getters.getBetSend
    },
    showModal(item) {
      this.bet = { ...item }
      this.$bvModal.show('modal-b')
    },
    nextPage() {
      if (this.currentPage * this.perPage < this.items.length)
        this.currentPage++
      let x = this.load
    },
    prePage() {
      if (this.currentPage > 1) this.currentPage--
    },
  },
  beforeDestroy() {
    this.$store.commit('setBetSend', '')
  },
}
</script>

<style></style>
