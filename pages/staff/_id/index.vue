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