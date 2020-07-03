<template>
  <div>
    <!-- Using modifiers -->
    <b-button
      v-b-modal.my-modal
      variant="outline-secondary"
      class="Mybut"
    >ดูรูปภาพ สรุปเป็นรูปหรือภาพ</b-button>
    <!-- The modal -->
    <b-modal id="my-modal" hide-footer centered size="xl">
      <img :src="pic" width="100%" />
    </b-modal>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pic:''
    }
  }, async mounted(){
    this.pic = await this.$store.getters.getPicture;
  },
}
</script>

<style scoped>
.Mybut {
  width: 100%;
}
</style>
