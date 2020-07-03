<template>
  <div class="content">
    <b-card
      header="รายชื่อเพื่อนทั้งหมด"
      class="text-center"
      header-bg-variant="secondary"
    >
      <div class="cover-button">
        <!-- Load All ? Data -->
        <b-button class="buttonConfig" @click="changeLoad(1)" variant="info"
          >ดูที่ตัวเองท้า</b-button
        >
        <b-button class="buttonConfig" @click="changeLoad(2)" variant="warning"
          >ดูคำท้าที่ได้รับ</b-button
        >
        <b-button class="buttonConfig" @click="changeLoad(3)" variant="danger"
          >ดูคำท้าที่ยอมรับ</b-button
        >
        <b-button class="buttonConfig" @click="changeLoad(4)" variant="dark"
          >ดูผลทั้งหมด</b-button
        >
      </div>
      <!-- Show Bet Accept -->
      <betSend :load="load" />
      <betGot :load="load" />
      <betAccept :load="load" />
      <betResult :load="load" />
    </b-card>
  </div>
</template>

<script>
import betSend from '@/components/member/bet/betSend'
import betGot from '@/components/member/bet/betGot'
import betAccept from '@/components/member/bet/betAccept'
import betResult from '@/components/member/bet/betResult'
export default {
  components: {
    betSend,
    betGot,
    betAccept,
    betResult,
  },
  data() {
    return {
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
        },
      ],
      items: [],
      load: 1,
    }
  },
  methods: {
    changeLoad(X) {
      this.load = X
    },
  },
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
  max-height: 600px;
  overflow: hidden;
}
</style>
