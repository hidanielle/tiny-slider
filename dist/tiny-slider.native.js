/**
  * tiny-slider.native
  * @version 0.3.1
  * @author William Lin
  * @license The MIT License (MIT)
  * @github https://github.com/ganlanyuan/tiny-slider/
  */
var tinySlider=function(){"use strict";function t(t){function d(){S.style.width=Z*N+"px",X&&(S.style.marginLeft=-(_*Z)+"px");for(var t=N;t--;)k[t].style.width=Z+"px"}function l(){for(var t=X?ot+_:ot,e=[],n,a=N;a--;)a>=t&&t+tt>a&&e.push(k[a].offsetHeight);n=Math.max.apply(null,e),r&&(S.style[r]=F/1e3+"s"),S.style.height=n+"px",st=!0,setTimeout(function(){r&&(S.style[r]="0s"),st=!1},F)}function u(t){r&&(S.style[r]=F*t/1e3+"s",st=!0)}function c(){navigator.msMaxTouchPoints&&(S.parentNode.style.msScrollSnapPointsX="snapInterval(0%, "+Z+")")}function f(){for(var t=X?ot+_:ot,e=N;e--;)e===t?k[e].classList.add("current"):k[e].classList.contains("current")&&k[e].classList.remove("current"),e>=t&&t+tt>e?k[e].hasAttribute("aria-hidden")&&"true"!==k[e].getAttribute("aria-hidden")||k[e].setAttribute("aria-hidden","false"):k[e].hasAttribute("aria-hidden")&&"false"!==k[e].getAttribute("aria-hidden")||k[e].setAttribute("aria-hidden","true")}function v(){X||(tt>=D?(0!==ot&&(ot=0,b()),et.disabled=!0,nt.disabled=!0):(0===ot?(et.disabled=!0,E(et,nt)):et.disabled=!1,ot===D-tt?(nt.disabled=!0,E(nt,et)):nt.disabled=!1))}function h(){if(q&&!t.navContainer)for(var e=it;e--;){var n=at[e];rt>e?n.hasAttribute("hidden")&&n.removeAttribute("hidden"):n.hasAttribute("hidden")||n.setAttribute("hidden","")}}function p(){if(q){var e;if(-1===dt){var n=0>ot?ot+D:ot>=D?ot-D:ot;if(e=t.navContainer?n:Math.floor(n/tt),!X&&!t.navContainer){var a=/^-?[0-9]+$/,i=a.test(D/tt);i||ot!==D-tt||(e+=1)}}else e=dt,dt=-1;for(var r=rt;r--;){var o=at[r];r===e?o.classList.contains("current")||(o.classList.add("current"),o.removeAttribute("tabindex"),o.setAttribute("aria-selected","true")):o.classList.contains("current")&&(o.classList.remove("current"),o.setAttribute("tabindex",-1),o.setAttribute("aria-selected","false"))}}}function b(){var t=S.parentNode.offsetWidth;vt=-Z*ot,W&&!X&&(vt=Math.max(vt,-Math.abs(D*Z-t))),o?S.style[o]="translate3d("+vt+"px, 0, 0)":S.style.left=vt+"px"}function m(){if(X){var t=Y?tt-_>ot:-_>=ot,e=Y?ot>D+_-2*tt-1:ot>=D+_-tt;W&&_&&!Y&&(e=ot>=D+_-tt-1),t&&(ot+=D),e&&(ot-=D),r&&(S.style[r]="0s"),b()}}function y(){m(),f(),v(),p(),T(),K&&l(),st=!1}function g(t){if(!st){t=Y?t*tt:t;var e=Math.abs(t);ot=X?ot+t:Math.max(0,Math.min(ot+t,D-tt)),u(e),b(),setTimeout(function(){y()},F*e)}}function A(){return function(){var t=gn.indexOf(at,this);x(t)}}function x(e){if(!st){dt=e;var n,a;n=t.navContainer?e:e*tt,n=X?n:Math.min(n,D-tt),a=Math.abs(n-ot),ot=n,u(a),b(),setTimeout(function(){y()},F*a)}}function E(t,e){"object"==typeof t&&(t.blur(),t.setAttribute("tabindex","-1")),"object"==typeof e&&(e.focus(),e.removeAttribute("tabindex"))}function M(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==s.LEFT&&e!==s.UP&&e!==s.HOME&&e!==s.PAGEUP||"prev"!==n.getAttribute("data-controls")&&1!=et.disabled&&E(n,et),e!==s.RIGHT&&e!==s.DOWN&&e!==s.END&&e!==s.PAGEDOWN||"next"!==n.getAttribute("data-controls")&&1!=nt.disabled&&E(n,nt)}function L(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;e!==s.LEFT&&e!==s.PAGEUP||n.getAttribute("data-slide")>0&&E(n,n.previousElementSibling),e!==s.UP&&e!==s.HOME||0!==n.getAttribute("data-slide")&&E(n,at[0]),e!==s.RIGHT&&e!==s.PAGEDOWN||n.getAttribute("data-slide")<rt-1&&E(n,n.nextElementSibling),e!==s.DOWN&&e!==s.END||n.getAttribute("data-slide")<rt-1&&E(n,at[rt-1])}function T(){if(gn.isInViewport(S)){var t=S.querySelectorAll('[aria-hidden="false"] .tiny-lazy');if(0!==t.length)for(var e=0,n=t.length;n>e;e++)t[e].classList.contains("loaded")||(t[e].src=t[e].getAttribute("data-src"),t[e].classList.add("loaded"))}}function C(){return function(t){var e=t.changedTouches[0];ct=parseInt(e.clientX),ft=parseInt(e.clientY)}}function w(){return function(t){var e=t.changedTouches[0];ht=parseInt(e.clientX)-ct,pt=parseInt(e.clientY)-ft;var i=n(Math.atan2(pt,ht)),s=a(i,15);if("horizontal"===s&&st===!1&&(bt=!0),bt){r&&(S.style[r]="0s");var d=X?-(D+_-tt)*Z:-(D-tt)*Z,l=X?_*Z:0;!X&&W&&(d=-(D*Z-S.parentNode.offsetWidth)),vt=-ot*Z+ht,vt=Math.max(d,Math.min(vt,l)),o?S.style[o]="translate3d("+vt+"px, 0, 0)":S.style.left=vt+"px",t.preventDefault()}}}function P(){return function(t){var e=t.changedTouches[0];if(ht=parseInt(e.clientX)-ct,bt&&0!==ht){t.preventDefault(),bt=!1,vt=-ot*Z+ht;var n,a=X?-_:0,i=X?D+_-tt:D-tt;n=-(vt/Z),n=0>ht?Math.ceil(n):Math.floor(n),n=Math.max(a,Math.min(n,i)),ot=n,u(1),b(),setTimeout(function(){y()},F)}}}t=gn.extend({container:document.querySelector(".slider"),items:1,fixedWidth:!1,maxContainerWidth:!1,slideByPage:!1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0},t||{});var S=t.container,k=S.children,D=k.length,N=k.length,W=t.fixedWidth,I=t.controls,O=t.controlsText,H=t.controlsContainer?t.controlsContainer:!1,q=t.nav,G=t.navContainer?t.navContainer:!1,z=t.arrowKeys,F=r?t.speed:0,j=t.autoplay,U=t.autoplayTimeout,B="forward"===t.autoplayDirection?1:-1,R=t.autoplayText,X=W&&!t.maxContainerWidth?!1:t.loop,K=t.autoHeight,Y=t.slideByPage,V=t.lazyload,J=t.touch,Q,Z,_,tt,et,nt,at,it,rt,ot=0,st=!1,dt=-1;if(j)var lt,ut=!1;if(J)var ct=0,ft=0,vt=0,ht=0,pt=0,bt=!1,mt=!1;var yt=W?!1:t.responsive,gt="object"!=typeof yt?!1:Object.keys(yt),At=i(yt),xt=function(){return W?function(){return Math.max(Math.min(D,Math.floor(S.parentNode.offsetWidth/W)),1)}:function(){var e,n=document.documentElement.clientWidth;if(void 0!==gt.length&&void 0!==At&&gt.length===At.length)if(n<gt[0])e=t.items;else if(n>=gt[gt.length-1])e=At[At.length-1];else for(var a=0;a<gt.length-1;a++)n>=gt[a]&&n<=gt[a+1]&&(e=At[a]);else e=t.items;return Math.max(Math.min(D,e),1)}}(),Et=function(){var e;return e=W?t.maxContainerWidth?Math.ceil(t.maxContainerWidth/W):!1:void 0!==At.length?Math.max.apply(Math,At):t.items,e?Math.min(D,e):e},Mt=function(){return W?function(){return W}:function(){return S.parentNode.offsetWidth/tt}}(),Lt=function(){return t.navContainer?function(){return D}:function(){return Math.ceil(D/tt)}}();return tt=xt(),_=Et(),Z=Mt(),rt=Lt(),{init:function(){S.classList.add("tiny-content"),S.id="slider"+e(),Q=S.id;var t=document.createElement("div");t.className="tiny-slider",gn.wrap(S,t),navigator.msMaxTouchPoints&&(t.classList.add("ms-touch"),t.addEventListener("scroll",function(){r&&(S.style[r]="0s"),S.style.transform="translate3d(-"+-S.scrollLeft()+"px,0,0)"}));for(var n=0;D>n;n++)k[n].id=Q+"item"+n;if(X){for(var a=document.createDocumentFragment(),i=document.createDocumentFragment(),o=_;o--;){var u=k[o].cloneNode(!0),m=k[D-1-o].cloneNode(!0);u.id="",m.id="",a.insertBefore(u,a.firstChild),i.appendChild(m)}S.appendChild(a),S.insertBefore(i,S.firstChild),N=S.children.length,k=S.children}if(q){if(!G){for(var y="",x=0;D>x;x++)y+='<button data-slide="'+x+'" tabindex="-1" aria-selected="false" aria-controls="'+Q+"item"+x+'" type="button"></button>';j&&(y+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+R[0]+"</button>"),y='<div class="tiny-nav" aria-label="Carousel Pagination">'+y+"</div>",gn.append(t,y),G=t.querySelector(".tiny-nav")}if(at=G.querySelectorAll("[data-slide]"),it=at.length,!G.hasAttribute("aria-label")){G.setAttribute("aria-label","Carousel Pagination");for(var E=0;it>E;E++){var W=at[E];W.setAttribute("aria-selected","false"),W.setAttribute("aria-controls",Q+"item"+E)}}}if(I&&(H||(gn.append(t,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+Q+'" type="button">'+O[0]+'</button><button data-controls="next" aria-controls="'+Q+'" type="button">'+O[1]+"</button></div>"),H=t.querySelector(".tiny-controls")),et=H.querySelector('[data-controls="prev"]'),nt=H.querySelector('[data-controls="next"]'),H.hasAttribute("tabindex")||(H.setAttribute("aria-label","Carousel Navigation"),et.setAttribute("aria-controls",Q),nt.setAttribute("aria-controls",Q),et.setAttribute("tabindex",-1))),j&&(G||(gn.append(t,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+R[0]+"</button></div>"),G=t.querySelector(".tiny-nav")),lt=G.querySelector("[data-action]")),d(),K&&l(),c(),b(),f(),I&&(v(),et.addEventListener("click",function(){g(-1)}),nt.addEventListener("click",function(){g(1)}),et.addEventListener("keydown",M,!1),nt.addEventListener("keydown",M,!1)),h(),p(),q)for(var F=0;it>F;F++)at[F].addEventListener("click",A(),!1),at[F].addEventListener("keydown",L,!1);if(V&&T(),z&&document.addEventListener("keydown",function(t){t=t||window.event,t.keyCode===s.LEFT?g(-1):t.keyCode===s.RIGHT&&g(1)}),j){var Y,ot=function(){Y=setInterval(function(){g(B)},U),lt.setAttribute("data-action","stop"),lt.innerHTML="<span hidden>Stop Animation</span>"+R[1],ut=!0};ot();var st=function(){clearInterval(Y),lt.setAttribute("data-action","start"),lt.innerHTML="<span hidden>Stop Animation</span>"+R[0],ut=!1},dt=function(){ut?st():ot()},ct=function(){ut&&st()};if(lt.addEventListener("click",dt,!1),I&&(et.addEventListener("click",ct,!1),nt.addEventListener("click",ct,!1)),q)for(var ft=0;it>ft;ft++)at[ft].addEventListener("click",ct,!1)}J&&!mt&&S.addEventListener&&(S.addEventListener("touchstart",C(),!1),S.addEventListener("touchmove",w(),!1),S.addEventListener("touchend",P(),!1),S.addEventListener("touchcancel",P(),!1),mt=!0);var vt;window.addEventListener("resize",function(){clearTimeout(vt),vt=setTimeout(function(){tt=xt(),Z=Mt(),rt=Lt(),d(),c(),b(),h(),v(),p(),K&&l(),V&&T()},100)});var ht=!1;window.addEventListener("scroll",function(){ht||window.requestAnimationFrame(function(){V&&T(),ht=!1}),ht=!0})}}}function e(){return 1e3*Math.random().toPrecision(3)}function n(t){return t*(180/Math.PI)}function a(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e?"vertical":!1}function i(t){if("object"==typeof t){for(var e=[],n=Object.keys(t),a=0,i=n.length;i>a;a++){var r=n[a];e.push(t[r])}return e}return!1}var r=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),o=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),s={PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=./tiny-slider.native.js.map