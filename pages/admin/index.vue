<template>
  <div class="content">
    <b-input type="text" v-model="form.name"></b-input>
    <b-input type="text" v-model="form.sid"></b-input>
    <button @click="createUSER">กดสิจ้ะ</button>
    <button @click="addTodb">=>{{uid}}</button>
  </div>
</template>

<script>
export default {
    layout:'default',
    data(){
        return {
            form :{
                name:'ID',
                coin:0,
                role:'member',
                picture:"Don't have",
                sid:"620705010",
                team:'a'
            },
            password:'123456'
            ,uid:'10'
        }
    },
    methods: {
        async addTodb(){
            alert('test')
            const B = this.uid
            console.log(B)
            const memberRef = this.$fireStore.collection('member').doc(B)
            try {
                const Res = await memberRef.set(this.form)
                this.$router.push('/')
            } catch (e) {
            console.log(e.message)
            return
            }

    
            
        },
        async createUSER(){
            try {
                const email = this.form.sid + '@pfreshy.com'
                await this.$fireAuth.createUserWithEmailAndPassword(email,this.password).then((user) => {
                // console.log(user.user.uid)
                alert('kk')
                this.uid = user.user.uid;
                // this.addTodb()
                })
            }catch(e){

            }
        }
            
    },

    }
</script>

<style>
</style>