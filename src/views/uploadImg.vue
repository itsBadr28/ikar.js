<template>
  <div class="bg-[#141517] h-[100vh]">
    <div class="relative ">
            <img  class=" absolute pointer-events-none
            lg:-top-24 -top-44 opacity-60 z-0 md:-rotate-90
            md:scale-75 scale-[200%] md:left-[22%] -left-[3.25rem] hidden md:block
             lg:h-[900px] h-[500px]"
             src="../assets/img/liq-2.png" alt="">
          </div>
      <HeaderUpdateImg />
  </div>
</template>

<script>
import HeaderUpdateImg from '../components/header-updateImg.vue';

export default {
  name: 'UpdateImg',
  components: {
    HeaderUpdateImg,
  },
};
</script>

<style>

</style>
