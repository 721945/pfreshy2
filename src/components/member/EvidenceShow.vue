<template>
  <div class="Ebox">
    <b-card header="หลักฐานที่มี" class="text-center" header-bg-variant="info">
      <b-button
        @click="query"
        class="Ebox2"
        variant="outline-primary"
        v-b-modal.modal-eve
      >ซื้อหลักฐาน</b-button>
      <div class="Evidence">
        <b-list-group
          v-if="evidences.length && users"
          :class="[users ? (users.boss == true ? 'yesboss' : 'noboss') : '']"
          style="text-align: left;"
        >
          <b-list-group-item v-for="(evidence, index) in evidences" :key="evidence">
            <span>{{ index + 1 + ') ' + evidence }}</span>
          </b-list-group-item>
        </b-list-group>
        <span v-else class="Noev">ไม่มีหลักฐานจ้า</span>
      </div>
    </b-card>

    <b-modal
      id="modal-eve"
      hide-footer
      centered
      size="md"
      header-bg-variant="info"
      title="ซื้อหลักฐาน"
    >
      <div class="cont">
        <span class="showmoney">{{ 'TEAM COIN : ' + cointeam + ' coins' }}</span>
        <span class="showmoney2">{{ 'ราคา : ' + cost + ' coins' }}</span>
        <b-form @submit="buy">
          <b-input
            class="inputbox"
            type="number"
            v-model.number="tobuy"
            min="0"
            :max="this.cointeam / 500"
          ></b-input>
          <b-button class="Mybuts" @click="buy" variant="outline-success" :disabled="isValid">ซื้อ</b-button>
        </b-form>
        <b-alert style="margin-top: 5px;" show variant="warning">หลักฐานชิ้นละ 500 coin</b-alert>
        <p v-if="isValid">
          <b-alert style="margin-top: 5px;" show variant="danger">ไม่พอนะ !</b-alert>
        </p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      evidences: [],
      cointeam: 0,
      value: 0,
      tobuy: 0,
    }
  },
  async mounted() {
    await this.$store.dispatch('loadEvidence')
    this.evidences = this.$store.getters.getEvidence
    this.cointeam = await this.$store.getters.getCoinTeam
  },
  computed: {
    evidencez() {
      return this.$store.getters.getEvidence
    },
    users() {
      return this.$store.getters.getUser
    },
    isValid() {
      return this.tobuy < 0 || this.cointeam <= 0 || this.cointeam < this.cost
    },
    cost() {
      return this.tobuy * 500
    },
  },
  beforeDestroy() {
    this.$store.commit('setEvidence', '')
  },
  methods: {
    buy() {
      this.$store.dispatch('discountTeamCoin', this.cost)
      this.$store.dispatch('buyEve', this.tobuy)
      this.$bvModal.hide('modal-eve')
    },
    async query() {
      this.cointeam = await this.$store.getters.getCoinTeam
    },
  },
}
</script>

<style scoped>
.noboss {
  height: 250px;
}
.card-body {
  height: 288px;
}
.Noev {
  font-size: 40px;
  padding-top: 0px;
}
.Evidence {
  max-height: 200px;
  width: 100%;
  overflow: auto;
}
.Ebox {
  width: 100%;
}
.Ebox2 {
  width: 100%;
  margin-bottom: 10px;
}
.font {
  font-family: 'Kanit', sans-serif;
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 40px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 40px;
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.cont {
  max-height: 300px;
}
.showmoney {
  margin: 0 auto;
}
.showmoney2 {
  float: right;
  margin: 0 auto;
}
.Mybut {
  width: 100%;
}
.Mybuts {
  width: 100%;
  margin-top: 10px;
}
.inputbox {
  margin-top: 10px;
}
</style>
