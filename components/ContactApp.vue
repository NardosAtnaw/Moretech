<template>
    <section class="contact">
      <div class="container" >
        <h2>Contact Us</h2>
        <p class="info-contact">
          Enim commodo quis nulla cillum in. Ipsum excepteur voluptate cillum
          elit est
        </p>
        <div class="contact-box" >
          <div>
            <p class="header-contact"><b>Contact Form </b></p>
          </div>

          <p class="header-desc">
            Enim commodo quis nulla cillum in. Ipsum excepteur voluptate cillum
            elit est
          </p>
          <div class="contact-wrapper">
            <div class="contact-form">
              <form action="#" method="post">
                <div class="column">
                  <div class="box-column">
                    <div class="box">
                      <label for="the-name">Your Name</label>
                    </div>
                    <input type="text" name="name" id="the-name" />
                  </div>

                  <div class="box-column">
                    <div class="box">
                      <label for="the-name">Last Name</label>
                    </div>
                    <input type="text" name="name" id="the-name" />
                  </div>
                  <div class="box-column">
                    <div class="box">
                      <label for="the-name">Email</label>
                    </div>
                    <input type="email" name="email" id="the-email" />
                  </div>

                  <div class="box-column">
                    <div class="box">
                      <label for="the-name">Phone Number</label>
                    </div>
                    <input type="tel" name="phone" id="the-phone" />
                  </div>
                </div>
                <div class="box-column">
                  <div class="box">
                    <label for="the-name">Messages</label>
                  </div>
                  <textarea name="message" id="the-message"></textarea>
                </div>

                <div class="submit-buttons">
                  <a class="btn btn-green" href="#">Submit</a>
                </div>
              </form>
            </div>
            <div class="line">
             
            </div>
            <div class="contact-info">
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun consectetur adipiscing elit, sed do eiusmod tempor incididun.Lorem ipsum dolor sit amet
              </p>
<div class="socials">
  <ul class="social-links">
    <li><a href=""><img src="../assets/Icons/facebook2.svg" alt="">https://www.facebook.com</a></li>
       <li><a href=""><img src="../assets/Icons/youtube2.svg" alt="">https://www.youtube.com</a></li>
          <li><a href=""><img src="../assets/Icons/linkedin2.svg" alt="">https://www.linkedin.com</a></li>
             <li><a href=""><img src="../assets/Icons/google2.svg" alt="">https://www.googleplus.com</a></li>
             <li><a href="https://www.google.com/maps/dir//Moretech+industry+PLC,+Ethiopia,+Yeka+subcity+Woreda+07+COMOROS+STREET+Block+no+78%2F37,+Addis+Ababa,+Ethiopia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x164b8fbd21b0901b:0x8b85b87620e90d53?sa=X&ved=2ahUKEwjuqL7E1ff1AhVMSvEDHeQHDScQ48ADegQIAhBT"><span class="bold-spacing"> Location:</span> Megenagna, Addis Ababa, Ethiopia</a></li>
  </ul>
</div>
            </div>
          </div>
          <div class="socials2">
  <ul class="social-links">
    <li><a href=""><img src="../assets/Icons/facebook2.svg" alt=""></a></li>
       <li><a href=""><img src="../assets/Icons/youtube2.svg" alt=""></a></li>
          <li><a href=""><img src="../assets/Icons/linkedin2.svg" alt=""></a></li>
             <li><a href=""><img src="../assets/Icons/google2.svg" alt=""></a></li>
           
  </ul>
</div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .contact {
    margin-top: 8rem;
    margin-bottom: 8rem;
    .container {
      h2 {
        @extend .title;
        text-align: center;
        color: $M-blue;
      }
     .info-contact {
        @extend .text;
        text-align: center;
        color: $M-darkgreen;
        margin-top: 0.4rem;
        font-size: 0.8rem;
      }
      .contact-box {
        margin-top: 3rem;
        border: 2px solid $M-blue;
        padding: 1rem;
      position: relative;
        div {
          margin-top: -1.7rem;

         .header-contact {
            color: $M-blue;
            padding-left: 0.5rem;
            width: 8rem;
            font-size: .9rem;
            background: $M-white;

          }
        }
       .header-desc {
          @extend .text;
          text-align: left;
          color: grey;
          margin-top: 1.88rem;
          font-size: 0.8rem;
        }
        .contact-wrapper {
          // display: grid;
          // place-items: center;
          .contact-form {
            position: relative;
            margin-top: 5rem;
            .box-column {
              margin-top: 1rem;

              .box {
                background: $M-white;
                position: absolute;
                width: 7rem;
                margin-top: -0.8rem;
                margin-left: 1rem;
                padding: 0.5rem;

                label {
                  display: block;
                  font-size: 0.8rem;
                  color: $M-blue;
                }
              }
              input,
              select,
              textarea {
                  
                display: block;
                width: 100%;
                padding: 0.3em;
                font-size: 20px;
                background-color: $M-white;
                border: solid 1px $M-blue;
                resize: vertical;
              }
              textarea {
                min-height: 180px;
              }
            }
            .submit-buttons {
              margin-top: 2rem;
              // position: absolute;
              // right: 0;
              display: flex;
              justify-content: right;
            }
          }
          .line {
             margin-top: 5rem;
          width: 19rem;
          height: .1rem;
          background: $M-blue;
          }
          .contact-info { 
                 margin-top: 3rem;
            p{
              width: 100%;
         font-size: .9rem;
              text-align: left;
              color: $M-blue;
            }
            .socials{
                margin-top: 3rem;
              .social-links{
                li{
                  margin-top: 1.5rem;
                   color: $M-green;
                   font-size: .9rem;
                   
                  a{
                    color: $M-green;
                    display: flex;
                    gap: 1rem;
                    font-size: .9rem;
                    img{
                      width: 1rem;
                    }
                    .bold-spacing{
                      margin-top: .5rem;
                     letter-spacing: .2rem;
                      font-weight: 600;
                    }
                  }
                }
              }
            }
          }
        }
        .socials2{
                margin-top: -10rem;
            //  margin-left: 18.9rem;
                background: $M-white;
                position: absolute;
                right:-1rem;
                // background: red;
                width: 1.9rem;
                padding: .5rem;
              .social-links{
                li{
                  margin-top: .5rem;
                   color: $M-blue;
               
                   
                  a{
                  
                    img{
                      width: .8rem;
                      
                    }
                  }
                }
              }
            }    
      }
    }
  }
  @include responsive($md){
    .contact{
      .container{
        .contact-box{
         .contact-wrapper{
           display: flex;
           gap:1.5rem;
           .contact-form{
             width: 100%;
           }
           .line{
             width: .1rem;
             height: 25rem;
             margin-top: 3rem;

           }
           .contact-info{
             width: 70%;
           }
         } 
        }
      }
    }
  }
  @include responsive($xl){
    .contact{
      .container{
        .contact-box{
         .contact-wrapper{
          
           .contact-form{
         
             form{
               .column{
                 display: grid;
                 grid-template-columns: 1fr 1fr;
                 gap: 1rem;
               }
             }
           }
          
          .contact-info{
             width: 80%;
           }
         } 
        }
      }
    }
  }
</style>