import initialState from "./state";

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState());
  },

  SET_AUTH_USER: (state, form) => {
    state.authUser = form;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setEvidence(state, payload) {
    if (payload.have != 0 && payload != "") {
      for (let i = 0; i < payload.have; i++) {
        state.evidence.push(payload.message[i]);
      }
    } else state.evidence = [];
  },
  setEve(state, payload) {
    if (payload.bought != 0) {
      for (let i = payload.before; i < payload.bought; i++) {
        state.evidence.push(payload.message[i]);
      }
    } else state.evidence = [];
  },
  setFriendlist(state, payload) {
    if (payload != "") {
      payload.forEach((doc) => {
        state.friendlist.push({ ...doc.data() });
      });
    } else state.friendlist = [];
  },
  setFriendAll(state, payload) {
    if (payload != "") {
      payload.forEach((doc) => {
        if (doc.id != state.authUser.uid) {
          state.allfriend.push({ ...doc.data(), uid: doc.id });
        }
      });
    } else state.allfriend = [];
  },
  setFriendSearch(state, payload) {
    if (payload) state.allfriend.push(payload);
    else state.allfriend = [];
  },
  setCoin(state, payload) {
    state.authUser.coin = payload;
  },
  setCoinTeam(state, payload) {
    state.cointeam = payload;
  },
  setFalseLottery(state, payload) {
    for (let i = 0; i < 100; i++) {
      state.Lottery[i] = false;
    }
  },
  setLottery(state, payload) {
    for (let i = 0; i < 100; i++) {
      if (payload[i] == true) {
        state.Lottery[i] = true;
      }
    }
  },
  setLotteryAll(state, payload) {
    for (let i = 0; i < payload.lottery.length; i++) {
      state.Lottery[payload.lottery[i] - 1] = true;
    }
  },
  setBetSend(state, payload) {
    if (payload != "") {
      payload.docs.forEach((doc) => {
        state.bet.betSend.push({
          ...doc.data(),
          Betid: doc.id,
        });
      });
    } else state.bet.betSend = [];
  },
  setBetGot(state, payload) {
    if (payload != "") {
      payload.docs.forEach((doc) => {
        if (doc.data().accept == false) {
          state.bet.betGot.push({
            ...doc.data(),
            Betid: doc.id,
          });
        }
      });
    } else state.bet.betGot = [];
  },
  setBetAccept(state, payload) {
    if (payload != "") {
      // console.log(payload);
      payload.forEach((doc) => {
        state.bet.betAccept.push({
          ...doc.data(),
          Betid: doc.id,
        });
      });
      // console.log(state.bet.betAccept);
    } else state.bet.betAccept = [];
  },
  setBetResult(state, payload) {
    if (payload != "") {
      payload.forEach((doc) => {
        state.bet.betResult.push({
          ...doc.data(),
          Betid: doc.id,
        });
      });
    } else state.bet.betResult = [];
  },
  setAccepted(state, payload) {
    const b = state.bet.betGot;
    const a = b.filter((x) => {
      return x.Betid != payload.Betid;
    });
    state.bet.betAccept.push(payload);
    state.bet.betGot = a;
  },
  setCancel(state, payload) {
    const b = state.bet.betSend;
    const a = b.filter((x) => {
      return x.Betid != payload.Betid;
    });
    state.bet.betSend = a;
  },
  setWinLose(state, payload) {
    const b = state.bet.betAccept;
    const a = b.filter((x) => {
      return x.Betid != payload.Betid;
    });
    state.bet.betResult.push(payload);
    state.bet.betAccept = a;
  },
  setRefuse(state, payload) {
    const b = state.bet.betGot;
    const a = b.filter((x) => {
      return x.Betid != payload.Betid;
    });
    state.bet.betGot = a;
  },
  setAllTeamCoin(state, payload) {
    if (payload != "") {
      let teamname = "";
      payload.forEach((doc) => {
        if (doc.id == "a") teamname = "สคิลลาถลาลม";
        else if (doc.id == "b") teamname = "กริฟฟินอย่ามาดิ้นกับพี่";
        else if (doc.id == "c") teamname = "เมดูซ่าก็มาดิค๊าบ";
        else if (doc.id == "d") teamname = "นกฟินิกส์จิกเด็กตาย";
        else if (doc.id == "e") teamname = "สฟิงค์สุดสวิงริงโก้";
        else if (doc.id == "f") teamname = "พญานาคลากเธอไปทุบ";
        else if (doc.id == "g") teamname = "กวางน้อยถอยไม่เป็น";
        else if (doc.id == "h") teamname = "เพกาซัสหน้าเธอ";
        state.allteamcoin.push({
          ...doc.data(),
          team: doc.id,
          teamname: teamname,
        });
      });
    } else state.allteamcoin = [];
  },
  setTeamCoinStaff(state, payload) {
    let teamname = "";
    if (payload.team == "a") teamname = "สคิลลาถลาลม";
    else if (payload.team == "b") teamname = "กริฟฟินอย่ามาดิ้นกับพี่";
    else if (payload.team == "c") teamname = "เมดูซ่าก็มาดิค๊าบ";
    else if (payload.team == "d") teamname = "นกฟินิกส์จิกเด็กตาย";
    else if (payload.team == "e") teamname = "สฟิงค์สุดสวิงริงโก้";
    else if (payload.team == "f") teamname = "พญานาคลากเธอไปทุบ";
    else if (payload.team == "g") teamname = "กวางน้อยถอยไม่เป็น";
    else if (payload.team == "h") teamname = "เพกาซัสหน้าเธอ";
    state.allteamcoin[payload.index] = {
      teamname: teamname,
      coin: payload.coin,
      team: payload.team,
    };
    console.log(state.allteamcoin);
  },
  setTest(state, payload) {
    state.allfriend[payload.index] = {
      ...state.allfriend[payload.index],
      selected: payload.value,
    };
  },
  setMemberCoin(state, payload) {
    state.allfriend[payload.index] = {
      ...state.allfriend[payload.index],
      coin: payload.coinleft,
    };
  },
  setMemberCoinS(state, payload) {
    state.group[payload.index] = {
      ...state.group[payload.index],
      coin: payload.coinleft,
    };
  },
  setGroup(state, payload) {
    if (payload.length > 0) {
      payload.forEach((element2) => {
        if (state.group.length > 0) {
          let x = state.allfriend.findIndex((each) => each.uid == element2.uid);
          if (!state.group.includes(state.allfriend[x])) {
            state.group.push(state.allfriend[x]);
          }
        } else {
          let x = state.allfriend.findIndex((each) => each.uid == element2.uid);
          state.group.push(state.allfriend[x]);
        }
      });
    } else {
      state.group = [];
    }
  },
  LoadGroup(state, payload) {
    let x = state.allfriend;
    for (let c in payload) {
      for (let g in x) {
        // console.log();
        if (x[g].uid == payload[c].uid) {
          state.group.push(x[g]);
        }
      }
    }
    // }
  },
  setDGroup(state, payload) {
    if (payload.length > 0) {
      state.group = [];
      payload.forEach((element2) => {
        if (state.group.length > 0) {
          let x = state.allfriend.findIndex((each) => each.uid == element2.uid);
          if (!state.group.includes(state.allfriend[x])) {
            state.group.push(state.allfriend[x]);
          }
        } else {
          let x = state.allfriend.findIndex((each) => each.uid == element2.uid);
          state.group.push(state.allfriend[x]);
        }
      });
    } else {
      state.group = [];
    }
  },
  setGroupCoin(state, payload) {
    let x = state.group.findIndex((each) => each.uid == payload.uid);
    state.group[x] = {
      ...state.group[x],
      coin: payload.coinleft,
    };
  },
  setMemberCoinGG(state, payload) {
    let x = state.allfriend.findIndex((each) => each.uid == payload.uid);
    state.allfriend[x] = {
      ...state.group[x],
      coin: payload.coinleft,
    };
  },
  setBetStaff(state, payload) {
    let win = 0;
    let lose = 0;
    let all = 0;
    if (payload.data.length > 0) {
      payload.data.forEach((element2) => {
        let qData = element2.data();
        if (qData.winner == payload.uid) win++;
        else lose++;
        all++;
      });
    }
    let x = state.allfriend.findIndex((each) => each.uid == payload.uid);
    state.memberbet.push({
      ...state.allfriend[x],
      win: win,
      lose: lose,
      all: all,
    });
  },
  resetBetStaff(state, payload) {
    state.memberbet = [];
  },
  setAlert(state, data) {
    // console.log(data);
    if (data.unread) {
      data.unread.forEach((item) => {
        state.alertUnread.push(item);
      });
    }
    if (data.read) {
      data.read.forEach((item) => {
        state.alertRead.push(item);
      });
    }
    // console.log(state.alertRead);
    // console.log(state.alertUnread);
  },
  setRead(state, data) {
    state.alertRead = data;
    state.alertUnread = [];
  },
};
