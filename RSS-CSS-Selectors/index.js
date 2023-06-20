(()=>{"use strict";var e={988:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".editor {\n    width: 35vw;\n    height: 50vh;\n    background-color: gray;\n    border: 2px solid black;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 0.2fr 1.8fr;\n    grid-gap: 0px;\n  }\n  \n  .section-header {\n    height: 25px;\n    background-color: rgb(181, 180, 180);\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start; \n    grid-row: 1;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    padding: 10px;\n  }\n  \n  .editor__line-number {\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-row: 2;\n    font-size: 14px;\n    padding-top: 5px;\n  }\n  \n  .editor__field {\n    background: white;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2;\n    font-size: 14px;\n    font-style: italic;\n    padding-top: 5px;\n  }\n\n.editor__input-row{\n    width: 85%;\n    height: 20%;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.editor__input{\n    width: 85%;\n    height: 50%;\n}\n\n.editor__button{\n    width: 50px;\n    height: 30px;\n    color: black;\n    background-color: gray;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-style: normal;\n}\n\n.editor__description{\n    height: 50%;\n    width: 100%;\n}",""]);const l=a},613:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".game-wrapper{\n    background-color: black;\n    width: 70vw;\n    height: 40vh;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.game-header{\n    font-size: 30px;\n    color: white;\n    font-family: Verdana, sans-serif;\n}\n\n.game-image{\n    max-width: 80%;\n    max-height: 70%;\n}",""]);const l=a},79:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".help-button{\n    width: 30px;\n    height: 20px;\n    border-radius: 15px;\n    background-color: white;\n    color: black;\n    font-size: 14px;\n    font-family: Verdana, sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\n.help-button:hover,\n.help-button:focus {\n    background-color: gray;\n}\n\n.hidden{\n    display: none;\n}",""]);const l=a},640:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".html-viewer{\n    width: 35vw;\n    height: 50vh;\n    background-color: gray;\n    border: 2px solid black;\n    display: grid;\n    grid-template-rows: auto 1fr;\n    grid-template-columns: 0.2fr 1.8fr;\n    grid-gap: 0px;\n}\n\n.html-viewer__field{\n    background: black;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2;\n    color: white;\n    white-space: pre-wrap;\n    padding-top: 5px;\n}\n\n.html-viewer__line-number{\n    background-color: black;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-row: 2;\n    font-size: 14px;\n    padding-top: 5px;\n}\n",""]);const l=a},798:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),l=t(667),s=t.n(l),c=new URL(t(345),t.b),d=new URL(t(98),t.b),u=new URL(t(281),t.b),p=new URL(t(952),t.b),m=a()(o()),f=s()(c),h=s()(d),v=s()(u),g=s()(p);m.push([e.id,`.levels-wrapper{\n    background-color: gray;\n    width: 27vw;\n    height: 90vh;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 20px;\n    font-family: Verdana, sans-serif;\n    position: relative;\n}\n\n.level-header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 15%;\n    background-color: green;\n    color: white;\n    padding: 10px;\n}\n\n.level-number{\n    width: 50%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.level-status{\n    width: 20%;\n    height: 100%;\n}\n\n.level-status.uncompleted {\n    background-image: url(${f});\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n  \n  .level-status.completed {\n    background-image: url(${h});\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n\n.buttons-container{\n    width: 20%;\n    height: 100%;\n}\n\n.left-button{\n    background:url(${v});\n    background-size: contain;\n    background-repeat: repeat;\n    cursor: pointer;\n}\n\n.right-button{\n    background:url(${g});\n    background-size: contain;\n    background-repeat: repeat;\n    cursor: pointer;\n}\n\n.burger-menu{\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items:flex-start;\n    flex-direction: column;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.burger-line {\n    width: 30px;\n    height: 2px;\n    background-color: white;\n    display: block;\n  }\n\n.level-description{\n    color: black;\n    width: 100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.level-example{\n    color: black;\n    width: 100%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.cover{\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(0,0,0,0.5);\n    display: none;\n}\n\n.level-header.open + .cover {\n    display: block;\n}\n\n.level-block {\n    display: flex;\n    width: 27vw;\n    height: 100%;\n    position: absolute;\n    right: -27vw;\n    top: 0;\n    background: #131212;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    visibility: hidden;\n    transition: all 0.5s ease-out;\n  }\n  \n  .level-header.open .level-block {\n    visibility: visible;\n    transform: translateX(-100%);\n    z-index: 1;\n  }\n\n.level-block__number{\n    color: red;\n    font-size: 20px;\n    cursor: pointer;\n}`,""]);const b=m},28:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.header {\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n\n.main{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 97vw;\n    height: 90vh;\n}\n\n.left-column{\n    display: flex;\n    flex-direction: column;\n}\n\n.css-html-container{\n    display: flex;\n    width: 70vw;\n}\n\n.right-column{\n    width: 27vw;\n    background-color: gray;\n    overflow-x: hidden;\n}",""]);const l=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},538:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),a=t.n(i),l=t(569),s=t.n(l),c=t(565),d=t.n(c),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(988),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},25:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),a=t.n(i),l=t(569),s=t.n(l),c=t(565),d=t.n(c),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(613),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},793:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),a=t.n(i),l=t(569),s=t.n(l),c=t(565),d=t.n(c),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(79),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},599:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),a=t.n(i),l=t(569),s=t.n(l),c=t(565),d=t.n(c),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(640),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},966:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),a=t.n(i),l=t(569),s=t.n(l),c=t(565),d=t.n(c),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(798),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},89:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(379),o=t.n(r),i=t(795),a=t.n(i),l=t(569),s=t.n(l),c=t(565),d=t.n(c),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(28),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=t(i[a]);n[l].references--}for(var s=r(e,o),c=0;c<i.length;c++){var d=t(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},717:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0});const r=t(527),o=t(682);n.default=class{constructor(){this.view=new r.AppViewer,this.controller=null}start(){this.view.switchLevel(1),this.controller=new o.CSSEditorController(1),this.controller.initialize()}}},682:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.CSSEditorController=void 0;const o=r(t(313));n.CSSEditorController=class{constructor(e){this.winCondition=o.default[e-1].correctAnswers,this.levelNumber=e}initialize(){this.addEventListeners()}addEventListeners(){const e=document.querySelector(".editor__input"),n=document.querySelector(".editor__button");null!==n&&null!==e&&(n.addEventListener("click",(()=>{this.checkCondition(e.value)})),e.addEventListener("keydown",(n=>{"Enter"===n.key&&this.checkCondition(e.value)})))}checkCondition(e){e.trim()===this.winCondition?console.log("you did it right!"):console.log("you did it wrong!")}}},313:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(326)).default.map((e=>({levelNumber:e.levelNumber,selector:e.selector,taskDescription:e.taskDescription,examples:e.examples,htmlField:e.htmlField,status:e.status,correctAnswers:e.correctAnswers,nameHelpButton:e.nameHelpButton,adviceHelpButton:e.adviceHelpButton,editorDescription:e.editorDescription,gameHeader:e.gameHeader,imgURL:e.imgURL})));n.default=o},902:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.CSSEditor=void 0,t(538),n.CSSEditor=class{draw(e){const n=document.createDocumentFragment(),t=document.querySelector(".editor");if(null!==t){const r=document.createElement("div");r.classList.add("section-header"),r.textContent="CSS Editor field",t.append(r);const o=document.createElement("div");o.classList.add("editor__line-number"),t.append(o),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach((e=>{const n=document.createElement("span");n.textContent=e.toString(),o.append(n)}));const i=document.createElement("div");i.classList.add("editor__field"),t.append(i);const a=document.createElement("div");a.classList.add("editor__input-row"),i.append(a);const l=document.createElement("input");l.classList.add("editor__input"),l.placeholder="Type selector here",a.append(l);const s=document.createElement("div");s.classList.add("editor__button"),s.textContent="Enter",a.append(s);const c=document.createElement("div");c.classList.add("editor__description"),c.innerHTML=`${""!==e?e.replace(/\n/g,"<br>"):""}`,i.append(c),n.append(t)}const r=document.querySelector(".css-html-container");null!==r&&r.append(n)}}},535:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GameSpace=void 0,t(25),n.GameSpace=class{draw(e,n){const t=document.createDocumentFragment(),r=document.querySelector(".game-wrapper");if(null!==r){const o=document.createElement("div");o.classList.add("game-header"),o.textContent=e,r.append(o);const i=document.querySelector(".help-button");r.append(i);const a=document.createElement("img");a.classList.add("game-image"),a.setAttribute("src",`./assets/${n}`),r.append(a),t.append(r)}const o=document.querySelector(".game-container");null!==o&&o.append(t)}}},519:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.HelpButton=void 0,t(793),n.HelpButton=class{draw(e,n){const t=document.createElement("div");t.classList.add("help-button"),t.textContent=e,t.addEventListener("click",(e=>{this.openAdvice(e)}));const r=document.createElement("div");r.classList.add("help-text"),r.classList.add("hidden"),r.textContent=n,t.append(r)}openAdvice(e){const n=document.querySelector(".help-button"),t=document.querySelector(".help-text.hidden");null!==n&&null!==t&&(e.target===n?t.classList.remove("hidden"):t.classList.add("hidden"))}}},43:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.HTMLViewer=void 0,t(599),n.HTMLViewer=class{draw(e){const n=document.createDocumentFragment(),t=document.querySelector(".html-viewer");if(null!=t){const r=document.createElement("div");r.classList.add("section-header"),r.textContent="HTML Viewer",t.append(r);const o=document.createElement("div");o.classList.add("html-viewer__line-number"),t.append(o),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach(((e,n)=>{const t=document.createElement("span");t.textContent=e.toString(),o.append(t)}));const i=document.createElement("pre");i.classList.add("html-viewer__field");const a=document.createTextNode(e);i.appendChild(a),t.append(i),n.append(t)}const r=document.querySelector(".css-html-container");null!==r&&r.append(n)}}},148:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.Levels=void 0,t(966);const o=r(t(313));n.Levels=class{draw(e,n,t,r){const i=document.createDocumentFragment(),a=document.querySelector(".levels-wrapper");if(null!=a){const l=document.createElement("div");l.classList.add("level-header"),a.append(l);const s=document.createElement("div");a.append(s),s.classList.add("cover");const c=document.createElement("div");c.classList.add("level-number"),c.textContent=e,l.append(c);const d=document.createElement("div");l.append(d),"completed"===n?(d.classList.add("level-status"),d.classList.add("completed")):(d.classList.add("level-status"),d.classList.add("uncompleted"));const u=document.createElement("div");u.classList.add("buttons-container"),l.append(u);const p=document.createElement("div");p.classList.add("left-button"),u.append(p);const m=document.createElement("div");m.classList.add("right-button"),u.append(m);const f=document.createElement("div");f.classList.add("burger-menu"),l.append(f);for(let e=0;e<3;e++){const e=document.createElement("span");e.classList.add("burger-line"),f.appendChild(e)}const h=document.createElement("div");a.append(h),h.classList.add("level-description"),h.textContent=t;const v=document.createElement("div");a.append(v),v.classList.add("level-example"),v.textContent=r;const g=document.createElement("div");g.classList.add("level-block"),g.textContent="Choose level",l.append(g);for(let e=0;e<o.default.length;e++){const n=document.createElement("div");n.classList.add("level-block__number"),n.textContent=[e+1].toString(),g.appendChild(n)}i.append(a)}const l=document.querySelector(".levels-container");null!==l&&l.append(i)}addEventsListeners(){const e=document.querySelector(".burger-menu"),n=document.querySelector("body"),t=document.querySelector(".cover"),r=document.querySelector(".level-header");if(null!==r&&null!==e&&null!==t&&null!==n){e.addEventListener("click",(e=>{r.classList.toggle("open"),console.log("event is added"),r.classList.contains("open")?n.style.overflow="hidden":n.style.overflow="initial"}));const o=e=>{e.target===t&&(r.classList.toggle("open"),r.classList.contains("open")?n.style.overflow="hidden":n.style.overflow="initial")};t.addEventListener("click",o)}}}},527:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppViewer=void 0;const o=t(902),i=t(43),a=r(t(313)),l=t(535),s=t(519),c=t(148);n.AppViewer=class{constructor(){this.currentLevel=1}render(e){const n=a.default[e-1],t=new s.HelpButton,r=new o.CSSEditor,d=new i.HTMLViewer,u=new l.GameSpace;r.draw(n.editorDescription),d.draw(n.htmlField),u.draw(n.gameHeader,n.imgURL),t.draw(n.nameHelpButton,n.adviceHelpButton);const p=new c.Levels;p.draw(n.levelNumber,n.status,n.taskDescription,n.examples),p.addEventsListeners()}switchLevel(e){e>=1&&e<=a.default.length?(this.currentLevel=e,this.render(e)):console.error("There is no such level.")}}},607:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(717));t(89),(new o.default).start()},98:(e,n,t)=>{e.exports=t.p+"367977ef89a565d200e3.png"},281:(e,n,t)=>{e.exports=t.p+"29abcffd820f27b3cc61.png"},952:(e,n,t)=>{e.exports=t.p+"fe6d45f799554873dc25.png"},345:(e,n,t)=>{e.exports=t.p+"37bb8aa49c298e39a8a4.png"},326:e=>{e.exports=JSON.parse('[{"levelNumber":"Current level 1","selector":"tag","taskDescription":"You need to choose all paragraph selectors using tag selector","examples":"some example here","htmlField":"<div class=\'html-field\'>\\n    <p> It\'s the first paragraph </p>\\n    <p> It\'s the second paragraph </p>\\n    <p> It\'s the third paragraph </p>\\n </div>","status":"uncompleted","correctAnswers":"p","nameHelpButton":"add some text","adviceHelpButton":"add some advice here","editorDescription":"{\\n /* Styles will be added\\n here */\\n }","gameHeader":"CSS Selectors Game starts","imgURL":"image-placeholder.png"}]')}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t(607)})();