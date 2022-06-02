<template>
<!-- eslint-disable -->
<div class="bg-[#F1F0FE]">
  <div  class="max-w-7xl mx-auto py-6  ">
      <h1 v-scrollanimation class=" lg:text-4xl md:text-2xl text-xl -translate-y-24 duration-900
       text-[#141517] uppercase font-body font-bold"> how do i rent a car?</h1>
      <img v-scrollanimation class="lg:max-w-7xl lg:w-full w-[90%] mx-auto translate-y-24 duration-900" src="../assets/img/HowRent.png" alt="">
      <div v-scrollanimation class=" text-center flex justify-between translate-y-16 duration-900 lg:ml-4 md:ml-10 ml-0 lg:mr-12 md:mr-16 mr-2">
          <h1 class=" lg:text-xl  md:text-sm text-[10px]
           text-[#141517] uppercase font-body font-bold
          ">choose the car you like</h1>
          <h1 class="lg:text-xl md:text-sm text-[10px] text-[#141517] uppercase font-body font-bold
          ">MAKE PAYMENT AND CONCLUDE A CONTRCT</h1>
          <h1 class=" lg:text-xl md:text-sm text-[10px] text-[#141517]
           uppercase font-body font-bold">take a trip by car</h1>
      </div>
  </div>

</div>
</template>

<script>
export default {

};
</script>

<style scoped>
.before-enter{
  opacity: 0;
  /* transform: translateY(100px); */
}
.enter{
opacity: 1;
transform: translateY(0px);
}
</style>
