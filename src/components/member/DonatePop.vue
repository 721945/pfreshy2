<template>
  <div>
    <!-- Using modifiers -->
    <b-button
      v-b-modal.modal-test
      variant="outline-success"
      class="Mybut"
      @click="loadcoin"
    >บริจาคเงินเข้าตี้ค้าบ</b-button>
    <!-- The modal -->
    <b-modal id="modal-test" hide-footer centered size="md" header-bg-variant="success">
      <div class="cont">
        <span class="showmoney">{{'มีเงินตอนนี้ : ' + coinmember}}</span>
        <b-form @submit="donate">
          <b-input
            class="inputbox"
            type="number"
            v-model.number="coindonate"
            min="0"
            :max="coinmember"
          ></b-input>
          <b-button
            class="Mybuts"
            @click="donate"
            variant="outline-success"
            :disabled="isValid"
          >บริจาค</b-button>
        </b-form>
        <p v-if="isValid" style="color:red;">* กรอกตามจำนวนเงินที่มีน้า :D</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coinmember: 0,
      coindonate: 0,
    }
  },
  async mounted(){
    this.coinmember = await this.$store.getters.getCoin
  },
  methods: {
    donate() {
      if(typeof this.coindonate == 'number'){
        this.coinmember = this.$store.getters.getCoin
        if (this.coinmember - this.coindonate >= 0){
        this.$store.dispatch('discountMoney', this.coindonate)
        this.$store.dispatch('donate', this.coindonate)
        this.$bvModal.hide('modal-test')
        }
        else
          alert(' !')
      }
      else{
        alert('Please enter only number')
      }
    },
    checkNum() {
      if (this.coindonate < 0) {
        return
      }
    },
    async loadcoin(){
      this.coinmember = await this.$store.getters.getCoin
    }
  },
  computed: {
    isValid() {      
        return (this.coindonate < 0 || this.coindonate > this.coinmember)     
  }
  }
}
</script>

<style scoped>
.cont {
  height: 150px;
}
.showmoney {
  align-self: center;
  margin: 0 auto;
}
.Mybut {
  width: 100%;
}
.Mybuts {
  width: 100%;
  margin-top: 10px;
}
.inputbox {
  margin-top: 10px;
}
</style>
