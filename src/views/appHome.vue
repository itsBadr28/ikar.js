<template>
 <!-- eslint-disable  -->
  <div>
<div class=" flex-initial  h-[700px] shadow-xl w-full
 bg-no-repeat bg-cover bg-center bg-[#141517]  lg:bg-left ">
 <div  class=" max-w-7xl mx-auto">
<Header />
<Interface />
</div>
</div>
<Reservation />
<AboutUs  id="about"/>
<HowDo />
<!-- no respo -->
<Topvehicle  id="cars"/>
<Contact  id="contact"/>
<Footer />
<Auth />
</div>
</template>

<script>
import Header from '../components/Header.vue';
import Interface from '../components/Interface.vue';
import Reservation from '../components/Reservation.vue';
import AboutUs from '../components/AboutUs.vue';
import HowDo from '../components/HowDo.vue';
import Topvehicle from '../components/TopVehicle.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
import Auth from '../components/Auth.vue';

export default {
  name: 'app-home',
  components: {
    Header,
    Interface,
    Reservation,
    AboutUs,
    Topvehicle,
    // Contact,
    Footer,
    HowDo,
    Auth,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = 'IKAR | Home';
      },
    },
  },
};
</script>

<style>

</style>
