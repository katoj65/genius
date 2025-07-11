<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
import database from 'src/boot/database';
import { onMounted, reactive, ref } from 'vue';
import SkeletonComponent from 'src/components/SkeletonComponent.vue';


const isLoading=ref(false);
const row=reactive({
class:[],
user:{}
});



const form=reactive({
age:'',
dob:'',
class:'',
school:'',
tel:'',
});




onMounted( async ()=>{
isLoading.value=true;
const response=await database
.from('class')
.select('*');
if(response.error==null){
isLoading.value=false;
const content=[];
response.data.forEach(element => {
content.push({label:element.name, value:element.id});
});
row.class=content;
}else{
console.log(response.error);
}


//query user by session
const{ data: { session }, error }=await database.auth.getSession();
if(session){
row.user=session.user.user_metadata;
console.log(session.user);
}else{
console.log(error);
}
});







</script>

<template>
<app-layout title="Create profile">
<div v-if="isLoading==false">

<form>
<q-list bordered>

<q-item>
<q-item-section avatar>
<q-avatar>
<img src="https://cdn.quasar.dev/img/avatar2.jpg">
</q-avatar>
</q-item-section>
<q-item-section>
<q-item-label lines="1" style="font-weight:bolder; text-transform:capitalize;">
{{ row.user.first_name }} {{ row.user.last_name }}
</q-item-label>
<q-item-label caption lines="2">
{{ row.user.email }}
</q-item-label>
</q-item-section>
</q-item>
</q-list>



<div style="padding:20px;">
<div class="borders border-radius" style="padding:20px;">
<div style="margin-bottom:10px;">
<q-select :options="['male','female']" label="Gender" dense="dense" style="padding:0px" outlined v-model="form.gender"/>
</div>

<div style="margin-bottom:10px;">
<q-select :options="row.class" label="Class" dense="dense" style="padding:0px" outlined v-model="form.class"/>
</div>

<div style="margin-bottom:10px;">
  <q-input  dense="dense" outlined  placeholder="School" style="padding:0px" v-model="form.school"/>
  </div>

  <div style="margin-bottom:10px;">
    <q-input  dense="dense" outlined  placeholder="Telephone number" style="padding:0px" v-model="form.tel" type="number"/>
    </div>

<div style="padding-top:5px;">
<q-btn color="secondary" label="Save" style="width:100%;" type="submit" unelevated/>
</div>


</div>




</div>








</form>

</div>
<div v-else>
<skeleton-component/>
</div>
</app-layout>
</template>