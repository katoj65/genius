<template>
<app-layout :title="title" :back="back">
<div v-if="isLoading==false">
<div v-if="row.class!=''">



<q-card class="my-card" flat>
<q-card-section horizontal>
<q-card-section class="q-pt-xs">
<div class="text-caption limit-lines" style="font-size:15px;margin-top:10px;">
{{ row.subject.description }}
</div>
</q-card-section>
<q-card-section class="col-3 flex flex-center">
<q-icon name="auto_stories" color="grey" size="4rem" />
</q-card-section>
</q-card-section>
</q-card>







<q-list>
<q-item v-for="(s,key) in row.topics" :key="key" style="padding-top:15px;padding-bottom:15px;" clickable v-ripple @click="router.push('/topic/show/'+s.id)">
<q-item-section top>
<q-item-label lines="1">
<span class="text-weight-medium" style="font-size:17px;">
{{ s.name }}
</span>
<span class="text-grey-8"> </span>
</q-item-label>
<q-item-label caption lines="1" style="font-size:15px;">
{{ s.description }}
</q-item-label>
</q-item-section>
</q-item>







</q-list>

</div>
<div v-else style="padding:10px;">
No results
</div>
</div>
<skeleton-component v-else/>


</app-layout>
</template>

<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
import database from 'boot/database';
import { onMounted,reactive,ref } from 'vue';
import SkeletonComponent from 'src/components/SkeletonComponent.vue';
import { useRoute, useRouter } from 'vue-router';


const row=reactive({
subject:'',
topics:[]
});



const router=useRouter();
const isLoading=ref(false);
const title=ref('');
const back=ref('');
const route=useRoute();
onMounted(async ()=>{
isLoading.value=true;
const response=await database.from('subject')
.select('* , class(id,name,short_hand)')
.eq('id',route.params.id);
if(response){
isLoading.value=false;
if(response.error==null){
if(response.data.length>0){
response.data.forEach(element => {
row.subject=element;
title.value=element.name+' - '+element.class.short_hand;
back.value='/class/show/'+element.class.id;
});



//classes
const top=await database.from('topic')
.select('*')
.eq('subject_id',route.params.id);
if(top.error==null){
row.topics=top.data;
}

}else{
console.log(response.error);
}

}else{
console.log(response.error);
}
}




});



</script>

