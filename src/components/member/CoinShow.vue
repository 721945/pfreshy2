<template>
  <div class="coinBox">
    <!-- <b-button @click="query">กดสิ</b-button> -->
    <div class="Usercoin">
      <div class="top">
        <a>Your Coin</a>
      </div>
      <a class="coin">{{ coins }}</a>
    </div>
    <div class="Teamcoin">
      <div class="top">
        <a>Team Coin</a>
      </div>
      <a class="coin">
        {{ teamcoins }}
        <!-- Bug here-->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cointeam:0
    }
  },
  methods: {
    query() {
      this.$store.dispatch('LoadTeamcoin')
    },
  },
  async fetch(){  
    this.cointeam = await this.$store.dispatch('LoadTeamcoin').then(()=>{
      return this.$store.getters.getCoinTeam;
    }) 
    console.log(this.cointeam)

  },
  computed: {
    coins() {
      return this.$store.getters.getCoin
    },
    teamcoins() {
      return this.$store.getters.getCoinTeam
    },
  },
  mounted() {
    this.$store.dispatch('LoadTeamcoin')
  },
}
</script>

<style scoped>
.coinBox {
  font-family: 'Montserrat', sans-serif;
  /* width: 250px; */
  height: 297px;
  background: #f67280;
  border-radius: 5px;
}

.top {
  display: block;
  height: 30%;
  background: rgba(255, 255, 255, 0.15);
  border-bottom: 0.5px solid;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.top::after {
  display: block;
  height: 12%;
  width: 100%;
  background: black;
}
.top a {
  position: relative;
  top: 7px;
}
.coin {
  font-size: 50px;
}
.Usercoin {
  height: 50%;
  width: 100%;
  text-align: center;
}
.Teamcoin {
  height: 50%;
  width: 100%;
  text-align: center;
}
</style>
