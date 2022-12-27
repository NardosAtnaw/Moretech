<template>
  <div>
    <div class="category" v-for="item in data" :key="item.post_id">
      <h4>{{ item.post_category }}</h4>
      <p>
        {{ item.post_content }}
      </p>

      <h3 class="category-title">{{ item.post_subcategory }}</h3>
      <!-- <p>
        {{ item.post_subcontent }}
      </p> -->
      <div class="card-wrapper-flex">
        <div class="wrapper">
          <div
            class="equi"
            data-aos="fade-zoom-in"
            data-aos-anchor-placement="top-center"
            v-for="img in image"
            :key="img.post_id"
          >
            <div v-if="img.post_subcategory === item.post_subcategory">
              <div>
                <div class="equi-card">
                  <img
                    :src="
                      'https://moretechplc.com/api/post_img/' + img.post_image
                    "
                    alt=""
                  />
                </div>
                <div class="rectangle">
                  <h2>{{ img.post_name }}</h2>
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>

          <!-- <Card :title="item.post_name" :img="item.post_image" /> -->
        </div>
      </div>
      <!-- <Card :title="item.post_name" :img="item.post_image" /> -->
      <!-- <Card :title="item.post_name" :img="item.post_image" />
        <Card :title="item.post_name2" :img="item.post_image2" />
        <Card :title="item.post_name3" :img="item.post_image3" />
        <Card :title="item.post_name4" :img="item.post_image4" /> -->
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import ImageSection from "../components/ImageSection.vue";
export default {
  props: ["data", "image"],
  components: { Card, ImageSection },
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
