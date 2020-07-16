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
    const date = Date().toLocaleString()
    const LogRef = this.$fireStore.collection('log').doc().set({
      title: 'Buy Lottery',
      data: data,
      date: date,
      by: state.authUser.name,
    })
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
    if (coinleft >= 0) {
      const res = await memberRef.update({ coin: coinleft })
      commit('setCoin', coinleft)
      const date = Date().toLocaleString()
      const LogRef = this.$fireStore
        .collection('log')
        .doc()
        .set({
          title: 'Use coin',
          data: { from: state.authUser.coin, to: coinleft, cost: cost },
          by: state.authUser.name,
          date: date,
        })
    }
  },

  async donate({ commit, state }, coin) {
    try {
      const teamRef = this.$fireStore
        .collection('coin')
        .doc(state.authUser.team)
      const doc = await teamRef.get()
      let coinleft = parseInt(doc.data().coin) + parseInt(coin)
      const res = await teamRef.update({ coin: coinleft })
      commit('setCoinTeam', coinleft)
      const date = Date().toLocaleString()
      const LogRef = this.$fireStore
        .collection('log')
        .doc()
        .set({
          title: 'Donate Coin',
          data: {
            cost: coin,
            team: state.authUser.team,
            from: doc.data().coin,
            to: coinleft,
          },
          by: state.authUser.name,
          date: date,
        })
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
        commit('setCoinTeam', messageDoc)
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
    const date = Date().toLocaleString()
    const LogRef = this.$fireStore
      .collection('log')
      .doc()
      .set({
        title: 'Use Team Coin',
        data: { from: doc.data().coin, to: coinleft, cost: cost },
        by: state.authUser.name,
        date: date,
      })
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
      if (boughts < 49) {
        const res = await teamRef.update({ bought: boughts })
        const Eve = await this.$fireStore
          .collection('Evidence')
          .doc('all')
          .get()
        commit('setEve', { ...Eve.data(), before: before, bought: boughts })
        const date = Date().toLocaleString()
        const LogRef = this.$fireStore
          .collection('log')
          .doc()
          .set({
            title: 'Buy Evidence',
            data: { from: before, to: boughts, value: buy },
            by: state.authUser.name,
            date: date,
          })
      }
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },

  // <!-- End Evidence -->

  // <!-- Bet -->
  async createBet({ commit, state }, form) {
    const BetRef = this.$fireStore.collection('Bet')
    try {
      const date = Date().toLocaleString()
      const Res = await BetRef.doc().set({ ...form, date: date })
      const AlertRef = this.$fireStore.collection('alert').doc(form.player2)
      const AlertGet = await AlertRef.get()
      let Alert = AlertGet.data()
      if (Alert) {
        if (Alert.unread) {
          Alert.unread.push({
            title: 'คุณได้รับคำท้า',
            data: 'คำท้าคือ ' + form.topic + ' มูลค่า ' + form.coin + ' coin ',
          })
          AlertRef.update(Alert)
        } else {
          AlertRef.update({
            unread: [
              {
                title: 'คุณได้รับคำท้า',
                data:
                  'คำท้าคีอ ' + form.topic + ' มูลค่า ' + form.coin + ' coin ',
              },
            ],
          })
        }
      } else {
        AlertRef.set({
          unread: [
            {
              title: 'คุณได้รับคำท้า',
              data:
                'คำท้าคีอ ' + form.topic + ' มูลค่า ' + form.coin + ' coin ',
            },
          ],
        })
      }
      const LogRef = this.$fireStore.collection('log').doc().set({
        title: 'Bet create',
        data: form,
        by: state.authUser.name,
        date: date,
      })
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
  async BetAccept({ commit, state }, bet) {
    try {
      const date = Date().toLocaleString()
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      // console.log(bet)
      const res = await teamRef.update({ accept: true, date: date })
      commit('setAccepted', bet)

      const AlertRef = this.$fireStore.collection('alert').doc(bet.player1)
      const AlertGet = await AlertRef.get()
      let Alert = AlertGet.data()
      if (Alert) {
        if (Alert.unread) {
          Alert.unread.push({
            title: 'คำท้าของคุณได้รับการยอมรับแล้ว',
            data: 'คำท้าคีอ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
          })
          AlertRef.update(Alert)
        } else {
          AlertRef.update({
            unread: [
              {
                title: 'คำท้าของคุณได้รับการยอมรับแล้ว',
                data:
                  'คำท้าคีอ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
              },
            ],
          })
        }
      } else {
        AlertRef.set({
          unread: [
            {
              title: 'คำท้าของคุณได้รับการยอมรับแล้ว',
              data: 'คำท้าคีอ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
            },
          ],
        })
      }

      const LogRef = this.$fireStore.collection('log').doc().set({
        title: 'Bet accept',
        data: bet,
        by: state.authUser.name,
        date: date,
      })
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },
  async BetRefuse({ commit, state }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      const res = await teamRef.delete()

      commit('setRefuse', bet)

      const AlertRef = this.$fireStore.collection('alert').doc(bet.player1)
      const AlertGet = await AlertRef.get()
      let Alert = AlertGet.data()
      if (Alert) {
        if (Alert.unread) {
          Alert.unread.push({
            title: 'คำท้าของคุณถูกปฏิเสธ',
            data:
              'คำท้าคีอ ' +
              bet.topic +
              ' มูลค่า ' +
              bet.coin +
              ' coin ' +
              ' ได้ทำการคืน coin ให้แล้ว',
          })
          AlertRef.update(Alert)
        } else {
          AlertRef.update({
            unread: [
              {
                title: 'คำท้าของคุณถูกปฏิเสธ',
                data:
                  'คำท้าคีอ ' +
                  bet.topic +
                  ' มูลค่า ' +
                  bet.coin +
                  ' coin ' +
                  ' ได้ทำการคืน coin ให้แล้ว',
              },
            ],
          })
        }
      } else {
        AlertRef.set({
          unread: [
            {
              title: 'คำท้าของคุณถูกปฏิเสธ',
              data:
                'คำท้าคีอ ' +
                bet.topic +
                ' มูลค่า ' +
                bet.coin +
                ' coin ' +
                ' ได้ทำการคืน coin ให้แล้ว',
            },
          ],
        })
      }

      const date = Date().toLocaleString()
      const LogRef = this.$fireStore.collection('log').doc().set({
        title: 'Bet Refuse',
        data: bet,
        by: state.authUser.name,
        date: date,
      })
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },

  async BetCancel({ commit, state }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      const res = await teamRef.delete()
      const AlertRef = this.$fireStore.collection('alert').doc(bet.player2)
      const AlertGet = await AlertRef.get()
      let Alert = AlertGet.data()
      if (Alert) {
        if (Alert.unread) {
          Alert.unread.push({
            title: 'คำท้าถูกยกเลิก',
            data: 'คำท้าคือ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
          })
          AlertRef.update(Alert)
        } else {
          AlertRef.update({
            unread: [
              {
                title: 'คำท้าถูกยกเลิก',
                data:
                  'คำท้าคือ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
              },
            ],
          })
        }
      } else {
        AlertRef.set({
          unread: [
            {
              title: 'คำท้าถูกยกเลิก',
              data: 'คำท้าคือ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
            },
          ],
        })
      }
      commit('setCancel', bet)
      const date = Date().toLocaleString()
      const LogRef = this.$fireStore.collection('log').doc().set({
        title: 'Bet Cancel',
        data: bet,
        by: state.authUser.name,
        date: date,
      })
    } catch (e) {
      console.log('Transaction failure:', e)
    }
  },
  async BetRefund({ commit, state }, bet) {
    try {
      const teamRef = this.$fireStore.collection('Bet').doc(bet.Betid)
      const res = await teamRef.delete()

      const memberRef = this.$fireStore.collection('member').doc(bet.player1)
      const memData = await memberRef.get().then((data) => {
        return data.data()
      })
      let coinleft = parseInt(memData.coin) + parseInt(bet.coin)
      const Up = await memberRef.update({ coin: coinleft })
      const date = Date().toLocaleString()
      const LogRef = this.$fireStore
        .collection('log')
        .doc()
        .set({
          title: 'Bet ReFund',
          data: { ...bet, coin: bet.coin },
          by: state.authUser.name,
          date: date,
        })
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
            const date = Date().toLocaleString()
            bet.winner = state.authUser.uid
            const insert = await this.$fireStore
              .collection('BetResult')
              .doc(bet.Betid)
              .set({ ...bet, date: date })
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

            const AlertRef = this.$fireStore
              .collection('alert')
              .doc(bet.player1)
            const AlertGet = await AlertRef.get()
            let Alert = AlertGet.data()
            if (Alert) {
              if (Alert.unread) {
                Alert.unread.push({
                  title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                  data:
                    'คำท้าคีอ ' +
                    bet.topic +
                    ' มูลค่า ' +
                    bet.coin +
                    ' coin ' +
                    'ผู้ชนะคือ ' +
                    state.authUser.name,
                })
                AlertRef.update(Alert)
              } else {
                AlertRef.update({
                  unread: [
                    {
                      title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ' +
                        'ผู้ชนะคือ ' +
                        state.authUser.name,
                    },
                  ],
                })
              }
            } else {
              AlertRef.set({
                unread: [
                  {
                    title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ' +
                      'ผู้ชนะคือ ' +
                      state.authUser.name,
                  },
                ],
              })
            }
            const AlertRef2 = this.$fireStore
              .collection('alert')
              .doc(bet.player2)
            const AlertGet2 = await AlertRef2.get()
            let Alert2 = AlertGet2.data()
            if (AlertGet2) {
              if (Alert2.unread) {
                Alert2.unread.push({
                  title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                  data:
                    'คำท้าคีอ ' +
                    bet.topic +
                    ' มูลค่า ' +
                    bet.coin +
                    ' coin ' +
                    'ผู้ชนะคือ ' +
                    state.authUser.name,
                })
                AlertRef2.update(Alert)
              } else {
                AlertRef2.update({
                  unread: [
                    {
                      title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ' +
                        'ผู้ชนะคือ ' +
                        state.authUser.name,
                    },
                  ],
                })
              }
            } else {
              AlertRef2.set({
                unread: [
                  {
                    title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ' +
                      'ผู้ชนะคือ ' +
                      state.authUser.name,
                  },
                ],
              })
            }
            const LogRef = this.$fireStore
              .collection('log')
              .doc()
              .set({
                title: 'Win Press',
                data: { ...bet, winner: state.authUser.uid },
                by: state.authUser.name,
                date: date,
              })
          } else {
            alert('กดแพ้ไปแล้วไม่ใช่หรอคุณ ?')
          }
        } else {
          const update = await teamRef.update({ winner: state.authUser.uid })
          if (bet.player1 == state.authUser.uid) {
            const AlertRef = this.$fireStore
              .collection('alert')
              .doc(bet.player2)
            const AlertGet = await AlertRef.get()
            let Alert = AlertGet.data()
            if (Alert) {
              if (Alert.unread) {
                Alert.unread.push({
                  title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                  data:
                    'คำท้าคีอ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
                })
                AlertRef.update(Alert)
              } else {
                AlertRef.update({
                  unread: [
                    {
                      title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ',
                    },
                  ],
                })
              }
            } else {
              AlertRef.set({
                unread: [
                  {
                    title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ',
                  },
                ],
              })
            }
          } else {
            const AlertRef = this.$fireStore
              .collection('alert')
              .doc(bet.player1)
            const AlertGet = await AlertRef.get()
            let Alert = AlertGet.data()
            if (Alert) {
              if (Alert.unread) {
                Alert.unread.push({
                  title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                  data:
                    'คำท้าคีอ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
                })
                AlertRef.update(Alert)
              } else {
                AlertRef.update({
                  unread: [
                    {
                      title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ',
                    },
                  ],
                })
              }
            } else {
              AlertRef.set({
                unread: [
                  {
                    title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ',
                  },
                ],
              })
            }
          }

          const date = Date().toLocaleString()
          const LogRef = this.$fireStore
            .collection('log')
            .doc()
            .set({
              title: 'Win Press',
              data: { ...bet, winner: state.authUser.uid },
              by: state.authUser.name,
              date: date,
            })
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
            const date = Date().toLocaleString()
            const insert = await this.$fireStore
              .collection('BetResult')
              .doc(bet.Betid)
              .set({ ...bet, date: date })
            const delete1 = await teamRef.delete()
            const memberRef = this.$fireStore.collection('member').doc(x.winner)
            const memData = await memberRef.get().then((data) => {
              return data.data()
            })
            console.log(memData)
            let coinleft = parseInt(memData.coin) + parseInt(bet.coin) * 2
            const res = await memberRef.update({ coin: coinleft })
            commit('setWinLose', bet)
            if (bet.player1 == state.authUser.uid) {
              const AlertRef = this.$fireStore
                .collection('alert')
                .doc(bet.player1)
              const AlertGet = await AlertRef.get()
              let Alert = AlertGet.data()
              if (Alert) {
                if (Alert.unread) {
                  Alert.unread.push({
                    title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ' +
                      'ผู้ชนะคือ ' +
                      bet.name2,
                  })
                  AlertRef.update(Alert)
                } else {
                  AlertRef.update({
                    unread: [
                      {
                        title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                        data:
                          'คำท้าคีอ ' +
                          bet.topic +
                          ' มูลค่า ' +
                          bet.coin +
                          ' coin ' +
                          'ผู้ชนะคือ ' +
                          bet.name2,
                      },
                    ],
                  })
                }
              } else {
                AlertRef.set({
                  unread: [
                    {
                      title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ' +
                        'ผู้ชนะคือ ' +
                        bet.name2,
                    },
                  ],
                })
              }
              const AlertRef2 = this.$fireStore
                .collection('alert')
                .doc(bet.player2)
              const AlertGet2 = await AlertRef2.get()
              let Alert2 = AlertGet2.data()
              if (AlertGet2) {
                if (Alert2.unread) {
                  Alert2.unread.push({
                    title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ' +
                      'ผู้ชนะคือ ' +
                      bet.name2,
                  })
                  AlertRef2.update(Alert)
                } else {
                  AlertRef2.update({
                    unread: [
                      {
                        title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                        data:
                          'คำท้าคีอ ' +
                          bet.topic +
                          ' มูลค่า ' +
                          bet.coin +
                          ' coin ' +
                          'ผู้ชนะคือ ' +
                          bet.name2,
                      },
                    ],
                  })
                }
              } else {
                AlertRef2.set({
                  unread: [
                    {
                      title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ' +
                        'ผู้ชนะคือ ' +
                        bet.name2,
                    },
                  ],
                })
              }
            } else {
              const AlertRef = this.$fireStore
                .collection('alert')
                .doc(bet.player1)
              const AlertGet = await AlertRef.get()
              let Alert = AlertGet.data()
              if (Alert) {
                if (Alert.unread) {
                  Alert.unread.push({
                    title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ' +
                      'ผู้ชนะคือ ' +
                      bet.name1,
                  })
                  AlertRef.update(Alert)
                } else {
                  AlertRef.update({
                    unread: [
                      {
                        title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                        data:
                          'คำท้าคีอ ' +
                          bet.topic +
                          ' มูลค่า ' +
                          bet.coin +
                          ' coin ' +
                          'ผู้ชนะคือ ' +
                          bet.name1,
                      },
                    ],
                  })
                }
              } else {
                AlertRef.set({
                  unread: [
                    {
                      title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ' +
                        'ผู้ชนะคือ ' +
                        bet.name1,
                    },
                  ],
                })
              }
              const AlertRef2 = this.$fireStore
                .collection('alert')
                .doc(bet.player2)
              const AlertGet2 = await AlertRef2.get()
              let Alert2 = AlertGet2.data()
              if (AlertGet2) {
                if (Alert2.unread) {
                  Alert2.unread.push({
                    title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ' +
                      'ผู้ชนะคือ ' +
                      bet.name1,
                  })
                  AlertRef2.update(Alert)
                } else {
                  AlertRef2.update({
                    unread: [
                      {
                        title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                        data:
                          'คำท้าคีอ ' +
                          bet.topic +
                          ' มูลค่า ' +
                          bet.coin +
                          ' coin ' +
                          'ผู้ชนะคือ ' +
                          bet.name1,
                      },
                    ],
                  })
                }
              } else {
                AlertRef2.set({
                  unread: [
                    {
                      title: 'คำท้าของคุณได้รับผลลัพธ์แล้ว',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ' +
                        'ผู้ชนะคือ ' +
                        bet.name1,
                    },
                  ],
                })
              }
            }
            const LogRef = this.$fireStore
              .collection('log')
              .doc()
              .set({
                title: 'lose Press',
                data: { ...bet, loser: state.authUser.uid },
                by: state.authUser.name,
                date: date,
              })
          } else {
            alert('อยากแพ้ขนาดนั้นเชียวหรอ !')
          }
        } else {
          if (bet.player1 == state.authUser.uid) {
            const AlertRef = this.$fireStore
              .collection('alert')
              .doc(bet.player2)
            const AlertGet = await AlertRef.get()
            let Alert = AlertGet.data()
            if (Alert) {
              if (Alert.unread) {
                Alert.unread.push({
                  title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                  data:
                    'คำท้าคีอ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
                })
                AlertRef.update(Alert)
              } else {
                AlertRef.update({
                  unread: [
                    {
                      title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ',
                    },
                  ],
                })
              }
            } else {
              AlertRef.set({
                unread: [
                  {
                    title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ',
                  },
                ],
              })
            }
          } else {
            const AlertRef = this.$fireStore
              .collection('alert')
              .doc(bet.player1)
            const AlertGet = await AlertRef.get()
            let Alert = AlertGet.data()
            if (Alert) {
              if (Alert.unread) {
                Alert.unread.push({
                  title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                  data:
                    'คำท้าคีอ ' + bet.topic + ' มูลค่า ' + bet.coin + ' coin ',
                })
                AlertRef.update(Alert)
              } else {
                AlertRef.update({
                  unread: [
                    {
                      title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                      data:
                        'คำท้าคีอ ' +
                        bet.topic +
                        ' มูลค่า ' +
                        bet.coin +
                        ' coin ',
                    },
                  ],
                })
              }
            } else {
              AlertRef.set({
                unread: [
                  {
                    title: 'คำท้าของคุณกำลังรอผลลัพธ์ฝั่งคุณ',
                    data:
                      'คำท้าคีอ ' +
                      bet.topic +
                      ' มูลค่า ' +
                      bet.coin +
                      ' coin ',
                  },
                ],
              })
            }
          }

          const update = await teamRef.update({ loser: state.authUser.uid })
          const date = Date().toLocaleString()
          const LogRef = this.$fireStore
            .collection('log')
            .doc()
            .set({
              title: 'Lose Press',
              data: { ...bet, loser: state.authUser.uid },
              by: state.authUser.name,
              date: date,
            })
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
  async discountCoinTeamStaff({ commit, state }, form) {
    try {
      const teamRef = this.$fireStore.collection('coin').doc(form.team)
      const doc = await teamRef.get()
      let coinleft = parseInt(doc.data().coin) - parseInt(form.coin)
      const res = await teamRef.update({ coin: coinleft })
      commit('setTeamCoinStaff', { ...form, coin: coinleft })
      const date = Date().toLocaleString()
      const LogRef = this.$fireStore
        .collection('log')
        .doc()
        .set({
          title: 'Discount Team Coin',
          data: {
            team: form.team,
            cost: form.coin,
            from: doc.data().coin,
            to: coinleft,
          },
          by: state.authUser.name,
          date: date,
        })
    } catch (error) {
      console.log(error.message)
    }
  },
  async addCoin({ commit, state }, form) {
    try {
      const memberRef = this.$fireStore.collection('member').doc(form.uid)
      const doc = await memberRef.get()
      let coinleft = parseInt(doc.data().coin) + parseInt(form.coin)
      const res = await memberRef.update({ coin: coinleft })
      commit('setMemberCoin', { ...form, coinleft: coinleft })
      const date = Date().toLocaleString()
      const LogRef = this.$fireStore
        .collection('log')
        .doc()
        .set({
          title: 'Give Coin',
          data: {
            target: form.uid,
            cost: form.coin,
            from: doc.data().coin,
            to: form.coin,
          },
          by: state.authUser.name,
          date: date,
        })
    } catch (error) {
      console.log(error.message)
    }
  },
  async addCoinS({ commit, state }, form) {
    try {
      const memberRef = this.$fireStore.collection('member').doc(form.uid)
      const doc = await memberRef.get()
      let coinleft = parseInt(doc.data().coin) + parseInt(form.coin)
      const res = await memberRef.update({ coin: coinleft })
      commit('setMemberCoinS', { ...form, coinleft: coinleft })
      const date = Date().toLocaleString()
      const LogRef = this.$fireStore
        .collection('log')
        .doc()
        .set({
          title: 'Give Coin',
          data: {
            target: form.uid,
            cost: form.coin,
            from: doc.data().coin,
            to: form.coin,
          },
          by: state.authUser.name,
          date: date,
        })
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
      if (doc.data()) commit('LoadGroup', doc.data().g)
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
          commit('setMemberCoinGG', { ...data, coinleft: coinleft })
          const date = Date().toLocaleString()
          const LogRef = this.$fireStore
            .collection('log')
            .doc()
            .set({
              title: 'Give Coin',
              data: {
                target: form.uid,
                cost: form.coin,
                from: doc.data().coin,
                to: form.coin,
              },
              by: state.authUser.name,
              date: date,
            })
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
        const Res = await BetRef.where('player2', '==', mem.uid).get()
        const Res2 = await BetRef.where('player1', '==', mem.uid).get()
        const ResAll = Res.docs.concat(Res2.docs)
        commit('setBetStaff', { data: ResAll, uid: mem.uid })
      })
    } catch (e) {
      console.log(e.message)
      return
    }
  },
  async LoadAlert({ commit, state }) {
    try {
      const alertRef = this.$fireStore
        .collection('alert')
        .doc(state.authUser.uid)
      const alertGet = await alertRef.get()
      const alert = alertGet.data()
      // console.log(alert);
      if (alert.unread || alert.read) {
        commit('setAlert', alert)
      }
    } catch (error) {
      console.log(error.message)
    }
  },
  async checkLottery({ commit }, number) {
    try {
      const lotRef = this.$fireStore.collection('Lottery')
      const lot = await lotRef.get()
      const lotGot = lot.docs
      lotGot.forEach((item) => {
        let i = item.data()
        let id = item.id
        i.lottery.forEach(async (Lottery) => {
          if (Lottery == number) {
            // money
            console.log(id)
            //   const memberRef = this.$fireStore.collection("member").doc(id);
            //   const doc = await memberRef.get();
            //   let coinleft = parseInt(doc.data().coin) + parseInt("500");
            //   const res = await memberRef.update({ coin: coinleft });

            //   // alert
            //   const AlertRef = this.$fireStore
            //     .collection("alert")
            //     .doc(id);
            //   const AlertGet = await AlertRef.get();
            //   let Alert = AlertGet.data();
            //   if (Alert) {
            //     if (Alert.unread) {
            //       Alert.unread.push({
            //         title: "คุณถูกล็อตเตอรี่!",
            //         data: "คุณถูกล็อตเตอรี่เลขที่" + number +
            //           "ได้รับรางวัล 500 coin",
            //       });
            //       AlertRef.update(Alert);
            //     } else {
            //       AlertRef.update(
            //         {
            //           unread: [
            //             {
            //               title: "คุณถูกล็อตเตอรี่!",
            //               data: "คุณถูกล็อตเตอรี่เลขที่" + number +
            //                 "ได้รับรางวัล 500 coin",
            //             },
            //           ],
            //         },
            //       );
            //     }
            //   } else {
            //     AlertRef.set(
            //       {
            //         unread: [
            //           {
            //             title: "คุณถูกล็อตเตอรี่!",
            //             data: "คุณถูกล็อตเตอรี่เลขที่" + number +
            //               "ได้รับรางวัล 500 coin",
            //           },
            //         ],
            //       },
            //     );
            //   }

            //   // log

            //   const date = Date().toLocaleString();
            //   const LogRef = this.$fireStore
            //     .collection("log")
            //     .add({
            //       title: "Win Lottery",
            //       data: { from: doc.data().coin, to: coinleft, target: id },
            //       by: "admin",
            //       date: date,
            //     });
          }
        })
      })
    } catch (error) {
      console.log(error.message)
    }
  },
  async setRead({ commit, state }) {
    try {
      const AlertRef = this.$fireStore
        .collection('alert')
        .doc(state.authUser.uid)
      const AlertGet = await AlertRef.get()
      const Alert = AlertGet.data()
      if (!Alert.read) {
        Alert.read = []
      }
      if (Alert) {
        if (Alert.unread) {
          Alert.unread.forEach((item) => {
            Alert.read.push(item)
          })
        }
        commit('setRead', Alert.read)
        AlertRef.set({ read: Alert.read })
      } else {
      }
    } catch (error) {
      console.log(error.message)
    }
  },
  // <!-- End Admin -->
}
