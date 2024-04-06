<template>
  <div class="teaser-card">
    <img :src="imageUrl" :alt="headline" class="teaser-image" />
    <h2 class="teaser-headline">{{ headline }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.teaser-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.teaser-image {
  width: 100%;
  max-width: 300px;
  height: auto;
}

.teaser-headline {
  margin-top: 10px;
  font-size: 1.5rem;
  text-align: center;
}
</style>
