!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=77)}({21:function(e,t,n){var r=n(78),o=n(79),i=n(80),a=n(81);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},238:function(e,t,n){"use strict";n.r(t);var r=n(72),o=n.n(r),i=n(73),a=n.n(i);function s(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var c=function(e,t){return void 0===t&&(t="js-reframe"),("string"==typeof e?s(document.querySelectorAll(e)):"length"in e?s(e):[e]).forEach((function(e){var n,r;if(!(-1!==e.className.split(" ").indexOf(t)||e.style.width.indexOf("%")>-1)){var o=e.getAttribute("height")||e.offsetHeight,i=e.getAttribute("width")||e.offsetWidth,a=("string"==typeof o?parseInt(o):o)/("string"==typeof i?parseInt(i):i)*100,s=document.createElement("div");s.className=t;var c=s.style;c.position="relative",c.width="100%",c.paddingTop=a+"%";var l=e.style;l.position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null===(n=e.parentNode)||void 0===n||n.insertBefore(s,e),null===(r=e.parentNode)||void 0===r||r.removeChild(e),s.appendChild(e)}}))};function l(e){return void 0===window.air_light_screenReaderText||void 0===window.air_light_screenReaderText[e]?(console.error("Missing translation for ".concat(e)),""):window.air_light_screenReaderText[e]}var u=n(21),d=n.n(u);var f,g,p,h=n(74),v=n.n(h),m=function(e){var t=e.querySelector("img");t&&"object"===v()(t)&&"clientWidth"in t&&e.style.setProperty("--child-img-width","".concat(t.clientWidth,"px"))};n(82);!function(e){var t,n,r,o,i,a,s,c,l,u,f,g,p=960,h=!1;e(window).on("keydown",(function(e){"Enter"===e.code&&(h=!0)})).on("keyup",(function(e){"Enter"===e.code&&(h=!1)})),e(".menu-item-has-children").on("hover",(function(){var t=this;e(this).addClass("hover-intent"),setTimeout((function(){e(t).removeClass("hover-intent")}),100)}));var v=e(".nav-container"),m=v.find("#nav-toggle"),w=v.find("#main-navigation-wrapper"),b=v.find("#nav");if(e(".menu-item a, .dropdown button").on("keyup",(function(t){if(0!==e(".dropdown").find(":focus").length&&"Escape"===t.code){var n=e(this).parent().parent().parent(),r=n.find(".screen-reader-text"),o=n.find(".dropdown-toggle");n.find(".sub-menu").removeClass("toggled-on"),n.find(".dropdown-toggle").removeClass("toggled-on"),n.find(".dropdown").removeClass("toggled-on"),o.attr("aria-expanded","false"),r.text(air_light_screenReaderText.expand),n.find(".dropdown-toggle:first").trigger("focus")}if(window.innerWidth>p){var i=e(this).parent().prev(),a=i.find(".screen-reader-text"),s=i.find(".dropdown-toggle");i.find(".sub-menu").removeClass("toggled-on"),i.find(".dropdown-toggle").removeClass("toggled-on"),i.find(".dropdown").removeClass("toggled-on"),s.attr("aria-expanded","false"),a.text(air_light_screenReaderText.expand);var c=e(this).parent().next(),l=c.find(".screen-reader-text"),u=c.find(".dropdown-toggle");c.find(".sub-menu").removeClass("toggled-on"),c.find(".dropdown-toggle").removeClass("toggled-on"),c.find(".dropdown").removeClass("toggled-on"),u.attr("aria-expanded","false"),l.text(air_light_screenReaderText.expand)}})),w.find(".menu-item-has-children").attr("aria-haspopup","true"),e(".dropdown-toggle").each((function(){e(this).attr("aria-label","".concat(air_light_screenReaderText.expand_for," ").concat(e(this).prev().text()))})),w.find(".dropdown-toggle").on("click",(function(t){if(h||window.innerWidth<p){var n=e(this).nextAll(".sub-menu");t.preventDefault(),e(this).toggleClass("toggled-on"),n.toggleClass("toggled-on"),e(this).attr("aria-expanded","false"===e(this).attr("aria-expanded")?"true":"false"),e(this).attr("aria-label",e(this).attr("aria-label")==="".concat(air_light_screenReaderText.collapse_for," ").concat(e(this).prev().text())?"".concat(air_light_screenReaderText.expand_for," ").concat(e(this).prev().text()):"".concat(air_light_screenReaderText.collapse_for," ").concat(e(this).prev().text()))}})),e(".sub-menu .menu-item-has-children").parent(".sub-menu").addClass("has-sub-menu"),e(".menu-item a, button.dropdown-toggle").on("keydown",(function(t){if(-1!=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(t.code))switch(t.code){case"ArrowLeft":t.preventDefault(),t.stopPropagation(),e(this).hasClass("dropdown-toggle")?e(this).prev("a").trigger("focus"):e(this).parent().prev().children("button.dropdown-toggle").length?e(this).parent().prev().children("button.dropdown-toggle").trigger("focus"):e(this).parent().prev().children("a").trigger("focus"),e(this).is("ul ul ul.sub-menu.toggled-on li:first-child a")&&e(this).parents("ul.sub-menu.toggled-on li").children("button.dropdown-toggle").trigger("focus");break;case"ArrowRight":t.preventDefault(),t.stopPropagation(),e(this).next("button.dropdown-toggle").length?e(this).next("button.dropdown-toggle").trigger("focus"):e(this).parent().next().find("input").length?e(this).parent().next().find("input").trigger("focus"):e(this).parent().next().children("a").trigger("focus"),e(this).is("ul.sub-menu .dropdown-toggle.toggled-on")&&e(this).parent().find("ul.sub-menu li:first-child a").trigger("focus");break;case"ArrowDown":t.preventDefault(),t.stopPropagation(),e(this).next().length?e(this).next().find("li:first-child a").first().trigger("focus"):e(this).parent().next().find("input").length?e(this).parent().next().find("input").trigger("focus"):e(this).parent().next().children("a").trigger("focus"),e(this).is("ul.sub-menu a")&&e(this).next("button.dropdown-toggle").length&&e(this).parent().next().children("a").trigger("focus"),e(this).is("ul.sub-menu .dropdown-toggle")&&e(this).parent().next().children(".dropdown-toggle").length&&e(this).parent().next().children(".dropdown-toggle").trigger("focus");break;case"ArrowUp":t.preventDefault(),t.stopPropagation(),e(this).parent().prev().length?e(this).parent().prev().children("a").trigger("focus"):e(this).parents("ul").first().prev(".dropdown-toggle.toggled-on").trigger("focus"),e(this).is("ul.sub-menu .dropdown-toggle")&&e(this).parent().prev().children(".dropdown-toggle").length&&e(this).parent().prev().children(".dropdown-toggle").trigger("focus")}})),(r=document.getElementById("nav"))&&void 0!==(o=document.getElementById("nav-toggle"))){for(t=document.getElementsByTagName("html")[0],n=document.getElementsByTagName("body")[0],i=r.getElementsByTagName("ul")[0],a=document.getElementById("main-navigation-wrapper"),window.innerWidth<p&&y(),s=i.getElementsByTagName("a"),i.getElementsByTagName("ul"),c=0,l=s.length;c<l;c++)s[c].addEventListener("focus",x,!0),s[c].addEventListener("blur",x,!0);e(window).on("resize",(function(){window.innerWidth>p&&-1!==n.className.indexOf("js-nav-active")?_():window.innerWidth<p&&void 0===window.mobileNavInstance&&y()}))}function y(){if(m.length)if(window.innerWidth<p&&m.add(b).attr("aria-expanded","false"),m.on("click",(function(){e(this).add(w).toggleClass("toggled-on"),e(this).attr("aria-expanded","false"===e(this).attr("aria-expanded")?"true":"false"),e("#nav-toggle-label").text(e("#nav-toggle-label").text()===air_light_screenReaderText.expand_toggle?air_light_screenReaderText.collapse_toggle:air_light_screenReaderText.expand_toggle),e(this).attr("aria-label",e(this).attr("aria-label")===air_light_screenReaderText.expand_toggle?air_light_screenReaderText.collapse_toggle:air_light_screenReaderText.expand_toggle),e(this).add(b).attr("aria-expanded","false"===e(this).add(b).attr("aria-expanded")?"true":"false")})),void 0!==i){if(window.innerWidth<p&&i.setAttribute("aria-expanded","false"),-1===i.className.indexOf("nav-menu")&&(i.className+=" nav-menu"),window.innerWidth<p){f=null,g=null;for(var s=r.querySelectorAll([".nav-primary a[href]",".nav-primary button"]),c=0;c<s.length;c++)s[c].addEventListener("keydown",E)}o.onclick=function(){-1!==r.className.indexOf("is-active")?_():(t.className+=" disable-scroll",n.className+=" js-nav-active",r.className+=" is-active",o.className+=" is-active",o.setAttribute("aria-expanded","true"),i.setAttribute("aria-expanded","true"),o.addEventListener("keydown",E,!1))},document.addEventListener("keyup",(function(e){"Escape"!=e.code&&"Esc"!=e.code||-1!==r.className.indexOf("is-active")&&_()})),a.onclick=function(e){e.target==a&&-1!==r.className.indexOf("is-active")&&_()}}else o.style.display="none"}function _(){o.removeEventListener("keydown",E,!1),t.className=t.className.replace(" disable-scroll",""),n.className=n.className.replace(" js-nav-active",""),r.className=r.className.replace(" is-active",""),o.className=o.className.replace(" is-active",""),o.setAttribute("aria-expanded","false"),i.setAttribute("aria-expanded","false"),e("#nav-toggle-label").text(air_light_screenReaderText.expand_toggle),o.focus()}function x(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function E(e){u=d()(r.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")})).filter((function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})),f=u[0],(g=u[u.length-1])!==e.target||"Tab"!==e.code||e.shiftKey||(e.preventDefault(),o.focus()),f===e.target&&"Tab"===e.code&&e.shiftKey&&(e.preventDefault(),o.focus()),o===e.target&&"Tab"===e.code&&e.shiftKey&&(e.preventDefault(),g.focus())}}(jQuery),document.body.classList.remove("no-js"),document.body.classList.add("js"),c(".wp-has-aspect-ratio iframe"),function(){var e=[window.location.host];void 0!==window.air_light_externalLinkDomains&&(e=e.concat(window.air_light_externalLinkDomains));var t=document.querySelectorAll("a");d()(t).filter((function(t){return function(e,t){if(!e.length)return!1;var n;if(["#","tel:","mailto:","/"].some((function(t){return new RegExp("^".concat(t),"g").test(e)})))return!1;try{n=new URL(e)}catch(t){return console.log("Invalid URL: ".concat(e)),!1}return!t.some((function(e){return n.host===e}))}(t.href,e)})).forEach((function(e){var t="_blank"===e.target?"".concat(l("external_link")," ").concat(e.textContent,", ").concat(l("target_blank")):"".concat(l("external_link")," ").concat(e.textContent);e.setAttribute("aria-label",t),e.classList.add("is-external-link")}))}(),new a.a({callback_loaded:function(e){"figure"===e.parentElement.tagName&&m(e.parentElement)}}).update(),f=jQuery,g=f(".back-to-top").offset(),p=f(".block, .site-footer"),f(document).scroll((function(){p.each((function(e){var t=f(this).offset().top-f(window).scrollTop();if(t<g.top&&t+f(this).height()>0)return f(".back-to-top").removeClass("has-light-bg has-dark-bg").addClass(f(this).hasClass("has-light-bg")?"has-light-bg":"has-dark-bg"),!1}))})),f.fn.isInViewport=function(){var e=f(this).offset().top,t=e+f(this).outerHeight(),n=f(window).scrollTop(),r=n+f(window).height();return t>n&&e<r},f(window).on("resize scroll",(function(){f(".block, .site-footer").each((function(){f(this).isInViewport()&&f(".back-to-top").removeClass("has-light-bg has-dark-bg").addClass(f(this).hasClass("has-light-bg")?"has-light-bg":"has-dark-bg")}))})),f(window).scroll((function(){var e=".back-to-top";f(this).scrollTop()>300?f(e).addClass("is-visible"):f(e).removeClass("is-visible"),f(this).scrollTop()>1200?f(e).addClass("fade-out"):f(e).removeClass("fade-out")})),f((function(){})),document.addEventListener("DOMContentLoaded",(function(){for(var e=new o.a({ease:"easeInQuad"},{easeInQuad:function(e,t,n,r){return n*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){return-n*(e/=r)*(e-2)+t}}),t=document.getElementsByClassName("js-trigger"),n=0;n<t.length;n++)e.registerTrigger(t[n])}))},38:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},72:function(e,t,n){"use strict";var r=function(){var e={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}};function t(e,t,n,r){return e/=r,-n*(--e*e*e*e-1)+t}function n(e,t){var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function r(e){return e instanceof HTMLElement?e.scrollTop:e.pageYOffset}function o(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(e,r),this.easeFunctions=n({easeOutQuart:t},o)}return o.prototype.registerTrigger=function(e,t){var r=this;if(e){var o=e.getAttribute("href")||e.getAttribute("data-target"),i=o&&"#"!==o?document.getElementById(o.substring(1)):document.body,a=n(this.options,function(e,t){var n={};return Object.keys(t).forEach((function(t){var r=e.getAttribute("data-mt-".concat(t.replace(/([A-Z])/g,(function(e){return"-"+e.toLowerCase()}))));r&&(n[t]=isNaN(r)?r:parseInt(r,10))})),n}(e,this.options));"function"==typeof t&&(a.callback=t);var s=function(e){e.preventDefault(),r.move(i,a)};return e.addEventListener("click",s,!1),function(){return e.removeEventListener("click",s,!1)}}},o.prototype.move=function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===e||e){o=n(this.options,o);var i,a="number"==typeof e?e:e.getBoundingClientRect().top,s=r(o.container),c=null;a-=o.tolerance;var l=function n(l){var u=r(t.options.container);c||(c=l-1);var d=l-c;if(i&&(a>0&&i>u||a<0&&i<u))return o.callback(e);i=u;var f=t.easeFunctions[o.easing](d,s,a,o.duration);o.container.scroll(0,f),d<o.duration?window.requestAnimationFrame(n):(o.container.scroll(0,a+s),o.callback(e))};window.requestAnimationFrame(l)}},o.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},o}();e.exports=r},73:function(e,t,n){e.exports=function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var t="undefined"!=typeof window,n=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),r=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),i=t&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:n||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},s=function(t){return e({},a,t)},c=function(e,t){var n,r="LazyLoad::Initialized",o=new e(t);try{n=new CustomEvent(r,{detail:{instance:o}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,{instance:o})}window.dispatchEvent(n)},l="loading",u="loaded",d="applied",f="error",g="native",p="data-",h="ll-status",v=function(e,t){return e.getAttribute(p+t)},m=function(e){return v(e,h)},w=function(e,t){return function(e,t,n){var r="data-ll-status";null!==n?e.setAttribute(r,n):e.removeAttribute(r)}(e,0,t)},b=function(e){return w(e,null)},y=function(e){return null===m(e)},_=function(e){return m(e)===g},x=[l,u,d,f],E=function(e,t,n,r){e&&(void 0===r?void 0===n?e(t):e(t,n):e(t,n,r))},k=function(e,t){o?e.classList.add(t):e.className+=(e.className?" ":"")+t},A=function(e,t){o?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},L=function(e){return e.llTempImage},C=function(e,t){if(t){var n=t._observer;n&&n.unobserve(e)}},O=function(e,t){e&&(e.loadingCount+=t)},N=function(e,t){e&&(e.toLoadCount=t)},T=function(e){for(var t,n=[],r=0;t=e.children[r];r+=1)"SOURCE"===t.tagName&&n.push(t);return n},I=function(e,t,n){n&&e.setAttribute(t,n)},S=function(e,t){e.removeAttribute(t)},R=function(e){return!!e.llOriginalAttrs},M=function(e){if(!R(e)){var t={};t.src=e.getAttribute("src"),t.srcset=e.getAttribute("srcset"),t.sizes=e.getAttribute("sizes"),e.llOriginalAttrs=t}},j=function(e){if(R(e)){var t=e.llOriginalAttrs;I(e,"src",t.src),I(e,"srcset",t.srcset),I(e,"sizes",t.sizes)}},D=function(e,t){I(e,"sizes",v(e,t.data_sizes)),I(e,"srcset",v(e,t.data_srcset)),I(e,"src",v(e,t.data_src))},P=function(e){S(e,"src"),S(e,"srcset"),S(e,"sizes")},z=function(e,t){var n=e.parentNode;n&&"PICTURE"===n.tagName&&T(n).forEach(t)},B={IMG:function(e,t){z(e,(function(e){M(e),D(e,t)})),M(e),D(e,t)},IFRAME:function(e,t){I(e,"src",v(e,t.data_src))},VIDEO:function(e,t){!function(e,n){T(e).forEach((function(e){I(e,"src",v(e,t.data_src))}))}(e),I(e,"poster",v(e,t.data_poster)),I(e,"src",v(e,t.data_src)),e.load()}},W=function(e,t){var n=B[e.tagName];n&&n(e,t)},F=function(e,t,n){O(n,1),k(e,t.class_loading),w(e,l),E(t.callback_loading,e,n)},q=["IMG","IFRAME","VIDEO"],K=function(e,t){!t||function(e){return e.loadingCount>0}(t)||function(e){return e.toLoadCount>0}(t)||E(e.callback_finish,t)},Q=function(e,t,n){e.addEventListener(t,n),e.llEvLisnrs[t]=n},U=function(e,t,n){e.removeEventListener(t,n)},G=function(e){return!!e.llEvLisnrs},H=function(e){if(G(e)){var t=e.llEvLisnrs;for(var n in t){var r=t[n];U(e,n,r)}delete e.llEvLisnrs}},V=function(e,t,n){!function(e){delete e.llTempImage}(e),O(n,-1),function(e){e&&(e.toLoadCount-=1)}(n),A(e,t.class_loading),t.unobserve_completed&&C(e,n)},Y=function(e,t,n){var r=L(e)||e;G(r)||function(e,t,n){G(e)||(e.llEvLisnrs={});var r="VIDEO"===e.tagName?"loadeddata":"load";Q(e,r,t),Q(e,"error",n)}(r,(function(o){!function(e,t,n,r){var o=_(t);V(t,n,r),k(t,n.class_loaded),w(t,u),E(n.callback_loaded,t,r),o||K(n,r)}(0,e,t,n),H(r)}),(function(o){!function(e,t,n,r){var o=_(t);V(t,n,r),k(t,n.class_error),w(t,f),E(n.callback_error,t,r),o||K(n,r)}(0,e,t,n),H(r)}))},$=function(e,t,n){!function(e){e.llTempImage=document.createElement("IMG")}(e),Y(e,t,n),function(e,t,n){var r=v(e,t.data_bg),o=v(e,t.data_bg_hidpi),a=i&&o?o:r;a&&(e.style.backgroundImage='url("'.concat(a,'")'),L(e).setAttribute("src",a),F(e,t,n))}(e,t,n),function(e,t,n){var r=v(e,t.data_bg_multi),o=v(e,t.data_bg_multi_hidpi),a=i&&o?o:r;a&&(e.style.backgroundImage=a,function(e,t,n){k(e,t.class_applied),w(e,d),t.unobserve_completed&&C(e,t),E(t.callback_applied,e,n)}(e,t,n))}(e,t,n)},X=function(e,t,n){!function(e){return q.indexOf(e.tagName)>-1}(e)?$(e,t,n):function(e,t,n){Y(e,t,n),W(e,t),F(e,t,n)}(e,t,n)},Z=["IMG","IFRAME"],J=function(e){return e.use_native&&"loading"in HTMLImageElement.prototype},ee=function(e,t,n){e.forEach((function(e){return function(e){return e.isIntersecting||e.intersectionRatio>0}(e)?function(e,t,n,r){w(e,"entered"),k(e,n.class_entered),A(e,n.class_exited),function(e,t,n){t.unobserve_entered&&C(e,n)}(e,n,r),E(n.callback_enter,e,t,r),function(e){return x.indexOf(m(e))>=0}(e)||X(e,n,r)}(e.target,e,t,n):function(e,t,n,r){y(e)||(k(e,n.class_exited),function(e,t,n,r){n.cancel_on_exit&&function(e){return m(e)===l}(e)&&"IMG"===e.tagName&&(H(e),function(e){z(e,(function(e){P(e)})),P(e)}(e),function(e){z(e,(function(e){j(e)})),j(e)}(e),A(e,n.class_loading),O(r,-1),b(e),E(n.callback_cancel,e,t,r))}(e,t,n,r),E(n.callback_exit,e,t,r))}(e.target,e,t,n)}))},te=function(e){return Array.prototype.slice.call(e)},ne=function(e){return e.container.querySelectorAll(e.elements_selector)},re=function(e){return function(e){return m(e)===f}(e)},oe=function(e,t){return function(e){return te(e).filter(y)}(e||ne(t))},ie=function(e,n){var o=s(e);this._settings=o,this.loadingCount=0,function(e,t){r&&!J(e)&&(t._observer=new IntersectionObserver((function(n){ee(n,e,t)}),function(e){return{root:e.container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}}(e)))}(o,this),function(e,n){t&&window.addEventListener("online",(function(){!function(e,t){var n;(n=ne(e),te(n).filter(re)).forEach((function(t){A(t,e.class_error),b(t)})),t.update()}(e,n)}))}(o,this),this.update(n)};return ie.prototype={update:function(e){var t,o,i=this._settings,a=oe(e,i);N(this,a.length),!n&&r?J(i)?function(e,t,n){e.forEach((function(e){-1!==Z.indexOf(e.tagName)&&(e.setAttribute("loading","lazy"),function(e,t,n){Y(e,t,n),W(e,t),w(e,g)}(e,t,n))})),N(n,0)}(a,i,this):(o=a,function(e){e.disconnect()}(t=this._observer),function(e,t){t.forEach((function(t){e.observe(t)}))}(t,o)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),ne(this._settings).forEach((function(e){delete e.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){var t=this,n=this._settings;oe(e,n).forEach((function(e){C(e,t),X(e,n,t)}))}},ie.load=function(e,t){var n=s(t);X(e,n)},ie.resetStatus=function(e){b(e)},t&&function(e,t){if(t)if(t.length)for(var n,r=0;n=t[r];r+=1)c(e,n);else c(e,t)}(ie,window.lazyLoadOptions),ie}()},74:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},77:function(e,t,n){e.exports=n(238)},78:function(e,t,n){var r=n(38);e.exports=function(e){if(Array.isArray(e))return r(e)}},79:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},80:function(e,t,n){var r=n(38);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},81:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},82:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",r=n,o=Date.now(),i="false",a=["button","input","select","textarea"],s=[],c=[16,17,18,91,93],l=[],u={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},d=!1,f={x:null,y:null},g={2:"touch",3:"touch",4:"mouse"},p=!1;try{var h=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,h)}catch(e){}var v=function(){var e=!!p&&{passive:!0};document.addEventListener("DOMContentLoaded",m),window.PointerEvent?(window.addEventListener("pointerdown",w),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",w),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",w),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",w,e),window.addEventListener("touchend",w))),window.addEventListener(L(),y,e),window.addEventListener("keydown",w),window.addEventListener("keyup",w),window.addEventListener("focusin",_),window.addEventListener("focusout",x)},m=function(){if(i=!(e.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(r=window.sessionStorage.getItem("what-intent"))}catch(e){}b("input"),b("intent")},w=function(e){var t=e.which,o=u[e.type];"pointer"===o&&(o=k(e));var i=!l.length&&-1===c.indexOf(t),s=l.length&&-1!==l.indexOf(t),d="keyboard"===o&&t&&(i||s)||"mouse"===o||"touch"===o;if(A(o)&&(d=!1),d&&n!==o&&(E("input",n=o),b("input")),d&&r!==o){var f=document.activeElement;f&&f.nodeName&&(-1===a.indexOf(f.nodeName.toLowerCase())||"button"===f.nodeName.toLowerCase()&&!N(f,"form"))&&(E("intent",r=o),b("intent"))}},b=function(t){e.setAttribute("data-what"+t,"input"===t?n:r),C(t)},y=function(e){var t=u[e.type];"pointer"===t&&(t=k(e)),O(e),(!d&&!A(t)||d&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&r!==t&&(E("intent",r=t),b("intent"))},_=function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):x()},x=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},E=function(e,t){if(i)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},k=function(e){return"number"==typeof e.pointerType?g[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},A=function(e){var t=Date.now(),r="mouse"===e&&"touch"===n&&t-o<200;return o=t,r},L=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},C=function(e){for(var t=0,o=s.length;t<o;t++)s[t].type===e&&s[t].fn.call(void 0,"input"===e?n:r)},O=function(e){f.x!==e.screenX||f.y!==e.screenY?(d=!1,f.x=e.screenX,f.y=e.screenY):d=!0},N=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(u[L()]="mouse",v()),{ask:function(e){return"intent"===e?r:n},element:function(){return t},ignoreKeys:function(e){c=e},specificKeys:function(e){l=e},registerOnChange:function(e,t){s.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=s.length;t<n;t++)if(s[t].fn===e)return t}(e);(t||0===t)&&s.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}])},e.exports=r()}});