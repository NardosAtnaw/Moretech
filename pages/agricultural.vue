<template>
  <div class="body-main">
    <HeaderPages
      :src="src"
      headline="Modern Agricultural Equipment and Machineries "
    />

    <section class="introduction">
      <div class="container">
        <h4>Modern Agricultural Equipment and Machineries</h4>
        <p>
          More specialized agricultural machineries, dairy and beekeeping
          instruments and laboratory equipment have been supplied to several
          medium to higher level governmental and non- governmental
          organizations since 2007. Some of our major products in this area are;
          milk processing machines and quality measurement instruments, such as;
          lactoscan, cream separator, butyrometer, milk refractometer; poultry
          production instruments, like; feeder and drinker, brooder, hatching
          incubator and debeaker. At present; Moretech Industry PLC is well
          equipped with management, finance, supportive staff and technical
          experts such as; electrical and chemical engineers, biotechnologists,
          agriculturalists, veterinarians and environmentalists with their time-
          tested experience over the ranges of the instruments.
        </p>
      </div>
    </section>
    <section class="alist">
      <div class="container">
        <!-- <div class="search">
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
              placeholder="Search..."
              name="search"
            />
          </div>
        </div> -->
        <div class="category">
          <h4>Beekeeping (Apiculure) Equipment</h4>

          <div class="wrapper">
            <div class="equi" data-aos="fade-zoom-in">
              <div class="equi-card">
                <img src="../assets/Images/Laboratory/wa printer.jpg" alt="" />
              </div>
              <div class="rectangle">
                <h2>Wax Printer</h2>
              </div>
            </div>
            <div class="equi" data-aos="fade-zoom-in">
              <div class="equi-card">
                <img src="../assets/Images/Laboratory/bee veil.jpg" alt="" />
              </div>
              <div class="rectangle">
                <h2>Bee Veil</h2>
              </div>
            </div>
          </div>
          <h3 class="category-title">Poultry Production Equipment</h3>
          <div class="wrapper">
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img
                  src="../assets/Images/Laboratory/poultry feeder.jpg"
                  alt=""
                />
              </div>
              <div class="rectangle">
                <h2>Poultry Feeder</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/Laboratory/brooder.jpg" alt="" />
              </div>
              <div class="rectangle">
                <h2>Brooder</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img
                  src="../assets/Images/Laboratory/hatching incubator.jpg"
                  alt=""
                />
              </div>
              <div class="rectangle">
                <h2>Hatching Incubator</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/Laboratory/debeaker.jpg" alt="" />
              </div>
              <div class="rectangle">
                <h2>Debeaker</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="category">
          <h4>Dairy Production Equipment and Milk Analyzing Equipment</h4>

          <h3 class="category-title"></h3>
          <div class="wrapper">
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img
                  src="../assets/Images/Laboratory/milk churner.jpg"
                  alt=""
                />
              </div>
              <div class="rectangle">
                <h2>Milk Churner</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img
                  src="../assets/Images/Laboratory/milk collecting can.jpg"
                  alt=""
                />
              </div>
              <div class="rectangle">
                <h2>Milk Collecting Can</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img
                  src="../assets/Images/Laboratory/cream separator.jpg"
                  alt=""
                />
              </div>
              <div class="rectangle">
                <h2>Cream Separator</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/Laboratory/lactometer.jpg" alt="" />
              </div>
              <div class="rectangle">
                <h2>Lactometer</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/Laboratory/lactoscan.jpg" alt="" />
              </div>
              <div class="rectangle">
                <h2>Lactoscan</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img src="../assets/Images/Laboratory/butyrometer.jpg" alt="" />
              </div>
              <div class="rectangle">
                <h2>Butyrometer</h2>
              </div>
            </div>
            <div
              class="equi"
              data-aos="fade-zoom-in"
              data-aos-anchor-placement="top-center"
            >
              <div class="equi-card">
                <img
                  src="../assets/Images/Laboratory/milk refractometer.jpg"
                  alt=""
                />
              </div>
              <div class="rectangle">
                <h2>Milk Refractometer</h2>
              </div>
            </div>
          </div>
        </div>

        <EduSection :data="allData" :image="imgData" />
      </div>
    </section>
    <ContactApp />
    <FooterApp />
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import EduSection from "../components/EduSection.vue";
import HeaderPages from "../components/HeaderPages.vue";

export default {
  components: {
    HeaderPages,
    EduSection,
  },
  data() {
    return {
      allData: [],
      imgData: [],
      searchTerm: "",
      src: require("../assets/Images/POTER-PAGE 2.png"),
    };
  },
  methods: {
    async fetchData() {
      await axios
        .post("https://moretechplc.com/api/", {
          action: "fetchAgr",
        })
        .then((res) => {
          this.allData = res.data;
          console.log(this.allData);
        })

        .then(async (img) => {
          await axios
            .post("https://moretechplc.com/api/", {
              action: "fetchImgAgr",
            })
            .then((res) => {
              this.imgData = res.data;
              console.log(this.imgData);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
  created() {
    this.fetchData();
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
          color: $M-darkgreen;
          @extend .h3;
          font-size: 1.5rem;
          line-height: 1.5rem;
          font-weight: 600;
          text-align: left;
        }
        p {
          margin-top: 1rem;
          color: $M-green;
          // width: 50rem;
          @extend .text;
          font-size: 1rem;
          line-height: 1.5rem;
          text-align: left;
        }
        h3 {
          margin-top: 3rem;
          color: $M-darkgreen;
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
              display: grid;
              place-items: center;
              padding: 1.5rem;
              width: 10rem;
              height: 10rem;

              box-shadow: 0px 4px 25px rgba(82, 124, 136, 0.1);
              img {
                width: 10rem;
                height: 10rem;
                object-fit: cover;
                @include responsive($xl) {
                  width: 15rem;
                  height: 15rem;
                }
              }
            }
            .rectangle {
              height: 2rem;
              width: 10rem;
              background: $M-lightblue;
              display: grid;
              place-items: center;
              @include responsive($xl) {
                width: 15rem;
              }
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
          p {
            font-size: 1.13rem;
          }
          .wrapper {
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            .equi {
              display: grid;
              place-items: center;
              margin-top: 2rem;
              .equi-card {
                display: grid;
                align-items: center;
                padding: 1rem;
                width: 15rem;
                height: 16.5rem;
                @include responsive($xl) {
                  width: 20rem;
                  height: 20rem;
                }
                box-shadow: 0px 4px 25px rgba(82, 124, 136, 0.1);
              }
              .rectangle {
                height: 2rem;
                width: 15rem;
                background: $M-green;
                display: grid;
                place-items: center;
                @include responsive($xl) {
                  width: 20rem;
                }
                h2 {
                  color: #fff;
                  font-size: 1rem;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
  @include responsive($lg) {
    .alist {
      .container {
        .category {
          p {
            width: 60rem;
          }
          .wrapper {
            margin-top: 3rem;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      }
    }
  }
  @include responsive($xl) {
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
