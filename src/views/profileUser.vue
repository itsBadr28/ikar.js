<template>
<!-- eslint-disable -->
   <div>
     <HeaderProfileUser />
     <UserInfo />
     <!-- <Footer class="pt-72" /> -->
   </div>
</template>

<script>
// import HeaderProfile from '../components/userInfo.vue';
import UserInfo from "../components/userInfo.vue";
import HeaderProfileUser from "../components/HeaderProfileUser.vue";
import Footer from "../components/Footer.vue";

export default {
  name: 'Profile-',
  components: {
    // HeaderProfile,
    HeaderProfileUser,
    UserInfo,
    // Footer,
  },
};
</script>
