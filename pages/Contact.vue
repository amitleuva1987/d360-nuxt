<template>
    <div class="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="relative mx-auto max-w-xl">
        <svg class="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg class="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">How can we help you?<br>Fill in the form and we'll get back to you in the next 24 - 48 hours</p>
        </div>
        <div class="mt-12">
          <h4 v-if="show" class="bg-green-700 mb-3 p-2 text-center text-white">{{success}}</h4>
          <form @submit.prevent="processForm" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
              <div class="mt-1">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="first_name" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
              <div class="mt-1">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" v-model="last_name" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
              <div class="mt-1">
                <input type="text" name="company" id="company" autocomplete="organization" v-model="company" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" v-model="email" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <div class="relative mt-1 rounded-md shadow-sm">
                <input type="text" name="phone-number" id="phone-number" v-model="phone_number" autocomplete="tel" class="block w-full rounded-md border-gray-300 py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500" placeholder="+1 (555) 987-6543" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <div class="mt-1">
                <textarea id="message" name="message" rows="4" v-model="message" class="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <Switch v-model="agreed" :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                    <span class="sr-only">Agree to policies</span>
                    <span aria-hidden="true" :class="[agreed ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                  </Switch>
                </div>
                <div class="ml-3">
                  <p class="text-base text-gray-500">
                    By selecting this, you agree to the
                    {{ ' ' }}
                    <a href="/legal/privacy" class="font-medium text-gray-700 underline">Privacy Policy</a>
                    {{ ' ' }}
                    and
                    {{ ' ' }}
                    <a href="/legal/cookie" class="font-medium text-gray-700 underline">Cookie Policy</a>.
                  </p>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Let's talk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Stats />
  <Pricing />
  </template>
  
<script>
import axios from 'axios'

export default {
  data() {
    return {
      agreed: false,
      first_name: '',
      last_name: '',
      company: '',
      phone_number: '',
      email: '',
      message: '',
      success:'',
      show:false
    }
  },
 
  methods: {
  processForm() {
    let APP = this
    axios
      .post(
        `https://fc1a2193db11940b4c5e7fd96e552a8f.m.pipedream.net`,
        {
          first_name: this.first_name,
          last_name: this.last_name,
          company: this.company,
          phone_number: this.phone_number,
          email: this.email,
          message: this.message
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        window.scrollTo(0, 0);
        this.show = true
        this.success = 'Awesome! Form submitted successfully!'
      }).catch(error => {
         console.log(error);
      })
      
  }
}
}
</script>