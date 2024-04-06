<template>
  <div class="teaser-card-list">
    <TeaserCard
      v-for="(teaser, index) in teasers"
      :key="index"
      :imageUrl="teaser.imageUrl"
      :headline="teaser.headline"
    />
  </div>
</template>

<script>
import TeaserCard from "/components/TeaserCard.vue";

export default {
  components: {
    TeaserCard,
  },
  props: {
    teasers: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.teaser-card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
