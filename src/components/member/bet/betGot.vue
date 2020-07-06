<template>
  <div class="cont" v-if="load == 2">
    <a class="text3" style="font-size: 30px;">คำท้าที่ได้รับ !</a>
    <div class="show-table" v-if="this.items.length > 0">
      <b-pagination
        v-if="this.rows > this.perPage"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
      ></b-pagination>
      <p class="mt-3" v-if="this.rows > this.perPage">
        Current Page: {{ currentPage }}
      </p>
      <b-table
        hover
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        @row-clicked="showModal"
      ></b-table>
    </div>
    <div class="show-content" v-else>
      <a class="notext"
        ><b-alert show variant="warning"> ไม่มีข้อมูล !</b-alert></a
      >
    </div>
    <b-modal
      id="modal-a"
      title="ต้องการรับคำท้าหรือไม่ ?"
      centered
      @ok="accepted"
      @cancel="refuse"
      ok-title="รับคำท้า"
      cancel-title="ปฏิเสธคำท้า"
    >
      <a class="text3">{{ 'คำท้าคือ ' + bet.topic }}</a>
      <br />
      <a>{{ 'จำนวน : ' + bet.coin + ' coin' }}</a>
    </b-modal>
    <a v-show="st != 0">
      {{ test }}
    </a>
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
      items: [],
      bet: {},
      st: 0,
    }
  },
  async mounted() {
    await this.$store.dispatch('LoadBetGot')
    this.items = this.$store.getters.getBetGot
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
    this.items = this.$store.getters.getBetGot
  },
  methods: {
    accepted() {
      this.$store.dispatch('BetAccept', this.bet)
      // this.$router.push('/member/'+ this.$route.params.id+'/bet')
    },
    refuse() {
      this.$store.dispatch('BetRefuse', this.bet)
    },
    showModal(item) {
      this.bet = { ...item }
      this.$bvModal.show('modal-a')
    },
    nextPage() {
      if (this.currentPage * this.perPage < this.items.length)
        this.currentPage++
    },
    prePage() {
      if (this.currentPage > 1) this.currentPage--
    },
  },
  beforeDestroy() {
    this.$store.commit('setBetGot', '')
  },
}
</script>

<style scoped></style>
