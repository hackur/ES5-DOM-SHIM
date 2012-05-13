(function(c){var o=void 0,s=!0,t=null,w=!1;function C(a,b){for(var f in b)D(b,f)&&!D(a,f)&&(a[f]=b[f]);return a}function ba(a,b){for(var f=0,O=a.length;f<O;f++){var d=a[f],c=b(d);if(c||d.childNodes&&0<d.childNodes.length&&(c=ba(d.childNodes,b)))return c}}function ca(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;}function da(a){a.__isFixed=s;"click"===a.type&&a.detail===o?a.detail=1:"dblclick"===a.type&&a.detail===o&&(a.detail=2);C(a,S);a.target||(a.target=a.srcElement||
document);a.relatedTarget===o&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);if(a.pageX==t&&a.clientX!=t){var b=y,f=document.body;a.pageX=a.clientX+(window.pageXOffset||b.scrollLeft||f.scrollLeft||0)-(b.clientLeft||0);a.pageY=a.clientY+(window.pageYOffset||b.scrollTop||f.scrollTop||0)-(b.clientTop||0)}!a.which&&"button"in a&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);a.timeStamp||(a.timeStamp=+new ea);a.eventPhase||(a.eventPhase=a.target==this?2:3);a.currentTarget||
(a.currentTarget=this);!a.attrName&&a.propertyName&&(a.attrName=J.call(a.propertyName,".")[0]);return a}function K(a){if(da!==o){var b=this._,f=[],O=[],d;if(b&&b._e_8vj){a||(a=window.m);a.__isFixed||(a=da.call(this,a));if(a.__custom_event)d=a;else{d=new Event(a.type);var c=a,g;for(g in c)if(D(c,g)&&d[g]!==c[g])try{d[g]=c[g]}catch(j){}d.__custom_event=s}if(b=b._e_8vj[d.type]){for(var h in b)if(D(b,h)){var c=b[h],e;"object"===typeof c&&(e=c,c=c.handleEvent);try{if((d.result=q.call(c,e||this,d))===w)d.preventDefault(),
d.stopPropagation()}catch(i){f.push(i),O.push(i.message),console&&console.error(i)}if(d.__stopNow)break}a.returnValue=d.returnValue;a.cancelBubble=d.cancelBubble;if(1==f.length)throw f[0];if(1<f.length)throw a=Error("Multiple errors thrown : "+d.type+" :  : "+O.join("|")),a.b=f,a;}}}}function fa(a){var b=this.__orig__createElement__(a);if(ga.test(a))return b;~G.indexOf("|"+a+"|")||(T.push(a),G+=a+"|",(E.__orig__createElement__||E.createElement)(a));return E.appendChild(b)}function U(a){var b=-1;if(a.createElement){for(;++b<
T.length;)a.createElement(T[b]);a.createElement!==fa&&(a.__orig__createElement__=a.createElement,a.createElement=fa)}return a}function za(){var a=document.querySelectorAll("#z").constructor.prototype;if(a&&a!==Array.prototype)for(var b in V)D(b,V)&&(a[b]||(a[b]=function(){L.call(Array.prototype[b],Array.from(this),arguments)}))}function Aa(a){var b=document.getElementById("ielt8_style_prev_for_behaviour"),f="";b&&(f=b.getAttribute("data-url")||"",b.id="");f&&a.replace(" url("," url("+f+") url(");
b=ha("style");b.id="ielt8_style_prev_for_behaviour";b.type="text/css";b.setAttribute("data-url",a.replace("{behavior:","").replace(")}",")"));b.styleSheet.cssText="*"+a;document.head.appendChild(b)}function ia(a,b,f,c){b?Array.isArray(b)||(b=[b]):b=[document];var d=!!f,v=a.match(Ba);(","===a||!v)&&ca("SYNTAX_ERR");var f=f||[],g={},j,h,e=v[1],a=v[2].toUpperCase(),i=v[3],p=v[4],k=!!p,n=v[5],u,l=-1,v=v[6],r,x,q=-1;k&&(p=p.replace(P," "));":root"===v&&(d=s,f=[~b.indexOf(document)?y:t]);if(!d){switch(e){default:for(;h=
b[++q];)if(i)j=h.getElementById?h.getElementById(i):document.getElementById(i),(!a||j.tagName.toUpperCase()===a)&&f.push(j);else{d=k?W.call(h,p):!a&&h.all?h.all:h.getElementsByTagName(a||"*");for(l=-1;j=d[++l];)j.sourceIndex in g||(g[j.sourceIndex]=s,f.push(j))}i?i="":k?k=w:a&&(a="");break;case "+":for(;h=b[++q];){for(;(j=h.nextSibling)&&1!=j.nodeType;);if((d=j&&(!a||j.tagName.toUpperCase()===a)&&!(j.sourceIndex in g))&&k){l=-1;for(e=" "+j.className+" ";p[++l]&&d;)d=!!~e.indexOf(p[l])}d&&(f.push(j),
g[j.sourceIndex]=s)}k=w;a="";break;case "~":for(;b[++q];)for(;j=j.nextSibling;){if((d=1==j.nodeType&&(!a||j.tagName.toUpperCase()===a)&&!(j.sourceIndex in g))&&k){l=-1;for(e=" "+j.className+" ";p[++l]&&d;)d=!!~e.indexOf(p[l])}d&&(f.push(j),g[j.sourceIndex]=s)}k=w;a="";break;case ">":for(;h=b[++q];)for(x=-1;j=h.childNodes[++x];){if((d=1==j.nodeType&&(!a||j.tagName.toUpperCase()===a)&&!(j.sourceIndex in g))&&k){l=-1;for(e=" "+j.className+" ";p[++l]&&d;)d=!!~e.indexOf(p[l])}d&&(f.push(j),g[j.sourceIndex]=
s)}k=w;a=""}e=""}if(f.length&&(a||k||n||v||i||e)){q=-1;for(k&&(p=J.call(p.slice(1),P));j=f[++q];){d=!(i&&j.id!=i);b=j.tagName.toUpperCase();if(d&&k){l=-1;for(e=" "+j.className+" ";p[++l]&&d;)d=!!~e.indexOf(p[l])}d&&a&&(d=b===a);if(d&&n){l=-1;if("string"==typeof n){for(n=J.call(n,"][");u=n[++l];){u=n[l]=u.replace(Ca,"~=").match(Da);g=u[1];if("'"===(x=g.charAt(0))||'"'===x&&g.substr(-1)===x)g=u[1]=X.call(g,1,g.length-2);"all"in document&&("class"==g?u[1]="className":"for"==g&&(u[1]="htmlFor"));if((g=
u[3])&&("'"===(x=g.charAt(0))||'"'===x&&g.substr(-1)===x))u[3]=X.call(g,1,g.length-2)}l=-1}for(;d&&(u=n[++l]);)switch(g=j.getAttribute(u[1]),"A"===b&&"href"===u[1]&&(g=g.replace(location.protocol+"//"+location.host+location.pathname,"")),d=u[3],u[2]){default:d=!!g||""===g;break;case "=":d=g&&g===d;break;case "&=":d=g&&RegExp("(^| +)"+d+"($| +)").test(g);break;case "^=":d=g&&!g.indexOf(d);break;case "$=":d=g&&g.indexOf(d)==g.length-d.length;break;case "*=":d=g&&~g.indexOf(d);break;case "|=":d=g&&(g===
d||!!g.indexOf(d+"-"));break;case "!=":d=!g||!RegExp("(^| +)"+d+"($| +)").test(g);break;case "~=":d=g&&!!~(" "+g.replace(Ea," ")+" ").indexOf(" "+d+" ")}}if(d&&v)switch("string"==typeof v&&(v=v.match(Fa),v[2]&&(r=/\D/.test(v[2])?"even"===v[2]?[t,2]:"odd"===v[2]?[t,2,"%",1]:v[2].replace(Ga,"($1%$2)").match(Ha):[t,0,"%",v[2]])),v[1]){case "first-child":d=j.parentNode.getElementsByTagName("*")[0]==j;break;case "last-child":for(;(j=j.nextSibling)&&1!=j.nodeType;);d=!j;break;case "root":d="HTML"==b;break;
case "nth-child":l=r;b=j.nodeIndex||0;x=l[3]?("%"===l[2]?-1:1)*l[3]:0;g=l[1];if(b)d=!g?!(b+x):!((b+x)%g);else{d=w;l=j.parentNode.firstChild;do if(1==l.nodeType&&(l.nodeIndex=++b)&&j===l&&(!g?!(b+x):!((b+x)%g)))d=s;while(!d&&(l=l.nextSibling))}break;case "nth-last-child":l=r;b=j.nodeIndexLast||0;x=l[3]?("%"===l[2]?-1:1)*l[3]:0;g=l[1];if(b)d=!g?!(b+x):!((b+x)%g);else{d=w;l=j.parentNode.lastChild;do if(1==l.nodeType&&(l.nodeIndexLast=++b)&&j===l&&(!g?!(b+x):!((b+x)%g)))d=s;while(!d&&(l=l.previousSibling))}break;
case "empty":d=!j.firstChild;break;case "only-child":d=1==j.parentNode.getElementsByTagName("*").length;break;case "checked":d=!!j.checked;break;case "lang":d=j.lang==r||y.lang==r;break;case "enabled":d=!j.disabled&&"hidden"!==j.type;break;case "disabled":d=!!j.disabled;break;case "selected":d=j.parentNode.selectedIndex&&!!j.selected}if(d){if(c)return[j]}else Ia.call(f,q--,1)}}return f}function ja(a){return Q.call(this,a,s)[0]||t}function ka(a){if(!a)return w;if("*"===a||this===y&&":root"===a||this===
document.body&&"body"===a)return s;var a=M.call(a.replace(la,"$1")),b=Y.test(a)||Z.test(a),f=!b&&!/([,>+~\s])/.test(a),c=w,d;if(b)switch(a=M.call(a),a.charAt(0)){case "#":return this.id===a.slice(1);case ".":c=s;d=-1;a=J.call(a.slice(1),".");for(b=" "+this.className+" ";a[++d]&&c;)c=!!~b.indexOf(" "+a[d]+" ");return c;default:return this.tagName&&this.tagName.toUpperCase()===a.toUpperCase()}else{if(f)return a=ia(a,t,[this]),a[0]===this;a=Q.call(this.ownerDocument,a);for(d in a)if(D(a,d)&&(c=a[d]===
this))return s;return w}}function ma(){document.removeEventListener("DOMContentLoaded",ma,w);R&&(document.readyState="interactive");F&&F()}function na(){c.detachEvent("onload",na);R&&(document.readyState="complete");F&&F()}var z;z=(z=/msie (\d+)/i.exec(navigator.userAgent))&&+z[1]||o;c.Element||((c.Element=ActiveXObject).prototype.ie=s);c.HTMLElement||(c.HTMLElement=c.Element);c.Node||(c.Node=c.Element);var k;c.DocumentFragment||(c.DocumentFragment=c.Document||c.HTMLDocument||(k={},k.prototype={},
k));c.Document||(c.Document=c.DocumentFragment);var n=c._=[],oa={},$=document.createDocumentFragment,ha=document.createElement,aa=document.createTextNode,y=document.documentElement,M=String.prototype.trim||(String.prototype.trim=function(){for(var a=this.replace(Ja,""),b=Ka,f=a.length;b.test(a.charAt(--f)););return a.slice(0,f+1)}),J=String.prototype.split,X=String.prototype.substr,pa=Array.prototype.slice,Ia=Array.prototype.splice,L=Function.prototype.apply,q=Function.prototype.call,N=Function.prototype.bind||
function(a,b){var f=this,c=pa.call(arguments,1);return function(){return L.call(f,a,c.concat(pa.call(arguments)))}},D=N.call(Function.prototype.call,Object.prototype.hasOwnProperty);k=document.createElement("p");var e,h=c.Node.prototype,r=c.Element.prototype,qa=h.contains||k.contains,ea=Date,La=/^\<([\w\:\-]*)[\>\ ]/i,Ka=/\s/,Ja=/^\s\s*/,B,A,V="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),S,Ma=0,G="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",
T=G.split("|"),ga=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,i,E,H,ra;document.head||(document.head=document.getElementsByTagName("head")[0]);document.defaultView||(document.defaultView=c);c.Event||(c.Event={});S=c.Event.prototype||(c.Event.prototype={});C(S,{preventDefault:function(){this.returnValue=w},stopPropagation:function(){this.cancelBubble=
s},stopImmediatePropagation:function(){this.__stopNow=s;this.stopPropagation()}});B=w;try{B=isNaN.apply(t,{})}catch(Sa){}B||(Function.prototype.apply=function(a,b){try{return b!=o?L.call(this,a,b):L.call(this,a)}catch(f){if(f.number!=-2146823260||b.length===o||typeof b==="string")throw f;return L.call(this,a,Array.from(b))}});"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return X.call(this,a<0?(a=this.length+a)<0?0:a:a,b)});if("te".split(/(s)*/)[1]!=o||3!="1_1".split(/(_)/).length)B=
/()??/.exec("")[1]===o,String.prototype.split=function(a,b){var f=this;if(!(a instanceof RegExp))return a===o&&b===0?[]:J.call(f,a,b);var c=[],d=0,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.n?"y":""),g=RegExp(a.source,h+"g"),j=t,e,i,f=f+"";B||(j=RegExp("^"+g.source+"$(?!\\s)",h));if(b===o||+b<0)b=Infinity;else{b=Math.floor(+b);if(!b)return[]}for(;e=g.exec(f);){h=e.index+e[0].length;if(h>d){c.push(f.slice(d,e.index));!B&&e.length>1&&e[0].replace(j,function(){for(var a=1,b=arguments,f=b.length-
2;a<f;a++)b[a]===o&&(e[a]=o)});e.length>1&&e.index<f.length&&c.push.apply(c,e.slice(1));i=e[0].length;d=h;if(c.length>=b)break}g.lastIndex===e.index&&g.lastIndex++}d===f.length?(i||!g.test(""))&&c.push(""):c.push(f.slice(d));return c.length>b?c.slice(0,b):c};c.DOMException||(e=(c.DOMException=function(){}).prototype=Error(),e.INDEX_SIZE_ERR=1,e.HIERARCHY_REQUEST_ERR=3,e.WRONG_DOCUMENT_ERR=4,e.INVALID_CHARACTER_ERR=5,e.NO_MODIFICATION_ALLOWED_ERR=7,e.NOT_FOUND_ERR=8,e.NOT_SUPPORTED_ERR=9,e.INVALID_STATE_ERR=
11,e.SYNTAX_ERR=12,e.INVALID_MODIFICATION_ERR=13,e.NAMESPACE_ERR=14,e.INVALID_ACCESS_ERR=15,e.TYPE_MISMATCH_ERR=17);"pageXOffset"in c||n.push(function(){var a=document.compatMode==="CSS1Compat"?function(){return document.body.parentNode.scrollTop}:function(){return document.body.scrollTop};Object.defineProperty(c,"pageXOffset",{get:document.compatMode==="CSS1Compat"?function(){return document.body.parentNode.scrollLeft}:function(){return document.body.scrollLeft}});Object.defineProperty(c,"pageYOffset",
{get:a})});document.addEventListener||(h.addEventListener=c.addEventListener=document.addEventListener=function(a,b){if(typeof b=="function"||typeof b==="object"&&b.handleEvent){var f=this,e=f._,d,h=w;e||(e=f._={});if(a==="DOMContentLoaded"){if(document.readyState=="complete")return;f===c&&(f=document);h=s;if(!oa[a]){oa[a]=s;var g=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(g,50);return}K.call(f,{type:a})};if("createEventObject"in document&&"doScroll"in document.documentElement){try{d=
!c.frameElement}catch(j){}d&&g()}}}else if(a==="load"&&"tagName"in f&&f.tagName.toUpperCase()==="SCRIPT"){h=s;f.onreadystatechange=function(){if(f.readyState==="loaded"){f.onreadystatechange=t;f.attachEvent("onreadystatechange",N.call(K,f,{type:a}))}};a="readystatechange"}else a==="DOMMouseScroll"&&(a="mousewheel");f.setInterval&&(f!=c&&!f.frameElement)&&(f=c);b.uuid||(b.uuid=++Ma);if(!(d=e._h_9e2))d=e._h_9e2=N.call(K,f);e._e_8vj||(e._e_8vj={});if(!e._e_8vj[a]){e._e_8vj[a]={};h||f.attachEvent("on"+
a,d)}e._e_8vj[a][b.uuid]=b}});document.removeEventListener||(h.removeEventListener=c.removeEventListener=document.removeEventListener=function(a,b){var f=this._;if(!(typeof b!="function"||!b.a||!f)){var c=f._e_8vj&&f._e_8vj[a];delete c[b.a];for(var d in c)if(D(c,d))return;this.detachEvent("on"+a,K);delete f._e_8vj[a];for(d in f._e_8vj)if(D(f._e_8vj,d))return;delete f._e_8vj}});document.dispatchEvent||(h.dispatchEvent=c.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return s;try{return this.fireEvent("on"+
a.type,a)}catch(b){if(b.number===-2147024809||this===c){a.__custom_event=s;for(var f=a.target=this;!a.cancelBubble&&f;){"_"in f&&"_e_8vj"in f._&&K.call(f,a);f=a.bubbles?f===document?document.defaultView:f.parentNode:t}return!a.cancelBubble}throw b;}});if(!document.createEvent){var sa=function(a,b,f){if(a==o||b==o||f==o)throw Error("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=f;this.target=t;if(!this.timeStamp)this.timeStamp=+new ea},ta=function(a,b,f,c){sa.call(this,a,b,f);this.detail=
c},ua=function(a,b,f,c,d){ta.call(this,a,b,f,d);this.view=c},Na=function(a,b,f,c,d,e,g,h,i,k,n,p,q,r,u){ua.call(this,a,b,f,c,d);this.screenX=e;this.screenY=g;this.clientX=h;this.clientY=i;this.ctrlKey=k;this.altKey=n;this.shiftKey=p;this.metaKey=q;this.button=r;this.relatedTarget=u};document.createEvent=function(){var a;a=document.createEventObject();a.returnValue=s;a.initEvent=sa;a.initCustomEvent=ta;a.initUIEvent=ua;a.initMouseEvent=Na;return a}}e=q.call(aa,document,"temp");k.appendChild(e);try{k.contains(e),
B=w}catch(Ta){B=s,h.contains=function(a){return a.nodeType===3?ba(this.childNodes,function(b){if(b===a)return s})||w:q.call(qa,this,a)}}document.doctype===t&&7<z&&n.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:s,enumerable:w,get:function(){return a}})});h.contains||(h.contains=qa);q.call(aa,document).contains||(c.Text&&c.Text.prototype?n.push(N.call(C,t,Text.prototype,h)):document.createTextNode=
function(a){a=q.call(aa,this,a);a.contains=h.contains;return a});!q.call($,document).contains&&(c.HTMLDocument&&c.HTMLDocument.prototype)&&n.push(N.call(C,t,c.HTMLDocument.prototype,h));(!("children"in k)||9>z)&&n.push(function(){Object.defineProperty(r,"children",{get:function(){for(var a=[],b=this.firstChild;b;){b.nodeType==1&&a.push(b);b=b.nextSibling}return a}})});9>z&&n.push(function(){function a(a,f){var c;try{var d=a.getBoundingClientRect(),e=document.body,g=y;c=f?Math.round(d.left+(window.pageXOffset||
g.scrollLeft||e.scrollLeft)-(g.clientLeft||e.clientLeft||0)):Math.round(d.top+(window.pageYOffset||g.scrollTop||e.scrollTop)-(g.clientTop||e.clientTop||0))}catch(h){c=a;d=0;for(e=f?"offsetLeft":"offsetTop";c;){d=d+parseInt(c[e],10);c=c.offsetParent}c=d}return c}Object.defineProperties(r,{offsetLeft:{get:function(){return a(this,s)}},offsetTop:{get:function(){return a(this)}}})});k.childElementCount==o&&n.push(function(){Object.defineProperties(r,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&
a.nodeType!=1;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&a.nodeType!=1;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;a=a.nextSibling;)if(a.nodeType==1)break;return a}},previousElementSibling:{get:function(){for(var a=this;a=a.previousSibling;)if(a.nodeType==1)break;return a}}})});document.ELEMENT_NODE||(e={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,
DOCUMENT_FRAGMENT_NODE:11},C(document,e),C(h,e),C(c.Node,e));"textContent"in k||n.push(function(){Object.defineProperty(h,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});"isEqualNode"in k||(document.isEqualNode=y.isEqualNode=h.isEqualNode=function(a){var b,f;if(a===t||a.nodeType!==this.nodeType||
a.nodeType===10&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return w;if(a.nodeType===1){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return w;b=0;for(f=this.attributes.length;b<f;b++){var c=this.attributes[length],d=a.getAttributeNS(c.namespaceURI,c.localName);if(d===t||d.value!==c.value)return w}}if(a.nodeType===7&&(this.target!==a.target||this.data!==a.data)||(a.nodeType===3||a.nodeType===8)&&this.data!==a.data||a.childNodes.length!==
this.childNodes.length)return w;b=0;for(f=a.childNodes.length;b<f;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===w)return w;return s});document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var f=document.createElement(a.nodeName),c=a.attributes,d,e,g;if(c&&c.length>0){e=0;for(g=c.length;e<g;){c=a.attributes[e++];f.setAttribute(c.nodeName,a.getAttribute(c.nodeName))}}if(b&&(d=a.childNodes)&&d.length>0){e=0;for(g=d.length;e<g;)f.appendChild(document.importNode(d[e++],
b))}return f;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}ca("NOT_SUPPORTED_ERR");return t},document.importNode.shim=s);n="getElementsByClassName";e=r[n]||document.querySelectorAll?function(a){return!a||!(a=M.call(a))?[]:(this.querySelectorAll||document.querySelectorAll).call(this,a.replace(/\s+(?=\S)|^/g,"."))}:function(a){for(var a=RegExp(a.replace(/\s*(\S+)\s*/g,"(?=(^|.*\\s)$1(\\s|$))")),b=this.all,c,e=-1,d=[];c=b[++e];)a.test(c.className||"")&&d.push(c);return d};n in k||
(r[n]=e);document[n]||(y[n]=document[n]=e);n="compareDocumentPosition";n in document||(e=i||"DOCUMENT_POSITION_",y[n]=document[n]=h[n]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(this.sourceIndex>=0&&a.sourceIndex>=0?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0},i="DISCONNECTED",y[e+i]=document[e+i]=h[e+i]=1,i="PRECEDING",y[e+i]=document[e+i]=h[e+i]=2,i="FOLLOWING",y[e+i]=document[e+i]=h[e+i]=4,i="CONTAINS",y[e+
i]=document[e+i]=h[e+i]=8,i="CONTAINED_BY",y[e+i]=document[e+i]=h[e+i]=16);c.getComputedStyle||(c.getComputedStyle=function(a){return a.currentStyle});9>z&&(document.createDocumentFragment=function(){var a=q.call($,this);c.DocumentFragment===c.Document&&C(a,c.DocumentFragment.prototype);return U(a)});i=(k.innerHTML="<x-x></x-x>",1===k.childNodes.length);G="|"+G+"|";E=U(q.call($,document));i||U(document);0===q.call(ha,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(H=E.appendChild(E.createElement("div")),
ra=8===z?k.cloneNode:8>z?h.cloneNode:o,h.cloneNode=function(a){var b,c;if(ga.test(this.nodeName))b=q.call(this.__nativeCloneNode__||ra,this,a);else{H.innerHTML="";c=a?this.outerHTML:this.outerHTML.replace(this.innerHTML,"");H.innerHTML=c.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1");b=H.firstChild;if(!b&&!a){(c=c.match(La))&&(c=c[1]);if(c){E.createElement(c);H.innerHTML=c;b=H.firstChild}}}return E.appendChild(b)});document.querySelectorAll&&za();k=e=B=n=A=e=e=V=i=o;if(h.ie||!(7<z)){var R=
!document.readyState,I=["/a.ielt8.htc"];k="{behavior:";var va=[],wa,xa,ya,W=document.getElementsByClassName,F,Oa=c.scrollTo,Pa=c.scrollBy,Y=/^\s?[\w#\.][\w-]*$/,Z=/^\s?(\.[\w-]*)+$/,la=/\s*([,>+~\s])\s*/g,Qa=/\~\=/g,Ca=/\|\-\|\=/g,Ra=/(^[>+~\s]?|,|\>|\+|~| ).*?(?=[,>+~\s]|$)/g,P=/\./g,Ea=/\s/g,Da=/^\[?(.*?)(?:([\*~&\^\$\|!]?=)(.*?))?\]?$/,Ba=/^([,>+~\s])?(\w*)(?:|\*)\#?([\w\-]*)((?:\.?[\w\-])*)(\[.*?\])?\:?([\w\-\+\%\(\)]*)$/,Fa=/^([^(]+)(?:\(([^)]+)\))?$/,Ga=/\((\dn)\+(\d)\)/,Ha=/(?:([-]?\d*)n)?(?:(%|-)(\d*))?/;
for(A=I.length;0<=--A;)k+=' url("'+I[A]+'")';k+="}";R&&(document.readyState="uninitialized");h.ielt8=s;c.__ielt8__wontfix=va;var Q=function(a,b){var c=this,e,a=M.call(a.replace(la,"$1"));if(Y.test(a)||Z.test(a))switch(a.charAt(0)){case "#":a=a.slice(1);(e=c.getElementById?c.getElementById(a):document.getElementById(a))&&(z<9&&e.id!==a)&&(e=c.ownerDocument.all[a]);return e&&[e]||[];case ".":return W.call(c,a.slice(1).replace(P," "));default:return Array.from(c.getElementsByTagName(a))}var d=[],h=(a+
",").replace(Qa,"|-|").match(Ra),g,j=-1,i=[c],k,n,p,q,r,u;for(p=s;g=h[++j];)if(u)u=w;else{r=h[j+1];u=!r||r.charAt(0)===",";if(!(c=i)||i.length===0)i=t;else if(Y.test(g)||Z.test(g)){k=-1;i=[];for(g=M.call(g);e=c[++k];)switch(g.charAt(0)){case "#":g=g.slice(1);(p=e.getElementById?e.getElementById(g):document.getElementById(g))&&(z<9&&p.id!==g)&&(p=p.ownerDocument.all[g]);i.push(p);break;case ".":p=W.call(e,g.slice(1).replace(P," "));for(e=-1;q=p[++e];)i.push(q);break;default:p=e.getElementsByTagName(g);
for(e=-1;q=p[++e];)i.push(q)}}else i=p&&g===":root"?[y]:ia(g,c,t,b&&u);if((p=u)&&i){if(b&&i.length)return i;r&&r.length>1&&(n={});for(k=-1;e=i[++k];)if(n){if(!(e.sourceIndex in n)){n[e.sourceIndex]=s;d.push(e)}}else d.push(e)}}return d};document.querySelectorAll||(document.querySelectorAll=Q);document.querySelector||(document.querySelector=ja);y.matchesSelector||(y.matchesSelector=ka);h.hasAttribute||(h.hasAttribute=function(a){return this.getAttribute(a)!==t});i=function(a){return function(){return a}};
h.c=i(1);h.g=i(2);h.h=i(3);h.i=i(4);h.j=i(7);h.k=i(8);h.l=i(9);h.d=i(10);h.e=i(11);h.f=i(16);h.__ielt8__element_init__=function(){var a=this;a.element&&(a=a.element);a.after||(a.after=r.after);a.before||(a.before=r.before);a.append||(a.append=r.append);a.prepend||(a.prepend=r.prepend);a.replace||(a.replace=r.replace);a.remove||(a.remove=r.remove);if(!a.isEqualNode)a.isEqualNode=h.isEqualNode;if(!a.compareDocumentPosition)a.compareDocumentPosition=h.compareDocumentPosition;if(!a.getElementsByClassName)a.getElementsByClassName=
r.getElementsByClassName;if(!a.addEventListener)a.addEventListener=window.addEventListener;if(!a.removeEventListener)a.removeEventListener=window.removeEventListener;if(!a.dispatchEvent)a.dispatchEvent=window.dispatchEvent;if(!a.querySelectorAll)a.querySelectorAll=Q;if(!a.querySelector)a.querySelector=ja;if(!a.matchesSelector)a.matchesSelector=ka;if(!a.hasAttribute)a.hasAttribute=r.hasAttribute;try{if(a.cloneNode!==h.cloneNode){a.__nativeCloneNode__=a.cloneNode;a.cloneNode=h.cloneNode}if(h.contains)a.contains=
h.contains}catch(b){}a.cloneNode!==h.cloneNode&&va.push(a)};ya=h.__ielt8_Node_behavior_apply=function(a){for(A=I.length;--A>=0;)a.addBehavior(I[A])};xa=h.cloneNode;h.cloneNode=function(a){a=q.call(xa||this.__nativeCloneNode__,this,a);ya(a);return a};wa=document.createElement;document.createElement=function(a){a=q.call(wa,document,a);for(A=I.length;--A>=0;)a.addBehavior(I[A]);return a};c.XMLHttpRequest||(c.XMLHttpRequest=function(){return ActiveXObject("Microsoft.XMLHTTP")});!("pageXOffset"in c)&&
c.attachEvent&&(c.pageXOffset=c.pageYOffset=0,F="CSS1Compat"===document.compatMode?function(){c.scrollX=c.pageXOffset=document.body.parentNode.scrollLeft;c.scrollY=c.pageYOffset=document.body.parentNode.scrollTop}:function(){c.scrollX=c.pageXOffset=document.body.scrollLeft;c.scrollY=c.pageYOffset=document.body.scrollTop},c.attachEvent("onscroll",F),c.scroll=c.scrollTo=function(a,b){Oa(a,b);F()},c.scrollBy=function(a,b){Pa(a,b);F()});document.addEventListener("DOMContentLoaded",ma,w);c.attachEvent("onload",
na);Aa(k);R=k=A=o}})(window);