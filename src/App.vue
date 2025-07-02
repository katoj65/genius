<template>
<router-view />
</template>

<script setup>



</script>
<style>
.borders{
border:solid thin #e5e8e8;
}
.border-top{
border-top:solid thin #e5e8e8;
}
.border-bottom{
border-bottom:solid thin #e5e8e8;
}
.border-radius{
border-radius: 10px;
}
.limit-lines {
display: -webkit-box;
-webkit-line-clamp: 6;
-webkit-box-orient: vertical;
overflow: hidden;
}
.title{
line-height:20px;
font-size: 17px;
margin-bottom:15px;
}
.content{
font-size: 15px;
}
</style>