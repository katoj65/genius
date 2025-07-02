<template>
  <app-layout title="Notes">
  <q-list>


  <q-item v-for="(s,key) in 30" :key="key" style="border-bottom:solid thin #e5e8e8;padding-top:15px;">
    <q-item-section avatar top>
      <q-icon name="hive" color="black" size="34px" />
    </q-item-section>

    <q-item-section top class="col-2 gt-sm">
      <q-item-label class="q-mt-sm">History</q-item-label>
    </q-item-section>

    <q-item-section top>
      <q-item-label lines="1">
        <span class="text-weight-medium" style="font-size:17px;">Biology </span>
        <span class="text-grey-8"> - paper 3 </span>
      </q-item-label>
      <q-item-label caption lines="1">
        Photosynthesis is the process by which green
      </q-item-label>
      <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-capitalize">
        <span class="cursor-pointer" style="color:silver;">Open in GitHub</span>
      </q-item-label>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
        <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
        <q-btn size="12px" flat dense round icon="more_vert" />
      </div>
    </q-item-section>
  </q-item>






</q-list>
</app-layout>
</template>

<script setup>
import AppLayout from 'src/layouts/AppLayout.vue';
// import { ref } from 'vue'
// const text = ref('')
</script>

