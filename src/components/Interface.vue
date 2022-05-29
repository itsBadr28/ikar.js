<template>
<div class="max-w-7xl mx-auto">
  <div class=" items-center lg:mt-16 mt-52   lg:h-[400px] bg-[#141517] flex   justify-center ">
      <div class=" flex-initial lg:my-auto ">
        <div class="">
          <div class="relative ">
            <img  class=" absolute pointer-events-none
            lg:-top-64 -top-44 opacity-75 z-0 md:rotate-45
            md:scale-100 scale-[200%] md:left-0 -left-[3.25rem] hidden md:block
             lg:h-[900px] h-[500px]"
             src="../assets/img/liq-2.png" alt="">
          </div>
          <div class=" lg:mt-4 z-10">
            <h1 v-scrollanimation class="-translate-y-24  duration-300
           text-white  mx-auto  font-body font-bold
          lg:text-7xl  md:text-6xl text-4xl  uppercase">
          RENT A VEHICLE </h1>
          <h1 v-scrollanimation class="-translate-y-24  duration-600
           text-white  mx-auto  font-body font-bold text-opacity-60
          lg:text-7xl  md:text-6xl text-4xl  uppercase">
          RENT A VEHICLE </h1>
          <h1 v-scrollanimation class="-translate-y-24  duration-900
           text-white  mx-auto  font-body font-bold text-opacity-40
          lg:text-7xl  md:text-6xl text-4xl  uppercase">
          RENT A VEHICLE </h1>
          <h1 v-scrollanimation class="-translate-y-24  duration-1200
           text-white  mx-auto  font-body font-bold text-opacity-20
          lg:text-7xl  md:text-6xl text-4xl  uppercase">
          RENT A VEHICLE </h1>
          <div class="relative">
               <img v-if="randomNumber == 0"
            class="absolute  md:-top-48 -top-28 pointer-events-none lg:left-[2%] md:left-[7%] left-0
            mx-auto lg:w-[500px] w-[400px]
              z-10" src="../assets/img/12121.png" alt="">
               <img v-if="randomNumber == 1"
               class="absolute lg:-top-64 md:-top-48 pointer-events-none
                scale-110 -top-36 lg:left-[3%] left-[2%] md:left-[6%]
            mx-auto lg:w-[500px] w-[400px]
              z-10" src="../assets/img/car6.png" alt="">
               <img v-if="randomNumber == 2"
               class="absolute lg:-top-64 pointer-events-none
                scale-[115%] md:-top-48 -top-36 lg:left-[3%] left-[1%] md:left-[5%]
            mx-auto lg:w-[500px] w-[400px]
              z-10" src="../assets/img/car3.png" alt="">
              <img v-if="randomNumber == 3"
               class="absolute lg:-top-[17rem] pointer-events-none
                scale-110 md:-top-52 -top-36 lg:left-[3%] md:left-[6%] left-[0%]
            mx-auto lg:w-[500px] w-[400px]
              z-10" src="../assets/img/car4.png" alt="">
              <img v-if="randomNumber == 4"
               class="absolute lg:-top-64 scale-110
                pointer-events-none md:-top-[12.5rem] -top-36 lg:left-[3%] md:left-[6%] left-[1%]
            mx-auto lg:w-[500px] w-[400px]
              z-10" src="../assets/img/car5.png" alt="">
              <img v-if="randomNumber == 5"
               class="absolute lg:-top-[18rem] pointer-events-none
               scale-[115%] md:-top-56 -top-36 lg:left-[2%] md:left-[7%] left-[2%]
            mx-auto lg:w-[500px] w-[400px]
              z-10" src="../assets/img/car7.png" alt="">
          </div>
          <div v-scrollanimation class="translate-y-24 duration-1000">
            <router-link to="/reservation">
            <button  class="btn
              bg-[#FF385C] w-52 rounded hover:bg-white
             hover:scale-105 text-white hover:text-black
            transition ease-out px-4  duration-250  mb-16 mt-8
             text-xl" href="" type="submit">  Rent  </button>
             </router-link>
             </div>
          </div>
      </div>

      </div>
  </div>
     <div v-scrollanimation class="flex h-28  animate-bounce
       text-white justify-center items-center">
       <img class="  w-16 flex md:hidden " src="../assets/icon/scroll.png" alt="">
     <!-- <div> <img class="w-24 lg:w-28 mr-4 hover:scale-125
     transition ease-out duration-250" src="../assets/img/audi.png" alt=""></div>
     <div> <img class="w-20 lg:w-24  mr-4 hover:scale-125
     transition ease-out duration-250" src="../assets/img/bugatti.png" alt=""></div>
     <div> <img class="w-24 lg:w-28 mr-4 hover:scale-125
     transition ease-out duration-250" src="../assets/img/chefoli.png" alt=""></div>
     <div> <img class="w-24 lg:w-16 mr-4   hover:scale-125
     transition ease-out duration-250" src="../assets/img/lamp.png" alt=""></div>
     <div> <img class="w-24 lg:w-28 mr-4  hover:scale-125
     transition ease-out duration-250" src="../assets/img/jaguar.png" alt=""></div>
     <div> <img class="w-24 lg:w-24 mr-4   hover:scale-125
     transition ease-out duration-250" src="../assets/img/land.png" alt=""></div> -->
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home-interface',
  data() {
    return {
      randomNumber: Math.floor(Math.random() * 6),
      // randomNumber: 5,
    };
  },
};
</script>
<style scoped>
.before-enter{
  opacity: 0;
}
.enter{
opacity: 1;
transform: translateY(0px);
}
</style>
