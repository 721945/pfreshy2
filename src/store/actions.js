import { auth } from 'firebase'

export default {
  async nuxtServerInit({ dispatch, commit }, ctx) {
    if (this.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
    }

    if (ctx.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
    }

    if (ctx.app.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
    }

    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user

      console.info(
        'Auth User verified on server-side. User: ',
        authUser,
        'Claims:',
        claims
      )

      await dispatch('onAuthStateChanged', {
        authUser,
        claims,
      })
    }
  },

  // <!--     Member info    -->
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    try {
      const res = await this.$fireStore
        .collection('member')
        .doc(authUser.uid)
        .get()
        .then((doc) => {
          return doc.data()
        })
      const data = { ...res, uid: authUser.uid }
      commit('SET_AUTH_USER', data)
      this.dispatch('LoadTeamcoin', data.team)
    } catch (error) {
      console.log(error)
    }
  },
  async userSignUp({ commit }, data) {
    commit('setLoading', true)
    try {
      await this.$fireAuth
        .createUserWithEmailAndPassword(
          data.username + '@pfreshy.com',
          data.password
        )
        .then((user) => {
          commit('setUser', user)
          commit('setLoading', false)
          this.$router.push('/')
        })
    } catch (e) {
      commit('setError', e.message)
      commit('setLoading', false)
    }
  },
  async signout({ commit }) {
    try {
      await this.$fireAuth.signOut().then((result) => {
        commit('setUser', '')
        this.$router.push('/')
      })
    } catch (e) {
      console.log(e.message)
    }
  },

  // <!--    End member info    -->

  // <!-- Lottery  -->
  async buyLottery({ commit, state }, numball) {
    // console.log(numball);
    const x = numball
    let data = []
    let lot = state.Lottery || []
    for (let i = 0; i < 100; i++) {
      if (numball[i] == true || lot[i] == true) {
        data.push(i + 1)
      }
    }
    const Res = await this.$fireStore
      .collection('Lottery')
      .doc(state.authUser.uid)
      .set({ lottery: data })
    commit('setLottery', x)
  },
  async setLotteryAll({ commit, state }) {
    if (state.authUser) {
      const LotRef = this.$fireStore.collection('Lottery')
      try {
        const res = await LotRef.doc(state.authUser.uid)
          .get()
          .then((doc) => {
            return doc.data()
          })
        // console.log(res)
        if (res) commit('setLotteryAll', res)
      } catch (error) {
        console.log(error)
      }
    } else {
      // console.log('kuay')
    }
  },

  // <!-- End Lottery -->

  // <!-- coin setting -->
  async discountMoney({ commit, state }, cost) {
    const memberRef = this.$fireStore
      .collection('member')
      .doc(state.authUser.uid)
    let coinleft = parseInt(state.authUser.coin) - parseInt(cost)
    const res = await memberRef.update({ coin: coinleft })
    commit('setCoin', coinleft)
  },

  async donate({ commit, state }, coin) {
    try {
      const teamRef = this.$fireStore
        .collection('coin')
        .doc(state.authUser.team)
      const doc = await teamRef.get()
      let coinleft = parseInt(doc.data().coin) + parseInt(coin)
      const res = await teamRef.update({ coin: coinleft })
      // console.log(coinleft)
      commit('setCoinTeam', coinleft)
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },
  async LoadTeamcoin({ commit, state }, team) {
    if (state.authUser) {
      const messageRef = this.$fireStore.collection('coin').doc(team)
      try {
        const messageDoc = await messageRef.get().then((data) => {
          return data.data().coin
        })
        // const tc = messageDoc.data().coin
        commit('setCoinTeam', messageDoc)
        // commit('setCoinTeam', messageDoc.data().coin)
      } catch (e) {
        console.log(e.message)
        return
      }
    }
  },
  async discountTeamCoin({ commit, state }, cost) {
    const teamRef = this.$fireStore.collection('coin').doc(state.authUser.team)
    const doc = await teamRef.get()
    let coinleft = parseInt(doc.data().coin) - parseInt(cost)
    const res = await teamRef.update({ coin: coinleft })
    commit('setCoinTeam', coinleft)
  },

  // <!-- End coin setting -->

  // <!-- Friend -->
  async LoadFriendlist({ commit, state }) {
    if (state.authUser) {
      const FriendRef = this.$fireStore.collection('member')
      try {
        const EveDoc = await FriendRef.where('team', '==', state.authUser.team)
          .get()
          .then((doc) => {
            return doc.docs
          })
        commit('setFriendlist', EveDoc)
      } catch (e) {
        console.log(e.message)
        return
      }
    }
  },
  async getAllMember({ commit, state }) {
    if (state.authUser) {
      const FriendRef = this.$fireStore.collection('member')
      try {
        const EveDoc = await FriendRef.where('role', '==', 'member')
          .get()
          .then((doc) => {
            return doc.docs
          })
        commit('setFriendAll', EveDoc)
      } catch (e) {
        console.log(e.message)
        return
      }
    }
  },
  async getSearchMember({ commit, state }, uid) {
    if (state.authUser) {
      const FriendRef = this.$fireStore.collection('member')
      try {
        const EveDoc = await FriendRef.doc(uid)
          .get()
          .then((doc) => {
            return doc.data()
          })
        commit('setFriendSearch', EveDoc)
      } catch (e) {
        console.log(e.message)
        return
      }
    }
  },

  // <!-- End Friend -->

  // <!-- Evidence -->
  async loadEvidence({ commit, state }) {
    if (state.authUser) {
      try {
        const teamRef = this.$fireStore
          .collection('Evidence')
          .doc(state.authUser.team)
        const doc = await teamRef.get()
        const have = parseInt(doc.data().bought)

        const Eve = await this.$fireStore
          .collection('Evidence')
          .doc('all')
          .get()
        commit('setEvidence', { ...Eve.data(), have: have })
      } catch (e) {
        console.log(e.message)
        return
      }
    }
  },
  async buyEve({ commit, state }, buy) {
    try {
      const teamRef = this.$fireStore
        .collection('Evidence')
        .doc(state.authUser.team)
      const doc = await teamRef.get()
      const before = parseInt(doc.data().bought)
      const boughts = before + parseInt(buy)
      const res = await teamRef.update({ bought: boughts })
      const Eve = await this.$fireStore.collection('Evidence').doc('all').get()
      commit('setEve', { ...Eve.data(), before: before, bought: boughts })
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },

  // <!-- End Evidence -->

  // <!-- Bet -->
  async createBet({ commit }, form) {
    const BetRef = this.$fireStore.collection('Bet')
    try {
      const Res = await BetRef.doc().set(form)
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  async LoadBetSend({ commit, state }) {
    const BetRef = this.$fireStore.collection('Bet')
    try {
      const Res = await BetRef.where('player1', '==', state.authUser.uid)
        .where('accept', '==', false)
        .get()
      commit('setBetSend', Res)
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  async LoadBetGot({ commit, state }) {
    const BetRef = this.$fireStore.collection('Bet')
    try {
      const Res = await BetRef.where('player2', '==', state.authUser.uid).get()
      commit('setBetGot', Res)
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  async LoadBetAccept({ commit, state }) {
    const BetRef = this.$fireStore.collection('Bet')
    try {
      const Res = await BetRef.where('player2', '==', state.authUser.uid)
        .where('accept', '==', true)
        .get()
      const Res2 = await BetRef.where('player1', '==', state.authUser.uid)
        .where('accept', '==', true)
        .get()
      const ResAll = Res.docs.concat(Res2.docs)
      commit('setBetAccept', ResAll)
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  async LoadBetResult({ commit, state }) {
    const BetRef = this.$fireStore.collection('BetResult')
    try {
      const Res = await BetRef.where('player2', '==', state.authUser.uid).get()
      const Res2 = await BetRef.where('player1', '==', state.authUser.uid).get()
      const ResAll = Res.docs.concat(Res2.docs)
      commit('setBetResult', ResAll)
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  async BetAccept({ commit }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      // console.log(bet)
      const res = await teamRef.update({ accept: true })
      commit('setAccepted', bet)
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },
  async BetRefuse({ commit }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      const res = await teamRef.delete()
      bet.read = false
      const insert = await this.$fireStore
        .collection('BetResult')
        .doc(bet.Betid)
        .set(bet)
      commit('setRefuse', bet)
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },

  async BetCancel({ commit }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      const res = await teamRef.delete()

      commit('setCancel', bet)
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },
  async BetRefund({ commit }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      const res = await teamRef.delete()

      const memberRef = this.$fireStore.collection('member').doc(bet.player1)
      const memData = await memberRef.get().then((data) => {
        return data.data()
      })
      console.log(memData)
      let coinleft = parseInt(memData.coin) + parseInt(bet.coin)
      const Up = await memberRef.update({ coin: coinleft })
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },
  async BetWin({ commit, state }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      const res = await teamRef.get()
      const x = res.data()
      if (x.winner != '') {
        if (x.winner == state.authUser.uid) alert('ผู้ชนะคือคุณไง !')
        else alert('มีคนกดชนะไปแล้ว ! ถ้าถูกโกงโปรดแจ้งรุ่นพี่นะจ้ะ :D')
      } else {
        if (x.loser != '') {
          if (x.loser != state.authUser.uid) {
            bet.winner = state.authUser.uid
            const insert = await this.$fireStore
              .collection('BetResult')
              .doc(bet.Betid)
              .set(bet)
            const delete1 = await teamRef.delete()

            const memberRef = this.$fireStore
              .collection('member')
              .doc(state.authUser.uid)
            const memData = await memberRef.get().then((data) => {
              return data.data()
            })
            let coinleft = parseInt(memData.coin) + parseInt(bet.coin) * 2
            const res = await memberRef.update({ coin: coinleft })
            commit('setCoin', coinleft)
            commit('setWinLose', bet)
          } else {
            alert('กดแพ้ไปแล้วไม่ใช่หรอคุณ ?')
          }
        } else {
          const update = await teamRef.update({ winner: state.authUser.uid })
        }
      }
    } catch (e) {
      console.log('Error ! ', e)
    }
  },
  async BetLose({ commit, state }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      // const res = await teamRef.delete();
      const res = await teamRef.get()
      const x = res.data()
      if (x.loser != '') {
        if (x.loser == state.authUser.uid) alert('อยากแพ้ซ้ำซ้อนหรือไงกัน !')
        else alert('มีคนกดแพ้ไปแล้ว !')
      } else {
        if (x.winner != '') {
          if (x.winner != state.authUser.uid) {
            bet.loser = state.authUser.uid
            const insert = await this.$fireStore
              .collection('BetResult')
              .doc(bet.Betid)
              .set(bet)
            const delete1 = await teamRef.delete()
            const memberRef = this.$fireStore.collection('member').doc(x.winner)
            const memData = await memberRef.get().then((data) => {
              return data.data()
            })
            console.log(memData)
            let coinleft = parseInt(memData.coin) + parseInt(bet.coin) * 2
            const res = await memberRef.update({ coin: coinleft })
            commit('setWinLose', bet)
          } else {
            alert('อยากแพ้ขนาดนั้นเชียวหรอ !')
          }
          // ย้า่ยไป Result
        } else {
          // set Winner
          const update = await teamRef.update({ loser: state.authUser.uid })
        }
      }
    } catch (e) {
      console.log('Error ! ', e)
    }
  },

  // <!-- End Bet -->

  // <!-- Admin -->
  async addMemberNoMail({ commit }, form) {
    const memberRef = this.$fireStore.collection('member').doc()
    try {
      const Res = await memberRef.set(form)
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  async getAllTeamCoin({ commit }, form) {
    try {
      const docRef = this.$fireStore.collection('coin')
      const doc = await docRef.get()
      commit('setAllTeamCoin', doc)
    } catch (error) {
      console.log(error.message)
    }
  },
  async discountCoinTeamStaff({ commit }, form) {
    try {
      const teamRef = this.$fireStore.collection('coin').doc(form.team)
      const doc = await teamRef.get()
      let coinleft = parseInt(doc.data().coin) - parseInt(form.coin)
      const res = await teamRef.update({ coin: coinleft })
      commit('setTeamCoinStaff', { ...form, coin: coinleft })
    } catch (error) {
      console.log(error.message)
    }
  },
  async addCoin({ commit }, form) {
    try {
      const memberRef = this.$fireStore.collection('member').doc(form.uid)
      const doc = await memberRef.get()
      let coinleft = parseInt(doc.data().coin) + parseInt(form.coin)
      const res = await memberRef.update({ coin: coinleft })
      commit('setMemberCoin', { ...form, coinleft: coinleft })
    } catch (error) {
      console.log(error.message)
    }
  },
  async addCoinS({ commit }, form) {
    try {
      const memberRef = this.$fireStore.collection('member').doc(form.uid)
      const doc = await memberRef.get()
      let coinleft = parseInt(doc.data().coin) + parseInt(form.coin)
      const res = await memberRef.update({ coin: coinleft })
      commit('setMemberCoinS', { ...form, coinleft: coinleft })
    } catch (error) {
      console.log(error.message)
    }
  },
  async AddGroup({ commit, state }, form) {
    try {
      let x = JSON.stringify(form)
      x = JSON.parse(x)
      x.forEach((element) => {
        delete element.picture
        delete element.role
        delete element.coin
      })
      const memberRef = this.$fireStore
        .collection('group')
        .doc(state.authUser.group)
      const doc1 = await memberRef.get()
      let c = doc1.data()
      c = c.g
      let o = []
      let check = false
      for (let Cindex in c) {
        o.push(c[Cindex])
      }
      x.forEach((element) => {
        check = false
        for (let Cindex in c) {
          if (c[Cindex].uid == element.uid) {
            check = true
          }
        }

        if (check == false) {
          if (!o.includes(element)) {
            o.push(element)
          }
        }
      })
      const doc = await memberRef.set({ g: { ...o } })
      commit('setGroup', o)
    } catch (error) {
      console.log(error.message)
    }
  },
  async LoadGroup({ commit, state }) {
    try {
      const memberRef = this.$fireStore
        .collection('group')
        .doc(state.authUser.group)
      const doc = await memberRef.get()
      commit('LoadGroup', doc.data().g)
    } catch (error) {
      console.log(error.message)
    }
  },
  async AddCoinFromGroup({ commit, state }, form) {
    try {
      let w = JSON.parse(JSON.stringify(form.data))
      let o = []
      let check = false
      w.forEach(async (data) => {
        try {
          const memberRef = this.$fireStore.collection('member').doc(data.uid)
          const doc = await memberRef.get()
          let coinleft = parseInt(doc.data().coin) + parseInt(form.coin)
          const res = await memberRef.update({ coin: coinleft })
          commit('setGroupCoin', { ...data, coinleft: coinleft })
        } catch (error) {
          console.log(error.message)
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  },
  async DeletMemberFromGroup({ commit, state }, form) {
    try {
      let w = JSON.parse(JSON.stringify(form))
      w.forEach((element) => {
        delete element.picture
        delete element.role
        delete element.coin
      })
      const memberRef = this.$fireStore
        .collection('group')
        .doc(state.authUser.group)
      const doc1 = await memberRef.get()
      let c = doc1.data()
      c = c.g
      let o = []
      let check = false
      for (let Cindex in c) {
        check = false
        w.forEach((element) => {
          if (c[Cindex].uid == element.uid) {
            check = true
          }
        })

        if (check == false) {
          if (!o.includes(c[Cindex])) {
            o.push(c[Cindex])
          }
        }
      }
      const doc = await memberRef.set({ g: { ...o } })
      commit('setDGroup', o)
    } catch (error) {
      console.log(error.message)
    }
  },
  async LoadBetStaff({ commit, state }) {
    commit('resetBetStaff', '')
    const BetRef = this.$fireStore.collection('BetResult')
    try {
      let friends = state.allfriend
      friends.forEach(async (mem) => {
        console.log(mem)
        const Res = await BetRef.where('player2', '==', mem.uid).get()
        const Res2 = await BetRef.where('player1', '==', mem.uid).get()
        const ResAll = Res.docs.concat(Res2.docs)
        // console.log({ data: ResAll, uid: mem.uid })
        // console.log({ data: ResAll, uid: mem.uid })
        commit('setBetStaff', { data: ResAll, uid: mem.uid })
      })
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  // <!-- End Admin -->
}
