<template>
  <div class="body-main">
    <HeaderPages :src="src" headline="About Us" />

    <section class="history">
      <div class="container">
        <div class="history-box">
          <h4>Our History</h4>
          <div class="desc">
            <p>
              MoreTech is a company that imports and distributes laboratory
              equipment, materials, and chemicals. In each area, our suppliers
              provide the finest prices and well-known brands, allowing us to be
              a trusted and reliable extension of our clients. MoreTech is a
              company that imports and distributes laboratory equipment,
              materials, and chemicals. In each area, our suppliers provide the
              finest prices and well-known brands, allowing us to be a trusted
              and reliable extension of our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
        <section class="mission-vision">
      <div class="container">
        <div class="vision">
          <img class="icon" src="../assets/Images/vision.svg" alt="">
          <h2>Our Vision</h2>
          <p>
            MoreTech's mission is to provide high-quality services that exceed
            our valued clients' expectations by supplying highly demanded items.
          </p>
        </div>
        <div class="mission">
          <img class="icon" src="../assets/Images/traget.svg" alt="">
          <h2>Our Mission</h2>
          <p>
            MoreTech's mission is to provide high-quality services that exceed
            our valued clients' expectations by supplying highly demanded items.
          </p>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <div class="container">
        <h2>Testimonials</h2>
        <p>
          Enim commodo quis nulla cillum in. Ipsum excepteur voluptate cillum
          elit est
        </p>
        <div class="testimony-wrapper">
          <div
            class="testimony-card"
            data-aos="zoom-up"
            data-aos-offset="20"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div class="test-img">
              <img src="../assets/Icons/user1.svg" alt="" />
            </div>
            <p>
              <b> Wow the company I know!</b> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <h3>- Getachew Bezuwerk</h3>
          </div>
          <div
            class="testimony-card"
            data-aos="zoom-up"
            data-aos-offset="20"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div class="test-img">
              <img src="../assets/Images/user.svg" alt="" />
            </div>
            <p>
              <b> Wow the company I know!</b> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <h3>- Bethel Grima</h3>
          </div>
          <div
            class="testimony-card"
            data-aos="zoom-up"
            data-aos-offset="20"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div class="test-img">
              <img src="../assets/Icons/hospital.svg" alt="" />
            </div>
            <p>
              <b> Wow the company I know!</b> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <h3>- Hospital Name</h3>
          </div>
        </div>
      </div>
    </section>

    <ContactApp />
    <FooterApp />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import HeaderPages from "../components/HeaderPages.vue";
export default {
  components: {
    HeaderPages,
  },
  data() {
    return {
      src: require("../assets/Images/about.jpg"),
    };
  },
  mounted() {
    AOS.init({
      duration: 900,
      offset: 120,
      easing: "ease",
      once: false,
      anchorPlacement: "top-bottom",
    });

  },
};
</script>

<style lang="scss">
.body-main {
  .history {
    margin-top: 8rem;
    .container {
      .history-box {
        margin-top: 3rem;
        border: 2px solid $M-blue;
        padding: 1rem;
        position: relative;
        h4 {
          background: $M-white;

          padding: 0.4rem;
          width: 8rem;
          margin-top: -2.3rem;
          margin-left: 1rem;
          color: $M-blue;
          @extend .h3;
          font-size: 0.9rem;

          line-height: 1.3rem;
          font-weight: 600;
          text-align: left;
        }
        .desc {
          p {
            margin-left: 1rem;
            color: $M-blue;
            @extend .title;
            font-size: 0.9rem;
            margin-top: 0.94rem;
            line-height: 1.3rem;
            text-align: center;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .history {
      .container {
        .history-box {
          padding: 3rem;
          h4 {
            padding: 0.6rem;
            width: 8rem;
            margin-top: -4.5rem;
          }
          .desc {
            p {
              margin-top: 2rem;
            }
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .history {
      .container {
        .history-box {
          margin-right: 5rem;
          margin-left: 5rem;

          .desc {
            p {
              padding: 2rem;
              margin-right: 3rem;
              margin-left: 3rem;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
.mission-vision{
  margin-top: 8rem;
  .container{
    .vision{
      background: #fff;
      padding: 2rem;
      .icon{
        margin-top: -4rem;
        width: 4rem;
      }
       h2 {
         margin-top: 1rem;
        @extend .title;
        text-align: left;
        color: $M-blue;
        font-weight: 600;
      }
      p {
        @extend .text;
        text-align: left;
        color: $M-blue;
        line-height: 1.13rem;
        margin-top: 0.94rem;
        font-size: 0.9rem;
      }
    }
      .mission{
      background: #fff;
      margin-top: 4rem;
      padding: 2rem;
      .icon{
        margin-top: -3.8rem;
        width: 4rem;
      }
       h2 {
         margin-top: 1rem;
        @extend .title;
       
        text-align: left;
        color: $M-blue;
        font-weight: 600;
      }
      p {
        @extend .text;
        text-align: left;
        color: $M-blue;
        line-height: 1.13rem;
        margin-top: 0.94rem;
        font-size: 0.9rem;
      }
    }
  }
}
@include responsive($xl){
  .mission-vision{
  margin-top: 8rem;
  .container{
    
    .vision{
      margin-left: 5rem;
    margin-right: 5rem;
      
      .icon{
        margin-top: -4rem;
        width: 4rem;
      }
       h2 {
          margin-left: 2rem;
      
      }
      p {
         margin-left: 2rem;
     
      }
    }
      .mission{
        margin-left: 5rem;
    margin-right: 5rem;
    
       h2 {
        
      margin-left: 2rem;
    
      }
      p {
         margin-left: 2rem;
       
      }
    }
  }
}
}
  .testimonials {
    margin-top: 8rem;
    margin-bottom: 8rem;
    .container {
      display: grid;
      place-items: center;
      h2 {
        @extend .title;
        text-align: center;
        color: $M-blue;
      }
      p {
        @extend .text;
        text-align: center;
        color: $M-blue;
        margin-top: 0.94rem;
        font-size: 0.8rem;
      }
      .testimony-wrapper {
        justify-content: center;
        margin-top: 3rem;
        gap: 2rem;
        .testimony-card {
          background: $M-green;
          padding: 1rem;
          margin-top: 3rem;
          // border-radius: 0.5rem;
          // width: 20rem;
          .test-img {
            margin-top: -2.8rem;
            // margin-left: .5rem;
            object-fit: cover;
            img {
              width: 4rem;
            }
          }
          p {
            margin-left: 1rem;
            color: $M-white;
            @extend .title;
            font-size: 0.9rem;
            margin-top: 0.94rem;
            line-height: 1.3rem;
            text-align: left;
          }
          h3 {
            margin-left: 1rem;
            color: $M-white;
            @extend .h3;
            font-size: 0.8rem;
            margin-top: 0.94rem;
            line-height: 1.3rem;
            text-align: right;
          }
        }
      }
    }
  }
  @include responsive($md) {
    .testimonials {
      .container {
        .testimony-wrapper {
          display: flex;
        }
      }
    }
  }
}
</style>
