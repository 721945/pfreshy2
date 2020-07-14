export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser.uid !== null;
    } catch {
      return false;
    }
  },
  getUser(state) {
    return state.authUser;
  },
  getLottery(state) {
    return state.Lottery;
  },
  getCoin(state) {
    if (state.authUser) return state.authUser.coin;
    else return;
  },
  getCoinTeam(state) {
    if (state.authUser) return state.cointeam;
    else return;
  },
  getEvidence(state) {
    return state.evidence;
  },
  getTeamFriend(state) {
    return state.friendlist;
  },
  getPicture(state) {
    if (state.authUser) return state.authUser.picture;
  },
  getAllFriend(state) {
    if (state.authUser) return state.allfriend;
  },
  getBetSend(state) {
    if (state.bet.betSend) return state.bet.betSend;
  },
  getBetAccept(state) {
    if (state.bet.betSend) return state.bet.betAccept;
  },
  getBetGot(state) {
    if (state.bet.betSend) return state.bet.betGot;
  },
  getBetResult(state) {
    if (state.bet.betSend) return state.bet.betResult;
  },
  getAllTeamCoin(state) {
    if (state.allteamcoin) return state.allteamcoin;
  },
  getGroup(state) {
    return state.group;
  },
  getMemberBet(state) {
    return state.memberbet;
  },
  getUnread(state) {
    return state.alertUnread;
  },
  getRead(state) {
    return state.alertRead;
  },
};
