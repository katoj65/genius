<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
import database from 'src/boot/database';
import { useRouter } from 'vue-router';






const router=useRouter();
const logout = async ()=>{
const data=await database.
auth.signOut();
console.log(data);
if(data.error==null){
router.push('/');
}

};


</script>
<template>
<app-layout title="Ask Question">
<q-list bordered separator>

<q-item clickable v-ripple @click="logout">
<q-item-section>Logout</q-item-section>
</q-item>


</q-list>
</app-layout>
</template>
