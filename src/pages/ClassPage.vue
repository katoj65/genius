<template>
<app-layout title="Classes" back="/menu">
<div v-if="isLoading==false" class="border-top">
<q-list v-if="row.class.length>0">

<q-item v-for="(s,key) in row.class" :key="key" style="border-bottom:solid thin #e5e8e8;padding-top:15px;padding-bottom:15px;" clickable v-ripple @click="router.push('/class/show/'+s.id)">
<q-item-section top class="col-2 gt-sm">
<q-item-label class="q-mt-sm"></q-item-label>
</q-item-section>

<q-item-section top>
<q-item-label lines="1">
<strong>
<span class="text-weight" style="font-size:17px;">
{{ s.name }}
</span>
<span class="text-grey-8"> - {{ s.short_hand }} </span>
</strong>

</q-item-label>
<q-item-label lines="1" caption style="font-size:14px;">
{{ s.description }}
</q-item-label>

</q-item-section>

</q-item>






</q-list>
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
import { useRouter } from 'vue-router';

const row=reactive({
class:[]
});

const isLoading=ref(false);
const router=useRouter();
onMounted(async ()=>{
isLoading.value=true;
const response=await database.from('class')
.select('*');
if(response){
isLoading.value=false;
if(response.error==null){
row.class=response.data;
}else{
console.log(response.error);
}
}




});



</script>

