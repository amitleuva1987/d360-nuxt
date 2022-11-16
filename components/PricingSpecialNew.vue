<template>
  <div id="special" class="bg-white">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Exclusive Cyber Monday LTD Special</h2>
          <p class="mt-4 text-xl text-gray-600">⏰ Prices Increases Every Hour ⏰</p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-white" />
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Exclusive Lifetime Offer</h3>
              <p class="mt-6 text-base text-gray-500">Instantly Launch WINNING Ads by easily Finding and Replicating
                Proven & Winning ads!<br>
                <h4 class="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">We’ll even double your money back if this doesn’t get you results 🎉</h4>
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4 class="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">What's included</h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul role="list" class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                  <li v-for="feature in includedFeatures" :key="feature" class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <p class="ml-3 text-sm text-gray-700">{{ feature }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
              <p class="text-lg font-medium leading-6 text-gray-900">Pay once, own it forever</p>
              <div class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                <span>${{ price }}</span>
                <span class="ml-3 text-xl font-medium tracking-normal text-gray-500">USD</span>
              </div>
              <div class="mt-6">
                <div class="rounded-md shadow">
                  <a href="https://ltd.thrivecart.com/discover360-cyber-launch/"
                    class="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900">Get
                    Access</a>
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
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const includedFeatures = [
  '250 Search Credits P/M',
  'Access: Facebook & Instagram Database',
  'Ad Insights & Analytics',
  'Demographic & Engagement Filters',
  'Geo Location Filters',
  'Video & Image Ad Integration',
  'Competitor Technology Insights',
  'One-time Investment',
  '30 Day Back Money Guarantee',
]

export default {
  components: {
    CheckCircleIcon
  },
  mounted() {
    const date1 = new Date("November 14, 2022 14:00:00"); 
    const date2 = new Date();
//    const ndate1 = this.changeTimezone(date1, "Europe/Berlin");
    const ndate2 = this.changeTimezone(date2, "Europe/London");
    
    
    console.log(this.getDifferenceInHours(date1, ndate2))
    this.price = this.price + Math.floor(this.getDifferenceInHours(date1, ndate2)) * this.increaseprice
    
  },
  data() {
    return {
      price: 31.50,
      increaseprice: 0.50,
      includedFeatures
    };
  },
  methods: {
    getDifferenceInHours(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return diffInMs / (1000 * 60 * 60);
    },
    changeTimezone(date, ianatz) {

    // suppose the date is 12:00 UTC
    var invdate = new Date(date.toLocaleString('en-US', {
      timeZone: ianatz
    }));

    // then invdate will be 07:00 in Toronto
    // and the difference is 5 hours
    var diff = date.getTime() - invdate.getTime();

    // so 12:00 in Toronto is 17:00 UTC
    return new Date(date.getTime() - diff); // needs to substract

    }
  }
}  
</script>