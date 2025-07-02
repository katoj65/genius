<template>
<div style="color:red;text-align:left;padding:5px;">
{{ props.error }}
</div>
</template>
<script setup>
const props=defineProps({
error:String
});

</script>