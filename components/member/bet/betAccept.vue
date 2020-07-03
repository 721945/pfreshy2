<template>
  <div class="cont" v-if="load == 3">
    <a class="text3">คำท้าที่ยอมรับ !</a>
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
        <template v-slot:cell(status)="data">
          <b
            class="text-warning"
            v-if="data.item.winner == users.uid || data.item.loser == users.uid"
          >รอผลของอีกฝ่าย</b>
          <b
            class="text-danger"
            v-else-if="data.item.winner != '' || data.item.loser != ''"
          >รอผลจากคุณ</b>
          <b class="text-info" v-else>รอผลจากทั้งสองฝ่าย</b>
        </template>
      </b-table>
    </div>
    <div class="show-content" v-else>
      <a class="notext">ไม่มีคำท้าง้าบ</a>
    </div>
    <b-modal id="modal-c" title="ได้เวลาหาผู้ชนะแล้ว !" centered hide-footer>
      <div class="inmodal">
        <a class="text3">{{'คำท้าคือ ' + bet.topic}}</a>
        <br />
        <a>{{'จำนวน : ' + bet.coin + " coin"}}</a>
      </div>
      <b-button class="buttons" @click="Win" variant="warning">เราชนะ</b-button>
      <b-button class="buttons" @click="lose" variant="dark">เราแพ้</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
    props:{
        load:Number,
    },  data(){
        return{
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
        },{
          key: 'status',
          label:'สถานะ'
        }],
        bet:{},
      items:[],
      }
  },async mounted(){
      await this.$store.dispatch('LoadBetAccept')
      this.items = this.$store.getters.getBetAccept
  },computed:{
      rows(){
        return this.items.length
      },users(){
        return this.$store.getters.getUser
        }
    },
  methods:{
    Win(){
      this.$store.dispatch('BetWin',this.bet)
      this.$bvModal.hide('modal-c')
      this.items = this.$store.getters.getBetAccept
    },
    lose(){
      this.$store.dispatch('BetLose',this.bet)
      this.$bvModal.hide('modal-c')
      this.items = this.$store.getters.getBetAccept
    },
    cancel(){
        this.$store.dispatch('BetReport',this.bet)
      },
       showModal(item){
        this.bet = {...item}
        this.$bvModal.show('modal-c')
      },
      nextPage(){
         if( (this.currentPage * this.perPage) < this.items.length) 
            this.currentPage++
         let x = this.load
      },
      prePage(){
        if(this.currentPage > 1)
            this.currentPage--
      }
  },  beforeDestroy(){
    this.$store.commit('setBetAccept','')
  }
}
</script>

<style scoped>
.inmodal {
  height: 100px;
}
.buttons {
  width: 50%;
  float: left;
}
</style>