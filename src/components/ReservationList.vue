<template>
  <!-- eslint-disable -->
  <div class=" max-w-7xl dark:bg-white bg-[#171818] m-2 my-4 mt-32 border mx-auto shadow-xl rounded-lg">
            <header class="px-5 py-4 border-b dark:border-gray-100 flex justify-between border-gray-800">
              <div class="flex">
                <h2 class="font-bood font-bold my-auto dark:text-[#171818] uppercase text-xl text-white">Staffs</h2> 
              </div>
              <!-- <div>
                <button @click.prevent="toggleAddStaff" class=" rounded  font-body p-2 upperase bg-[#87c776] hover:bg-[#5d8951] dark:bg-[#52b788] transition-colors hover:dark:bg-[#3b8160] "> Add Staff</button>
              </div> -->
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-body uppercase text-gray-400 dark:bg-white">
                            <tr>
                              <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">N:</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Pick-Up</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">RETURN</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Vehicle</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Extras</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-left">Address</div>
                                </th>
                                 <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">State</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-body text-center">Profile Staff</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y dark:divide-gray-100 divide-gray-800">
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">1</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-12-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-13-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">BMW 5 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">GBS</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Confirmed</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">1</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-12-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-13-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">BMW 5 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">GBS</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Confirmed</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">1</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-12-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-13-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">BMW 5 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">GBS</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Confirmed</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">1</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-12-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-13-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">BMW 5 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">GBS</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Confirmed</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                            <tr class=" hover:bg-gray-800 hover:dark:bg-gray-300">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">1</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-12-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">12-13-22 10:30</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">BMW 5 Series</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-body font-bold text-[#adb5bd] ">GBS</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body text-white dark:text-gray-800 text-left">Alger</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="font-body font-bold dark:bg-[#DDFBE8] bg-green-600 rounded-full text-green-800  text-center">Confirmed</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <button  @mouseover="hoverBtn = false" @mouseleave="hoverBtn = true" class="text-2xl rounded w-2/3 flex mx-auto bg-[#2c3137] dark:bg-gray-200 py-2 my-auto px-4 text-white dark:text-gray-500">
                                       <div class=" mx-auto">
                                        <font-awesome-icon :class="hoverBtn ? '':'hidden'" class="flex mx-auto" icon="angle-right" />
                                        <font-awesome-icon :class="hoverBtn ? 'hidden':''" class="flex mx-auto" icon="angles-right" />
                                       </div>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ReservationList',
};
</script>

<style>

</style>
