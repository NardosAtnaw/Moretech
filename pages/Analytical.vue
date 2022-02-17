<template>
  <div class="body-main">
    <HeaderPages
      :src="src"
      headline=" Analytical, Precision, Scientific Research and Quality Control Lab
          Equipment"
    />
    <section class="introduction">
      <div class="container">
        <h4>
          Analytical, Precision, Scientific Research and Quality Control Lab
          Equipment
        </h4>
        <p>
          Present rigorous experiments for scientific researches and findings
          require the highest level of analytical and precision laboratory
          equipment for addressing current developmental goals of the world.
          Researches in area of food security takes the primary icons in
          correspondence to others. Moretech Industry PLC in Ethiopia also
          handles the leading roles in the supply of such world class precision
          analytical instruments to the range of institutions needing our
          products.
        </p>
      </div>
    </section>
    <section class="alist">
      <div class="container">
        <div class="search">
          <div class="input-container">
            <button
              @click="search"
              type="submit"
              name="submit"
              class="search-button"
            >
              <img src="../assets/Icons/search.svg" class="icon" alt="" />
            </button>
            <input
              class="input-field"
              type="search"
              v-model="searchTerm"
              placeholder="Search..."
              name="search"
            />
          </div>
        </div>
        <div class="category">
          <h4>Environmental Protection Laboratory Equipment</h4>
          <p></p>

          <h3 class="category-title">Soil Quality Analytical Equipment</h3>
          <div class="wrapper">
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/soil.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Surface Soil Sampler/Core Cutter</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/soil2.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Soil Auger</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/soil3.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Soil Sieve Set</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/soil4.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Soil Moisture Meter</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/soil5.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Soil Conductivity/tem. Meter</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/soil6.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Portable XRF Analyzer for Screening</h2>
              </div>
            </div>
          </div>
          <h3 class="category-title">Water Quality Analytical Equipment</h3>
          <div class="wrapper">
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/water.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Conductivity Meter</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/water2.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Imhoff cone standards</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/water3.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>BOD Incubators</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/water4.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Turbidity Meter</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="category">
          <h4>Lab Ware Equipment</h4>
          <p></p>

          <h3 class="category-title"></h3>
          <div class="wrapper">
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/lab.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Tweezers</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/lab2.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Mortar and Pestle</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/lab3.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Test Tube Racks</h2>
              </div>
            </div>
          </div>
          <h3 class="category-title">Glass Ware equipment</h3>
          <div class="wrapper">
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/glass.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Long Neck Flat Bottom</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/glass2.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Distillation Flask</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/glass3.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Conical Flask Wide</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/glass4.png" alt="" />
              </div>
              <div class="rectangle">
                <h2>Borosilicate Graduated Beaker</h2>
              </div>
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
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
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
      src: require("../assets/Images/POTER-PAGE 2.png"),
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
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1.5,
      spaceBetween: 10,
      centeredSlides: true,
      freeMode: true,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        500: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 1.5,
        },
      },
    });
  },
};
</script>
<style lang="scss">
.body-main {
  font-family: Raleway;
  .introduction {
    margin-top: 10rem;
    .container {
      h4 {
        margin-top: 1rem;
        color: $M-blue;
        @extend .h3;
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 600;
        text-align: left;
      }
      p {
        color: $M-blue;
        @extend .title;
        font-size: 1rem;
        margin-top: 2rem;
        line-height: 1.3rem;
        text-align: left;
      }
    }
  }
  .alist {
    margin-top: 8rem;
    .container {
      .search {
        display: grid;
        place-items: right;
        .input-container {
          display: flex;

          flex-direction: row-reverse;
          width: 15.38rem;
          margin-bottom: 2.13rem;

          .search-button {
            background: none;
            border: none;
            padding: 0;
            margin: 0;
          }
          .icon {
            padding: 10px;
            min-width: 50px;
            // background: #fff;
            border: 2px solid $M-blue;
            border-left: none;
            border-start-end-radius: 5px;
            border-end-end-radius: 5px;
          }
          .input-field {
            width: 100%;
            padding: 10px;
            outline: none;
            background: none;
            border-color: $M-blue;
            border-right: none;
            border-start-start-radius: 5px;
            border-end-start-radius: 5px;
          }
        }
      }
      .category {
        margin-top: 3rem;
        h4 {
          margin-top: 1rem;
          color: $M-green;
          @extend .h3;
          font-size: 1.5rem;
          line-height: 1.5rem;
          font-weight: 600;
          text-align: left;
        }
        p {
          margin-top: 1rem;
          color: $M-darkgreen;
          // width: 50rem;
          @extend .text;
          font-size: 1rem;
          line-height: 1.5rem;
          text-align: left;
        }
        h3 {
          margin-top: 3rem;
          color: $M-green;
          @extend .title;
          font-size: 1.3rem;
          line-height: 1.5rem;
          font-weight: 600;
          text-align: left;
        }
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          .equi {
            display: grid;
            place-items: center;
            margin-top: 2rem;
            .equi-card {
              padding: 1.5rem;
              width: 10rem;
              height: 10rem;
              box-shadow: 0px 4px 25px rgba(82, 124, 136, 0.1);
            }
            .rectangle {
              height: 2rem;
              width: 10rem;
              background: $M-lightblue;
              display: grid;
              place-items: center;
              h2 {
                color: #fff;
                font-size: 0.8rem;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .alist {
      .container {
        .category {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            .equi {
              .equi-card {
                padding: 1rem;
              }
            }
          }
        }
      }
    }
  }
  @include responsive($md) {
    .alist {
      .container {
        .category {
          .wrapper {
            margin-top: 3rem;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }
      }
    }
  }
}
</style>
