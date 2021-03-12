(this["webpackJsonp42image-finder"]=this["webpackJsonp42image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem___AHM4",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__1wMOf"}},12:function(e,t,a){e.exports={Overlay:"modal_Overlay__2PQZK",Modal:"modal_Modal__3qVwQ"}},13:function(e,t,a){e.exports={App:"App_App__2s_Fq",loader:"App_loader__WwFZi"}},25:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__RB8Yj"}},26:function(e,t,a){e.exports={Button:"button_Button__l6X__"}},32:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),o=a.n(c),s=(a(32),a(14)),l=a(9),i=a(4),u=a(5),h=a(7),m=a(6),g=a(8),d=a.n(g),p=a(0),b=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchImage:""},e.handleInputChange=function(t){e.setState({searchImage:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchImage),e.reset()},e.reset=function(){e.setState({searchImage:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:d.a.Searchbar,children:Object(p.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(p.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchImage,onChange:this.handleInputChange})]})})}}]),a}(n.Component),j=a(24),f=a.n(j),y=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n,c=e.pageSize,o=void 0===c?12:c;return f.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("19012539-7c0dd5e15fe1ddd8f8e676462","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))},I=a(11),O=a.n(I),_=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,r=e.openModal;return Object(p.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItemImage,"data-largeimg":n,onClick:r})})},v=a(12),S=a.n(v),x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.onBackdropClose=function(t){t.target===t.currentTarget&&e.props.closeModal()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImg;return Object(p.jsx)("div",{className:S.a.Overlay,onClick:this.onBackdropClose,children:Object(p.jsx)("div",{className:S.a.Modal,children:Object(p.jsx)("img",{src:e,alt:"largeImg"})})})}}]),a}(n.Component),w=a(25),F=a.n(w),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={largeImg:null},e.openModal=function(t){e.setState({largeImg:t.target.dataset.largeimg})},e.closeModal=function(t){e.setState({largeImg:null})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.images,t=this.state.largeImg,a=this.openModal,n=this.closeModal;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:F.a.ImageGallery,children:e.map((function(e){var t=e.id,n=e.tags,r=e.webformatURL,c=e.largeImageURL;return Object(p.jsx)(_,{tags:n,webformatURL:r,largeImageURL:c,openModal:a},t)}))}),t&&Object(p.jsx)(x,{largeImg:t,closeModal:n})]})}}]),a}(n.Component),k=a(26),M=a.n(k),B=function(e){var t=e.getFetchImages;return Object(p.jsx)("button",{className:M.a.Button,type:"button",onClick:t,children:"Load more"})},C=a(13),N=a.n(C),G=a(27),A=a.n(G),Q=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,isLoading:!1},e.handleSearchImages=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.getFetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0})})),y({searchQuery:a,page:n}).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1})}))}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getFetchImages(),this.state.searchQuery.length>0&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading;return Object(p.jsxs)("div",{className:N.a.App,children:[a&&Object(p.jsx)(A.a,{className:N.a.loader,type:"Hearts",color:"red",height:80,width:80}),Object(p.jsx)(b,{onSubmit:this.handleSearchImages}),t.length>0&&Object(p.jsx)(L,{images:t}),t.length>0&&Object(p.jsx)(B,{getFetchImages:this.getFetchImages})]})}}]),a}(n.Component);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"searchbar_Searchbar__3VK8i",SearchForm:"searchbar_SearchForm__pn92P",SearchFormButton:"searchbar_SearchFormButton__1EFLt",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__Jj-ZB",SearchFormInput:"searchbar_SearchFormInput__2L7V0"}}},[[72,1,2]]]);
//# sourceMappingURL=main.c02fd7b9.chunk.js.map