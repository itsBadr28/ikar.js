<template  >
<!-- eslint-disable -->
<div class="bg-[#F1F0FE]">

 <div class=" max-w-7xl mx-auto">
    <div class="  text-center lg:text-6xl text-4xl
     text-[#141517] lg:pt-[450px] uppercase  py-10 font-body font-bold">
        <h1 v-scrollanimation class="-translate-x-24 duration-900" > About Us </h1>
    </div>
    <div class=" flex-initial text-center font-body font-bold m-4 text-black text-4xl">
    </div>
    <div  class="lg:flex flex-initial lg:flex-wrap justify-center ">
        <div v-scrollanimation class="translate-y-24 duration-900 w-[27%] mx-auto ">
          <img src="../assets/img/a1.jpg" alt=" random imgee" class=" object-cover    object-center rounded-lg shadow-xl">    
            <div v-scrollanimation class="relative px-4 -mt-16  translate-y-24 duration-900">
               <div class="bg-[#ffffff] h-40 flex p-6 rounded-lg shadow-2xl">
                <h1 class="text-2xl mx-auto text-[#141517] my-auto font-body font-bold "> Vehicles Rental Company </h1>
               </div>  
               </div>
        </div>
        <div v-scrollanimation class="translate-y-24 duration-900 w-[27%] mx-auto ">
          <img src="../assets/img/a3.jpg" alt=" random imgee" class=" object-cover  object-center rounded-lg shadow-xl">    
            <div v-scrollanimation class="relative px-4 -mt-16  translate-y-24 duration-900">
               <div class="bg-white h-40 flex p-6 rounded-lg shadow-2xl">
                <h1 class="text-2xl mx-auto text-[#141517] my-auto font-body font-bold "> We Own Large  Variety Of Vehicles </h1>
               </div>  
            </div>
        </div>
        <div v-scrollanimation class="translate-y-24 duration-900 w-[27%] mx-auto ">
          <img src="../assets/img/a2.jpg" alt=" random imgee" class=" object-cover  object-center rounded-lg shadow-xl">    
            <div v-scrollanimation class="relative px-4 -mt-16  translate-y-24 duration-900">
               <div class="bg-white h-40 flex p-6 rounded-lg shadow-2xl">
                <h1 class="text-2xl mx-auto text-[#141517] my-auto font-body font-bold "> Leasing Is On Long Term And Short Term Contracts </h1>
               </div>  
            </div>
        </div>
    </div>
    <div class=" text-center lg:text-6xl text-4xl
     text-[#141517] lg:mt-8 uppercase  my-8 font-body font-bold">
        <h1 v-scrollanimation class="-translate-x-24 duration-1000" > About Our Service </h1>
    </div>
    <div  class="flex  flex-wrap justify-center pb-8" >
         <div v-scrollanimation  class=" shadow-[#495C62]
         shadow-xl lg:-translate-x-24
        -translate-x-24  bg-no-repeat bg-cover
        bg-center bg1 lg:w-[600px]
         mx-5 my-4 rounded-xl w-[80%] lg:h-[550px] h-[250px] ">
         <h1 class="text-white text-left mb-[19rem] mt-16 bg-black bg-opacity-30
          mx-8  font-body font-bold
         lg:text-4xl text-xl">We offer a collection of cars for rent.<br></h1>
          <div class=" flex mr-8 justify-between ">
            <div></div>
            <router-link to="/vehichles" >
               <button @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true"  class=" btn  bg-white hover:bg-white
             hover:scale-105 rounded text-[#FF385C] hover:text-black
            transition ease-out  font-body font-bold  duration-250
             text-xl"> Show more
             <font-awesome-icon  :class=" hoverBtn ? '': 'hidden'" icon="arrow-right" />
             <font-awesome-icon :class=" hoverBtn ? 'hidden': ''" icon="arrow-right-to-bracket" />
             </button>
            </router-link>
            </div>
        </div>
        <div v-scrollanimation  class=" shadow-[#495C62]
         shadow-xl lg:translate-x-24
        -translate-x-24  bg-no-repeat bg-cover
        bg-center bg2 lg:w-[600px]
         mx-5 my-4 rounded-xl w-[80%] lg:h-[550px] h-[250px] ">
         <h1 class="text-white text-left lg:h-[70%] h-[40%] mt-16 bg-black bg-opacity-10
          mx-8  font-body font-bold
         lg:text-4xl text-xl">We offer our services to companies on long term <br>
          or short term contracts.</h1>
          <div class=" flex mr-8 justify-between ">
            <div></div>
            <router-link to="/vehichles" >
               <button @mouseover="hoverBtn1 = false" @mouseleave="hoverBtn1 = true"  class=" btn  bg-white hover:bg-white
             hover:scale-105 rounded text-[#FF385C] hover:text-black
            transition ease-out  font-body font-bold  duration-250
             text-xl"> Show more
             <font-awesome-icon  :class=" hoverBtn1 ? '': 'hidden'" icon="arrow-right" />
             <font-awesome-icon :class=" hoverBtn1 ? 'hidden': ''" icon="arrow-right-to-bracket" />
             </button>
            </router-link>
            </div>
        </div>
    </div>
 </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'About-Us',
  data() {
    return {
      hoverBtn: true,
      hoverBtn1: true,
    };
  },
  computed: {
    isVehicle() {
      return this.$store.getters.isVehicle;
    },
  },
  methods: {
    ...mapMutations(['toggleVehicle']),
  },
};
</script>

<style scoped>
.bg1{
background-image: url("../assets/img/bg-info-1.jpg");
}
.bg2{
background-image: url("../assets/img/bg-info-2.jpg");
}
.bgAbus{
    background-image: url("../assets/img/imgInfo4.jpg");
}
.bgAbus2{
    background-image: url("../assets/img/imgInfo2.jpg");
}

.bgAbus3{
    background-image: url("../assets/img/imgInfo1.jpg");
}
.before-enter{
  opacity: 0;
  /* transform: translateY(100px); */
}
.enter{
opacity: 1;
transform: translateY(0px);
}
</style>
