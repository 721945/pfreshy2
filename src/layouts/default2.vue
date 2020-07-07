<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
export default {
  // mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data() {
    return {
      window: {
        width: '',
      },
    }
  },
  computed: {
    getWidth() {
      return this.$vssWidth
    },
  },
}
</script>

<style scoped>
.Nav1 {
  display: none;
  background: white;
  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.15);
}
@media only screen and (max-width: 992px) {
  .Nav1 {
    display: block;
  }
}
</style>
