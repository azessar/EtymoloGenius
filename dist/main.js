<<<<<<< HEAD
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r,o={key1:"hi",key2:{key3:"Hello"}},d=(null==o||null===(r=o.key2)||void 0===r?void 0:r.key3)||o.key1;window.addEventListener("DOMContentLoaded",(function(){document.body.classList.add("center");var e=document.createElement("div");e.classList.add("card","center"),e.innerHTML="<h2>".concat(d," World!</h2>"),document.body.append(e);var t=document.createElement("div");t.classList.add("card","center","image-card"),document.body.appendChild(t)}))},function(e,t,n){}]);
=======
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.coords=[10,10,150,100],this.animationDir=1,this.fillColor="green",this.canvas=document.createElement("canvas"),this.canvas.width=.75*window.innerWidth,this.canvas.height=this.canvas.width/2,this.ctx=this.canvas.getContext("2d")}var t,n,i;return t=e,(n=[{key:"createCanvas",value:function(){document.body.append(this.canvas)}},{key:"drawSquare",value:function(){var e;this.ctx.fillStyle=this.fillColor,(e=this.ctx).fillRect.apply(e,r(this.coords))}},{key:"updateSquare",value:function(){var e=this;this.coords=this.coords.map((function(t){return t+1*e.animationDir}))}},{key:"clearSquare",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"reverseAnimation",value:function(){this.animationDir*=-1}},{key:"setColor",value:function(e){this.fillColor=e,document.body.style.backgroundColor=e,document.body.style.filter="brightness(150%)"}}])&&o(t.prototype,n),i&&o(t,i),e}();window.addEventListener("DOMContentLoaded",(function(){var e=new i;e.createCanvas();var t=!0;window.requestAnimationFrame((function n(){e.clearSquare(),t&&e.updateSquare(),e.drawSquare(),window.requestAnimationFrame(n),e.coords[0]+e.coords[2]>e.canvas.width&&e.reverseAnimation(),e.coords[0]<0&&e.reverseAnimation()})),window.addEventListener("keydown",(function(t){32===t.which&&(t.preventDefault(),e.reverseAnimation(),e.setColor("#".concat(Math.floor(16777215*Math.random()).toString(16))))})),window.addEventListener("mousedown",(function(e){e.preventDefault(),console.log("click"),t=!t}))}))}]);
>>>>>>> master
//# sourceMappingURL=main.js.map