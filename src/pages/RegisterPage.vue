<template>
<q-layout>
<q-page-container>
<q-page>


<form @submit.prevent="submit">
<div style="text-align:center;padding:50px;">
<q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="workspaces" />
<h6 style="font-weight:bold;padding-bottom:0;margin-bottom:10px;">
ReadApp
</h6>


<p style="font-weight:bold;padding:0;margin:0;">Login</p>
<div style="margin-top:20px;">
<div style="margin-bottom:10px;">
<q-input  dense="dense" outlined  placeholder="Username" style="padding:0px" v-model="form.email" />
</div>
<div>
<q-input  dense outlined class="text-sm" style="font-size: 13px;" placeholder="Password" v-model="form.pass" />
</div>

<div style="padding-top:20px;">
<q-btn color="secondary" label="Login" style="width:100%;" type="submit" unelevated/>
</div>

<div style="padding-top:20px;">
<q-btn  text-color="black" label="SiginUp" style="width:100%;
background:red;" unelevated/>
</div>


</div>
</div>
</form>
</q-page>
</q-page-container>
</q-layout>
</template>
<script setup>
import { reactive } from 'vue';
import database from 'src/boot/database';

const form=reactive({
email:'',
pass:''
});


const submit= async ()=>{
const user=await database.auth.signInWithPassword(
{email:form.email,password:form.pass});
console.log(user);
}








</script>
