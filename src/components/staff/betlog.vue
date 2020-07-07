<template>
  <div class="content1">
    <span class="text3">
      <b-alert variant="success" show>การ BET ของน้อง!</b-alert>
    </span>
    <div class="content2" v-if="items.length>0">
      <div class="overflow-auto">
        <b-input placeholder="ค้นหาด้วยชื่อ" v-model="search" class="in"></b-input>
        <b-input placeholder="ค้นหาด้วยเลขนักศึกษา" v-model="search2" class="in"></b-input>
        <b-pagination
          v-if="this.listFilter.length > perPage"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          align="center"
        ></b-pagination>
        <p class="mt-3" v-if="this.listFilter.length > perPage">Current Page: {{ currentPage }}</p>
        <b-table
          hover
          fixed
          ref="selectableTable"
          id="my-table"
          :per-page="perPage"
          :current-page="currentPage"
          :items="listFilter"
          :fields="fields"
          responsive="sm"
        >
          <!-- Example scoped slot for select state illustrative purposes -->
        </b-table>
      </div>
    </div>

    <b-modal id="modal-1" title="เพิ่ม COIN" centered @ok="addCoin">
      <b-input v-model.number="number" min="0" type="number"></b-input>
    </b-modal>
    <b-modal id="modal-2" title="ลด COIN" centered @ok="DiscountCoin">
      <b-input v-model.number="number" min="0" type="number"></b-input>
    </b-modal>
    <div class="s" v-if="s == 1">{{h}}</div>
  </div>
</template>

<script>
import Menu from '@/components/staff/menu'
export default {
  components:{
    Menu
  },
  data(){
      return{
      perPage: 5,
      currentPage: 1,        
      fields: [
      {
        key: 'sid',
        label: 'รหัสนักศึกษา',
        sortable: true,
      },
      {
        key: 'realname',
        label: 'ชื่อจริง',
      },
      {
        key: 'name',
        label: 'ชื่อเล่น',
      },
      {
        key: 'coin',
        label: 'Coin',
        sortable: true,
      },
      {
        key: 'win',
        label: 'ชนะ',
        sortable: true,
      },
      {
        key: 'lose',
        label: 'แพ้',
        sortable: true,
      },
      {
        key: 'all',
        label: 'ทั้งหมด',
        sortable: true,
      },
      ],items:[],
      item:[],
      search:'',
      search2:'',
      selected:[],
      listFilt:[],
      number:0,
      uid:'',
      index:0,
      s:0,
      loadedArray : []
    }
  },
  watch:{
  },
  methods:{
    set(uid,index){
      this.uid = uid;
      this.index = index
    },
    async addCoin(){
      this.s = 2
    },
    async DiscountCoin(){
      this.s = 2
    },
    rowClicked(item) {
      if(item.selected){      
        this.$set(item, 'selected', false)
      }else{
        this.$set(item, 'selected', true)
      }
    },
    nextPage(){
        if( (this.currentPage * this.perPage) < this.listFilter.length) 
        this.currentPage++
    },
    prePage(){
      if(this.currentPage > 1)
        this.currentPage--
    },
  },

  computed:{
    listFilter () {
      let k = this.s
      this.s=0
      let text = this.search.trim()
      let text2 = this.search2.trim()
      if (this.items.length > 0)
      return this.items.filter(item => {
          return (item.name.includes(text)|| item.realname.includes(text)) && item.sid.includes(text2) 
      })
      else
      return ''
    },
    rows(){
      return this.listFilter.length
    },
    h(){
      return this.items = this.$store.getters.getAllFriend
    },
  },
  async mounted() {
    this.item = await this.$store.getters.getAllFriend
    if(this.item.length == 0)
    {
      await this.$store.dispatch('getAllMember')
      
    }
    await this.$store.dispatch('LoadBetStaff')
    this.items = await this.$store.getters.getMemberBet
    console.log(this.items);
    // await this.$store.dispatch('LoadGroup')
    // this.items = this.$store.getters.getGroup
  },
  beforeDestroy(){
    this.$store.commit('resetBetStaff','')
  }
}
</script>
<style scoped>
.in {
  margin-bottom: 15px;
}
</style>