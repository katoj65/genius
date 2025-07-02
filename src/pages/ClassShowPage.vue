<template>
<app-layout :title="title" back="/class">
<div v-if="isLoading==false">
<div v-if="row.class!=''">


<q-card class="my-card border-bottom" flat>
<q-card-section horizontal>
<q-card-section class="q-pt-xs">
<div class="text-caption limit-lines" style="font-size:15px;margin-top:10px;">
{{ row.class.description }}
</div>
</q-card-section>

<q-card-section class="col-3 flex flex-center">
<q-icon name="auto_stories" color="grey" size="4rem" />
</q-card-section>
</q-card-section>
</q-card>







<q-list>
<q-item v-for="(s,key) in row.subjects" :key="key" style="border-bottom:solid thin #e5e8e8;padding-top:15px;padding-bottom:15px;" clickable v-ripple @click="router.push('/subject/show/'+s.id)">
<q-item-section top>
<q-item-label lines="1">
<strong>
<span class="text-weight-medium" style="font-size:17px;">
{{ s.name }}
</span>
<span class="text-grey-8"> - {{ s.short_hand }} </span>
</strong>
</q-item-label>
<q-item-label caption lines="1" style="font-size:14px;">
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
class:'',
subjects:[]
});

const isLoading=ref(false);
const title=ref('Class');

const router=useRouter();
const route=useRoute();
onMounted(async ()=>{
isLoading.value=true;
const response=await database.from('class')
.select('*')
.eq('id',route.params.id);
if(response){
isLoading.value=false;
if(response.error==null){
if(response.data.length>0){
response.data.forEach(element => {
row.class=element;
title.value=element.name+' - '+element.short_hand;
});



//classes
const sub=await database.from('subject')
.select('*')
.eq('class_id',route.params.id);
if(sub.error==null){
row.subjects=sub.data;
}

}else{
console.log(response.error);
}

}else{
console.log(response.error);
}
}
console.log(response);



});



</script>

