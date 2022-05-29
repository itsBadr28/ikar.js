<template>
<!-- eslint-disable -->
<div class=" bg-[#141517]" >
  <div class="bg mx-auto bg-cover bg-center">
      <div class="max-w-7xl mx-auto  h-[800px]  text-2xl font-body font-bold  text-white">
          <div class="flex justify-between m-4 lg:mb-28 mb-36 pt-8">
          <h1 class="text-white lg:text-6xl md:text-4xl text-lg my-auto uppercase font-body font-blod">PROFILE VEHICLE </h1>
          <div class="my-auto">
            <router-link to="/reservation">
          <button class=" my-auto text-white rounded-sm  font-body font-bold text-lg
           bg-[#FF385C] w-60 h-12
            ">Start a Reservation</button>
            </router-link>
          </div>
          </div>
          <div>
             <h1 class=" text-6xl font-body font-bol uppercase text-[#141517]">Compact Elite</h1>
             <div class="flex justify-center lg:mb-20 md:mb-24 mb-36 pb-2">
                  <div class="text-[#141517] flex ">
                    <font-awesome-icon class="my-auto p-2 pl-0" icon="gear" />
                    <h1 class=" text-base text-[#141517] p1 font-body font-bold my-auto ">
                        Automatic</h1>
                    <!-- <h1  class=" text-xs p1 my-auto ">Manual </h1> -->
                  </div>
                  <div class="text-[#141517] flex ">
                    <font-awesome-icon class="my-auto p-2 " icon="user" />
                    <h1 class=" text-base text-[#141517] p1 font-body font-bold my-auto ">
                        5 People</h1>
                  </div>
                  <div class="text-[#141517] flex ">
                    <font-awesome-icon class="my-auto p-2 " icon="suitcase" />
                    <h1 class=" text-base text-[#141517] p1 font-body font-bold my-auto ">
                        1 Bags</h1>
                  </div>
                </div>
                <h1 class=" text-6xl -skew-y-6  font-body font-bold text-[#141517]" >BMW 2 series</h1>
                <div class="relative">
                <img class=" mx-auto absolute -top-20 lg:left-[15%]  pointer-events-none justify-center" src="../assets/img/car6.png" alt="">
                </div>
          </div>
      </div>
  </div>
      <div>
          <h1 class=" text-white text-4xl font-body font-bold m-8 ">Explore Similar Vehicle Classes</h1>
          <div  class="lg:flex flex-initial lg:flex-wrap w-[90%] mx-auto pb-8 justify-center">
              <div v-for="car in cars" :key="car.matricule" class="w-[350px] justify-center flex-initial my-4 mx-auto h-[420px] rounded-t rounded-b-sm border-b-8 border-[#FF385C] bg-white mr-4 transform duration-200" >
                <h1 class="text-[#141517] text-2xl m-1 font-body font-bold ">{{ car.name }}</h1>
                <p class="text-[#141517] text-lg font-body font-bold ">{{ car.description }}</p>
                <img v-if="car.matricule == 1" src="../assets/img/car6.png" alt="">
                <img v-if="car.matricule == 2" src="../assets/img/car4.png" alt="">
                <img v-if="car.matricule == 3" src="../assets/img/car7.png" alt="">
                <div class="flex mx-auto justify-center  pb-2">
                  <div class="text-[#141517]  flex ">
                    <font-awesome-icon class="my-auto p-2 pl-0" icon="gear" />
                    <h1 v-if="car.isAutomatic"  class=" text-xs p1 my-auto ">Automatic</h1>
                    <h1 v-if="!car.isAutomatic" class=" text-xs p1 my-auto ">Manual </h1>
                  </div>
                  <div class="text-[#141517]  flex ">
                    <font-awesome-icon class="my-auto p-2 " icon="user" />
                    <h1 class=" text-xs p1 my-auto ">{{ car.people }} People</h1>
                  </div>
                  <div class="text-[#141517] flex ">
                    <font-awesome-icon class="my-auto p-2 " icon="suitcase" />
                    <h1 class=" text-xs p1 my-auto ">{{ car.bags }} Bags</h1>
                  </div>
                </div>
                <router-link to="/profileCar">
                <h2 class="text-[#FF385C] text-2xl font-body font-bold ">View Details <font-awesome-icon class="" icon="play" /></h2>
                </router-link>
              </div>
              
         </div>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'profileBody',
  data() {
    return {
      cars: [],
    };
  },
  setup() {
    const state = ref('select');
    const changestate = () => {
      state.value = 'selected';
    };
    return { state, changestate };
  },
  // mounted() {
  //   fetch('http://localhost:3000/cars')
  //     .then(res => res.json())
  //     .then(data => this.cars = data)
  //     .catch(err => console.log(err.message));
  // },
};
</script>

<style  scoped>
.bg{
    background-image: url(../assets/img/3882.jpg);
}
</style>
