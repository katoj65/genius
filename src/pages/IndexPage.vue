<template>
<app-layout :title="user.gender=='none'?'Create profile':'ReadApp'">
<create-profile :user="user" v-if="user.class=='none'"></create-profile>
<div v-else>
<q-card class="my-card" flat>
<q-card-section horizontal>
<q-card-section class="q-pt-xs">
<!-- <div class="text-overline">Overline</div> -->
<div class="text-h5 q-mt-sm q-mb-xs" style="font-weight:bold;font-size:17px;">S.4 Class</div>
<div class="text-caption" style="font-size:14px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
</q-card-section>

<q-card-section class="col-3 flex flex-center">
<q-icon name="auto_stories" color="grey" size="4rem" />
</q-card-section>
</q-card-section>


</q-card>
<q-item v-for="(s,key) in 30" :key="key" style="border:solid thin #e5e8e8;padding-top:15px;margin:10px;" class="border-radius" clickable v-ripple>

<q-item-section top>
<q-item-label lines="1">
<span class="text-weight-medium" style="font-size:17px;">Biology </span>
<span class="text-grey-8"> - paper 3 </span>
</q-item-label>
<q-item-label caption lines="1" style="font-size:14px;color:black;">
Photosynthesis is the process by which green
</q-item-label>
<q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-capitalize">
<span class="cursor-pointer" style="color:silver;">Open in GitHub</span>
</q-item-label>
</q-item-section>

<q-item-section top side>
<div class="text-grey-8 q-gutter-xs">
<q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
<q-btn class="gt-xs" size="12px" flat dense round icon="done" />
<q-btn size="12px" flat dense round icon="more_vert" />
</div>
</q-item-section>
</q-item>
<q-page-sticky position="bottom-right" :offset="[18, 18]">
<q-fab color="black" direction="up" position="bottom-right">
<template v-slot:icon="{ opened }">
<q-icon :class="{ 'example-fab-animate--hover': opened !== true }" name="keyboard_arrow_up" />
</template>
<template v-slot:active-icon="{ opened }">
<q-icon :class="{ 'example-fab-animate': opened === true }" name="close" />
</template>
<q-fab-action color="dark" external-label @click="router.push('/library')" icon="auto_stories"/>
<q-fab-action color="dark" external-label @click="router.push('/ask')" icon="question_mark"/>
</q-fab>
</q-page-sticky>
</div>

</app-layout>
</template>

<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar';
import { onMounted,ref } from 'vue';
import CreateProfile from 'src/components/CreateProfile.vue';


const user=ref({});
const router =useRouter();
onMounted(async () => {
const session = await LocalStorage.getItem('user');
user.value=session;


});






</script>
