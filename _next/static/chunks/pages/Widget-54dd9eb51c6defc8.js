(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{2776:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Widget",function(){return n(3237)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,u=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?u.loader=function(){return e}:"function"===typeof e?u.loader=e:"object"===typeof e&&(u=o({},u,e));!1;(u=o({},u,t)).suspense&&(delete u.ssr,delete u.loading);u.loadableGenerated&&delete(u=o({},u,u.loadableGenerated)).loadableGenerated;if("boolean"===typeof u.ssr&&!u.suspense){if(!u.ssr)return delete u.ssr,a(n,u);delete u.ssr}return n(u)},t.noSSR=a;var o=n(6495).Z,u=n(2648).Z,i=(u(n(7294)),u(n(4302)));function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(6495).Z,i=(0,n(2648).Z)(n(7294)),a=n(6319),l=n(7294).useSyncExternalStore,s=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!s){var t=new p(e,o);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=function(){n();var e=i.default.useContext(a.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=i.default.lazy(o.loader));var s=null;if(!d){var f=o.webpack?o.webpack():o.modules;f&&c.push((function(e){var t=!0,r=!1,o=void 0;try{for(var u,i=f[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var a=u.value;if(-1!==e.indexOf(a))return n()}}catch(l){r=!0,o=l}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}}))}var h=o.suspense?function(e,t){return r(),i.default.createElement(o.lazy,u({},e,{ref:t}))}:function(e,t){r();var n=l(s.subscribe,s.getCurrentValue,s.getCurrentValue);return i.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",i.default.forwardRef(h)}(f,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){v(s).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};v(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var y=h;t.default=y},3719:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(4924),o=n(6042),u=n(9396),i=n(828),a=function(e,t){var n=e.map((function(e){return e.id}));return t.filter((function(e){return n.includes(e.from)||n.includes(e.to)}))},l=n(9815),s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=[],u=[],i=function(e){var a,s=n.filter((function(t){return t.from===e})).map((function(e){return e.to})),c=t.filter((function(e){return r.includes(e.id)&&!u.includes(e.id)&&u.push(e.id),s.includes(e.id)&&!r.includes(e.id)}));(a=o).push.apply(a,(0,l.Z)(c)),c.forEach((function(e){return i(e.id)}))};return i(e),[o,u]},c=n(6902),d={loading:!1,nodes:[],edges:[],collapsedNodes:[],collapsedEdges:[],collapsedParents:[]},f=(0,c.ZP)((function(e,t){return(0,u.Z)((0,o.Z)({},d),{setGraphValue:function(t,n){return e((0,r.Z)({collapsedParents:[],collapsedNodes:[],collapsedEdges:[]},t,n))},expandNodes:function(n){var r=(0,i.Z)(s(n,t().nodes,t().edges,t().collapsedParents),2),o=r[0],u=r[1],l=a(o,t().edges),c=o.map((function(e){return e.id})).concat(u),d=l.map((function(e){return e.id})),f=t().collapsedParents.filter((function(e){return e!==n})),p=t().collapsedNodes.filter((function(e){return!c.includes(e)})),h=t().collapsedEdges.filter((function(e){return!d.includes(e)}));e({collapsedParents:f,collapsedNodes:p,collapsedEdges:h})},collapseNodes:function(n){var r=(0,i.Z)(s(n,t().nodes,t().edges),1)[0],o=a(r,t().edges),u=r.map((function(e){return e.id})),l=o.map((function(e){return e.id}));e({collapsedParents:t().collapsedParents.concat(n),collapsedNodes:t().collapsedNodes.concat(u),collapsedEdges:t().collapsedEdges.concat(l)})}})}))},3237:function(e,t,n){"use strict";n.r(t);var r=n(7297),o=n(5893),u=n(7294),i=n(5152),a=n.n(i),l=n(1163),s=n(8305),c=n(9193),d=n(3719),f=n(9833),p=n(369),h=n(9521);function v(){var e=(0,r.Z)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  color: ",";\n  background: ",";\n  padding: 4px 8px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 3px 0 0 0;\n  opacity: 0.8;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 12px;\n  }\n"]);return v=function(){return e},e}var y=a()((function(){return Promise.all([n.e(228),n.e(987),n.e(434),n.e(847),n.e(738)]).then(n.bind(n,4062)).then((function(e){return e.Graph}))}),{loadableGenerated:{webpack:function(){return[4062]}},ssr:!1}),m=h.ZP.a(v(),(function(e){return e.theme.INTERACTIVE_NORMAL}),(function(e){return e.theme.SILVER_DARK}));t.default=function(){var e=(0,l.useRouter)(),t=e.query,n=e.push,r=(0,d.Z)((function(e){return e.setGraphValue}));return u.useEffect((function(){if(t.json){var e=decodeURIComponent(t.json),o=(0,f.V)(e);if(o){var u=(0,s.Lj)(JSON.parse(o)),i=(0,p.E)(JSON.stringify(u)),a=i.nodes,l=i.edges;r("nodes",a),r("edges",l)}}(function(){try{return window.self!==window.top}catch(e){return!0}})()||n("/")}),[n,t.json,r]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{isWidget:!0}),(0,o.jsx)(m,{href:"".concat(c.v,"/editor?json=").concat(t.json),target:"_blank",rel:"noreferrer",children:"jsoncrack.com"})]})}},369:function(e,t,n){"use strict";n.d(t,{E:function(){return v}});var r=n(2670),o=n(9534),u=n(828),i=n(9815),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=("string"===typeof e?e:e.map((function(e){var t=(0,u.Z)(e,2),n=t[0],r=t[1];return"".concat(n,": ").concat(r)})).join("\n")).split("\n"),o=r.map((function(e){return e.length})),i=o.sort((function(e,t){return t-e}))[0],a=function(){return Array.isArray(e)&&!e.length?40:n?35+8*i+(t?60:0):t?170:200},l=function(){return 17.8*r.length<30?40:18*(r.length+1)};return{width:a(),height:l()}},l=function(e){var t=(0,u.Z)(e,2),n=(t[0],t[1]),o=null===n,i=Array.isArray(n)&&n.length,a=(0,r.Z)(n,Object);return!o&&(i||a)},s=function(e){var t=(0,u.Z)(e,2),n=(t[0],t[1]);return!Array.isArray(n)&&!(0,r.Z)(n,Object)};function c(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return(0,r.Z)(e,Object)||(e=[e]),Object.entries(e).filter(l).flatMap((function(e){var r=(0,u.Z)(e,2),o=r[0],i=r[1],l=a(o,!0,t),s=l.width,c=l.height,d=f(i,t,n);return[{id:n(),text:o,children:d,width:s,height:c,data:{isParent:!0,hasChild:!!d.length}}]}))}function d(e){return(0,r.Z)(e,Object)?Object.entries(e).filter(s):String(e)}var f=function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(t=0,function(){return String(++t)});return e?[e].flat().map((function(e){var t=d(e),o=a(t,!1,n),u=o.width,i=o.height;return{id:r(),text:t,width:u,height:i,children:c(e,n,r),data:{isParent:!1,hasChild:!1,isEmpty:!t.length}}})):[]},p=function(e){return e.flatMap((function(e){var t=e.children;return[(0,o.Z)(e,["children"])].concat((0,i.Z)(p(t)))}))},h=function(e){return e.flatMap((function(e){var t=e.id,n=e.children,r=void 0===n?[]:n;return(0,i.Z)(r.map((function(e){var n=e.id;return{id:"e".concat(t,"-").concat(n),from:t,to:n}}))).concat((0,i.Z)(h(r)))}))},v=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{var n=JSON.parse(e);Array.isArray(n)||(n=[n]);var r=[],o=[],u=f(n,t),a=(0,i.Z)(p(u)).concat((0,i.Z)(h(u)));return a.forEach((function(e){y(e)?r.push(e):o.push(e)})),{nodes:r,edges:o}}catch(l){return console.error(l),{nodes:[],edges:[]}}};function y(e){return"text"in e}},5152:function(e,t,n){e.exports=n(638)},2670:function(e,t,n){"use strict";function r(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(943);var o=n(3375);var u=n(1566);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,u.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[774,888,179],(function(){return t=2776,e(e.s=t);var t}));var t=e.O();_N_E=t}]);