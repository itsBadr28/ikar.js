<template>
  <div>
<HeaderVehcle />
<RentalVehicle />
<Footer />
<Auth />
  </div>
</template>

<script>
import HeaderVehcle from './components/Header-vehicle.vue';
import RentalVehicle from './components/RentalVehicle.vue';
import Footer from './components/Footer.vue';
import Auth from './components/Auth.vue';

export default {
  name: 'vehicles-',
  components: {
    HeaderVehcle,
    RentalVehicle,
    Footer,
    Auth,
  },
};
</script>

<style>

</style>
