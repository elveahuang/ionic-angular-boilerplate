var i=Object.defineProperty,j=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var f=(b,a,c)=>a in b?i(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,l=(b,a)=>{for(var c in a||(a={}))g.call(a,c)&&f(b,c,a[c]);if(e)for(var c of e(a))h.call(a,c)&&f(b,c,a[c]);return b},m=(b,a)=>j(b,k(a));var n=b=>a=>{var c=b[a];if(c)return c();throw new Error("Module not found in bundle: "+a)};var o=(b,a)=>{var c={};for(var d in b)g.call(b,d)&&a.indexOf(d)<0&&(c[d]=b[d]);if(b!=null&&e)for(var d of e(b))a.indexOf(d)<0&&h.call(b,d)&&(c[d]=b[d]);return c};var p=(b,a,c)=>f(b,typeof a!="symbol"?a+"":a,c);export{l as a,m as b,n as c,o as d,p as e};
