<template>
  <div class="content1">
    <Menu />
    <div class="content2" v-if="items.length>0">
      <b-card header="รายชื่อน้องทั้งหมด" class="text-center" header-bg-variant="info">
        <div class="overflow-auto">
          <b-input placeholder="ค้นหาด้วยชื่อ" v-model="search" class="in"></b-input>
          <b-input placeholder="ค้นหาด้วยเลขนักศึกษา" v-model="search2" class="in"></b-input>
          <b-button
            variant="warning"
            style="float:right; margin-top:5px; padding:5px;"
            @click="AddGroup"
          >ทำการจับเข้ากลุ่ม</b-button>
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
            @row-clicked="onRowSelected"
            responsive="sm"
          >
            <!-- Example scoped slot for select state illustrative purposes -->
            <template v-slot:cell(selected)="{item}">
              <template v-if="test(item)">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
            <template v-slot:cell(uid)="{ item , index}">
              <b-button
                variant="primary"
                style="width:70px;"
                v-b-modal.modal-1
                @click="set(item.uid,index)"
              >เพิ่ม</b-button>
              <b-button
                variant="success"
                style="width:70px;"
                v-b-modal.modal-2
                @click="set(item.uid,index)"
              >ลด</b-button>
            </template>
          </b-table>
        </div>
      </b-card>
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
      perPage: 10,
      currentPage: 1,        
      fields: [
        {
          key:'selected',
          label :'selected'
        },
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
          key:'uid',
          label: '*',
      }],items:[],
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
      if (typeof this.number == 'number'){
      await this.$store.dispatch('addCoin',{uid:this.uid , coin:this.number ,  index:this.index})
      this.items = this.$store.getters.getAllFriend
      this.uid = 0
      this.index = 0
      this.number = 0
      
      this.s = 2
       }
      else
        console.log('Please enter only number');
    },
    async DiscountCoin(){
       if (typeof this.number == 'number'){
      await this.$store.dispatch('addCoin',{uid:this.uid , coin:-this.number ,  index:this.index})
      this.items = this.$store.getters.getAllFriend
      
      this.uid = 0
      this.index = 0
      this.number = 0
      this.s = 2
       }
      else
        console.log('Please enter only number');
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
    onRowSelected (value, index) {
      if(this.selected.length > 0)
        if (!this.selected.includes(value)) {
            this.selected.push(value)
        }
        else{
          let x = this.selected.findIndex(each => each == value)
          this.selected.splice(x, 1)
        }
      else
        this.selected.push(value)
    },
    test(item){
        if(this.selected)
          if (this.selected.includes(item))
          {
            return true;
            }
          return false;
        return false
    },
    async AddGroup(){
        this.$store.dispatch('AddGroup',this.selected)
        this.selected = []
    }
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
    this.items = this.$store.getters.getAllFriend
  },
  beforeDestroy(){
    this.$store.commit('setFriendAll','')
  }
}
</script>

<style scoped>
.in {
  margin-bottom: 15px;
}
.content1 {
  max-width: 1140px;
  margin: 20px auto;
}
.content2 {
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
}
</style>