<template>
  <!-- eslint-disable  -->
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
    :class="{ hidden: !reportShow }">
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
            <p class="text-2xl text-white font-body font-bold">Enter Your Report</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleReport">
              <font-awesome-icon class=" text-white scale-150" icon="circle-xmark" />
            </div>
          </div>

           <form action="">
					<ul class="my-2 list-disc text-red-400 font-body text-xl px-6">
                        <li>Problems in the booking stages.</li>
                        <li>Abuses by one of our employees.</li>
                        <li>Car damage or accident.</li>
                        <li>...</li>
                    </ul>
					<!-- <hr class="my-6"> -->
					<label class="uppercase text-sm font-bold font-body text-white opacity-70">Problem</label>
					<select class=" p-3 mt-2 mb-4 w-full font-body font-bold bg-slate-100 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none">
						<option value="">Site problem</option>
						<option value="">Car accident</option>
						<option value="">Police impound the car</option>
						<option value="">Get the car in critical condition</option>
						<option value="">A malfunction in the car</option>
						<option value="">Get the car in a dirty condition</option>
						<option value="">Physical or verbal attack by a staff member</option>
						<option value="">Improper behavior on the part of an employee</option>
					</select>
					<label class="uppercase text-sm font-bold font-body text-white opacity-70">Description of the accident</label>
					<textarea type="text" class="p-3 mt-2 max-h-[250px] min-h-[200px] mb-4 w-full font-body font-bold bg-slate-100 rounded" placeholder="Tell us in detail what happened to you so that we can help you" cols="30" rows="10"></textarea>
					<input type="submit" class="py-3 px-6 my-2 w-full  bg-red-500 font-body font-bold text-white uppercase rounded hover:bg-red-600 cursor-pointer ease-in-out duration-300" value="Send">
				</form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Report-',
  computed: {
    ...mapState(['reportShow']),
  },
  methods: {
    ...mapMutations(['toggleReport']),
  },
};
</script>
