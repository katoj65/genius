<template>

<q-layout view="lHh Lpr lFf">
<q-header class="no-border" style="border:none;">
<q-toolbar class="bg-white text-black no-border" style="border:none;">
<q-btn v-if="back==null"
  flat
  dense
  round
  icon="menu"
  aria-label="Menu"
  @click="toggleLeftDrawer"
/>

<q-btn v-else
  flat
  dense
  round
  icon="arrow_back"
  @click="router.push(back)"
/>


<q-toolbar-title style="font-size:17px;font-weight:bolder;">
  {{ props.title!=null?props.title:'ReadApp' }}
</q-toolbar-title>
<q-btn flat round dense icon="apps" class="q-mr-xs" @click="router.push('/menu')" />
<q-btn flat round dense icon="more_vert"  @click="router.push('/settings')"/>
</q-toolbar>

</q-header>

<q-drawer
v-model="leftDrawerOpen"
show-if-above
bordered
>
<q-list>
<q-item-label
  header
>
  Essential Links
</q-item-label>

<EssentialLink
  v-for="link in linksList"
  :key="link.title"
  v-bind="link"
/>
</q-list>
</q-drawer>
<q-page-container>
<q-page>



<slot></slot>



</q-page>
</q-page-container>
<!-- Fixed Bottom Tabs in Footer -->


<q-footer v-if="route.name=='ask'" class="bg-white text-dark" style="border-top:solid thin #e5e8e8;">
<chat-form/>
</q-footer>
<q-footer class="bg-white text-dark" style="border-top:solid thin #e5e8e8;" v-else>
<q-tabs narrow-indicator dense align="justify" class="text-dark">
<q-tab :ripple="{ color: 'orange' }" name="home" icon="home" label="Home" @click="router.push('/')" />
<q-tab :ripple="{ color: 'orange' }" name="books" icon="chrome_reader_mode" label="Notes" @click="router.push('/notes')"/>
<q-tab :ripple="{ color: 'orange' }" name="search" icon="search" label="Search" @click="router.push('/search')" />
</q-tabs>
</q-footer>









</q-layout>

</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue';
import ChatForm from 'components/ChatForm.vue';

const linksList = [
{
title: 'Docs',
caption: 'quasar.dev',
icon: 'school',
link: 'https://quasar.dev'
},
{
title: 'Github',
caption: 'github.com/quasarframework',
icon: 'code',
link: 'https://github.com/quasarframework'
},
{
title: 'Discord Chat Channel',
caption: 'chat.quasar.dev',
icon: 'chat',
link: 'https://chat.quasar.dev'
},
{
title: 'Forum',
caption: 'forum.quasar.dev',
icon: 'record_voice_over',
link: 'https://forum.quasar.dev'
},
{
title: 'Twitter',
caption: '@quasarframework',
icon: 'rss_feed',
link: 'https://twitter.quasar.dev'
},
{
title: 'Facebook',
caption: '@QuasarFramework',
icon: 'public',
link: 'https://facebook.quasar.dev'
},
{
title: 'Quasar Awesome',
caption: 'Community Quasar projects',
icon: 'favorite',
link: 'https://awesome.quasar.dev'
}
]

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
leftDrawerOpen.value = !leftDrawerOpen.value
}

const router =useRouter();
const route=useRoute();
const props=defineProps({
title:String,
back:String
});





</script>
<style scoped>
.no-border{
border:none;
}
</style>