<template lang="">
  <div>
    <div class="equi-card">
      <img :src="'https://moretechplc.com/api/post_img/' + img" alt="" />
    </div>
    <div class="rectangle">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "img"],
};
</script>
<style lang="scss">
.card-wrapper-flex {
  @include responsive($md) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @include responsive($lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include responsive($xl) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: -0.3rem !important;
  }
}
</style>
