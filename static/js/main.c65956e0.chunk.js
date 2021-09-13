(this["webpackJsonpmining-movies"]=this["webpackJsonpmining-movies"]||[]).push([[0],{52:function(n,e,t){},82:function(n,e,t){"use strict";t.r(e);var a,i,o,r,c,s,l,d,p,f,u,b,g,x,j,m,h=t(0),v=t.n(h),O=t(37),w=t.n(O),y=(t(52),t(14)),P=t(25),A=t(4),T=t(6),k={error:"",filter:{page:1,genre:""},genres:[],isFetching:!1,isLoadingMore:!1,movieFavorites:{},movies:[]},F=function(n,e){switch(e.type){case"UPDATE_APP_STATE":return Object(T.a)(Object(T.a)({},n),e.payload);default:return n}},_=v.a.createContext({state:k,dispatch:function(){}}),E=function(){return v.a.useContext(_)},S="https://api.themoviedb.org/3/",N="discover/movie/",L=t(3),M=t(2),U=t(41),D=t(44),C=t(45),z=M.a.div(a||(a=Object(L.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n  width: 100%;\n  justify-content: center;\n  margin-bottom: 10px;\n  align-content: flex-start;\n  padding: 0 8px;\n\n  .poster-wrapper {\n    flex: 0 0 100%;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n\n    .movie-favorite-marker {\n      position: absolute;\n      top: 4px;\n      right: 6px;\n      width: 20px;\n      height: 20px;\n    }\n\n    .poster {\n      width: 100%;\n      margin-bottom: 12px;\n    }\n\n    .favorite-action {\n      transition: 0.5s ease;\n      opacity: 0;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      text-align: center;\n      width: 50px;\n      padding: 0;\n      border: 0;\n      background: transparent;\n      cursor: pointer;\n    }\n\n    &:hover {\n      .poster {\n        opacity: 0.7;\n        filter: blur(4px);\n      }\n\n      .favorite-action {\n        opacity: 1;\n      }\n    }\n  }\n\n  .rating {\n    display: flex;\n    flex-flow: row wrap;\n    flex: 0 0 100%;\n    margin-bottom: 4px;\n    justify-content: center;\n  }\n\n  .title {\n    flex: 0 0 100%;\n    color: rgba(0, 0, 0, 0.7);\n    font-size: 14px;\n    font-weight: 500;\n    text-align: center;\n  }\n"]))),R=Object(M.a)(U.a)(i||(i=Object(L.a)(["\n  flex: 0 0 10px;\n  margin-right: 2px;\n  color: yellow;\n"]))),B=Object(M.a)(D.a)(o||(o=Object(L.a)(["\n  color: red;\n"]))),G=Object(M.a)(C.a)(r||(r=Object(L.a)(["\n  color: #ffffff;\n"]))),I=t(1),J=function(n){var e=n.isFavorited,t=n.onClickFavorite,a=n.posterPath,i=n.title,o=n.voteAverage,r=Array.from(Array(Math.round(o)).keys());return Object(I.jsxs)(z,{children:[Object(I.jsxs)("div",{className:"poster-wrapper",children:[e&&Object(I.jsx)("div",{className:"movie-favorite-marker",children:Object(I.jsx)(B,{})}),Object(I.jsx)("img",{alt:"movie poster",className:"poster",src:"https://image.tmdb.org/t/p/w200/"+a}),Object(I.jsx)("button",{className:"favorite-action",onClick:t,children:e?Object(I.jsx)(B,{}):Object(I.jsx)(G,{})})]}),Object(I.jsx)("div",{className:"rating",children:r.map((function(n){return Object(I.jsx)(R,{},n)}))}),Object(I.jsx)("div",{className:"title",children:i})]})},Y=M.a.div(c||(c=Object(L.a)(["\n  display: flex;\n  padding: 20px 0;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n\n  .no-movie {\n    flex: 0 0 100%;\n    display: flex;\n    justify-content: center;\n    font-style: italic;\n  }\n\n  .movie-box {\n    flex: 0 0 20%;\n    display: flex;\n    justify-content: center;\n  }\n\n  .movie-loading {\n    flex: 0 0 100%;\n  }\n\n  .movie-load-more {\n    display: flex;\n    flex: 0 0 100%;\n    justify-content: center;\n    margin-top: 30px;\n  }\n\n  @media screen and (max-width: 425px) {\n    .movie-box {\n      flex: 0 0 50%;\n    }\n  }\n"]))),q=M.a.button(s||(s=Object(L.a)(["\n  width: 250px;\n  height: 45px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n"]))),H=M.a.div(l||(l=Object(L.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n\n  .movie-card {\n    flex: 0 0 20%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  @keyframes background-animate {\n    0% {\n      background-position: -800px 0;\n    }\n    100% {\n      background-position: 800px 0;\n    }\n  }\n"]))),K=M.a.div(d||(d=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  animation-duration: 2s;\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n  animation-name: background-animate;\n  animation-timing-function: linear;\n  background: #e9ebed;\n  background: linear-gradient(to right, #e9ebed 5%, #ffffff 30%, #e9ebed 55%);\n  background-size: 800px 250px;\n  position: relative;\n"]))),Q=Object(M.a)(K)(p||(p=Object(L.a)(["\n  width: 137px;\n  height: 206px;\n  margin-bottom: 12px;\n"]))),V=Object(M.a)(K)(f||(f=Object(L.a)(["\n  width: 70px;\n  height: 10px;\n  margin-bottom: 4px;\n"]))),W=Object(M.a)(K)(u||(u=Object(L.a)(["\n  width: 137px;\n  height: 10px;\n"]))),X=function(){return Object(I.jsx)(H,{children:Array.from(Array(5).keys()).map((function(n){return Object(I.jsxs)("div",{className:"movie-card",children:[Object(I.jsx)(Q,{}),Object(I.jsx)(V,{}),Object(I.jsx)(W,{})]},n)}))})},Z=function(n){var e=n.addToFavorites,t=n.isFavoritePage,a=void 0!==t&&t,i=n.isFetching,o=n.isLoadingMore,r=n.loadMoreAction,c=n.movieFavorites,s=n.movies;return Object(I.jsxs)(Y,{children:[s.length<=0&&!i&&!o?Object(I.jsx)("div",{className:"no-movie",children:"No Movie..."}):null,i?null:s.map((function(n){return Object(I.jsx)("div",{className:"movie-box",children:Object(I.jsx)(J,{onClickFavorite:function(){e(n)},posterPath:n.poster_path,title:n.title,voteAverage:n.vote_average,isFavorited:!!c[n.id]})},n.title)})),i||o?Object(I.jsx)("div",{className:"movie-loading",children:Object(I.jsx)(X,{})}):null,i||o||a?null:Object(I.jsx)("div",{className:"movie-load-more",children:Object(I.jsx)(q,{onClick:function(){null===r||void 0===r||r()},children:"Load More"})})]})},$=t(18),nn=t(46),en=M.a.div(b||(b=Object(L.a)(["\n  display: block;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);\n  border-radius: 4px;\n\n  button {\n    border: 0;\n    margin: 0;\n    background: transparent;\n    cursor: pointer;\n  }\n\n  button.placeholder {\n    width: 100%;\n    font-size: 14px;\n    padding: 4px 10px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.75);\n    text-align: left;\n  }\n\n  .options-wrapper {\n    position: absolute;\n    width: 100%;\n    margin-top: 2px;\n\n    .options {\n      height: 0;\n      width: auto;\n      max-height: 0;\n      overflow: hidden;\n      overflow-y: scroll;\n      background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);\n      -webkit-transition: max-height 0.5s ease;\n      display: flex;\n      flex-flow: column;\n\n      &.show {\n        height: auto;\n        max-height: 200px;\n        -webkit-transition: max-height 0.5s ease;\n        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n        border: 0;\n        border-radius: 4px;\n      }\n\n      .option-item {\n        padding: 8px;\n        display: flex;\n        font-weight: 500;\n        font-size: 12px;\n        padding: 6px 18px;\n        color: rgba(0, 0, 0, 0.75);\n        align-items: center;\n\n        &.active {\n          background-image: linear-gradient(\n            60deg,\n            #3d3393 0%,\n            #2b76b9 37%,\n            #2cacd1 65%,\n            #35eb93 100%\n          );\n          color: rgba(255, 255, 255, 0.75);\n          font-weight: bold;\n          padding-left: 0;\n        }\n\n        &:hover {\n          background: #78d3db;\n        }\n\n        svg {\n          width: 10px;\n          margin: 0 4px;\n        }\n      }\n    }\n  }\n"]))),tn=function(n){var e=n.options,t=n.placeholder,a=n.onChange,i=n.value,o=Object(h.useRef)(null),r=Object(h.useState)(!1),c=Object(y.a)(r,2),s=c[0],l=c[1],d=Object(h.useMemo)((function(){return e.filter((function(n){return n.value===i}))[0]}),[i]),p=function(n){o&&o.current&&n.target instanceof Node&&!o.current.contains(n.target)&&l(!1)};return Object(h.useEffect)((function(){return document.addEventListener("mousedown",p),function(){document.removeEventListener("mousedown",p)}}),[]),Object(I.jsxs)(en,{className:"select-component",ref:o,children:[Object(I.jsx)("button",{className:"placeholder",onClick:function(){return l(!0)},children:(null===d||void 0===d?void 0:d.name)||t}),Object(I.jsx)("div",{className:"options-wrapper",children:Object(I.jsx)("div",{className:"options ".concat(s&&"show"),children:e.map((function(n){return Object(I.jsxs)("button",{className:"option-item ".concat(n.value===(null===d||void 0===d?void 0:d.value)&&"active"),onClick:function(){l(!1),a(n)},children:[n.value===(null===d||void 0===d?void 0:d.value)&&Object(I.jsx)(nn.a,{}),n.name]},"".concat(n.value))}))})})]})},an=M.a.div(g||(g=Object(L.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n\n  .filter-select {\n    flex: 0 0 25%;\n  }\n\n  @media screen and (max-width: 425px) {\n    .filter-select {\n      flex: 0 0 50%;\n    }\n  }\n"]))),on=function(n){var e=n.genres,t=n.updateFilter,a=n.filterGenre,i=Object(h.useMemo)((function(){return[{value:"latest",name:"Latest"}].concat(Object($.a)(e.map((function(n){var e=n.id,t=n.name;return{value:"".concat(e),name:t}}))))}),[e]);return Object(I.jsx)(an,{children:Object(I.jsx)("div",{className:"filter-select",children:Object(I.jsx)(tn,{value:a,options:i,placeholder:"Select filter...",onChange:function(n){var e=n.value;t({genre:e})}})})})},rn=M.a.div(x||(x=Object(L.a)(["\n  flex: 1 1 auto;\n  display: flex;\n  margin-bottom: 20px;\n\n  .navigator-item {\n    background: transparent;\n    margin: 0;\n    padding: 0 16px;\n    font-size: 26px;\n    font-weight: bold;\n    text-transform: capitalize;\n    border: 0;\n    border-right: 2px solid rgba(0, 0, 0, 0.75);\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.75);\n    display: flex;\n    align-items: center;\n\n    &:first-child {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      border: 0;\n    }\n\n    span {\n      font-size: 22px;\n      background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);\n      margin-left: 4px;\n      border-radius: 4px;\n    }\n  }\n"]))),cn=[{path:"/",name:"home"},{path:"/favorites",name:"favorites"}],sn=function(n){var e=n.favoriteNumber,t=Object(A.f)();return Object(I.jsx)(rn,{children:cn.map((function(n){var a=n.path,i=n.name;return Object(I.jsxs)("button",{className:"navigator-item",onClick:function(){t.push(a)},children:[i,"favorites"===i&&Object(I.jsx)("span",{children:"(".concat(e,")")})]},i)}))})},ln=M.a.div(j||(j=Object(L.a)(["\n  display: flex;\n  min-height: 100vh;\n  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);\n\n  .content {\n    width: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n    padding: 40px 10px 0;\n  }\n"]))),dn=t(20),pn=t.n(dn),fn={api_key:"bc054fb6ca0adb0ea0ac1ba4527acd6c",language:"en-US"},un=function(){var n=E(),e=n.state,t=e.filter,a=e.genres,i=e.isFetching,o=e.isLoadingMore,r=e.movies,c=e.movieFavorites;Object(h.useEffect)((function(){!function(n){var e=n.state.filter,t=n.dispatch,a=new URLSearchParams(Object(T.a)(Object(T.a)({},fn),{},{page:"".concat(e.page),sort_by:"popularity.desc",include_adult:"false",include_video:"false"})),i="".concat(S).concat(N,"?").concat(a.toString()),o=new URLSearchParams(fn),r="".concat(S).concat("/genre/movie/list","?").concat(o.toString());t({type:"UPDATE_APP_STATE",payload:{isFetching:!0}}),console.log("///",i,r),Promise.all([pn.a.get(i),pn.a.get(r)]).then((function(n){var e=Object(y.a)(n,2),a=e[0],i=e[1];t({type:"UPDATE_APP_STATE",payload:{movies:a.data.results,isFetching:!1,genres:i.data.genres}})})).catch((function(n){t({type:"UPDATE_APP_STATE",payload:{error:n,isFetching:!1}})}))}(n)}),[]),Object(h.useEffect)((function(){t.genre&&function(n){var e=n.state.filter,t=n.dispatch,a=Object(T.a)(Object(T.a)({},fn),{},{page:"1",sort_by:"popularity.desc",include_adult:"false",include_video:"false"});"latest"===e.genre?a.year=(new Date).getFullYear().toString():a.with_genres="".concat(e.genre);var i=new URLSearchParams(a),o="".concat(S).concat(N,"?").concat(i.toString());t({type:"UPDATE_APP_STATE",payload:{isFetching:!0}}),pn.a.get(o).then((function(n){t({type:"UPDATE_APP_STATE",payload:{movies:n.data.results,isFetching:!1}})})).catch((function(n){t({type:"UPDATE_APP_STATE",payload:{error:n,isFetching:!1}})}))}(n)}),[t.genre]);var s=function(e){n.dispatch({type:"UPDATE_APP_STATE",payload:e})};return Object(I.jsx)(ln,{children:Object(I.jsxs)("div",{className:"content",children:[Object(I.jsx)(sn,{favoriteNumber:Object.keys(c).length}),Object(I.jsx)("h3",{children:"Discover"}),Object(I.jsx)(on,{genres:a,updateFilter:function(n){s({filter:Object(T.a)(Object(T.a)({},t),n)})},filterGenre:t.genre}),Object(I.jsx)(Z,{addToFavorites:function(n){var e=Object(T.a)({},c);c[n.id]?delete e[n.id]:e[n.id]=n,s({movieFavorites:e})},isFetching:i,isLoadingMore:o,loadMoreAction:function(){return function(n){var e=n.state,t=e.filter,a=e.movies,i=n.dispatch,o=Object(T.a)(Object(T.a)({},fn),{},{page:"".concat(t.page+1)});"latest"===t.genre?o.year=(new Date).getFullYear().toString():o.with_genres="".concat(t.genre);var r=new URLSearchParams(o),c="".concat(S).concat(N,"?").concat(r.toString());i({type:"UPDATE_APP_STATE",payload:{isLoadingMore:!0}}),pn.a.get(c).then((function(n){i({type:"UPDATE_APP_STATE",payload:{movies:[].concat(Object($.a)(a),Object($.a)(n.data.results||[])),isLoadingMore:!1}})})).catch((function(n){i({type:"UPDATE_APP_STATE",payload:{error:n,isLoadingMore:!1}})}))}(n)},movieFavorites:c,movies:r})]})})},bn=M.a.div(m||(m=Object(L.a)(["\n  display: flex;\n  min-height: 100vh;\n  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);\n\n  .content {\n    width: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n    padding: 40px 10px 0;\n  }\n"]))),gn=function(){var n=E(),e=n.state,t=e.isFetching,a=e.isLoadingMore,i=e.movieFavorites,o=Object(h.useMemo)((function(){return Object.keys(i).map((function(n){return i[n]}))}),[i]);return Object(I.jsx)(bn,{children:Object(I.jsxs)("div",{className:"content",children:[Object(I.jsx)(sn,{favoriteNumber:Object.keys(i).length}),Object(I.jsx)("h3",{children:"Favorites"}),Object(I.jsx)(Z,{addToFavorites:function(e){var t=Object(T.a)({},i);i[e.id]?delete t[e.id]:t[e.id]=e,n.dispatch({type:"UPDATE_APP_STATE",payload:{movieFavorites:t}})},isFavoritePage:!0,isFetching:t,isLoadingMore:a,movieFavorites:i,movies:o})]})})},xn=function(){var n=Object(h.useReducer)(F,k),e=Object(y.a)(n,2),t=e[0],a=e[1],i=Object(h.useMemo)((function(){return{state:t,dispatch:a}}),[t,a]);return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(_.Provider,{value:i,children:Object(I.jsx)(P.a,{children:Object(I.jsxs)(A.c,{children:[Object(I.jsx)(A.a,{path:"/favorites",component:gn}),Object(I.jsx)(A.a,{path:"/",component:un})]})})})})},jn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),o(n),r(n)}))};w.a.render(Object(I.jsx)(v.a.StrictMode,{children:Object(I.jsx)(xn,{})}),document.getElementById("root")),jn()}},[[82,1,2]]]);
//# sourceMappingURL=main.c65956e0.chunk.js.map