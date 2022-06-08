import { createStore } from 'vuex';

function getBool() {
  const boolString = localStorage.getItem('bool');
  const bool = JSON.parse(boolString);
  // console.log('inside index');
  if (bool) {
    // console.log(mode);
    return bool;
  } else {
    return false;
  }
}

export default createStore({
  state: {
    dropDownOpen: false,
    isSignIn: getBool(),
    menubarShow: false,
    returnShow: false,
    authModalShow: false,
    isVehicle: false,
    isBsrShow: true,
    total: 0,
    More: false,
    reportShow: false,
    MeetingShow: false,
  },
  getters: {
    menubarShow: (state) => state.menubarShow,
    returnShow: (state) => state.returnShow,
    isVehicle: (state) => state.isVehicle,
    authModalShow: (state) => state.authModalShow,
    isBsrShow: (state) => state.isBsrShow,
    total: (state) => state.total,
    isSignIn: (state) => state.isSignIn,
    dropDownOpen: (state) => state.dropDownOpen,
    More: (state) => state.More,
    reportShow: (state) => state.reportShow,
    MeetingShow: (state) => state.MeetingShow,
  },
  mutations: {
    toggleMenubar: (state) => {
      state.menubarShow = !state.menubarShow;
      console.log(state.menubarShow);
    },
    toggleReturn: (state) => {
      state.returnShow = !state.returnShow;
      console.log(state.returnShow);
    },
    totals: (state) => {
      state.total = 124.18;
      console.log('here');
    },
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
      console.log(state.authModalShow);
    },
    toggleAuthBar: (state) => {
      state.isBsrShow = !state.isBsrShow;
    },
    toggleIssignIn: (state) => {
      state.isSignIn = !state.isSignIn;
      localStorage.setItem('bool', state.isSignIn);
    },
    toggleIssignOut: (state) => {
      state.isSignIn = !state.isSignIn;
      localStorage.setItem('bool', state.isSignIn);
    },
    toggledropDownOpen: (state) => {
      state.dropDownOpen = !state.dropDownOpen;
    },
    toggleMore: (state) => {
      state.More = !state.More;
    },
    toggleReport: (state) => {
      state.reportShow = !state.reportShow;
    },
    toggleMeeting: (state) => {
      state.MeetingShow = !state.MeetingShow;
    },
  },
});
