<template>
  <!-- eslint-disable  -->
  <div class="max-w-7xl mx-auto">
    <nav
      class="
        flex
        w-[90%]
        lg:w-full
        items-center
        mx-auto
        justify-between
        px-0
        py-3
        flex-wrap
      "
    >
      <div class="flex">
        <router-link class="flex" to="/">
          <img class="w-16 h-16" src="../assets/img/logo.png" alt="" />
          <h1
            class="
              text-[#141517]
              mr-8
              uppercase
              tracking-wide
              my-auto
              text-4xl
              font-body font-bold
            "
          >
            IKAR
          </h1>
        </router-link>
      </div>
      <button
        @click.prevent="toggleMenubar"
        class="
          text-white
          inline-flex
          p-3
          hover:bg-[#FF385C]
          rounded
          lg:hidden
          ml-auto
        "
      >
        <font-awesome-icon icon="bars" />
      </button>
      <div
        v-show="menubarShow"
        class="
          tap-nav
          font-body font-bold
          w-full
          lg:inline-flex lg:flex-grow lg:w-auto
        "
        id="nav"
      >
        <ul class="lg:inline-flex my-auto lg:flex-row lg:ml-auto flex flex-col">
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
          <li
            @mouseover="hoverCars = false"
            @mouseleave="hoverCars = true"
            class="lg:w-auto px-3 py-2 rounded"
          >
            <a class="text-[#141517] text-xl" href="#cars">
              <span> Cars </span>
            </a>
            <div
              v-show="!hoverCars"
              class="w-[42px] rounded-full absolute bg-[#141517] h-1"
            ></div>
          </li>
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
            <div v-show="!hoverLaws" class="w-[50px] rounded-full absolute bg-[#141517] h-1"></div>
          </li>
        </ul>
        <!-- <ul :class="isSignIn ? 'lg:hidden hidden' : ''"
          @click="toggleIssignIn"
          class="lg:inline-flex my-auto lg:flex-row lg:ml-auto items-center"
        >
          <button
            @click.prevent="toggleAuthModal"
            class="btn hover:border-b border border-white border-b-4 rounded-lg bg-[#FF385C]"
          >
            <span class="text-white font-body font-bold">
              Sign up | sign in</span
            >
          </button>
        </ul> -->
        <div :class="isSignIn ? '' : 'lg:hidden'" class="flex lg:ml-auto">
          <div class="flex bbg-red-500">
            <div class="ml-2 my-auto  w-10 h-10 hover:bg-gray-600 rounded-full flex justify-center relative ">
              <font-awesome-icon class="text-[#141517] my-auto items-center text-xl" icon="bell" />
              <span class=" absolute right-[10px] w-1.5 h-1.5 bg-red-600 rounded-full top-[10px]"></span>
            </div>
            <div class="flex my-auto mr-4">
              <div class="relative inline-block text-left">
                <button @click="toggledropDownOpen" class="mr-2 relative flex justify-center items-center group text-[#141517] rounded focus:text-white">
             <div class=" my-auto  w-10 h-10 hover:bg-gray-600 rounded-full flex justify-center relative ">
              <font-awesome-icon class="text-[#141517] my-auto items-center p-2 text-xl" icon="gear" />
            </div>
          </button>
            <div :class=" dropDownOpen ? '':'hidden'" class="absolute top-full  group-focus:block min-w-full w-max bg-white mt-1 rounded">
              <div class=" origin-top-right absolute right-0 -top-1 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <router-link to="/profileUser">
                    <a class="hover:bg-slate-200 text-[#141517] block px-4 text-left py-2 text-md">Profile</a>
                    </router-link>
                      <div 
                        @click="toggleIssignIn"
                      >
                      <button
                        class="
                          text-[#141517]
                          hover:bg-slate-200
                          block
                          w-full
                          my-auto
                          text-left
                          px-4
                          py-2
                          text-md
                          font-body
                          font-bold
                        "
                      >
                        Sign out
                      <font-awesome-icon
                        class="text-[#141517] ml-28 my-auto  text-md"
                        icon="arrow-right-from-bracket"
                      />
                      </button>
                      </div>
                  </div>
                </div> 
            </div>
          </div>
              <img
                src="https://api.lorem.space/image/face?w=150&h=150"            
                class="
                  bg bg-cover bg bg-center
                  relative
                  w-10
                  my-auto
                  h-10
                  rounded-full
                "/>
                <div class="
                before:absolute
                  before:w-2
                  before:h-2
                  before:animate-pulse
                  before:bg-green-500
                  before:rounded-full
                  before:right-44
                  before:top-14
                  before:ring-1
                  before:ring-white"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</div>
    <div class="bg-[#141517] h-[170px]">

    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Header-interface",
  data() {
    return {

      hoverStart: "false",
      hoverCars: "false",
      hoverLaws: "false",
      userName: "badr ad",
    };
  },
  computed: {
    menubarShow() {
      return this.$store.getters.menubarShow;
    },
    isSignIn() {
      return this.$store.getters.isSignIn;
    },
    dropDownOpen() {
      return this.$store.getters.dropDownOpen;
    },
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
    ...mapMutations(["toggleMenubar"]),
    ...mapMutations(["toggleIssignIn"]),
    ...mapMutations(["toggledropDownOpen"]),
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .tap-nav {
    display: inline-flex !important;
  }
}
</style>
