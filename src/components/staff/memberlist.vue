<template>
  <div class="content1">
    <div class="content2">
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
          selectable
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
    </div>
  </div>
</template>

<script>
export default {
  components:{
  },
    data(){
        return{
        perPage: 10,
        currentPage: 1,        
        fields: [
        {
          key: 'sid',
          label: 'รหัสนักศึกษา',
          sortable: true,
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
        selected2:[]
      }
    },
    methods:{
        /* Style the row as needed */
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
        let text = this.search.trim()
        let text2 = this.search2.trim()
        return this.items.filter(item => {
            return item.name.includes(text) && item.sid.includes(text2)
        })
      },
      rows(){
        return this.listFilter.length
      },
      
    },
    async mounted() {
      await this.$store.dispatch('getAllMember')
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