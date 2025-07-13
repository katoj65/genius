<template>
<app-layout :title="user.gender=='none'?'Create profile':'ReadApp'">
<create-profile :user="user" v-if="user.class=='none'"></create-profile>
<div v-else>

<skeleton-component v-if="isLoading==true" />
<div v-else style="padding-bottom:70px;">
<q-card class="my-card" flat>
<q-card-section horizontal>
<q-card-section class="q-pt-xs">
<!-- <div class="text-overline">Overline</div> -->
<div class="text-h5 q-mt-sm q-mb-xs" style="font-weight:bold;font-size:17px;">
{{ row.my_class.name }} - {{ row.my_class.short_hand }}
</div>
<div class="text-caption" style="font-size:14px;">
{{ row.my_class.description }}
</div>
</q-card-section>
<q-card-section class="col-3 flex flex-center">
<q-icon name="auto_stories" color="grey" size="3rem" />
</q-card-section>
</q-card-section>
</q-card>





<q-item v-for="(s,key) in row.subjects" :key="key" style="border-top:solid thin #e5e8e8;padding-top:10px;padding-bottom:10px;" clickable v-ripple @click="router.push('/subject/show/'+s.id)">
<q-item-section top>
<q-item-label lines="1">
<span class="text-weight-medium" style="font-size:16px;">
{{ s.name }}
</span>
<span class="text-grey-8"> - {{ s.short_hand }} </span>
</q-item-label>
<q-item-label caption lines="1" style="font-size:14px;">
{{ s.description }}
</q-item-label>
</q-item-section>
<q-item-section side>
  <q-icon name="keyboard_arrow_right" color="silver" />
</q-item-section>
</q-item>





</div>





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
import { onMounted,ref,reactive } from 'vue';
import CreateProfile from 'src/components/CreateProfile.vue';
import database from 'src/boot/database';
import SkeletonComponent from 'src/components/SkeletonComponent.vue';







const row=reactive({
my_class:{},
subjects:[]
});

const user=ref({});
const router =useRouter();
const isLoading=ref(false);

onMounted(async () => {
isLoading.value=true;
const session = await LocalStorage.getItem('user');
user.value=session;
// get user class details
const {data, error}= await database.
from('class')
.select('*')
.eq('id',session.class);
if(error==null){
data.forEach(element => {
row.my_class=element;
});

//get subjects
const subjects=await database.from('subject')
.select('*').eq('class_id',row.my_class.id);
if(subjects.error==null){
isLoading.value=false;
row.subjects=subjects.data;
}else{
console.log(subjects.error);
}
}else{
console.log(error);
}








});






</script>
