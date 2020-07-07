<template>
  <div class="content">
    ชื่อ
    <b-input type="text" v-model="name1"></b-input>นามสกุล
    <b-input type="text" v-model="name2"></b-input>ชื่อเล่น
    <b-input type="text" v-model="form.name"></b-input>เลขนศ
    <b-input type="text" v-model="form.sid"></b-input>ทีม
    <b-input type="text" v-model="form.team"></b-input>
    <b-button @click="createUSER" variant="success">กดสิจ้ะ</b-button>
    <b-button @click="addTodb" variant="danger">=>{{uid}}</b-button>
    {{form}} {{name1}}
  </div>
</template>

<script>
export default {
    layout:'default',
    data(){
        return {
            form :{
                name:'',
                coin:0,
                role:'member',
                picture:"",
                sid:"",
                team:'',
                boss:false
            },
            password:'123456'
            ,uid:'0',
            name1:'',
            name2:'',
        }
    },
    methods: {
        async addTodb(){
            const B = this.uid
            console.log(B)
            const memberRef = this.$fireStore.collection('member').doc(B)
            try {
                const Res = await memberRef.set({...this.form,realname : this.name1 + ' ' + this.name2})
                // this.$router.push('/admin')
                this.form.name=''
                this.form.sid=""
                this.form.team=''
                this.name1=''
                this.name2=''
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
                this.uid = user.user.uid;
                // this.addTodb()
                })
            }catch(e){

            }
        }
            
    },computed:{
        real(){
            return this.form.realname = this.name1 + ' ' + this.name2
        }
    }

    }
</script>

<style>
</style>