<template>
 <!-- eslint-disable  -->
      <HeaderReservation />
 <div class="bg-[#141517]">
  <div class=" max-w-7xl mx-auto py-8 ">
      <div>
          <div class="mb-16" >
            <h1 class="text-white text-7xl font-body font-bold uppercase"> Will done !! </h1>
            <p class="text-white text-lg font-body"> Come take your car</p>
            <p class="text-white text-lg font-body">Your oder is <a href="">#2451</a> .</p>
          </div>
      </div>
      <Map />
  </div>
 </div>
      <Footer />
</template>

<script>
import Map from '../components/Map.vue';
import HeaderReservation from '../components/Header-Reservation.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'finelStep',
  components: {
    Map,
    HeaderReservation,
    Footer,
  },
};
</script>
