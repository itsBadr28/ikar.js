<template>
<!-- eslint-disable -->
  <div class="max-w-7xl mx-auto">
      <div class="  h-[95%] my-auto lg:rounded-3xl rounded bg-[#141517] shadow-2xl shadow-[#141517] border-0  ">
              <h1 class="lg:text-4xl text-2xl text-center m-8 mb-0 pt-4 mt-16 text-white font-bold font-body">Contact information</h1>
              
                  <div class="mt-4 w-full mx-auto lg:justify-between justify-center flex flex-wrap ">
                  <div class="flex m-8 ml-10 mb-10  items-center text-white">
                      <font-awesome-icon class=" lg:text-3xl text-xl mr-4" icon="at" />
                      <div class=" font-body lg:text-xl text-left">
                          <h2 class="font-bold">Email</h2>
                          <h3 class="sans">Ikar@contact.com</h3>
                      </div>
                  </div>                 
                   <div class="flex m-8 ml-10 mb-10  items-center text-white">
                      <font-awesome-icon class=" lg:text-3xl text-xl mr-4" icon="phone" />
                      <div class=" font-body lg:text-xl text-left">
                          <h2 class="font-bold">Phone</h2>
                          <h3>0779255292 / 032153833</h3>
                      </div>
                  </div>
                   <div class="flex m-8 ml-10 mb-10 items-center text-white">
                      <font-awesome-icon class=" lg:text-3xl text-xl mr-4" icon="location-dot" />
                      <div class=" font-body lg:text-xl text-left">
                          <h2 class="font-bold">Address</h2>
                          <h3 >Eloued - eloued</h3>
                      </div>
                  </div>
                   <div class="flex m-8 ml-10 mb-10 items-center text-white">
                     <font-awesome-icon class=" lg:text-3xl text-xl mr-4" icon="sun" />
                      <div class=" font-body lg:text-xl text-left">
                          <h2 class="font-bold">Working hours</h2>
                          <h3 >8 am  - 8 pm</h3>
                      </div>
                  </div>
                  </div>

              
          </div>
        <div class="flex lg:w-1/2 w-[90%] my-8 lg:h-full h-10 mx-auto">
            <span class="inline-flex items-center px-3.5 text-2xl text-gray-900  border border-r-0 
             rounded-l-md bg-gray-600 dark:text-gray-400 border-gray-600">
                <font-awesome-icon icon="envelope" />
            </span>
            <vee-field name="email" type="text"  class="rounded-none  border-r-0  border outline-none text-gray-900
                focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full lg:text-xl font-body text-xs
                 border-gray-300 p-4  bg-[#141517] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com" />
            <button class=" lg:text-xl text-xs text-white font-body font-bold rounded-r-md  bg-[#FF385C]  lg:p-4 p-1 ">Subscribe</button>
        </div>
      <div class="flex flex-wrap lg:w-full w-[90%] mx-auto  justify-between pb-8 border-b  my-auto border-[#141517] ">
          <div class="h-[95%]">
              <h1 class="text-[#141517] text-lg font-body  text-left font-bold mb-4"
              >Type Vehicle</h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">  Cars  </h1>
              <h1 class="text-[#FF385C] text-base text-left font-body font-bold mb-2">  Suvs  </h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"> Trucks </h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">  Vans  </h1>
          </div>
          <div>
              <div>
                  <h1 class="text-[#141517] text-lg font-body text-left font-bold mb-4
                  ">Customer Support</h1>
                  <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2
                   ">Customer Support</h1>
                  <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2
                   ">Help & FAQs</h1>
              </div>
              <div>
                  <h1 class="text-[#141517] text-lg font-body text-left font-bold mb-4"
                  >Ikar Insiders</h1>
                  <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"
                  >Sign Up</h1>
                  <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"
                  >Sign In</h1>
              </div>
          </div>
          <div>
              <div>
              <h1 class="text-[#141517] text-lg font-body text-left font-bold mb-4
              " >Reservations</h1>
              <router-link to="/reservation">
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"
              >Start a Reservation</h1>
              </router-link>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"
              >View/Modify/Cancel</h1>
              </div>
              <div>
                  <h1 class="text-[#141517] text-lg font-body text-left font-bold mb-4"
                  >Campany</h1>
                  <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"
                  >About Ikar</h1>
                  <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"
                  >Our Service</h1>
                  <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2"
                  >App Ikar</h1>
              </div>
          </div>
          <div>
              <h1 class="text-[#141517] text-lg font-body text-left font-bold mb-4">Location</h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">Eloued</h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">Adrar</h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">Biskra</h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">
                  Constantine</h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">Mila</h1>
              <h1 class="text-[#FF385C] text-base font-body text-left font-bold mb-2">Guelma</h1>
          </div>
      </div>
      <div class="flex justify-between m-4" >
          <div class="flex">
          <img class="w-16 h-16" src="../assets/img/logo.png" alt="">
          <h1 class="text-[#141517] mr-8 my-auto uppercase tracking-wide text-4xl font-body font-bold">IKAR</h1>
          </div>
          <div class=" flex flex-wrap">
              <img src="../assets/icon/facebook.png" class="w-8 mx-2 my-auto rounded" alt="facebook">
              <img src="../assets/icon/github.png" class="w-8 mx-2 my-auto rounded" alt="github">
              <img src="../assets/icon/instagram.png" class="w-8 mx-2 my-auto rounded" alt="instagram">
              <img src="../assets/icon/whatsapp.png" class="w-8 mx-2 my-auto rounded" alt="whatsapp">
              <img src="../assets/icon/linkedin.png" class="w-8 mx-2 my-auto rounded" alt="linkedin">

          </div>

      </div>
  </div>
  <div class=" bg-[#141517]">
      <div class="flex max-w-7xl mx-auto justify-between md:px-4 pl-4 pr-2 ">
          <div>
              <h1 class="text-white md:text-sm text-xs lg:text-2xl font-body font-bold
              ">© 2022 IKAR, Inc. All rights Reserved.</h1>
              <h1 class="text-white md:text-xs text-[8px] lg:text-lg font-body"
              ><span> Privacy Policy</span>  |
               <span > Market Loss Policy </span>|
               <span >User Agreement</span> </h1>
          </div>
           <div class="flex flex-wrap justify-end">
               <div class="flex   mx-2">
                   <img  src="../assets/icon/Tailwindcss.png"
                   class="lg:w-8 w-4  my-auto ml-2 " alt="Tailwindcss">
                   <h1 class="text-white text-xs lg:text-lg my-auto">Tailwind.css</h1>
               </div>
               <div class="flex mx-2">
                   <img src="../assets/icon/vuejs.png"
                   class="lg:w-8 w-4 mx-2 my-auto " alt="Vuejs">
                   <h1 class="text-white text-xs lg:text-lg my-auto">Vue.js</h1>
               </div>
               <div class="flex mx-2">
                   <img src="../assets/icon/nodejs.jpg"
                   class="lg:w-8 w-4 mx-2 my-auto " alt="Nodejs">
                   <h1 class="text-white text-xs lg:text-lg my-auto">Node.js</h1>
               </div>
          </div>
</div>
      </div>
</template>

<script>
export default {
  name: 'Footer-',

};
</script>

<style>

</style>
