<template>
  <div class="body-main">
    <HeaderPages :src="src" headline="About Us" />

    <section class="history">
      <div class="container">
        <div class="history-box">
          <h4>Our History</h4>
          <div class="desc">
            <img src="../assets/Images/moretech building.jpg" alt="" />
            <p>
              Moretch Industry PLC has been established in 2007 given that the
              owner deeply observed and identified the wider gap and hotspot
              problem of aluminum supplies in construction industry sector.<br />
              As a means of satisfying the greater and continual demand of
              aluminum in the construction of building; moretech has decided and
              taken a determination to establish a manufacturer and assembly
              plant of aluminum profile with an outlay of 1.8 million ETB in
              that year. <br /><br />
              After getting lessons and experiences from the successful
              achievement in the aluminum sector of the business through
              recruiting of potential and well trained technical and
              professional employees; the company showed progress and the scale
              of market and popularity has got highest and finally included the
              supply of dairy, poultry, beekeeping, fishery and laboratory
              equipment and chemicals which at the recent becomes one of the
              potentially built and leading companies in the country in the
              successful distribution of these equipment.<br />
              Hence, since that; we are always working with greatest
              determination in satisfying our national and international
              customers through the supply of quality and up-to-date laboratory
              equipment and chemicals.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mission-vision">
      <div class="container">
        <div class="vision">
          <img class="icon" src="../assets/Images/vision.svg" alt="" />
          <h2>Our Vision</h2>
          <p>
            Moretech Industry PLC aspires to be one of the nationally leading
            and renowned suppliers of laboratory equipment and chemicals and
            proactively strives to add a meaningful contribution for the
            prosperity of the country by the year 2025.
          </p>
        </div>
        <div class="mission">
          <img class="icon" src="../assets/Images/traget.svg" alt="" />
          <h2>Our Mission</h2>
          <p>
            To reach at excellence in the area of specialization of our
            business, we are passionately equipped to address the following
            missions:<br /><br />
            Regularly improving the quality of products and services in regard
            to match with the global trends and changes<br /><br />
            Enhance the technical capacity of the administrative and technical
            staff of the company through training and continuity of practical
            learning at technical sites (company`s stores &amp; laboratory of
            customers)<br /><br />
            Persistently strengthen and renew the relationship between the
            foreign suppliers and local customers<br /><br />
            Recruiting professionally vibrant, model role playing, creative,
            fast leaning, visional and mission- oriented staff<br /><br />
            Review and improve essential rewards, facilities and working
            environments for the vision administering staff members<br /><br />
            Strongly valuing and enhancing the level of internal and external
            relationships among various customers and stakeholders locally,
            regionally and internationally<br /><br />
            Increasing the trend of communication with different actors and
            sources for obtaining up- to- date information inputs in achieving
            company`s vision
          </p>
        </div>
      </div>
    </section>
    <section class="mission-vision">
      <div class="container">
        <div class="vision">
          <img class="icon" src="../assets/Images/vision.svg" alt="" />
          <h2>Value</h2>
          <p>
            Solving encountered problems and challenges smooth discussions and a
            keenly low cost practical approaches<br /><br />
            Believing that our staff are our most valuable assets of the
            company<br /><br />
            Adapted to high level of patience, determination, tolerance to harsh
            working environment <br /><br />
            Cooperation and collaboration are our best weapons of success and
            victory in business<br /><br />
            Develop a culture of continuous learning and entertain managed
            mistakes and failures as vital assets and turning points of changes
            and progresses.
          </p>
        </div>
        <div class="mission">
          <img class="icon" src="../assets/Images/vision.svg" alt="" />
          <h2>Integrity</h2>
          <p>
            We do our work via honestly and openly<br /><br />
            We are more concerned to accept and correct to our mistakes and
            gaps<br /><br />
            Respect to our covenants<br /><br />
            Abide by the principles and rule of law, particularly in alignment
            with the government policies and proclamation
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
          color: $M-red;
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
            display: flex;
            gap: 1rem;
            align-items: center;
            img {
              width: 20rem;
              height: 20rem;
              object-fit: cover;
            }
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
            img {
              width: 30rem;
              height: 30rem;
              object-fit: cover;
            }
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
  .mission-vision {
    margin-top: 8rem;
    .container {
      .vision {
        background: #fff;
        padding: 2rem;
        .icon {
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
      .mission {
        background: #fff;
        margin-top: 4rem;
        padding: 2rem;
        .icon {
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
  @include responsive($xl) {
    .mission-vision {
      margin-top: 8rem;
      .container {
        .vision {
          margin-left: 5rem;
          margin-right: 5rem;

          .icon {
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
        .mission {
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
        color: $M-red;
        margin-top: 0.94rem;
        font-size: 0.8rem;
      }
      .testimony-wrapper {
        justify-content: center;
        margin-top: 3rem;
        gap: 2rem;
        .testimony-card {
          background: $M-darkgreen;
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
