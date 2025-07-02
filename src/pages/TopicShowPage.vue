<template>
<app-layout :title="subtitle" :back="back">
<div v-if="isLoading==false">
<div v-if="row.topic!=''">



<q-card class="my-card" flat>
<q-card-section horizontal>
<q-card-section class="q-pt-xs">
<div class="text-h5 q-mt-sm q-mb-xs" style="font-weight:bold;font-size:17px;line-height:20px">
  {{ row.topic.name }}
</div>
<div class="text-caption limit-lines" style="font-size:15px;margin-top:10px;">
{{ row.topic.description }}
</div>
</q-card-section>
<q-card-section class="col-3 flex flex-center">
<q-icon name="auto_stories" color="grey" size="4rem" />
</q-card-section>
</q-card-section>
</q-card>



<q-card flat  class="my-card" v-for="(c,key) in row.content" :key="key" style="padding:0;">
<q-card-section style="padding-top:0;">
<h5 class="title"><strong> {{ c.name }}</strong> </h5>
<div class="content">
{{ c.description }}
</div>
</q-card-section>
<q-separator inset />
</q-card>











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
import { useRoute } from 'vue-router';


const row=reactive({
topic:'',
content:[]
});

const isLoading=ref(false);
const title=ref('');
const back=ref('');
const subtitle=ref('');
const route=useRoute();
onMounted(async ()=>{
isLoading.value=true;
const response=await database.from('topic')
.select('* , subject(id,name, class(short_hand))')
.eq('id',route.params.id);

if(response){
isLoading.value=false;
if(response.error==null){
if(response.data.length>0){
response.data.forEach(element => {
row.topic=element;
title.value=element.name;
back.value='/subject/show/'+element.subject.id;
subtitle.value= element.subject.name+' - '+element.subject.class.short_hand;
});



//classes
const cont=await database.from('sub_topic')
.select('*')
.eq('topic_id',route.params.id);
console.log(cont);
if(top.error==null){
row.content=cont.data;
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

