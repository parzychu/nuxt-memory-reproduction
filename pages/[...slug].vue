<script setup lang="ts">
import TestSection from "../components/TestSection.vue";

const route = useRoute();
let uri = route.fullPath;

console.log("SETUP STARTED " + uri);

const { data: payload1 } = await useAsyncData("content-payload-1", () =>
  queryContent<{ links: Array<{ src: string; alt: string }> }>(
    "/json-data"
  ).findOne()
);

const { data: payload2 } = await useAsyncData(`${uri}_content-payload-2`, () =>
  queryContent<{ links: Array<{ src: string; alt: string }> }>(
    "/json-data"
  ).findOne()
);

const links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map((i) => Math.round(Math.random() * 10000))
  .map((i) => `/page${i}`);
</script>
<template>
  <div>
    <h1>Dynamic Page</h1>
    <p>URI: {{ uri }}</p>
    <h2>payload1</h2>
    <p>
      {{ payload1 }}
    </p>
    <h2>payload2</h2>
    <p>
      {{ payload2 }}
    </p>
    <TestSection />
    <h2>links</h2>
    <ul>
      <li v-for="link in links">
        <NuxtLink v-for="link in links" :to="link"
          >Next link {{ link }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
