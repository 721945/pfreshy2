<template>
  <div class="cont" style="margin-top:10px;">
    ใส่เลข
    <b-input type="number" v-model.number="number"></b-input>
    <b-button @click="checkLottery">ยืนยัน</b-button>
  </div>
</template>

<script>
import alert from '@/components/alert'
export default {
    components:{
        alert
    },
    data(){
        return {
            number:0
        }
    },
    methods:{
        async checkLottery(){
            this.$store.dispatch('checkLottery',this.number)
        }
    },
}
</script>

<style>
</style>