<template>
  <div class="content">
    <Auth />
  </div>
</template>

<script>
import Auth from '@/components/Auth'
export default {
    layout:'defaultmember',
    middleware:'login',
    components:{
        Auth
    }
}
</script>

<style scoped>
.content {
  max-width: 1140px;
  margin: 0 auto;
}
</style>