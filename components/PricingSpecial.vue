<template>
  <div id="special" class="bg-white relative overflow-hidden py-20 sm:py-32">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl space-y-2 lg:max-w-none">
          <h2 class="block text-center text-lg font-semibold text-indigo-600">⏰ Prices Increases Every Hour ⏰</h2>
          <p class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Exclusive Black Friday Special</p>
          <p class="text-xl text-gray-900">Pay Once. Use Forever</p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-white" />
        <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md space-y-4 lg:max-w-5xl lg:gap-5 lg:space-y-0 flex items-center justify-center">
            <div v-for="tier in tiers" :key="tier.name" class="flex flex-col overflow-hidden rounded-lg shadow-lg  max-w-[50%]">
              <div class="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                <div>
                  <h3 class="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-base font-semibold text-indigo-600" id="tier-standard">{{ tier.name }}</h3>
                </div>
                <div class="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
                  ${{ price }}
                  <span class="ml-1 text-2xl font-medium tracking-normal text-gray-500">/One-time</span>
                </div>
                <p class="mt-5 text-lg text-gray-500">{{ tier.description }}</p>
              </div>
              <div class="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                <ul role="list" class="space-y-4">
                  <li v-for="feature in tier.features" :key="feature" class="flex items-start">
                    <div class="flex-shrink-0">
                      <CheckIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
                    </div>
                    <p class="ml-3 text-base text-gray-700">{{ feature }}</p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a :href="tier.href" class="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900" aria-describedby="tier-standard">Get started</a>
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
import { CheckIcon } from '@heroicons/vue/24/outline'

const tiers = [
  {
    name: 'Black Friday Special',
    href: 'https://buy.stripe.com/3cs9DL0OtdaM6v63cc',
    priceLTD: 29,
    description: 'Exclusive Lifetime Offer',
    features: [
      '500 Search Credits P/M',
      'Ad Insights & Analytics',
      'Demographic & Engagement Filters',
      'Geo location filters',
      'Video & Image Ad Integration',
      'Competitor Technology Insights',
      'Onetime Investment',
    ],
  },
]

export default {
  components: {
    CheckIcon
  },
  mounted(){
    const date1 = new Date("November 11, 2022 13:13:00");
    const date2 = new Date();

    this.price = this.price + Math.round(this.getDifferenceInHours(date1, date2)) * this.increaseprice
  },
  data() {
    return {
      tiers,
      price:29,
      increaseprice:0.50
    };
  },
  methods : {
    getDifferenceInHours(date1, date2) {
      const diffInMs = Math.abs(date2 - date1);
      return diffInMs / (1000 * 60 * 60);
    }
  }    
}    
</script>