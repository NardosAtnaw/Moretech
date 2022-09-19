<template>

  <header id="app" class="header">

    <img class="header-cover" :src="src" alt="" />
    <nav class="nav" id="nav">
      <div class="container banner">
        <div class="logo">
          <img class="logo-img" src="../assets/Icons/logoblue.svg" alt="" />
        </div>
        <div class="menu-bar menu">
          <hr />
          <hr />
          <hr />
        </div>
         <div class="links-container">
          <img src="../assets/Icons/close.svg" class="close-btn" alt="" />
          <ul class="nav-links">
            <li><a href="/" class="scroll-link"> Home</a></li>
            <li class="drop-down2">
              <a href="education" class="scroll-link drop-down-link2">Products</a>
              <ul class="sublinks2">
                 <div class="corp-link2">
                  <li>
                    <a href="education">
                      Educational Equipment</a
                    >
                    <ul>
                       <li>
                    <a href="equipments">
                      Biology</a
                    >
                  </li>
                   <li>
                    <a href="education">
                    Physics</a
                    >
                  </li>
                   <li>
                    <a href="education">
                    Mathematics</a
                    >
                  </li>
                    <li>
                    <a href="education">
                   Chemistry</a
                    >
                  </li>
                   <li>
                    <a href="equipments">
                    Chemical engineering equipment </a
                    >
                  </li>
                   <li>
                    <a href="equipments">
                   Mechanical engineering </a
                    >
                  </li>
                    <li>
                    <a href="equipments">
                   Electrical engineering equipment </a
                    >
                  </li>
                    </ul>
                  </li>
                     <li>
                    <a href="labratory"
                      >Laboratory Chemicals Product </a
                    >
                  </li>
                  <li>
                    <a href="Analytical"
                      >Research and Quality Control Equipments</a
                    >
                  </li>
               
                  <li>
                    <a href="agricultural">Agriculture Equipment </a>
                  </li>

             
                  <li><a href="Aluminum">Aluminum doors and windows</a></li>
                </div>
              </ul>
            </li>
            <li class="drop-down">
              <a href="service" class="scroll-link drop-down-link">Services</a>
              <!-- <ul class="sublinks">
                <div class="corp-link">
                  <li> <a href="">Repair</a></li>
                  <li><a href=""> Import</a></li>
                  <li><a href="">Delivery</a></li>
                  <li><a href=""> Consult</a></li>
                </div>
              </ul> -->
            </li>

            <li>
              <a href="about" class="scroll-link">About Us</a>
            </li>

            <li><a href="contact" class="scroll-link">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mid-moto">
      <div class="container">
        <div class="moto-wrapper">
          <div class="line1"></div>
          <div class="moto" data-aos="fade-left">
            <h2>{{ headline }}</h2>
          </div>
          <div class="line2"></div>
        </div>
      </div>
    </div>

    <div class="header-lower">
      <div class="container">
        <div class="wrapper">
          <div class="moto">
            <h2>WE ARE MORETECH</h2>
            <p>
              Quality and high-standard laboratory equipment are available from
              us.
            </p>
          </div>
          <div class="social">
            <ul class="socials-links">
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
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["src", "headline"],
  mounted() {
    const dropDown = document.querySelector(".drop-down-link");
    const dropDownFull = document.querySelector(".nav-links");
    const sublinks = document.querySelector(".sublinks");
    console.log(sublinks);
    dropDown.addEventListener("mouseover", (e) => {
      const text = e.currentTarget.textContent;
      const tempBtn = e.currentTarget.getBoundingClientRect();
      const center = tempBtn.width / 2;
      sublinks.classList.add("show-links");
      // sublinks.style.left = `-${center + 5}px`
      console.log(center);
    });

    dropDownFull.addEventListener("mouseleave", () => {
      sublinks.classList.remove("show-links");
    });
    const dropDown2 = document.querySelector(".drop-down-link2");
    const dropDownFull2 = document.querySelector(".nav-links");
    const sublinks2 = document.querySelector(".sublinks2");
    console.log(sublinks2);
    dropDown2.addEventListener("mouseover", (e) => {
      const text = e.currentTarget.textContent;
      const tempBtn = e.currentTarget.getBoundingClientRect();
      const center = tempBtn.width / 2;
      sublinks2.classList.add("show-links2");
      // sublinks.style.left = `-${center + 5}px`
      console.log(center);
    });

    dropDownFull2.addEventListener("mouseleave", () => {
      sublinks2.classList.remove("show-links2");
    });

    const menu = document.querySelector(".menu");
    const sidebar = document.querySelector(".links-container");
    const close = document.querySelector(".close-btn");
    const banner = document.querySelector(".banner");
    menu.addEventListener("click", () => {
      sidebar.style.right = "0";
    });
    close.addEventListener("click", () => {
      sidebar.style.right = "-70vw";
    });
    const scrollLink = document.querySelectorAll(".scroll-link");
    window.addEventListener("load", () => {
      scrollLink.forEach((link) => {
        if (link.href === path) {
          link.style.color = "#71deb5";
          link.style.fontWeight = "bold";
        }
      });
    });

    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".nav");
      const menu = document.querySelector(".menu");
      const logo = document.querySelector(".logo a");
      const navHeight = nav.getBoundingClientRect().height;
      const scrollHeight = window.pageYOffset;

      if (navHeight < scrollHeight) {
        nav.classList.add("fixed");
        //       logo.innerHTML = `<picture>
        //   <source media="(min-width:650px)" srcset=" ">
        //   <img src="../assets/Icons/Logo.svg " class=" " alt=" " />
        // </picture>`;

        if (window.innerWidth > 768) {
          scrollLink.forEach((link) => {
            link.classList.add("black");
            if (link.href === path) {
              link.classList.remove("black");
              link.style.color = "#71deb5";
            }
          });
        }
      } else {
        nav.classList.remove("fixed");

        if (window.innerWidth > 768) {
          scrollLink.forEach((link) => {
            link.classList.remove("black");
          });
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.show-links,
.show-links2 {
  display: flex !important;
}
.fixed {
  position: fixed !important;
  top: 0;
  width: 100%;
  padding-bottom: 0.3rem;
  background: $M-white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 999999;
  // color: $M-blue;
}
header {
  position: relative;
  height: 60vh;
  width: 100%;
  background: rgba(16, 33, 125, 0.5) 59.37%;
  .header-cover {
    background-position: center center;
    background-size: cover;
    background-blend-mode: overlay;
    height: 60vh;
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
          color: $M-red;
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
          top: 2rem;
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
            margin-bottom: 0rem;
            .scroll-link {
              @extend .text-medium;
              font-size: 1rem;
              color: red;
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
                  color: red;
                  transition: color 0.2s linear;
                    &:hover {
                  color: $M-red;
                  font-size: 1.13rem;
               
                }
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
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        place-items: center;
        margin-top: 8rem;
        .line1 {
          width: 10rem;
          height: 0.2rem;
          background: $M-white;
        }
        .line2 {
          width: 10rem;
          height: 0.2rem;
          background: $M-white;
        }
        .moto {
          h2 {
            @extend .caps;
            color: $M-white;
            text-transform: uppercase;
            font-size: 1.5rem;
            text-align: center;
          }
        }
      }
    }
  }

  .header-lower {
    display: grid;
    place-items: center;
    .container {
      position: absolute;
      margin-left: 2rem;
      margin-right: 2rem;
      bottom: -3rem;
      height: 13vh;
      // width: 100%;
      background: $M-green;
      padding: 1rem;
      .wrapper {
        position: relative;
        .moto {
          h2 {
            @extend .title;
            text-align: left;
            font-size: 1rem;
            font-weight: 600;
            color: $M-white;
          }
          p {
            @extend .text;
            text-align: left;
            color: $M-white;
            margin-top: 0.4rem;
            line-height: 1rem;
            font-size: 0.7rem;
            margin-right: 0.7rem;
          }
        }
        .social {
          position: absolute;
          top: -0.6rem;
          right: -0.5rem;
          .socials-links {
            li {
              .social-img {
                margin-top: 0.5rem;
                width: 0.6rem;
              }
            }
          }
        }
      }
    }
  }
}
@include responsive($md) {
  header {
    .mid-moto {
      .container {
        .moto-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 10rem;
          gap: 1rem;

          .moto {
            h2 {
              @extend .caps;
              color: $M-white;
              text-transform: uppercase;
              font-size: 2rem;
              line-height: 1.3rem;
              text-align: center;
            }
          }
          .rectangle {
            img {
              width: 18rem;
            }
          }
          .moto {
            h2 {
              text-align: center;
              line-height: 2rem;
            }
          }
        }
      }
    }
    .header-lower {
      .container {
        height: 11vh;
        padding: 1.5rem;
        .wrapper {
          .moto {
            h2 {
              font-size: 1.3rem;
            }
            p {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}
@include responsive($lg) {
  header {
    height: 50vh;
    .header-cover {
      height: 50vh;
    }
    nav {
      .container {
        .links-container {
          width: 30vh;

          .nav-links {
            padding-top: 15rem;
          }
        }
      }
    }
    .mid-moto {
      .container {
        .moto-wrapper {
          margin-top: 15rem;
          .line1 {
            width: 15rem;
          }
          .line2 {
            width: 15rem;
          }
        }
      }
    }
    .header-lower {
      .container {
        height: 8vh;

        .wrapper {
          .moto {
            p {
              margin-top: 0.6rem;
            }
          }
        }
      }
    }
  }
}
@include responsive($xl) {
  header {
    height: 70vh;
    .header-cover {
      height: 70vh;
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
                color: red;
              }
              a {
                font-size: 1rem;

                &:hover {
                  color: $M-red;
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
                background: $M-green;
                padding: 1.2rem 1rem 1rem 0.5rem;
              
                display: none;
                h3 {
                  font-size: 1.13rem;
                  margin-bottom: 1.2rem;
                }
                li {
                  margin-bottom: 1rem;
                  a {
                    color: $M-white;

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
                background:$M-green;
                padding: 1.2rem 1rem 1rem 0.5rem;
          
                margin-top: -.5rem;
                display: none;
                h3 {
                  font-size: 1.13rem;
                  margin-bottom: 1.2rem;
                }
                li {
                  margin-bottom: 1rem;

                  a {
                    color: $M-white;
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
          .rectangle {
            img {
              width: 20rem;
            }
          }

          .moto {
            h2 {
              font-size: 3rem;
              line-height: 4rem;
            }
            p {
              margin-top: 2rem;
            }
          }
        }
      }
    }
    .header-lower {
      .container {
        height: 11.5vh;
        .wrapper {
          .moto {
              margin-left: 5rem;
            p {
            
              margin-top: 0.6rem;
            }
          }
        }
      }
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
          margin-top: 20rem;
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
