<template class="" >
<!-- eslint-disable -->
<div class="bg-[#141517] ">
  <div class=" max-w-7xl lg:flex flex-initial py-4 mx-auto">
      <div class="lg:w-[400px] w-[95%] lg:mt-20 mt-0 text-left lg:h-[550px] mx-auto rounded-sm font-bold bg-white">
          <div class="mb-4 py-4 border-b flex font-body  justify-between text-[#141517] border-[#141517]">
            <div class=" flex">
              <h1 class=" ml-4 text-4xl">Filter</h1>
              <h1 class=" text-xl my-auto items-center">(1)</h1>
            </div>
              <h2 class=" text-xl my-auto mr-4 text-right">Clear All</h2>
          </div>
          <div  class="lg:block flex justify-between w-full">
              <div class=" ml-4">
              <h1 class=" font-body lg:my-8 my-2  text-black lg:text-2xl">Vehicle Type</h1>
              <div class="  lg:block hidden ">
              <div class="mt-2 mr-2 ">
                <label class="inline-flex items-center">
                <input @click="TypeCars" type="checkbox" class="lg:w-10 md:w-8 w-6 text-green-600 h-10"  />
                <span  class=" font-body lg:text-lg  ml-2">Cars</span>
              </label>
             </div>
              <div class="mt-2 mr-2">
                <label class="inline-flex items-center">
                <input @click="TypeSuvs" type="checkbox" class="lg:w-10 md:w-8 w-6  focus:ring-0  text-green-600 h-10"  />
                <span class=" font-body lg:text-lg ml-2">SUVs</span>
              </label>
             </div>
             <div class="mt-2 mr-2">
                <label class="inline-flex items-center">
                <input @click="TypeTrucks" type="checkbox" class="lg:w-10 md:w-8 w-6   focus:ring-0 text-green-600 h-10"  />
                <span class=" font-body lg:text-lg ml-2">Trucks</span>
              </label>
             </div>
              <div class="mt-2 mr-2">
                <label class="inline-flex items-center">
                <input @click="TypeVans" type="checkbox" class="lg:w-10 md:w-8 w-6  focus:ring-0 text-green-600 h-10"  />
                <span class=" font-body  lg:text-lg ml-2">Vans</span>
              </label>
             </div>
             </div>
             <div class="lg:hidden block ">
               <select name="All"  class="lg:w-[336px] md:w-[320px] w-[150px] font-bold outline-none border-2 uppercase border-black p-2  lg:ml-4  mb-4  font-body  text-black text-lg" id="">
                <option @click="TypeCars" class="font-body font-bold  text-black text-lg uppercase" value="">cars</option>
                <option @click="TypeSuvs" class="font-body font-bold text-black text-lg " value="">SUVs</option>
                <option @click="TypeTrucks" class="font-body font-bold text-black text-lg uppercase" value="">trucks</option>
                <option @click="TypeVans" class="font-body font-bold text-black text-lg uppercase" value="">Vans</option>
                <option @click="AllTypes" class="font-body font-bold text-black text-lg uppercase" value="">ALL</option>
                </select>
             </div>
              </div>
              <div class="mr-4">
                <h1 class=" mt-2 mb-2 font-body font-bold lg:m-4 m-8 lg:ml-4 ml-2 text-black lg:text-2xl" >Passengers</h1>  
                <select v-model="filterPassengers" name="passengers"  class="lg:w-[336px] md:w-[336px] w-[150px] font-bold outline-none border-2 border-black p-2  lg:ml-4 ml-2 mb-4  font-body  text-black text-lg" id="">
                <option  class="font-body font-bold  text-black text-lg" value="2">2 +</option>
                <option  class="font-body font-bold text-black text-lg" value="4">4 +</option>
                <option  class="font-body font-bold text-black text-lg" value="5">5 +</option>
                <option  class="font-body font-bold text-black text-lg" value="7">7 +</option>
                <option  class="font-body font-bold text-black text-lg" value="8">8 +</option>
                <option  class="font-body font-bold text-black text-lg" value="10">10 +</option>
                <option  class="font-body font-bold text-black text-lg" value="12">12 +</option>
                </select>
              </div>
              
          </div>
      </div>
       <div class="mb-36 ">
          <div class=" lg:mt-20 mx-auto py-4  lg:border-t border-b w-[95%]  lg:w-[850px] justify-between border-white flex">
              <h1 class="lg:text-4xl text-xl text-white my-auto  font-body font-bold">Top Vehicle</h1>          
              <div class=" flex">
                <h1 class="ml-4 lg:text-4xl text-xl my-auto text-white font-body font-bold">State:</h1> 
                <select class=" w-[100px] bg-[#141517] outline-none border border-[#141517]  p-2 mx-4 font-body  text-[#FF385C] text-lg" name="" id="">
                 <option value="">Eloued</option>
                 <option value="">Biskra</option>
                 <option value="">Alger</option>
                 <option value="">Constantine</option>
                 <option value="">Guelma</option>
                 <option value="">Mila</option>
                </select>
              </div>
          </div>
          <div class="  w-[95%]  lg:w-[840px] mx-auto font-bold mt-8 flex justify-start flex-wrap ">
              <div v-if="cars" v-for="car in cars" :key="car.matricule" >
                <div v-if="filterType === car.type && filterPassengers <= car.placeNumber" class="lg:w-[265px] mb-4 mr-3 md:w-[265px] lg:h-80  bg-[#2C2E33]  hover:bg-[#2e3139]  transform duration-200" >
                 <h1 class="text-white lg:text-2xl md:text-lg m-1 font-body">{{ car.name }}</h1>
                <p class="text-white lg:text-lg md:text-base text-sm font-body">{{ car.description }}</p>
                <img :src="`data:image/png;base64,${car.picture}`" alt="">
                <router-link :to="`/profileVehicle/${car.description}`" >
                  <h2 class="text-[#FF385C] lg:text-2xl md:text-lg font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
                </router-link>
              </div>
                </div>
                <div v-else class=" mx-auto" >
                <img src="../assets/img/404-1.png" class="w-96" alt="">
                <h1 class="text-4xl text-white font-body font-bold"> Sorry no Vehicles!!</h1>
              </div>
             
            </div>
      </div> 
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Top-vehicle',
  data() {
    return {
      cars: [],
      filterType: 'Cars',
      filterPassengers: 2,
    };
  },
  mounted() {
    fetch('http://localhost:3000/api/admin/vehicles')
      .then(res => res.json())
      .then(data => {
        // const vehicles = data.filter(vehicle => vehicle.placeNumber >= this.filterPassengers);
        const set = new Set();
        const Output = [];
        data.forEach(car => {
          if (!set.has(car.description)) {
            set.add(car.description);
            Output.push(car);
            console.log(data);
          }
        });

        this.cars = Output;
        console.log(this.cars);
      })
      .catch(err => console.log(err.message));
  },
  methods: {
    TypeCars() {
      this.filterType = 'Cars';
    },
    TypeSuvs() {
      this.filterType = 'Suvs';
    },
    TypeTrucks() {
      this.filterType = 'Truck';
    },
    TypeVans() {
      this.filterType = 'Vans';
    },
    // AllTypes() {
    //   filterType = '',
    // },
  },
};
</script>

<style>

</style>
