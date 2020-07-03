import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, form) => {
    state.authUser = form
  },
  setError(state, payload) {
    state.error = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setEvidence(state, payload) {
    if (payload.have != 0 && payload != '') {
      for (let i = 0; i < payload.have; i++) {
        state.evidence.push(payload.message[i])
      }
    } else state.evidence = []
  },
  setEve(state, payload) {
    if (payload.bought != 0) {
      for (let i = payload.before; i < payload.bought; i++) {
        state.evidence.push(payload.message[i])
      }
    } else state.evidence = []
  },
  setFriendlist(state, payload) {
    if (payload != '') {
      payload.forEach((doc) => {
        state.friendlist.push({ ...doc.data() })
      })
    } else state.friendlist = []
  },
  setFriendAll(state, payload) {
    if (payload != '') {
      payload.forEach((doc) => {
        if (doc.id != state.authUser.uid) {
          state.allfriend.push({ ...doc.data(), uid: doc.id })
        }
      })
    } else state.allfriend = []
  },
  setFriendSearch(state, payload) {
    if (payload) state.allfriend.push(payload)
    else state.allfriend = []
  },
  setCoin(state, payload) {
    state.authUser.coin = payload
  },
  setCoinTeam(state, payload) {
    state.cointeam = payload
  },
  setFalseLottery(state, payload) {
    for (let i = 0; i < 100; i++) {
      state.Lottery[i] = false
    }
  },
  setLottery(state, payload) {
    for (let i = 0; i < 100; i++) {
      if (payload[i] == true) {
        state.Lottery[i] = true
      }
    }
  },
  setLotteryAll(state, payload) {
    for (let i = 0; i < payload.lottery.length; i++) {
      state.Lottery[payload.lottery[i] - 1] = true
    }
  },
  setBetSend(state, payload) {
    if (payload != '') {
      payload.docs.forEach((doc) => {
        state.bet.betSend.push({
          ...doc.data(),
          Betid: doc.id,
        })
      })
    } else state.bet.betSend = []
  },
  setBetGot(state, payload) {
    if (payload != '') {
      payload.docs.forEach((doc) => {
        if (doc.data().accept == false) {
          state.bet.betGot.push({
            ...doc.data(),
            Betid: doc.id,
          })
        }
      })
    } else state.bet.betGot = []
  },
  setBetAccept(state, payload) {
    if (payload != '') {
      // console.log(payload);
      payload.forEach((doc) => {
        state.bet.betAccept.push({
          ...doc.data(),
          Betid: doc.id,
        })
      })
      // console.log(state.bet.betAccept);
    } else state.bet.betAccept = []
  },
  setBetResult(state, payload) {
    if (payload != '') {
      payload.forEach((doc) => {
        state.bet.betResult.push({
          ...doc.data(),
          Betid: doc.id,
        })
      })
    } else state.bet.betResult = []
  },
  setAccepted(state, payload) {
    const b = state.bet.betGot
    const a = b.filter((x) => {
      return x.Betid != payload.Betid
    })
    state.bet.betAccept.push(payload)
    state.bet.betGot = a
  },
  setCancel(state, payload) {
    const b = state.bet.betSend
    const a = b.filter((x) => {
      return x.Betid != payload.Betid
    })
    state.bet.betSend = a
  },
  setWinLose(state, payload) {
    const b = state.bet.betAccept
    const a = b.filter((x) => {
      return x.Betid != payload.Betid
    })
    state.bet.betResult.push(payload)
    state.bet.betAccept = a
  },
  setRefuse(state, payload) {
    const b = state.bet.betGot
    const a = b.filter((x) => {
      return x.Betid != payload.Betid
    })
    state.bet.betGot = a
  },
  setAllTeamCoin(state, payload) {
    if (payload != '') {
      payload.forEach((doc) => {
        state.allteamcoin.push({
          ...doc.data(),
          team: doc.id,
        })
      })
    } else state.allteamcoin = []
  },
}
