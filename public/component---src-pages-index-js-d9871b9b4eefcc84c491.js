(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2fLG":function(e){e.exports=JSON.parse('{"data":{"wpgraphql":{"myProjects":{"nodes":[{"title":"Test Project","uri":"test-project","myProjects":{"customExcerpt":"<p>text custom excerpt</p>\\n","description":"<p>test project description.</p>\\n"}}]}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+s+o+a+r+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(z,(0,l.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},z=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,p=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:d,onClick:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,x=e.loading,L=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:C?1:0,transition:N?"opacity "+b+"ms":"none"},o),k="boolean"==typeof h?"lightgray":h,A={transitionDelay:b+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&A,{},o,{},f),P={title:t,alt:this.state.isVisible?"":a,style:V,className:p,itemProp:v};if(g){var T=g,q=T[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),k&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&A)}),q.base64&&c.default.createElement(O,{src:q.base64,spreadProps:P,imageVariants:T,generateSources:E}),q.tracedSVG&&c.default.createElement(O,{src:q.tracedSVG,spreadProps:P,imageVariants:T,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,S(T),c.default.createElement(z,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:x,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:x},q,{imageVariants:T}))}}))}if(m){var W=m,j=W[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete M.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},k&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},N&&A)}),j.base64&&c.default.createElement(O,{src:j.base64,spreadProps:P,imageVariants:W,generateSources:E}),j.tracedSVG&&c.default.createElement(O,{src:j.tracedSVG,spreadProps:P,imageVariants:W,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,S(W),c.default.createElement(z,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:x,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:x},j,{imageVariants:W}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});C.propTypes={resolutions:N,sizes:R,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=C;t.default=k},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),n=a.n(r),i=a("Bl7J"),s=a("ezAz"),o=a("9eSz"),l=a.n(o),c=function(){var e=s.data;return n.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},d=a("vrFN"),u=a("vOnD"),f=u.a.section.withConfig({displayName:"intro__HomeIntroWrap",componentId:"sc-197yc25-0"})(["position:relative;display:flex;flex-direction:column;align-items:center;padding:100px 20px 50px;color:#000;text-align:center;font-family:'Press Start 2P',cursive;line-height:2em;h2{font-size:40px;text-transform:uppercase;font-family:'Monoton',cursive;font-weight:400;letter-spacing:2px;word-spacing:10px;}.current-sketch{display:block;position:absolute;bottom:-40px;text-align:center;z-index:10;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;h3{margin-bottom:10px;color:black;}a{color:black;}}.svgcolor-up{position:absolute;bottom:0;transform:scaleY(-1);}"]),p=function(e){return n.a.createElement(f,{className:e.class,id:e.id},n.a.createElement("h2",null,e.heading),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),n.a.createElement("div",{className:"sketch-wrap"}))},g=a("Tkn/"),m=a("Wbzz"),h=function(){return n.a.createElement(m.StaticQuery,{query:"3169638238",render:function(e){return n.a.createElement("pre",null,JSON.stringify(e.wpgraphql.posts.nodes[0],null,2))},data:g})},b=a("2fLG"),y=function(){return n.a.createElement(m.StaticQuery,{query:"3403773821",render:function(e){return n.a.createElement("pre",null,JSON.stringify(e.wpgraphql.myProjects.nodes[0],null,2))},data:b})},S=u.a.section.withConfig({displayName:"welcome__WelcomeWrap",componentId:"tdrdo7-0"})(["position:relative;font-family:monospace;font-size:18px;padding:0;@media (min-width:768px){font-size:22px;}.welcome-content{padding:100px 20px;max-width:900px;margin:auto;text-align:center;a{color:#fff;}}.svgcolor-2{position:relative;bottom:-6px;transform:scaleY(-1);}"]),v=function(e){var t=e.colorTheme;return n.a.createElement(S,{style:t.background,className:e.class,id:e.id},n.a.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 102",height:"120",width:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"svgcolor"},n.a.createElement("path",{d:"M0 0 L50 100 L100 0 Z",fill:"#fff",stroke:"#fff"})),n.a.createElement("div",{style:t.pageLink,className:"welcome-content",dangerouslySetInnerHTML:{__html:e.content}}),n.a.createElement("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 102",height:"120",width:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"svgcolor-2"},n.a.createElement("path",{d:"M0 0 L50 100 L100 0 Z",fill:"#fff",stroke:"#fff"})))},w=u.a.section.withConfig({displayName:"about__AboutWrap",componentId:"sc-1rxafi7-0"})([""]),E=function(e){return n.a.createElement(w,{className:"content "+e.class,id:e.id},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))},x=a("lmkC");a.d(t,"pageQuery",(function(){return L}));var L="1915329397";t.default=function(e){var t=e.data.wpgraphql.pageBy.homeSections.sections,a=Object(x.a)();return n.a.createElement(i.a,{colorTheme:a},n.a.createElement(d.a,{title:"Home"}),t.map((function(e){switch(e.__typename){case"WPGraphQL_Page_Homesections_Sections_Intro":return n.a.createElement(p,Object.assign({key:e.id},e));case"WPGraphQL_Page_Homesections_Sections_Welcome":return n.a.createElement(v,Object.assign({colorTheme:a,key:e.id},e));case"WPGraphQL_Page_Homesections_Sections_About":return n.a.createElement(E,Object.assign({key:e.id},e));default:return n.a.createElement("p",null,"You done busted it.")}})),n.a.createElement("section",null,n.a.createElement("h2",null,"Most Recent Project"),n.a.createElement(y,null)),n.a.createElement("section",null,n.a.createElement("h2",null,"Most Recent Post"),n.a.createElement(h,null)),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(c,null)))}},"Tkn/":function(e){e.exports=JSON.parse('{"data":{"wpgraphql":{"posts":{"nodes":[{"uri":"test","title":"test","shortLongPost":{"longVersion":"<p>test long version</p>\\n","shortVersion":"<p>test short version</p>\\n","customExcerpt":"<p>testing custom excerpt</p>\\n"}},{"uri":"hello-world","title":"Hello world!","shortLongPost":{"longVersion":null,"shortVersion":null,"customExcerpt":null}}]}}}}')},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-d9871b9b4eefcc84c491.js.map