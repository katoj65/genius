<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';


</script>
<template>
<app-layout title="Ask Questions" back="/">







 <div class="q-pa-md row justify-center">
  <div style="width: 100%; max-width: 400px" v-for="(c,key) in 30" :key="key">

    <q-chat-message
    name="me"
    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
    :text="['What is Photosynthesis?']"
    stamp="7 minutes ago"
    sent
    bg-color=""
  />


    <q-chat-message
      name="app"
      avatar="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
      :text="['Photosynthesis is the process by which green plants make their own food using sunlight, carbon dioxide from the air, and water from the soil. Carbon dioxide + Water —(sunlight + chlorophyll)—> Glucose + Oxygen']"
      stamp="4 minutes ago"
      text-color="white"
      bg-color="secondary"
    />


  </div>
</div>









































</app-layout>
</template>
