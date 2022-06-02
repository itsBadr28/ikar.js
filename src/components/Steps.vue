<template>
 <!-- eslint-disable  -->
 <div  class="bg-[#141517]">
   <div>
     <form  action="">
     <Datepicker name="date" noToday v-model="datePickUP" :enableTimePicker="false" range multiCalendars  placeholder="Select Date"  dark required  :yearRange="[2022, 2023]" :disabledWeekDays="[6, 5]"  >
       <template #calendar-header="{ index, day }">
        <div :class="index === 4 || index === 5 ? 'text-red-500' : ''">
          {{ day }}
        </div>
      </template>
    </Datepicker> 
<button @click="dddd"  type="button">click</button>
     </form>
     <!-- <Datepicker  v-model="dateReturn" noToday :enableTimePicker="false"  placeholder="Select Date"  required  :yearRange="[2022, 2023]" :disabledWeekDays="[6, 5]" minutesIncrement="30"   dark >
      <template #calendar-header="{ index, day }">
        <div :class="index === 4 || index === 5 ? 'text-red-500' : ''">
          {{ day }}
        </div>
      </template>
    </Datepicker> -->
   </div>
<div class="  bg-[#141517] max-w-7xl mx-auto py-16 wrapper-stepper">
        <div class="bg-[#141517] stepper lg:w-full w-[95%] mx-auto max-w-7xl">
            <div class="stepper-progress">
                <div class="stepper-progress-bar" :style="'width:' + stepperProgress "></div>
            </div>

            <div class="stepper-item" :class="{ 'current': step == item, 'success': step > item }" v-for="item in 4" :key="item">
                <div class="stepper-item-counter">
                     <font-awesome-icon class="icon-success text-2xl" icon="check" />
                    <span v-if="item == 1" class="number font-body font-bold">
                        <font-awesome-icon icon="calendar" />
                    </span>
                    <span v-if="item == 2" class="number">
                        <font-awesome-icon icon="car" />
                    </span>
                    <span v-if="item == 3" class="number">
                       <font-awesome-icon icon="plus" />
                    </span>
                    <span v-if="item == 4" class="number">
                       <font-awesome-icon icon="credit-card" />
                    </span>
                </div>
                <span v-if="item == 1" class="stepper-item-title">
                    Reservation
                </span>
                <span v-if="item == 2" class="stepper-item-title">
                    Select
                </span>
                <span v-if="item == 3" class="stepper-item-title">
                    Extras
                </span>
                <span v-if="item == 4" class="stepper-item-title">
                    Confirmation
                </span>
            </div>
        </div>
          <div class="controls mt-20 lg:w-full w-[95%] mx-auto ">
            <button class="btnn bg-white font-body rounded-sm px-10 py-2  text-lg font-bold" @click="step--" :disabled="step == 1">
                Back
            </button>
            <button class="btnn font-body px-10 py-2 rounded-sm  text-lg font-bold btnn--green-1" @click="step++" :disabled="step == 5">
                Next
            </button>
        </div>
        <div class="stepper-content" v-for="item in 5" :key="item">
            <div class="stepper-pane" v-if="step == item">
             <div v-show="item == 1" >
              <vee-form @submit="register" :validation-schema="schema">
               <div class=" flex-initial justify-center pb-8 mx-auto max-w-7xl">
                <div class=" lg:w-full w-[95%] flex-initial text-left  mx-auto ">
                <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">PICK-UP LOCATION <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <font-awesome-icon icon="location-dot" />
                 </span>
                 <veeField name="pickUpLocation" type="text" class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ZIP , CITY OR AIRPORT"  />
               </div>
               <ErrorMessage class="text-red-600" name="pickUpLocation" />
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
                <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">RETURN LOCATION <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                <div class="flex">
                  <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <font-awesome-icon icon="location-dot" />
                  </span>
                  <vee-field name="returnLocation" type="text"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                  focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ZIP , CITY OR AIRPORT" />
                </div>
                <ErrorMessage class="text-red-600" name="returnLocation" />
                </div>
                <div class=" lg:w-[100%] w-[95%] flex-initial lg:justify-between mx-auto justify-center lg:flex   text-left lg:flex-wrap mb-4 ">
               <div class="lg:flex flex-wrap   ">
                <div class=" lg:mr-0.5">
                   <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">PICK-UP DATE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                     <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       <font-awesome-icon icon="calendar-days" />
                     </span>
                    <Datepicker hideInputIcon closeOnScroll class="" v-model="dateReturn"  :minDate="new Date()" :enableTimePicker="false" placeholder="SELECT DATE"  required  :yearRange="[2022, 2023]" :disabledWeekDays="[6, 5]"  dark />

                  </div>
                </div>
                <!-- <div class="">
                   <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">TIME <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                    <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md lg:rounded-l-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <font-awesome-icon icon="clock" />
                    </span>
                    <vee-field name="pickUpTime" type="time"  class="rounded-r-sm lg:rounded-r-md w-[150px] bg-gray-50 border  outline-none text-gray-900
                    focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-xl font-body
                    border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-12-22" />
                  </div>
                  <ErrorMessage class="text-red-600" name="pickUpTime" />
                </div> -->
               </div>
               <div class="lg:flex ">
                  <div class=" mr-0.5">
                   <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">RETURN DATE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                    <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <font-awesome-icon icon="calendar-days" />
                    </span>
                    <Datepicker hideInputIcon closeOnScroll class="" v-model="dateReturn"  :minDate="new Date()" :enableTimePicker="false" placeholder="SELECT DATE"  required  :yearRange="[2022, 2023]" :disabledWeekDays="[6, 5]"  dark />
                  </div>
                </div>
                <!-- <div class=" ">
                     <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">TIME <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                    <div class="flex">
                     <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border rounded-l-md border-r-0 border-gray-300 lg:rounded-l-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <font-awesome-icon icon="clock" />
                    </span>
                    <vee-field name="returnTime" type="time"  class=" lg:rounded-r-md w-[150px] bg-gray-50 border outline-none text-gray-900
                     focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-xl font-body rounded-r-sm
                       border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12-12-22" />
                    </div>
                    <ErrorMessage class="text-red-600" name="returnTime" />
                 </div> -->
               </div>
               <div class=" ">
                 <div class="lg:flex">
                   <div  class=" lg:mr-0.5">
                     <label for="website-admin" class="block mb-2  text-2xl text-gray-900 font-body font-bold dark:text-gray-300">RENTER AGE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                     <div class="flex first:text-[$00A5CF] ">
                        <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md lg:rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                           <font-awesome-icon  icon="person" />
                        </span>
                        <vee-field type="number" min="18" max="90"  name="renterAge" class=" h-16 w-[150px] rounded-r-sm bg-gray-50 border outline-none text-gray-900
                         focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0  text-xl font-body
                         border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="AGE" />
                     </div>
          
                   </div>
           
                   <div class="flex lg:justify-end items-end my-4 lg:my-0 " >
                       <button  type="submit" class="btn h-16 flex  bg-[#FF385C]  justify-center w-full lg:w-[153px] items-center lg:rounded-l-sm rounded-sm lg:rounded-r-md ">
                            <span class="text-white my-auto  font-body font-bold text-4xl uppercase">
                             GO 
                            </span>
                            <font-awesome-icon class="text-white my-auto  text-2xl" icon="play" />
                       </button>
                   </div>
                 </div>
                  <ErrorMessage class="text-red-600" name="renterAge" />
               </div>
               </div>
        
               </div>
              </vee-form>    
              <div class="relative h-[500px] w-full ">
                 <GeoErrorModel @closeGeoError="closeGeoError" v-if="geoError" :geoErrorMsg="geoErrorMsg" />
                 <MapFeatures  :fetchCoords="fetchCoords" :coords="coords" @toggleSearchResults="toggleSearchResults" @getGeolocation="getGeolocation" @plotResult="plotResult"
                 @removeResult="removeResult" :searchResults="searchResults" class="w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2]" /> 
                <div v-if="item === 1" id="map" class="h-full z-[1]"></div> 
             </div> 
             </div> 
              <div v-show="item == 2 " class="mt-4 flex">
              <div>
                <div v-scrollanimation class="duration-700 -translate-x-24 lg:w-[400px] w-[95%] text-left lg:h-[1200px] lg:block hidden mx-auto rounded-sm font-bold bg-white">
          <div class=" py-4  border-b flex font-body justify-between  text-[#141517] border-[#141517]">
           <div class="flex">
            <h1 class=" ml-4 mr-1 text-4xl">Filter</h1>
          <h1 class=" text-xl my-auto items-center"> (1)</h1></div>
          <div class="my-auto">
            <h2 class=" text-xl text-right mr-12">clear All</h2>
          </div>
          </div>
          <div>
            <div class="  border-b pb-6 border-[#141517]">
                <div class="flex w-[88%] justify-between">
                 <h1 class=" font-body mx-4 my-8 text-black text-2xl">Vehicle Type</h1>
                 <h1 class="my-auto">Total from</h1>
                 </div> 
               <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Cars</span>
                </label></div>
              <div class="my-auto">257$</div>
             </div>
              <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Suvs</span>
                </label></div>
              <div class="my-auto">257$</div>
             </div>
             <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Trucks</span>
                </label></div>
              <div class="my-auto">257$</div>
             </div>
             <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Vans</span>
                </label></div>
              <div class="my-auto">257$</div>
             </div>
              </div>
              <div class="border-b border-[#141517] pb-4" >
                <h1 class=" mt-4 font-body font-bold m-4 text-black text-2xl" >Passengers</h1>  
                <select name="passengers"  class="w-[336px] font-bold outline-none border-2 border-black p-2  ml-4 mb-4  font-body  text-black text-lg" id="">
                <option class="font-body font-bold  text-black text-lg" value="">2 +</option>
                <option class="font-body font-bold text-black text-lg" value="">4 +</option>
                <option class="font-body font-bold text-black text-lg" value="">5 +</option>
                <option class="font-body font-bold text-black text-lg" value="">7 +</option>
                <option class="font-body font-bold text-black text-lg" value="">8 +</option>
                <option class="font-body font-bold text-black text-lg" value="">10 +</option>
                <option class="font-body font-bold text-black text-lg" value="">15 +</option>
                </select>
              </div>
              <div class=" border-b border-[#141517]">
               <div class="flex w-[88%] justify-between">
                 <h1 class=" font-body mx-4 my-8 text-black text-2xl">Fuel</h1>
                 <h1 class="my-auto">Total from</h1>
                 </div> 
               <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Diesel</span>
                </label>
                </div>
              <div class="my-auto">257$</div>
             </div>
             <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Petrol</span>
                </label>
                </div>
              <div class="my-auto">257$</div>
             </div>
             <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Electric</span>
                </label>
                </div>
              <div class="my-auto">257$</div>
             </div>
              <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Gas</span>
                </label></div>
              <div class="my-auto">257$</div>
             </div>
              </div>
              <div class="pb-4">
                  <div class="flex w-[88%] justify-between">
                 <h1 class=" font-body mx-4 my-8 text-black text-2xl">Transmission</h1>
                 <h1 class="my-auto">Total from</h1>
                 </div> 
               <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Automatic</span>
                </label></div>
              <div class="my-auto">257$</div>
             </div>
              <div class=" flex justify-between pl-4 w-[85%] mt-2">
                <div>
                <label class="inline-flex items-center">
                <input type="checkbox" class="w-10 text-green-600 h-10" />
                <span class=" font-body text-lg  ml-2">Manual</span>
                </label></div>
              <div class="my-auto">257$</div>
             </div>
              </div>
              
          </div>
                </div>
               </div>
         <div class="mb-36 mx-auto">
           <div v-scrollanimation class=" duration-700 -translate-y-24 py-4  lg:border-t border-b  w-[90%] lg:w-[850px] ml-8  justify-between border-white flex">
               <div class="flex">
            <h1 class=" ml-4 text-2xl my-auto  text-white  font-body font-bold">CHOOSE A VEHICLE CLASS</h1>
              <h1 class=" ml-2 text-sm my-auto text-white  font-body font-bold">12 RESULTS</h1>
              </div>           
              <div class="flex"> <h1 class="ml-4 text-xl text-white my-auto font-body font-bold">SORT BY: </h1> 
                <select class=" w-[200px] mx-1 bg-white text-xl outline-none border border-[#141517]  p-2 font-body font-bold  text-[#FF385C]" name="" id="">
                 <option class=" text-xl font-body font-bold" value="">Featured</option>
                 <option class=" text-xl font-body font-bold" value="">Lowest price</option>
                 <option class=" text-xl font-body font-bold" value="">More price</option>
                </select>
              </div>
          </div>
          <div v-if="cars" v-for="(car, index) in cars" :key="car.matricule"   class="ml-8 font-bold mt-8">
            <div v-scrollanimation class="translate-y-24 duration-900 mb-4">
              <div class="w-[90%] lg:w-[850px] h-44 flex hover:bg-[#2C2E33]   border-b justify-between  transform duration-200">
                <div><img class="w-[280px]" :src="`data:image/png;base64,${car.picture}`" alt=""></div>
                <div class="w-[280px]  text-left">
                  <h1 class="text-white pb-4 text-2xl font-body"> {{ car.name }} </h1>
                <p class="text-white text-xl font-body"> {{ car.description }} </p>
                <div class="flex pb-2">
                  <div class="text-white flex ">
                    <font-awesome-icon class="my-auto p-2 pl-0" icon="gear" />
                    <h1 v-if="car.isAutomatic"  class=" text-xs p1 my-auto ">Automatic</h1>
                    <h1 v-else class=" text-xs p1 my-auto ">Manual </h1>
                  </div>
                  <div class="text-white flex ">
                    <font-awesome-icon class="my-auto p-2 " icon="user" />
                    <h1 class=" text-xs p1 my-auto ">{{ car.placeNumber }} People</h1>
                  </div>
                  <div class="text-white flex ">
                    <font-awesome-icon class="my-auto p-2 " icon="suitcase" />
                    <h1 class=" text-xs p1 my-auto ">{{ car.bagsNumber }} Bags</h1>
                  </div>
                  <div class="text-white flex ">
                    <font-awesome-icon class="my-auto p-2 " icon="gas-pump" />
                    <h1 class=" text-xs p1 my-auto ">Electric</h1>
                  </div>
                </div>
                <h2 @click.prevent="isDetailsOpen[index] = !isDetailsOpen[index]" class="text-[#FF385C] cursor-pointer text-sm my-auto font-body font-bold">
                <font-awesome-icon v-if="!isDetailsOpen[index]" class="text-sm px-2 " icon="angle-down"/>
                <font-awesome-icon v-if="isDetailsOpen[index]" class="text-sm px-2 " icon="angle-up"/>
                FEATURES & PRICE DETAILS 
                </h2>
                </div>

                <div class=" ml-4 font-body font-bold">
                    <h1 class="w-64 text-left  text-white text-xl border-b">PRICE</h1>
                    <div class="w-64 my-2 flex justify-center">
                      <div class=" border-r border-white px-4 ">
                        <h1 class=" text-white text-xl "> ${{ car.pricePerDay }} </h1>
                    <h1 class=" text-white text-xl "> Par day </h1>
                    </div>
                      <div class="px-4">
                        <h1 class=" text-white text-xl "> ${{ car.pricePerDay * 5 + 24.68 }} </h1>
                    <h1 class=" text-white text-xl "> Total </h1></div>
                    </div>
                    <button @click.prevent="totals" class="focus:bg-[#008000] focus:text-white font-body font-bold text-xl  hover:bg-white
                     hover:text-[#141517] transform duration-200 btn w-64 text-white bg-[#FF385C]">Select</button>
                </div>
              </div>
              <div v-if="isDetailsOpen[index]" class="bg-[#343536]">
                <div class=" flex justify-between">
                  <div>
                    <h1 class="text-2xl text-left font-body ml-2 font-bold text-white">Vehicle Features</h1>
                    <ul class=" text-white ml-2  text-sm my-4 font-body list-disc justify-between flex flex-wrap">
                      <li v-if="1" class="mx-4">Air Bags</li>
                      <li v-show="car.hasAMFMstereoRadio" class="mx-4">AM/FM Stereo Radio</li>
                      <li v-show="car.isAutomatic" class="mx-4">Automatic</li>
                      <li v-show="car.hasairconditioning" class="mx-4">Air Conditioning</li>
                      <li v-show="car.hascruisecontrol" class="mx-4">Cruise Control</li>
                      <li v-show="car.hasbluetooth" class="mx-4">Bluetooth</li>
                      <li v-show="car.hasleatherInterior" class="mx-4">Leather interior</li>
                    </ul>
                    <h1 class="text-left mb-2 ml-2 text-white text-sm">
                    * Rates, taxes and fees do not reflect rates, taxes and fees applicable to <br> non-included optional 
                     coverages or extras added later. <br>
                    ** Converted amounts are estimates and are subject to changes as <br> exchange rates vary.View
                    Currency Conversion Details
                  </h1>
                  </div>
                  <div class=" w-[38%]">
                   <h1 class="text-2xl mb-2 text-left font-body border-b border-white font-bold text-white"> Price Details </h1>
                   <div class="flex w-[95%]  my-2  justify-between text-white">
                     <h1>5 Day(s)</h1>
                     <h1> $ {{ car.pricePerDay * 5 }}* </h1>
                   </div>
                   <div class="flex  w-[95%] py-2 justify-between text-white border-b border-white">
                     <h1>Tax & Fee Details</h1>
                     <h1>$24.68*</h1>
                   </div>
                   <div class="flex justify-between my-2  w-[95%] text-white">
                     <h1>Estimated Total</h1>
                     <h1>${{ car.pricePerDay * 5 + 24.68 }}* </h1>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="mx-auto">
                <img src="../assets/img/404-1.png" class="w-96 mx-auto" alt="">
                <h1 class="text-4xl text-white font-body font-bold"> Sorry no Vehicles!!</h1>
          </div>
          
      </div>
             </div>
             <div v-show="item == 3"  class="pb-8">
              <h1 class="font-body font-bold text-white text-2xl text-left">ADD EXTRAS</h1>
              <div class="flex my-4 justify-between">
                <h1 class="font-body text-white bg-[#] my-auto text-xl">Equipment</h1>
                <button class="font-body text-white bg-[#FF385C] w-32 text-xl btn" @click="step++">next</button>
              </div>
              <div class="">
      <div class="flex justify-between max-w-7xl bg-white border-b-[0.5px] border-opacity-50 border-[#141517] p-4">
        <div>
        <h1 class="text-left text-[#141517] text-2xl font-body font-bold">Booster Seat</h1>
        <h1 class="text-left text-[#141517] text-lg">Travel with your child safely and securely.</h1>
        </div>
        <div class="flex w-[550px]">
          <div>
          <h1 class=" text-left font-body font-bold text-[#141517] text-lg">$ 10.48 / day ($ 73.38 max)</h1>
        </div>
        <div class="flex my-auto mx-4">
          <font-awesome-icon class="text-sm px-2 rotate-90 my-auto text-[#FF385C] " icon="play"/>
          <h1 class=" text-left font-body font-bold text-[#141517]">DETAILS</h1>
        </div>
        </div>
          <div class="flex my-auto">
            <font-awesome-icon class="bg-[#FF385C] text-2xl text-white rounded-full mx-1 m-2 p-1" icon="plus" />
            <h1 class="text-xl font-body text-[#141517] font-bold m-2 mx-0">ADD</h1>
          </div>
      </div>
      <div class="flex justify-between max-w-7xl bg-white border-b-[0.5px] border-opacity-50 border-[#141517] p-4">
        <div>
        <h1 class="text-left text-[#141517] text-2xl font-body font-bold">Baby Seat</h1>
        <h1 class="text-left text-[#141517] text-lg">Travel with your baby safely and securely.</h1>
        </div>
        <div class="flex w-[550px]">
          <div>
          <h1 class=" text-left font-body font-bold text-[#141517] text-lg">$ 10.48 / day ($ 73.38 max)</h1>
        </div>
        <div class="flex my-auto mx-4">
          <font-awesome-icon class="text-sm px-2 rotate-90 my-auto text-[#FF385C] " icon="play"/>
          <h1 class=" text-left font-body font-bold text-[#141517]">DETAILS</h1>
        </div>
        </div>
          <div class="flex my-auto">
            <font-awesome-icon class="bg-[#FF385C] text-2xl text-white rounded-full mx-1 m-2 p-1" icon="plus" />
            <h1 class="text-xl font-body text-[#141517] font-bold m-2 mx-0">ADD</h1>
          </div>
      </div>
      <div class="flex justify-between max-w-7xl bg-white border-b-[0.5px] border-opacity-50 border-[#141517] p-4">
        <div>
        <h1 class="text-left text-[#141517] text-2xl font-body font-bold">GPS</h1>
        <h1 class="text-left text-[#141517] text-lg">Find your destination easier with this GPS device.</h1>
        </div>
        <div class="flex w-[550px]">
          <div>
          <h1 class=" text-left font-body font-bold text-[#141517] text-lg">$ 10.48 / day ($ 73.38 max)</h1>
        </div>
        <div class="flex my-auto mx-4">
          <font-awesome-icon class="text-sm px-2 rotate-90 my-auto text-[#FF385C] " icon="play"/>
          <h1 class=" text-left font-body font-bold text-[#141517]">DETAILS</h1>
        </div>
        </div>
          <div class="flex my-auto">
            <font-awesome-icon class="bg-[#FF385C] text-2xl text-white rounded-full mx-1 m-2 p-1" icon="plus" />
            <h1 class="text-xl font-body text-[#141517] font-bold m-2 mx-0">ADD</h1>
          </div>
      </div>
              </div>
             <div>
               <h1 class="flex justify-end text-white font-body my-2 text-3xl">Clear</h1>
             </div>
             </div>
             <div class="flex justify-between" v-show="item == 4">
               <div >
                 <div class="w-96 bg-gray-600 rounded mb-2">
                   <div>
                 <h1 class=" font-body font-bold text-2xl text-white border-b p-4 border-white text-left">Rental Details</h1>
                 </div>
                 <div class="flex justify-between p-4 ">
                 <h1 class="text-white text-lg font-body font-bold ">DATES & TIMES</h1>
                <button  class="text-[#141517] text-lg font-body hover:text-[#ef4444] " @click.prevent="step = 1"> edit</button>
                 </div>
                 <div class=" pb-1">
                   <div class="mb-4">
                      <h1 class="text-white text-sm font-body font-bold text-left px-4 ">PICK UP:</h1>
                        <p class="text-white text-xs font-body font-bold text-left px-4 ">Wednesday, May 4, 2022, 09:30 AM</p>
                   </div>
                   <div class="pb-4 mx-4 border-b  border-[#ffffff7e]">
                      <h1 class="text-white text-sm font-body font-bold text-left  ">Return:</h1>
                   <p class="text-white text-xs font-body font-bold text-left ">Thursday, May 12, 2022, 12:00 PM</p>
                   </div>
                   <div class="m-4">
                     <h1 class="text-white text-sm font-body font-bold text-left  ">PICK-UP & RETURN LOCATION</h1>
                     <h1 class="text-white text-xs font-body font-bold text-left  ">eloued 39026</h1>
                   </div>
                  
                 </div>
                 </div>
                 <div class="w-96 bg-gray-600 rounded mb-2">
                   <div>
                 <h1 class=" font-body font-bold text-sm text-white border-b py-2 px-4 border-white text-left">Your rental includes</h1>
                 </div>
                 <div class="flex justify-between p-4 ">
                 <h1 class="text-white text-sm font-body font-bold ">VEHICLE</h1>
                 <button  class="text-[#141517] text-lg font-body hover:text-[#ef4444] " @click.prevent="step = 2"> edit</button>
                 </div>
                 <div class=" pb-1 border-b border-[#ffffff7e] flex justify-between mx-4">
                   <div class="my-auto">
                      <h1 class="text-white text-sm font-body font-bold text-left  ">Compact</h1>
                      <p class="text-white text-xs font-body font-bold text-left  ">Nissan Versa or similar</p>
                   </div>
                   <div>
                      <img src="../assets/img/car1.png" alt="" class="w-32">
                   </div>
                 </div>
                 <div class=" m-4 flex justify-between">
                   <div class="flex text-left ">
                    <h1 class="text-white text-sm font-body font-bold pr-1 ">EXTRAS </h1>
                    <h1 class="text-white text-sm font-body font-bold "> (2)</h1>
                   </div>
                   <div>
                    <button  class="text-[#141517] text-lg font-body hover:text-[#ef4444] " @click.prevent="step = 2"> edit</button>
                   </div> 
                   </div>
                   <div class=" m-4  border-b border-[#ffffff7e]">
                     <div class="flex justify-between">
                       <h1 class="text-white text-sm font-body font-bold ">Damage Waiver</h1>
                       <h1 class="text-white text-sm font-body ">Included</h1>
                     </div>
                     <div class="flex justify-between">
                       <h1 class="text-white text-sm font-body font-bold ">Extended Protection</h1>
                       <h1 class="text-white text-sm font-body ">Included</h1>
                     </div>
                   </div>
                   <div class=" m-4   border-b border-[#ffffff7e]">
                     <div class="flex justify-between pb-4">
                        <h1 class="text-white text-lg font-body font-bold ">ESTIMATED TOTAL</h1>
                        <h1 class="text-white text-base font-body font-bold ">19255 DZD</h1>
                     </div>
                     
                     <h1 class="text-white text-sm text-left font-body pb-2 ">- Pay either by credit card or cash on delivery .<br>
                       - In the event of delay in returning at the agreed time, the amount will be: Total + (time of delay * 1.25) . <br>
                       - In the event of intentional damage to the vehicle, all repair costs shall be paid . <br>
                        - In case of suspected illegal operations, the rent is banned and the police are reported . </h1>
                   </div>
                   <div class=" m-4">
                     <h1 class="text-white text-lg text-left font-body font-bold "> CANCELLATION INFORMATION</h1>
                     <div class=" flex justify-between pb-4">
                       <div class="block pr-8">
                         <font-awesome-icon class=" text-[#FF385C]" icon="x" />
                         <font-awesome-icon class=" text-[#FF385C]  -top-2 relative" icon="car" />
                       </div>
                       <div>
                         <h1 class="text-white text-sm text-left font-body">If your plans change you can modify or cancel at anytime!</h1>
                       </div>

                     </div>
                   </div>
                   
                
                 </div>
                 


               </div>
               <div class="w-[850px] ">
                 <div class="text-left my-4">
                   <h1 class="text-2xl text-white">Lorem, ipsum dolor.</h1>
                   <p class="text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus iusto quasi corporis, impedit porro.</p>
                 </div>
                     <vee-form @submit="register" :validation-schema="schema"  >
                        <div class=" flex-initial pb-8 mx-auto max-w-7xl">
                         <div >
                           <h1 class=" text-center font-body font-bold text-4xl mb-8 text-white ">
                             <span class=" border-b-4 border-[#FF385C] ">SIGN UP</span> 
                           </h1>
                         </div>
                        <div class=" lg:w-full w-[95%] flex-initial mb-2 text-left  mx-auto ">
                          <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">EMAIL<span class="font-body font-bold text-red-500 text-xl">*</span></label>
                           <div class="flex">
                            <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                             <font-awesome-icon icon="envelope" />
                            </span>
                            <vee-field name="email" type="email"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                            focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                              border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com" />
                          </div>
                          <ErrorMessage class="text-red-600" name="email" />
                        </div>
                        <div class=" lg:w-full w-[95%] flex-initial mb-2 text-left  mx-auto ">
                            <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">FULL NAME <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                            <div class="flex">
                              <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <font-awesome-icon icon="user" />
                              </span>
                             <vee-field name="fullName" type="text"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                               focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                             border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example" />
                            </div>
                            <ErrorMessage class="text-red-600" name="fullName" />
                        </div>
                       <div class=" lg:w-full w-[95%] flex-initial mb-2 text-left  mx-auto ">
                        <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">PHONE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                       <div class="flex">
                        <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <font-awesome-icon icon="phone" />
                       </span>
                       <vee-field name="phone" type="tel"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                         focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                        border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0770000000 | 0660000000 | 0550000000" />
                      </div>
                      <ErrorMessage class="text-red-600" name="phone" />
                       </div>
                       <div class=" lg:w-full w-[95%] flex-initial mb-2 text-left  mx-auto ">
                       <label for="website-admin" class="block mb-2 text-2xl
                        text-gray-900 font-body font-bold dark:text-gray-300">DRIVING LICENSE NUMBER <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                      <div class="flex">
                       <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       <font-awesome-icon icon="id-card" />
                       </span>
                      <vee-field name="license" type="tel" class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                      focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                      border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2321354798542" />
                     </div>
                     <ErrorMessage class="text-red-600" name="license" />
                       </div>
                       <div class=" lg:w-full w-[95%] flex-initial mb-2 text-left  mx-auto ">
                        <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">PASSWORD <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                        <div class="flex">
                          <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                           <font-awesome-icon icon="lock" />
                          </span>
                          <vee-field name="password" type="password"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                          focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                          border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" />
                        </div>
                        <ErrorMessage class="text-red-600" name="password" />
                       </div>
                       <div class=" lg:w-full w-[95%] flex-initial mb-2 text-left  mx-auto ">
                       <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">PASSWORD CONFIRMATION <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                       <div class="flex">
                        <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                         <font-awesome-icon icon="lock" />
                        </span>
                        <vee-field name="passwordConfirmation" type="password"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                       focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                       border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" />
                      </div>
                       <ErrorMessage class="text-red-600" name="passwordConfirmation" />
                       </div>
                       <div class=" lg:w-full w-[95%] flex-initial mb-2 text-left my-4  mx-auto">
                       <button type="submit" class="btn h-16 flex  bg-[#FF385C]  justify-center lg:mx-auto w-full lg:w-[250px] items-center rounded-sm ">
                         <span class="text-white my-auto  font-body font-bold text-4xl uppercase">
                          SIGN UP
                         </span>
                        </button>
                      </div>
                       </div>
                   </vee-form>
                   <vee-form action="" :validation-schema="schema">
                       <div class=" flex-initial pb-8 mx-auto max-w-7xl">
                        <div >
                          <h1 class=" text-center font-body  text-4xl mb-8 text-white "> OR
                           <span class=" border-b-4 font-bold border-[#FF385C] ">SIGN IN</span> 
                          </h1>
                        </div>
                        <div class=" lg:w-full w-[95%] mb-2 flex-initial text-left  mx-auto ">
                         <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">EMAIL</label>
                           <div class="flex">
                             <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                               <font-awesome-icon icon="envelope" />
                             </span>
                             <vee-field name="email" type="text"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                            focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                            border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                             dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com" />
                           </div>
                           <ErrorMessage class="text-red-600" name="email" />
                        </div>
                       <div class=" lg:w-full w-[95%] flex-initial text-left  mx-auto ">
                           <label for="website-admin" class="block mb-2 text-2xl text-gray-900 font-body font-bold dark:text-gray-300">PASSWORD</label>
                           <div class="flex">
                               <span class="inline-flex items-center px-3.5 text-2xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                 <font-awesome-icon icon="lock" />
                               </span>
                               <vee-field name="password" type="password"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl font-body
                                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" />
                           </div>
                           <ErrorMessage class="text-red-600" name="password" />
                       </div>
                       <div class="flex justify-center">
                       <div class=" flex lg:w-full w-[95%]">
                        <a href="" class="text-left text-sm mt-2 text-white hover:text-[#FF385C]">forgot password?</a>
                        </div>
                       </div>
        
                       <div class=" lg:w-full w-[95%] flex-initial text-left my-4  mx-auto">
                           <button class="btn h-16 flex  bg-[#FF385C]  justify-center lg:mx-auto w-full lg:w-[250px] items-center rounded-sm ">
                             <span class="text-white my-auto  font-body font-bold text-4xl uppercase">
                                SIGN IN
                             </span>
                          </button>
                        </div>
                       </div>
                   </vee-form>
               </div>

             </div>
             <div v-show="item == 5" >
               <h1 class="text-white text-7xl font-body font-bold uppercase"> Will done !! </h1>
               <p class="text-white text-lg font-body"> Come take your car</p>
               <p class="text-white text-lg font-body">Your oder is <a href="">#2451</a> .</p>
               </div>
               
            </div>
        </div>

     
    </div>
    </div> 
</template>

<script>
import { mapMutations } from 'vuex';
import { onMounted, ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
import GeoErrorModel from './GeoErrorModal.vue';
import MapFeatures from './MapFeatures.vue';

export default {
  name: 'Steps-',
  components: {
    GeoErrorModel,
    MapFeatures,
    Datepicker,
  },
  data() {
    return {
      // date: '',
      range: '',
      isDetailsOpen: [],
      step: 1,
      // total: 0,
      cars: [],
      hour: '',
      minute: '',
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
        license: 'required',
        password: 'required|min:8',
        passwordConfirmation: 'confirmed:@password',
      },
    };
  },
  setup() {
    const datePickUP = ref();
    const dateReturn = ref();
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      datePickUP.value = [startDate, endDate];
    });
    const startTime = ref({ hours: 0, minutes: 0 });
    return {
      datePickUP,
      dateReturn,
      startTime,
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
  computed: {
    // total() {
    //   return this.$store.getters.total;
    // },
    returnShow() {
      return this.$store.getters.returnShow;
    },
    stepperProgress() {
      const x = this.step;
      if (x !== 5) {
        return `${(100 / 3) * (this.step - 1)}%`;
      }
      return `${(100 / 3) * (4 - 1)}%`;
    },
  },
  methods: {
    ...mapMutations(['totals']),
    ...mapMutations(['toggleReturn']),
    dddd() {
      console.log(this.datePickUP);
      console.log(this.datePickUP[1].getDate() - this.datePickUP[0].getDate());
    },
    register(values) {
      console.log(values);
      console.log('values');
    },
    getTime() {
      setInterval(() => {
        const date = new Date();
        const [hour, minute] = [date.getHours(), date.getMinutes()];
        this.hour = hour + 1;
        this.minute = minute;
      }, 1000);
    },
  },
  beforeMount() {
    this.getTime();
  },
};
</script>

<style lang="scss" scoped>
// eslint-disable
$default    :   #C3C3C3;
$green-1    :   #00A5CF;
$blue       :   #00A5CF;
$transiton  :   all 500ms ease;

.before-enter{
  opacity: 0;
  /* transform: translateY(100px); */
}
.enter{
opacity: 1;
transform: translateY(0px);
}

body{
    // background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    // color: #ffffff;
    // width: 100%;
    // height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
}

.tx-green-1{
    color:  $green-1;
    font-weight: 600;
}

.wrapper-stepper{
    box-shadow: rgba($color: #000000, $alpha: 0.09);
}

.stepper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    // width: 660px;
    position: relative;
    z-index: 0;
    margin-bottom: 24px;

    &-progress{
        position: absolute;
        background-color: #00A5CF;
        height: 2px;
        z-index: -1;
        left: 0;
        right: 0;
        margin: 0 auto;

        &-bar{
            position: absolute;
            left: 0;
            height: 100%;
            width: 0%;
            background-color:#008000;
            transition: $transiton;
        }
    }
}

.stepper-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #00A5CF;
    transition: $transiton;

    &-counter{
        height: 68px;
        width: 68px;
        display: grid;
        place-items: center;
        background-color: #fff;
        border-radius: 100%;
        border: 2px solid #00A5CF;
        position: relative;
        transition: $transiton;

        .icon-success{
            position: absolute;
            opacity: 0;
            transform: scale(0);
            width: 24px;
            transition: $transiton;
        }

        .number{
            font-size: 22px;
            transition: $transiton;
        }
    }

    &-title{
        position: absolute;
        font-size: 14px;
        bottom: -24px;
        color: $default;
        transition: $transiton;
    }
}

.stepper-item.success{
    .stepper-item-counter{
        border-color: #008000;
        background-color: #008000;
        color: #fff;
        font-weight: 600;

        .icon-success{
            opacity: 1;
            transform: scale(1);
        }

        .number{
            opacity: 0;
            transform: scale(0);
        }
    }

    .stepper-item-title{
        color: #008000;
    }
}

.stepper-item.current{
    .stepper-item-counter{
        border-color: $green-1;
        background-color: $green-1;
        color: #fff;
        font-weight: 600;
    }

    .stepper-item-title{
        color: #00A5CF;
    }
}

.stepper-pane{
    color: #333;
    text-align: center;
    // padding: 120px 60px;
    // box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
    margin: 40px 0;
}

.controls{
    display: flex;
}

.btnn{
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 6px 16px;
    border: 1px solid;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    transition: all 150ms;
    // border-radius: 4px;
    width: fit-content;
    // font-size: 0.75rem;
    color: #333;
    // background-color: #f0f0f0;
    // border-color: #f0f0f0;

    &:disabled{
        opacity: 0.5;
        pointer-events: none;
    }

    &--green-1{
        background-color: $green-1;
        border-color: $green-1;
        color: #fff;
        margin-left: auto;
    }
}
</style>
