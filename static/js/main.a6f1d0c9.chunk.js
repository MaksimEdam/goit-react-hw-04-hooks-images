(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3474A",Modal:"Modal_Modal__WXPcD"}},17:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1GIcO",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1myZr"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2nDcB"}},28:function(e,t,a){e.exports={Button:"Button_Button__27H57"}},30:function(e,t,a){e.exports={loader:"Spinner_loader__3H_Uj"}},31:function(e,t,a){e.exports={App:"App_App__2Fwh2"}},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3dn5C",SearchForm:"Searchbar_SearchForm__3l6Lb",SearchFormButton:"Searchbar_SearchFormButton__3tJBf",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__SgFzU",SearchFormInput:"Searchbar_SearchFormInput__3tNgV"}},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),o=a.n(c),s=a(6),l=a.n(s),u=a(18),i=a(13),m=a(4),b=a(9),j=a(16),h=a.n(j),p=a(1),g=document.querySelector("#modal-root");var f=function(e){var t=e.toggleModal,a=e.largeImageURL,n=e.tags;Object(r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(p.jsx)("div",{className:h.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(p.jsx)("div",{className:h.a.Modal,children:Object(p.jsx)("img",{src:a,alt:n})})}),g)},d=a(17),O=a.n(d);var _=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,c=Object(r.useState)(!1),o=Object(m.a)(c,2),s=o[0],l=o[1],u=function(){l(!s)};return Object(p.jsxs)("li",{className:O.a.ImageGalleryItem,children:[Object(p.jsx)("img",{onClick:u,className:O.a.ImageGalleryItemImage,src:t,alt:n}),s&&Object(p.jsx)(f,{largeImageURL:a,toggleModal:u,alt:n})]})},v=a(27),x=a.n(v);var S=function(e){var t=e.items;return Object(p.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,n=e.tags;return Object(p.jsx)(_,{webformatURL:a,largeImageURL:r,tags:n},t)}))})},I=a(32),y=(a(39),a(7)),w=a.n(y);var B=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(m.a)(a,2),c=n[0],o=n[1];return Object(p.jsx)("header",{className:w.a.Searchbar,children:Object(p.jsxs)("form",{className:w.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?t(c):Object(b.b)("Type in the keyword")},children:[Object(p.jsxs)("button",{type:"submit",className:w.a.SearchFormButton,children:[Object(p.jsx)(I.a,{style:{marginRight:8}}),Object(p.jsx)("span",{className:w.a.SearchFormButtonLabel,children:"Search"})]}),Object(p.jsx)("input",{className:w.a.SearchFormInput,type:"text",placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value)}})]})})},F=a(28),k=a.n(F);var L=function(e){var t=e.onBtnClick;return Object(p.jsx)("button",{className:k.a.Button,onClick:t,children:"Load more"})},N=a(29),G=a.n(N),U=(a(60),a(30)),R=a.n(U);var M=function(){return Object(p.jsx)(G.a,{className:R.a.loader,type:"BallTriangle",color:"#00BFFF",height:150,width:150,timeout:1e3})},C=a(14),E=a.n(C);function A(){return(A=Object(i.a)(l.a.mark((function e(t,a){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("?q=".concat(t,"&page=").concat(a));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}E.a.defaults.baseURL="https://pixabay.com/api/",E.a.defaults.params={key:"18992166-123806360f211761da038f5eb",image_type:"photo",orientation:"horizontal",per_page:"12"};var T=function(e,t){return A.apply(this,arguments)},D=a(31),J=a.n(D);var q=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),o=Object(m.a)(c,2),s=o[0],j=o[1],h=Object(r.useState)([]),g=Object(m.a)(h,2),f=g[0],d=g[1],O=Object(r.useState)(1),_=Object(m.a)(O,2),v=_[0],x=_[1];return Object(r.useEffect)((function(){if(a&&v){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(a,v);case 3:t=e.sent,d((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t.hits))})),0===t.length&&b.b.error("\u0444\u043e\u0442\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[a,v]),Object(p.jsxs)("div",{className:J.a.App,children:[s&&Object(p.jsx)(M,{}),Object(p.jsx)(B,{onSubmit:function(e){n(e),d([]),x(1),j(!0)}}),Object(p.jsx)(S,{items:f}),f.length>0&&Object(p.jsx)(L,{onBtnClick:function(){j(!0),x((function(e){return e+1}))}}),Object(p.jsx)(b.a,{theme:"colored"})]})};a(79),a(80);o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.a6f1d0c9.chunk.js.map