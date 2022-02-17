<template>
     <header id="app" class="header">
      <img class="header-cover" :src="src" alt="" />
      <nav class="nav" id="nav">
        <div class="container banner">
          <div class="logo">
            <img class="logo-img" src="../assets/Icons/logo.svg" alt="" />
          </div>
          <div class="menu-bar menu">
            <hr />
            <hr />
            <hr />
          </div>
          <div class="links-container">
            <img src="../assets/Icons/close.svg" class="close-btn" alt="" />
            <ul class="nav-links">
              <li><a href="" class="scroll-link"> Home</a></li>
              <li class="drop-down">
                <a href="service" class="scroll-link drop-down-link">Services</a>
                <ul class="sublinks">
                  <div class="corp-link">
                    <li>
                      <a href="">Repair</a>
                    </li>
                    <li><a href=""> Import</a></li>
                    <li><a href="">Delivery</a></li>
                    <li><a href=""> Consult</a></li>
                  </div>
                </ul>
              </li>

              <li>
                <a href="about" class="scroll-link">About Us</a>
              </li>
              <li class="drop-down2">
                <a href="product" class="scroll-link drop-down-link2">Products</a>
                <ul class="sublinks2">
                  <div class="corp-link2">
                        <li>
                      <a href=""> Educational laboratory equipment, teaching aids,
chemicals and models</a>
                    </li>
                    <li><a href="">Analytical, precision, scientific research and quality
control lab equipment</a></li>
                    <li><a href=""> Analytical fine chemicals, reagents, culture media and
biologicals</a></li>
                    <li><a href="">Modern agriculture equipment and machineries</a></li>

                       <li><a href=""> Equipment for teaching engineering and vocational
training institute
biologicals</a></li>
                    <li><a href="">Aluminum doors and windows</a></li>
                  </div>
                </ul>
              </li>

              <li><a href="contact" class="scroll-link">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="mid-moto">
        <div class="container">
          <div class="moto-wrapper">
            <div class="moto"  data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
              <h2>WE ARE MORETECH</h2>
              <p>
                Quality and high-standard laboratory equipment are available
                from us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="line-socials">
        <div class="container">
          <div class="frist-line"></div>
          <ul class="socials">
            <li>
              <img
                class="social-img"
                src="../assets/Icons/facebook.svg"
                alt=""
              /><a href=""></a>
            </li>
            <li>
              <img
                class="social-img"
                src="../assets/Icons/linkedin.svg"
                alt=""
              /><a href=""></a>
            </li>
            <li>
              <img
                class="social-img"
                src="../assets/Icons/googleplus.svg"
                alt=""
              /><a href=""></a>
            </li>
            <li>
              <img
                class="social-img"
                src="../assets/Icons/twitter.svg"
                alt=""
              /><a href=""></a>
            </li>
            <li>
              <img
                class="social-img"
                src="../assets/Icons/youtube.svg"
                alt=""
              /><a href=""></a>
            </li>
          </ul>
          <div class="second-line"></div>
        </div>
      </div>
      <div class="triangle"></div>
    </header>
</template>

<script>
export default {
  props: ['src']
  
}
</script>

