<template>
  <!-- eslint-disable  -->
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
    :class="{ hidden: !authModalShow }">
    <div class="flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-[#141517] rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 bg-[#141517] text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl text-white font-body font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAuthModal">
              <font-awesome-icon class=" text-white scale-150" icon="circle-xmark" />
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a class="block text-white rounded py-3 px-4 transition"
                href="#" @click.prevent="tab = 'login'"
                :class="{
                  'text-[#141517] bg-[#FF385C]': tab === 'login',
                  'hover:text-[#4B5563]': tab === 'register'
                }">
                Login
              </a>
            </li>
            <li class="flex-auto text-center">
              <a class="block text-white rounded py-3 px-4 transition"
                href="#" @click.prevent="tab = 'register'"
                :class="{
                  ' text-[#141517]  bg-[#FF385C]': tab === 'register',
                  'hover:text-[#4B5563]': tab === 'login'
                }">Register</a>
            </li>
          </ul>

          <!-- Login Form -->
           <vee-form v-show="tab === 'login'" :validation-schema="schemaLogin" @submit="login">
            <div class="mb-3">
                <label for="website-admin" class="block mb-2 text-xl text-white font-body font-bold  uppercase">email <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <font-awesome-icon icon="envelope" />
                 </span>
                 <veeField name="email" type="email" class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com"  />
               </div>
               <ErrorMessage class="text-red-600" name="email" />
               </div>
             <div class="mb-4">
                   <label for="website-admin" class="block mb-2 text-xl text-white font-body font-bold ">PASSWORD <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                        <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                           <font-awesome-icon icon="lock" />
                        </span>
                        <vee-field name="password" type="password"  class="rounded-none rounded-r-sm border outline-none
                         focus:ring-blue-500 focus:border-blue-500 block flex-1  lg:w-[264px] text-lg  font-body
                         border-gray-300 p-4  bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" />
                    </div>
                   <ErrorMessage class="text-red-600" name="password" />
                </div>
                <div class="flex items-start mb-6">
                   <div class="flex items-center ml-4 h-5">
                     <vee-field id="remember" name="remember" type="checkbox" value="1" class="w-5 h-5 border-0 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                   </div>
                   <label for="remember" class="ml-2 text-sm font-body font-bold my-auto text-gray-900 dark:text-gray-300">Remember me</label>
                 </div>
            <button type="submit"
              class="block w-full bg-[#4B5563] py-4 px-3 rounded transition hover:bg-[#30363f]">
                <span class="font-body font-blod text-lg text-white">Register</span>
            </button>
          </vee-form>       
            <vee-form action="/updateImg" v-show="tab === 'register'" :validation-schema="schema" 
            @submit="register">
               <div class="flex justify-between mb-2">
                <div class="">
                <label for="website-admin" class="block mb-2 text-xl text-white font-body font-bold  uppercase">first NAME <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <font-awesome-icon icon="user" />
                 </span>
                 <veeField name="firstName" type="text" class="rounded-none rounded-r-sm bg-gray-50 border outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 lg:w-[254px] text-lg font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example "  />
               </div>
               <ErrorMessage class="text-red-600" name="firstName" />
                 </div>
               <div class="">
                <label for="website-admin" class="block mb-2 text-lg text-white font-body font-bold  uppercase">Last NAME <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <font-awesome-icon icon="user" />
                 </span>
                 <veeField name="lastName" type="text" class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 lg:w-[254px] text-lg font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example "  />
               </div>
               <ErrorMessage class="text-red-600" name="lastName" />
               </div>
               </div>  
               <div class="mb-3">
                <label for="website-admin" class="block mb-2 text-lg text-white font-body font-bold  uppercase">email <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <font-awesome-icon icon="envelope" />
                 </span>
                 <veeField name="email" type="email" class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@email.com"  />
               </div>
               <ErrorMessage class="text-red-600" name="email" />
               </div>
               <div class="mb-3">
                <label for="website-admin" class="block mb-2 text-lg text-white font-body font-bold  uppercase">PHONE <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <font-awesome-icon icon="location-dot" />
                 </span>
                 <veeField name="phone" type="tel" class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0770000000 | 0660000000 | 0550000000"  />
               </div>
               <ErrorMessage class="text-red-600" name="phone" />
               </div>
               <div class="mb-3">
                <label for="website-admin" class="block mb-2 text-lg text-white font-body font-bold  uppercase">DRIVING LICENSE NUMBER <span class="font-body font-bold text-red-500 text-xl">*</span></label>
               <div class="flex">
                 <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <font-awesome-icon icon="id-card" />
                 </span>
                 <veeField name="license" type="number" class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-lg font-body
                 border-gray-300 p-4  dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0770000000 | 0660000000 | 0550000000"  />
               </div>
               <ErrorMessage class="text-red-600" name="license" />
               </div>
               <div class="flex justify-between mb-4">
                 <div class="">
                   <label for="website-admin" class="block mb-2 text-lg text-white font-body font-bold ">PASSWORD <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                        <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                           <font-awesome-icon icon="lock" />
                        </span>
                        <vee-field name="password" type="password"  class="rounded-none rounded-r-sm border outline-none
                         focus:ring-blue-500 focus:border-blue-500 block flex-1  lg:w-[254px] text-lg  font-body
                         border-gray-300 p-4  bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" />
                    </div>
                   <ErrorMessage class="text-red-600" name="password" />
                </div>
                <div class="">
                   <label for="website-admin" class="block mb-2 text-lg text-white font-body font-bold ">PASSWORD CONFIRMATION <span class="font-body font-bold text-red-500 text-xl">*</span></label>
                   <div class="flex">
                        <span class="inline-flex items-center px-3.5 text-xl text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-sm dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                           <font-awesome-icon icon="lock" />
                        </span>
                        <vee-field name="confirm_password" type="password"  class="rounded-none rounded-r bg-gray-50 border outline-none text-gray-900
                         focus:ring-blue-500 focus:border-blue-500 block flex-1 lg:w-[254px]  text-lg font-body
                         border-gray-300 p-4 dark:bg-[#222327] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**************" />
                    </div>
                   <ErrorMessage class="text-red-600" name="confirm_password" />
                </div>
                </div>
               
            <!-- <div class="mb-3">

              <label class="inline-block mb-2">Name</label>
              <vee-field type="text" name="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name" />
              <ErrorMessage class="text-red-600" name="name" />
            </div>
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field type="email" name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <vee-field type="number" name="age"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" />
              <ErrorMessage class="text-red-600" name="age" />
            </div>
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field type="password" name="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" />
              <ErrorMessage class="text-red-600" name="password" />
            </div>
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <vee-field type="password" name="confirm_password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password" />
              <ErrorMessage class="text-red-600" name="confirm_password" />
            </div>
            <div class="mb-3 pl-6">
              <vee-field type="checkbox" name="tos" value="1"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block" />
              <label class="inline-block">Accept terms of service</label>
              <ErrorMessage class="text-red-600 block" name="tos" />
            </div> -->
          <router-link to="/uploadImg" >
            <button type="submit"
              class="block w-full bg-[#4B5563] py-4 px-3 rounded transition hover:bg-[#30363f]">
                <span class="font-body font-blod text-lg text-white">Register</span>
            </button>
            </router-link>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Auth-',
  data() {
    return {
      tab: 'login',
      schema: {
        // pickUpLocation: 'required|alphaSpaces',
        firstName: 'required|min:2|max:100|alphaSpaces',
        lastName: 'required|min:3|max:100|alphaSpaces',
        email: 'required|min:3|max:100|email',
        phone: 'required|digits:10',
        license: 'required',
        // age: 'required|min_value:18|max_value:100',
        password: 'required|min:3|max:100',
        confirm_password: 'required|confirmed:@password',
        // tos: 'required',
      },
      schemaLogin: {
        password: 'required|min:3|max:100',
        email: 'required|min:3|max:100|email',
        remember: '',
      },
    };
  },
  computed: {
    ...mapState({
      modal: 'authModalShow',
    }),
    ...mapState(['authModalShow']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    register(values) {
      console.log(values);
    },
    login(values) {
      console.log(values);
    },
  },
};
</script>
