<template>
  <div class="content1">
    <betMenu />
    <div class="content2">
      <b-card header="รายชื่อเพื่อนทั้งหมด" class="text-center" header-bg-variant="info">
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
            hober
            id="my-table"
            :items="listFilter"
            :per-page="perPage"
            :current-page="currentPage"
            :fields="fields"
          >
            <template v-slot:cell(uid)="data">
              <nuxt-link
                :to="{ name: 'member-id-bet-p2', params: { id: $route.params.id , p2:data.value}}"
              >
                <b-button variant="primary">ท้า</b-button>
              </nuxt-link>
            </template>
          </b-table>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import betMenu from '@/components/member/bet/bet'
export default {
  components:{
betMenu
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
        search:'',
        search2:'',u:{}
      }
    },
    methods:{
      nextPage(){
         if( (this.currentPage * this.perPage) < this.listFilter.length) 
         this.currentPage++
      },
      prePage(){
        if(this.currentPage > 1)
          this.currentPage--
      }
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
      this.u = this.$store.getters.getUser
      if(!this.u)
        this.$router.push('/login')
      else{
        if (this.u.role != 'member')
          this.$router.push('/')
        else
          if (this.u.uid != this.$route.params.id)
            this.$router.push('/member/'+ this.u.uid)   
     }
      await this.$store.dispatch('getAllMember')
      this.items = this.$store.getters.getAllFriend
  },
  beforeDestroy(){
    this.$store.commit('setFriendAll','')
    this.$store.commit('setBetSend','')
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