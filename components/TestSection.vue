<script setup lang="ts">
import TestItem from "./TestItem.vue";

const route = useRoute();
let uri = route.fullPath;
const { data } = await useAsyncData(`test-section_${uri}_api-payload`, () =>
  $fetch(`http://localhost:3015/api/node-express`)
);

const items = [1, 2, 3];
</script>
<template>
  <h3>Test section</h3>
  <p>
    {{ data }}
  </p>

  <div style="padding-left: 20px">
    <div v-for="(item, index) in items">
      <TestItem :index="index" />
    </div>
  </div>
</template>
