<template>
<div>
    <HeaderReservation />
    <Steps />
    <Footer/>
<Auth />

</div>
</template>

<script>
import HeaderReservation from '../components/Header-Reservation.vue';
import Footer from '../components/Footer.vue';
import Steps from '../components/Steps.vue';
import Auth from '../components/Auth.vue';

export default {
  name: 'Reservation-Page',
  components: {
    HeaderReservation,
    Footer,
    Steps,
    Auth,

  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = 'IKAR | Profile Reservation';
      },
    },
  },
};
</script>

<style>

</style>
