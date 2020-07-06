<template>
  <div style="margin-top: 10px;">
    <!-- Using modifiers -->
    <b-button
      v-b-modal.modal-Lot
      variant="outline-danger"
      class="Mybut"
      @click="query"
    >ล็อตเตอรี่ค้าบ</b-button>
    <!-- The modal -->
    <b-modal
      id="modal-Lot"
      hide-footer
      centered
      size="xl"
      title="ซื้อล็อตเตอรี่มั้ยค้าบ"
      header-bg-variant="warning"
      v-if="users"
    >
      <b-form @submit="buyLottery">
        <ol class="cabin fuselage">
          <li class="row row--1">
            <ol class="seats" type="A">
              <li class="seat" v-for="nums in number" :key="nums">
                <input
                  type="checkbox"
                  :id="'A' + nums"
                  v-model="lottery[nums - 1]"
                  :disabled="boughts[nums - 1]"
                />
                <label :for="'A' + nums">{{ nums }}</label>
              </li>
            </ol>
          </li>
        </ol>
        <p style="color: red;" v-if="isValid">* ตังไม่พอซื้อนะ !</p>
        <div class="buy">
          <a style="margin: 10px;">{{ 'ราคา : ' + costing + ' coin' }}</a>
          <b-button
            class="buybutton"
            variant="primary"
            @click="buyLottery"
            :disabled="isValid"
          >ซื้อเลย !</b-button>
        </div>
        <b-alert style="float: left;" show variant="light">
          <span style="background:#dddddd; color:black">สีเทา</span> คือเลขที่ซื้อไปแล้ว |
          <span style="background:#e9d460; color:black">สีเหลือง</span> คือเลขที่สามารถซื้อได้ |
          <span style="background:#d2527f; color:black">สีชมพู</span> คือเลขที่เลือกจะซื้อ
        </b-alert>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lottery: [],
      boughts: [],
      costing: 0,
    }
  },
  async created() {
    this.$store.commit('setFalseLottery')
  },
  updated() {
    this.boughts = this.$store.getters.getLottery
  },
  async mounted() {
    await this.$store.dispatch('setLotteryAll')
    this.boughts = this.$store.getters.getLottery
  },
  computed: {
    number() {
      var k = []
      for (let i = 1; i <= 100; i++) {
        k.push(i)
      }
      return k
    },
    cost() {
      let costs = 0
      for (let i = 1; i <= 100; i++) {
        this.lottery[i - 1] == true ? (costs += 10) : ''
      }
      return (this.costing = costs)
    },
    bought() {
      return this.$store.getters.getLottery
    },
    users() {
      return this.$store.getters.getUser
    },
    isValid() {
      return (
        this.users.coin < 0 ||
        this.boughts <= 0 ||
        this.users.coin < this.costing
      )
    },
    test() {
      return this.$store.getters.getBetSend
    },
  },
  methods: {
    async buyLottery() {
      this.$store.dispatch('buyLottery', this.lottery)
      this.$store.dispatch('discountMoney', this.cost)
      this.$bvModal.hide('modal-Lot')
    },
    reset() {
      this.costing = 0
      for (let i = 0; i < 100; i++) {
        this.lottery[i] = false
      }
    },
    async query() {
      this.reset()
      this.boughts = this.$store.getters.getLottery
    },
  },
}
</script>

<style scoped>
.Mybut {
  width: 100%;
}
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
.buy {
  float: right;
  margin: 10px;
}
.seats {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.seat {
  display: flex;
  flex: 0 0 4%;
  padding: 5px;
  position: relative;
}
.buybutton {
  width: 150px;
}
/* .seat:nth-child(3) {
  margin-right: 14.28571428571429%;
} */
input[type='checkbox'] {
  position: absolute;
  opacity: 0;
}
input[type='checkbox']:checked + label {
  background: #d2527f;
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
  animation-duration: 300ms;
  animation-fill-mode: both;
}
input[type='checkbox']:disabled + label {
  background: #dddddd;
  /* text-indent: -9999px; */
  overflow: hidden;
}
input[type='checkbox']:disabled:after {
  content: 'X';
  text-indent: 0;
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translate(-50%, 0%);
}
input[type='checkbox']:disabled:hover {
  box-shadow: none;
  cursor: not-allowed;
}
input[type='checkbox']:disabled:hover + label {
  box-shadow: none;
  cursor: not-allowed;
  box-shadow: 0 0 0px 2px #b62c33;
}

label {
  display: block;
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5rem;
  padding: 4px 0;
  background: #e9d460;
  border-radius: 5px;
  animation-duration: 300ms;
  animation-fill-mode: both;
}
label:before {
  content: '';
  position: absolute;
  width: 75%;
  height: 75%;
  top: 1px;
  left: 50%;
  transform: translate(-50%, 0%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 3px;
}
label:hover {
  cursor: pointer;
  box-shadow: 0 0 0px 2px #5c6aff;
}
@keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@media only screen and (max-width: 480px) {
  .seat {
    flex: 0 0 10%;
  }
}
@media only screen and (max-width: 990px) {
  .seat {
    flex: 0 0 10%;
  }
}
</style>
