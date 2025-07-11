<template>
<span style="color:red;text-align:left;padding:5px;">
{{ props.error }}
</span>
</template>
<script setup>
const props=defineProps({
error:String
});

</script>