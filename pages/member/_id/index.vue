<template>
  <div class="content">
    <cointeam />
    <div class="section_area">
      <div class="coin cards">
        <b-card class="text-center">
          <showCoin />
        </b-card>
      </div>
      <div class="evidence cards">
        <showEvidence />
      </div>
      <div class="buttonAll cards" id="buttonDiv">
        <PicturePop :image="userPic" />
        <DonatePop style="margin-top: 10px;" />
        <nuxt-link :to="{ name: 'member-id-bet', params: { id: $route.params.id } }">
          <b-button variant="outline-warning" class="Mybut">เดิมพันฉันและเธอ</b-button>
        </nuxt-link>
        <changepassword />

        <Lottery />
      </div>
      <div class="listfriend cards">
        <TeamList />
      </div>
    </div>
  </div>
</template>

<script>
import showCoin from '@/components/member/CoinShow'
import showEvidence from '@/components/member/EvidenceShow'
import PicturePop from '@/components/member/PicturePop'
import DonatePop from '@/components/member/DonatePop'
import TeamList from '@/components/member/TeamList'
import Lottery from '@/components/member/Lottery'
import changepassword from '@/components/member/changepassword'
import cointeam from '@/components/teamcoin'
export default {
  layout: 'defaultmember',
  components: {
    showCoin,
    showEvidence,
    PicturePop,
    TeamList,
    DonatePop,
    Lottery,
    cointeam,
    changepassword,
  },
  computed: {
    users() {
      return this.$store.getters.getUser
    },
    userPic() {
      return this.$store.getters.getPicture
    },
  },
  asyncData(context) {
    return {
      // userCoin:this.$store.getters.getCoin
    }
  },
}
</script>
<style scoped>
#buttonDiv {
  padding: 15px;
}
.cards {
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
}
.Mybut {
  margin-top: 10px;
  width: 100%;
}
.content {
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 20px;
}
.section_area {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'coin evidence'
    'button friendlist';
  grid-gap: 20px;
  margin-bottom: 10px;
}
.coin {
  grid-area: coin;
}
.evidence {
  grid-area: evidence;
}
.buttonAll {
  grid-area: button;
  background: white;
}
.listfriend {
  grid-area: friendlist;
}
@media only screen and (max-width: 480px) {
  .section_area {
    grid-template-columns: 1fr;
    grid-template-areas:
      'coin ' 'evidence'
      'button' ' friendlist';
    grid-gap: 20px;
  }
}
</style>
