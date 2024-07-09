<script setup lang="ts">
const route = useRoute();
const pb = usePb();

const url = route.params.link as string;

const { data, error, status } = await useAsyncData(url, async () => {
  const record = await pb
    .collection("links")
    .getFirstListItem(`shortID='${url}'`);
  return { record };
});

if (error.value) {
  console.error(error.value);
}

if (data.value?.record.link) {
  navigateTo(data.value.record.link, { external: true });
}
</script>

<template>
  <div v-if="error">{{ error }}</div>
</template>
