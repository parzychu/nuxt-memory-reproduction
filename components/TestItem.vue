<script setup lang="ts">
const route = useRoute();
let uri = route.fullPath;
const props = defineProps<{ index: number }>();
const { data } = await useAsyncData(
  `test-item_${props.index}_${uri}_api-payload`,
  () => $fetch(`http://localhost:3015/api/dogs`)
);
</script>
<template>
  <h4>Test item {{ index }}</h4>
  <p>
    {{ data }}
  </p>
</template>
