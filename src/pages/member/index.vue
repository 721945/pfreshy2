<template>
  <div class="content"></div>
</template>

<script>
export default {
  async mounted() {
    var curuse = this.$store.getter.getUser
    if (curuse)
    this.$router.push('/member'+ curuse.uid)
  },
}
</script>

<style></style>
