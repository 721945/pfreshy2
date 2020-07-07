<template>
  <div class="content">
    <b-card header="Menu" class="text-center" header-bg-variant="secondary">
      <div class="cover-button">
        <!-- Load All ? Data -->
        <b-button class="buttonConfig" @click="changeLoad(1)" variant="info">กลุ่มที่จัด</b-button>
        <b-button class="buttonConfig" @click="changeLoad(4)" variant="danger">เพิ่ม coin ทีม</b-button>
        <b-button class="buttonConfig" @click="changeLoad(5)" variant="secondary">หัก coin ทีม</b-button>
        <b-button class="buttonConfig" @click="changeLoad(6)" variant="dark">ดูประวัติ</b-button>
      </div>
      <div class="showcontent" v-if="load == 1">
        <groupMember />
      </div>
      <div class="showcontent" v-if="load == 4">
        <span class="text3">
          <b-alert varaint="primary" show>เพิ่ม COIN ให้น้อง !</b-alert>
        </span>
        <teamcoin :load="load" />
      </div>
      <div class="showcontent" v-if="load == 5">
        <span class="text3">
          <b-alert variant="danger" show>ลด COIN น้อง !</b-alert>
        </span>
        <teamcoin :load="load" />
      </div>
      <div class="showcontent" v-if="load == 6">
        <betlog />
      </div>
    </b-card>
  </div>
</template>

<script>
import memberlist from '@/components/staff/memberlist'
import groupMember from '@/components/staff/groupMember'
import betlog from '@/components/staff/betlog'
import teamcoin from '@/components/teamcoin'

export default {
  components:{
    memberlist,
    teamcoin,
    groupMember,
    betlog
  },
  data(){
        return{
        perPage: 5,
        currentPage: 1,        
        fields: [
        {
          key: 'player1',
          label: 'คนท้า',
        },
        {
          key: 'player2',
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
        }],
      items:[],
        load:1,
      }
  },
  methods:{
    changeLoad(X){
      this.load = X
    }
  }
}
</script>
<style>
.text3 {
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}
</style>
<style scoped>
.cover-button {
  margin: 10px auto;
  text-align: center;
  align-self: center;
}
.buttonConfig {
  width: 150px;
  padding: 10px;
  /* margin: 5px; */
  margin-left: 5px;
  margin-right: 5px;
}
.content {
  max-width: 1140px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
</style>