(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{262:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"nav",attrs:{id:"nav"}},[r("div",{staticClass:"container banner"},[r("div",{staticClass:"logo"},[r("img",{staticClass:"logo-img",attrs:{src:n(268),alt:""}})]),e._v(" "),r("div",{staticClass:"menu-bar menu"},[r("hr"),e._v(" "),r("hr"),e._v(" "),r("hr")]),e._v(" "),r("div",{staticClass:"links-container"},[r("img",{staticClass:"close-btn",attrs:{src:n(280),alt:""}}),e._v(" "),r("ul",{staticClass:"nav-links"},[r("li",[r("a",{staticClass:"scroll-link",attrs:{href:"/"}},[e._v(" Home")])]),e._v(" "),r("li",{staticClass:"drop-down2"},[r("a",{staticClass:"scroll-link drop-down-link2",attrs:{href:"product"}},[e._v("Products")]),e._v(" "),r("ul",{staticClass:"sublinks2"},[r("div",{staticClass:"corp-link2"},[r("li",[r("a",{attrs:{href:"education"}},[e._v("\n                    Educational Equipment")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"equipments"}},[e._v("\n                    Biology")])]),e._v(" "),r("li",[r("a",{attrs:{href:"education"}},[e._v("\n                  Physics")])]),e._v(" "),r("li",[r("a",{attrs:{href:"education"}},[e._v("\n                  Mathematics")])]),e._v(" "),r("li",[r("a",{attrs:{href:"education"}},[e._v("\n                 Chemistry")])]),e._v(" "),r("li",[r("a",{attrs:{href:"equipments"}},[e._v("\n                  Chemical engineering equipment ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"equipments"}},[e._v("\n                 Mechanical engineering ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"equipments"}},[e._v("\n                 Electrical engineering equipment ")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"Analytical"}},[e._v("Research and Quality Control Equipments")])]),e._v(" "),r("li",[r("a",{attrs:{href:"agricultural"}},[e._v("Agriculture Equipment ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"Aluminum"}},[e._v("Aluminum doors and windows")])])])])]),e._v(" "),r("li",{staticClass:"drop-down"},[r("a",{staticClass:"scroll-link drop-down-link",attrs:{href:"service"}},[e._v("Services")]),e._v(" "),r("ul",{staticClass:"sublinks"},[r("div",{staticClass:"corp-link"},[r("li",[r("a",{attrs:{href:""}},[e._v("Repair")])]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v(" Import")])]),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Delivery")])])])])]),e._v(" "),r("li",[r("a",{staticClass:"scroll-link",attrs:{href:"about"}},[e._v("About Us")])]),e._v(" "),r("li",[r("a",{staticClass:"scroll-link",attrs:{href:"contact"}},[e._v("Contact Us")])])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-lower"},[r("div",{staticClass:"container"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"moto"},[r("h2",[e._v("WE ARE MORETECH")]),e._v(" "),r("p",[e._v("\n            Quality and high-standard laboratory equipment are available from\n            us.\n          ")])]),e._v(" "),r("div",{staticClass:"social"},[r("ul",{staticClass:"socials-links"},[r("li",[r("img",{staticClass:"social-img",attrs:{src:n(269),alt:""}}),r("a",{attrs:{href:""}})]),e._v(" "),r("li",[r("img",{staticClass:"social-img",attrs:{src:n(270),alt:""}}),r("a",{attrs:{href:""}})]),e._v(" "),r("li",[r("img",{staticClass:"social-img",attrs:{src:n(271),alt:""}}),r("a",{attrs:{href:""}})]),e._v(" "),r("li",[r("img",{staticClass:"social-img",attrs:{src:n(272),alt:""}}),r("a",{attrs:{href:""}})]),e._v(" "),r("li",[r("img",{staticClass:"social-img",attrs:{src:n(273),alt:""}}),r("a",{attrs:{href:""}})])])])])])])}],o=(n(14),n(31),{props:["src","headline"],mounted:function(){var e=document.querySelector(".drop-down-link"),t=document.querySelector(".nav-links"),n=document.querySelector(".sublinks");console.log(n),e.addEventListener("mouseover",(function(e){e.currentTarget.textContent;var t=e.currentTarget.getBoundingClientRect().width/2;n.classList.add("show-links"),console.log(t)})),t.addEventListener("mouseleave",(function(){n.classList.remove("show-links")}));var r=document.querySelector(".drop-down-link2"),o=document.querySelector(".nav-links"),d=document.querySelector(".sublinks2");console.log(d),r.addEventListener("mouseover",(function(e){e.currentTarget.textContent;var t=e.currentTarget.getBoundingClientRect().width/2;d.classList.add("show-links2"),console.log(t)})),o.addEventListener("mouseleave",(function(){d.classList.remove("show-links2")}));var menu=document.querySelector(".menu"),f=document.querySelector(".links-container"),l=document.querySelector(".close-btn");document.querySelector(".banner");menu.addEventListener("click",(function(){f.style.right="0"})),l.addEventListener("click",(function(){f.style.right="-70vw"}));var c=document.querySelectorAll(".scroll-link");window.addEventListener("load",(function(){c.forEach((function(link){link.href===path&&(link.style.color="#71deb5",link.style.fontWeight="bold")}))})),window.addEventListener("scroll",(function(){var nav=document.querySelector(".nav");document.querySelector(".menu"),document.querySelector(".logo a");nav.getBoundingClientRect().height<window.pageYOffset?(nav.classList.add("fixed"),window.innerWidth>768&&c.forEach((function(link){link.classList.add("black"),link.href===path&&(link.classList.remove("black"),link.style.color="#71deb5")}))):(nav.classList.remove("fixed"),window.innerWidth>768&&c.forEach((function(link){link.classList.remove("black")})))}))}}),d=(n(274),n(45)),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header",attrs:{id:"app"}},[n("img",{staticClass:"header-cover",attrs:{src:e.src,alt:""}}),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"mid-moto"},[n("div",{staticClass:"container"},[n("div",{staticClass:"moto-wrapper"},[n("div",{staticClass:"line1"}),e._v(" "),n("div",{staticClass:"moto",attrs:{"data-aos":"fade-left"}},[n("h2",[e._v(e._s(e.headline))])]),e._v(" "),n("div",{staticClass:"line2"})])])]),e._v(" "),e._m(1)])}),r,!1,null,"17bff2a4",null);t.default=component.exports},263:function(e,t,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("03ebdcbe",content,!0,{sourceMap:!1})},268:function(e,t,n){e.exports=n.p+"img/logo.99f386e.svg"},269:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjQ1ODMgMEgzLjU0MTY3QzEuNTg1OTYgMCAwIDEuNTg1OTYgMCAzLjU0MTY3VjEzLjQ1ODNDMCAxNS40MTQgMS41ODU5NiAxNyAzLjU0MTY3IDE3SDEzLjQ1ODNDMTUuNDE0OCAxNyAxNyAxNS40MTQgMTcgMTMuNDU4M1YzLjU0MTY3QzE3IDEuNTg1OTYgMTUuNDE0OCAwIDEzLjQ1ODMgMFpNMTEuMzMzMyA0Ljk1ODMzSDkuOTcwNUM5LjUzNDg3IDQuOTU4MzMgOS4yMDgzMyA1LjEzNjgzIDkuMjA4MzMgNS41ODgwNFY2LjM3NUgxMS4zMzMzTDExLjE2NDggOC41SDkuMjA4MzNWMTQuMTY2N0g3LjA4MzMzVjguNUg1LjY2NjY3VjYuMzc1SDcuMDgzMzNWNS4wMTI4OEM3LjA4MzMzIDMuNTgwNjMgNy44MzcgMi44MzMzMyA5LjUzNDg3IDIuODMzMzNIMTEuMzMzM1Y0Ljk1ODMzWiIgZmlsbD0iI0Y1RjdGOSIvPgo8L3N2Zz4K"},270:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjQ1ODMgMEgzLjU0MTY3QzEuNTg1OTYgMCAwIDEuNTg1OTYgMCAzLjU0MTY3VjEzLjQ1ODNDMCAxNS40MTQgMS41ODU5NiAxNyAzLjU0MTY3IDE3SDEzLjQ1ODNDMTUuNDE0OCAxNyAxNyAxNS40MTQgMTcgMTMuNDU4M1YzLjU0MTY3QzE3IDEuNTg1OTYgMTUuNDE0OCAwIDEzLjQ1ODMgMFpNNS42NjY2NyAxMy40NTgzSDMuNTQxNjdWNS42NjY2N0g1LjY2NjY3VjEzLjQ1ODNaTTQuNjA0MTcgNC43Njg1QzMuOTE5OTIgNC43Njg1IDMuMzY0NTggNC4yMDg5MiAzLjM2NDU4IDMuNTE5QzMuMzY0NTggMi44MjkwOCAzLjkxOTkyIDIuMjY5NSA0LjYwNDE3IDIuMjY5NUM1LjI4ODQyIDIuMjY5NSA1Ljg0Mzc1IDIuODI5MDggNS44NDM3NSAzLjUxOUM1Ljg0Mzc1IDQuMjA4OTIgNS4yODkxMiA0Ljc2ODUgNC42MDQxNyA0Ljc2ODVaTTE0LjE2NjcgMTMuNDU4M0gxMi4wNDE3VjkuNDg4ODNDMTIuMDQxNyA3LjEwMzE3IDkuMjA4MzMgNy4yODM3OSA5LjIwODMzIDkuNDg4ODNWMTMuNDU4M0g3LjA4MzMzVjUuNjY2NjdIOS4yMDgzM1Y2LjkxNjg3QzEwLjE5NzIgNS4wODUxMiAxNC4xNjY3IDQuOTQ5ODMgMTQuMTY2NyA4LjY3MDcxVjEzLjQ1ODNaIiBmaWxsPSIjRjVGN0Y5Ii8+Cjwvc3ZnPgo="},271:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjQ1ODMgMEgzLjU0MTY3QzEuNTg1OTYgMCAwIDEuNTg1OTYgMCAzLjU0MTY3VjEzLjQ1ODNDMCAxNS40MTQgMS41ODU5NiAxNyAzLjU0MTY3IDE3SDEzLjQ1ODNDMTUuNDE0OCAxNyAxNyAxNS40MTQgMTcgMTMuNDU4M1YzLjU0MTY3QzE3IDEuNTg1OTYgMTUuNDE0OCAwIDEzLjQ1ODMgMFpNNi4xMzkxMiAxMS44MDU4QzQuMzEwOTIgMTEuODA1OCAyLjgzMzMzIDEwLjMyNzUgMi44MzMzMyA4LjVDMi44MzMzMyA2LjY3MjUgNC4zMTA5MiA1LjE5NDIxIDYuMTM5MTIgNS4xOTQyMUM3LjAzMTYyIDUuMTk0MjEgNy43Nzc1IDUuNTIwMDQgOC4zNTQwOCA2LjA1ODM4TDcuNDU2NjIgNi45MjI1NEM3LjIxMDgzIDYuNjg2NjcgNi43ODA4NyA2LjQxMjU0IDYuMTM5MTIgNi40MTI1NEM1LjAxMDc1IDYuNDEyNTQgNC4wODk5MiA3LjM0NzU0IDQuMDg5OTIgOC41QzQuMDg5OTIgOS42NTI0NiA1LjAxMDc1IDEwLjU4NzUgNi4xMzkxMiAxMC41ODc1QzcuNDQ3NDIgMTAuNTg3NSA3LjkzODI5IDkuNjQ3NSA4LjAxNDA4IDkuMTYxNThINi4xMzkxMlY4LjAyODI1SDkuMjYwMDRDOS4yODkwOCA4LjE5MzI5IDkuMzEyNDYgOC4zNTkwNCA5LjMxMjQ2IDguNTc1NzlDOS4zMTE3NSAxMC40NjQyIDguMDQ2NjcgMTEuODA1OCA2LjEzOTEyIDExLjgwNThaTTE0LjE2NjcgOC45NzI0NkgxMi43NVYxMC4zODkxSDExLjgwNTFWOC45NzI0NkgxMC4zODg0VjguMDI4MjVIMTEuODA1MVY2LjYxMTU4SDEyLjc1VjguMDI4MjVIMTQuMTY2N1Y4Ljk3MjQ2WiIgZmlsbD0iI0Y1RjdGOSIvPgo8L3N2Zz4K"},272:function(e,t,n){e.exports=n.p+"img/twitter.762a3f7.svg"},273:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDgzMzMgNi42MTA4OEwxMC44NjA5IDguNDk2NDZMNy4wODMzMyAxMC4zODkxVjYuNjEwODhaTTE3IDMuNTQxNjdWMTMuNDU4M0MxNyAxNS40MTQgMTUuNDE0OCAxNyAxMy40NTgzIDE3SDMuNTQxNjdDMS41ODU5NiAxNyAwIDE1LjQxNCAwIDEzLjQ1ODNWMy41NDE2N0MwIDEuNTg1OTYgMS41ODU5NiAwIDMuNTQxNjcgMEgxMy40NTgzQzE1LjQxNDggMCAxNyAxLjU4NTk2IDE3IDMuNTQxNjdaTTE0LjE2NjcgOC41QzE0LjE1MjUgNS41Nzk1NCAxMy45Mzc5IDQuNDYyNSAxMi4wOTYyIDQuMzM3MTJDMTAuMzk0MSA0LjIyMDk2IDYuNjAzNzkgNC4yMjE2NyA0LjkwNDUgNC4zMzcxMkMzLjA2NDI1IDQuNDYyNSAyLjg0NzUgNS41NzQ1OCAyLjgzMzMzIDguNUMyLjg0NzUgMTEuNDIwNSAzLjA2MjEyIDEyLjUzNzUgNC45MDM3OSAxMi42NjI5QzYuNjAzMDggMTIuNzc4MyAxMC4zOTM0IDEyLjc3OSAxMi4wOTU1IDEyLjY2MjlDMTMuOTM1OCAxMi41Mzc1IDE0LjE1MjUgMTEuNDI1NCAxNC4xNjY3IDguNVoiIGZpbGw9IiNGNUY3RjkiLz4KPC9zdmc+Cg=="},274:function(e,t,n){"use strict";n(263)},275:function(e,t,n){var r=n(73)(!1);r.push([e.i,'*[data-v-17bff2a4],[data-v-17bff2a4]:after,[data-v-17bff2a4]:before{box-sizing:border-box;font-family:"Lato",sans-serif;font-family:"Playfair Display",serif;font-family:"Raleway",sans-serif}a[data-v-17bff2a4],b[data-v-17bff2a4],blockquote[data-v-17bff2a4],body[data-v-17bff2a4],canvas[data-v-17bff2a4],caption[data-v-17bff2a4],code[data-v-17bff2a4],div[data-v-17bff2a4],em[data-v-17bff2a4],embed[data-v-17bff2a4],fieldset[data-v-17bff2a4],figure[data-v-17bff2a4],footer[data-v-17bff2a4],form[data-v-17bff2a4],h1[data-v-17bff2a4],h2[data-v-17bff2a4],h3[data-v-17bff2a4],h4[data-v-17bff2a4],h5[data-v-17bff2a4],h6[data-v-17bff2a4],header[data-v-17bff2a4],html[data-v-17bff2a4],i[data-v-17bff2a4],iframe[data-v-17bff2a4],img[data-v-17bff2a4],label[data-v-17bff2a4],li[data-v-17bff2a4],main[data-v-17bff2a4],nav[data-v-17bff2a4],object[data-v-17bff2a4],ol[data-v-17bff2a4],p[data-v-17bff2a4],pre[data-v-17bff2a4],section[data-v-17bff2a4],small[data-v-17bff2a4],span[data-v-17bff2a4],strike[data-v-17bff2a4],strong[data-v-17bff2a4],sub[data-v-17bff2a4],sup[data-v-17bff2a4],table[data-v-17bff2a4],tbody[data-v-17bff2a4],td[data-v-17bff2a4],tfoot[data-v-17bff2a4],th[data-v-17bff2a4],thead[data-v-17bff2a4],tr[data-v-17bff2a4],tt[data-v-17bff2a4],u[data-v-17bff2a4],ul[data-v-17bff2a4],video[data-v-17bff2a4]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}img[data-v-17bff2a4]{border-style:none;max-width:100%;height:auto;display:block}html[data-v-17bff2a4]{line-height:1.15;-webkit-text-size-adjust:100%}article[data-v-17bff2a4],aside[data-v-17bff2a4],details[data-v-17bff2a4],figcaption[data-v-17bff2a4],figure[data-v-17bff2a4],footer[data-v-17bff2a4],header[data-v-17bff2a4],hgroup[data-v-17bff2a4],main[data-v-17bff2a4],menu[data-v-17bff2a4],nav[data-v-17bff2a4],section[data-v-17bff2a4]{display:block}ol[data-v-17bff2a4],ul[data-v-17bff2a4]{list-style:none}blockquote[data-v-17bff2a4],q[data-v-17bff2a4]{quotes:none}blockquote[data-v-17bff2a4]:after,blockquote[data-v-17bff2a4]:before,q[data-v-17bff2a4]:after,q[data-v-17bff2a4]:before{content:"";content:none}table[data-v-17bff2a4]{border-collapse:collapse;border-spacing:0}input[data-v-17bff2a4]{-webkit-appearance:none;border-radius:0}button[data-v-17bff2a4],input[data-v-17bff2a4],optgroup[data-v-17bff2a4],select[data-v-17bff2a4],textarea[data-v-17bff2a4]{font-family:inherit;font-size:100%;line-height:1.15;margin:0}hr[data-v-17bff2a4]{box-sizing:content-box;height:0;overflow:visible}pre[data-v-17bff2a4]{font-family:monospace,monospace;font-size:1em}a[data-v-17bff2a4]{background-color:transparent;text-decoration:none;color:#000}abbr[title][data-v-17bff2a4]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b[data-v-17bff2a4],strong[data-v-17bff2a4]{font-weight:bolder}sub[data-v-17bff2a4],sup[data-v-17bff2a4]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[data-v-17bff2a4]{bottom:-.25em}sup[data-v-17bff2a4]{top:-.5em}button[data-v-17bff2a4],select[data-v-17bff2a4]{text-transform:none}button[data-v-17bff2a4],input[data-v-17bff2a4]{overflow:visible}[type=button][data-v-17bff2a4],[type=reset][data-v-17bff2a4],[type=submit][data-v-17bff2a4],button[data-v-17bff2a4]{-webkit-appearance:button}[type=button][data-v-17bff2a4]::-moz-focus-inner,[type=reset][data-v-17bff2a4]::-moz-focus-inner,[type=submit][data-v-17bff2a4]::-moz-focus-inner,button[data-v-17bff2a4]::-moz-focus-inner{border-style:none;padding:0}[type=button][data-v-17bff2a4]:-moz-focusring,[type=reset][data-v-17bff2a4]:-moz-focusring,[type=submit][data-v-17bff2a4]:-moz-focusring,button[data-v-17bff2a4]:-moz-focusring{outline:1px dotted ButtonText}fieldset[data-v-17bff2a4]{padding:.35em .75em .625em}legend[data-v-17bff2a4]{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress[data-v-17bff2a4]{vertical-align:baseline}textarea[data-v-17bff2a4]{overflow:auto}[type=checkbox][data-v-17bff2a4],[type=radio][data-v-17bff2a4]{box-sizing:border-box;padding:0}[type=number][data-v-17bff2a4]::-webkit-inner-spin-button,[type=number][data-v-17bff2a4]::-webkit-outer-spin-button{height:auto}[type=search][data-v-17bff2a4]{-webkit-appearance:textfield;outline-offset:-2px}[type=search][data-v-17bff2a4]::-webkit-search-decoration{-webkit-appearance:none}[data-v-17bff2a4]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details[data-v-17bff2a4]{display:block}summary[data-v-17bff2a4]{display:list-item}[hidden][data-v-17bff2a4],template[data-v-17bff2a4]{display:none}body[data-v-17bff2a4]{font-family:Arial,Helvetica,sans-serif}.h1[data-v-17bff2a4],.huge[data-v-17bff2a4]{font-weight:500;font-size:5rem;line-height:4.31rem}.medium[data-v-17bff2a4]{font-weight:600;font-size:2.13rem}.medium[data-v-17bff2a4],.subtitle[data-v-17bff2a4]{line-height:1.5rem}.subtitle[data-v-17bff2a4]{font-weight:400;font-size:1.3rem}.absolute[data-v-17bff2a4]{position:absolute;z-index:-1}.text[data-v-17bff2a4],header .header-lower .container .wrapper .moto p[data-v-17bff2a4]{font-size:1rem;line-height:1.75rem;color:#10217d}.title[data-v-17bff2a4],header .header-lower .container .wrapper .moto h2[data-v-17bff2a4]{font-size:1.5rem;line-height:1.63rem;color:#10217d}.nav[data-v-17bff2a4]{font-size:1rem;line-height:1.63rem}@media screen and (min-width:768px){.title[data-v-17bff2a4],header .header-lower .container .wrapper .moto h2[data-v-17bff2a4]{font-size:1.5rem;line-height:1.63rem}}@media screen and (min-width:992px){.nav[data-v-17bff2a4]{font-size:2rem;line-height:1.63rem}}.caps[data-v-17bff2a4],header .mid-moto .container .moto-wrapper .moto h2[data-v-17bff2a4]{text-transform:uppercase;font-size:1.13rem;font-weight:800;line-height:1.63rem;color:#10217d}@media screen and (min-width:992px){.text[data-v-17bff2a4],header .header-lower .container .wrapper .moto p[data-v-17bff2a4]{font-size:1.13rem;line-height:2rem}}.text-center[data-v-17bff2a4]{text-align:center}.text-medium[data-v-17bff2a4],header nav .container .links-container .nav-links li .scroll-link[data-v-17bff2a4]{font-size:1.13rem;line-height:1.75rem}.h4[data-v-17bff2a4]{font-weight:400;line-height:1.5rem;text-transform:uppercase}.h3[data-v-17bff2a4],.h4[data-v-17bff2a4]{font-size:1.3rem}.h3[data-v-17bff2a4]{font-weight:500;line-height:1.8rem}.h2[data-v-17bff2a4]{font-weight:600;font-size:1.8rem;line-height:1.88rem}@media screen and (min-width:1200px){.h2[data-v-17bff2a4]{font-weight:600;font-size:3rem;line-height:3.98rem}}.text-small[data-v-17bff2a4]{font-weight:300;font-size:1rem;line-height:1.5rem}.container[data-v-17bff2a4]{width:90%;max-width:1440px;margin:0 auto}@media screen and (min-width:1920px){.container[data-v-17bff2a4]{width:70%;max-width:1920px;margin:0 auto}}.row[data-v-17bff2a4]{display:flex;flex-wrap:wrap}.col[data-v-17bff2a4]{flex:1 0 0%}.btn[data-v-17bff2a4]{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem 1.75rem;font-size:.9rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (min-width:992px){.btn[data-v-17bff2a4]{font-size:.9rem;font-weight:400}}.btn-darkerblue[data-v-17bff2a4]{background:#10217d;color:#f5f9fd;border-color:#10217d}.btn-rounded[data-v-17bff2a4],.btn-rounded-darkerblue[data-v-17bff2a4],.btn-rounded-green[data-v-17bff2a4],.btn-rounded-lightblue[data-v-17bff2a4],.btn-rounded-outline-category[data-v-17bff2a4],.btn-rounded-outline-darkerblue[data-v-17bff2a4],.btn-rounded-outline-lightblue[data-v-17bff2a4]{border-radius:20px}.btn-rounded-outline-darkerblue[data-v-17bff2a4]{background:transparent;color:#10217d;font-weight:500;font-size:1.3rem;border-color:#10217d}.btn-rounded-outline-darkerblue[data-v-17bff2a4]:hover{background:#10217d;color:#fff}.btn-rounded-outline-lightblue[data-v-17bff2a4]{background:transparent;color:#89dee2;font-weight:500;font-size:1.3rem;border-color:#89dee2}.btn-rounded-outline-lightblue[data-v-17bff2a4]:hover{background:#89dee2;color:#fff}.btn-rounded-outline-category[data-v-17bff2a4]{background:transparent;color:#888b8d;border-color:#888b8d}.btn-rounded-outline-category[data-v-17bff2a4]:hover{background:#888b8d;color:#fff}.btn-green[data-v-17bff2a4]{color:#f5f9fd;background:#2e4450}.btn-blue[data-v-17bff2a4]{color:#f5f9fd;background:#10217d}.btn-rounded-green[data-v-17bff2a4]{background:#2e4450;color:#fff;margin-bottom:5px}.btn-rounded-lightblue[data-v-17bff2a4]{background:#89dee2;color:#fff;margin-bottom:5px}.btn-rounded-darkerblue[data-v-17bff2a4]{background:#10217d;color:#fff;margin-bottom:5px}.btn-outline-darkerblue[data-v-17bff2a4]{background:transparent;color:#10217d;border-color:#10217d}.btn-outline-white[data-v-17bff2a4]{background:transparent;color:#f5f9fd;border-color:#f5f9fd}.btn-outline-lightblue[data-v-17bff2a4]{background:transparent;color:#89dee2;border-color:#89dee2}.btn-lightblue[data-v-17bff2a4]{color:#f5f9fd;background:#89dee2}.btn-brown[data-v-17bff2a4]{color:#f5f9fd;background:#d7baad}.btn-white[data-v-17bff2a4]{color:#10217d;background:#f5f9fd}.show-links[data-v-17bff2a4],.show-links2[data-v-17bff2a4]{display:flex!important}.fixed[data-v-17bff2a4]{position:fixed!important;top:0;width:100%;padding-bottom:.3rem;background:#10217d;box-shadow:0 5px 15px rgba(0,0,0,.5);z-index:999999;color:#10217d}header[data-v-17bff2a4]{position:relative;height:60vh;width:100%;background:rgba(16,33,125,.5) 59.37%}header .header-cover[data-v-17bff2a4]{background-position:50%;background-size:cover;background-blend-mode:overlay;height:60vh;position:absolute;-o-object-fit:cover;object-fit:cover;z-index:-1;width:100%}header nav .container[data-v-17bff2a4]{display:flex;justify-content:space-between;align-items:center}header nav .container .logo[data-v-17bff2a4]{margin-top:1rem}header nav .container .logo .logo-img[data-v-17bff2a4]{width:3rem}header nav .container .menu-bar[data-v-17bff2a4]{margin-top:1rem}header nav .container .menu-bar hr[data-v-17bff2a4]{margin:.5rem auto auto;color:#f5f9fd;border-style:solid;width:2.35rem}header nav .container .links-container[data-v-17bff2a4]{position:fixed;top:0;right:-70vw;height:100vh;width:70vw;background:#10217d;z-index:9999999999;transition:all .5s ease-in-out}header nav .container .links-container .close-btn[data-v-17bff2a4]{padding:1rem;width:4rem;position:absolute;top:0;right:0}header nav .container .links-container .nav-links[data-v-17bff2a4]{height:50%;padding-top:26rem;display:flex;flex-direction:column;justify-content:space-around;padding-left:2rem}header nav .container .links-container .nav-links .drop-down2 a[data-v-17bff2a4]{color:#fff}header nav .container .links-container .nav-links li[data-v-17bff2a4]{margin-bottom:0}header nav .container .links-container .nav-links li .scroll-link[data-v-17bff2a4]{font-size:1rem;color:#fff}header nav .container .links-container .nav-links li .sublinks[data-v-17bff2a4],header nav .container .links-container .nav-links li .sublinks2[data-v-17bff2a4]{margin:1rem 0;color:#d7baad}header nav .container .links-container .nav-links li .sublinks2 h3[data-v-17bff2a4],header nav .container .links-container .nav-links li .sublinks h3[data-v-17bff2a4]{font-family:"medium bt";font-weight:500;font-size:1rem;line-height:1.5rem;margin-bottom:1rem}header nav .container .links-container .nav-links li .sublinks2 img[data-v-17bff2a4],header nav .container .links-container .nav-links li .sublinks img[data-v-17bff2a4]{width:1.2rem}header nav .container .links-container .nav-links li .sublinks2 li[data-v-17bff2a4],header nav .container .links-container .nav-links li .sublinks li[data-v-17bff2a4]{margin-bottom:.5rem;margin-left:1rem}header nav .container .links-container .nav-links li .sublinks2 li a[data-v-17bff2a4],header nav .container .links-container .nav-links li .sublinks li a[data-v-17bff2a4]{font-family:"light bt";font-size:.88rem;display:flex;grid-gap:.5rem;gap:.5rem;color:#f5f9fd;transition:color .2s linear}header nav .container .links-container .nav-links li .sublinks2 li a img[data-v-17bff2a4],header nav .container .links-container .nav-links li .sublinks li a img[data-v-17bff2a4]{width:.5rem}header .mid-moto .container .moto-wrapper[data-v-17bff2a4]{display:flex;justify-content:center;grid-gap:.5rem;gap:.5rem;align-items:center;justify-items:center;place-items:center;margin-top:8rem}header .mid-moto .container .moto-wrapper .line1[data-v-17bff2a4],header .mid-moto .container .moto-wrapper .line2[data-v-17bff2a4]{width:10rem;height:.2rem;background:#f5f9fd}header .mid-moto .container .moto-wrapper .moto h2[data-v-17bff2a4]{color:#f5f9fd;text-transform:uppercase;font-size:1.5rem;text-align:center}header .header-lower[data-v-17bff2a4]{display:grid;align-items:center;justify-items:center;place-items:center}header .header-lower .container[data-v-17bff2a4]{position:absolute;margin-left:2rem;margin-right:2rem;bottom:-3rem;height:13vh;background:#d7baad;padding:1rem}header .header-lower .container .wrapper[data-v-17bff2a4]{position:relative}header .header-lower .container .wrapper .moto h2[data-v-17bff2a4]{text-align:left;font-size:1rem;font-weight:600;color:#f5f9fd}header .header-lower .container .wrapper .moto p[data-v-17bff2a4]{text-align:left;color:#f5f9fd;margin-top:.4rem;line-height:1rem;font-size:.7rem;margin-right:.7rem}header .header-lower .container .wrapper .social[data-v-17bff2a4]{position:absolute;top:-.6rem;right:-.5rem}header .header-lower .container .wrapper .social .socials-links li .social-img[data-v-17bff2a4]{margin-top:.5rem;width:.6rem}@media screen and (min-width:768px){header .mid-moto .container .moto-wrapper[data-v-17bff2a4]{display:flex;justify-content:center;margin-top:10rem;grid-gap:1rem;gap:1rem}header .mid-moto .container .moto-wrapper .moto h2[data-v-17bff2a4]{color:#f5f9fd;text-transform:uppercase;font-size:2rem;line-height:1.3rem}header .mid-moto .container .moto-wrapper .rectangle img[data-v-17bff2a4]{width:18rem}header .mid-moto .container .moto-wrapper .moto h2[data-v-17bff2a4]{text-align:center;line-height:2rem}header .header-lower .container[data-v-17bff2a4]{height:11vh;padding:1.5rem}header .header-lower .container .wrapper .moto h2[data-v-17bff2a4]{font-size:1.3rem}header .header-lower .container .wrapper .moto p[data-v-17bff2a4]{font-size:.9rem}}@media screen and (min-width:992px){header[data-v-17bff2a4],header .header-cover[data-v-17bff2a4]{height:50vh}header nav .container .links-container[data-v-17bff2a4]{width:30vh}header nav .container .links-container .nav-links[data-v-17bff2a4]{padding-top:15rem}header .mid-moto .container .moto-wrapper[data-v-17bff2a4]{margin-top:15rem}header .mid-moto .container .moto-wrapper .line1[data-v-17bff2a4],header .mid-moto .container .moto-wrapper .line2[data-v-17bff2a4]{width:15rem}header .header-lower .container[data-v-17bff2a4]{height:8vh}header .header-lower .container .wrapper .moto p[data-v-17bff2a4]{margin-top:.6rem}}@media screen and (min-width:1200px){header[data-v-17bff2a4],header .header-cover[data-v-17bff2a4]{height:70vh}header nav .container .logo img[data-v-17bff2a4]{width:15rem}header nav .container .menu-bar[data-v-17bff2a4]{display:none}header nav .container .links-container[data-v-17bff2a4]{display:block;position:static;height:auto;z-index:9999999999;transition:all .5s ease-in-out;background:none;width:auto}header nav .container .links-container .close-btn[data-v-17bff2a4]{display:none}header nav .container .links-container .nav-links[data-v-17bff2a4]{height:auto;display:flex;padding-top:0;flex-direction:row;grid-gap:3rem;gap:3rem;margin-top:1rem;padding-left:2rem;position:relative}header nav .container .links-container .nav-links li .scroll-link[data-v-17bff2a4]{color:#fff}header nav .container .links-container .nav-links li a[data-v-17bff2a4]{font-size:1rem}header nav .container .links-container .nav-links li a[data-v-17bff2a4]:hover{color:#89dee2;font-size:1.13rem;font-weight:600}header nav .container .links-container .nav-links .drop-down .sublinks[data-v-17bff2a4]{position:absolute;width:auto;display:flex;background:#2e4450;padding:1.2rem 1rem 1rem .5rem;border-radius:1rem;display:none}header nav .container .links-container .nav-links .drop-down .sublinks h3[data-v-17bff2a4]{font-size:1.13rem;margin-bottom:1.2rem}header nav .container .links-container .nav-links .drop-down .sublinks li[data-v-17bff2a4]{margin-bottom:1rem}header nav .container .links-container .nav-links .drop-down .sublinks li a[data-v-17bff2a4]{color:#f5f9fd;font-size:1rem}header nav .container .links-container .nav-links .drop-down2 .sublinks2[data-v-17bff2a4]{position:absolute;width:auto;display:flex;background:#2e4450;padding:1.2rem 1rem 1rem .5rem;border-radius:1rem;display:none}header nav .container .links-container .nav-links .drop-down2 .sublinks2 h3[data-v-17bff2a4]{font-size:1.13rem;margin-bottom:1.2rem}header nav .container .links-container .nav-links .drop-down2 .sublinks2 li[data-v-17bff2a4]{margin-bottom:1rem}header nav .container .links-container .nav-links .drop-down2 .sublinks2 li a[data-v-17bff2a4]{color:#f5f9fd;font-size:.9rem}header .mid-moto .container .moto-wrapper .rectangle img[data-v-17bff2a4]{width:20rem}header .mid-moto .container .moto-wrapper .moto h2[data-v-17bff2a4]{font-size:3rem;line-height:4rem}header .mid-moto .container .moto-wrapper .moto p[data-v-17bff2a4]{margin-top:2rem}header .header-lower .container[data-v-17bff2a4]{height:11.5vh}header .header-lower .container .wrapper .moto p[data-v-17bff2a4]{margin-top:.6rem}}@media screen and (min-width:1920px){header[data-v-17bff2a4]{height:93vh}header .header-cover[data-v-17bff2a4]{height:93vh;-o-object-fit:cover;object-fit:cover}header .mid-moto .container .moto-wrapper[data-v-17bff2a4]{margin-top:20rem}header .line-socials .container[data-v-17bff2a4]{margin-right:22rem}header .triangle[data-v-17bff2a4]{border-left:70.7rem solid transparent;border-bottom:15rem solid #f5f9fd}}',""]),e.exports=r},280:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjciIGZpbGw9IiNEN0JBQUQiLz4KPHBhdGggZD0iTTM2LjkxNjcgMTkuMDgwNUwzNC45MTkyIDE3LjA4M0wyNyAyNS4wMDIyTDE5LjA4MDkgMTcuMDgzTDE3LjA4MzQgMTkuMDgwNUwyNS4wMDI1IDI2Ljk5OTdMMTcuMDgzNCAzNC45MTg4TDE5LjA4MDkgMzYuOTE2M0wyNyAyOC45OTcyTDM0LjkxOTIgMzYuOTE2M0wzNi45MTY3IDM0LjkxODhMMjguOTk3NSAyNi45OTk3TDM2LjkxNjcgMTkuMDgwNVoiIGZpbGw9IiNGNUY3RjkiLz4KPC9zdmc+Cg=="}}]);