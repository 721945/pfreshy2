<template>
  <section>
    <div class="card card-x" v-for="eachteam in teamCoin" :key="eachteam.team">
      <div class="card-body">
        <div>
          <font-awesome-icon
            v-if="
              user != null ? (user.team == eachteam.team ? true : false) : false
            "
            icon="dollar-sign"
            class="text-danger"
            style="font-size: 50px; float: left;"
          />
          <font-awesome-icon
            v-else
            icon="dollar-sign"
            class="text-info"
            style="font-size: 50px; float: left;"
          />
          <div class="text-right">
            <h5>TEAM {{ eachteam.team }}</h5>
            <h3>{{ eachteam.coin }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      teamCoin: [],
      user: {},
    }
  },
  async mounted() {
    await this.$store.dispatch('getAllTeamCoin')
    this.teamCoin = this.$store.getters.getAllTeamCoin
    this.user = this.$store.getters.getUser
    console.log(this.user)
  },
  computed: {
    users() {
      return (this.user = this.$store.getters.getUser)
    },
  },
  beforeDestroy() {
    this.$store.commit('setAllTeamCoin', '')
  },
}
</script>

<style scoped>
.card-x {
  margin: 10px;
  flex: 1 0 21%;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
}
section {
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  /* gap: 10px; */
  /* flex-basis: 25%; */
}
</style>
