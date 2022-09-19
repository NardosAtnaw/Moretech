<template>
  <footer>
    <img class="decor" src="../assets/Icons/decor2.svg" alt="" />

    <div class="footer-triangle"></div>
    <div class="container">
      <div class="footer-wrapper">
        <div class="log-moto">
          <img class="footer-logo" src="../assets/Icons/logoblue.svg" alt="" />
          <div class="links-social">
            <a href=""><img src="../assets/Icons/facebook.svg" alt="" /></a>
            <a href=""><img src="../assets/Icons/twitter.svg" alt="" /></a>
            <a href=""><img src="../assets/Icons/youtube.svg" alt="" /></a>
            <a href=""><img src="../assets/Icons/linkedin.svg" alt="" /></a>
            <a href=""><img src="../assets/Icons/googleplus.svg" alt="" /></a>
          </div>
          <div class="line-footer">
            <hr />
            <hr />
          </div>
          <div class="location">
            <a
              href="https://www.google.com/maps/dir//Moretech+industry+PLC,+Ethiopia,+Yeka+subcity+Woreda+07+COMOROS+STREET+Block+no+78%2F37,+Addis+Ababa,+Ethiopia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x164b8fbd21b0901b:0x8b85b87620e90d53?sa=X&ved=2ahUKEwjuqL7E1ff1AhVMSvEDHeQHDScQ48ADegQIAhBT"
              >Megenagna, Addis Ababa, Ethiopia</a
            >
          </div>
        </div>
        <div class="footer-about">
          <h2>About Us</h2>
          <p>
            MoreTech is a company that imports and distributes laboratory
            equipment, materials, and chemicals.
          </p>
        </div>
        <div class="footer-service">
          <h2>Service</h2>
          <p>
            We provide a variety of services in the areas of education,
            research, laboratory, agriculture, and other equipment.
          </p>
        </div>
        <div class="footer-quick">
          <h2>Quick Links</h2>
          <ul class="quicklinks">
            <li><a href="">Home</a></li>
            <li><a href="/contact">Map</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/product">Product</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="linefooter"></div>
      <div class="copyright">
        <p>
          All Rights Reserved.&copy; 2022 Web Design & Development by
          <a href="https://versavvymedia.com/">Versavvy Media PLC</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background: $M-blue;
  //  border-start-start-radius: 5rem;
  position: relative;
  .decor {
    position: absolute;
    width: 90rem;
    height: 100%;
    object-fit: cover;
    //  z-index: 9;
  }
  .footer-triangle {
    position: absolute;
    opacity: 1;
    top: 0;
    width: 0;
    height: 0;
    border-left: 0rem solid transparent;
    border-right: 5rem solid transparent;
    border-top: 5rem solid $M-white;
  }
  .container {
    display: grid;
    .footer-wrapper {
      .log-moto {
        display: grid;
        place-items: center;
        margin-top: 3rem;
        .footer-logo {
          width: 4rem;
        }
        .links-social {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
        }
        .line-footer {
          display: flex;
          gap: 3rem;
          margin-top: 1rem;

          hr {
            background: $M-red;

            width: 4rem;
          }
        }
        .location {
          margin-top: 0.5rem;
          a {
            color: $M-white;
            font-size: 0.8rem;
          }
        }
      }
      .footer-about {
        margin-top: 5rem;
        margin-left: 2rem;
        margin-right: 2rem;
        h2 {
          @extend .text;
          font-size: 1.2rem;
          color: $M-red;
          text-align: center;
        }
        p {
          @extend .text;
          font-size: 0.8rem;
          line-height: 1.2rem;
          margin-top: 1rem;
          color: $M-white;
          text-align: center;
        }
      }
      .footer-service {
        margin-top: 5rem;
        margin-left: 2rem;
        margin-right: 2rem;
        h2 {
          @extend .text;

          font-size: 1.2rem;
          color: $M-red;
          text-align: center;
        }
        p {
          @extend .text;
          font-size: 0.8rem;
          line-height: 1.2rem;
          margin-top: 1rem;
          color: $M-white;
          text-align: center;
        }
      }
      .footer-quick {
        margin-top: 5rem;
        margin-left: 2rem;
        margin-right: 2rem;
        h2 {
          @extend .text;
          color: $M-red;
          font-size: 1.2rem;

          text-align: center;
        }
        .quicklinks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;
          margin-top: 1rem;
          li {
            text-align: left;
            margin-top: 0.5rem;
            a {
              font-size: 0.8rem;
              color: $M-white;
            }
          }
        }
      }
    }
    .linefooter {
      height: 0.09rem;
      width: 20rem;
      background: $M-red;
      margin-top: 6rem;
    }
    .copyright {
      display: grid;
      place-items: center;

      margin-bottom: 0.8rem;
      p {
        color: #fff;
        font-size: 0.7rem;
        margin-top: 1.88rem;

        line-height: 1.3rem;
        text-align: center;
        a {
          color: $M-lightblue;
        }
      }
    }
  }
}
@include responsive($md) {
  footer {
    .container {
      display: grid;
      place-items: center;
      .footer-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
      }
      .linefooter {
        height: 0.1rem;
        width: 40rem;

        margin-top: 6rem;
      }
    }
  }
}
@include responsive($xl) {
  footer {
    .footer-triangle {
      border-left: 0rem solid transparent;
      border-right: 10rem solid transparent;
      border-top: 10rem solid $M-white;
    }
    .container {
      display: grid;
      place-items: center;
      .footer-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: flex-start;
        margin-top: 5rem;
      }
      .linefooter {
        height: 0.09rem;
        margin-top: 3rem;
        width: 70rem;
        background: $M-red;
        margin-top: 6rem;
      }
      .copyright {
        margin-top: 2rem;
      }
    }
  }
}
</style>
