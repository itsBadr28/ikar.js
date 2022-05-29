<template>
<!-- eslint-disable -->
  <div class=" bg-[#141517]" >
      <div class="max-w-7xl mx-auto">
      <div class="flex pt-8 justify-between">
          <h1 class="text-white font-body font-bold text-6xl">RENTAL VEHICLE</h1>
          <router-link to="/reservation">
          <button class=" my-auto text-white rounded-sm  font-body font-bold text-lg
           bg-[#FF385C] w-60 h-12
            ">Start a Reservation</button>
            </router-link>
      </div>
      <div class="mt-20 flex">
      <div>
          <div class="w-[400px]  text-left  rounded-sm font-bold bg-white">
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
              <div class="p-4 border-b border-[#141517]">
                 <label for="range" class="font-bold font-body text-2xl my-4 text-[#141517]">Price($) </label>
                 <input type="range" min="0" max="100" value="50" class=" w-[335px] p-2" >
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
          <div></div>
      </div>
      <div>
         <div class="mb-36">
          <div class="  py-4 ml-8 border-t justify-between border-b w-[830px] border-white flex">
              <h1 class=" ml-4 text-xl my-auto text-white  font-body font-bold">12 RESULTS</h1>          
              <div class="flex"> <h1 class="ml-4 text-xl text-white my-auto font-body font-bold">SORT BY: </h1> 
                <select class=" w-[200px] mx-1 bg-white text-xl outline-none border border-[#141517]  p-2 font-body font-bold  text-[#FF385C]" name="" id="">
                 <option class=" text-xl font-body font-bold" value="">Featured</option>
                 <option class=" text-xl font-body font-bold" value="">Lowest price</option>
                 <option class=" text-xl font-body font-bold" value="">More price</option>
                </select>
                <button class="focus:bg-slate-400 my-auto py-1 "> <img src="../assets/icon/bar.png" class="w-10 mx-1   rotate-90 " alt=""> </button>
                <button class="focus:bg-slate-400 my-auto py-1"> <img src="../assets/icon/grid.png" class="w-10 mx-1" alt=""></button>
              </div>
          </div>
          <div class="ml-8 font-bold mt-8 ">
            <div class="flex mb-4">
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] mr-4 transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car1.png" alt="">
                <router-link to="/profileCar">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
                </router-link>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] mr-4 transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car2.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car3.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
            </div>
            <div class="flex  mb-4">
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] transform duration-200 mr-4" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car4.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] transform duration-200 mr-4" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car5.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class=" " icon="play" /></h2>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car6.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
            </div>
            <div class="flex  mb-4">
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] transform duration-200 mr-4" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car7.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] mr-4 transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car8.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car9.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
            </div>
            <div class="flex  mb-4">
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] mr-4 transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car10.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] mr-4 transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car11.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
              <div class="w-[265px] h-80 bg-[#2C2E33]  hover:bg-[#2e3139] transform duration-200" >
                <h1 class="text-white text-2xl m-1 font-body">Full Size Hybrid</h1>
                <p class="text-white text-lg font-body">Ford Fusion Hybrid or similar*</p>
                <img src="../assets/img/car12.png" alt="">
                <h2 class="text-[#FF385C] text-2xl font-body">View Details <font-awesome-icon class="" icon="play" /></h2>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
      
      </div>
  </div>
</template>

<script>
export default {
  name: 'Rental-Vehicle',
};
</script>

<style>

</style>
