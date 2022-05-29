<template>
<div class="">
  <div v-show="isBsrShow" class=" flex justify-between  bg-slate-600 text-white">
    <div></div>
    <div class="flex">
      <font-awesome-icon class=" my-auto mx-2" icon="receipt" />
    <h1 class="font-body text-lg"
    >Use Code <span class="font-body font-bold"> Ikar20 </span>For
    <span class="font-body font-bold"> 20% off</span> </h1>
    </div>
    <div class="my-auto mr-4 ">
    <font-awesome-icon @click.prevent="toggleAuthBar"
     class="my-auto hover:text-[#141517] text-xl float-right" icon="xmark" />
    </div>
  </div>
  <div>
    <router-view />
  </div>

</div>
<div >
</div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState(['isBsrShow']),
  },
  methods: {
    ...mapMutations(['toggleAuthBar']),
  },
};
</script>

<style scoped>
html{
  font-size: 62.5%;
}

.bg{
  background-image: url("assets/img/bg-intf.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.before-enter{
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;

}
.enter{
opacity: 1;
transform: translateY(0px);
}
</style>
