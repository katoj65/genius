<script setup>
import { reactive } from 'vue';

const form=reactive({
name:'',
});

const submit=()=>{

}

</script>
<template>
<form @submit.prevent="submit">

<div class="row" style="border:solid thin #e5e8e8;margin:5px;border-radius:30px;">
<div class="col-10" style="padding-left:20px;">
<q-input filled class="custom-input" style="width:100%;" bg-white placeholder="Ask a question, breifly." type="text" v-model="form.name" />
</div>
<div class="col-2" style="padding:10px;">
<q-btn round dense flat icon="send" />
</div>
</div>




</form>
</template>
<style>
.custom-input .q-field__control {
box-shadow: none !important;
border: none !important;
background: white;
}

.custom-input .q-field__control::before,
.custom-input .q-field__control::after {
display: none !important;
border: none !important;
}

</style>