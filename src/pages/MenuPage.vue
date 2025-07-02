<template>
<app-layout back="/">
<q-list style="border-top:solid thin #e5e8e8;">
<q-item v-for="(m,key) in menu" :key="key" style="border-bottom:solid thin #e5e8e8;padding-top:10px;padding-bottom:10px;" clickable v-ripple @click="router.push(m.url)">


<q-item-section>
<q-item-label class="text-bold" style="font-size:16px;">
{{ m.name }}
</q-item-label>
<q-item-label caption lines="2">
{{ m.description }}
</q-item-label>
</q-item-section>
<q-item-section side>
<q-icon name="arrow_forward_ios" color="light" />
</q-item-section>

</q-item>





</q-list>
</app-layout>
</template>

<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
import { useRouter } from 'vue-router';
// import database from 'src/boot/database';
import { onMounted } from 'vue';


const menu=[
{name:'Classes',description:'20 Classes available',url:'/class'},
{name:'Subjects',description:'60 Subjects available',url:'/'},
{name:'Tutorials',description:'50 Tutorials available',url:'/'},
{name:'Questions and answers',description:'100 Questions',url:'/'},
{name:'Teachers',description:'250 Available',url:'/'},
{name:'Schools',description:'20 Registered',url:'/'},
];
const router=useRouter();

onMounted(async ()=>{
// const test =await database.
// functions.invoke('hello-world', {
//   body: { name: 'Functions' },
// });
// console.log(test);

// const res = await fetch('https://ycmlubeulbufsfrvbmal.supabase.co/functions/v1/hello-world',{

// const response = await fetch('https://<your-project-ref>.functions.supabase.co/<function-name>', {
//   method: 'POST', // or GET
//   headers: {
//     'Authorization': `Bearer ${supabase.auth.getSession()?.data.session?.access_token}`,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ your: 'payload' })
// });



});






</script>

