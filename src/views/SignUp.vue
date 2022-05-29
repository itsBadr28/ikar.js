<template>
<!-- eslint-disable -->
  <div class="min-w-screen min-h-screen bg-[#141517] flex items-center justify-center px-5 py-5">
    <div class="bg-[#f7f6fe] text-gray-500 rounded-xl shadow-xl  w-full overflow-hidden" style="max-width:1000px">
        <div class="">
            <!-- steps-bar -->
            <div  class="md:flex w-full">
                <div class="w-full pt-4">
                  <div class="flex">
                   <div class="w-1/4">
                     <div class="relative mb-2">
                       <div class="w-10 h-10 mx-auto bg-[#ff385c] rounded-full text-lg text-white flex items-center">
                         <span class="text-center text-white w-full">
                           <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                             <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                           </svg>
                         </span>
                       </div>
                     </div>

                     <div class="text-xs text-center font-body font-bold md:text-base">Enter Name</div>
                   </div>

                    <div class="w-1/4">
                     <div class="relative mb-2">
                       <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                         <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                           <div class="w-0 bg-[#ff6682] py-1 rounded" style="width: 100%;"></div>
                         </div>
                       </div>

                        <div class="w-10 h-10 mx-auto bg-[#ff385c] rounded-full text-lg text-white flex items-center">
                          <span class="text-center text-white w-full">
                            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div class="text-xs text-center font-body font-bold md:text-base">Add User</div>
                    </div>

                    <div class="w-1/4">
                      <div class="relative mb-2">
                        <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                          <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                            <div class="w-0 bg-[#ff6682] py-1 rounded" style="width: 100%;"></div>
                          </div>
                        </div>
                
                        <div class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                          <span class="text-center text-gray-600 w-full">
                            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>

                       <div class="text-xs text-center font-body font-bold md:text-base">Password</div>
                     </div>

                     <div class="w-1/4">
                       <div class="relative mb-2">
                         <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                           <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                             <div class="w-0 bg-green-300 py-1 rounded" style="width: 0%;"></div>
                           </div>
                         </div>

                         <div class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                           <span class="text-center text-gray-600 w-full">
                            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                              <path d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"></path><path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"></path>
                            </svg>
                           </span>
                         </div>
                       </div>

                       <div class="text-xs font-body font-bold text-center md:text-base">Finished</div>
                     </div>
                  </div>
                </div>
            </div>
            <!-- Name -->
            <div v-if="step === 'name' "  class="md:flex w-full">
              <div class="hidden md:block w-1/2  py-6 px-10">
            <img src="../assets/img/Sign.svg" alt="">
              </div>
              <div class="w-full md:w-1/2 py-6 px-5 md:px-10">
                <div class="text-left mb-6">
                    <h1 class="font-bold font-body text-3xl text-gray-900">Name</h1>
                    <p class="font-body uppercase text-xs">your name is perfect enter it</p>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">First Name</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="user" /></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border border-gray-200 outline-none focus:border-gray-500" placeholder="John">
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">Last Name</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="user" /></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border border-gray-200 outline-none focus:border-gray-500" placeholder="Smith">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">User Name</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="user" /></div>
                                <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-gray-500" placeholder=" Jhon Dipp">
                            </div>
                        </div>
                    </div>
                    <div class="px-1 mb-4">
                        <h1 class="text-[#141517] font-body text-lg text-left">Enter the first name and  last name on the driver's license card and enter the user name What do you want us to call you.</h1>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button @click=" step = 'email' " class="block w-[40%] max-w-xs ml-1 mr-auto bg-[#ff385c] hover:bg-[#d81b3d] rounded-sm px-3 py-3">
                            <h1 class="text-white text-md font-body font-bold" >
                            REGISTER NOW
                            </h1>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- Email phone -->
            <div v-if="step === 'email' " class="md:flex w-full">
              <div class="hidden md:block w-1/2  py-6 px-10">
            <img src="../assets/img/Email.svg" alt="">
              </div>
              <div class="w-full md:w-1/2 py-6 px-5 md:px-10">
                <div class="text-left mb-6">
                    <h1 class="font-bold font-body  text-3xl text-gray-900">Email & Phone</h1>
                    <p class="font-body uppercase">Your email and phone number are unique keep it</p>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">Email</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="envelope" /></div>
                                <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-gray-500" placeholder="Jhon.dippemailcom">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">Phone</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="phone" /></div>
                                <input type="tel" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-gray-500" placeholder="0785000000">
                            </div>
                        </div>
                    </div>
                    <div class="px-1 mb-4">
                        <h1 class="text-[#141517] font-body text-lg text-left">Enter your real email and phone so that we can communicate with you and become a big family.</h1>
                    </div>
                   
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button @click=" step = 'password' " class="block w-[40%] max-w-xs ml-1 mr-auto bg-[#ff385c] hover:bg-[#d81b3d] rounded-sm px-3 py-3">
                            <h1 class="text-white text-md font-body font-bold" >
                            REGISTER NOW
                            </h1>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- password -->
            <div v-if="step === 'password' " class="md:flex w-full">
              <div class="hidden md:block w-1/2  py-6 px-10">
            <img src="../assets/img/password.svg" alt="">
              </div>
              <div class="w-full md:w-1/2 py-6 px-5 md:px-10">
                <div class="text-left mb-6">
                    <h1 class="font-bold font-body text-3xl text-gray-900">Password</h1>
                    <p class="font-body uppercase">Your password is yours, don't share it.</p>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">Password</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="unlock" /></div>
                                <input type="tel" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-gray-500" placeholder="***********">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">password confirmation</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="lock" /></div>
                                <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-gray-500" placeholder="***********">
                            </div>
                        </div>
                    </div>
                    <div class="px-1 mb-4">
                        <h1 class="text-[#141517] font-body text-lg text-left">Make a strong password to become more secure.</h1>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button @click=" step = 'img' " class="block w-[40%] max-w-xs ml-1 mr-auto bg-[#ff385c] hover:bg-[#d81b3d] rounded-sm px-3 py-3">
                            <h1 class="text-white text-md font-body font-bold" >
                            REGISTER NOW
                            </h1>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <!-- img -->
            <div v-if="step === 'img' " class="md:flex w-full">
              <div class="hidden md:block w-1/2  py-6 px-10">
            <img src="../assets/img/Image.svg" alt="">
              </div>
              <div class="w-full md:w-1/2 py-6 px-5 md:px-10">
                <div class="text-left mb-6">
                    <h1 class="font-bold font-body text-3xl text-gray-900">Image & Driving License</h1>
                    <p class="font-body uppercase">Your beauty transcends pictures.</p>
                </div>
                    <div class=" flex justify-start mb-3">
                        <label for="" class="text-xs text-left font-body font-bold">Image</label>
                    </div>
                    <div class="flex justify-center items-center w-full mb-4">
                      <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                           <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                           <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                           <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (MAX. 800x400px)</p>
                       </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                       </label>
                    </div> 
                <div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class=" flex justify-start mb-3">
                              <label for="" class="text-xs text-left font-body font-bold">Driving License</label>
                            </div>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><font-awesome-icon class="mdi mdi-account-outline text-gray-400 text-lg" icon="address-card" /></div>
                                <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-gray-500" placeholder="5742154236632">
                            </div>
                        </div>
                    </div>
                    <div class="px-1 mb-4">
                        <h1 class="text-[#141517] font-body text-lg text-left">upload your image  and enter your number Driving License (required).</h1>
                    </div>
                    <!-- <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
                            </div>
                        </div>
                    </div> -->
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button class="block w-[40%] max-w-xs ml-1 mr-auto bg-[#ff385c] hover:bg-[#d81b3d] rounded-sm px-3 py-3">
                            <h1 class="text-white text-md font-body font-bold" >
                            REGISTER NOW
                            </h1>
                            </button>
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
  name: 'SignUp',
  data() {
    return {
      step: 'name',
    };
  },
};
</script>
