<script setup lang="ts">
const route = useRoute();
let uri = route.fullPath.replace(/\/+$/, "") + "/";

const { payload } = await useAsyncData("index_content-payload", () =>
  queryContent<{ links: Array<{ src: string; alt: string }> }>(
    "/json-data"
  ).findOne()
);

let links = [
  "page1",
  "page2",
  "page3",
  "page4",
  "page5",
  "page6",
  "page7",
  "page8",
  "page9",
  "page10",
];
// for (let i = 0; i < 500; i++) {
//   links.push(`/page${i}`);
// }
</script>
<template>
  <div>
    <h1>Dynamic Page</h1>
    <p>URI: {{ uri }}</p>

    {{ payload }}
    <ul>
      <li v-for="link in links">
        <NuxtLink v-for="link in links" :to="link"
          >Next link {{ link }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