<style lang="scss" scoped>
 header {
    position: relative;
    height: 80vh;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(16, 33, 125, 0.5) 59.37%,
      rgba(16, 33, 125, 0.28) 59.39%
    );
    .header-cover {
      background-position: center center;
      background-size: cover;
      background-blend-mode: overlay;
      height: 80vh;
      position: absolute;
      object-fit: cover;
      z-index: -1;
      width: 100%;
    }
    nav {
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
          margin-top: 1rem;
          .logo-img {
            width: 3rem;
          }
        }
        .menu-bar {
          margin-top: 1rem;
          hr {
            margin: auto;
            margin-top: 0.5rem;
            color: $M-white;
            border-style: solid;
            width: 2.35rem;
          }
        }
        .links-container {
          position: fixed;
          top: 0;
          right: -70vw;
          height: 100vh;
          width: 70vw;
          background: $M-blue;
          z-index: 9999999999;
          transition: $trans;
          .close-btn {
            padding: 1rem;
            width: 4rem;
            position: absolute;
            top: 0rem;
            right: 0rem;
          }
          .nav-links {
            height: 50%;
            padding-top: 26rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 2rem;
            .drop-down2 {
              a {
                color: #fff;
              }
            }
            li {
              margin-bottom: .5rem;
              .scroll-link {
                @extend .text-medium;
                font-size: 1rem;
                color: #fff;
              }
              .sublinks,
              .sublinks2 {
                margin: 1rem 0;
                color: $M-brown;
                h3 {
                  font-family: "medium bt";
                  font-weight: 500;
                  font-size: 1rem;
                  line-height: 1.5rem;
                  margin-bottom: 1rem;
                }
                img {
                  width: 1.2rem;
                }
                li {
                  margin-bottom: 0.5rem;
                  margin-left: 1rem;
                  a {
                    font-family: "light bt";
                    font-size: 0.88rem;
                    display: flex;
                    gap: 0.5rem;
                    color: $M-white;
                    transition: color 0.2s linear;
                    img {
                      width: 0.5rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .mid-moto {
      .container {
        .moto-wrapper {
          display: grid;
          place-items: center;

          .moto {
            margin-top: 8rem;
            h2 {
              @extend .caps;
              color: $M-white;
              text-transform: uppercase;
              font-size: 2rem;
            }
            p {
              margin-top: 1rem;
              font-size: 1rem;
              color: $M-white;
              font-weight: 400;
              text-align: left;
            }
          }
        }
      }
    }
    .line-socials {
      position: absolute;
      top: 10rem;
      right: 0;
      .container {
        margin-right: 2rem;
        display: grid;
        place-items: center;
        align-items: center;
        .frist-line {
          margin: auto;
          margin-bottom: 0.5rem;
          border-left: 2px solid $M-white;
          height: 100px;
        }
        .socials {
          li {
            margin-top: 1rem;
            .social-img {
              width: 1rem;
            }
          }
        }
        .second-line {
          margin: auto;
          margin-top: 0.5rem;
          border-left: 2px solid $M-white;
          height: 100px;
        }
      }
    }
    .triangle {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 14rem solid transparent;
      border-right: 2rem solid transparent;
      border-bottom: 10rem solid   $M-white;
    }
  }
  @include responsive($md) {
    header {
      .mid-moto {
        .container {
          .moto-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 3rem;
            margin-right: 17rem;
            .rectangle {
              img {
                width: 18rem;
              }
            }
            .moto {
              margin-top: 10rem;
              h2 {
                text-align: left;
                line-height: 3rem;
                font-size: 3rem;
              }
              p {
                margin-top: 1rem;
              }
            }
          }
        }
      }
      .line-socials {
        top: 18rem;
        .container {
          margin-right: 5rem;
        }
      }
      .triangle {
        border-left: 28.5rem solid transparent;

        border-bottom: 12rem solid $M-white;
      }
    }
  }
  @include responsive($lg) {
    header {
      height: 60vh;
      .header-cover {
        height: 60vh;
      }
      nav {
        .container {
          .links-container {
            width: 30vh;
            .close-btn {
              width: 6rem;
            }
            .nav-links {
              padding-top: 15rem;
            }
          }
        }
      }
      .mid-moto {
        .container {
          .moto-wrapper {
            margin-top: 10rem;
            margin-right: 25rem;
            .moto {
              margin-top: 10rem;
            }
          }
        }
      }
      .triangle {
        border-left: 38rem solid transparent;

        border-bottom: 13rem solid $M-white;
      }
    }
  }
  @include responsive($xl) {
    header {
      height: 80vh;
      .header-cover {
        height: 80vh;
      }
      nav {
        .container {
          .logo {
            img {
              width: 15rem;
            }
          }
          .menu-bar {
            display: none;
          }
          .links-container {
            display: block;
            position: static;
            // width: 50%;
            height: auto;
            z-index: 9999999999;
            transition: $trans;
            background: none;
            width: auto;
            .close-btn {
              display: none;
            }

            .nav-links {
              height: auto;
              display: flex;
              padding-top: 0%;
              flex-direction: row;
              gap: 3rem;
              margin-top: 1rem;
              padding-left: 2rem;
              position: relative;
              li {
                .scroll-link {
                  color: #fff;
                }
                a {
                  font-size: 1rem;

                  &:hover {
                    color: $M-lightblue;
                    font-size: 1.13rem;
                    font-weight: 600;
                  }
                }
              }
              .drop-down {
                .sublinks {
                  position: absolute;
                  width: auto;
                  display: flex;
                  background: $M-blue;
                  padding: 1.2rem 1rem 1rem 0.5rem;
                  border-radius: 1rem;
                  display: none;
                  h3 {
                    font-size: 1.13rem;
                    margin-bottom: 1.2rem;
                  }
                  li {
                    margin-bottom: 1rem;
                    a {
                color: $M-brown;

                      font-size: 1rem;
                    }
                  }
                }
              }
              .drop-down2 {
                .sublinks2 {
                  position: absolute;
                  width: auto;
                  display: flex;
                  background: $M-blue;
                  padding: 1.2rem 1rem 1rem 0.5rem;
                  border-radius: 1rem;
                  display: none;
                  h3 {
                    font-size: 1.13rem;
                    margin-bottom: 1.2rem;
                  }
                  li {
                    margin-bottom: 1rem;

                    a {
                     color: $M-brown;
                      font-size: 0.9rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .mid-moto {
        .container {
          .moto-wrapper {
            justify-content: left;
            margin-top: 5rem;
            .rectangle {
              img {
                width: 20rem;
              }
            }

            .moto {
              margin-top: 8rem;
              margin-right: 40rem;
              h2 {
                font-size: 3.5rem;
                line-height: 4rem;
              }
              p {
                margin-top: 1.5rem;
              }
            }
          }
        }
      }
      .line-socials {
        .container {
          margin-right: 8rem;
        }
      }
      .triangle {
        border-left: 52.8rem solid transparent;

        border-bottom: 13rem solid $M-white;
      }
    }
  }
  @include responsive($xxl) {
    header {
      height: 93vh;
      .header-cover {
        height: 93vh;
        object-fit: cover;
      }

      .mid-moto {
        .container {
          .moto-wrapper {
            margin-right: 55rem;
            .moto {
              margin-top: 10rem;
            }
          }
        }
      }

      .line-socials {
        .container {
          margin-right: 22rem;
        }
      }
      .triangle {
        border-left: 70.7rem solid transparent;

        border-bottom: 15rem solid $M-white;
      }
    }
  }
</style>