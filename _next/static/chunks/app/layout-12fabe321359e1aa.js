(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2138:(e,t,a)=>{Promise.resolve().then(a.bind(a,7113)),Promise.resolve().then(a.t.bind(a,1228,23)),Promise.resolve().then(a.t.bind(a,1656,23)),Promise.resolve().then(a.bind(a,2553)),Promise.resolve().then(a.t.bind(a,347,23))},2553:(e,t,a)=>{"use strict";a.d(t,{LanguageProvider:()=>o,o:()=>l});var r=a(5155),n=a(2115);let s=(0,n.createContext)(),o=e=>{let{children:t}=e,[a,o]=(0,n.useState)("en");return(0,n.useEffect)(()=>{o(localStorage.getItem("language")||"en")},[]),(0,r.jsx)(s.Provider,{value:{language:a,toggleLanguage:()=>{let e="en"===a?"id":"en";o(e),localStorage.setItem("language",e)}},children:t})},l=()=>(0,n.useContext)(s)},347:()=>{},1228:e=>{e.exports={style:{fontFamily:"'geistSans', 'geistSans Fallback'"},className:"__className_6dcb00",variable:"__variable_6dcb00"}},1656:e=>{e.exports={style:{fontFamily:"'geistMono', 'geistMono Fallback'"},className:"__className_12532f",variable:"__variable_12532f"}},7113:(e,t,a)=>{"use strict";a.d(t,{D:()=>m,ThemeProvider:()=>d});var r=a(2115),n=(e,t,a,r,n,s,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let a="class"===e,r=a&&s?n.map(e=>s[e]||e):n;a?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||a,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},s=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=r.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=r.useContext(i))?e:c},d=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=u,defaultTheme:d=n?"system":"light",attribute:h="data-theme",value:v,children:p,nonce:S,scriptProps:w}=e,[_,E]=r.useState(()=>f(c,d)),[k,C]=r.useState(()=>f(c)),T=v?Object.values(v):m,P=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=b());let r=v?v[t]:t,o=a?y(S):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...T),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=s.includes(d)?d:null,a=s.includes(t)?t:e;i.style.colorScheme=a}null==o||o()},[S]),L=r.useCallback(e=>{let t="function"==typeof e?e(_):e;E(t);try{localStorage.setItem(c,t)}catch(e){}},[_]),x=r.useCallback(e=>{C(b(e)),"system"===_&&n&&!t&&P("system")},[_,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),r.useEffect(()=>{let e=e=>{e.key===c&&L(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),r.useEffect(()=>{P(null!=t?t:_)},[t,_]);let N=r.useMemo(()=>({theme:_,setTheme:L,forcedTheme:t,resolvedTheme:"system"===_?k:_,themes:n?[...m,"system"]:m,systemTheme:n?k:void 0}),[_,L,t,k,n,m]);return r.createElement(i.Provider,{value:N},r.createElement(g,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:n,enableColorScheme:l,defaultTheme:d,value:v,themes:m,nonce:S,scriptProps:w}),p)},g=r.memo(e=>{let{forcedTheme:t,storageKey:a,attribute:s,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([s,a,i,t,m,c,o,l]).slice(1,-1);return r.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(h,")")}})}),f=(e,t)=>{let a;if(!l){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[46,441,517,358],()=>t(2138)),_N_E=e.O()}]);