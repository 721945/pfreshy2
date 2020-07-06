<template>
  <div class="cont" v-if="load == 4">
    <a class="text3" style="font-size: 30px;">ผลทั้งหมด !</a>
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
        v-if="this.items.length > 0"
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
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
        <template v-slot:cell(winner)="data">
          <span>{{ data.item.winner == data.item.player1 ? data.item.name1 : data.item.name2}}</span>
        </template>
      </b-table>
    </div>
    <div class="show-content" v-else>
      <a class="notext">
        <b-alert show variant="warning">ไม่มีข้อมูล !</b-alert>
      </a>
    </div>
    <a v-show="st != 0">{{ test }}</a>
    <div class="testalert"></div>
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
        {
          key:'winner',
          label:'ผู้ชนะ'
        }
      ],
      items: [],
      st: 0,
    }
  },
  async mounted() {
    await this.$store.dispatch('LoadBetResult')
    this.items = this.$store.getters.getBetResult
  },
  computed: {
    rows() {
      return this.items.length
    },
    test() {
      return this.$store.getters.getBetSend
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage * this.perPage < this.items.length)
        this.currentPage++
    },
    prePage() {
      if (this.currentPage > 1) this.currentPage--
    },
  },
  beforeDestroy() {
    this.$store.commit('setBetResult', '')
  },
}
</script>

<style></style>
