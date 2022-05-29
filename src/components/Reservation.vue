<template>
 <!-- eslint-disable  -->
 <div v-scrollanimation class="duration-500  relative">
  <div class=" lg:absolute -top-20 left-1/2 lg:-translate-x-1/2
  justify-center  bg-[#FF385C] mx-auto lg:rounded-2xl w-full flex max-w-7xl">
      <div class=" py-8 w-full h-full lg:flex justify-center">
       <vee-form @submit="step++" action="" :validation-schema="schema">
               <div class=" flex-initial justify-center pb-8 lg:w-[1200px]">
                <div class=" lg:w-full w-[95%] flex-initial text-left  mx-auto ">
                <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-white">PICK-UP LOCATION <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200  border-white rounded-l-md dark:bg-gray-600 dark:text-gray-400 ">
                  <font-awesome-icon icon="location-dot" />
                 </span>
                 <veeField name="pickUpLocation" type="text" class="rounded-none rounded-r bg-gray-50  outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                 border-white border-l-0 p-4  dark:bg-[#141517]  dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ZIP , CITY OR AIRPORT"  />
               </div>
               <ErrorMessage class="text-red-50" name="pickUpLocation" />
               <div class=" mt-4">
                <label for="default-toggle" class="relative inline-flex items-center mb-4 cursor-pointer">
                <input type="checkbox" value="" @click="toggleReturn" id="default-toggle" class="sr-only  peer">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-300
                dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
                  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border
                  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-base font-body text-gray-900 dark:text-gray-300">Return different lociton</span>
                </label>
               </div>
                </div>
                <div v-show="returnShow" class=" lg:w-full w-[95%]  flex-initial text-left  mx-auto mb-4">
                <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-white">RETURN LOCATION <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                <div class="flex">
                  <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200  rounded-l-md dark:bg-gray-600 dark:text-gray-400 ">
                    <font-awesome-icon icon="location-dot" />
                  </span>
                  <vee-field name="returnLocation" type="text"  class="rounded-none rounded-r bg-gray-50  outline-none text-gray-900
                  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                  p-4  dark:bg-[#141517]  dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ZIP , CITY OR AIRPORT" />
                </div>
                <ErrorMessage class="text-50" name="returnLocation" />
                </div>
                <div class=" lg:w-[100%] w-[95%] flex-initial lg:justify-between mx-auto justify-center lg:flex   text-left lg:flex-wrap mb-4 ">
               <div class="lg:flex flex-wrap   ">
                <div class=" lg:mr-0.5">
                   <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-white">PICK-UP DATE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                     <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200  rounded-l-md dark:bg-gray-600 dark:text-gray-400 ">
                       <font-awesome-icon icon="calendar-days" />
                     </span>
                     <vee-field type="date" name="pickUp" class=" rounded-r-sm w-[180px] bg-gray-50  outline-none text-gray-900
                     focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0  text-xl font-body
                     p-4  dark:bg-[#141517]  dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-12-22" />
                  </div>
                  <ErrorMessage class="text-red-50" name="pickUp" />
                </div>
                <div class="">
                   <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-white">TIME <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                    <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200  rounded-l-md lg:rounded-l-sm dark:bg-gray-600 dark:text-gray-400 ">
                      <font-awesome-icon icon="clock" />
                    </span>
                    <vee-field name="pickUpTime" type="time"  class="rounded-r-sm lg:rounded-r-md w-[150px] bg-gray-50   outline-none text-gray-900
                    focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-xl font-body
                     p-4  dark:bg-[#141517]  dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-12-22" />
                  </div>
                  <ErrorMessage class="text-red-50" name="pickUpTime" />
                </div>
               </div>
               <div class="lg:flex ">
                  <div class=" mr-0.5">
                   <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-white">RETURN DATE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                    <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 rounded-l-md dark:bg-gray-600 dark:text-gray-400">
                      <font-awesome-icon icon="calendar-days" />
                    </span>
                    <vee-field name="return" type="date"  class=" rounded-r-sm w-[180px]  outline-none text-gray-900
                      focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-xl font-body
                       p-4  bg-[#141517] dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-12-22" />
                  </div>
                  <ErrorMessage class="text-red-50" name="return" />
                </div>
                <div class=" ">
                     <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-white">TIME <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                    <div class="flex">
                     <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200  rounded-l-md  lg:rounded-l-sm dark:bg-gray-600 dark:text-gray-400">
                        <font-awesome-icon icon="clock" />
                    </span>
                    <vee-field name="returnTime" type="time"  class=" lg:rounded-r-md w-[150px]  outline-none text-gray-900
                     focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-xl font-body rounded-r-sm
                        p-4  bg-[#141517]  dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-12-22" />
                    </div>
                    <ErrorMessage class="text-red-50" name="returnTime" />
                 </div>
               </div>
               <div class=" ">
                 <div class="lg:flex">
                   <div  class=" lg:mr-0.5">
                     <label for="website-admin" class="block mb-2  text-2xl text-gray-900 font-body font-bold dark:text-white">RENTER AGE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                     <div class="flex first:text-[$00A5CF] ">
                        <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 rounded-l-md lg:rounded-l-md dark:bg-gray-600 dark:text-gray-400">
                           <font-awesome-icon  icon="person" />
                        </span>
                        <vee-field type="number" min="18" max="90"  name="renterAge" class=" h-16 w-[120px] rounded-r-sm bg-gray-50  outline-none text-gray-900
                         focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0  text-xl font-body
                          p-4  dark:bg-[#141517]  dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="AGE" />
                     </div>
          
                   </div>
           
                   <div class="flex lg:justify-end items-end my-4 lg:my-0 " >
                       <button class="btn h-16 flex  bg-white  justify-center w-full lg:w-[153px] items-center lg:rounded-l-sm rounded-sm lg:rounded-r-md ">
                            <span class="text-[#222327] my-auto  font-body font-bold text-4xl uppercase">
                             GO 
                            </span>
                            <font-awesome-icon class="text-[#222327] my-auto  text-2xl" icon="play" />
                       </button>
                   </div>
                 </div>
                  <ErrorMessage class="text-red-50" name="renterAge" />
               </div>
               </div>
        
               </div>
              </vee-form>  
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Reservation-home',
  data() {
    return {
      schema: {
        pickUpLocation: 'required|alphaSpaces',
        returnLocation: 'alphaSpaces',
        pickUp: 'required',
        pickUpTime: 'required',
        return: 'required',
        returnTime: 'required',
        renterAge: 'required|minVal:18|maxVal:90',
        fullName: 'required|alphaSpaces|min:6|max:50',
        email: 'required|email|min:5|max:100',
        phone: 'required|digits:10',
        license: 'required|digits:25',
        password: 'required|min:8',
        passwordConfirmation: 'confirmed:@password',
      },
    };
  },
  computed: {
    returnShow() {
      return this.$store.getters.returnShow;
    },
  },
  methods: {
    ...mapMutations(['toggleReturn']),
  },
};
</script>

<style scoped>
.before-enter{
  opacity: 0;
}
.enter{
transform: translateY(0px);
opacity: 1;
}
</style>
