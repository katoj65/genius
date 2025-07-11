<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
import database from 'src/boot/database';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar';



const router=useRouter();
const logout = async ()=>{
const data=await database.
auth.signOut();
console.log(data);
if(data.error==null){
LocalStorage.remove('user');
router.push('/');
}
};


</script>
<template>
<app-layout title="Ask Question">
<q-list bordered separator>
<q-item clickable v-ripple @click="router.push('/profile')">
<q-item-section>Profile</q-item-section>
</q-item>

<q-item clickable v-ripple @click="logout">
<q-item-section>Logout</q-item-section>
</q-item>


</q-list>
</app-layout>
</template>
