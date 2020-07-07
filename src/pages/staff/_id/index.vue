<template>
  <div class="content">
    <groupselect />
  </div>
</template>

<script>
import groupselect from '@/components/staff/group'
export default {
    components:{
        groupselect
    },data(){
      return {
        u:{}
      }
    },
    mounted(){
      if(!this.u)
      this.$router.push('/login')
    else{
      if (this.u.role != 'staff')
        this.$router.push('/')
      else
        if (this.u.uid != this.$route.params.id)
          this.$router.push('/staff/'+this.u.uid)
    }
    }
}
</script>

<style scoped>
.content {
  max-width: 1140px;
  margin: 0 auto;
  padding: 10px;
}
</style>