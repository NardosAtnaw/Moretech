<template>
  <div>
    <div class="category">
   
      <div class="card-wrapper-flex">
        <div class="wrapper">
          <div
            class="equi"
            data-aos="fade-zoom-in"
            data-aos-anchor-placement="top-center"
            v-for="item in data"
            :key="item.post_id"
          >
            <Card :title="item.post_name" :img="item.post_image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";

export default {
  props: ["data"],
  components: { Card },

  mounted() {
    console.log(this.data);
  },
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
