<template>
<q-layout>
<q-page-container>
<q-page>



<div v-if="view=='login'">
<form @submit.prevent="submit">
<div style="text-align:center;padding:50px;">
<q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="workspaces" />
<h6 style="font-weight:bold;padding-bottom:0;margin-bottom:10px;">
ReadApp
</h6>


<p style="font-weight:bold;padding:0;margin:0;">Login</p>

<div style="margin-top:20px;">
<div v-if="systemError!=null" style="color:red;padding:10px;text-align:left;">
{{ systemError }}
</div>
<div style="margin-bottom:10px;">
<q-input  dense="dense" outlined  placeholder="Email address" style="padding:0px" v-model="form.email"/>
<input-error :error="errors.email"></input-error>
</div>
<div>
<q-input  dense outlined class="text-sm" style="font-size: 13px;" placeholder="Password" type="password" v-model="form.password"/>
<input-error :error="errors.password"></input-error>
</div>

<div style="padding-top:10px;">
<q-btn color="secondary" label="Login" style="width:100%;" type="submit" unelevated/>
</div>

<div style="padding-top:10px;">
<q-btn  text-color="black" label="Register" style="width:100%;background:#f4f6f6;" unelevated @click="viewChange('register')"/>
</div>


</div>
</div>
</form>
</div>

<div v-else>
<form @submit.prevent="submit2">
<div style="text-align:center;padding:50px;">
<q-avatar size="80px" font-size="52px" color="teal" text-color="white" icon="workspaces" />
<h6 style="font-weight:bold;padding-bottom:0;margin-bottom:10px;">
ReadApp
</h6>

<p style="font-weight:bold;padding:0;margin:0;">Create account</p>
<div style="margin-top:20px;">


  <div v-if="systemError2!=null" style="color:red;padding:10px;text-align:left;">
    {{ systemError2 }}
    </div>


<div style="margin-bottom:10px;">
<q-input  dense="dense" outlined  placeholder="Email address" style="padding:0px" v-model="form2.fname" />
<input-error :error="errors2.fname"></input-error>
</div>


<div style="margin-bottom:10px;">
<q-input  dense="dense" outlined  placeholder="Email address" style="padding:0px" v-model="form2.lname" />
<input-error :error="errors2.lname"></input-error>
</div>


<div style="margin-bottom:10px;">
<q-input  dense="dense" outlined  placeholder="Email address" style="padding:0px" v-model="form2.email" />
<input-error :error="errors2.email"></input-error>
</div>



<div style="margin-bottom:10px;">
<q-input  dense outlined class="text-sm" style="font-size: 13px;" placeholder="Password" v-model="form2.password" type="password"/>
<input-error :error="errors2.password"></input-error>
</div>

<div style="padding-top:5px;">
<q-btn color="secondary" label="Register" style="width:100%;" type="submit" unelevated/>
</div>

<div style="padding-top:10px;">
<q-btn  text-color="black" label="Login" style="width:100%;background:#f4f6f6;" unelevated @click="viewChange('login')"/>
</div>


</div>
</div>
</form>


</div>




</q-page>
</q-page-container>
</q-layout>
</template>
<script setup>
import { reactive,ref } from 'vue';
import database from 'src/boot/database';
import InputError from 'src/components/InputError.vue';
import { useRouter } from 'vue-router';
import { LocalStorage } from 'quasar';


const systemError=ref(null);
const view=ref('login');

const form=reactive({
email:'katoj65@gmail.com',
password:'09/u/2252'
});


const errors=reactive({
email:'',
password:''
});

const router=useRouter();
const submit= async ()=>{
errors.email='';
errors.password='';
if(form.email=='' || form.password==''){
form.email==''?errors.email='Email required':null;
form.password==''?errors.password='Password required':null;
return;
}
const user=await database.
auth.signInWithPassword({email:form.email,password:form.password});
if(user.error==null){
LocalStorage.set('user',user.data.user.user_metadata);
router.push('/');
}else{
systemError.value='Invalid user credentials';
}

}






const viewChange=(option)=>{
view.value=option;
}


const systemError2=ref(null);
const form2=reactive({
fname:'kato',
lname:'joshua',
email:'katoj65@gmail.com',
password:'09/u/2252'
});

const errors2=reactive({
email:'',
password:'',
lname:'',
fname:''
});




const submit2= async ()=>{
errors2.email='';
errors2.password='';
errors2.fname='';
errors2.lname='';

if(form2.email=='' || form2.password=='' || form2.lname=='' || form2.fname==''){
form2.email==''?errors2.email='Email is required':null;
form2.password==''?errors2.password='Password is required':null;
form2.fname==''?errors2.fname='First name is required':null;
form2.lname==''?errors2.lname='First name is required':null;
return;
}

const user=await database.auth.signUp({email:form2.email,password:form2.password,
options:{data:{
first_name:form2.fname,
last_name:form2.lname,
gender:'none',
dob:'none',
class:'none',
school:'none',
tel:'none'
}}
});

if(user.error==null){
if(user.data){
// login
const login=await database.
auth.signInWithPassword({email:form2.email,password:form2.password});
if(login.error==null){
  LocalStorage.set('user',user.data.user.user_metadata);
router.push('/');
}else{
console.log(login.error);
}
}
}else{
systemError2.value=user.error;
}
}


</script>
