<template>
  <div>
    <div class="cont">
      <b-form>
        <label for="ps1" class="inputbox">Password :</label>
        <b-input id="ps1" type="password" v-model="input.password1"></b-input>
        <label for="ps2" class="inputbox">Comfirm Password :</label>
        <b-input id="ps2" type="password" v-model="input.password2"></b-input>
        <b-button
          class="Mybuts"
          variant="outline-success"
          :disabled="passWordCheck"
          @click="changePassword"
        >ยืนยัน</b-button>
      </b-form>
      <p v-if="passWordCheck" style="color:red; margin-top:10px;">
        <b-alert
          show
          variant="danger"
        >กรอกสองช่องให้เหมือนกัน / พาสเวิร์ดมีความยาวมากกว่า 6 ตัวอักษร</b-alert>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            input:{
                password1:'',
                password2:''
            }
        }
    },methods:{
        changePassword(){
            var user = this.$fireAuth.currentUser;
            user.updatePassword(this.input.password1).then(function() {
                alert('เปลี่ยนรหัสสำเร็จ')
            }).catch(function(error) {
            });
            // console.log(user)
        }
    },computed:{
        passWordCheck(){
            return (this.input.password1 != this.input.password2 || this.input.password1.length < 6)
        }
    }
}
</script>

<style scoped>
.cont {
  max-width: 1140px;
  margin: 0 auto;
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