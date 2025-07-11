<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
import { LocalStorage } from 'quasar'
import {onMounted, reactive,ref } from 'vue';
import database from 'src/boot/database';
import SkeletonComponent from 'src/components/SkeletonComponent.vue';





const row=reactive({
user:null,
class:null,
subjects:null,
topics:null
});

let isLoading=ref(false);
onMounted(async ()=>{
isLoading.value=true;
const user=await LocalStorage.getItem('user');
row.user=user;
const {data,error}=await database.from('class').select('*').eq('id',user.class);
if(error==null){
isLoading.value=false;
row.class=data;
data.forEach(element => {
row.class=element;
});

const subjects=await database.from('subject').select('*',{count:'exact',head:true})
.eq('class_id',row.class.id);
if(subjects.error==null){
row.subjects=subjects.count;
}else{
console.log(subjects.error);
}
}else{
console.log(error);
}

// const topics=await database.from('topic').select('*','subject(*)',{count:'exact',head:true})
// .join('subject',{'topic.subject_id.id':'id'})
// .eq('class_id',row.class.id);

// console.log(topics);



});

</script>
<template>
<app-layout title="Profile" back="/">
<div v-if="isLoading==false">
<q-list v-if="row.user!=null" >
<q-item>
<q-item-section avatar>
<q-avatar size="90px">
<img src="https://cdn.quasar.dev/img/avatar2.jpg">
</q-avatar>
</q-item-section>

<q-item-section>
<q-item-label lines="1">
<strong style="text-transform:capitalize; font-size:18px;">

{{ row.user.first_name }} {{ row.user.last_name }}
</strong>
</q-item-label>
<q-item-label caption lines="2">
{{ row.user.email }}
</q-item-label>
<q-item-label caption lines="2">
{{ row.user.tel }}
      </q-item-label>
</q-item-section>


</q-item>





<q-item>
  <q-item-section avatar>
    <q-icon name="boy" />
  </q-item-section>
  <q-item-section>Gender</q-item-section>
  <q-item-section side style="text-transform:capitalize;">
    {{ row.user.gender }}
  </q-item-section>
</q-item>


<q-item>
  <q-item-section avatar>
    <q-icon name="calendar_month" />
  </q-item-section>
  <q-item-section>Date of Birth</q-item-section>
  <q-item-section side>
    {{ row.user.dob}}
  </q-item-section>
</q-item>


<q-item>
  <q-item-section avatar>
    <q-icon name="cast_for_education" />
  </q-item-section>
  <q-item-section>Class</q-item-section>
  <q-item-section side>
    {{ row.class.name }} ({{ row.class.short_hand }})
  </q-item-section>
</q-item>



<q-item>
  <q-item-section avatar>
    <q-icon name="school" />
  </q-item-section>
  <q-item-section>School</q-item-section>
  <q-item-section side style="text-transform:capitalize;">
    {{ row.user.school }}
  </q-item-section>
</q-item>
<q-separator spaced />




<q-item>
  <q-item-section avatar>
    <q-icon name="auto_stories" />
  </q-item-section>
  <q-item-section>Subjects available</q-item-section>
  <q-item-section side style="text-transform:capitalize;">
    {{ row.subjects }}
  </q-item-section>
</q-item>
<q-separator spaced />






</q-list>
</div>
<skeleton-component v-else/>
</app-layout>
</template>
<style scoped>
div{
font-size:14px;
}
</style>