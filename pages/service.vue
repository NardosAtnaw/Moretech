<template>
  <div class="body-main">
    <HeaderPages :src="src" headline="services" />
    <section class="about-image">
      <div class="container">
        <img src="../assets/Images/about-removebg-preview.png" alt="" />
      </div>
    </section>
    <section class="product-area">
      <div class="services">
        <div class="container">
          <h2 class="title-service">Our Products</h2>
          <div class="wrapper">
            <div
              class="card"
              data-aos="slide-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <img class="service-img" src="../assets/Icons/pro1.svg" alt="" />

              <h2>Educational laboratory Equipment</h2>
              <p>
                It is imperative for schools to have the latest and high-quality
                science lab supplies these days. Effective teaching and learning
                of science involves seeing, handling, and manipulating real
                objects and materials
              </p>
            </div>
            <div
              class="card"
              data-aos="slide-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1010"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <img class="service-img" src="../assets/Icons/pro2.svg" alt="" />
              <h2>Laboratory Equipment for Engineering</h2>
              <p>
                Advancements both in industrial engineering and learning require
                very latest instrumentations to equip scholars and feed with
                technical skills that alleviate the current problem of
                industrial advancement.
              </p>
            </div>
            <div
              class="card"
              data-aos="slide-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1020"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <img class="service-img" src="../assets/Icons/pro3.svg" alt="" />
              <h2>Research and Quality Control Equipment</h2>
              <p>
                Present rigorous experiments for scientific researches and
                findings require the highest level of analytical and precision
                laboratory equipment for addressing current developmental goals
                of the world.
              </p>
            </div>
            <div
              class="card"
              data-aos="slide-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1030"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <img class="service-img" src="../assets/Icons/pro4.svg" alt="" />
              <h2>Laboratory Chemicals</h2>
              <p>
                Range of laboratory chemicals and growth cultures, such as;
                plant tissue culture, molecular biology, animal cell culture and
                others have been getting significant application in today’s
                world.
              </p>
            </div>
            <div
              class="card"
              data-aos="slide-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1040"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <img class="service-img" src="../assets/Icons/pro5.svg" alt="" />
              <h2>Modern Agricultural Equipment</h2>
              <p>
                More specialized agricultural machineries, dairy and beekeeping
                instruments have been supplied to several medium to higher level
                governmental and non- governmental organizations since 2007.
              </p>
            </div>
            <div
              class="card"
              data-aos="slide-up"
              data-aos-offset="20"
              data-aos-delay="50"
              data-aos-duration="1050"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <img class="service-img" src="../assets/Icons/pro6.svg" alt="" />
              <h2>Aluminum Door and Window Works</h2>
              <p>
                Aluminium frames enable for strong window sealing, ensuring that
                chilly air from within your home or workplace does not flow
                outside during the summer. Because these constructions are
                extremely energy efficient, thermal comfort is instantly
                improved.
              </p>
            </div>
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
import HeaderPages from "../components/HeaderPages.vue";
export default {
  components: {
    HeaderPages,
  },
  data() {
    return {
      src: require("../assets/Images/home2.jpg"),
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
  .about-image {
    margin-top: 3rem;
    margin-bottom: 3rem;
    .container {
      display: grid;
      place-items: center;
      img {
        width: 40rem;
      }
    }
  }
  .product-area {
    margin-top: 8rem;
    margin-bottom: 4rem;
    .services {
      .container {
        .title-service{
          text-align: center;
          font-size: 2rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          color: $M-blue;
        }
        .wrapper {
          .card {
            display: grid;
            place-items: center;
            margin-top: 1.88rem;
            padding: 1.5rem;
            border-radius: 3rem;
            // box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);

            .service-img {
              // background: $M-brown;
              // padding: 1.3rem;
              // border-radius: 50px;
              width: 5rem;
              // margin-bottom: 1rem;
            }
            h2 {
              @extend .title;
              font-family: "medium bt";
              font-weight: 500;
              margin-top: 1.5rem;
              text-align: center;
              font-size: 1.3rem;
              color: $M-blue;
              line-height: 1.5rem;
              margin-bottom: 1rem;
            }
            p {
              @extend .text;
              margin-top: 0.5rem;
              text-align: center;
              font-size: 0.9rem;
              line-height: 1.18rem;
              color: $M-blue;
            }
            // &:hover {
            //   // background: $M-brown;
            //   border-radius: 4rem;
            //   opacity: 0.5;
            // }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .product-area {
      .services {
        .container {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
      }
    }
  }
  @include responsive($xl) {
    .product-area {
      .services {
        .container {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
          }
        }
      }
    }
  }
  .import {
    position: relative;
    margin-top: 8rem;
    margin-bottom: 15rem;
    .decor {
      position: absolute;
      width: 90rem;
      height: 50rem;
      object-fit: cover;
      z-index: -1;
    }
    .container {
      h2 {
        @extend .title;
        text-align: center;
        color: $M-blue;
      }
      p {
        @extend .text;
        text-align: center;
        color: $M-red;
        margin-top: 0.4rem;
        font-size: 0.8rem;
      }
      .wrapper {
        margin-top: 2rem;

        .card {
          display: flex;
          justify-content: center;
          margin-top: 3rem;

          .card-all {
            display: grid;
            align-items: center;
            width: 100%;
            background: $M-white;
            z-index: 9999;
            padding: 0.8rem;
            box-shadow: 0px 4px 25px rgba(82, 124, 136, 0.1);
            .card-border {
              border: 1px solid $M-green;
              padding: 1.5rem;
              .import-img {
                display: grid;
                justify-content: center;
              }
              .name {
                background: $M-white;
                @extend .title;
                font-size: 0.8rem;
                text-align: center;
                color: $M-green;
                margin-bottom: -2.2rem;
              }
            }
          }
          .desc-box {
            background: $M-green;
            width: 95%;

            p {
              @extend .text;
              text-align: left;
              color: $M-white;
              line-height: 1.2rem;
              padding: 0.8rem;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .import {
      .container {
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;

          .card2 {
            margin-top: 6rem;
            margin-bottom: -3rem;
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .import {
      margin-right: 10rem;
      margin-left: 10rem;
    }
  }
  @include responsive($xl) {
    .import {
      margin-right: 10rem;
      margin-left: 10rem;
      .container {
        .wrapper {
          gap: 2rem;

          .card2 {
            margin-top: 6rem;
            margin-bottom: -3rem;
          }
        }
      }
    }
  }
}
</style>
