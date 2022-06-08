<template>
  <!-- eslint-disable -->
  <div class=" mx-auto max-w-7xl duration-500  relative">
   <div class="mx-20 grid lg:absolute -top-24 left-[43.8%] lg:-translate-x-1/2">
  <div class="flex flex-row rounded-lg w-[1280px] border border-gray-200/80 bg-white p-6">
    <div class="relative">
      <img class="w-40 h-40 rounded-md object-cover" src="https://api.lorem.space/image/face?w=150&h=150"
        alt="User" />
      <div
        class="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
        title="User is online"></div>
    </div>
    <div class="flex flex-col px-6">
      <div class="flex h-8 mb-8  flex-row">
        <!-- Username -->
        <a href="https://github.com/EgoistDeveloper/" target="_blank">
          <h2 class="text-lg font-semibold">AD Badr Eddine</h2>
        </a>

        <!-- User Verified -->
        <svg class="my-auto ml-2 h-5 fill-blue-400" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
          </svg>
      </div>

      <!-- Mini Cards -->
      <div class="mt-2 flex flex-row items-center space-x-5">
        <!-- Comments -->
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="m20.772 10.156-1.368-4.105A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.105A2.003 2.003 0 0 0 2 12v5c0 .753.423 1.402 1.039 1.743-.013.066-.039.126-.039.195V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.062c0-.069-.026-.13-.039-.195A1.993 1.993 0 0 0 22 17v-5c0-.829-.508-1.541-1.228-1.844zM4 17v-5h16l.002 5H4zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6z"></path><circle cx="6.5" cy="14.5" r="1.5"></circle><circle cx="17.5" cy="14.5" r="1.5"></circle>
              </svg>

            <span class="font-bold font-body text-gray-600"> 12 </span>
          </div>

          <div class="mt-2 text-sm font-bold font-body text-gray-400">Reservation</div>
        </a>

        <!-- Projects -->
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M16 12h2v4h-2z"></path><path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
            </svg>

            <span class="font-bold font-body text-gray-600"> 2350 $</span>
          </div>

          <div class="mt-2 text-sm font-bold font-body text-gray-400">Expenses</div>
        </a>

        <!-- Projects -->
        <a href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <svg class="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20.995 6.903a.997.997 0 0 0-.547-.797l-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967zm-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523 6.998 3.511c.005 1.87-.481 8.243-7.006 12.217z"></path>
              </svg>

            <span class="font-bold font-body text-gray-600"> lvl.3 </span>
          </div>

          <div class="mt-2 text-sm font-bold font-body text-gray-400">Rank</div>
        </a>
      </div>
    </div>

    <!-- Right Actions Container -->
    <div class="w-100 flex flex-grow flex-col items-end justify-start">
      <div class="flex flex-row space-x-3">
        <!-- Follow Button -->
        <!-- <button
          class="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">
          <svg class="mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>

          Follow
        </button> -->

        <!-- More Actions Button -->
        <button @click="toggleMore" class="flex rounded-md bg-gray-100 py-2 px-1 text-white 
        transition-all duration-150 ease-in-out hover:bg-gray-200">
          <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
            </svg>
        </button>
      </div>
    </div>
     <div :class=" More ? '':'hidden'" class="absolute top-full  group-focus:block min-w-full w-max bg-[#f3f4f6] mt-1 rounded">
              <div class=" origin-top-right absolute right-[5.4rem] -top-[12.3rem] mt-2 w-56 rounded-md shadow-xl bg-gray-200">
                  <div @click="toggleReport" class="py-1 cursor-pointer">
                    <a  class="hover:bg-gray-300 text-[#141517] my-auto font-body font-bold block px-4 text-left py-2 text-md">
                      <font-awesome-icon class="text-red-500 pr-2" icon="triangle-exclamation" />
                      Report
                      </a>
                      </div>
                      <div @click="toggleMeeting" class="py-1 cursor-pointer">
                      <a  class="hover:bg-gray-300 text-[#141517] my-auto font-body font-bold block px-4 text-left py-2 text-md">
                       <font-awesome-icon class="text-green-500 pr-2" icon="handshake" />
                       Meeting
                      </a>
                      </div>
                  
                </div> 
            </div>
  </div>
</div>
  </div>
  <ReservationList />
  <Report />
  <Meeting />
</template>

<script>
import { mapMutations } from "vuex";
import ReservationList from './ReservationList.vue';
import Report from './Report.vue';
import Meeting from './Meeting.vue';

export default {
  name: 'userInfo',
  components: {
    ReservationList,
    Report,
    Meeting,
  },
  computed: {
    More() {
      return this.$store.getters.More;
    },
  },
  methods: {
    ...mapMutations(["toggleMore"]),
    ...mapMutations(["toggleReport"]),
    ...mapMutations(["toggleMeeting"]),
  },
};
</script>

<style>

</style>
