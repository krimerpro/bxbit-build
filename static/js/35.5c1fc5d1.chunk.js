(this["webpackJsonp@KyberSwap/interface"]=this["webpackJsonp@KyberSwap/interface"]||[]).push([[35],{"./src/components/swapv2/Routing.tsx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=n("./node_modules/@kyberswap/ks-sdk-core/dist/index.js"),r=n("./node_modules/react/index.js"),s=n.n(r),a=n("./node_modules/react-indiana-drag-scroll/dist/index.es.js"),d=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/hooks/index.ts"),c=n("./src/hooks/Tokens.ts"),u=n("./src/hooks/useThrottle.ts"),p=n("./src/state/customizeDexes/hooks.ts"),b=n("./src/state/swap/actions.ts"),h=n("./src/state/swap/hooks.ts"),f=n("./src/utils/index.ts"),m=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),g=n("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),x=n("./node_modules/@kyberswap/ks-sdk-classic/dist/index.js"),v=n("./node_modules/ethers/lib/utils.js"),j=n("./node_modules/jsbi/dist/jsbi-umd.js"),w=n.n(j);function y(e,t,n){var o;if(e&&e.swaps&&t){var r=null===(o=e.inputAmount)||void 0===o?void 0:o.wrapped,s=function(t,n){var o;if(t&&n&&((null===t||void 0===t?void 0:t.toLowerCase())===(null===r||void 0===r||null===(o=r.currency.address)||void 0===o?void 0:o.toLowerCase())&&e.inputAmount.greaterThan(w.a.BigInt(0)))){var s=new i.Percent(w.a.BigInt(n||0),e.inputAmount.quotient).toFixed(0);return parseInt(s)}},a=e.tokens||{},d=[];return e.swaps.forEach((function(e){if(1===e.length){var o,r,l,c=e[0],u=[(null===n||void 0===n?void 0:n[Object(v.getAddress)(c.tokenIn)])||a[c.tokenIn],(null===n||void 0===n?void 0:n[Object(v.getAddress)(c.tokenOut)])||a[c.tokenOut]];d.push({slug:null===(o=c.tokenOut)||void 0===o?void 0:o.toLowerCase(),pools:[{id:null===(r=c.pool)||void 0===r?void 0:r.toLowerCase(),exchange:c.exchange,swapAmount:w.a.BigInt(c.swapAmount),swapPercentage:s(c.tokenIn,c.swapAmount)}],path:u,id:null===(l=c.pool)||void 0===l?void 0:l.toLowerCase()})}else if(e.length>1){var p=[],b=[];e.forEach((function(e,o){var r;if(b.push({id:null===(r=e.pool)||void 0===r?void 0:r.toLowerCase(),exchange:e.exchange,swapAmount:w.a.BigInt(e.swapAmount),swapPercentage:0===o?s(e.tokenIn,e.swapAmount):100}),0===o){var d=a[e.tokenIn]||{};p.push((null===n||void 0===n?void 0:n[Object(v.getAddress)(d.address)])||new i.Token(t,d.address,d.decimals,d.symbol,d.name))}var l=a[e.tokenOut]||{};p.push((null===n||void 0===n?void 0:n[Object(v.getAddress)(l.address)])||new i.Token(t,l.address,l.decimals,l.symbol,l.name))})),d.push({slug:p.slice(1).map((function(e){return e.address})).join("-").toLowerCase(),path:p,pools:b,id:b.map((function(e){return e.id})).join("-")})}})),function(e){if(!e.length)return[];try{var t=-1,n=e.reduce((function(e,n){var o,r,s=[],a=n.pools&&(null===(o=n.pools[0])||void 0===o?void 0:o.swapPercentage)||0;if(e[n.slug]){var d=e[n.slug]||{};r=d.index;var l=d.subRoutes||[];a+=d.swapPercentage||0,l.forEach((function(e,t){var o=n.pools&&n.pools[t]||{},r=w.a.add(e.reduce((function(e,t){return w.a.add(e,t.swapAmount||x.ZERO)}),x.ZERO),o.swapAmount||x.ZERO),a=!1,d=e.map((function(e){var t=Object(g.a)({},e),n=t.id===o.id,s=t.swapAmount||x.ZERO;n&&(a=!0,s=w.a.add(s,o.swapAmount||x.ZERO));var d=new i.Percent(s,r).toFixed(0,void 0,i.Rounding.ROUND_HALF_UP);return t.swapPercentage=parseInt(d),t.total=r.toString(),t}));if(!a){var l=new i.Percent(o.swapAmount||x.ZERO,r).toFixed(0,void 0,i.Rounding.ROUND_HALF_UP);d.push(Object(g.a)(Object(g.a)({},o),{},{swapPercentage:parseInt(l)}))}s[t]=d}))}else r=t+=1,s=n.pools.map((function(e){return[Object(g.a)(Object(g.a)({},e),{},{swapPercentage:100})]}));return Object.assign({},e,Object(m.a)({},n.slug,{index:r,swapPercentage:a,path:n.path,subRoutes:s}))}),{}),o=Object.keys(n).length,r=new Array(o).map((function(){return{}}));return Object.values(n).forEach((function(e){e.index>o||r.splice(e.index,1,{swapPercentage:e.swapPercentage,path:e.path,subRoutes:e.subRoutes,id:e.subRoutes.flat().map((function(e){return e.id})).join("-")})})),r}catch(s){return console.error("[error_routesV2]",s),[]}}(d)}}var O,k=n("./src/utils/dmm.ts"),_=n("./src/components/CurrencyLogo/index.tsx"),R=n("./node_modules/react/jsx-runtime.js"),C=d.default.div.withConfig({displayName:"Routing__Shadow",componentId:"sc-163jb58-0"})(["position:relative;min-height:0;overflow:hidden;&:before,&:after{content:'';display:block;z-index:3;pointer-events:none;position:absolute;height:50px;width:100%;left:50%;transform:translateX(-50%);transition:all 0.2s ease;opacity:0;}&:before{background:linear-gradient(to bottom,",",transparent);top:0;}&:after{background:linear-gradient(to top,",",transparent);bottom:0;}&.top:before,&.bottom:after{opacity:1;}"],(function(e){return e.backgroundColor}),(function(e){return e.backgroundColor})),I=d.default.div.withConfig({displayName:"Routing__StyledContainer",componentId:"sc-163jb58-1"})(["flex:1;max-height:100%;max-width:100%;margin-left:0;overflow-y:scroll;overflow-x:hidden;&::-webkit-scrollbar{width:6px;height:6px;}&::-webkit-scrollbar-thumb{background:transparent;border-radius:999px;}&:hover::-webkit-scrollbar-thumb{background:",";border-radius:999px;}&::-webkit-scrollbar-track-piece{background:transparent;}"],(function(e){return e.theme.border})),L=d.default.div.withConfig({displayName:"Routing__StyledPair",componentId:"sc-163jb58-2"})(["position:relative;padding-top:12px;display:flex;justify-content:space-between;align-items:center;"]),A=d.default.div.withConfig({displayName:"Routing__StyledPairLine",componentId:"sc-163jb58-3"})(["flex:auto;min-width:50px;border-bottom:1px solid ",";height:1px;"],(function(e){return e.theme.border})),P=d.default.div.withConfig({displayName:"Routing__StyledWrapToken",componentId:"sc-163jb58-4"})(["display:flex;align-items:center;justify-content:space-between;min-width:100px;width:max-content;font-size:16px;font-weight:500;white-space:nowrap;min-height:38px;border-radius:0.5rem;",""],(function(e){return e.theme.mediaWidth.upToSmall(O||(O=Object(o.a)(["\n    min-width: 120px;\n  "])))})),S=d.default.a.withConfig({displayName:"Routing__StyledToken",componentId:"sc-163jb58-5"})(["width:100%;display:flex;align-items:center;white-space:nowrap;text-decoration:none;color:",";"," padding-bottom:7px;border-bottom:1px solid ",";& > span{margin-left:4px;margin-right:4px;}"],(function(e){return e.theme.subText}),(function(e){return e.reverse&&Object(d.css)(["flex-direction:row-reverse;justify-content:flex-start;"])}),(function(e){return e.theme.border})),N=d.default.div.withConfig({displayName:"Routing__StyledRoutes",componentId:"sc-163jb58-6"})(["margin:auto;width:100%;position:relative;padding:20px 10px 0;&:before{position:absolute;display:block;content:'';top:0;right:0;}"]),T=d.default.div.withConfig({displayName:"Routing__StyledRoute",componentId:"sc-163jb58-7"})(["display:flex;justify-content:flex-end;position:relative;align-items:center;&:before,&:after{content:'';display:block;border-left:1px solid ",";width:100%;height:calc(50% + 20px);position:absolute;border-right:1px solid ",";box-sizing:border-box;pointer-events:none;}&:before{top:-20px;}&:after{bottom:-10px;}&:last-child:after{display:none;}"],(function(e){return e.theme.border}),(function(e){return e.theme.border})),E=d.default.div.withConfig({displayName:"Routing__StyledRouteLine",componentId:"sc-163jb58-8"})(["position:absolute;border-bottom:1px solid ",";width:calc(100% - 68px);left:43px;"],(function(e){return e.theme.border})),z=d.default.div.withConfig({displayName:"Routing__StyledHops",componentId:"sc-163jb58-9"})(["z-index:1;display:flex;align-items:center;"]),U=d.default.div.withConfig({displayName:"Routing__StyledHop",componentId:"sc-163jb58-10"})(["padding:8px;border-radius:8px;background-color:",";border:1px solid ",";height:fit-content;position:relative;flex:0 0 146px;margin:auto;transition:filter 0.15s ease;cursor:pointer;:hover{filter:",";}"],(function(e){return e.theme.background}),(function(e){return e.theme.border}),(function(e){return e.theme.darkMode?"brightness(130%)":"brightness(97%)"})),H=d.default.a.withConfig({displayName:"Routing__StyledExchange",componentId:"sc-163jb58-11"})(["display:flex;align-items:center;width:100%;padding:4px 0;margin-top:4px;font-size:10px;border-radius:8px;color:",";line-height:20px;white-space:nowrap;text-decoration:none;&:hover{color:",";}& > .img--sm{width:14px;height:14px;border-radius:100%;margin-right:4px;}&:first-child{margin-top:8px;}"],(function(e){return e.theme.subText}),(function(e){var t=e.theme;return t.darkMode?t.white:t.black})),F=d.default.div.withConfig({displayName:"Routing__StyledExchangeStatic",componentId:"sc-163jb58-12"})(["display:flex;align-items:center;width:100%;padding:4px 0;margin-top:4px;font-size:10px;border-radius:8px;color:",";line-height:20px;white-space:nowrap;text-decoration:none;& > .img--sm{width:14px;height:14px;border-radius:100%;margin-right:4px;}&:first-child{margin-top:8px;}"],(function(e){return e.theme.subText})),M=d.default.div.withConfig({displayName:"Routing__StyledPercent",componentId:"sc-163jb58-13"})(["font-size:12px;line-height:14px;font-weight:700;position:absolute;top:calc(50% - 15px);left:8px;transform:translateY(50%);z-index:2;color:",";background:",";"],(function(e){return e.theme.primary}),(function(e){return e.backgroundColor})),W=d.default.i.withConfig({displayName:"Routing__StyledDot",componentId:"sc-163jb58-14"})(["display:inline-block;width:8px;height:8px;border-radius:100%;position:absolute;top:0;left:",";right:",";z-index:1;background-color:",";"],(function(e){return e.out?"unset":"6.5px"}),(function(e){return e.out?"6.5px":"unset"}),(function(e){return e.theme.primary})),Z=d.default.div.withConfig({displayName:"Routing__StyledWrap",componentId:"sc-163jb58-15"})(["width:calc(100% - 68px);margin:10px 0 10px 6px;&:after,&:before{transition:all 0.1s ease;content:'';display:block;z-index:2;pointer-events:none;position:absolute;inset:0 0 auto auto;width:40px;height:calc(100% - 20px);top:50%;transform:translateY(-50%);opacity:0;}&:after{background:linear-gradient(to right,",",transparent);left:42px;}&:before{background:linear-gradient(to left,",",transparent);right:24px;}&.left-visible:after,&.right-visible:before{opacity:1;}"],(function(e){return e.backgroundColor}),(function(e){return e.backgroundColor})),B=d.default.div.withConfig({displayName:"Routing__StyledHopChevronRight",componentId:"sc-163jb58-16"})(["border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid ",";"],(function(e){return e.theme.primary})),D=d.default.div.withConfig({displayName:"Routing__StyledHopChevronWrapper",componentId:"sc-163jb58-17"})(["min-width:24px;height:24px;display:flex;align-items:center;justify-content:center;z-index:1;"]),q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(1===t)return"100%";if(!e&&0!==e)return null;var n=t>1?Math.min(99.99,Math.max(.01,e)):e;return"".concat(n.toFixed(0),"%")},J=function(e){var t,n=e.route,o=e.chainId,i=e.backgroundColor,d=Object(r.useRef)(null),l=Object(r.useRef)(null),c=Object(r.useRef)(null),b=Object(p.a)(),h=Object(u.a)((function(){var e,t,n,o,i,r=d.current;(null===r||void 0===r?void 0:r.scrollLeft)>0?null===(t=c.current)||void 0===t||t.classList.add("left-visible"):null===(n=c.current)||void 0===n||n.classList.remove("left-visible");Math.floor((null===(e=l.current)||void 0===e?void 0:e.scrollWidth)-(null===r||void 0===r?void 0:r.scrollLeft))>Math.floor(null===r||void 0===r?void 0:r.clientWidth)?null===(o=c.current)||void 0===o||o.classList.add("right-visible"):null===(i=c.current)||void 0===i||i.classList.remove("right-visible")}),300);return Object(r.useEffect)((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}),[]),Object(r.useEffect)((function(){h()}),[n]),Object(R.jsx)(Z,{ref:c,backgroundColor:i,children:Object(R.jsx)(a.a,{innerRef:d,vertical:!1,onScroll:h,children:Object(R.jsx)(z,{length:null===n||void 0===n||null===(t=n.subRoutes)||void 0===t?void 0:t.length,ref:l,children:n.subRoutes.map((function(e,t,i){var r=n.path[t+1],a=e.flat().map((function(e){return e.id})).join("-");return Object(R.jsxs)(s.a.Fragment,{children:[Object(R.jsxs)(U,{children:[Object(R.jsxs)(S,{style:{marginRight:0},href:Object(f.q)(o,null===r||void 0===r?void 0:r.address,"token"),target:"_blank",children:[Object(R.jsx)(_.a,{currency:r,size:"16px"}),Object(R.jsx)("span",{children:null===r||void 0===r?void 0:r.symbol})]}),Array.isArray(e)?e.map((function(e){var t,n=function(e,t){return"1inch"===e.exchange?{name:"1inch",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png"}:"paraswap"===e.exchange?{name:"Paraswap",logoURL:"https://s2.coinmarketcap.com/static/img/coins/64x64/14534.png"}:null===t||void 0===t?void 0:t.find((function(t){return t.id===e.exchange||("kyberswap"===e.exchange||"kyberswap-static"===e.exchange)&&"kyberswapv1"===t.id}))}(e,b);return t=Object(R.jsxs)(R.Fragment,{children:[null!==n&&void 0!==n&&n.logoURL?Object(R.jsx)("img",{src:null===n||void 0===n?void 0:n.logoURL,alt:"",className:"img--sm"}):Object(R.jsx)("i",{className:"img--sm"}),"".concat((null===n||void 0===n?void 0:n.name)||"--",": ").concat(e.swapPercentage,"%")]}),42===e.id.length?Object(R.jsx)(H,{href:Object(f.q)(o,e.id,"address"),target:"_blank",children:t},"".concat(t,"-").concat(e.id)):Object(R.jsx)(F,{children:t},"".concat(t,"-").concat(e.id))})):null]}),t!==i.length-1&&Object(R.jsx)(D,{children:Object(R.jsx)(B,{})})]},a)}))})})})},K=function(e){var t=e.trade,n=e.currencies,o=e.formattedAmounts,s=e.maxHeight,a=Object(l.b)().chainId,d=Object(r.useRef)(null),u=Object(r.useRef)(null),p=Object(r.useRef)(null),f=Object(k.j)(n[b.a.INPUT]||void 0),m=Object(k.j)(n[b.a.OUTPUT]||void 0),g=Object(c.a)(),x=Object(r.useMemo)((function(){return y(t,a,g)}),[t,a,g]),v=function(e,t){var n=t===b.a.OUTPUT,r=e instanceof i.CurrencyAmount?null===e||void 0===e?void 0:e.currency:n?m:f;return a&&r?Object(R.jsxs)(S,{as:"div",reverse:n,style:{border:"none"},children:[Object(R.jsx)(_.a,{currency:r,size:"20px"}),Object(R.jsx)("span",{children:"".concat(r&&o[t]?o[t]:"0.0"," ").concat(r.symbol)})]}):null},j=t&&a&&x&&x.length>0,w=Object(r.useCallback)((function(){var e,t,n,o,i,r=null===u||void 0===u?void 0:u.current;(null===r||void 0===r?void 0:r.scrollTop)>0?null===d||void 0===d||null===(t=d.current)||void 0===t||t.classList.add("top"):null===d||void 0===d||null===(n=d.current)||void 0===n||n.classList.remove("top");(null===(e=p.current)||void 0===e?void 0:e.scrollHeight)-(null===r||void 0===r?void 0:r.scrollTop)>(null===r||void 0===r?void 0:r.clientHeight)?null===(o=d.current)||void 0===o||o.classList.add("bottom"):null===(i=d.current)||void 0===i||i.classList.remove("bottom")}),[]);Object(r.useEffect)((function(){return window.addEventListener("resize",w),function(){return window.removeEventListener("resize",w)}}),[w]),Object(r.useEffect)((function(){w()}),[t,s]);var O=Object(h.e)(),z=O.feeConfig,U=O.typedValue;return Object(R.jsx)(C,{ref:d,children:Object(R.jsx)(I,{ref:u,onScroll:w,style:{maxHeight:s||"100%"},children:Object(R.jsxs)("div",{ref:p,children:[Object(R.jsxs)(L,{children:[Object(R.jsx)(P,{children:v(z?U:null===t||void 0===t?void 0:t.inputAmount,b.a.INPUT)}),!j&&Object(R.jsx)(A,{}),Object(R.jsx)(P,{children:v(null===t||void 0===t?void 0:t.outputAmount,b.a.OUTPUT)})]}),t&&a&&x&&x.length>0?Object(R.jsx)("div",{children:Object(R.jsxs)(N,{children:[Object(R.jsx)(W,{}),Object(R.jsx)(W,{out:!0}),x.map((function(e){return Object(R.jsxs)(T,{children:[Object(R.jsx)(M,{children:q(e.swapPercentage,x.length)}),Object(R.jsx)(E,{}),Object(R.jsx)(J,{route:e,chainId:a}),Object(R.jsx)(D,{style:{marginRight:"2px"},children:Object(R.jsx)(B,{})})]},e.id)}))]})}):null]})})})};t.default=Object(r.memo)(K)}}]);