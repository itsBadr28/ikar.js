<template>
<div>
 <HeaderVehichlesProfile />
<ProfileBody />
<Footer />
<Auth />

</div>

</template>

<script>
import HeaderVehichlesProfile from '@/components/Header-vehichlesProfile.vue';
import ProfileBody from '@/components/ProfileBody.vue';
import Footer from '@/components/Footer.vue';
import Auth from '../components/Auth.vue';

export default {
  name: 'profileCar',
  data() {
    return {
      namePage: '',
    };
  },
  components: {
    HeaderVehichlesProfile,
    ProfileBody,
    Footer,
    Auth,
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.namePage = this.$route.params.id;
    console.log(this.namePage);
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = `IKAR | Profile Vehicle`;
      },
    },
  },
};
</script>

<style>

</style>
