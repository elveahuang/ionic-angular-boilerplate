import{b as _,d as N,f as O}from"./chunk-YAJ7QBF4.js";import"./chunk-3ZVBP5XT.js";import{a as R,e as D,f as T,h as p}from"./chunk-EGUE5Q5J.js";import{b as k,c as F}from"./chunk-ZOKHS4QC.js";import{a as S,b as g}from"./chunk-VL4FVGMI.js";import"./chunk-Z2YQ4JHV.js";var I=new WeakMap,C=(e,o,t,s=0,i=!1)=>{I.has(e)!==t&&(t?G(e,o,s,i):W(e,o))},q=e=>e===e.getRootNode().activeElement,G=(e,o,t,s=!1)=>{let i=o.parentNode,r=o.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,s&&(r.disabled=!0),i.appendChild(r),I.set(e,r);let a=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",o.style.transform=`translate3d(${a}px,${t}px,0) scale(0)`},W=(e,o)=>{let t=I.get(e);t&&(I.delete(e),t.remove()),e.style.pointerEvents="",o.style.transform=""},$=50,z=(e,o,t)=>{if(!t||!o)return()=>{};let s=a=>{q(o)&&C(e,o,a)},i=()=>C(e,o,!1),r=()=>s(!0),c=()=>s(!1);return D(t,"ionScrollStart",r),D(t,"ionScrollEnd",c),o.addEventListener("blur",i),()=>{T(t,"ionScrollStart",r),T(t,"ionScrollEnd",c),o.removeEventListener("blur",i)}},P="input, textarea, [no-blur], [contenteditable]",j=()=>{let e=!0,o=!1,t=document,s=()=>{o=!0},i=()=>{e=!0},r=c=>{if(o){o=!1;return}let a=t.activeElement;if(!a||a.matches(P))return;let f=c.target;f!==a&&(f.matches(P)||f.closest(P)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};return D(t,"ionScrollStart",s),t.addEventListener("focusin",i,!0),t.addEventListener("touchend",r,!1),()=>{T(t,"ionScrollStart",s,!0),t.removeEventListener("focusin",i,!0),t.removeEventListener("touchend",r,!1)}},J=.3,Q=(e,o,t,s)=>{var i;let r=(i=e.closest("ion-item,[ion-item]"))!==null&&i!==void 0?i:e;return V(r.getBoundingClientRect(),o.getBoundingClientRect(),t,s)},V=(e,o,t,s)=>{let i=e.top,r=e.bottom,c=o.top,a=Math.min(o.bottom,s-t),f=c+15,l=a-$-r,d=f-i,m=Math.round(l<0?-l:d>0?-d:0),v=Math.min(m,i-c),n=Math.abs(v)/J,y=Math.min(400,Math.max(150,n));return{scrollAmount:v,scrollDuration:y,scrollPadding:t,inputSafeY:-(i-f)+4}},H="$ionPaddingTimer",M=(e,o,t)=>{let s=e[H];s&&clearTimeout(s),o>0?e.style.setProperty("--keyboard-offset",`${o}px`):e[H]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},U=(e,o,t)=>{let s=()=>{o&&M(o,0,t)};e.addEventListener("focusout",s,{once:!0})},A=0,K="data-ionic-skip-scroll-assist",X=(e,o,t,s,i,r,c,a=!1)=>{let f=r&&(c===void 0||c.mode===k.None),u=!1,l=S!==void 0?S.innerHeight:0,d=h=>{if(u===!1){u=!0;return}Y(e,o,t,s,h.detail.keyboardHeight,f,a,l,!1)},m=()=>{u=!1,S===null||S===void 0||S.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",m)},v=async()=>{if(o.hasAttribute(K)){o.removeAttribute(K);return}Y(e,o,t,s,i,f,a,l),S===null||S===void 0||S.addEventListener("ionKeyboardDidShow",d),e.addEventListener("focusout",m)};return e.addEventListener("focusin",v),()=>{e.removeEventListener("focusin",v),S===null||S===void 0||S.removeEventListener("ionKeyboardDidShow",d),e.removeEventListener("focusout",m)}},B=e=>{document.activeElement!==e&&(e.setAttribute(K,"true"),e.focus())},Y=async(e,o,t,s,i,r,c=!1,a=0,f=!0)=>{if(!t&&!s)return;let u=Q(e,t||s,i,a);if(t&&Math.abs(u.scrollAmount)<4){B(o),r&&t!==null&&(M(t,A),U(o,t,()=>A=0));return}if(C(e,o,!0,u.inputSafeY,c),B(o),p(()=>e.click()),r&&t&&(A=u.scrollPadding,M(t,A)),typeof window<"u"){let l,d=async()=>{l!==void 0&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",m),window.removeEventListener("ionKeyboardDidShow",d),t&&await O(t,0,u.scrollAmount,u.scrollDuration),C(e,o,!1,u.inputSafeY),B(o),r&&U(o,t,()=>A=0)},m=()=>{window.removeEventListener("ionKeyboardDidShow",m),window.addEventListener("ionKeyboardDidShow",d)};if(t){let v=await _(t),h=v.scrollHeight-v.clientHeight;if(f&&u.scrollAmount>h-v.scrollTop){o.type==="password"?(u.scrollAmount+=$,window.addEventListener("ionKeyboardDidShow",m)):window.addEventListener("ionKeyboardDidShow",d),l=setTimeout(d,1e3);return}}d()}},Z=!0,re=async(e,o)=>{if(g===void 0)return;let t=o==="ios",s=o==="android",i=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",t),a=e.getBoolean("inputBlurring",!1),f=e.getBoolean("scrollPadding",!0),u=Array.from(g.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,d=new WeakMap,m=await F.getResizeMode(),v=async n=>{await new Promise(b=>R(n,b));let y=n.shadowRoot||n,w=y.querySelector("input")||y.querySelector("textarea"),L=N(n),x=L?null:n.closest("ion-footer");if(!w)return;if(L&&c&&!l.has(n)){let b=z(n,w,L);l.set(n,b)}if(!(w.type==="date"||w.type==="datetime-local")&&(L||x)&&r&&!d.has(n)){let b=X(n,w,L,x,i,f,m,s);d.set(n,b)}},h=n=>{if(c){let y=l.get(n);y&&y(),l.delete(n)}if(r){let y=d.get(n);y&&y(),d.delete(n)}};a&&Z&&j();for(let n of u)v(n);g.addEventListener("ionInputDidLoad",n=>{v(n.detail)}),g.addEventListener("ionInputDidUnload",n=>{h(n.detail)})};export{re as startInputShims};
