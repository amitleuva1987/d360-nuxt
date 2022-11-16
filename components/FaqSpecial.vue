<template>
    <div class="bg-gradient-to-r from-purple-800 to-indigo-700">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-white">FREQUENTLY ASKED QUESTIONS</h2>
        <div class="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
          <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
            <div v-for="faq in faqs" :key="faq.id">
              <dt class="text-lg font-medium leading-6 text-white">{{ faq.question }}</dt>
              <dd class="mt-2 text-base text-indigo-200">{{ faq.answer }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const faqs = [
    {
      id: 1,
      question: "What's the difference between Discover360 & The Facebook Ad Libary?",
      answer:
        "Unlike the Facebook Ad Library, Discover360 allows you to see actual engagment & many other metrics & insights that are not available on the Facebook Ad Library. We also cover 9+ Advertising Platforms with over 1 Billion Ads in our Database. We are also 95% done with integrating the Facebook Ad Libary API into Discover360 that will enable you to additionally show ads from the Facebook Ad Library in conjunction with with our data to give you the most comprehensive view of any ad campaign.",
    },
    {
      id: 2,
      question: "What to do when I don’t find specific ads?",
      answer:
        "If you don’t find specific ads, change your keyword & play around with the advanced filters. If you still don’t find the specific ads that you’re looking for, please use the 'keyword request button; we have designed that populates when minimal or no results have been returned, which immediatly notify our tech team to alter our harvesting algorithm to include your keyword.",
    },
    {
      id: 3,
      question: "Do you have a white label option?",
      answer:
        "Yes! We have a White-label SaaS option that will allow you to completely rebrand Discover360 into your own SaaS platform. Please checkout our WL SaaS page for more information.",
    },
    {
      id: 4,
      question: "Do you guys have a refund policy?",
      answer:
        "Yes! We have a 30-day money back guarantee. If you are not satisfied with our product, you can request a refund within 30 days of your purchase.",
    },
    {
      id: 5,
      question: "What to do when I don’t find specific ads?",
      answer:
        "If you don’t find specific ads, change your keyword & play around with the advanced filters. If you still don’t find the specific ads that you’re looking for, please use the 'keyword request button; we have designed that populates when minimal or no results have been returned, which immediatly notify our tech team to alter our harvesting algorithm to include your keyword.",
    },
    {
      id: 6,
      question: "Do you guys have a affiliate program?",
      answer:
        "Yes! We have a 30% recurring affiliate program natively built into our platform. You can signup for our affiliate program once you have created an account.",
    },
    {
      id: 7,
      question: "Who do I need to contact for any queries that I have?",
      answer:
        "If you are a customer, please submit your ticket via the the support bubble inside our application. If you are not yet a customer, please email us at support@discover360.app",
    },
    // More questions...
  ]
  </script>