<script setup lang="ts">
const route = useRoute();
const pb = usePb();

const shortID = route.params.shortID as string;

const { data, error } = await useAsyncData(shortID, async () => {
  const record = await pb
    .collection("links")
    .getFirstListItem(`shortID='${shortID}'`);
  return { record };
});

if (error.value) {
  console.error(error.value);
}

if (data.value?.record.link) {
  navigateTo(data.value.record.link, { external: true, redirectCode: 302 });
}
</script>

<template>
  <div v-if="error">{{ error }}</div>
</template>
