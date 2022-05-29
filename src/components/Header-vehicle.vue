<template>
  <!-- eslint-disable  -->
  <div class="max-w-7xl mx-auto">
    <nav class="flex items-center border-b border-[#141517] justify-between px-0 py-3 flex-wrap">
      <div class="flex">
        <router-link class="flex" to="/">
          <img class="w-16 h-16" src="../assets/img/logo.png" alt="" />
          <h1
            class="text-[#141517] mr-8 my-auto uppercase tracking-wide text-4xl font-body font-bold"
          >
            IKAR
          </h1>
        </router-link>
      </div>
      <button
        @click.prevent="toggleMenubar"
        class="text-white inline-flex p-3 hover:bg-[#FF385C] rounded lg:hidden ml-auto"
      >
        <font-awesome-icon class="text-[#141517]" icon="bars" />
      </button>
      <div
        v-show="menubarShow"
        class="tap-nav font-body font-bold w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="nav"
      >
        <ul class="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
          <li
            @mouseover="hoverStart = false"
            @mouseleave="hoverStart = true"
            class="lg:w-auto px-3 py-2 rounded"
          >
            <a class="text-[#141517] text-xl">
              <router-link to="/reservation">
                <span class="text-[#141517]"> Start a Reservation </span>
              </router-link>
            </a>
            <div
              v-show="!hoverStart"
              class="w-[170px] rounded-full absolute bg-[#141517] h-1"
            ></div>
          </li>
          <button
            class="relative flex jutify-center items-center group text-[#141517] rounded focus:text-white"
          >
            <p
              @mouseover="hoverReservations = false"
              @mouseleave="hoverReservations = true"
              class="px-2 font-body text-[#141517] font-bold text-xl"
            >
              Reservations
            </p>
            <span class="p-2">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
            <div
              class="absolute top-full hidden group-focus:block min-w-full w-max bg-white mt-1 rounded"
            >
              <ul class="text-left border-2 border-[#141517] rounded">
                <router-link to="">
                  <li
                    class="px-4 py-1 hover:bg-[#FF385C] border-b font-body font-bold text-[#141517] border-gray-500"
                  >
                    View
                  </li>
                </router-link>
                <router-link to="">
                  <li
                    class="px-4 py-1 hover:bg-[#FF385C] border-b font-body font-bold text-[#141517] border-gray-500"
                  >
                    Modify
                  </li>
                </router-link>
                <router-link to="">
                  <li class="px-4 py-1 hover:bg-[#FF385C] font-body font-bold text-[#141517]">
                    Cancel
                  </li>
                </router-link>
              </ul>
            </div>
            <div
              v-show="!hoverReservations"
              class="w-[170px] top-9 rounded-full absolute bg-[#141517] h-1"
            ></div>
          </button>
          <li
            @mouseover="hoverLaws = false"
            @mouseleave="hoverLaws = true"
            class="lg:w-auto px-3 py-2 rounded"
          >
            <a class="text-[#141517] text-xl" href="#cars">
              <router-link to="">
                <span class="text-[#141517]"> Laws </span>
              </router-link>
            </a>
            <div v-show="!hoverLaws" class="w-[52px] rounded-full absolute bg-[#141517] h-1"></div>
          </li>
        </ul>
        <ul class="lg:inline-flex lg:flex-row lg:ml-auto items-center">
          <button @click.prevent="toggleAuthModal" class="btn rounded-sm bg-[#FF385C]">
            <span class="text-white font-body font-bold"> Sign up | sign in</span>
          </button>
        </ul>
      </div>
    </nav>
    <div class="m-1 ml-8 h-8">
      <div class="flex mt-4 content-center">
        <router-link to="/">
          <a class="my-auto mx-2">Home</a>
        </router-link>
        <router-link to="/vehichles">
          <font-awesome-icon class="mx-1 my-auto m-auto text-[#FF385C]" icon="angle-right" />
          <a class="my-4 mx-2" href="">Vehichles</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["total"],
  name: "Header-vehcle",
  data() {
    return {
      hoverStart: "false",
      hoverReservations: "false",
      hoverLaws: "false",
    };
  },
  computed: {
    menubarShow() {
      return this.$store.getters.menubarShow;
    },
  },
  methods: {
    ...mapMutations(["toggleMenubar"]),
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style>
.bg {
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

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
@media (min-width: 1024px) {
  .tap-nav {
    display: inline-flex !important;
  }
}
</style>
