<template>
  <!-- eslint-disable  -->
      <div class=" max-w-7xl mx-auto  ">
  <nav class="flex  items-center border-b border-[#141517] justify-between px-0 py-3 flex-wrap ">
      <div class="flex">
          <router-link class="flex" to="/">
          <img class="w-16 h-16" src="../assets/img/logo.png" alt="">
          <h1 class="text-[#141517] mr-8 my-auto uppercase tracking-wide text-4xl font-body font-bold">IKAR</h1>
          </router-link>
      </div>
      <button @click.prevent="toggleMenubar"
       class=" text-white inline-flex p-3 hover:bg-[#FF385C] rounded lg:hidden ml-auto">
          <font-awesome-icon class="text-[#141517]" icon="bars" />
      </button>
      <div v-show="menubarShow" class="tap-nav font-body font-bold w-full lg:inline-flex lg:flex-grow lg:w-auto" 
      id="nav">
          <ul class="lg:inline-flex lg:flex-row lg:ml-auto  flex flex-col">

              <li @mouseover="hoverHome = false" @mouseleave="hoverHome = true" class=" lg:w-auto px-3 py-2 rounded  hover:text-white">
                 <router-link to="/"> 
                 <a class="text-[#141517] text-xl"> 
                   <span> Home </span> 
                  </a>
                  </router-link>
                  <div v-show="!hoverHome" class="w-[53px] rounded-full  absolute bg-[#141517] h-1">
                  </div>
                  </li>
              <li @mouseover="hoverReservations = false" @mouseleave="hoverReservations = true" class=" lg:w-auto px-3 py-2 rounded  hover:text-white">
                  <a class="text-[#141517] text-xl " href="#rent"> 
                    <span> Reservations </span> 
                  </a><div v-show="!hoverReservations" class="w-[120px] rounded-full  absolute bg-[#141517] h-1">
                  </div></li>
              <li @mouseover="hoverLaws = false" @mouseleave="hoverLaws = true" class="lg:w-auto px-3 py-2 rounded  hover:text-white ">
                  <a  class="text-[#141517] text-xl " href="#cars">
                    <span> Laws </span>
                  </a>
                  <div v-show="!hoverLaws" class="w-[50px] rounded-full  absolute bg-[#141517] h-1">
                  </div>
                  </li>
              
          </ul>
          <ul class="lg:inline-flex lg:flex-row lg:ml-auto items-center ">
              <li class=" hover:text-slate-900 mr-8 "> Totel: {{ total }}$</li>
            <button @click.prevent="toggleAuthModal" class="btn rounded-sm bg-[#FF385C]">
            <span class="text-white font-body font-bold"> Sign up | sign in</span>
          </button>
          
          </ul>
      </div>
  </nav>
  <div class="m-1 ml-8 h-8  ">
    <div class="flex mt-4 content-center">
    <router-link to="/">
    <a class="my-auto  mx-2">Home</a>
    </router-link>
      <router-link to="/reservation">
    <font-awesome-icon class=" mx-1 my-auto m-auto text-[#FF385C]" icon="angle-right" />
    <a class="my-4 mx-2" href="">Reservation</a>
    </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Header-vehcle',
  data() {
    return {
      hoverHome: 'false',
      hoverReservations: 'false',
      hoverLaws: 'false',
    };
  },
  computed: {
    menubarShow() {
      return this.$store.getters.menubarShow;
    },
    total() {
      return this.$store.getters.total;
    },
  },
  methods: {
    ...mapMutations(['toggleMenubar']),
    ...mapMutations(['totals']),
    ...mapMutations(['toggleAuthModal']),

  },
};
</script>

<style>

.bg{
  background-image: url("../assets/img/bg-intf.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.before-enter{
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;

}
.enter{
opacity: 1;
transform: translateY(0px);
}
@media (min-width: 1024px) {
  .tap-nav{
    display: inline-flex !important;
  }
}

</style>
