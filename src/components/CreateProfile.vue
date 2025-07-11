<script setup>
import { reactive,onMounted } from 'vue';
import InputError from './InputError.vue';
import database from 'src/boot/database';
import { LocalStorage } from 'quasar';
import { useRouter } from 'vue-router';


const props=defineProps({
user:Object
});

const row=reactive({
class:[],
});

const form=reactive({
school:'kampala',
class:'2',
gender:'male',
dob:'',
tel:'0752567534'

});

const errors=reactive({
school:'',
class:'',
gender:'',
dob:'',
tel:''
});

onMounted(async()=>{
const date=new Date();
form.dob=`${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}`;
});

onMounted(async()=>{
const {data,error}=await database.from('class').select('*');
if(error==null){
const items=[];
data.forEach(element => {
items.push({label:element.name, value:element.id});
});
row.class=items;
}else{
console.log(error);
}
});







const validation=()=>{
if(form.gender==''){
errors.gender='Required';
}else{
errors.gender='';
}
if(form.dob==''){
errors.dob='Required';
}else{
errors.dob='';
}
if(form.class==''){
errors.class='Required';
}else{
errors.class='';
}
if(form.tel==''){
errors.tel='Required';
}else{
if(form.tel.length>=10){
errors.tel='';
}else{
errors.tel='Telephone number must be at least 10 digits';
}
}
}


const router=useRouter();
const submit = async ()=>{
validation();
if(form.gender=='' || form.dob=='' || form.class=='' || form.tel=='' || form.tel.length<10){
return;
}else{
const { data, error } = await database.auth.updateUser({
data:{
dob:form.dob,
class:form.class,
tel:form.tel,
school:form.school,
gender:form.gender
}});
if(error==null) {
console.log(data.user.user_metadata);
LocalStorage.set('user',data.user.user_metadata);
router.push('/profile');
}else{
console.log(error);
}
}
};




</script>

<template>
<div>



<q-list bordered class="rounded-borders" style="border-radius:0;">
<q-item clickable v-ripple>
<q-item-section avatar>
<q-avatar>
<q-icon name="account_circle" size="2em" />
</q-avatar>
</q-item-section>
<q-item-section>
<q-item-label lines="1">
<strong style="text-transform:capitalize;font-size:18px;">{{ props.user.first_name }} {{ props.user.last_name }}</strong>
</q-item-label>
<q-item-label caption lines="2">
<span class="text-weight-bold">
{{ props.user.email }}
</span>
</q-item-label>
</q-item-section>
</q-item>
</q-list>

<form style="padding:30px;" @submit.prevent="submit">
<div style="margin-bottom:20px;">
Gender:  <input-error :error="errors.gender"></input-error>
<q-select :options="['Male','Female']" label="Select" dense="dense" style="padding:0px" outlined v-model="form.gender" />
</div>

<div >
 Date of Birth: <input-error :error="errors.dob"></input-error>
<q-input v-model="form.dob" mask="date" :rules="['date']" outlined  dense="dense">
<template v-slot:append>
<q-icon name="event" class="cursor-pointer">
<q-popup-proxy cover transition-show="scale" transition-hide="scale">
<q-date v-model="form.dob">
<div class="row items-center justify-end">
<q-btn v-close-popup label="Close" color="primary" flat />
</div>
</q-date>
</q-popup-proxy>
</q-icon>
</template>
</q-input>
</div>

<div style="margin-bottom:20px;">
Class: <input-error :error="errors.class"></input-error>
<q-select :options="row.class" label="Select" dense="dense" style="padding:0px" outlined v-model="form.class" emit-value  map-options/>

</div>

<div style="margin-bottom:20px;">
School:
<q-input  dense="dense" outlined  placeholder="Enter your school" style="padding:0px" v-model="form.school"/>
</div>

<div style="margin-bottom:20px;">
Telephone Number: <input-error :error="errors.tel"></input-error>
<q-input  dense="dense" outlined  placeholder="Enter your telephone" style="padding:0px" v-model="form.tel" type="number"/>
</div>

<div style="padding-top:5px;">
<q-btn color="secondary" label="Save" style="width:100%;" type="submit" unelevated/>
</div>


</form>



</div>
</template>