function e(e){return e&&e.__esModule?e.default:e}var t,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof o&&o&&o.Object===Object&&o,c="object"==typeof self&&self&&self.Object===Object&&self,f=u||c||Function("return this")(),s=Object.prototype.toString,g=Math.max,d=Math.min,m=function(){return f.Date.now()};function v(e,t,o){var n,r,a,i,l,u,c=0,f=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var o=n,a=r;return n=r=void 0,c=t,i=e.apply(a,o)}function S(e){return c=e,l=setTimeout(h,t),f?y(e):i}function O(e){var o=e-u;return void 0===u||o>=t||o<0||s&&e-c>=a}function h(){var e=m();if(O(e))return j(e);l=setTimeout(h,function(e){var o=t-(e-u);return s?d(o,a-(e-c)):o}(e))}function j(e){return l=void 0,v&&n?y(e):(n=r=void 0,i)}function k(){var e=m(),o=O(e);if(n=arguments,r=this,u=e,o){if(void 0===l)return S(u);if(s)return l=setTimeout(h,t),y(u)}return void 0===l&&(l=setTimeout(h,t)),i}return t=b(t)||0,p(o)&&(f=!!o.leading,a=(s="maxWait"in o)?g(b(o.maxWait)||0,t):a,v="trailing"in o?!!o.trailing:v),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=u=r=l=void 0},k.flush=function(){return void 0===l?i:j(m())},k}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var o=a.test(e);return o||i.test(e)?l(e.slice(2),o?2:8):r.test(e)?NaN:+e}t=function(e,t,o){var n=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),v(e,t,{leading:n,maxWait:t,trailing:r})};let y={email:"",message:""};const S=document.querySelector(".feedback-form"),O=document.querySelector('input[name="email"]'),h=document.querySelector('textarea[name="message"]');console.log("feedbackForm",S),console.log("userEmail",O),console.log("userEmail",h);const j=(e=>{try{const e=localStorage.getItem("feedback-form-state");return null===e?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}})();j&&(O.value=j.email),j&&(h.value=j.message);O.addEventListener("input",e(t)((e=>{console.log("e",e.target.value),console.log("feedbackData",y);const t=localStorage.getItem("feedback-form-state"),o=null===t?void 0:JSON.parse(t);y.message=o?o.message:"",y.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),h.addEventListener("input",e(t)((e=>{console.log("e",e.target.value),console.log("feedbackData",y);const t=localStorage.getItem("feedback-form-state"),o=null===t?void 0:JSON.parse(t);y.email=o?o.email:"",y.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),S.addEventListener("submit",(e=>{e.preventDefault(),console.log("e",e);const t=localStorage.getItem("feedback-form-state"),o=null===t?void 0:JSON.parse(t);o?console.log("parseData",o):alert("Please write your message"),e.currentTarget.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.5e299241.js.map
