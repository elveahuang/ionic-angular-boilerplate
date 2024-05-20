import{a as O}from"./chunk-WWGT3PXV.js";var g=(e,n)=>e.month===n.month&&e.day===n.day&&e.year===n.year,w=(e,n)=>e.year<n.year||e.year===n.year&&e.month<n.month||e.year===n.year&&e.month===n.month&&e.day!==null&&e.day<n.day,I=(e,n)=>e.year>n.year||e.year===n.year&&e.month>n.month||e.year===n.year&&e.month===n.month&&e.day!==null&&e.day>n.day,ae=(e,n,t)=>{let o=Array.isArray(e)?e:[e];for(let r of o)if(n!==void 0&&w(r,n)||t!==void 0&&I(r,t)){O(`The value provided to ion-datetime is out of bounds.

Min: ${JSON.stringify(n)}
Max: ${JSON.stringify(t)}
Value: ${JSON.stringify(e)}`);break}},W=e=>e%4===0&&e%100!==0||e%400===0,E=(e,n)=>{if(n!==void 0)return n;let t=new Intl.DateTimeFormat(e,{hour:"numeric"}),o=t.resolvedOptions();if(o.hourCycle!==void 0)return o.hourCycle;let r=new Date("5/18/2021 00:00"),u=t.formatToParts(r).find(i=>i.type==="hour");if(!u)throw new Error("Hour value not found from DateTimeFormat");switch(u.value){case"0":return"h11";case"12":return"h12";case"00":return"h23";case"24":return"h24";default:throw new Error(`Invalid hour cycle "${n}"`)}},A=e=>e==="h23"||e==="h24",v=(e,n)=>e===4||e===6||e===9||e===11?30:e===2?W(n)?29:28:31,fe=(e,n={month:"numeric",year:"numeric"})=>new Intl.DateTimeFormat(e,n).formatToParts(new Date)[0].type==="month",ye=e=>new Intl.DateTimeFormat(e,{hour:"numeric"}).formatToParts(new Date)[0].type==="dayPeriod",_=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,G=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,he=e=>{if(e===void 0)return;let n=e;typeof e=="string"&&(n=e.replace(/\[|\]|\s/g,"").split(","));let t;return Array.isArray(n)?t=n.map(o=>parseInt(o,10)).filter(isFinite):t=[n],t},me=e=>({month:parseInt(e.getAttribute("data-month"),10),day:parseInt(e.getAttribute("data-day"),10),year:parseInt(e.getAttribute("data-year"),10),dayOfWeek:parseInt(e.getAttribute("data-day-of-week"),10)});function b(e){if(Array.isArray(e)){let t=[];for(let o of e){let r=b(o);if(!r)return;t.push(r)}return t}let n=null;if(e!=null&&e!==""&&(n=G.exec(e),n?(n.unshift(void 0,void 0),n[2]=n[3]=void 0):n=_.exec(e)),n===null){O(`Unable to parse date string: ${e}. Please provide a valid ISO 8601 datetime string.`);return}for(let t=1;t<8;t++)n[t]=n[t]!==void 0?parseInt(n[t],10):void 0;return{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],ampm:n[4]<12?"am":"pm"}}var R=(e,n,t)=>n&&w(e,n)?n:t&&I(e,t)?t:e,B=e=>e>=12?"pm":"am",ge=(e,n)=>{let t=b(e);if(t===void 0)return;let{month:o,day:r,year:d,hour:u,minute:i}=t,c=d??n.year,l=o??12;return{month:l,day:r??v(l,c),year:c,hour:u??23,minute:i??59}},ve=(e,n)=>{let t=b(e);if(t===void 0)return;let{month:o,day:r,year:d,hour:u,minute:i}=t;return{month:o??1,day:r??1,year:d??n.year,hour:u??0,minute:i??0}},D=e=>("0"+(e!==void 0?Math.abs(e):"0")).slice(-2),J=e=>("000"+(e!==void 0?Math.abs(e):"0")).slice(-4);function S(e){if(Array.isArray(e))return e.map(t=>S(t));let n="";return e.year!==void 0?(n=J(e.year),e.month!==void 0&&(n+="-"+D(e.month),e.day!==void 0&&(n+="-"+D(e.day),e.hour!==void 0&&(n+=`T${D(e.hour)}:${D(e.minute)}:00`)))):e.hour!==void 0&&(n=D(e.hour)+":"+D(e.minute)),n}var N=(e,n)=>n===void 0?e:n==="am"?e===12?0:e:e===12?12:e+12,De=e=>{let{dayOfWeek:n}=e;if(n==null)throw new Error("No day of week provided");return F(e,n)},pe=e=>{let{dayOfWeek:n}=e;if(n==null)throw new Error("No day of week provided");return j(e,6-n)},Te=e=>j(e,1),we=e=>F(e,1),Ie=e=>F(e,7),Me=e=>j(e,7),F=(e,n)=>{let{month:t,day:o,year:r}=e;if(o===null)throw new Error("No day provided");let d={month:t,day:o,year:r};if(d.day=o-n,d.day<1&&(d.month-=1),d.month<1&&(d.month=12,d.year-=1),d.day<1){let u=v(d.month,d.year);d.day=u+d.day}return d},j=(e,n)=>{let{month:t,day:o,year:r}=e;if(o===null)throw new Error("No day provided");let d={month:t,day:o,year:r},u=v(t,r);return d.day=o+n,d.day>u&&(d.day-=u,d.month+=1),d.month>12&&(d.month=1,d.year+=1),d},C=e=>{let n=e.month===1?12:e.month-1,t=e.month===1?e.year-1:e.year,o=v(n,t),r=o<e.day?o:e.day;return{month:n,year:t,day:r}},$=e=>{let n=e.month===12?1:e.month+1,t=e.month===12?e.year+1:e.year,o=v(n,t),r=o<e.day?o:e.day;return{month:n,year:t,day:r}},Z=(e,n)=>{let t=e.month,o=e.year+n,r=v(t,o),d=r<e.day?r:e.day;return{month:t,year:o,day:d}},Oe=e=>Z(e,-1),$e=e=>Z(e,1),X=(e,n,t)=>n?e:N(e,t),Ae=(e,n)=>{let{ampm:t,hour:o}=e,r=o;return t==="am"&&n==="pm"?r=N(r,"pm"):t==="pm"&&n==="am"&&(r=Math.abs(r-12)),r},be=(e,n,t)=>{let{month:o,day:r,year:d}=e,u=R(Object.assign({},e),n,t),i=v(o,d);return r!==null&&i<r&&(u.day=i),n!==void 0&&g(u,n)&&u.hour!==void 0&&n.hour!==void 0&&(u.hour<n.hour?(u.hour=n.hour,u.minute=n.minute):u.hour===n.hour&&u.minute!==void 0&&n.minute!==void 0&&u.minute<n.minute&&(u.minute=n.minute)),t!==void 0&&g(e,t)&&u.hour!==void 0&&t.hour!==void 0&&(u.hour>t.hour?(u.hour=t.hour,u.minute=t.minute):u.hour===t.hour&&u.minute!==void 0&&t.minute!==void 0&&u.minute>t.minute&&(u.minute=t.minute)),u},Fe=({refParts:e,monthValues:n,dayValues:t,yearValues:o,hourValues:r,minuteValues:d,minParts:u,maxParts:i})=>{let{hour:c,minute:l,day:a,month:m,year:y}=e,s=Object.assign(Object.assign({},e),{dayOfWeek:void 0});if(o!==void 0){let f=o.filter(h=>!(u!==void 0&&h<u.year||i!==void 0&&h>i.year));s.year=T(y,f)}if(n!==void 0){let f=n.filter(h=>!(u!==void 0&&s.year===u.year&&h<u.month||i!==void 0&&s.year===i.year&&h>i.month));s.month=T(m,f)}if(a!==null&&t!==void 0){let f=t.filter(h=>!(u!==void 0&&w(Object.assign(Object.assign({},s),{day:h}),u)||i!==void 0&&I(Object.assign(Object.assign({},s),{day:h}),i)));s.day=T(a,f)}if(c!==void 0&&r!==void 0){let f=r.filter(h=>!((u==null?void 0:u.hour)!==void 0&&g(s,u)&&h<u.hour||(i==null?void 0:i.hour)!==void 0&&g(s,i)&&h>i.hour));s.hour=T(c,f),s.ampm=B(s.hour)}if(l!==void 0&&d!==void 0){let f=d.filter(h=>!((u==null?void 0:u.minute)!==void 0&&g(s,u)&&s.hour===u.hour&&h<u.minute||(i==null?void 0:i.minute)!==void 0&&g(s,i)&&s.hour===i.hour&&h>i.minute));s.minute=T(l,f)}return s},T=(e,n)=>{let t=n[0],o=Math.abs(t-e);for(let r=1;r<n.length;r++){let d=n[r],u=Math.abs(d-e);u<o&&(t=d,o=u)}return t},q=e=>e===void 0?"":e.toUpperCase(),U=e=>Object.assign(Object.assign({},e),{timeZone:"UTC",timeZoneName:void 0}),je=(e,n,t,o={hour:"numeric",minute:"numeric"})=>{let r={hour:n.hour,minute:n.minute};return r.hour===void 0||r.minute===void 0?"Invalid Time":new Intl.DateTimeFormat(e,Object.assign(Object.assign({},U(o)),{hourCycle:t})).format(new Date(S(Object.assign({year:2023,day:1,month:1},r))+"Z"))},L=e=>{let n=e.toString();return n.length>1?n:`0${n}`},K=(e,n)=>{if(e===0)switch(n){case"h11":return"0";case"h12":return"12";case"h23":return"00";case"h24":return"24";default:throw new Error(`Invalid hour cycle "${n}"`)}return A(n)?L(e):e.toString()},ke=(e,n,t)=>{if(t.day===null)return null;let o=M(t),r=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(o);return n?`Today, ${r}`:r},Ce=(e,n)=>{let t=M(n);return new Intl.DateTimeFormat(e,{month:"long",year:"numeric",timeZone:"UTC"}).format(t)},He=(e,n)=>x(e,n,{day:"numeric"}).find(t=>t.type==="day").value,Q=(e,n)=>V(e,n,{year:"numeric"}),M=e=>{var n,t,o;let r=e.hour!==void 0&&e.minute!==void 0?` ${e.hour}:${e.minute}`:"";return new Date(`${(n=e.month)!==null&&n!==void 0?n:1}/${(t=e.day)!==null&&t!==void 0?t:1}/${(o=e.year)!==null&&o!==void 0?o:2023}${r} GMT+0000`)},V=(e,n,t)=>{let o=M(n);return Y(e,U(t)).format(o)},x=(e,n,t)=>{let o=M(n);return Y(e,t).formatToParts(o)},Y=(e,n)=>new Intl.DateTimeFormat(e,Object.assign(Object.assign({},n),{timeZone:"UTC"})),P=e=>{if("RelativeTimeFormat"in Intl){let n=new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(0,"day");return n.charAt(0).toUpperCase()+n.slice(1)}else return"Today"},k=e=>{let n=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()-n),e},ee=k(new Date("2022T01:00")),ne=k(new Date("2022T13:00")),H=(e,n)=>{let t=n==="am"?ee:ne,o=new Intl.DateTimeFormat(e,{hour:"numeric",timeZone:"UTC"}).formatToParts(t).find(r=>r.type==="dayPeriod");return o?o.value:q(n)},Ee=e=>Array.isArray(e)?e.join(","):e,Se=()=>k(new Date).toISOString(),te=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],oe=[0,1,2,3,4,5,6,7,8,9,10,11],ue=[0,1,2,3,4,5,6,7,8,9,10,11],re=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],ie=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0],Ne=(e,n,t=0)=>{let o=n==="ios"?"short":"narrow",r=new Intl.DateTimeFormat(e,{weekday:o}),d=new Date("11/01/2020"),u=[];for(let i=t;i<t+7;i++){let c=new Date(d);c.setDate(c.getDate()+i),u.push(r.format(c))}return u},Ze=(e,n,t)=>{let o=v(e,n),r=new Date(`${e}/1/${n}`).getDay(),d=r>=t?r-(t+1):6-(t-r),u=[];for(let i=1;i<=o;i++)u.push({day:i,dayOfWeek:(d+i)%7});for(let i=0;i<=d;i++)u=[{day:null,dayOfWeek:null},...u];return u},de=e=>{switch(e){case"h11":return oe;case"h12":return ue;case"h23":return re;case"h24":return ie;default:throw new Error(`Invalid hour cycle "${e}"`)}},se=(e,n,t="h12",o,r,d,u)=>{let i=E(e,t),c=A(i),l=de(i),a=te,m=!0,y=!0;if(d&&(l=l.filter(s=>d.includes(s))),u&&(a=a.filter(s=>u.includes(s))),o)if(g(n,o)){if(o.hour!==void 0&&(l=l.filter(s=>{let f=n.ampm==="pm"?(s+12)%24:s;return(c?s:f)>=o.hour}),m=o.hour<13),o.minute!==void 0){let s=!1;o.hour!==void 0&&n.hour!==void 0&&n.hour>o.hour&&(s=!0),a=a.filter(f=>s?!0:f>=o.minute)}}else w(n,o)&&(l=[],a=[],m=y=!1);return r&&(g(n,r)?(r.hour!==void 0&&(l=l.filter(s=>{let f=n.ampm==="pm"?(s+12)%24:s;return(c?s:f)<=r.hour}),y=r.hour>=12),r.minute!==void 0&&n.hour===r.hour&&(a=a.filter(s=>s<=r.minute))):I(n,r)&&(l=[],a=[],m=y=!1)),{hours:l,minutes:a,am:m,pm:y}},Ue=(e,n)=>{let t={month:e.month,year:e.year,day:e.day};if(n!==void 0&&(e.month!==n.month||e.year!==n.year)){let o={month:n.month,year:n.year,day:n.day};return w(o,t)?[o,t,$(e)]:[C(e),t,o]}return[C(e),t,$(e)]},Le=(e,n,t,o,r,d={month:"long"})=>{let{year:u}=n,i=[];if(r!==void 0){let c=r;(o==null?void 0:o.month)!==void 0&&(c=c.filter(l=>l<=o.month)),(t==null?void 0:t.month)!==void 0&&(c=c.filter(l=>l>=t.month)),c.forEach(l=>{let a=new Date(`${l}/1/${u} GMT+0000`),m=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(a);i.push({text:m,value:l})})}else{let c=o&&o.year===u?o.month:12,l=t&&t.year===u?t.month:1;for(let a=l;a<=c;a++){let m=new Date(`${a}/1/${u} GMT+0000`),y=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(m);i.push({text:y,value:a})}}return i},ce=(e,n,t,o,r,d={day:"numeric"})=>{let{month:u,year:i}=n,c=[],l=v(u,i),a=(o==null?void 0:o.day)!==null&&(o==null?void 0:o.day)!==void 0&&o.year===i&&o.month===u?o.day:l,m=(t==null?void 0:t.day)!==null&&(t==null?void 0:t.day)!==void 0&&t.year===i&&t.month===u?t.day:1;if(r!==void 0){let y=r;y=y.filter(s=>s>=m&&s<=a),y.forEach(s=>{let f=new Date(`${u}/${s}/${i} GMT+0000`),h=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(f);c.push({text:h,value:s})})}else for(let y=m;y<=a;y++){let s=new Date(`${u}/${y}/${i} GMT+0000`),f=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},d),{timeZone:"UTC"})).format(s);c.push({text:f,value:y})}return c},Ye=(e,n,t,o,r)=>{var d,u;let i=[];if(r!==void 0)i=r,(o==null?void 0:o.year)!==void 0&&(i=i.filter(c=>c<=o.year)),(t==null?void 0:t.year)!==void 0&&(i=i.filter(c=>c>=t.year));else{let{year:c}=n,l=(d=o==null?void 0:o.year)!==null&&d!==void 0?d:c,a=(u=t==null?void 0:t.year)!==null&&u!==void 0?u:c-100;for(let m=a;m<=l;m++)i.push(m)}return i.map(c=>({text:Q(e,{year:c,month:n.month,day:n.day}),value:c}))},z=(e,n)=>e.month===n.month&&e.year===n.year?[e]:[e,...z($(e),n)],ze=(e,n,t,o,r,d)=>{let u=[],i=[],c=z(t,o);return d&&(c=c.filter(({month:l})=>d.includes(l))),c.forEach(l=>{let a={month:l.month,day:null,year:l.year},m=ce(e,a,t,o,r,{month:"short",day:"numeric",weekday:"short"}),y=[],s=[];m.forEach(f=>{let h=g(Object.assign(Object.assign({},a),{day:f.value}),n);s.push({text:h?P(e):f.text,value:`${a.year}-${a.month}-${f.value}`}),y.push({month:a.month,year:a.year,day:f.value})}),i=[...i,...y],u=[...u,...s]}),{parts:i,items:u}},We=(e,n,t,o,r,d,u)=>{let i=E(e,t),c=A(i),{hours:l,minutes:a,am:m,pm:y}=se(e,n,i,o,r,d,u),s=l.map(p=>({text:K(p,i),value:X(p,c,n.ampm)})),f=a.map(p=>({text:L(p),value:p})),h=[];return m&&!c&&h.push({text:H(e,"am"),value:"am"}),y&&!c&&h.push({text:H(e,"pm"),value:"pm"}),{minutesData:f,hoursData:s,dayPeriodData:h}};export{g as a,w as b,I as c,ae as d,E as e,v as f,fe as g,ye as h,he as i,me as j,b as k,R as l,B as m,ge as n,ve as o,S as p,De as q,pe as r,Te as s,we as t,Ie as u,Me as v,C as w,$ as x,Oe as y,$e as z,Ae as A,be as B,Fe as C,je as D,ke as E,Ce as F,He as G,V as H,Ee as I,Se as J,Ne as K,Ze as L,Ue as M,Le as N,ce as O,Ye as P,ze as Q,We as R};
