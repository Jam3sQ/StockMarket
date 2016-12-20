(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var moment = require('moment'); 

var $ = require('jquery'); 
var Highcharts = require('highcharts/highstock'); 

$(function () {

    $.getJSON('https://www.quandl.com/api/v3/datasets/WIKI/YHOO/data.json', function (data) {
        // console.log(data.dataset_data.data.length);
        var rawDataPoints = data.dataset_data.data; 
        var dataPoints = rawDataPoints.map(function(value){
            var date = moment(moment(value[0], "YYYY-MM-DD").unix()*1000);
            return [date._i, value[4]]; 
        })

        dataPoints.sort(function(a,b){
            return  a[0] - b[0]; 
        })
        // console.log(moment(moment(data.dataset_data.data[0][0], "YYYY-MM-DD").unix()*1000)._i);
        // console.table(dataPoints); 

        // Create the chart
        Highcharts.stockChart('container', {

            title: {
                text: 'Yahoo Stock Price'
            },

            series: [{
                data: dataPoints,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });

    });

});

},{"highcharts/highstock":2,"jquery":3,"moment":4}],2:[function(require,module,exports){
/*
 Highstock JS v5.0.6 (2016-12-07)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(K,a){"object"===typeof module&&module.exports?module.exports=K.document?a(K):a:K.Highcharts=a(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,B=a.document,C=a.navigator&&a.navigator.userAgent||"",E=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,F=/(edge|msie|trident)/i.test(C)&&!window.opera,v=!E,l=/Firefox/.test(C),q=l&&4>parseInt(C.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",
version:"5.0.6",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:q,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:F,isWebKit:/AppleWebKit/.test(C),isFirefox:l,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(C),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:E,vml:v,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var B=[],C=a.charts,E=a.doc,F=a.win;a.error=function(v,l){v=a.isNumber(v)?"Highcharts error #"+
v+": www.highcharts.com/errors/"+v:v;if(l)throw Error(v);F.console&&console.log(v)};a.Fx=function(a,l,q){this.options=l;this.elem=a;this.prop=q};a.Fx.prototype={dSetter:function(){var a=this.paths[0],l=this.paths[1],q=[],x=this.now,t=a.length,n;if(1===x)q=this.toD;else if(t===l.length&&1>x)for(;t--;)n=parseFloat(a[t]),q[t]=isNaN(n)?a[t]:x*parseFloat(l[t]-n)+n;else q=l;this.elem.attr("d",q,null,!0)},update:function(){var a=this.elem,l=this.prop,q=this.now,x=this.options.step;if(this[l+"Setter"])this[l+
"Setter"]();else a.attr?a.element&&a.attr(l,q,null,!0):a.style[l]=q+this.unit;x&&x.call(a,q,this)},run:function(a,l,q){var v=this,t=function(a){return t.stopped?!1:v.step(a)},n;this.startTime=+new Date;this.start=a;this.end=l;this.unit=q;this.now=this.start;this.pos=0;t.elem=this.elem;t.prop=this.prop;t()&&1===B.push(t)&&(t.timerId=setInterval(function(){for(n=0;n<B.length;n++)B[n]()||B.splice(n--,1);B.length||clearInterval(t.timerId)},13))},step:function(a){var l=+new Date,v,x=this.options;v=this.elem;
var t=x.complete,n=x.duration,h=x.curAnim,b;if(v.attr&&!v.element)v=!1;else if(a||l>=n+this.startTime){this.now=this.end;this.pos=1;this.update();a=h[this.prop]=!0;for(b in h)!0!==h[b]&&(a=!1);a&&t&&t.call(v);v=!1}else this.pos=x.easing((l-this.startTime)/n),this.now=this.start+(this.end-this.start)*this.pos,this.update(),v=!0;return v},initPath:function(v,l,q){function x(a){var e,f;for(d=a.length;d--;)e="M"===a[d]||"L"===a[d],f=/[a-zA-Z]/.test(a[d+3]),e&&f&&a.splice(d+1,0,a[d+1],a[d+2],a[d+1],a[d+
2])}function t(a,e){for(;a.length<p;){a[0]=e[p-a.length];var f=a.slice(0,u);[].splice.apply(a,[0,0].concat(f));r&&(f=a.slice(a.length-u),[].splice.apply(a,[a.length,0].concat(f)),d--)}a[0]="M"}function n(a,e){for(var f=(p-a.length)/u;0<f&&f--;)m=a.slice().splice(a.length/G-u,u*G),m[0]=e[p-u-f*u],A&&(m[u-6]=m[u-2],m[u-5]=m[u-1]),[].splice.apply(a,[a.length/G,0].concat(m)),r&&f--}l=l||"";var h,b=v.startX,g=v.endX,A=-1<l.indexOf("C"),u=A?7:3,p,m,d;l=l.split(" ");q=q.slice();var r=v.isArea,G=r?2:1,f;
A&&(x(l),x(q));if(b&&g){for(d=0;d<b.length;d++)if(b[d]===g[0]){h=d;break}else if(b[0]===g[g.length-b.length+d]){h=d;f=!0;break}void 0===h&&(l=[])}l.length&&a.isNumber(h)&&(p=q.length+h*G*u,f?(t(l,q),n(q,l)):(t(q,l),n(l,q)));return[l,q]}};a.extend=function(a,l){var v;a||(a={});for(v in l)a[v]=l[v];return a};a.merge=function(){var v,l=arguments,q,x={},t=function(n,h){var b,g;"object"!==typeof n&&(n={});for(g in h)h.hasOwnProperty(g)&&(b=h[g],a.isObject(b,!0)&&"renderTo"!==g&&"number"!==typeof b.nodeType?
n[g]=t(n[g]||{},b):n[g]=h[g]);return n};!0===l[0]&&(x=l[1],l=Array.prototype.slice.call(l,2));q=l.length;for(v=0;v<q;v++)x=t(x,l[v]);return x};a.pInt=function(a,l){return parseInt(a,l||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(v,l){return v&&"object"===typeof v&&(!l||!a.isArray(v))};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=
function(a,l){for(var v=a.length;v--;)if(a[v]===l){a.splice(v,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(v,l,q){var x,t;if(a.isString(l))a.defined(q)?v.setAttribute(l,q):v&&v.getAttribute&&(t=v.getAttribute(l));else if(a.defined(l)&&a.isObject(l))for(x in l)v.setAttribute(x,l[x]);return t};a.splat=function(v){return a.isArray(v)?v:[v]};a.syncTimeout=function(a,l,q){if(l)return setTimeout(a,l,q);a.call(0,q)};a.pick=function(){var a=arguments,l,q,x=a.length;for(l=
0;l<x;l++)if(q=a[l],void 0!==q&&null!==q)return q};a.css=function(v,l){a.isMS&&!a.svg&&l&&void 0!==l.opacity&&(l.filter="alpha(opacity\x3d"+100*l.opacity+")");a.extend(v.style,l)};a.createElement=function(v,l,q,x,t){v=E.createElement(v);var n=a.css;l&&a.extend(v,l);t&&n(v,{padding:0,border:"none",margin:0});q&&n(v,q);x&&x.appendChild(v);return v};a.extendClass=function(v,l){var q=function(){};q.prototype=new v;a.extend(q.prototype,l);return q};a.pad=function(a,l,q){return Array((l||2)+1-String(a).length).join(q||
0)+a};a.relativeLength=function(a,l){return/%$/.test(a)?l*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,l,q){var v=a[l];a[l]=function(){var a=Array.prototype.slice.call(arguments),n=arguments,h=this;h.proceed=function(){v.apply(h,arguments.length?arguments:n)};a.unshift(v);a=q.apply(this,a);h.proceed=null;return a}};a.getTZOffset=function(v){var l=a.Date;return 6E4*(l.hcGetTimezoneOffset&&l.hcGetTimezoneOffset(v)||l.hcTimezoneOffset||0)};a.dateFormat=function(v,l,q){if(!a.defined(l)||isNaN(l))return a.defaultOptions.lang.invalidDate||
"";v=a.pick(v,"%Y-%m-%d %H:%M:%S");var x=a.Date,t=new x(l-a.getTZOffset(l)),n,h=t[x.hcGetHours](),b=t[x.hcGetDay](),g=t[x.hcGetDate](),A=t[x.hcGetMonth](),u=t[x.hcGetFullYear](),p=a.defaultOptions.lang,m=p.weekdays,d=p.shortWeekdays,r=a.pad,x=a.extend({a:d?d[b]:m[b].substr(0,3),A:m[b],d:r(g),e:r(g,2," "),w:b,b:p.shortMonths[A],B:p.months[A],m:r(A+1),y:u.toString().substr(2,2),Y:u,H:r(h),k:h,I:r(h%12||12),l:h%12||12,M:r(t[x.hcGetMinutes]()),p:12>h?"AM":"PM",P:12>h?"am":"pm",S:r(t.getSeconds()),L:r(Math.round(l%
1E3),3)},a.dateFormats);for(n in x)for(;-1!==v.indexOf("%"+n);)v=v.replace("%"+n,"function"===typeof x[n]?x[n](l):x[n]);return q?v.substr(0,1).toUpperCase()+v.substr(1):v};a.formatSingle=function(v,l){var q=/\.([0-9])/,x=a.defaultOptions.lang;/f$/.test(v)?(q=(q=v.match(q))?q[1]:-1,null!==l&&(l=a.numberFormat(l,q,x.decimalPoint,-1<v.indexOf(",")?x.thousandsSep:""))):l=a.dateFormat(v,l);return l};a.format=function(v,l){for(var q="{",x=!1,t,n,h,b,g=[],A;v;){q=v.indexOf(q);if(-1===q)break;t=v.slice(0,
q);if(x){t=t.split(":");n=t.shift().split(".");b=n.length;A=l;for(h=0;h<b;h++)A=A[n[h]];t.length&&(A=a.formatSingle(t.join(":"),A));g.push(A)}else g.push(t);v=v.slice(q+1);q=(x=!x)?"}":"{"}g.push(v);return g.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(v,l,q,x,t){var n,h=v;q=a.pick(q,1);n=v/q;l||(l=t?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===x&&(1===q?l=a.grep(l,function(a){return 0===a%1}):.1>=q&&(l=[1/q])));
for(x=0;x<l.length&&!(h=l[x],t&&h*q>=v||!t&&n<=(l[x]+(l[x+1]||l[x]))/2);x++);return h*q};a.stableSort=function(a,l){var q=a.length,v,t;for(t=0;t<q;t++)a[t].safeI=t;a.sort(function(a,h){v=l(a,h);return 0===v?a.safeI-h.safeI:v});for(t=0;t<q;t++)delete a[t].safeI};a.arrayMin=function(a){for(var l=a.length,q=a[0];l--;)a[l]<q&&(q=a[l]);return q};a.arrayMax=function(a){for(var l=a.length,q=a[0];l--;)a[l]>q&&(q=a[l]);return q};a.destroyObjectProperties=function(a,l){for(var q in a)a[q]&&a[q]!==l&&a[q].destroy&&
a[q].destroy(),delete a[q]};a.discardElement=function(v){var l=a.garbageBin;l||(l=a.createElement("div"));v&&l.appendChild(v);l.innerHTML=""};a.correctFloat=function(a,l){return parseFloat(a.toPrecision(l||14))};a.setAnimation=function(v,l){l.renderer.globalAnimation=a.pick(v,l.options.chart.animation,!0)};a.animObject=function(v){return a.isObject(v)?a.merge(v):{duration:v?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=
function(v,l,q,x){v=+v||0;l=+l;var t=a.defaultOptions.lang,n=(v.toString().split(".")[1]||"").length,h,b,g=Math.abs(v);-1===l?l=Math.min(n,20):a.isNumber(l)||(l=2);h=String(a.pInt(g.toFixed(l)));b=3<h.length?h.length%3:0;q=a.pick(q,t.decimalPoint);x=a.pick(x,t.thousandsSep);v=(0>v?"-":"")+(b?h.substr(0,b)+x:"");v+=h.substr(b).replace(/(\d{3})(?=\d)/g,"$1"+x);l&&(x=Math.abs(g-h+Math.pow(10,-Math.max(l,n)-1)),v+=q+x.toFixed(l).slice(2));return v};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*
a)-1)};a.getStyle=function(v,l){return"width"===l?Math.min(v.offsetWidth,v.scrollWidth)-a.getStyle(v,"padding-left")-a.getStyle(v,"padding-right"):"height"===l?Math.min(v.offsetHeight,v.scrollHeight)-a.getStyle(v,"padding-top")-a.getStyle(v,"padding-bottom"):(v=F.getComputedStyle(v,void 0))&&a.pInt(v.getPropertyValue(l))};a.inArray=function(a,l){return l.indexOf?l.indexOf(a):[].indexOf.call(l,a)};a.grep=function(a,l){return[].filter.call(a,l)};a.find=function(a,l){return[].find.call(a,l)};a.map=function(a,
l){for(var q=[],x=0,t=a.length;x<t;x++)q[x]=l.call(a[x],a[x],x,a);return q};a.offset=function(a){var l=E.documentElement;a=a.getBoundingClientRect();return{top:a.top+(F.pageYOffset||l.scrollTop)-(l.clientTop||0),left:a.left+(F.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}};a.stop=function(a,l){for(var q=B.length;q--;)B[q].elem!==a||l&&l!==B[q].prop||(B[q].stopped=!0)};a.each=function(a,l,q){return Array.prototype.forEach.call(a,l,q)};a.addEvent=function(v,l,q){function x(a){a.target=a.srcElement||
F;q.call(v,a)}var t=v.hcEvents=v.hcEvents||{};v.addEventListener?v.addEventListener(l,q,!1):v.attachEvent&&(v.hcEventsIE||(v.hcEventsIE={}),v.hcEventsIE[q.toString()]=x,v.attachEvent("on"+l,x));t[l]||(t[l]=[]);t[l].push(q);return function(){a.removeEvent(v,l,q)}};a.removeEvent=function(v,l,q){function x(a,b){v.removeEventListener?v.removeEventListener(a,b,!1):v.attachEvent&&(b=v.hcEventsIE[b.toString()],v.detachEvent("on"+a,b))}function t(){var a,b;if(v.nodeName)for(b in l?(a={},a[l]=!0):a=h,a)if(h[b])for(a=
h[b].length;a--;)x(b,h[b][a])}var n,h=v.hcEvents,b;h&&(l?(n=h[l]||[],q?(b=a.inArray(q,n),-1<b&&(n.splice(b,1),h[l]=n),x(l,q)):(t(),h[l]=[])):(t(),v.hcEvents={}))};a.fireEvent=function(v,l,q,x){var t;t=v.hcEvents;var n,h;q=q||{};if(E.createEvent&&(v.dispatchEvent||v.fireEvent))t=E.createEvent("Events"),t.initEvent(l,!0,!0),a.extend(t,q),v.dispatchEvent?v.dispatchEvent(t):v.fireEvent(l,t);else if(t)for(t=t[l]||[],n=t.length,q.target||a.extend(q,{preventDefault:function(){q.defaultPrevented=!0},target:v,
type:l}),l=0;l<n;l++)(h=t[l])&&!1===h.call(v,q)&&q.preventDefault();x&&!q.defaultPrevented&&x(q)};a.animate=function(v,l,q){var x,t="",n,h,b;a.isObject(q)||(x=arguments,q={duration:x[2],easing:x[3],complete:x[4]});a.isNumber(q.duration)||(q.duration=400);q.easing="function"===typeof q.easing?q.easing:Math[q.easing]||Math.easeInOutSine;q.curAnim=a.merge(l);for(b in l)a.stop(v,b),h=new a.Fx(v,q,b),n=null,"d"===b?(h.paths=h.initPath(v,v.d,l.d),h.toD=l.d,x=0,n=1):v.attr?x=v.attr(b):(x=parseFloat(a.getStyle(v,
b))||0,"opacity"!==b&&(t="px")),n||(n=l[b]),n.match&&n.match("px")&&(n=n.replace(/px/g,"")),h.run(x,n,t)};a.seriesType=function(v,l,q,x,t){var n=a.getOptions(),h=a.seriesTypes;n.plotOptions[v]=a.merge(n.plotOptions[l],q);h[v]=a.extendClass(h[l]||function(){},x);h[v].prototype.type=v;t&&(h[v].prototype.pointClass=a.extendClass(a.Point,t));return h[v]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),l=0;return function(){return"highcharts-"+a+"-"+l++}}();F.jQuery&&(F.jQuery.fn.highcharts=
function(){var v=[].slice.call(arguments);if(this[0])return v[0]?(new (a[a.isString(v[0])?v.shift():"Chart"])(this[0],v[0],v[1]),this):C[a.attr(this[0],"data-highcharts-chart")]});E&&!E.defaultView&&(a.getStyle=function(v,l){var q={width:"clientWidth",height:"clientHeight"}[l];if(v.style[l])return a.pInt(v.style[l]);"opacity"===l&&(l="filter");if(q)return v.style.zoom=1,Math.max(v[q]-2*a.getStyle(v,"padding"),0);v=v.currentStyle[l.replace(/\-(\w)/g,function(a,t){return t.toUpperCase()})];"filter"===
l&&(v=v.replace(/alpha\(opacity=([0-9]+)\)/,function(a,t){return t/100}));return""===v?1:a.pInt(v)});Array.prototype.forEach||(a.each=function(a,l,q){for(var x=0,t=a.length;x<t;x++)if(!1===l.call(q,a[x],x,a))return x});Array.prototype.indexOf||(a.inArray=function(a,l){var q,x=0;if(l)for(q=l.length;x<q;x++)if(l[x]===a)return x;return-1});Array.prototype.filter||(a.grep=function(a,l){for(var q=[],x=0,t=a.length;x<t;x++)l(a[x],x)&&q.push(a[x]);return q});Array.prototype.find||(a.find=function(a,l){var q,
x=a.length;for(q=0;q<x;q++)if(l(a[q],q))return a[q]})})(K);(function(a){var B=a.each,C=a.isNumber,E=a.map,F=a.merge,v=a.pInt;a.Color=function(l){if(!(this instanceof a.Color))return new a.Color(l);this.init(l)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[v(a[1]),v(a[2]),v(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[v(a[1],
16),v(a[2],16),v(a[3],16),1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[v(a[1]),v(a[2]),v(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(l){var q,x,t,n;if((this.input=l=this.names[l]||l)&&l.stops)this.stops=E(l.stops,function(h){return new a.Color(h[1])});else for(t=this.parsers.length;t--&&!x;)n=this.parsers[t],(q=n.regex.exec(l))&&(x=n.parse(q));this.rgba=x||[]},get:function(a){var l=this.input,x=this.rgba,t;this.stops?
(t=F(l),t.stops=[].concat(t.stops),B(this.stops,function(n,h){t.stops[h]=[t.stops[h][0],n.get(a)]})):t=x&&C(x[0])?"rgb"===a||!a&&1===x[3]?"rgb("+x[0]+","+x[1]+","+x[2]+")":"a"===a?x[3]:"rgba("+x.join(",")+")":l;return t},brighten:function(a){var l,x=this.rgba;if(this.stops)B(this.stops,function(t){t.brighten(a)});else if(C(a)&&0!==a)for(l=0;3>l;l++)x[l]+=v(255*a),0>x[l]&&(x[l]=0),255<x[l]&&(x[l]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};a.color=function(l){return new a.Color(l)}})(K);
(function(a){var B,C,E=a.addEvent,F=a.animate,v=a.attr,l=a.charts,q=a.color,x=a.css,t=a.createElement,n=a.defined,h=a.deg2rad,b=a.destroyObjectProperties,g=a.doc,A=a.each,u=a.extend,p=a.erase,m=a.grep,d=a.hasTouch,r=a.isArray,G=a.isFirefox,f=a.isMS,z=a.isObject,e=a.isString,y=a.isWebKit,c=a.merge,w=a.noop,D=a.pick,I=a.pInt,L=a.removeEvent,k=a.stop,H=a.svg,R=a.SVG_NS,M=a.symbolSizes,O=a.win;B=a.SVGElement=function(){return this};B.prototype={opacity:1,SVG_NS:R,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textOutline".split(" "),
init:function(a,k){this.element="span"===k?t(k):g.createElementNS(this.SVG_NS,k);this.renderer=a},animate:function(k,c,e){c=a.animObject(D(c,this.renderer.globalAnimation,!0));0!==c.duration?(e&&(c.complete=e),F(this,k,c)):this.attr(k,null,e);return this},colorGradient:function(k,J,e){var f=this.renderer,N,b,w,d,m,H,D,z,p,y,u,g=[],h;k.linearGradient?b="linearGradient":k.radialGradient&&(b="radialGradient");if(b){w=k[b];m=f.gradients;D=k.stops;y=e.radialReference;r(w)&&(k[b]=w={x1:w[0],y1:w[1],x2:w[2],
y2:w[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===b&&y&&!n(w.gradientUnits)&&(d=w,w=c(w,f.getRadialAttr(y,d),{gradientUnits:"userSpaceOnUse"}));for(u in w)"id"!==u&&g.push(u,w[u]);for(u in D)g.push(D[u]);g=g.join(",");m[g]?y=m[g].attr("id"):(w.id=y=a.uniqueKey(),m[g]=H=f.createElement(b).attr(w).add(f.defs),H.radAttr=d,H.stops=[],A(D,function(k){0===k[1].indexOf("rgba")?(N=a.color(k[1]),z=N.get("rgb"),p=N.get("a")):(z=k[1],p=1);k=f.createElement("stop").attr({offset:k[0],"stop-color":z,
"stop-opacity":p}).add(H);H.stops.push(k)}));h="url("+f.url+"#"+y+")";e.setAttribute(J,h);e.gradient=g;k.toString=function(){return h}}},applyTextOutline:function(a){var k=this.element,c,e,f,b;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(k.style.fill)));this.fakeTS=!0;this.ySetter=this.xSetter;c=[].slice.call(k.getElementsByTagName("tspan"));a=a.split(" ");e=a[a.length-1];(f=a[0])&&"none"!==f&&(f=f.replace(/(^[\d\.]+)(.*?)$/g,function(a,k,c){return 2*k+c}),A(c,function(a){"highcharts-text-outline"===
a.getAttribute("class")&&p(c,k.removeChild(a))}),b=k.firstChild,A(c,function(a,c){0===c&&(a.setAttribute("x",k.getAttribute("x")),c=k.getAttribute("y"),a.setAttribute("y",c||0),null===c&&k.setAttribute("y",0));a=a.cloneNode(1);v(a,{"class":"highcharts-text-outline",fill:e,stroke:e,"stroke-width":f,"stroke-linejoin":"round"});k.insertBefore(a,b)}))},attr:function(a,c,e,f){var J,b=this.element,w,N=this,d;"string"===typeof a&&void 0!==c&&(J=a,a={},a[J]=c);if("string"===typeof a)N=(this[a+"Getter"]||
this._defaultGetter).call(this,a,b);else{for(J in a)c=a[J],d=!1,f||k(this,J),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(J)&&(w||(this.symbolAttr(a),w=!0),d=!0),!this.rotation||"x"!==J&&"y"!==J||(this.doTransform=!0),d||(d=this[J+"Setter"]||this._defaultSetter,d.call(this,c,J,b),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(J)&&this.updateShadows(J,c,d));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}e&&e();return N},updateShadows:function(a,
k,c){for(var e=this.shadows,f=e.length;f--;)c.call(e[f],"height"===a?Math.max(k-(e[f].cutHeight||0),0):"d"===a?this.d:k,a,e[f])},addClass:function(a,k){var c=this.attr("class")||"";-1===c.indexOf(a)&&(k||(a=(c+(c?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==v(this.element,"class").indexOf(a)},removeClass:function(a){v(this.element,"class",(v(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var k=this;A("x y r start end width height innerR anchorX anchorY".split(" "),
function(c){k[c]=D(a[c],k[c])});k.attr({d:k.renderer.symbols[k.symbolName](k.x,k.y,k.width,k.height,k)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,k){var c,e={},f;k=k||a.strokeWidth||0;f=Math.round(k)%2/2;a.x=Math.floor(a.x||this.x||0)+f;a.y=Math.floor(a.y||this.y||0)+f;a.width=Math.floor((a.width||this.width||0)-2*f);a.height=Math.floor((a.height||this.height||0)-2*f);n(a.strokeWidth)&&(a.strokeWidth=k);for(c in a)this[c]!==a[c]&&
(this[c]=e[c]=a[c]);return e},css:function(a){var k=this.styles,c={},e=this.element,b,w,d="";b=!k;a&&a.color&&(a.fill=a.color);if(k)for(w in a)a[w]!==k[w]&&(c[w]=a[w],b=!0);if(b){b=this.textWidth=a&&a.width&&"text"===e.nodeName.toLowerCase()&&I(a.width)||this.textWidth;k&&(a=u(k,c));this.styles=a;b&&!H&&this.renderer.forExport&&delete a.width;if(f&&!H)x(this.element,a);else{k=function(a,k){return"-"+k.toLowerCase()};for(w in a)d+=w.replace(/([A-Z])/g,k)+":"+a[w]+";";v(e,"style",d)}this.added&&(b&&
this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,k){var c=this,e=c.element;d&&"click"===a?(e.ontouchstart=function(a){c.touchEventFired=Date.now();a.preventDefault();k.call(e,a)},e.onclick=function(a){(-1===O.navigator.userAgent.indexOf("Android")||1100<Date.now()-(c.touchEventFired||0))&&k.call(e,a)}):e["on"+a]=k;return this},setRadialReference:function(a){var k=this.renderer.gradients[this.element.gradient];
this.element.radialReference=a;k&&k.radAttr&&k.animate(this.renderer.getRadialAttr(a,k.radAttr));return this},translate:function(a,k){return this.attr({translateX:a,translateY:k})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,k=this.translateY||0,c=this.scaleX,e=this.scaleY,f=this.inverted,b=this.rotation,w=this.element;f&&(a+=this.attr("width"),k+=this.attr("height"));a=["translate("+a+","+k+")"];f?a.push("rotate(90) scale(-1,1)"):
b&&a.push("rotate("+b+" "+(w.getAttribute("x")||0)+" "+(w.getAttribute("y")||0)+")");(n(c)||n(e))&&a.push("scale("+D(c,1)+" "+D(e,1)+")");a.length&&w.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,k,c){var f,b,w,d,J={};b=this.renderer;w=b.alignedObjects;var m,H;if(a){if(this.alignOptions=a,this.alignByTranslate=k,!c||e(c))this.alignTo=f=c||"renderer",p(w,this),w.push(this),c=null}else a=this.alignOptions,k=this.alignByTranslate,
f=this.alignTo;c=D(c,b[f],b);f=a.align;b=a.verticalAlign;w=(c.x||0)+(a.x||0);d=(c.y||0)+(a.y||0);"right"===f?m=1:"center"===f&&(m=2);m&&(w+=(c.width-(a.width||0))/m);J[k?"translateX":"x"]=Math.round(w);"bottom"===b?H=1:"middle"===b&&(H=2);H&&(d+=(c.height-(a.height||0))/H);J[k?"translateY":"y"]=Math.round(d);this[this.placed?"animate":"attr"](J);this.placed=!0;this.alignAttr=J;return this},getBBox:function(a,k){var c,e=this.renderer,b,w=this.element,d=this.styles,J,m=this.textStr,H,z=e.cache,r=e.cacheKeys,
p;k=D(k,this.rotation);b=k*h;J=d&&d.fontSize;void 0!==m&&(p=m.toString(),-1===p.indexOf("\x3c")&&(p=p.replace(/[0-9]/g,"0")),p+=["",k||0,J,w.style.width,w.style["text-overflow"]].join());p&&!a&&(c=z[p]);if(!c){if(w.namespaceURI===this.SVG_NS||e.forExport){try{(H=this.fakeTS&&function(a){A(w.querySelectorAll(".highcharts-text-outline"),function(k){k.style.display=a})})&&H("none"),c=w.getBBox?u({},w.getBBox()):{width:w.offsetWidth,height:w.offsetHeight},H&&H("")}catch(W){}if(!c||0>c.width)c={width:0,
height:0}}else c=this.htmlGetBBox();e.isSVG&&(a=c.width,e=c.height,f&&d&&"11px"===d.fontSize&&"16.9"===e.toPrecision(3)&&(c.height=e=14),k&&(c.width=Math.abs(e*Math.sin(b))+Math.abs(a*Math.cos(b)),c.height=Math.abs(e*Math.cos(b))+Math.abs(a*Math.sin(b))));if(p&&0<c.height){for(;250<r.length;)delete z[r.shift()];z[p]||r.push(p);z[p]=c}}return c},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var k=
this;k.animate({opacity:0},{duration:a||150,complete:function(){k.attr({y:-9999})}})},add:function(a){var k=this.renderer,c=this.element,e;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&k.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)e=this.zIndexSetter();e||(a?a.element:k.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var k=a.parentNode;k&&k.removeChild(a)},destroy:function(){var a=this.element||{},c=this.renderer.isSVG&&
"SPAN"===a.nodeName&&this.parentGroup,e,f;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=a.point=null;k(this);this.clipPath&&(this.clipPath=this.clipPath.destroy());if(this.stops){for(f=0;f<this.stops.length;f++)this.stops[f]=this.stops[f].destroy();this.stops=null}this.safeRemoveChild(a);for(this.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)a=c.parentGroup,this.safeRemoveChild(c.div),delete c.div,c=a;this.alignTo&&p(this.renderer.alignedObjects,this);for(e in this)delete this[e];return null},
shadow:function(a,k,c){var e=[],f,b,w=this.element,d,m,H,J;if(!a)this.destroyShadows();else if(!this.shadows){m=D(a.width,3);H=(a.opacity||.15)/m;J=this.parentInverted?"(-1,-1)":"("+D(a.offsetX,1)+", "+D(a.offsetY,1)+")";for(f=1;f<=m;f++)b=w.cloneNode(0),d=2*m+1-2*f,v(b,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":H*f,"stroke-width":d,transform:"translate"+J,fill:"none"}),c&&(v(b,"height",Math.max(v(b,"height")-d,0)),b.cutHeight=d),k?k.element.appendChild(b):w.parentNode.insertBefore(b,
w),e.push(b);this.shadows=e}return this},destroyShadows:function(){A(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=D(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,k,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(k,
a);this[k]=a},dashstyleSetter:function(a){var k,c=this["stroke-width"];"inherit"===c&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(k=a.length;k--;)a[k]=I(a[k])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",
{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,k,c){this[k]=a;c.setAttribute(k,a)},titleSetter:function(a){var k=this.element.getElementsByTagName("title")[0];k||(k=g.createElementNS(this.SVG_NS,"title"),this.element.appendChild(k));k.firstChild&&k.removeChild(k.firstChild);k.appendChild(g.createTextNode(String(D(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,
k,c){"string"===typeof a?c.setAttribute(k,a):a&&this.colorGradient(a,k,c)},visibilitySetter:function(a,k,c){"inherit"===a?c.removeAttribute(k):c.setAttribute(k,a)},zIndexSetter:function(a,k){var c=this.renderer,e=this.parentGroup,f=(e||c).element||c.box,b,w=this.element,d;b=this.added;var m;n(a)&&(w.zIndex=a,a=+a,this[k]===a&&(b=!1),this[k]=a);if(b){(a=this.zIndex)&&e&&(e.handleZ=!0);k=f.childNodes;for(m=0;m<k.length&&!d;m++)e=k[m],b=e.zIndex,e!==w&&(I(b)>a||!n(a)&&n(b)||0>a&&!n(b)&&f!==c.box)&&(f.insertBefore(w,
e),d=!0);d||f.appendChild(w)}return d},_defaultSetter:function(a,k,c){c.setAttribute(k,a)}};B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=B.prototype.rotationSetter=B.prototype.verticalAlignSetter=B.prototype.scaleXSetter=B.prototype.scaleYSetter=function(a,k){this[k]=a;this.doTransform=!0};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,k,c){this[k]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,this.stroke,
"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===k&&0===a&&this.hasStroke&&(c.removeAttribute("stroke"),this.hasStroke=!1)};C=a.SVGRenderer=function(){this.init.apply(this,arguments)};C.prototype={Element:B,SVG_NS:R,init:function(a,k,c,e,f,b){var w;e=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(e));w=e.element;a.appendChild(w);-1===a.innerHTML.indexOf("xmlns")&&v(w,"xmlns",this.SVG_NS);this.isSVG=!0;
this.box=w;this.boxWrapper=e;this.alignedObjects=[];this.url=(G||y)&&g.getElementsByTagName("base").length?O.location.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(g.createTextNode("Created with Highstock 5.0.6"));this.defs=this.createElement("defs").add();this.allowHTML=b;this.forExport=f;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(k,c,!1);var d;G&&a.getBoundingClientRect&&(k=function(){x(a,
{left:0,top:0});d=a.getBoundingClientRect();x(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},k(),this.unSubPixelFix=E(O,"resize",k))},getStyle:function(a){return this.style=u({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();
b(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var k=new this.Element;k.init(this,a);return k},draw:w,getRadialAttr:function(a,k){return{cx:a[0]-a[2]/2+k.cx*a[2],cy:a[1]-a[2]/2+k.cy*a[2],r:k.r*a[2]}},buildText:function(a){for(var k=a.element,c=this,e=c.forExport,f=D(a.textStr,"").toString(),b=-1!==f.indexOf("\x3c"),w=k.childNodes,d,z,r,p,y=v(k,"x"),u=a.styles,h=a.textWidth,G=u&&
u.lineHeight,L=u&&u.textOutline,n=u&&"ellipsis"===u.textOverflow,t=w.length,M=h&&!a.added&&this.box,N=function(a){var e;e=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:u&&u.fontSize||c.style.fontSize||12;return G?I(G):c.fontMetrics(e,a.getAttribute("style")?a:k).h};t--;)k.removeChild(w[t]);b||L||n||h||-1!==f.indexOf(" ")?(d=/<.*class="([^"]+)".*>/,z=/<.*style="([^"]+)".*>/,r=/<.*href="(http[^"]+)".*>/,M&&M.appendChild(k),f=b?f.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[f],f=m(f,function(a){return""!==a}),A(f,function(f,b){var w,m=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");w=f.split("|||");A(w,function(f){if(""!==f||1===w.length){var D={},J=g.createElementNS(c.SVG_NS,"tspan"),I,A;d.test(f)&&(I=f.match(d)[1],v(J,"class",I));z.test(f)&&(A=f.match(z)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),v(J,"style",A));r.test(f)&&!e&&(v(J,"onclick",'location.href\x3d"'+f.match(r)[1]+'"'),x(J,{cursor:"pointer"}));f=(f.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==f){J.appendChild(g.createTextNode(f));m?D.dx=0:b&&null!==y&&(D.x=y);v(J,D);k.appendChild(J);!m&&b&&(!H&&e&&x(J,{display:"block"}),v(J,"dy",N(J)));if(h){D=f.replace(/([^\^])-/g,"$1- ").split(" ");I="nowrap"===u.whiteSpace;for(var G=1<w.length||b||1<D.length&&!I,L,t,M=[],l=N(J),q=a.rotation,
O=f,P=O.length;(G||n)&&(D.length||M.length);)a.rotation=0,L=a.getBBox(!0),t=L.width,!H&&c.forExport&&(t=c.measureSpanWidth(J.firstChild.data,a.styles)),L=t>h,void 0===p&&(p=L),n&&p?(P/=2,""===O||!L&&.5>P?D=[]:(O=f.substring(0,O.length+(L?-1:1)*Math.ceil(P)),D=[O+(3<h?"\u2026":"")],J.removeChild(J.firstChild))):L&&1!==D.length?(J.removeChild(J.firstChild),M.unshift(D.pop())):(D=M,M=[],D.length&&!I&&(J=g.createElementNS(R,"tspan"),v(J,{dy:l,x:y}),A&&v(J,"style",A),k.appendChild(J)),t>h&&(h=t)),D.length&&
J.appendChild(g.createTextNode(D.join(" ").replace(/- /g,"-")));a.rotation=q}m++}}})}),p&&a.attr("title",a.textStr),M&&M.removeChild(k),L&&a.applyTextOutline&&a.applyTextOutline(L)):k.appendChild(g.createTextNode(f.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},getContrast:function(a){a=q(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,k,e,b,w,d,m,H,D){var z=this.label(a,k,e,D,null,null,null,null,"button"),r=0;z.attr(c({padding:8,r:2},w));var p,J,y,g;w=c({fill:"#f7f7f7",
stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},w);p=w.style;delete w.style;d=c(w,{fill:"#e6e6e6"},d);J=d.style;delete d.style;m=c(w,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},m);y=m.style;delete m.style;H=c(w,{style:{color:"#cccccc"}},H);g=H.style;delete H.style;E(z.element,f?"mouseover":"mouseenter",function(){3!==r&&z.setState(1)});E(z.element,f?"mouseout":"mouseleave",function(){3!==r&&z.setState(r)});z.setState=function(a){1!==a&&
(z.state=r=a);z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);z.attr([w,d,m,H][a||0]).css([p,J,y,g][a||0])};z.attr(w).css(u({cursor:"default"},p));return z.on("click",function(a){3!==r&&b.call(z,a)})},crispLine:function(a,k){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-k%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+k%2/2);return a},path:function(a){var k={fill:"none"};r(a)?k.d=a:z(a)&&u(k,a);return this.createElement("path").attr(k)},
circle:function(a,k,c){a=z(a)?a:{x:a,y:k,r:c};k=this.createElement("circle");k.xSetter=k.ySetter=function(a,k,c){c.setAttribute("c"+k,a)};return k.attr(a)},arc:function(a,k,c,f,e,b){z(a)&&(k=a.y,c=a.r,f=a.innerR,e=a.start,b=a.end,a=a.x);a=this.symbol("arc",a||0,k||0,c||0,c||0,{innerR:f||0,start:e||0,end:b||0});a.r=c;return a},rect:function(a,k,c,f,e,b){e=z(a)?a.r:e;var w=this.createElement("rect");a=z(a)?a:void 0===a?{}:{x:a,y:k,width:Math.max(c,0),height:Math.max(f,0)};void 0!==b&&(a.strokeWidth=
b,a=w.crisp(a));a.fill="none";e&&(a.r=e);w.rSetter=function(a,k,c){v(c,{rx:a,ry:a})};return w.attr(a)},setSize:function(a,k,c){var f=this.alignedObjects,e=f.length;this.width=a;this.height=k;for(this.boxWrapper.animate({width:a,height:k},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:D(c,!0)?void 0:0});e--;)f[e].align()},g:function(a){var k=this.createElement("g");return a?k.attr({"class":"highcharts-"+a}):k},image:function(a,k,c,f,e){var b={preserveAspectRatio:"none"};
1<arguments.length&&u(b,{x:k,y:c,width:f,height:e});b=this.createElement("image").attr(b);b.element.setAttributeNS?b.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):b.element.setAttribute("hc-svg-href",a);return b},symbol:function(a,k,c,f,e,b){var w=this,d,m=this.symbols[a],H=n(k)&&m&&m(Math.round(k),Math.round(c),f,e,b),z=/^url\((.*?)\)$/,r,p;m?(d=this.path(H),d.attr("fill","none"),u(d,{symbolName:a,x:k,y:c,width:f,height:e}),b&&u(d,b)):z.test(a)&&(r=a.match(z)[1],d=this.image(r),
d.imgwidth=D(M[r]&&M[r].width,b&&b.width),d.imgheight=D(M[r]&&M[r].height,b&&b.height),p=function(){d.attr({width:d.width,height:d.height})},A(["width","height"],function(a){d[a+"Setter"]=function(a,k){var c={},f=this["img"+k],e="width"===k?"translateX":"translateY";this[k]=a;n(f)&&(this.element&&this.element.setAttribute(k,f),this.alignByTranslate||(c[e]=((this[k]||0)-f)/2,this.attr(c)))}}),n(k)&&d.attr({x:k,y:c}),d.isImg=!0,n(d.imgwidth)&&n(d.imgheight)?p():(d.attr({width:0,height:0}),t("img",{onload:function(){var a=
l[w.chartIndex];0===this.width&&(x(this,{position:"absolute",top:"-999em"}),g.body.appendChild(this));M[r]={width:this.width,height:this.height};d.imgwidth=this.width;d.imgheight=this.height;d.element&&p();this.parentNode&&this.parentNode.removeChild(this);w.imgCount--;if(!w.imgCount&&a&&a.onload)a.onload()},src:r}),this.imgCount++));return d},symbols:{circle:function(a,k,c,f){var e=.166*c;return["M",a+c/2,k,"C",a+c+e,k,a+c+e,k+f,a+c/2,k+f,"C",a-e,k+f,a-e,k,a+c/2,k,"Z"]},square:function(a,k,c,f){return["M",
a,k,"L",a+c,k,a+c,k+f,a,k+f,"Z"]},triangle:function(a,k,c,f){return["M",a+c/2,k,"L",a+c,k+f,a,k+f,"Z"]},"triangle-down":function(a,k,c,f){return["M",a,k,"L",a+c,k,a+c/2,k+f,"Z"]},diamond:function(a,k,c,f){return["M",a+c/2,k,"L",a+c,k+f/2,a+c/2,k+f,a,k+f/2,"Z"]},arc:function(a,k,c,f,e){var b=e.start;c=e.r||c||f;var w=e.end-.001;f=e.innerR;var d=e.open,m=Math.cos(b),H=Math.sin(b),D=Math.cos(w),w=Math.sin(w);e=e.end-b<Math.PI?0:1;return["M",a+c*m,k+c*H,"A",c,c,0,e,1,a+c*D,k+c*w,d?"M":"L",a+f*D,k+f*w,
"A",f,f,0,e,0,a+f*m,k+f*H,d?"":"Z"]},callout:function(a,k,c,f,e){var b=Math.min(e&&e.r||0,c,f),w=b+6,d=e&&e.anchorX;e=e&&e.anchorY;var m;m=["M",a+b,k,"L",a+c-b,k,"C",a+c,k,a+c,k,a+c,k+b,"L",a+c,k+f-b,"C",a+c,k+f,a+c,k+f,a+c-b,k+f,"L",a+b,k+f,"C",a,k+f,a,k+f,a,k+f-b,"L",a,k+b,"C",a,k,a,k,a+b,k];d&&d>c?e>k+w&&e<k+f-w?m.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,k+f-b):m.splice(13,3,"L",a+c,f/2,d,e,a+c,f/2,a+c,k+f-b):d&&0>d?e>k+w&&e<k+f-w?m.splice(33,3,"L",a,e+6,a-6,e,a,e-6,a,k+b):m.splice(33,3,"L",
a,f/2,d,e,a,f/2,a,k+b):e&&e>f&&d>a+w&&d<a+c-w?m.splice(23,3,"L",d+6,k+f,d,k+f+6,d-6,k+f,a+b,k+f):e&&0>e&&d>a+w&&d<a+c-w&&m.splice(3,3,"L",d-6,k,d,k-6,d+6,k,c-b,k);return m}},clipRect:function(k,c,f,e){var b=a.uniqueKey(),w=this.createElement("clipPath").attr({id:b}).add(this.defs);k=this.rect(k,c,f,e,0).add(w);k.id=b;k.clipPath=w;k.count=0;return k},text:function(a,k,c,f){var e=!H&&this.forExport,b={};if(f&&(this.allowHTML||!this.forExport))return this.html(a,k,c);b.x=Math.round(k||0);c&&(b.y=Math.round(c));
if(a||0===a)b.text=a;a=this.createElement("text").attr(b);e&&a.css({position:"absolute"});f||(a.xSetter=function(a,k,c){var f=c.getElementsByTagName("tspan"),e,b=c.getAttribute(k),w;for(w=0;w<f.length;w++)e=f[w],e.getAttribute(k)===b&&e.setAttribute(k,a);c.setAttribute(k,a)});return a},fontMetrics:function(a,k){a=a||k&&k.style&&k.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?I(a):/em/.test(a)?parseFloat(a)*(k?this.fontMetrics(null,k.parentNode).f:16):12;k=24>a?a+3:Math.round(1.2*
a);return{h:k,b:Math.round(.8*k),f:a}},rotCorr:function(a,k,c){var f=a;k&&c&&(f=Math.max(f*Math.cos(k*h),4));return{x:-a/3*Math.sin(k*h),y:f}},label:function(a,k,f,e,b,w,d,m,H){var D=this,z=D.g("button"!==H&&"label"),r=z.text=D.text("",0,0,d).attr({zIndex:1}),p,y,g=0,h=3,I=0,G,J,t,R,M,l={},q,O,x=/^url\((.*?)\)$/.test(e),v=x,P,S,Q,N;H&&z.addClass("highcharts-"+H);v=x;P=function(){return(q||0)%2/2};S=function(){var a=r.element.style,k={};y=(void 0===G||void 0===J||M)&&n(r.textStr)&&r.getBBox();z.width=
(G||y.width||0)+2*h+I;z.height=(J||y.height||0)+2*h;O=h+D.fontMetrics(a&&a.fontSize,r).b;v&&(p||(z.box=p=D.symbols[e]||x?D.symbol(e):D.rect(),p.addClass(("button"===H?"":"highcharts-label-box")+(H?" highcharts-"+H+"-box":"")),p.add(z),a=P(),k.x=a,k.y=(m?-O:0)+a),k.width=Math.round(z.width),k.height=Math.round(z.height),p.attr(u(k,l)),l={})};Q=function(){var a=I+h,k;k=m?0:O;n(G)&&y&&("center"===M||"right"===M)&&(a+={center:.5,right:1}[M]*(G-y.width));if(a!==r.x||k!==r.y)r.attr("x",a),void 0!==k&&r.attr("y",
k);r.x=a;r.y=k};N=function(a,k){p?p.attr(a,k):l[a]=k};z.onAdd=function(){r.add(z);z.attr({text:a||0===a?a:"",x:k,y:f});p&&n(b)&&z.attr({anchorX:b,anchorY:w})};z.widthSetter=function(a){G=a};z.heightSetter=function(a){J=a};z["text-alignSetter"]=function(a){M=a};z.paddingSetter=function(a){n(a)&&a!==h&&(h=z.padding=a,Q())};z.paddingLeftSetter=function(a){n(a)&&a!==I&&(I=a,Q())};z.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==g&&(g=a,y&&z.attr({x:t}))};z.textSetter=function(a){void 0!==
a&&r.textSetter(a);S();Q()};z["stroke-widthSetter"]=function(a,k){a&&(v=!0);q=this["stroke-width"]=a;N(k,a)};z.strokeSetter=z.fillSetter=z.rSetter=function(a,k){"fill"===k&&a&&(v=!0);N(k,a)};z.anchorXSetter=function(a,k){b=a;N(k,Math.round(a)-P()-t)};z.anchorYSetter=function(a,k){w=a;N(k,a-R)};z.xSetter=function(a){z.x=a;g&&(a-=g*((G||y.width)+2*h));t=Math.round(a);z.attr("translateX",t)};z.ySetter=function(a){R=z.y=Math.round(a);z.attr("translateY",R)};var V=z.css;return u(z,{css:function(a){if(a){var k=
{};a=c(a);A(z.textProps,function(c){void 0!==a[c]&&(k[c]=a[c],delete a[c])});r.css(k)}return V.call(z,a)},getBBox:function(){return{width:y.width+2*h,height:y.height+2*h,x:y.x-h,y:y.y-h}},shadow:function(a){a&&(S(),p&&p.shadow(a));return z},destroy:function(){L(z.element,"mouseenter");L(z.element,"mouseleave");r&&(r=r.destroy());p&&(p=p.destroy());B.prototype.destroy.call(z);z=D=S=Q=N=null}})}};a.Renderer=C})(K);(function(a){var B=a.attr,C=a.createElement,E=a.css,F=a.defined,v=a.each,l=a.extend,q=
a.isFirefox,x=a.isMS,t=a.isWebKit,n=a.pInt,h=a.SVGRenderer,b=a.win,g=a.wrap;l(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=l(this.styles,a);E(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,
height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,p=this.translateX||0,m=this.translateY||0,d=this.x||0,r=this.y||0,g=this.textAlign||"left",f={left:0,center:.5,right:1}[g],z=this.styles;E(b,{marginLeft:p,marginTop:m});this.shadows&&v(this.shadows,function(a){E(a,{marginLeft:p+1,marginTop:m+1})});this.inverted&&v(b.childNodes,function(c){a.invertChild(c,b)});if("SPAN"===b.tagName){var e=this.rotation,y=n(this.textWidth),c=z&&z.whiteSpace,w=[e,
g,b.innerHTML,this.textWidth,this.textAlign].join();w!==this.cTT&&(z=a.fontMetrics(b.style.fontSize).b,F(e)&&this.setSpanRotation(e,f,z),E(b,{width:"",whiteSpace:c||"nowrap"}),b.offsetWidth>y&&/[ \-]/.test(b.textContent||b.innerText)&&E(b,{width:y+"px",display:"block",whiteSpace:c||"normal"}),this.getSpanCorrection(b.offsetWidth,z,f,e,g));E(b,{left:d+(this.xCorr||0)+"px",top:r+(this.yCorr||0)+"px"});t&&(z=b.offsetHeight);this.cTT=w}}else this.alignOnAdd=!0},setSpanRotation:function(a,g,p){var m={},
d=x?"-ms-transform":t?"-webkit-transform":q?"MozTransform":b.opera?"-o-transform":"";m[d]=m.transform="rotate("+a+"deg)";m[d+(q?"Origin":"-origin")]=m.transformOrigin=100*g+"% "+p+"px";E(this.element,m)},getSpanCorrection:function(a,b,p){this.xCorr=-a*p;this.yCorr=-b}});l(h.prototype,{html:function(a,b,p){var m=this.createElement("span"),d=m.element,r=m.renderer,u=r.isSVG,f=function(a,f){v(["opacity","visibility"],function(e){g(a,e+"Setter",function(a,e,b,d){a.call(this,e,b,d);f[b]=e})})};m.textSetter=
function(a){a!==d.innerHTML&&delete this.bBox;d.innerHTML=this.textStr=a;m.htmlUpdateTransform()};u&&f(m,m.element.style);m.xSetter=m.ySetter=m.alignSetter=m.rotationSetter=function(a,f){"align"===f&&(f="textAlign");m[f]=a;m.htmlUpdateTransform()};m.attr({text:a,x:Math.round(b),y:Math.round(p)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";m.css=m.htmlCss;u&&(m.add=function(a){var e,b=r.box.parentNode,c=[];if(this.parentGroup=
a){if(e=a.div,!e){for(;a;)c.push(a),a=a.parentGroup;v(c.reverse(),function(a){var w,d=B(a.element,"class");d&&(d={className:d});e=a.div=a.div||C("div",d,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},e||b);w=e.style;l(a,{on:function(){m.on.apply({element:c[0].div},arguments);return a},translateXSetter:function(c,k){w.left=c+"px";a[k]=c;a.doTransform=!0},translateYSetter:function(c,k){w.top=
c+"px";a[k]=c;a.doTransform=!0}});f(a,w)})}}else e=b;e.appendChild(d);m.added=!0;m.alignOnAdd&&m.htmlUpdateTransform();return m});return m}})})(K);(function(a){var B,C,E=a.createElement,F=a.css,v=a.defined,l=a.deg2rad,q=a.discardElement,x=a.doc,t=a.each,n=a.erase,h=a.extend;B=a.extendClass;var b=a.isArray,g=a.isNumber,A=a.isObject,u=a.merge;C=a.noop;var p=a.pick,m=a.pInt,d=a.SVGElement,r=a.SVGRenderer,G=a.win;a.svg||(C={docMode8:x&&8===x.documentMode,init:function(a,b){var f=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],
d=["position: ","absolute",";"],c="div"===b;("shape"===b||c)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",c?"hidden":"visible");f.push(' style\x3d"',d.join(""),'"/\x3e');b&&(f=c||"span"===b||"img"===b?f.join(""):a.prepVML(f),this.element=E(f));this.renderer=a},add:function(a){var f=this.renderer,e=this.element,b=f.box,c=a&&a.inverted,b=a?a.element||a:b;a&&(this.parentGroup=a);c&&f.invertChild(e,b);b.appendChild(e);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();
if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:d.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*l),e=Math.sin(a*l);F(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-e,", M21\x3d",e,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,e,d,c){var f=d?Math.cos(d*l):1,m=d?Math.sin(d*l):0,z=p(this.elemHeight,this.element.offsetHeight),
r;this.xCorr=0>f&&-a;this.yCorr=0>m&&-z;r=0>f*m;this.xCorr+=m*b*(r?1-e:e);this.yCorr-=f*b*(d?r?e:1-e:1);c&&"left"!==c&&(this.xCorr-=a*e*(0>f?-1:1),d&&(this.yCorr-=z*e*(0>m?-1:1)),F(this.element,{textAlign:c}))},pathToVML:function(a){for(var f=a.length,b=[];f--;)g(a[f])?b[f]=Math.round(10*a[f])-5:"Z"===a[f]?b[f]="x":(b[f]=a[f],!a.isArc||"wa"!==a[f]&&"at"!==a[f]||(b[f+5]===b[f+7]&&(b[f+7]+=a[f+7]>a[f+5]?1:-1),b[f+6]===b[f+8]&&(b[f+8]+=a[f+8]>a[f+6]?1:-1)));return b.join(" ")||"x"},clip:function(a){var f=
this,b;a?(b=a.members,n(b,f),b.push(f),f.destroyClip=function(){n(b,f)},a=a.getCSS(f)):(f.destroyClip&&f.destroyClip(),a={clip:f.docMode8?"inherit":"rect(auto)"});return f.css(a)},css:d.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&q(a)},destroy:function(){this.destroyClip&&this.destroyClip();return d.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=G.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var f;a=a.split(/[ ,]/);
f=a.length;if(9===f||11===f)a[f-4]=a[f-2]=m(a[f-2])-10*b;return a.join(" ")},shadow:function(a,b,e){var f=[],c,d=this.element,r=this.renderer,z,g=d.style,k,H=d.path,u,h,G,A;H&&"string"!==typeof H.value&&(H="x");h=H;if(a){G=p(a.width,3);A=(a.opacity||.15)/G;for(c=1;3>=c;c++)u=2*G+1-2*c,e&&(h=this.cutOffPath(H.value,u+.5)),k=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',u,'" filled\x3d"false" path\x3d"',h,'" coordsize\x3d"10 10" style\x3d"',d.style.cssText,'" /\x3e'],z=E(r.prepVML(k),null,{left:m(g.left)+
p(a.offsetX,1),top:m(g.top)+p(a.offsetY,1)}),e&&(z.cutOff=u+1),k=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',A*c,'"/\x3e'],E(r.prepVML(k),null,null,z),b?b.element.appendChild(z):d.parentNode.insertBefore(z,d),f.push(z);this.shadows=f}return this},updateShadows:C,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,e){(e.getElementsByTagName("stroke")[0]||
E(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,e))[b]=a||"solid";this[b]=a},dSetter:function(a,b,e){var f=this.shadows;a=a||[];this.d=a.join&&a.join(" ");e.path=a=this.pathToVML(a);if(f)for(e=f.length;e--;)f[e].path=f[e].cutOff?this.cutOffPath(a,f[e].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,e){var f=e.nodeName;"SPAN"===f?e.style.color=a:"IMG"!==f&&(e.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,e,b,this)))},"fill-opacitySetter":function(a,b,e){E(this.renderer.prepVML(["\x3c",
b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,e)},opacitySetter:C,rotationSetter:function(a,b,e){e=e.style;this[b]=e[b]=a;e.left=-Math.round(Math.sin(a*l)+1)+"px";e.top=Math.round(Math.cos(a*l))+"px"},strokeSetter:function(a,b,e){this.setAttr("strokecolor",this.renderer.color(a,e,b,this))},"stroke-widthSetter":function(a,b,e){e.stroked=!!a;this[b]=a;g(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,e){"inherit"===a&&
(a="visible");this.shadows&&t(this.shadows,function(f){f.style[b]=a});"DIV"===e.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(e.style[b]=a?"visible":"hidden"),b="top");e.style[b]=a},xSetter:function(a,b,e){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):e.style[b]=a},zIndexSetter:function(a,b,e){e.style[b]=a}},C["stroke-opacitySetter"]=C["fill-opacitySetter"],a.VMLElement=C=B(d,C),C.prototype.ySetter=C.prototype.widthSetter=C.prototype.heightSetter=
C.prototype.xSetter,C={Element:C,isIE8:-1<G.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,e){var f,c;this.alignedObjects=[];f=this.createElement("div").css({position:"relative"});c=f.element;a.appendChild(f.element);this.isVML=!0;this.box=c;this.boxWrapper=f;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,e,!1);if(!x.namespaces.hcv){x.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{x.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(w){x.styleSheets[0].cssText+=
"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,e,d){var c=this.createElement(),f=A(a);return h(c,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:e)-1,height:(f?a.height:d)-1,getCSS:function(a){var c=a.element,b=c.nodeName,k=a.inverted,f=this.top-("shape"===b?c.offsetTop:0),e=this.left,c=e+this.width,d=f+this.height,f={clip:"rect("+Math.round(k?
e:f)+"px,"+Math.round(k?d:c)+"px,"+Math.round(k?c:d)+"px,"+Math.round(k?f:e)+"px)"};!k&&a.docMode8&&"DIV"===b&&h(f,{width:c+"px",height:d+"px"});return f},updateClipping:function(){t(c.members,function(a){a.element&&a.css(c.getCSS(a))})}})},color:function(b,d,e,m){var c=this,f,r=/^rgba/,p,g,k="none";b&&b.linearGradient?g="gradient":b&&b.radialGradient&&(g="pattern");if(g){var H,z,u=b.linearGradient||b.radialGradient,h,y,G,A,n,l="";b=b.stops;var q,x=[],v=function(){p=['\x3cfill colors\x3d"'+x.join(",")+
'" opacity\x3d"',G,'" o:opacity2\x3d"',y,'" type\x3d"',g,'" ',l,'focus\x3d"100%" method\x3d"any" /\x3e'];E(c.prepVML(p),null,null,d)};h=b[0];q=b[b.length-1];0<h[0]&&b.unshift([0,h[1]]);1>q[0]&&b.push([1,q[1]]);t(b,function(k,c){r.test(k[1])?(f=a.color(k[1]),H=f.get("rgb"),z=f.get("a")):(H=k[1],z=1);x.push(100*k[0]+"% "+H);c?(G=z,A=H):(y=z,n=H)});if("fill"===e)if("gradient"===g)e=u.x1||u[0]||0,b=u.y1||u[1]||0,h=u.x2||u[2]||0,u=u.y2||u[3]||0,l='angle\x3d"'+(90-180*Math.atan((u-b)/(h-e))/Math.PI)+'"',
v();else{var k=u.r,C=2*k,B=2*k,F=u.cx,U=u.cy,T=d.radialReference,K,k=function(){T&&(K=m.getBBox(),F+=(T[0]-K.x)/K.width-.5,U+=(T[1]-K.y)/K.height-.5,C*=T[2]/K.width,B*=T[2]/K.height);l='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+C+","+B+'" origin\x3d"0.5,0.5" position\x3d"'+F+","+U+'" color2\x3d"'+n+'" ';v()};m.added?k():m.onAdd=k;k=A}else k=H}else r.test(b)&&"IMG"!==d.tagName?(f=a.color(b),m[e+"-opacitySetter"](f.get("a"),e,d),k=f.get("rgb")):(k=d.getElementsByTagName(e),
k.length&&(k[0].opacity=1,k[0].type="solid"),k=b);return k},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:r.prototype.html,path:function(a){var f={coordsize:"10 10"};b(a)?f.d=
a:A(a)&&h(f,a);return this.createElement("shape").attr(f)},circle:function(a,b,e){var f=this.symbol("circle");A(a)&&(e=a.r,b=a.y,a=a.x);f.isCircle=!0;f.r=e;return f.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,e,d,c){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:e,width:d,height:c});return f},createElement:function(a){return"rect"===a?this.symbol(a):r.prototype.createElement.call(this,
a)},invertChild:function(a,b){var e=this;b=b.style;var f="IMG"===a.tagName&&a.style;F(a,{flip:"x",left:m(b.width)-(f?m(f.top):1),top:m(b.height)-(f?m(f.left):1),rotation:-90});t(a.childNodes,function(c){e.invertChild(c,a)})},symbols:{arc:function(a,b,e,d,c){var f=c.start,m=c.end,r=c.r||e||d;e=c.innerR;d=Math.cos(f);var p=Math.sin(f),k=Math.cos(m),H=Math.sin(m);if(0===m-f)return["x"];f=["wa",a-r,b-r,a+r,b+r,a+r*d,b+r*p,a+r*k,b+r*H];c.open&&!e&&f.push("e","M",a,b);f.push("at",a-e,b-e,a+e,b+e,a+e*k,
b+e*H,a+e*d,b+e*p,"x","e");f.isArc=!0;return f},circle:function(a,b,e,d,c){c&&v(c.r)&&(e=d=2*c.r);c&&c.isCircle&&(a-=e/2,b-=d/2);return["wa",a,b,a+e,b+d,a+e,b+d/2,a+e,b+d/2,"e"]},rect:function(a,b,e,d,c){return r.prototype.symbols[v(c)&&c.r?"callout":"square"].call(0,a,b,e,d,c)}}},a.VMLRenderer=B=function(){this.init.apply(this,arguments)},B.prototype=u(r.prototype,C),a.Renderer=B);r.prototype.measureSpanWidth=function(a,b){var e=x.createElement("span");a=x.createTextNode(a);e.appendChild(a);F(e,
b);this.box.appendChild(e);b=e.offsetWidth;q(e);return b}})(K);(function(a){function B(){var x=a.defaultOptions.global,t,n=x.useUTC,h=n?"getUTC":"get",b=n?"setUTC":"set";a.Date=t=x.Date||q.Date;t.hcTimezoneOffset=n&&x.timezoneOffset;t.hcGetTimezoneOffset=n&&x.getTimezoneOffset;t.hcMakeTime=function(a,b,u,p,m,d){var r;n?(r=t.UTC.apply(0,arguments),r+=F(r)):r=(new t(a,b,l(u,1),l(p,0),l(m,0),l(d,0))).getTime();return r};E("Minutes Hours Day Date Month FullYear".split(" "),function(a){t["hcGet"+a]=h+
a});E("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){t["hcSet"+a]=b+a})}var C=a.color,E=a.each,F=a.getTZOffset,v=a.merge,l=a.pick,q=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.6/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",
backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},
itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",
minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:C("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",
fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(l){a.defaultOptions=v(!0,a.defaultOptions,l);B();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;B()})(K);(function(a){var B=a.arrayMax,C=a.arrayMin,E=a.defined,
F=a.destroyObjectProperties,v=a.each,l=a.erase,q=a.merge,x=a.pick;a.PlotLineOrBand=function(a,n){this.axis=a;n&&(this.options=n,this.id=n.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,n=a.axis,h=n.horiz,b=a.options,g=b.label,A=a.label,u=b.to,p=b.from,m=b.value,d=E(p)&&E(u),r=E(m),G=a.svgElem,f=!G,z=[],e,y=b.color,c=x(b.zIndex,0),w=b.events,z={"class":"highcharts-plot-"+(d?"band ":"line ")+(b.className||"")},D={},I=n.chart.renderer,L=d?"bands":"lines",k=n.log2lin;n.isLog&&(p=k(p),u=
k(u),m=k(m));r?(z={stroke:y,"stroke-width":b.width},b.dashStyle&&(z.dashstyle=b.dashStyle)):d&&(y&&(z.fill=y),b.borderWidth&&(z.stroke=b.borderColor,z["stroke-width"]=b.borderWidth));D.zIndex=c;L+="-"+c;(y=n[L])||(n[L]=y=I.g("plot-"+L).attr(D).add());f&&(a.svgElem=G=I.path().attr(z).add(y));if(r)z=n.getPlotLinePath(m,G.strokeWidth());else if(d)z=n.getPlotBandPath(p,u,b);else return;if(f&&z&&z.length){if(G.attr({d:z}),w)for(e in b=function(k){G.on(k,function(b){w[k].apply(a,[b])})},w)b(e)}else G&&
(z?(G.show(),G.animate({d:z})):(G.hide(),A&&(a.label=A=A.destroy())));g&&E(g.text)&&z&&z.length&&0<n.width&&0<n.height&&!z.flat?(g=q({align:h&&d&&"center",x:h?!d&&4:10,verticalAlign:!h&&d&&"middle",y:h?d?16:10:d?6:-4,rotation:h&&!d&&90},g),this.renderLabel(g,z,d,c)):A&&A.hide();return a},renderLabel:function(a,n,h,b){var g=this.label,A=this.axis.chart.renderer;g||(g={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(h?"band":"line")+"-label "+(a.className||"")},g.zIndex=b,
this.label=g=A.text(a.text,0,0,a.useHTML).attr(g).add(),g.css(a.style));b=[n[1],n[4],h?n[6]:n[1]];n=[n[2],n[5],h?n[7]:n[2]];h=C(b);A=C(n);g.align(a,!1,{x:h,y:A,width:B(b)-h,height:B(n)-A});g.show()},destroy:function(){l(this.axis.plotLinesAndBands,this);delete this.axis;F(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,n){n=this.getPlotLinePath(n,null,null,!0);(a=this.getPlotLinePath(a,null,null,!0))&&n?(a.flat=a.toString()===n.toString(),a.push(n[4],n[5],n[1],n[2],"z")):a=null;
return a},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(l,n){var h=(new a.PlotLineOrBand(this,l)).render(),b=this.userOptions;h&&(n&&(b[n]=b[n]||[],b[n].push(l)),this.plotLinesAndBands.push(h));return h},removePlotBandOrLine:function(a){for(var n=this.plotLinesAndBands,h=this.options,b=this.userOptions,g=n.length;g--;)n[g].id===a&&n[g].destroy();v([h.plotLines||[],b.plotLines||
[],h.plotBands||[],b.plotBands||[]],function(b){for(g=b.length;g--;)b[g].id===a&&l(b,b[g])})}}})(K);(function(a){var B=a.correctFloat,C=a.defined,E=a.destroyObjectProperties,F=a.isNumber,v=a.merge,l=a.pick,q=a.deg2rad;a.Tick=function(a,l,n,h){this.axis=a;this.pos=l;this.type=n||"";this.isNew=!0;n||h||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,t=a.options,n=a.chart,h=a.categories,b=a.names,g=this.pos,A=t.labels,u=a.tickPositions,p=g===u[0],m=g===u[u.length-1],b=h?l(h[g],
b[g],g):g,h=this.label,u=u.info,d;a.isDatetimeAxis&&u&&(d=t.dateTimeLabelFormats[u.higherRanks[g]||u.unitName]);this.isFirst=p;this.isLast=m;t=a.labelFormatter.call({axis:a,chart:n,isFirst:p,isLast:m,dateTimeLabelFormat:d,value:a.isLog?B(a.lin2log(b)):b});C(h)?h&&h.attr({text:t}):(this.labelLength=(this.label=h=C(t)&&A.enabled?n.renderer.text(t,0,0,A.useHTML).css(v(A.style)).add(a.labelGroup):null)&&h.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?
"height":"width"]:0},handleOverflow:function(a){var t=this.axis,n=a.x,h=t.chart.chartWidth,b=t.chart.spacing,g=l(t.labelLeft,Math.min(t.pos,b[3])),b=l(t.labelRight,Math.max(t.pos+t.len,h-b[1])),A=this.label,u=this.rotation,p={left:0,center:.5,right:1}[t.labelAlign],m=A.getBBox().width,d=t.getSlotWidth(),r=d,G=1,f,z={};if(u)0>u&&n-p*m<g?f=Math.round(n/Math.cos(u*q)-g):0<u&&n+p*m>b&&(f=Math.round((h-n)/Math.cos(u*q)));else if(h=n+(1-p)*m,n-p*m<g?r=a.x+r*(1-p)-g:h>b&&(r=b-a.x+r*p,G=-1),r=Math.min(d,
r),r<d&&"center"===t.labelAlign&&(a.x+=G*(d-r-p*(d-Math.min(m,r)))),m>r||t.autoRotation&&(A.styles||{}).width)f=r;f&&(z.width=f,(t.options.labels.style||{}).textOverflow||(z.textOverflow="ellipsis"),A.css(z))},getPosition:function(a,l,n,h){var b=this.axis,g=b.chart,A=h&&g.oldChartHeight||g.chartHeight;return{x:a?b.translate(l+n,null,null,h)+b.transB:b.left+b.offset+(b.opposite?(h&&g.oldChartWidth||g.chartWidth)-b.right-b.left:0),y:a?A-b.bottom+b.offset-(b.opposite?b.height:0):A-b.translate(l+n,null,
null,h)-b.transB}},getLabelPosition:function(a,l,n,h,b,g,A,u){var p=this.axis,m=p.transA,d=p.reversed,r=p.staggerLines,G=p.tickRotCorr||{x:0,y:0},f=b.y;C(f)||(f=0===p.side?n.rotation?-8:-n.getBBox().height:2===p.side?G.y+8:Math.cos(n.rotation*q)*(G.y-n.getBBox(!1,0).height/2));a=a+b.x+G.x-(g&&h?g*m*(d?-1:1):0);l=l+f-(g&&!h?g*m*(d?1:-1):0);r&&(n=A/(u||1)%r,p.opposite&&(n=r-n-1),l+=p.labelOffset/r*n);return{x:a,y:Math.round(l)}},getMarkPath:function(a,l,n,h,b,g){return g.crispLine(["M",a,l,"L",a+(b?
0:-n),l+(b?n:0)],h)},render:function(a,q,n){var h=this.axis,b=h.options,g=h.chart.renderer,A=h.horiz,u=this.type,p=this.label,m=this.pos,d=b.labels,r=this.gridLine,G=u?u+"Tick":"tick",f=h.tickSize(G),z=this.mark,e=!z,y=d.step,c={},w=!0,D=h.tickmarkOffset,I=this.getPosition(A,m,D,q),L=I.x,I=I.y,k=A&&L===h.pos+h.len||!A&&I===h.pos?-1:1,H=u?u+"Grid":"grid",R=b[H+"LineWidth"],M=b[H+"LineColor"],t=b[H+"LineDashStyle"],H=l(b[G+"Width"],!u&&h.isXAxis?1:0),G=b[G+"Color"];n=l(n,1);this.isActive=!0;r||(c.stroke=
M,c["stroke-width"]=R,t&&(c.dashstyle=t),u||(c.zIndex=1),q&&(c.opacity=0),this.gridLine=r=g.path().attr(c).addClass("highcharts-"+(u?u+"-":"")+"grid-line").add(h.gridGroup));if(!q&&r&&(m=h.getPlotLinePath(m+D,r.strokeWidth()*k,q,!0)))r[this.isNew?"attr":"animate"]({d:m,opacity:n});f&&(h.opposite&&(f[0]=-f[0]),e&&(this.mark=z=g.path().addClass("highcharts-"+(u?u+"-":"")+"tick").add(h.axisGroup),z.attr({stroke:G,"stroke-width":H})),z[e?"attr":"animate"]({d:this.getMarkPath(L,I,f[0],z.strokeWidth()*
k,A,g),opacity:n}));p&&F(L)&&(p.xy=I=this.getLabelPosition(L,I,p,A,d,D,a,y),this.isFirst&&!this.isLast&&!l(b.showFirstLabel,1)||this.isLast&&!this.isFirst&&!l(b.showLastLabel,1)?w=!1:!A||h.isRadial||d.step||d.rotation||q||0===n||this.handleOverflow(I),y&&a%y&&(w=!1),w&&F(I.y)?(I.opacity=n,p[this.isNew?"attr":"animate"](I)):p.attr("y",-9999),this.isNew=!1)},destroy:function(){E(this,this.axis)}}})(K);(function(a){var B=a.addEvent,C=a.animObject,E=a.arrayMax,F=a.arrayMin,v=a.AxisPlotLineOrBandExtension,
l=a.color,q=a.correctFloat,x=a.defaultOptions,t=a.defined,n=a.deg2rad,h=a.destroyObjectProperties,b=a.each,g=a.extend,A=a.fireEvent,u=a.format,p=a.getMagnitude,m=a.grep,d=a.inArray,r=a.isArray,G=a.isNumber,f=a.isString,z=a.merge,e=a.normalizeTickInterval,y=a.pick,c=a.PlotLineOrBand,w=a.removeEvent,D=a.splat,I=a.syncTimeout,L=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",
day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,
gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},
title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var k=b.isX;this.chart=a;this.horiz=a.inverted?!k:k;this.isXAxis=k;this.coll=this.coll||(k?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var c=this.options,e=c.type;this.labelFormatter=c.labels.formatter||this.defaultLabelFormatter;
this.userOptions=b;this.minPixelPadding=0;this.reversed=c.reversed;this.visible=!1!==c.visible;this.zoomEnabled=!1!==c.zoomEnabled;this.hasNames="category"===e||!0===c.categories;this.categories=c.categories||this.hasNames;this.names=this.names||[];this.isLog="logarithmic"===e;this.isDatetimeAxis="datetime"===e;this.isLinked=t(c.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=c.minRange||c.maxZoom;
this.range=c.range;this.offset=c.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=y(c.crosshair,D(a.options.tooltip.crosshairs)[k?0:1],!1);var f;b=this.options.events;-1===d(this,a.axes)&&(k?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&k&&void 0===this.reversed&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in b)B(this,f,b[f]);
this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=z(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],z(x[this.coll],a))},defaultLabelFormatter:function(){var k=this.axis,b=this.value,c=k.categories,e=this.dateTimeLabelFormat,d=x.lang,f=d.numericSymbols,d=d.numericSymbolMagnitude||1E3,w=f&&f.length,m,r=k.options.labels.format,
k=k.isLog?b:k.tickInterval;if(r)m=u(r,this);else if(c)m=b;else if(e)m=a.dateFormat(e,b);else if(w&&1E3<=k)for(;w--&&void 0===m;)c=Math.pow(d,w+1),k>=c&&0===10*b%c&&null!==f[w]&&0!==b&&(m=a.numberFormat(b/c,-1)+f[w]);void 0===m&&(m=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return m},getSeriesExtremes:function(){var a=this,c=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();b(a.series,function(k){if(k.visible||
!c.options.chart.ignoreHiddenSeries){var b=k.options,e=b.threshold,d;a.hasVisibleSeries=!0;a.isLog&&0>=e&&(e=null);if(a.isXAxis)b=k.xData,b.length&&(k=F(b),G(k)||k instanceof Date||(b=m(b,function(a){return G(a)}),k=F(b)),a.dataMin=Math.min(y(a.dataMin,b[0]),k),a.dataMax=Math.max(y(a.dataMax,b[0]),E(b)));else if(k.getExtremes(),d=k.dataMax,k=k.dataMin,t(k)&&t(d)&&(a.dataMin=Math.min(y(a.dataMin,k),k),a.dataMax=Math.max(y(a.dataMax,d),d)),t(e)&&(a.threshold=e),!b.softThreshold||a.isLog)a.softThreshold=
!1}})},translate:function(a,b,c,e,d,f){var k=this.linkedParent||this,w=1,m=0,r=e?k.oldTransA:k.transA;e=e?k.oldMin:k.min;var H=k.minPixelPadding;d=(k.isOrdinal||k.isBroken||k.isLog&&d)&&k.lin2val;r||(r=k.transA);c&&(w*=-1,m=k.len);k.reversed&&(w*=-1,m-=w*(k.sector||k.len));b?(a=(a*w+m-H)/r+e,d&&(a=k.lin2val(a))):(d&&(a=k.val2lin(a)),a=w*(a-e)*r+m+w*H+(G(f)?r*f:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,e,d){var k=this.chart,f=this.left,w=this.top,m,r,H=c&&k.oldChartHeight||k.chartHeight,p=c&&k.oldChartWidth||k.chartWidth,D;m=this.transB;var g=function(a,k,b){if(a<k||a>b)e?a=Math.min(Math.max(k,a),b):D=!0;return a};d=y(d,this.translate(a,null,null,c));a=c=Math.round(d+m);m=r=Math.round(H-d-m);G(d)?this.horiz?(m=w,r=H-this.bottom,a=c=g(a,f,f+this.width)):(a=f,c=p-this.right,m=r=g(m,w,w+this.height)):D=!0;return D&&!e?null:k.renderer.crispLine(["M",
a,m,"L",c,r],b||1)},getLinearTickPositions:function(a,b,c){var k,e=q(Math.floor(b/a)*a),d=q(Math.ceil(c/a)*a),f=[];if(b===c&&G(b))return[b];for(b=e;b<=d;){f.push(b);b=q(b+a);if(b===k)break;k=b}return f},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,e=[],d,f=this.pointRangePadding||0;d=this.min-f;var f=this.max+f,w=f-d;if(w&&w/c<this.len/3)if(this.isLog)for(f=b.length,d=1;d<f;d++)e=e.concat(this.getLogTickPositions(c,b[d-1],b[d],!0));else if(this.isDatetimeAxis&&
"auto"===a.minorTickInterval)e=e.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),d,f,a.startOfWeek));else for(b=d+(b[0]-d)%c;b<=f&&b!==e[0];b+=c)e.push(b);0!==e.length&&this.trimTicks(e,a.startOnTick,a.endOnTick);return e},adjustForMinRange:function(){var a=this.options,c=this.min,e=this.max,d,f=this.dataMax-this.dataMin>=this.minRange,w,m,r,p,D,g;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(t(a.min)||t(a.max)?this.minRange=null:(b(this.series,function(a){p=a.xData;for(m=D=a.xIncrement?
1:p.length-1;0<m;m--)if(r=p[m]-p[m-1],void 0===w||r<w)w=r}),this.minRange=Math.min(5*w,this.dataMax-this.dataMin)));e-c<this.minRange&&(g=this.minRange,d=(g-e+c)/2,d=[c-d,y(a.min,c-d)],f&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),c=E(d),e=[c+g,y(a.max,c+g)],f&&(e[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),e=F(e),e-c<g&&(d[0]=e-g,d[1]=y(a.min,e-g),c=E(d)));this.min=c;this.max=e},getClosest:function(){var a;this.categories?a=1:b(this.series,function(k){var b=k.closestPointRange,
c=k.visible||!k.chart.options.chart.ignoreHiddenSeries;!k.noSharedTooltip&&t(b)&&c&&(a=t(a)?Math.min(a,b):b)});return a},nameToX:function(a){var b=r(this.categories),k=b?this.categories:this.names,c=a.options.x,e;a.series.requireSorting=!1;t(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():d(a.name,k));-1===c?b||(e=k.length):e=c;this.names[e]=a.name;return e},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=void 0,b(this.series||[],function(k){k.xIncrement=
null;if(!k.points||k.isDirtyData)k.processData(),k.generatePoints();b(k.points,function(b,c){var e;b.options&&void 0===b.options.x&&(e=a.nameToX(b),e!==b.x&&(b.x=e,k.xData[c]=e))})}))},setAxisTranslation:function(a){var k=this,c=k.max-k.min,e=k.axisPointRange||0,d,w=0,m=0,r=k.linkedParent,p=!!k.categories,D=k.transA,g=k.isXAxis;if(g||p||e)d=k.getClosest(),r?(w=r.minPointOffset,m=r.pointRangePadding):b(k.series,function(a){var b=p?1:g?y(a.options.pointRange,d,0):k.axisPointRange||0;a=a.options.pointPlacement;
e=Math.max(e,b);k.single||(w=Math.max(w,f(a)?0:b/2),m=Math.max(m,"on"===a?0:b))}),r=k.ordinalSlope&&d?k.ordinalSlope/d:1,k.minPointOffset=w*=r,k.pointRangePadding=m*=r,k.pointRange=Math.min(e,c),g&&(k.closestPointRange=d);a&&(k.oldTransA=D);k.translationSlope=k.transA=D=k.len/(c+m||1);k.transB=k.horiz?k.left:k.bottom;k.minPixelPadding=D*w},minFromRange:function(){return this.max-this.range},setTickInterval:function(k){var c=this,d=c.chart,f=c.options,w=c.isLog,m=c.log2lin,r=c.isDatetimeAxis,D=c.isXAxis,
g=c.isLinked,u=f.maxPadding,h=f.minPadding,z=f.tickInterval,I=f.tickPixelInterval,n=c.categories,L=c.threshold,l=c.softThreshold,x,v,C,B;r||n||g||this.getTickAmount();C=y(c.userMin,f.min);B=y(c.userMax,f.max);g?(c.linkedParent=d[c.coll][f.linkedTo],d=c.linkedParent.getExtremes(),c.min=y(d.min,d.dataMin),c.max=y(d.max,d.dataMax),f.type!==c.linkedParent.options.type&&a.error(11,1)):(!l&&t(L)&&(c.dataMin>=L?(x=L,h=0):c.dataMax<=L&&(v=L,u=0)),c.min=y(C,x,c.dataMin),c.max=y(B,v,c.dataMax));w&&(!k&&0>=
Math.min(c.min,y(c.dataMin,c.min))&&a.error(10,1),c.min=q(m(c.min),15),c.max=q(m(c.max),15));c.range&&t(c.max)&&(c.userMin=c.min=C=Math.max(c.min,c.minFromRange()),c.userMax=B=c.max,c.range=null);A(c,"foundExtremes");c.beforePadding&&c.beforePadding();c.adjustForMinRange();!(n||c.axisPointRange||c.usePercentage||g)&&t(c.min)&&t(c.max)&&(m=c.max-c.min)&&(!t(C)&&h&&(c.min-=m*h),!t(B)&&u&&(c.max+=m*u));G(f.floor)?c.min=Math.max(c.min,f.floor):G(f.softMin)&&(c.min=Math.min(c.min,f.softMin));G(f.ceiling)?
c.max=Math.min(c.max,f.ceiling):G(f.softMax)&&(c.max=Math.max(c.max,f.softMax));l&&t(c.dataMin)&&(L=L||0,!t(C)&&c.min<L&&c.dataMin>=L?c.min=L:!t(B)&&c.max>L&&c.dataMax<=L&&(c.max=L));c.tickInterval=c.min===c.max||void 0===c.min||void 0===c.max?1:g&&!z&&I===c.linkedParent.options.tickPixelInterval?z=c.linkedParent.tickInterval:y(z,this.tickAmount?(c.max-c.min)/Math.max(this.tickAmount-1,1):void 0,n?1:(c.max-c.min)*I/Math.max(c.len,I));D&&!k&&b(c.series,function(a){a.processData(c.min!==c.oldMin||c.max!==
c.oldMax)});c.setAxisTranslation(!0);c.beforeSetTickPositions&&c.beforeSetTickPositions();c.postProcessTickInterval&&(c.tickInterval=c.postProcessTickInterval(c.tickInterval));c.pointRange&&!z&&(c.tickInterval=Math.max(c.pointRange,c.tickInterval));k=y(f.minTickInterval,c.isDatetimeAxis&&c.closestPointRange);!z&&c.tickInterval<k&&(c.tickInterval=k);r||w||z||(c.tickInterval=e(c.tickInterval,null,p(c.tickInterval),y(f.allowDecimals,!(.5<c.tickInterval&&5>c.tickInterval&&1E3<c.max&&9999>c.max)),!!this.tickAmount));
this.tickAmount||(c.tickInterval=c.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,c,b=a.tickPositions,e=a.tickPositioner,d=a.startOnTick,f=a.endOnTick,w;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=c=b&&b.slice();!c&&(c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,
a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()]),this.tickPositions=c,e&&(e=e.apply(this,[this.min,this.max])))&&(this.tickPositions=c=e);this.isLinked||(this.trimTicks(c,d,f),this.min===this.max&&t(this.min)&&!this.tickAmount&&(w=!0,this.min-=.5,this.max+=.5),this.single=w,b||e||this.adjustTickAmount())},
trimTicks:function(a,c,b){var k=a[0],e=a[a.length-1],d=this.minPointOffset||0;if(c)this.min=k;else for(;this.min-d>a[0];)a.shift();if(b)this.max=e;else for(;this.max+d<a[a.length-1];)a.pop();0===a.length&&t(k)&&a.push((e+k)/2)},alignToOthers:function(){var a={},c,e=this.options;!1===this.chart.options.chart.alignTicks||!1===e.alignTicks||this.isLog||b(this.chart[this.coll],function(b){var k=b.options,k=[b.horiz?k.left:k.top,k.width,k.height,k.pane].join();b.series.length&&(a[k]?c=!0:a[k]=1)});return c},
getTickAmount:function(){var a=this.options,c=a.tickAmount,b=a.tickPixelInterval;!t(a.tickInterval)&&this.len<b&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(c=2);!c&&this.alignToOthers()&&(c=Math.ceil(this.len/b)+1);4>c&&(this.finalTickAmt=c,c=5);this.tickAmount=c},adjustTickAmount:function(){var a=this.tickInterval,c=this.tickPositions,b=this.tickAmount,e=this.finalTickAmt,d=c&&c.length;if(d<b){for(;c.length<b;)c.push(q(c[c.length-1]+a));this.transA*=(d-1)/(b-1);this.max=c[c.length-
1]}else d>b&&(this.tickInterval*=2,this.setTickPositions());if(t(e)){for(a=b=c.length;a--;)(3===e&&1===a%2||2>=e&&0<a&&a<b-1)&&c.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();c=this.len!==this.oldAxisLength;b(this.series,function(c){if(c.isDirtyData||c.isDirty||c.xAxis.isDirty)a=!0});c||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?
(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,c,e,d,f){var k=this,w=k.chart;e=y(e,!0);b(k.series,function(a){delete a.kdTree});f=g(f,{min:a,max:c});A(k,"setExtremes",f,function(){k.userMin=a;k.userMax=c;k.eventArgs=f;e&&w.redraw(d)})},zoom:function(a,
c){var b=this.dataMin,k=this.dataMax,e=this.options,d=Math.min(b,y(e.min,b)),e=Math.max(k,y(e.max,k));if(a!==this.min||c!==this.max)this.allowZoomOutside||(t(b)&&(a<d&&(a=d),a>e&&(a=e)),t(k)&&(c<d&&(c=d),c>e&&(c=e))),this.displayBtn=void 0!==a||void 0!==c,this.setExtremes(a,c,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,c=this.options,b=c.offsetLeft||0,e=this.horiz,d=y(c.width,a.plotWidth-b+(c.offsetRight||0)),f=y(c.height,a.plotHeight),w=y(c.top,a.plotTop),c=y(c.left,
a.plotLeft+b),b=/%$/;b.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight));b.test(w)&&(w=Math.round(parseFloat(w)/100*a.plotHeight+a.plotTop));this.left=c;this.top=w;this.width=d;this.height=f;this.bottom=a.chartHeight-f-w;this.right=a.chartWidth-d-c;this.len=Math.max(e?d:f,0);this.pos=e?c:w},getExtremes:function(){var a=this.isLog,c=this.lin2log;return{min:a?q(c(this.min)):this.min,max:a?q(c(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},
getThreshold:function(a){var c=this.isLog,b=this.lin2log,k=c?b(this.min):this.min,c=c?b(this.max):this.max;null===a?a=k:k>a?a=k:c<a&&(a=c);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(y(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var c=this.options,b=c[a+"Length"],k=y(c[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(k&&b)return"inside"===c[a+"Position"]&&(b=-b),[b,k]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,e=this.tickInterval,d=e,f=this.len/(((this.categories?1:0)+this.max-this.min)/e),w,m=a.rotation,r=this.labelMetrics(),p,D=Number.MAX_VALUE,g,u=function(a){a/=f||1;a=1<a?Math.ceil(a):1;return a*e};c?(g=!a.staggerLines&&!a.step&&(t(m)?[m]:f<y(a.autoRotationLimit,80)&&a.autoRotation))&&b(g,function(a){var c;if(a===m||a&&-90<=a&&90>=a)p=u(Math.abs(r.h/Math.sin(n*a))),c=p+
Math.abs(a/360),c<D&&(D=c,w=a,d=p)}):a.step||(d=u(r.h));this.autoRotation=g;this.labelRotation=y(w,m);return d},getSlotWidth:function(){var a=this.chart,c=this.horiz,b=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),d=a.margin[3];return c&&2>(b.step||0)&&!b.rotation&&(this.staggerLines||1)*a.plotWidth/e||!c&&(d&&d-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,c=a.renderer,e=this.tickPositions,d=this.ticks,w=this.options.labels,m=this.horiz,
r=this.getSlotWidth(),p=Math.max(1,Math.round(r-2*(w.padding||5))),D={},g=this.labelMetrics(),u=w.style&&w.style.textOverflow,h,y=0,G,I;f(w.rotation)||(D.rotation=w.rotation||0);b(e,function(a){(a=d[a])&&a.labelLength>y&&(y=a.labelLength)});this.maxLabelLength=y;if(this.autoRotation)y>p&&y>g.h?D.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(h={width:p+"px"},!u))for(h.textOverflow="clip",G=e.length;!m&&G--;)if(I=e[G],p=d[I].label)p.styles&&"ellipsis"===p.styles.textOverflow?p.css({textOverflow:"clip"}):
d[I].labelLength>r&&p.css({width:r+"px"}),p.getBBox().height>this.len/e.length-(g.h-g.f)&&(p.specCss={textOverflow:"ellipsis"});D.rotation&&(h={width:(y>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},u||(h.textOverflow="ellipsis"));if(this.labelAlign=w.align||this.autoLabelAlign(this.labelRotation))D.align=this.labelAlign;b(e,function(a){var c=(a=d[a])&&a.label;c&&(c.attr(D),h&&c.css(z(h,c.specCss)),delete c.specCss,a.rotation=D.rotation)});this.tickRotCorr=c.rotCorr(g.b,this.labelRotation||
0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||t(this.min)&&t(this.max)&&!!this.tickPositions},addTitle:function(a){var c=this.chart.renderer,b=this.horiz,k=this.opposite,e=this.options.title,d;this.axisTitle||((d=e.textAlign)||(d=(b?{low:"left",middle:"center",high:"right"}:{low:k?"right":"left",middle:"center",high:k?"left":"right"})[e.align]),this.axisTitle=c.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,align:d}).addClass("highcharts-axis-title").css(e.style).add(this.axisGroup),
this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},getOffset:function(){var a=this,c=a.chart,e=c.renderer,d=a.options,f=a.tickPositions,w=a.ticks,m=a.horiz,r=a.side,p=c.inverted?[1,0,3,2][r]:r,D,g,u=0,h,z=0,G=d.title,I=d.labels,A=0,n=c.axisOffset,c=c.clipOffset,l=[-1,1,1,-1][r],q,x=d.className,v=a.axisParent,C=this.tickSize("tick");D=a.hasData();a.showAxis=g=D||y(d.showEmpty,!0);a.staggerLines=a.horiz&&I.staggerLines;a.axisGroup||(a.gridGroup=e.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+
this.coll.toLowerCase()+"-grid "+(x||"")).add(v),a.axisGroup=e.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(x||"")).add(v),a.labelGroup=e.g("axis-labels").attr({zIndex:I.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(x||"")).add(v));if(D||a.isLinked)b(f,function(c){w[c]?w[c].addLabel():w[c]=new L(a,c)}),a.renderUnsquish(),!1===I.reserveSpace||0!==r&&2!==r&&{1:"left",3:"right"}[r]!==a.labelAlign&&"center"!==a.labelAlign||b(f,function(a){A=
Math.max(w[a].getLabelSize(),A)}),a.staggerLines&&(A*=a.staggerLines,a.labelOffset=A*(a.opposite?-1:1));else for(q in w)w[q].destroy(),delete w[q];G&&G.text&&!1!==G.enabled&&(a.addTitle(g),g&&(u=a.axisTitle.getBBox()[m?"height":"width"],h=G.offset,z=t(h)?0:y(G.margin,m?5:10)));a.renderLine();a.offset=l*y(d.offset,n[r]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};e=0===r?-a.labelMetrics().h:2===r?a.tickRotCorr.y:0;z=Math.abs(A)+z;A&&(z=z-e+l*(m?y(I.y,a.tickRotCorr.y+8*l):I.x));a.axisTitleMargin=y(h,z);
n[r]=Math.max(n[r],a.axisTitleMargin+u+l*a.offset,z,D&&f.length&&C?C[0]:0);d=d.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);c[p]=Math.max(c[p],d)},getLinePath:function(a){var c=this.chart,b=this.opposite,k=this.offset,e=this.horiz,d=this.left+(b?this.width:0)+k,k=c.chartHeight-this.bottom-(b?this.height:0)+k;b&&(a*=-1);return c.renderer.crispLine(["M",e?this.left:d,e?k:this.top,"L",e?c.chartWidth-this.right:d,e?k:c.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=
this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,c=this.left,b=this.top,e=this.len,d=this.options.title,f=a?c:b,w=this.opposite,m=this.offset,r=d.x||0,p=d.y||0,D=this.chart.renderer.fontMetrics(d.style&&d.style.fontSize,this.axisTitle).f,e={low:f+(a?0:e),middle:f+e/2,high:f+(a?e:0)}[d.align],c=(a?b+this.height:c)+(a?1:-1)*
(w?-1:1)*this.axisTitleMargin+(2===this.side?D:0);return{x:a?e+r:c+(w?this.width:0)+m+r,y:a?c+p-(w?this.height:0)+m:e+p}},render:function(){var a=this,e=a.chart,d=e.renderer,f=a.options,w=a.isLog,m=a.lin2log,r=a.isLinked,p=a.tickPositions,D=a.axisTitle,g=a.ticks,u=a.minorTicks,h=a.alternateBands,z=f.stackLabels,y=f.alternateGridColor,A=a.tickmarkOffset,n=a.axisLine,l=e.hasRendered&&G(a.oldMin),q=a.showAxis,t=C(d.globalAnimation),x,v;a.labelEdge.length=0;a.overlap=!1;b([g,u,h],function(a){for(var c in a)a[c].isActive=
!1});if(a.hasData()||r)a.minorTickInterval&&!a.categories&&b(a.getMinorTickPositions(),function(c){u[c]||(u[c]=new L(a,c,"minor"));l&&u[c].isNew&&u[c].render(null,!0);u[c].render(null,!1,1)}),p.length&&(b(p,function(c,b){if(!r||c>=a.min&&c<=a.max)g[c]||(g[c]=new L(a,c)),l&&g[c].isNew&&g[c].render(b,!0,.1),g[c].render(b)}),A&&(0===a.min||a.single)&&(g[-1]||(g[-1]=new L(a,-1,null,!0)),g[-1].render(-1))),y&&b(p,function(b,k){v=void 0!==p[k+1]?p[k+1]+A:a.max-A;0===k%2&&b<a.max&&v<=a.max+(e.polar?-A:A)&&
(h[b]||(h[b]=new c(a)),x=b+A,h[b].options={from:w?m(x):x,to:w?m(v):v,color:y},h[b].render(),h[b].isActive=!0)}),a._addedPlotLB||(b((f.plotLines||[]).concat(f.plotBands||[]),function(c){a.addPlotBandOrLine(c)}),a._addedPlotLB=!0);b([g,u,h],function(a){var c,b,k=[],d=t.duration;for(c in a)a[c].isActive||(a[c].render(c,!1,0),a[c].isActive=!1,k.push(c));I(function(){for(b=k.length;b--;)a[k[b]]&&!a[k[b]].isActive&&(a[k[b]].destroy(),delete a[k[b]])},a!==h&&e.hasRendered&&d?d:0)});n&&(n[n.isPlaced?"animate":
"attr"]({d:this.getLinePath(n.strokeWidth())}),n.isPlaced=!0,n[q?"show":"hide"](!0));D&&q&&(D[D.isNew?"attr":"animate"](a.getTitlePosition()),D.isNew=!1);z&&z.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),b(this.plotLinesAndBands,function(a){a.render()}));b(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,e=c.stacks,k,f=c.plotLinesAndBands,m;a||w(c);for(k in e)h(e[k]),
e[k]=null;b([c.ticks,c.minorTicks,c.alternateBands],function(a){h(a)});if(f)for(a=f.length;a--;)f[a].destroy();b("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){c[a]&&(c[a]=c[a].destroy())});for(m in c)c.hasOwnProperty(m)&&-1===d(m,c.keepProps)&&delete c[m]},drawCrosshair:function(a,c){var b,e=this.crosshair,k=y(e.snap,!0),d,f=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(t(c)||!k)?(k?t(c)&&(d=this.isXAxis?c.plotX:this.len-c.plotY):
d=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),t(d)&&(b=this.getPlotLinePath(c&&(this.isXAxis?c.x:y(c.stackY,c.y)),null,null,null,d)||null),t(b)?(c=this.categories&&!this.isRadial,f||(this.cross=f=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+e.className).attr({zIndex:y(e.zIndex,2)}).add(),f.attr({stroke:e.color||(c?l("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":y(e.width,1)}),e.dashStyle&&f.attr({dashstyle:e.dashStyle})),
f.show().attr({d:b}),c&&!e.width&&f.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};g(a.Axis.prototype,v)})(K);(function(a){var B=a.Axis,C=a.Date,E=a.dateFormat,F=a.defaultOptions,v=a.defined,l=a.each,q=a.extend,x=a.getMagnitude,t=a.getTZOffset,n=a.normalizeTickInterval,h=a.pick,b=a.timeUnits;B.prototype.getTimeTicks=function(a,A,u,p){var m=[],d={},r=F.global.useUTC,g,f=new C(A-t(A)),z=C.hcMakeTime,
e=a.unitRange,y=a.count,c;if(v(A)){f[C.hcSetMilliseconds](e>=b.second?0:y*Math.floor(f.getMilliseconds()/y));if(e>=b.second)f[C.hcSetSeconds](e>=b.minute?0:y*Math.floor(f.getSeconds()/y));if(e>=b.minute)f[C.hcSetMinutes](e>=b.hour?0:y*Math.floor(f[C.hcGetMinutes]()/y));if(e>=b.hour)f[C.hcSetHours](e>=b.day?0:y*Math.floor(f[C.hcGetHours]()/y));if(e>=b.day)f[C.hcSetDate](e>=b.month?1:y*Math.floor(f[C.hcGetDate]()/y));e>=b.month&&(f[C.hcSetMonth](e>=b.year?0:y*Math.floor(f[C.hcGetMonth]()/y)),g=f[C.hcGetFullYear]());
if(e>=b.year)f[C.hcSetFullYear](g-g%y);if(e===b.week)f[C.hcSetDate](f[C.hcGetDate]()-f[C.hcGetDay]()+h(p,1));g=f[C.hcGetFullYear]();p=f[C.hcGetMonth]();var w=f[C.hcGetDate](),D=f[C.hcGetHours]();if(C.hcTimezoneOffset||C.hcGetTimezoneOffset)c=(!r||!!C.hcGetTimezoneOffset)&&(u-A>4*b.month||t(A)!==t(u)),f=f.getTime(),f=new C(f+t(f));r=f.getTime();for(A=1;r<u;)m.push(r),r=e===b.year?z(g+A*y,0):e===b.month?z(g,p+A*y):!c||e!==b.day&&e!==b.week?c&&e===b.hour?z(g,p,w,D+A*y):r+e*y:z(g,p,w+A*y*(e===b.day?1:
7)),A++;m.push(r);e<=b.hour&&l(m,function(a){"000000000"===E("%H%M%S%L",a)&&(d[a]="day")})}m.info=q(a,{higherRanks:d,totalRange:e*y});return m};B.prototype.normalizeTimeTickInterval=function(a,h){var g=h||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];h=g[g.length-1];var p=b[h[0]],m=h[1],d;for(d=0;d<g.length&&!(h=g[d],p=b[h[0]],m=h[1],g[d+1]&&a<=(p*
m[m.length-1]+b[g[d+1][0]])/2);d++);p===b.year&&a<5*p&&(m=[1,2,5]);a=n(a/p,m,"year"===h[0]?Math.max(x(a/p),1):1);return{unitRange:p,count:a,unitName:h[0]}}})(K);(function(a){var B=a.Axis,C=a.getMagnitude,E=a.map,F=a.normalizeTickInterval,v=a.pick;B.prototype.getLogTickPositions=function(a,q,x,t){var n=this.options,h=this.len,b=this.lin2log,g=this.log2lin,A=[];t||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),A=this.getLinearTickPositions(a,q,x);else if(.08<=a)for(var h=Math.floor(q),u,p,
m,d,r,n=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];h<x+1&&!r;h++)for(p=n.length,u=0;u<p&&!r;u++)m=g(b(h)*n[u]),m>q&&(!t||d<=x)&&void 0!==d&&A.push(d),d>x&&(r=!0),d=m;else q=b(q),x=b(x),a=n[t?"minorTickInterval":"tickInterval"],a=v("auto"===a?null:a,this._minorAutoInterval,n.tickPixelInterval/(t?5:1)*(x-q)/((t?h/this.tickPositions.length:h)||1)),a=F(a,null,C(a)),A=E(this.getLinearTickPositions(a,q,x),g),t||(this._minorAutoInterval=a/5);t||(this.tickInterval=a);return A};B.prototype.log2lin=
function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a){var B=a.dateFormat,C=a.each,E=a.extend,F=a.format,v=a.isNumber,l=a.map,q=a.merge,x=a.pick,t=a.splat,n=a.syncTimeout,h=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,g){this.chart=a;this.options=g;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=g.split&&!a.inverted;this.shared=g.shared||this.split},cleanSplit:function(a){C(this.chart.series,
function(b){var g=b&&b.tt;g&&(!g.isActive||a?b.tt=g.destroy():g.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,g=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,g.shape||"callout",null,null,g.useHTML,null,"tooltip").attr({padding:g.padding,r:g.borderRadius}),this.label.attr({fill:g.backgroundColor,"stroke-width":g.borderWidth}).css(g.style).shadow(g.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();
this.init(this.chart,q(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,g,h,u){var b=this,m=b.now,d=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(a-m.x)||1<Math.abs(g-m.y)),r=b.followPointer||1<b.len;E(m,{x:d?(2*m.x+a)/3:a,y:d?(m.y+g)/2:g,anchorX:r?void 0:d?(2*m.anchorX+h)/3:h,anchorY:r?void 0:d?(m.anchorY+
u)/2:u});b.getLabel().attr(m);d&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(a,g,h,u)},32))},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=x(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=n(function(){b.getLabel()[a?"fadeOut":"hide"]();b.isHidden=!0},a))},getAnchor:function(a,g){var b,h=this.chart,p=h.inverted,m=h.plotTop,d=h.plotLeft,r=0,G=0,f,z;a=t(a);b=a[0].tooltipPos;this.followPointer&&g&&(void 0===g.chartX&&(g=h.pointer.normalize(g)),
b=[g.chartX-h.plotLeft,g.chartY-m]);b||(C(a,function(a){f=a.series.yAxis;z=a.series.xAxis;r+=a.plotX+(!p&&z?z.left-d:0);G+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!p&&f?f.top-m:0)}),r/=a.length,G/=a.length,b=[p?h.plotWidth-G:r,this.shared&&!p&&1<a.length&&g?g.chartY-m:p?h.plotHeight-r:G]);return l(b,Math.round)},getPosition:function(a,g,h){var b=this.chart,p=this.distance,m={},d=h.h||0,r,G=["y",b.chartHeight,g,h.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],f=["x",b.chartWidth,a,h.plotX+
b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],z=!this.followPointer&&x(h.ttBelow,!b.inverted===!!h.negative),e=function(a,c,b,e,f,w){var k=b<e-p,r=e+p+b<c,D=e-p-b;e+=p;if(z&&r)m[a]=e;else if(!z&&k)m[a]=D;else if(k)m[a]=Math.min(w-b,0>D-d?D:D-d);else if(r)m[a]=Math.max(f,e+d+b>c?e:e+d);else return!1},y=function(a,c,b,e){var d;e<p||e>c-p?d=!1:m[a]=e<b/2?1:e>c-b/2?c-b-2:e-b/2;return d},c=function(a){var c=G;G=f;f=c;r=a},w=function(){!1!==e.apply(0,G)?!1!==y.apply(0,f)||r||(c(!0),w()):r?m.x=m.y=0:(c(!0),
w())};(b.inverted||1<this.len)&&c();w();return m},defaultFormatter:function(a){var b=this.points||t(this),h;h=[a.tooltipFooterHeaderFormatter(b[0])];h=h.concat(a.bodyFormatter(b));h.push(a.tooltipFooterHeaderFormatter(b[0],!0));return h},refresh:function(a,g){var b=this.chart,h,p=this.options,m,d,r={},G=[];h=p.formatter||this.defaultFormatter;var r=b.hoverPoints,f=this.shared;clearTimeout(this.hideTimer);this.followPointer=t(a)[0].series.tooltipOptions.followPointer;d=this.getAnchor(a,g);g=d[0];m=
d[1];!f||a.series&&a.series.noSharedTooltip?r=a.getLabelConfig():(b.hoverPoints=a,r&&C(r,function(a){a.setState()}),C(a,function(a){a.setState("hover");G.push(a.getLabelConfig())}),r={x:a[0].category,y:a[0].y},r.points=G,this.len=G.length,a=a[0]);r=h.call(r,this);f=a.series;this.distance=x(f.tooltipOptions.distance,16);!1===r?this.hide():(h=this.getLabel(),this.isHidden&&h.attr({opacity:1}).show(),this.split?this.renderSplit(r,b.hoverPoints):(h.attr({text:r&&r.join?r.join(""):r}),h.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+
x(a.colorIndex,f.colorIndex)),h.attr({stroke:p.borderColor||a.color||f.color||"#666666"}),this.updatePosition({plotX:g,plotY:m,negative:a.negative,ttBelow:a.ttBelow,h:d[2]||0})),this.isHidden=!1)},renderSplit:function(b,g){var h=this,u=[],p=this.chart,m=p.renderer,d=!0,r=this.options,G,f=this.getLabel();C(b.slice(0,b.length-1),function(a,b){b=g[b-1]||{isHeader:!0,plotX:g[0].plotX};var e=b.series||h,c=e.tt,w=b.series||{},D="highcharts-color-"+x(b.colorIndex,w.colorIndex,"none");c||(e.tt=c=m.label(null,
null,null,"callout").addClass("highcharts-tooltip-box "+D).attr({padding:r.padding,r:r.borderRadius,fill:r.backgroundColor,stroke:b.color||w.color||"#333333","stroke-width":r.borderWidth}).add(f));c.isActive=!0;c.attr({text:a});c.css(r.style);a=c.getBBox();w=a.width+c.strokeWidth();b.isHeader?(G=a.height,w=Math.max(0,Math.min(b.plotX+p.plotLeft-w/2,p.chartWidth-w))):w=b.plotX+p.plotLeft-x(r.distance,16)-w;0>w&&(d=!1);a=(b.series&&b.series.yAxis&&b.series.yAxis.pos)+(b.plotY||0);a-=p.plotTop;u.push({target:b.isHeader?
p.plotHeight+G:a,rank:b.isHeader?1:0,size:e.tt.getBBox().height+1,point:b,x:w,tt:c})});this.cleanSplit();a.distribute(u,p.plotHeight+G);C(u,function(a){var b=a.point,f=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:d||b.isHeader?a.x:b.plotX+p.plotLeft+x(r.distance,16),y:a.pos+p.plotTop,anchorX:b.isHeader?b.plotX+p.plotLeft:b.plotX+f.xAxis.pos,anchorY:b.isHeader?a.pos+p.plotTop-15:b.plotY+f.yAxis.pos})})},updatePosition:function(a){var b=this.chart,h=this.getLabel(),h=(this.options.positioner||
this.getPosition).call(this,h.width,h.height,a);this.move(Math.round(h.x),Math.round(h.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,g,n){var b;g=g.dateTimeLabelFormats;var p=n&&n.closestPointRange,m,d={millisecond:15,second:12,minute:9,hour:6,day:3},r,G="millisecond";if(p){r=B("%m-%d %H:%M:%S.%L",a.x);for(m in h){if(p===h.week&&+B("%w",a.x)===n.options.startOfWeek&&"00:00:00.000"===r.substr(6)){m="week";break}if(h[m]>p){m=G;break}if(d[m]&&r.substr(d[m])!=="01-01 00:00:00.000".substr(d[m]))break;
"week"!==m&&(G=m)}m&&(b=g[m])}else b=g.day;return b||g.year},tooltipFooterHeaderFormatter:function(a,h){var b=h?"footer":"header";h=a.series;var g=h.tooltipOptions,p=g.xDateFormat,m=h.xAxis,d=m&&"datetime"===m.options.type&&v(a.key),b=g[b+"Format"];d&&!p&&(p=this.getXDateFormat(a,g,m));d&&p&&(b=b.replace("{point.key}","{point.key:"+p+"}"));return F(b,{point:a,series:h})},bodyFormatter:function(a){return l(a,function(a){var b=a.series.tooltipOptions;return(b.pointFormatter||a.point.tooltipFormatter).call(a.point,
b.pointFormat)})}}})(K);(function(a){var B=a.addEvent,C=a.attr,E=a.charts,F=a.color,v=a.css,l=a.defined,q=a.doc,x=a.each,t=a.extend,n=a.fireEvent,h=a.offset,b=a.pick,g=a.removeEvent,A=a.splat,u=a.Tooltip,p=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,d){this.options=d;this.chart=a;this.runChartClick=d.chart.events&&!!d.chart.events.click;this.pinchDown=[];this.lastValidTouch={};u&&d.tooltip.enabled&&(a.tooltip=new u(a,d.tooltip),this.followTouchMove=b(d.tooltip.followTouchMove,
!0));this.setDOMEvents()},zoomOption:function(a){var d=this.chart,m=d.options.chart,p=m.zoomType||"",d=d.inverted;/touch/.test(a.type)&&(p=b(m.pinchType,p));this.zoomX=a=/x/.test(p);this.zoomY=p=/y/.test(p);this.zoomHor=a&&!d||p&&d;this.zoomVert=p&&!d||a&&d;this.hasZoom=a||p},normalize:function(a,b){var d,m;a=a||p.event;a.target||(a.target=a.srcElement);m=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=h(this.chart.container));void 0===m.pageX?(d=Math.max(a.x,
a.clientX-b.left),b=a.y):(d=m.pageX-b.left,b=m.pageY-b.top);return t(a,{chartX:Math.round(d),chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};x(this.chart.axes,function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},runPointActions:function(m){var d=this.chart,r=d.series,p=d.tooltip,f=p?p.shared:!1,h=!0,e=d.hoverPoint,g=d.hoverSeries,c,w,D,u=[],n;if(!f&&!g)for(c=0;c<r.length;c++)if(r[c].directTouch||!r[c].options.stickyTracking)r=
[];g&&(f?g.noSharedTooltip:g.directTouch)&&e?u=[e]:(f||!g||g.options.stickyTracking||(r=[g]),x(r,function(a){w=a.noSharedTooltip&&f;D=!f&&a.directTouch;a.visible&&!w&&!D&&b(a.options.enableMouseTracking,!0)&&(n=a.searchPoint(m,!w&&1===a.kdDimensions))&&n.series&&u.push(n)}),u.sort(function(a,c){var b=a.distX-c.distX,e=a.dist-c.dist,d=c.series.group.zIndex-a.series.group.zIndex;return 0!==b&&f?b:0!==e?e:0!==d?d:a.series.index>c.series.index?-1:1}));if(f)for(c=u.length;c--;)(u[c].x!==u[0].x||u[c].series.noSharedTooltip)&&
u.splice(c,1);if(u[0]&&(u[0]!==this.prevKDPoint||p&&p.isHidden)){if(f&&!u[0].series.noSharedTooltip){for(c=0;c<u.length;c++)u[c].onMouseOver(m,u[c]!==(g&&g.directTouch&&e||u[0]));u.length&&p&&p.refresh(u.sort(function(a,c){return a.series.index-c.series.index}),m)}else if(p&&p.refresh(u[0],m),!g||!g.directTouch)u[0].onMouseOver(m);this.prevKDPoint=u[0];h=!1}h&&(r=g&&g.tooltipOptions.followPointer,p&&r&&!p.isHidden&&(r=p.getAnchor([{}],m),p.updatePosition({plotX:r[0],plotY:r[1]})));this.unDocMouseMove||
(this.unDocMouseMove=B(q,"mousemove",function(c){if(E[a.hoverChartIndex])E[a.hoverChartIndex].pointer.onDocumentMouseMove(c)}));x(f?u:[b(e,u[0])],function(a){x(d.axes,function(c){(!a||a.series&&a.series[c.coll]===c)&&c.drawCrosshair(m,a)})})},reset:function(a,b){var d=this.chart,m=d.hoverSeries,f=d.hoverPoint,p=d.hoverPoints,e=d.tooltip,h=e&&e.shared?p:f;a&&h&&x(A(h),function(c){c.series.isCartesian&&void 0===c.plotX&&(a=!1)});if(a)e&&h&&(e.refresh(h),f&&(f.setState(f.state,!0),x(d.axes,function(a){a.crosshair&&
a.drawCrosshair(null,f)})));else{if(f)f.onMouseOut();p&&x(p,function(a){a.setState()});if(m)m.onMouseOut();e&&e.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());x(d.axes,function(a){a.hideCrosshair()});this.hoverX=this.prevKDPoint=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,b){var d=this.chart,m;x(d.series,function(f){m=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(m),f.markerGroup&&(f.markerGroup.attr(m),f.markerGroup.clip(b?d.clipRect:
null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(m))});d.clipRect.attr(b||d.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,m=b.options.chart,p=a.chartX,f=a.chartY,h=this.zoomHor,e=this.zoomVert,g=b.plotLeft,c=b.plotTop,w=b.plotWidth,D=b.plotHeight,u,n=this.selectionMarker,k=this.mouseDownX,A=this.mouseDownY,l=m.panKey&&a[m.panKey+"Key"];n&&n.touch||
(p<g?p=g:p>g+w&&(p=g+w),f<c?f=c:f>c+D&&(f=c+D),this.hasDragged=Math.sqrt(Math.pow(k-p,2)+Math.pow(A-f,2)),10<this.hasDragged&&(u=b.isInsidePlot(k-g,A-c),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&u&&!l&&!n&&(this.selectionMarker=n=b.renderer.rect(g,c,h?1:w,e?1:D,0).attr({fill:m.selectionMarkerFill||F("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),n&&h&&(p-=k,n.attr({width:Math.abs(p),x:(0<p?0:p)+k})),n&&e&&(p=f-A,n.attr({height:Math.abs(p),y:(0<p?0:p)+
A})),u&&!n&&m.panning&&b.pan(a,m.panning)))},drop:function(a){var b=this,m=this.chart,p=this.hasPinched;if(this.selectionMarker){var f={originalEvent:a,xAxis:[],yAxis:[]},h=this.selectionMarker,e=h.attr?h.attr("x"):h.x,g=h.attr?h.attr("y"):h.y,c=h.attr?h.attr("width"):h.width,w=h.attr?h.attr("height"):h.height,D;if(this.hasDragged||p)x(m.axes,function(d){if(d.zoomEnabled&&l(d.min)&&(p||b[{xAxis:"zoomX",yAxis:"zoomY"}[d.coll]])){var m=d.horiz,k="touchend"===a.type?d.minPixelPadding:0,r=d.toValue((m?
e:g)+k),m=d.toValue((m?e+c:g+w)-k);f[d.coll].push({axis:d,min:Math.min(r,m),max:Math.max(r,m)});D=!0}}),D&&n(m,"selection",f,function(a){m.zoom(t(a,p?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();p&&this.scaleGroups()}m&&(v(m.container,{cursor:m._cursor}),m.cancelClick=10<this.hasDragged,m.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},
onDocumentMouseUp:function(b){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,m=this.chartPosition;a=this.normalize(a,m);!m||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var d=E[a.hoverChartIndex];d&&(b.relatedTarget||b.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=null)},onContainerMouseMove:function(b){var d=this.chart;l(a.hoverChartIndex)&&
E[a.hoverChartIndex]&&E[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=d.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===d.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!d.isInsidePlot(b.chartX-d.plotLeft,b.chartY-d.plotTop)||d.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var d;a;){if(d=C(a,"class")){if(-1!==d.indexOf(b))return!0;if(-1!==d.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;
a=a.relatedTarget||a.toElement;if(!(!b||!a||b.options.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,m=b.hoverPoint,p=b.plotLeft,f=b.plotTop;a=this.normalize(a);b.cancelClick||(m&&this.inClass(a.target,"highcharts-tracker")?(n(m.series,"click",t(a,{point:m})),b.hoverPoint&&m.firePointEvent("click",a)):(t(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-
p,a.chartY-f)&&n(b,"click",a)))},setDOMEvents:function(){var b=this,d=b.chart.container;d.onmousedown=function(a){b.onContainerMouseDown(a)};d.onmousemove=function(a){b.onContainerMouseMove(a)};d.onclick=function(a){b.onContainerClick(a)};B(d,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&B(q,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(d.ontouchstart=function(a){b.onContainerTouchStart(a)},d.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&B(q,"touchend",b.onDocumentTouchEnd))},
destroy:function(){var b;g(this.chart.container,"mouseleave",this.onContainerMouseLeave);a.chartCount||(g(q,"mouseup",this.onDocumentMouseUp),g(q,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(b in this)this[b]=null}}})(K);(function(a){var B=a.charts,C=a.each,E=a.extend,F=a.map,v=a.noop,l=a.pick;E(a.Pointer.prototype,{pinchTranslate:function(a,l,t,n,h,b){this.zoomHor&&this.pinchTranslateDirection(!0,a,l,t,n,h,b);this.zoomVert&&this.pinchTranslateDirection(!1,a,l,t,n,h,
b)},pinchTranslateDirection:function(a,l,t,n,h,b,g,A){var u=this.chart,p=a?"x":"y",m=a?"X":"Y",d="chart"+m,r=a?"width":"height",G=u["plot"+(a?"Left":"Top")],f,z,e=A||1,y=u.inverted,c=u.bounds[a?"h":"v"],w=1===l.length,D=l[0][d],I=t[0][d],L=!w&&l[1][d],k=!w&&t[1][d],q;t=function(){!w&&20<Math.abs(D-L)&&(e=A||Math.abs(I-k)/Math.abs(D-L));z=(G-I)/e+D;f=u["plot"+(a?"Width":"Height")]/e};t();l=z;l<c.min?(l=c.min,q=!0):l+f>c.max&&(l=c.max-f,q=!0);q?(I-=.8*(I-g[p][0]),w||(k-=.8*(k-g[p][1])),t()):g[p]=[I,
k];y||(b[p]=z-G,b[r]=f);b=y?1/e:e;h[r]=f;h[p]=l;n[y?a?"scaleY":"scaleX":"scale"+m]=e;n["translate"+m]=b*G+(I-b*D)},pinch:function(a){var q=this,t=q.chart,n=q.pinchDown,h=a.touches,b=h.length,g=q.lastValidTouch,A=q.hasZoom,u=q.selectionMarker,p={},m=1===b&&(q.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||q.runChartClick),d={};1<b&&(q.initiated=!0);A&&q.initiated&&!m&&a.preventDefault();F(h,function(a){return q.normalize(a)});"touchstart"===a.type?(C(h,function(a,b){n[b]={chartX:a.chartX,
chartY:a.chartY}}),g.x=[n[0].chartX,n[1]&&n[1].chartX],g.y=[n[0].chartY,n[1]&&n[1].chartY],C(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,p=a.toPixels(l(a.options.min,a.dataMin)),e=a.toPixels(l(a.options.max,a.dataMax)),m=Math.max(p,e);b.min=Math.min(a.pos,Math.min(p,e)-d);b.max=Math.max(a.pos+a.len,m+d)}}),q.res=!0):q.followTouchMove&&1===b?this.runPointActions(q.normalize(a)):n.length&&(u||(q.selectionMarker=u=E({destroy:v,touch:!0},t.plotBox)),q.pinchTranslate(n,
h,p,u,d,g),q.hasPinched=A,q.scaleGroups(p,d),q.res&&(q.res=!1,this.reset(!1,0)))},touch:function(q,v){var t=this.chart,n,h;if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===q.touches.length?(q=this.normalize(q),(h=t.isInsidePlot(q.chartX-t.plotLeft,q.chartY-t.plotTop))&&!t.openMenu?(v&&this.runPointActions(q),"touchmove"===q.type&&(v=this.pinchDown,n=v[0]?4<=Math.sqrt(Math.pow(v[0].chartX-q.chartX,2)+Math.pow(v[0].chartY-q.chartY,2)):!1),l(n,
!0)&&this.pinch(q)):v&&this.reset()):2===q.touches.length&&this.pinch(q)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(l){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(l)}})})(K);(function(a){var B=a.addEvent,C=a.charts,E=a.css,F=a.doc,v=a.extend,l=a.noop,q=a.Pointer,x=a.removeEvent,t=a.win,n=a.wrap;if(t.PointerEvent||t.MSPointerEvent){var h={},b=!!t.PointerEvent,g=function(){var a,b=[];
b.item=function(a){return this[a]};for(a in h)h.hasOwnProperty(a)&&b.push({pageX:h[a].pageX,pageY:h[a].pageY,target:h[a].target});return b},A=function(b,p,m,d){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!C[a.hoverChartIndex]||(d(b),d=C[a.hoverChartIndex].pointer,d[p]({type:m,target:b.currentTarget,preventDefault:l,touches:g()}))};v(q.prototype,{onContainerPointerDown:function(a){A(a,"onContainerTouchStart","touchstart",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY,
target:a.currentTarget}})},onContainerPointerMove:function(a){A(a,"onContainerTouchMove","touchmove",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY};h[a.pointerId].target||(h[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){A(a,"onDocumentTouchEnd","touchend",function(a){delete h[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,b?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,b?"pointermove":"MSPointerMove",this.onContainerPointerMove);
a(F,b?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});n(q.prototype,"init",function(a,b,m){a.call(this,b,m);this.hasZoom&&E(b.container,{"-ms-touch-action":"none","touch-action":"none"})});n(q.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B)});n(q.prototype,"destroy",function(a){this.batchMSEvents(x);a.call(this)})}})(K);(function(a){var B,C=a.addEvent,E=a.css,F=a.discardElement,v=a.defined,l=a.each,q=a.extend,x=a.isFirefox,t=a.marginNames,
n=a.merge,h=a.pick,b=a.setAnimation,g=a.stableSort,A=a.win,u=a.wrap;B=a.Legend=function(a,b){this.init(a,b)};B.prototype={init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=h(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=n(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.initialItemX=this.padding=b;this.initialItemY=
b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=h(a.symbolWidth,16);this.pages=[]},update:function(a,b){var d=this.chart;this.setOptions(n(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;h(b,!0)&&d.redraw()},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");var d=this.options,m=a.legendItem,h=a.legendLine,f=a.legendSymbol,p=this.itemHiddenStyle.color,d=b?d.itemStyle.color:p,e=b?a.color||p:p,g=a.options&&a.options.marker,
c={fill:e},w;m&&m.css({fill:d,color:d});h&&h.attr({stroke:e});if(f){if(g&&f.isMarker&&(c=a.pointAttribs(),!b))for(w in c)c[w]=p;f.attr(c)}},positionItem:function(a){var b=this.options,d=b.symbolPadding,b=!b.rtl,h=a._legendItemPos,p=h[0],h=h[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?p:this.legendWidth-p-2*d-4,h);f&&(f.x=p,f.y=h)},destroyItem:function(a){var b=a.checkbox;l(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&F(a.checkbox)},
destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}l(this.getAllItems(),function(b){l(["legendItem","legendGroup"],a,b)});l(["box","title","group"],a,this);this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,d,h=this.clipHeight||this.legendHeight,g=this.titleHeight;b&&(d=b.translateY,l(this.allItems,function(f){var m=f.checkbox,e;m&&(e=d+g+m.y+(a||0)+3,E(m,{left:b.translateX+f.checkboxOffset+m.x-20+"px",top:e+"px",display:e>d-6&&e<d+h-6?"":"none"}))}))},
renderTitle:function(){var a=this.padding,b=this.options.title,d=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d},setText:function(b){var h=this.options;b.legendItem.attr({text:h.labelFormat?a.format(h.labelFormat,b):h.labelFormatter.call(b)})},renderItem:function(a){var b=
this.chart,d=b.renderer,g=this.options,p="horizontal"===g.layout,f=this.symbolWidth,u=g.symbolPadding,e=this.itemStyle,y=this.itemHiddenStyle,c=this.padding,w=p?h(g.itemDistance,20):0,D=!g.rtl,I=g.width,A=g.itemMarginBottom||0,k=this.itemMarginTop,l=this.initialItemX,q=a.legendItem,t=!a.series,v=!t&&a.series.drawLegendSymbol?a.series:a,x=v.options,x=this.createCheckboxForItem&&x&&x.showCheckbox,J=g.useHTML;q||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+v.type+"-series highcharts-color-"+
a.colorIndex+(a.options.className?" "+a.options.className:"")+(t?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=q=d.text("",D?f+u:-u,this.baseline||0,J).css(n(a.visible?e:y)).attr({align:D?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(e=e.fontSize,this.fontMetrics=d.fontMetrics(e,q),this.baseline=this.fontMetrics.f+3+k,q.attr("y",this.baseline)),v.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,q,J),x&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);this.setText(a);d=q.getBBox();f=a.checkboxOffset=g.itemWidth||a.legendItemWidth||f+u+d.width+w+(x?20:0);this.itemHeight=u=Math.round(a.legendItemHeight||d.height);p&&this.itemX-l+f>(I||b.chartWidth-2*c-l-g.x)&&(this.itemX=l,this.itemY+=k+this.lastLineHeight+A,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,f);this.lastItemY=k+this.itemY+A;this.lastLineHeight=Math.max(u,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];p?this.itemX+=f:
(this.itemY+=k+u+A,this.lastLineHeight=u);this.offsetWidth=I||Math.max((p?this.itemX-l-w:f)+c,this.offsetWidth)},getAllItems:function(){var a=[];l(this.chart.series,function(b){var d=b&&b.options;b&&h(d.showInLegend,v(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===d.legendType?b.data:b)))});return a},adjustMargins:function(a,b){var d=this.chart,g=this.options,m=g.align.charAt(0)+g.verticalAlign.charAt(0)+g.layout.charAt(0);g.floating||l([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,
/(lbv|lm|ltv)/],function(f,p){f.test(m)&&!v(a[p])&&(d[t[p]]=Math.max(d[t[p]],d.legend[(p+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][p]*g[p%2?"x":"y"]+h(g.margin,12)+b[p]))})},render:function(){var a=this,b=a.chart,d=b.renderer,h=a.group,u,f,n,e,y=a.box,c=a.options,w=a.padding;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;h||(a.group=h=d.g("legend").attr({zIndex:7}).add(),a.contentGroup=d.g().attr({zIndex:1}).add(h),a.scrollGroup=d.g().add(a.contentGroup));a.renderTitle();
u=a.getAllItems();g(u,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});c.reversed&&u.reverse();a.allItems=u;a.display=f=!!u.length;a.lastLineHeight=0;l(u,function(b){a.renderItem(b)});n=(c.width||a.offsetWidth)+w;e=a.lastItemY+a.lastLineHeight+a.titleHeight;e=a.handleOverflow(e);e+=w;y||(a.box=y=d.rect().addClass("highcharts-legend-box").attr({r:c.borderRadius}).add(h),y.isNew=!0);y.attr({stroke:c.borderColor,"stroke-width":c.borderWidth||0,fill:c.backgroundColor||
"none"}).shadow(c.shadow);0<n&&0<e&&(y[y.isNew?"attr":"animate"](y.crisp({x:0,y:0,width:n,height:e},y.strokeWidth())),y.isNew=!1);y[f?"show":"hide"]();a.legendWidth=n;a.legendHeight=e;l(u,function(b){a.positionItem(b)});f&&h.align(q({width:n,height:e},c),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,d=this.chart,g=d.renderer,p=this.options,f=p.y,d=d.spacingBox.height+("top"===p.verticalAlign?-f:f)-this.padding,f=p.maxHeight,u,e=this.clipRect,y=p.navigation,
c=h(y.animation,!0),w=y.arrowSize||12,D=this.nav,n=this.pages,A=this.padding,k,q=this.allItems,t=function(a){a?e.attr({height:a}):e&&(b.clipRect=e.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+A+"px,9999px,"+(A+a)+"px,0)":"auto")};"horizontal"!==p.layout||"middle"===p.verticalAlign||p.floating||(d/=2);f&&(d=Math.min(d,f));n.length=0;a>d&&!1!==y.enabled?(this.clipHeight=u=Math.max(d-20-this.titleHeight-A,0),this.currentPage=h(this.currentPage,1),this.fullHeight=
a,l(q,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var e=n.length;if(!e||c-n[e-1]>u&&(k||c)!==n[e-1])n.push(k||c),e++;b===q.length-1&&c+a-n[e-1]>u&&n.push(c);c!==k&&(k=c)}),e||(e=b.clipRect=g.clipRect(0,A,9999,0),b.contentGroup.clip(e)),t(u),D||(this.nav=D=g.g().attr({zIndex:1}).add(this.group),this.up=g.symbol("triangle",0,0,w,w).on("click",function(){b.scroll(-1,c)}).add(D),this.pager=g.text("",15,10).addClass("highcharts-legend-navigation").css(y.style).add(D),
this.down=g.symbol("triangle-down",0,0,w,w).on("click",function(){b.scroll(1,c)}).add(D)),b.scroll(0),a=d):D&&(t(),D.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,h){var d=this.pages,g=d.length;a=this.currentPage+a;var m=this.clipHeight,f=this.options.navigation,p=this.pager,e=this.padding;a>g&&(a=g);0<a&&(void 0!==h&&b(h,this.chart),this.nav.attr({translateX:e,translateY:m+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===
a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),p.attr({text:a+"/"+g}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===g?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?f.inactiveColor:f.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===g?f.inactiveColor:f.activeColor}).css({cursor:a===g?"default":"pointer"}),h=-d[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:h}),this.currentPage=
a,this.positionCheckboxes(h))}};a.LegendSymbolMixin={drawRectangle:function(a,b){var d=a.options,g=d.symbolHeight||a.fontMetrics.f,d=d.squareSymbol;b.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-g)/2:0,a.baseline-g+1,d?g:a.symbolWidth,g,h(a.options.symbolRadius,g/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,d=b.marker,h=a.symbolWidth,g=this.chart.renderer,f=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);
var u;u={"stroke-width":b.lineWidth||0};b.dashStyle&&(u.dashstyle=b.dashStyle);this.legendLine=g.path(["M",0,a,"L",h,a]).addClass("highcharts-graph").attr(u).add(f);d&&!1!==d.enabled&&(b=0===this.symbol.indexOf("url")?0:d.radius,this.legendSymbol=d=g.symbol(this.symbol,h/2-b,a-b,2*b,2*b,d).addClass("highcharts-point").add(f),d.isMarker=!0)}};(/Trident\/7\.0/.test(A.navigator.userAgent)||x)&&u(B.prototype,"positionItem",function(a,b){var d=this,h=function(){b._legendItemPos&&a.call(d,b)};h();setTimeout(h)})})(K);
(function(a){var B=a.addEvent,C=a.animate,E=a.animObject,F=a.attr,v=a.doc,l=a.Axis,q=a.createElement,x=a.defaultOptions,t=a.discardElement,n=a.charts,h=a.css,b=a.defined,g=a.each,A=a.extend,u=a.find,p=a.fireEvent,m=a.getStyle,d=a.grep,r=a.isNumber,G=a.isObject,f=a.isString,z=a.Legend,e=a.marginNames,y=a.merge,c=a.Pointer,w=a.pick,D=a.pInt,I=a.removeEvent,L=a.seriesTypes,k=a.splat,H=a.svg,R=a.syncTimeout,M=a.win,O=a.Renderer,N=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,
b,c){return new N(a,b,c)};N.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(f(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var e,d=b.series;b.series=null;e=y(x,b);e.series=b.series=d;this.userOptions=b;this.respRules=[];b=e.chart;d=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=e;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var k;this.index=n.length;
n.push(this);a.chartCount++;if(d)for(k in d)B(this,k,d[k]);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(b){var c=this.options.chart;(c=L[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},isInsidePlot:function(a,b,c){var e=c?b:a;a=c?a:b;return 0<=e&&e<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,e=this.series,d=this.pointer,k=this.legend,f=this.isDirtyLegend,
w,h,D=this.hasCartesianSeries,m=this.isDirtyBox,u=e.length,r=u,y=this.renderer,n=y.isHidden(),z=[];a.setAnimation(b,this);n&&this.cloneRenderTo();for(this.layOutTitles();r--;)if(b=e[r],b.options.stacking&&(w=!0,b.isDirty)){h=!0;break}if(h)for(r=u;r--;)b=e[r],b.options.stacking&&(b.isDirty=!0);g(e,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&p(a,"updatedData")});f&&k.options.enabled&&(k.render(),this.isDirtyLegend=!1);w&&this.getStacks();
D&&g(c,function(a){a.updateNames();a.setScale()});this.getMargins();D&&(g(c,function(a){a.isDirty&&(m=!0)}),g(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,z.push(function(){p(a,"afterSetExtremes",A(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(m||w)&&a.redraw()}));m&&this.drawChartBox();g(e,function(a){(m||a.isDirty)&&a.visible&&a.redraw()});d&&d.reset(!0);y.draw();p(this,"redraw");n&&this.cloneRenderTo(!0);g(z,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options.id===a}var c,e=this.series,d;c=u(this.axes,b)||u(this.series,b);for(d=0;!c&&d<e.length;d++)c=u(e[d].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=k(b.xAxis||{}),b=b.yAxis=k(b.yAxis||{});g(c,function(a,b){a.index=b;a.isX=!0});g(b,function(a,b){a.index=b});c=c.concat(b);g(c,function(b){new l(a,b)})},getSelectedPoints:function(){var a=[];g(this.series,function(b){a=a.concat(d(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return d(this.series,
function(a){return a.selected})},setTitle:function(a,b,c){var e=this,d=e.options,k;k=d.title=y({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=y({style:{color:"#666666"}},d.subtitle,b);g([["title",a,k],["subtitle",b,d]],function(a,b){var c=a[0],d=e[c],k=a[1];a=a[2];d&&k&&(e[c]=d=d.destroy());a&&a.text&&!d&&(e[c]=e.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),e[c].update=function(a){e.setTitle(!b&&a,b&&
a)},e[c].css(a.style))});e.layOutTitles(c)},layOutTitles:function(a){var b=0,c,e=this.renderer,d=this.spacingBox;g(["title","subtitle"],function(a){var c=this[a],k=this.options[a],f;c&&(f=k.style.fontSize,f=e.fontMetrics(f,c).b,c.css({width:(k.width||d.width+k.widthAdjust)+"px"}).align(A({y:b+f+("title"===a?-3:2)},k),!1,"spacingBox"),k.floating||k.verticalAlign||(b=Math.ceil(b+c.getBBox().height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&
w(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,c=a.width,a=a.height,e=this.renderToClone||this.renderTo;b(c)||(this.containerWidth=m(e,"width"));b(a)||(this.containerHeight=m(e,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,w(a,19<this.containerHeight?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);
t(b);delete this.renderToClone}}else c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),h(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),v.body.appendChild(b),c&&b.appendChild(c)},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,e=c.chart,d,k;b=this.renderTo;var w=a.uniqueKey(),h;b||
(this.renderTo=b=e.renderTo);f(b)&&(this.renderTo=b=v.getElementById(b));b||a.error(13,!0);d=D(F(b,"data-highcharts-chart"));r(d)&&n[d]&&n[d].hasRendered&&n[d].destroy();F(b,"data-highcharts-chart",this.index);b.innerHTML="";e.skipClone||b.offsetWidth||this.cloneRenderTo();this.getChartSize();d=this.chartWidth;k=this.chartHeight;h=A({position:"relative",overflow:"hidden",width:d+"px",height:k+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},e.style);
this.container=b=q("div",{id:w},h,this.renderToClone||b);this._cursor=b.style.cursor;this.renderer=new (a[e.renderer]||O)(b,d,k,null,e.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(e.className);this.renderer.setStyle(e.style);this.renderer.chartIndex=this.index},getMargins:function(a){var c=this.spacing,e=this.margin,d=this.titleOffset;this.resetMargins();d&&!b(e[0])&&(this.plotTop=Math.max(this.plotTop,d+this.options.title.margin+c[0]));this.legend.display&&this.legend.adjustMargins(e,
c);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,c=a.axisOffset=[0,0,0,0],d=a.margin;a.hasCartesianSeries&&g(a.axes,function(a){a.visible&&a.getOffset()});g(e,function(e,k){b(d[k])||(a[e]+=c[k])});a.setChartSize()},reflow:function(a){var c=this,e=c.options.chart,d=c.renderTo,k=b(e.width),f=e.width||m(d,"width"),e=e.height||m(d,"height"),d=a?a.target:M;if(!k&&
!c.isPrinting&&f&&e&&(d===M||d===v)){if(f!==c.containerWidth||e!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=R(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=f;c.containerHeight=e}},initReflow:function(){var a=this,b;b=B(M,"resize",function(b){a.reflow(b)});B(a,"destroy",b)},setSize:function(b,c,e){var d=this,k=d.renderer;d.isResizing+=1;a.setAnimation(e,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;void 0!==b&&(d.options.chart.width=
b);void 0!==c&&(d.options.chart.height=c);d.getChartSize();b=k.globalAnimation;(b?C:h)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},b);d.setChartSize(!0);k.setSize(d.chartWidth,d.chartHeight,e);g(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.setResponsive&&d.setResponsive(!1);d.redraw(e);d.oldChartHeight=null;p(d,"resize");R(function(){d&&p(d,"endResize",null,function(){--d.isResizing})},E(b).duration)},setChartSize:function(a){var b=
this.inverted,c=this.renderer,e=this.chartWidth,d=this.chartHeight,k=this.options.chart,f=this.spacing,w=this.clipOffset,h,D,m,u;this.plotLeft=h=Math.round(this.plotLeft);this.plotTop=D=Math.round(this.plotTop);this.plotWidth=m=Math.max(0,Math.round(e-h-this.marginRight));this.plotHeight=u=Math.max(0,Math.round(d-D-this.marginBottom));this.plotSizeX=b?u:m;this.plotSizeY=b?m:u;this.plotBorderWidth=k.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:f[3],y:f[0],width:e-f[3]-f[1],height:d-f[0]-f[2]};
this.plotBox=c.plotBox={x:h,y:D,width:m,height:u};e=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(e,w[3])/2);c=Math.ceil(Math.max(e,w[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(e,w[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(e,w[2])/2-c))};a||g(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;g(["margin","spacing"],function(c){var e=b[c],d=G(e)?e:[e,e,e,e];g(["Top","Right",
"Bottom","Left"],function(e,k){a[c][k]=w(b[c+e],d[k])})});g(e,function(b,c){a[b]=w(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,e=this.chartHeight,d=this.chartBackground,k=this.plotBackground,f=this.plotBorder,w,h=this.plotBGImage,g=a.backgroundColor,D=a.plotBackgroundColor,m=a.plotBackgroundImage,u,r=this.plotLeft,p=this.plotTop,y=this.plotWidth,n=this.plotHeight,z=this.plotBox,A=this.clipRect,
I=this.clipBox,l="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),l="attr");w=a.borderWidth||0;u=w+(a.shadow?8:0);g={fill:g||"none"};if(w||d["stroke-width"])g.stroke=a.borderColor,g["stroke-width"]=w;d.attr(g).shadow(a.shadow);d[l]({x:u/2,y:u/2,width:c-u-w%2,height:e-u-w%2,r:a.borderRadius});l="animate";k||(l="attr",this.plotBackground=k=b.rect().addClass("highcharts-plot-background").add());k[l](z);k.attr({fill:D||"none"}).shadow(a.plotShadow);m&&(h?h.animate(z):
this.plotBGImage=b.image(m,r,p,y,n).add());A?A.animate({width:I.width,height:I.height}):this.clipRect=b.clipRect(I);l="animate";f||(l="attr",this.plotBorder=f=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());f.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});f[l](f.crisp({x:r,y:p,width:y,height:n},-f.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,e=a.options.series,d,k;g(["inverted","angular","polar"],
function(f){c=L[b.type||b.defaultSeriesType];k=b[f]||c&&c.prototype[f];for(d=e&&e.length;!k&&d--;)(c=L[e[d].type])&&c.prototype[f]&&(k=!0);a[f]=k})},linkSeries:function(){var a=this,b=a.series;g(b,function(a){a.linkedSeries.length=0});g(b,function(b){var c=b.options.linkedTo;f(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=w(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){g(this.series,function(a){a.translate();
a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&g(b.items,function(c){var e=A(b.style,c.style),d=D(e.left)+a.plotLeft,k=D(e.top)+a.plotTop+12;delete e.left;delete e.top;a.renderer.text(c.html,d,k).attr({zIndex:2}).css(e).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,e,d,k;this.setTitle();this.legend=new z(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;e=this.plotHeight-=21;g(a,function(a){a.setScale()});
this.getAxisMargins();d=1.1<c/this.plotWidth;k=1.05<e/this.plotHeight;if(d||k)g(a,function(a){(a.horiz&&d||!a.horiz&&k)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&g(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=y(!0,this.options.credits,
a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,e=b.series,d=b.container,k,f=d&&d.parentNode;p(b,"destroy");n[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");
I(b);for(k=c.length;k--;)c[k]=c[k].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(k=e.length;k--;)e[k]=e[k].destroy();g("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",I(d),f&&t(d));for(k in b)delete b[k]},isReadyToRender:function(){var a=this;return H||M!=M.top||"complete"===
v.readyState?!0:(v.attachEvent("onreadystatechange",function(){v.detachEvent("onreadystatechange",a.firstRender);"complete"===v.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();p(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();g(b.series||[],function(b){a.initSeries(b)});a.linkSeries();p(a,"beforeRender");c&&(a.pointer=new c(a,b));a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();
a.cloneRenderTo(!0)}},onload:function(){g([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);p(this,"load");b(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(K);(function(a){var B,C=a.each,E=a.extend,F=a.erase,v=a.fireEvent,l=a.format,q=a.isArray,x=a.isNumber,t=a.pick,n=a.removeEvent;B=a.Point=function(){};B.prototype={init:function(a,b,g){this.series=a;this.color=a.color;this.applyOptions(b,g);a.options.colorByPoint?
(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter],b=b.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===b&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=t(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,b){var g=this.series,h=g.options.pointValKey||g.pointValKey;a=B.prototype.optionsToObject.call(this,a);E(this,a);this.options=this.options?E(this.options,a):a;a.group&&delete this.group;h&&(this.y=this[h]);this.isNull=t(this.isValid&&
!this.isValid(),null===this.x||!x(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===b&&g.xAxis&&g.xAxis.hasNames&&(this.x=g.xAxis.nameToX(this));void 0===this.x&&g&&(this.x=void 0===b?g.autoIncrement(this):b);return this},optionsToObject:function(a){var b={},g=this.series,h=g.options.keys,u=h||g.pointArrayMap||["y"],p=u.length,m=0,d=0;if(x(a)||null===a)b[u[0]]=a;else if(q(a))for(!h&&a.length>p&&(g=typeof a[0],"string"===g?b.name=a[0]:"number"===g&&(b.x=a[0]),m++);d<p;)h&&void 0===
a[m]||(b[u[d]]=a[m]),m++,d++;else"object"===typeof a&&(b=a,a.dataLabels&&(g._hasPointLabels=!0),a.marker&&(g._hasPointMarkers=!0));return b},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className:"")},
getZone:function(){var a=this.series,b=a.zones,a=a.zoneAxis||"y",g=0,n;for(n=b[g];this[a]>=n.value;)n=b[++g];n&&n.color&&!this.options.color&&(this.color=n.color);return n},destroy:function(){var a=this.series.chart,b=a.hoverPoints,g;a.pointCount--;b&&(this.setState(),F(b,this),b.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)n(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(g in this)this[g]=null},destroyElements:function(){for(var a=
["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,g=6;g--;)b=a[g],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,g=b.tooltipOptions,h=t(g.valueDecimals,""),u=g.valuePrefix||"",p=g.valueSuffix||"";C(b.pointArrayMap||["y"],function(b){b="{point."+b;
if(u||p)a=a.replace(b+"}",u+b+"}"+p);a=a.replace(b+"}",b+":,."+h+"f}")});return l(a,{point:this,series:this.series})},firePointEvent:function(a,b,g){var h=this,u=this.series.options;(u.point.events[a]||h.options&&h.options.events&&h.options.events[a])&&this.importEvents();"click"===a&&u.allowPointSelect&&(g=function(a){h.select&&h.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});v(this,a,b,g)},visible:!0}})(K);(function(a){var B=a.addEvent,C=a.animObject,E=a.arrayMax,F=a.arrayMin,v=a.correctFloat,
l=a.Date,q=a.defaultOptions,x=a.defaultPlotOptions,t=a.defined,n=a.each,h=a.erase,b=a.extend,g=a.fireEvent,A=a.grep,u=a.isArray,p=a.isNumber,m=a.isString,d=a.merge,r=a.pick,G=a.removeEvent,f=a.splat,z=a.SVGElement,e=a.syncTimeout,y=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",
lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,
directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,e){var c=this,d,f,k=a.series,w;c.chart=a;c.options=e=c.setOptions(e);c.linkedSeries=[];c.bindAxes();b(c,{name:e.name,state:"",visible:!1!==e.visible,selected:!0===e.selected});f=e.events;for(d in f)B(c,d,f[d]);if(f&&f.click||e.point&&e.point.events&&e.point.events.click||e.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();n(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(e.data,
!1);c.isCartesian&&(a.hasCartesianSeries=!0);k.length&&(w=k[k.length-1]);c._i=r(w&&w._i,-1)+1;for(a=this.insert(k);a<k.length;a++)k[a].index=a,k[a].name=k[a].name||"Series "+(k[a].index+1)},insert:function(a){var b=this.options.index,c;if(p(b)){for(c=a.length;c--;)if(b>=r(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return r(c,a.length-1)},bindAxes:function(){var b=this,e=b.options,d=b.chart,f;n(b.axisTypes||[],function(c){n(d[c],function(a){f=
a.options;if(e[c]===f.index||void 0!==e[c]&&e[c]===f.id||void 0===e[c]&&0===f.index)b.insert(a.series),b[c]=a,a.isDirty=!0});b[c]||b.optionalAxis===c||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,e=arguments,d=p(b)?function(e){var d="y"===e&&c.toYData?c.toYData(a):a[e];c[e+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(e,2))};n(c.parallelArrays,d)},autoIncrement:function(){var a=this.options,b=this.xIncrement,e,d=a.pointIntervalUnit,
b=r(b,a.pointStart,0);this.pointInterval=e=r(this.pointInterval,a.pointInterval,1);d&&(a=new l(b),"day"===d?a=+a[l.hcSetDate](a[l.hcGetDate]()+e):"month"===d?a=+a[l.hcSetMonth](a[l.hcGetMonth]()+e):"year"===d&&(a=+a[l.hcSetFullYear](a[l.hcGetFullYear]()+e)),e=a-b);this.xIncrement=b+e;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},e=b.plotOptions||{},f=c[this.type];this.userOptions=a;c=d(f,c.series,a);this.tooltipOptions=d(q.tooltip,q.plotOptions[this.type].tooltip,
b.tooltip,e.series&&e.series.tooltip,e[this.type]&&e[this.type].tooltip,a.tooltip);null===f.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&t(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,e){var c,d=this.userOptions,
k=a+"Index",f=a+"Counter",w=e?e.length:r(this.chart.options.chart[a+"Count"],this.chart[a+"Count"]);b||(c=r(d[k],d["_"+k]),t(c)||(d["_"+k]=c=this.chart[f]%w,this.chart[f]+=1),e&&(b=e[c]));void 0!==c&&(this[k]=c);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||x[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,
setData:function(b,e,d,f){var c=this,k=c.points,w=k&&k.length||0,g,h=c.options,D=c.chart,y=null,z=c.xAxis,l=h.turboThreshold,A=this.xData,I=this.yData,G=(g=c.pointArrayMap)&&g.length;b=b||[];g=b.length;e=r(e,!0);if(!1!==f&&g&&w===g&&!c.cropped&&!c.hasGroupedData&&c.visible)n(b,function(a,b){k[b].update&&a!==h.data[b]&&k[b].update(a,!1,null,!1)});else{c.xIncrement=null;c.colorCounter=0;n(this.parallelArrays,function(a){c[a+"Data"].length=0});if(l&&g>l){for(d=0;null===y&&d<g;)y=b[d],d++;if(p(y))for(d=
0;d<g;d++)A[d]=this.autoIncrement(),I[d]=b[d];else if(u(y))if(G)for(d=0;d<g;d++)y=b[d],A[d]=y[0],I[d]=y.slice(1,G+1);else for(d=0;d<g;d++)y=b[d],A[d]=y[0],I[d]=y[1];else a.error(12)}else for(d=0;d<g;d++)void 0!==b[d]&&(y={series:c},c.pointClass.prototype.applyOptions.apply(y,[b[d]]),c.updateParallelArrays(y,d));m(I[0])&&a.error(14,!0);c.data=[];c.options.data=c.userOptions.data=b;for(d=w;d--;)k[d]&&k[d].destroy&&k[d].destroy();z&&(z.minRange=z.userMinRange);c.isDirty=D.isDirtyBox=!0;c.isDirtyData=
!!k;d=!1}"point"===h.legendType&&(this.processData(),this.generatePoints());e&&D.redraw(d)},processData:function(b){var c=this.xData,e=this.yData,d=c.length,f;f=0;var k,g,h=this.xAxis,m,u=this.options;m=u.cropThreshold;var r=this.getExtremesFromAll||u.getExtremesFromAll,p=this.isCartesian,u=h&&h.val2lin,y=h&&h.isLog,n,z;if(p&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!b)return!1;h&&(b=h.getExtremes(),n=b.min,z=b.max);if(p&&this.sorted&&!r&&(!m||d>m||this.forceCrop))if(c[d-1]<n||c[0]>z)c=[],
e=[];else if(c[0]<n||c[d-1]>z)f=this.cropData(this.xData,this.yData,n,z),c=f.xData,e=f.yData,f=f.start,k=!0;for(m=c.length||1;--m;)d=y?u(c[m])-u(c[m-1]):c[m]-c[m-1],0<d&&(void 0===g||d<g)?g=d:0>d&&this.requireSorting&&a.error(15);this.cropped=k;this.cropStart=f;this.processedXData=c;this.processedYData=e;this.closestPointRange=g},cropData:function(a,b,e,d){var c=a.length,k=0,f=c,w=r(this.cropShoulder,1),g;for(g=0;g<c;g++)if(a[g]>=e){k=Math.max(0,g-w);break}for(e=g;e<c;e++)if(a[e]>d){f=e+w;break}return{xData:a.slice(k,
f),yData:b.slice(k,f),start:k,end:f}},generatePoints:function(){var a=this.options.data,b=this.data,e,d=this.processedXData,g=this.processedYData,k=this.pointClass,h=d.length,m=this.cropStart||0,u,r=this.hasGroupedData,p,y=[],n;b||r||(b=[],b.length=a.length,b=this.data=b);for(n=0;n<h;n++)u=m+n,r?(p=(new k).init(this,[d[n]].concat(f(g[n]))),p.dataGroup=this.groupMap[n]):(p=b[u])||void 0===a[u]||(b[u]=p=(new k).init(this,a[u],d[n])),p.index=u,y[n]=p;if(b&&(h!==(e=b.length)||r))for(n=0;n<e;n++)n!==m||
r||(n+=h),b[n]&&(b[n].destroyElements(),b[n].plotX=void 0);this.data=b;this.points=y},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,e,d=[],k=0;e=this.xAxis.getExtremes();var f=e.min,g=e.max,h,m,r,n;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(n=0;n<e;n++)if(m=c[n],r=a[n],h=(p(r,!0)||u(r))&&(!b.isLog||r.length||0<r),m=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[n+1]||m)>=f&&(c[n-1]||m)<=g,h&&m)if(h=r.length)for(;h--;)null!==r[h]&&(d[k++]=
r[h]);else d[k++]=r;this.dataMin=F(d);this.dataMax=E(d)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,e=this.xAxis,d=e.categories,f=this.yAxis,k=this.points,g=k.length,h=!!this.modifyValue,m=a.pointPlacement,u="between"===m||p(m),n=a.threshold,y=a.startFromThreshold?n:0,z,l,A,G,q=Number.MAX_VALUE;"between"===m&&(m=.5);p(m)&&(m*=r(a.pointRange||e.pointRange));for(a=0;a<g;a++){var x=k[a],C=x.x,B=x.y;l=x.low;var E=b&&f.stacks[(this.negStacks&&
B<(y?0:n)?"-":"")+this.stackKey],F;f.isLog&&null!==B&&0>=B&&(x.isNull=!0);x.plotX=z=v(Math.min(Math.max(-1E5,e.translate(C,0,0,0,1,m,"flags"===this.type)),1E5));b&&this.visible&&!x.isNull&&E&&E[C]&&(G=this.getStackIndicator(G,C,this.index),F=E[C],B=F.points[G.key],l=B[0],B=B[1],l===y&&G.key===E[C].base&&(l=r(n,f.min)),f.isLog&&0>=l&&(l=null),x.total=x.stackTotal=F.total,x.percentage=F.total&&x.y/F.total*100,x.stackY=B,F.setOffset(this.pointXOffset||0,this.barW||0));x.yBottom=t(l)?f.translate(l,0,
1,0,1):null;h&&(B=this.modifyValue(B,x));x.plotY=l="number"===typeof B&&Infinity!==B?Math.min(Math.max(-1E5,f.translate(B,0,1,0,1)),1E5):void 0;x.isInside=void 0!==l&&0<=l&&l<=f.len&&0<=z&&z<=e.len;x.clientX=u?v(e.translate(C,0,0,0,1,m)):z;x.negative=x.y<(n||0);x.category=d&&void 0!==d[x.x]?d[x.x]:x.x;x.isNull||(void 0!==A&&(q=Math.min(q,Math.abs(z-A))),A=z);x.zone=this.zones.length&&x.getZone()}this.closestPointRangePx=q},getValidPoints:function(a,b){var c=this.chart;return A(a||this.points||[],
function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,e=b.renderer,d=b.inverted,f=this.clipBox,g=f||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(),m=b[h],u=b[h+"m"];m||(a&&(g.width=0,b[h+"m"]=u=e.clipRect(-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[h]=m=e.clipRect(g),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=
1);!1!==c.clip&&(this.group.clip(a||f?m:b.clipRect),this.markerGroup.clip(u),this.sharedClipKey=h);a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&h&&b[h]&&(f||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,c=C(this.options.animation),e;a?this.setClip(c):(e=this.sharedClipKey,(a=b[e])&&a.animate({width:b.plotSizeX},c),b[e+"m"]&&b[e+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();
g(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,e,d,f,k,g=this.options.marker,h,m,u,n,y=this.markerGroup,z=r(g.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>2*g.radius);if(!1!==g.enabled||this._hasPointMarkers)for(d=a.length;d--;)f=a[d],e=f.plotY,k=f.graphic,h=f.marker||{},m=!!f.marker,u=z&&void 0===h.enabled||h.enabled,n=f.isInside,u&&p(e)&&null!==f.y?(e=r(h.symbol,this.symbol),f.hasImage=0===e.indexOf("url"),u=this.markerAttribs(f,f.selected&&"select"),
k?k[n?"show":"hide"](!0).animate(u):n&&(0<u.width||f.hasImage)&&(f.graphic=k=b.renderer.symbol(e,u.x,u.y,u.width,u.height,m?h:g).add(y)),k&&k.attr(this.pointAttribs(f,f.selected&&"select")),k&&k.addClass(f.getClassName(),!0)):k&&(f.graphic=k.destroy())},markerAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,d=e&&e.marker||{},e=r(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],e=r(b&&b.radius,c&&c.radius,e+(c&&c.radiusPlus||0)));a.hasImage&&(e=0);a={x:Math.floor(a.plotX)-
e,y:a.plotY-e};e&&(a.width=a.height=2*e);return a},pointAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,d=e&&e.marker||{},f=this.color,g=e&&e.color,h=a&&a.color,e=r(d.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;f=g||a||h||f;a=d.fillColor||c.fillColor||f;f=d.lineColor||c.lineColor||f;b&&(c=c.states[b],b=d.states&&d.states[b]||{},e=r(b.lineWidth,c.lineWidth,e+r(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,f=b.lineColor||c.lineColor||f);return{stroke:f,"stroke-width":e,
fill:a}},destroy:function(){var a=this,b=a.chart,e=/AppleWebKit\/533/.test(y.navigator.userAgent),d,f=a.data||[],k,m,u;g(a,"destroy");G(a);n(a.axisTypes||[],function(b){(u=a[b])&&u.series&&(h(u.series,a),u.isDirty=u.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(d=f.length;d--;)(k=f[d])&&k.destroy&&k.destroy();a.points=null;clearTimeout(a.animationTimeout);for(m in a)a[m]instanceof z&&!a[m].survive&&(d=e&&"group"===m?"hide":"destroy",a[m][d]());b.hoverSeries===a&&(b.hoverSeries=
null);h(b.series,a);for(m in a)delete a[m]},getGraphPath:function(a,b,e){var c=this,d=c.options,f=d.step,g,h=[],w=[],m;a=a||c.points;(g=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);!d.connectNulls||b||e||(a=this.getValidPoints(a));n(a,function(k,g){var u=k.plotX,r=k.plotY,p=a[g-1];(k.leftCliff||p&&p.rightCliff)&&!e&&(m=!0);k.isNull&&!t(b)&&0<g?m=!d.connectNulls:k.isNull&&!b?m=!0:(0===g||m?g=["M",k.plotX,k.plotY]:c.getPointSpline?g=c.getPointSpline(a,k,g):f?(g=1===f?["L",p.plotX,
r]:2===f?["L",(p.plotX+u)/2,p.plotY,"L",(p.plotX+u)/2,r]:["L",u,p.plotY],g.push("L",u,r)):g=["L",u,r],w.push(k.x),f&&w.push(k.x),h.push.apply(h,g),m=!1)});h.xMap=w;return c.graphPath=h},drawGraph:function(){var a=this,b=this.options,e=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];n(this.zones,function(c,e){d.push(["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+e+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});
n(d,function(c,d){var f=c[0],k=a[f];k?(k.endX=e.xMap,k.animate({d:e})):e.length&&(a[f]=a.chart.renderer.path(e).addClass(c[1]).attr({zIndex:1}).add(a.group),k={stroke:c[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},c[3]?k.dashstyle=c[3]:"square"!==b.linecap&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),k=a[f].attr(k).shadow(2>d&&b.shadow));k&&(k.startX=e.xMap,k.isArea=e.isArea)})},applyZones:function(){var a=this,b=this.chart,e=b.renderer,d=this.zones,f,k,g=this.clips||[],
h,m=this.graph,u=this.area,p=Math.max(b.chartWidth,b.chartHeight),y=this[(this.zoneAxis||"y")+"Axis"],z,l,A=b.inverted,G,q,t,v,x=!1;d.length&&(m||u)&&y&&void 0!==y.min&&(l=y.reversed,G=y.horiz,m&&m.hide(),u&&u.hide(),z=y.getExtremes(),n(d,function(c,d){f=l?G?b.plotWidth:0:G?0:y.toPixels(z.min);f=Math.min(Math.max(r(k,f),0),p);k=Math.min(Math.max(Math.round(y.toPixels(r(c.value,z.max),!0)),0),p);x&&(f=k=y.toPixels(z.max));q=Math.abs(f-k);t=Math.min(f,k);v=Math.max(f,k);y.isXAxis?(h={x:A?v:t,y:0,width:q,
height:p},G||(h.x=b.plotHeight-h.x)):(h={x:0,y:A?v:t,width:p,height:q},G&&(h.y=b.plotWidth-h.y));A&&e.isVML&&(h=y.isXAxis?{x:0,y:l?t:v,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[d]?g[d].animate(h):(g[d]=e.clipRect(h),m&&a["zone-graph-"+d].clip(g[d]),u&&a["zone-area-"+d].clip(g[d]));x=c.value>z.max}),this.clips=g)},invertGroups:function(a){function b(){var b={width:c.yAxis.len,height:c.xAxis.len};n(["group","markerGroup"],function(e){c[e]&&
c[e].attr(b).invert(a)})}var c=this,e;c.xAxis&&(e=B(c.chart,"resize",b),B(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,e,d,f){var c=this[a],g=!c;g&&(this[a]=c=this.chart.renderer.g(b).attr({zIndex:d||.1}).add(f),c.addClass("highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));c.attr({visibility:e})[g?"attr":"animate"](this.getPlotBox());return c},getPlotBox:function(){var a=this.chart,b=this.xAxis,e=
this.yAxis;a.inverted&&(b=e,e=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:e?e.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,d,f=a.options,g=!!a.animate&&b.renderer.isSVG&&C(f.animation).duration,k=a.visible?"inherit":"hidden",h=f.zIndex,m=a.hasRendered,u=b.seriesGroup,r=b.inverted;d=a.plotGroup("group","series",k,h,u);a.markerGroup=a.plotGroup("markerGroup","markers",k,h,u);g&&a.animate(!0);d.inverted=a.isCartesian?r:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());
a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(r);!1===f.clip||a.sharedClipKey||m||d.clip(b.clipRect);g&&a.animate();m||(a.animationTimeout=e(function(){a.afterAnimate()},g));a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,e=this.group,d=this.xAxis,f=this.yAxis;e&&(a.inverted&&e.attr({width:a.plotWidth,height:a.plotHeight}),e.animate({translateX:r(d&&
d.left,a.plotLeft),translateY:r(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,e=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:d?e.len-a.chartX+e.pos:a.chartY-e.pos},b)},buildKDTree:function(){function a(c,e,d){var f,k;if(k=c&&c.length)return f=b.kdAxisArray[e%d],c.sort(function(a,b){return a[f]-b[f]}),k=Math.floor(k/
2),{point:c[k],left:a(c.slice(0,k),e+1,d),right:a(c.slice(k+1),e+1,d)}}var b=this,d=b.kdDimensions;delete b.kdTree;e(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),d,d)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,h){var m=b.point,u=e.kdAxisArray[k%h],w,r,p=m;r=t(a[d])&&t(m[d])?Math.pow(a[d]-m[d],2):null;w=t(a[f])&&t(m[f])?Math.pow(a[f]-m[f],2):null;w=(r||0)+(w||0);m.dist=t(w)?Math.sqrt(w):Number.MAX_VALUE;m.distX=t(r)?Math.sqrt(r):Number.MAX_VALUE;u=a[u]-m[u];w=
0>u?"left":"right";r=0>u?"right":"left";b[w]&&(w=c(a,b[w],k+1,h),p=w[g]<p[g]?w:m);b[r]&&Math.sqrt(u*u)<p[g]&&(a=c(a,b[r],k+1,h),p=a[g]<p[g]?a:p);return p}var e=this,d=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}})})(K);(function(a){function B(a,h,b,g,l){var u=a.chart.inverted;this.axis=a;this.isNegative=b;this.options=h;this.x=g;this.total=null;this.points={};this.stack=l;this.rightCliff=
this.leftCliff=0;this.alignOptions={align:h.align||(u?b?"left":"right":"center"),verticalAlign:h.verticalAlign||(u?"middle":b?"bottom":"top"),y:t(h.y,u?4:b?14:-6),x:t(h.x,u?b?-6:6:0)};this.textAlign=h.textAlign||(u?b?"right":"left":"center")}var C=a.Axis,E=a.Chart,F=a.correctFloat,v=a.defined,l=a.destroyObjectProperties,q=a.each,x=a.format,t=a.pick;a=a.Series;B.prototype={destroy:function(){l(this,this.axis)},render:function(a){var h=this.options,b=h.format,b=b?x(b,this):h.formatter.call(this);this.label?
this.label.attr({text:b,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(b,null,null,h.useHTML).css(h.style).attr({align:this.textAlign,rotation:h.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,h){var b=this.axis,g=b.chart,n=g.inverted,u=b.reversed,u=this.isNegative&&!u||!this.isNegative&&u,p=b.translate(b.usePercentage?100:this.total,0,0,0,1),b=b.translate(0),b=Math.abs(p-b);a=g.xAxis[0].translate(this.x)+a;var m=g.plotHeight,n={x:n?u?p:p-b:a,y:n?m-a-h:u?m-p-b:m-p,width:n?
b:h,height:n?h:b};if(h=this.label)h.align(this.alignOptions,null,n),n=h.alignAttr,h[!1===this.options.crop||g.isInsidePlot(n.x,n.y)?"show":"hide"](!0)}};E.prototype.getStacks=function(){var a=this;q(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});q(a.series,function(h){!h.options.stacking||!0!==h.visible&&!1!==a.options.chart.ignoreHiddenSeries||(h.stackKey=h.type+t(h.options.stack,""))})};C.prototype.buildStacks=function(){var a=this.series,h,b=t(this.options.reversedStacks,
!0),g=a.length,l;if(!this.isXAxis){this.usePercentage=!1;for(l=g;l--;)a[b?l:g-l-1].setStackedPoints();for(l=g;l--;)h=a[b?l:g-l-1],h.setStackCliffs&&h.setStackCliffs();if(this.usePercentage)for(l=0;l<g;l++)a[l].setPercentStacks()}};C.prototype.renderStackTotals=function(){var a=this.chart,h=a.renderer,b=this.stacks,g,l,u=this.stackTotalGroup;u||(this.stackTotalGroup=u=h.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());u.translate(a.plotLeft,a.plotTop);for(g in b)for(l in a=b[g],a)a[l].render(u)};
C.prototype.resetStacks=function(){var a=this.stacks,h,b;if(!this.isXAxis)for(h in a)for(b in a[h])a[h][b].touched<this.stacksTouched?(a[h][b].destroy(),delete a[h][b]):(a[h][b].total=null,a[h][b].cum=null)};C.prototype.cleanStacks=function(){var a,h,b;if(!this.isXAxis)for(h in this.oldStacks&&(a=this.stacks=this.oldStacks),a)for(b in a[h])a[h][b].cum=a[h][b].total};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=
this.processedXData,h=this.processedYData,b=[],g=h.length,l=this.options,u=l.threshold,p=l.startFromThreshold?u:0,m=l.stack,l=l.stacking,d=this.stackKey,r="-"+d,G=this.negStacks,f=this.yAxis,z=f.stacks,e=f.oldStacks,y,c,w,D,q,x,k;f.stacksTouched+=1;for(q=0;q<g;q++)x=a[q],k=h[q],y=this.getStackIndicator(y,x,this.index),D=y.key,w=(c=G&&k<(p?0:u))?r:d,z[w]||(z[w]={}),z[w][x]||(e[w]&&e[w][x]?(z[w][x]=e[w][x],z[w][x].total=null):z[w][x]=new B(f,f.options.stackLabels,c,x,m)),w=z[w][x],null!==k&&(w.points[D]=
w.points[this.index]=[t(w.cum,p)],v(w.cum)||(w.base=D),w.touched=f.stacksTouched,0<y.index&&!1===this.singleStacks&&(w.points[D][0]=w.points[this.index+","+x+",0"][0])),"percent"===l?(c=c?d:r,G&&z[c]&&z[c][x]?(c=z[c][x],w.total=c.total=Math.max(c.total,w.total)+Math.abs(k)||0):w.total=F(w.total+(Math.abs(k)||0))):w.total=F(w.total+(k||0)),w.cum=t(w.cum,p)+(k||0),null!==k&&(w.points[D].push(w.cum),b[q]=w.cum);"percent"===l&&(f.usePercentage=!0);this.stackedYData=b;f.oldStacks={}}};a.prototype.setPercentStacks=
function(){var a=this,h=a.stackKey,b=a.yAxis.stacks,g=a.processedXData,l;q([h,"-"+h],function(h){for(var u=g.length,m,d;u--;)if(m=g[u],l=a.getStackIndicator(l,m,a.index,h),m=(d=b[h]&&b[h][m])&&d.points[l.key])d=d.total?100/d.total:0,m[0]=F(m[0]*d),m[1]=F(m[1]*d),a.stackedYData[u]=m[1]})};a.prototype.getStackIndicator=function(a,h,b,g){!v(a)||a.x!==h||g&&a.key!==g?a={x:h,index:0,key:g}:a.index++;a.key=[b,h,a.index].join();return a}})(K);(function(a){var B=a.addEvent,C=a.animate,E=a.Axis,F=a.createElement,
v=a.css,l=a.defined,q=a.each,x=a.erase,t=a.extend,n=a.fireEvent,h=a.inArray,b=a.isNumber,g=a.isObject,A=a.merge,u=a.pick,p=a.Point,m=a.Series,d=a.seriesTypes,r=a.setAnimation,G=a.splat;t(a.Chart.prototype,{addSeries:function(a,b,e){var d,c=this;a&&(b=u(b,!0),n(c,"addSeries",{options:a},function(){d=c.initSeries(a);c.isDirtyLegend=!0;c.linkSeries();b&&c.redraw(e)}));return d},addAxis:function(a,b,e,d){var c=b?"xAxis":"yAxis",f=this.options;a=A(a,{index:this[c].length,isX:b});new E(this,a);f[c]=G(f[c]||
{});f[c].push(a);u(e,!0)&&this.redraw(d)},showLoading:function(a){var b=this,e=b.options,d=b.loadingDiv,c=e.loading,f=function(){d&&v(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=F("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=F("span",{className:"highcharts-loading-inner"},null,d),B(b,"redraw",f));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||e.lang.loading;v(d,t(c.style,
{zIndex:10}));v(b.loadingSpan,c.labelStyle);b.loadingShown||(v(d,{opacity:0,display:""}),C(d,{opacity:c.style.opacity||.5},{duration:c.showDuration||0}));b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",C(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){v(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),update:function(a,d){var e,f={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},c=a.chart,g,m;if(c){A(!0,this.options.chart,c);"className"in c&&this.setClassName(c.className);if("inverted"in c||"polar"in c)this.propFromSeries(),g=!0;for(e in c)c.hasOwnProperty(e)&&(-1!==h("chart."+e,this.propsRequireUpdateSeries)&&(m=!0),-1!==h(e,this.propsRequireDirtyBox)&&(this.isDirtyBox=
!0));"style"in c&&this.renderer.setStyle(c.style)}for(e in a){if(this[e]&&"function"===typeof this[e].update)this[e].update(a[e],!1);else if("function"===typeof this[f[e]])this[f[e]](a[e]);"chart"!==e&&-1!==h(e,this.propsRequireUpdateSeries)&&(m=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&A(!0,this.options.plotOptions,a.plotOptions);q(["xAxis","yAxis","series"],function(b){a[b]&&q(G(a[b]),function(a){var c=l(a.id)&&this.get(a.id)||this[b][0];c&&c.coll===b&&c.update(a,!1)},this)},this);
g&&q(this.axes,function(a){a.update({},!1)});m&&q(this.series,function(a){a.update({},!1)});a.loading&&A(!0,this.options.loading,a.loading);e=c&&c.width;c=c&&c.height;b(e)&&e!==this.chartWidth||b(c)&&c!==this.chartHeight?this.setSize(e,c):u(d,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});t(p.prototype,{update:function(a,b,e,d){function c(){f.applyOptions(a);null===f.y&&m&&(f.graphic=m.destroy());g(a,!0)&&(m&&m.element&&a&&a.marker&&a.marker.symbol&&(f.graphic=m.destroy()),
a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()));r=f.index;h.updateParallelArrays(f,r);p.data[r]=g(p.data[r],!0)?f.options:a;h.isDirty=h.isDirtyData=!0;!h.fixedBox&&h.hasCartesianSeries&&(k.isDirtyBox=!0);"point"===p.legendType&&(k.isDirtyLegend=!0);b&&k.redraw(e)}var f=this,h=f.series,m=f.graphic,r,k=h.chart,p=h.options;b=u(b,!0);!1===d?c():f.firePointEvent("update",{options:a},c)},remove:function(a,b){this.series.removePoint(h(this,this.series.data),a,b)}});t(m.prototype,{addPoint:function(a,
b,e,d){var c=this.options,f=this.data,g=this.chart,h=this.xAxis&&this.xAxis.names,m=c.data,k,r,p=this.xData,y,l;b=u(b,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);l=k.x;y=p.length;if(this.requireSorting&&l<p[y-1])for(r=!0;y&&p[y-1]>l;)y--;this.updateParallelArrays(k,"splice",y,0,0);this.updateParallelArrays(k,y);h&&k.name&&(h[l]=k.name);m.splice(y,0,a);r&&(this.data.splice(y,0,null),this.processData());"point"===c.legendType&&this.generatePoints();e&&(f[0]&&f[0].remove?
f[0].remove(!1):(f.shift(),this.updateParallelArrays(k,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;b&&g.redraw(d)},removePoint:function(a,b,e){var d=this,c=d.data,f=c[a],g=d.points,h=d.chart,m=function(){g&&g.length===c.length&&g.splice(a,1);c.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};r(e,h);b=u(b,!0);f?f.firePointEvent("remove",null,m):m()},remove:function(a,b,e){function d(){c.destroy();
f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();u(a,!0)&&f.redraw(b)}var c=this,f=c.chart;!1!==e?n(c,"remove",null,d):d()},update:function(a,b){var e=this,f=this.chart,c=this.userOptions,g=this.type,h=a.type||c.type||f.options.chart.type,m=d[g].prototype,r=["group","markerGroup","dataLabelsGroup"],k;if(h&&h!==g||void 0!==a.zIndex)r.length=0;q(r,function(a){r[a]=e[a];delete e[a]});a=A(c,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1,null,!1);for(k in m)this[k]=
void 0;t(this,d[h||g].prototype);q(r,function(a){e[a]=r[a]});this.init(f,a);f.linkSeries();u(b,!0)&&f.redraw(!1)}});t(E.prototype,{update:function(a,b){var d=this.chart;a=d.options[this.coll][this.options.index]=A(this.userOptions,a);this.destroy(!0);this.init(d,t(a,{events:void 0}));d.isDirtyBox=!0;u(b,!0)&&d.redraw()},remove:function(a){for(var b=this.chart,d=this.coll,f=this.series,c=f.length;c--;)f[c]&&f[c].remove(!1);x(b.axes,this);x(b[d],this);b.options[d].splice(this.options.index,1);q(b[d],
function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;u(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var B=a.color,C=a.each,E=a.map,F=a.pick,v=a.Series,l=a.seriesType;l("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var a=[],l=[],t=this.xAxis,n=this.yAxis,h=n.stacks[this.stackKey],b={},g=this.points,A=this.index,u=n.series,p=u.length,m,d=F(n.options.reversedStacks,
!0)?1:-1,r,G;if(this.options.stacking){for(r=0;r<g.length;r++)b[g[r].x]=g[r];for(G in h)null!==h[G].total&&l.push(G);l.sort(function(a,b){return a-b});m=E(u,function(){return this.visible});C(l,function(f,g){var e=0,u,c;if(b[f]&&!b[f].isNull)a.push(b[f]),C([-1,1],function(a){var e=1===a?"rightNull":"leftNull",w=0,n=h[l[g+a]];if(n)for(r=A;0<=r&&r<p;)u=n.points[r],u||(r===A?b[f][e]=!0:m[r]&&(c=h[f].points[r])&&(w-=c[1]-c[0])),r+=d;b[f][1===a?"rightCliff":"leftCliff"]=w});else{for(r=A;0<=r&&r<p;){if(u=
h[f].points[r]){e=u[1];break}r+=d}e=n.toPixels(e,!0);a.push({isNull:!0,plotX:t.toPixels(f,!0),plotY:e,yBottom:e})}})}return a},getGraphPath:function(a){var l=v.prototype.getGraphPath,q=this.options,n=q.stacking,h=this.yAxis,b,g,A=[],u=[],p=this.index,m,d=h.stacks[this.stackKey],r=q.threshold,G=h.getThreshold(q.threshold),f,q=q.connectNulls||"percent"===n,z=function(b,f,c){var e=a[b];b=n&&d[e.x].points[p];var g=e[c+"Null"]||0;c=e[c+"Cliff"]||0;var l,y,e=!0;c||g?(l=(g?b[0]:b[1])+c,y=b[0]+c,e=!!g):!n&&
a[f]&&a[f].isNull&&(l=y=r);void 0!==l&&(u.push({plotX:m,plotY:null===l?G:h.getThreshold(l),isNull:e}),A.push({plotX:m,plotY:null===y?G:h.getThreshold(y),doCurve:!1}))};a=a||this.points;n&&(a=this.getStackPoints());for(b=0;b<a.length;b++)if(g=a[b].isNull,m=F(a[b].rectPlotX,a[b].plotX),f=F(a[b].yBottom,G),!g||q)q||z(b,b-1,"left"),g&&!n&&q||(u.push(a[b]),A.push({x:b,plotX:m,plotY:f})),q||z(b,b+1,"right");b=l.call(this,u,!0,!0);A.reversed=!0;g=l.call(this,A,!0,!0);g.length&&(g[0]="L");g=b.concat(g);l=
l.call(this,u,!1,q);g.xMap=b.xMap;this.areaPath=g;return l},drawGraph:function(){this.areaPath=[];v.prototype.drawGraph.apply(this);var a=this,l=this.areaPath,t=this.options,n=[["area","highcharts-area",this.color,t.fillColor]];C(this.zones,function(h,b){n.push(["zone-area-"+b,"highcharts-area highcharts-zone-area-"+b+" "+h.className,h.color||a.color,h.fillColor||t.fillColor])});C(n,function(h){var b=h[0],g=a[b];g?(g.endX=l.xMap,g.animate({d:l})):(g=a[b]=a.chart.renderer.path(l).addClass(h[1]).attr({fill:F(h[3],
B(h[2]).setOpacity(F(t.fillOpacity,.75)).get()),zIndex:0}).add(a.group),g.isArea=!0);g.startX=l.xMap;g.shiftUnit=t.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var B=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,E,F){var v=E.plotX,l=E.plotY,q=a[F-1];F=a[F+1];var x,t,n,h;if(q&&!q.isNull&&!1!==q.doCurve&&F&&!F.isNull&&!1!==F.doCurve){a=q.plotY;n=F.plotX;F=F.plotY;var b=0;x=(1.5*v+q.plotX)/2.5;t=(1.5*l+a)/2.5;n=(1.5*v+n)/2.5;h=(1.5*l+F)/2.5;
n!==x&&(b=(h-t)*(n-v)/(n-x)+l-h);t+=b;h+=b;t>a&&t>l?(t=Math.max(a,l),h=2*l-t):t<a&&t<l&&(t=Math.min(a,l),h=2*l-t);h>F&&h>l?(h=Math.max(F,l),t=2*l-h):h<F&&h<l&&(h=Math.min(F,l),t=2*l-h);E.rightContX=n;E.rightContY=h}E=["C",B(q.rightContX,q.plotX),B(q.rightContY,q.plotY),B(x,v),B(t,l),v,l];q.rightContX=q.rightContY=null;return E}})})(K);(function(a){var B=a.seriesTypes.area.prototype,C=a.seriesType;C("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:B.getStackPoints,getGraphPath:B.getGraphPath,
setStackCliffs:B.setStackCliffs,drawGraph:B.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var B=a.animObject,C=a.color,E=a.each,F=a.extend,v=a.isNumber,l=a.merge,q=a.pick,x=a.Series,t=a.seriesType,n=a.svg;t("column","line",{borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,
y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){x.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&E(b.series,function(b){b.type===a.type&&(b.isDirty=!0)})},getColumnMetrics:function(){var a=this,b=a.options,g=a.xAxis,l=a.yAxis,u=g.reversed,p,m={},d=0;!1===b.grouping?d=1:E(a.chart.series,function(b){var e=
b.options,f=b.yAxis,c;b.type===a.type&&b.visible&&l.len===f.len&&l.pos===f.pos&&(e.stacking?(p=b.stackKey,void 0===m[p]&&(m[p]=d++),c=m[p]):!1!==e.grouping&&(c=d++),b.columnIndex=c)});var r=Math.min(Math.abs(g.transA)*(g.ordinalSlope||b.pointRange||g.closestPointRange||g.tickInterval||1),g.len),n=r*b.groupPadding,f=(r-2*n)/d,b=Math.min(b.maxPointWidth||g.len,q(b.pointWidth,f*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(f-b)/2+(n+((a.columnIndex||0)+(u?1:0))*f-r/2)*(u?-1:1)};return a.columnMetrics},
crispCol:function(a,b,g,l){var h=this.chart,p=this.borderWidth,m=-(p%2?.5:0),p=p%2?.5:1;h.inverted&&h.renderer.isVML&&(p+=1);g=Math.round(a+g)+m;a=Math.round(a)+m;l=Math.round(b+l)+p;m=.5>=Math.abs(b)&&.5<l;b=Math.round(b)+p;l-=b;m&&l&&(--b,l+=1);return{x:a,y:b,width:g-a,height:l}},translate:function(){var a=this,b=a.chart,g=a.options,l=a.dense=2>a.closestPointRange*a.xAxis.transA,l=a.borderWidth=q(g.borderWidth,l?0:1),u=a.yAxis,p=a.translatedThreshold=u.getThreshold(g.threshold),m=q(g.minPointLength,
5),d=a.getColumnMetrics(),r=d.width,n=a.barW=Math.max(r,1+2*l),f=a.pointXOffset=d.offset;b.inverted&&(p-=.5);g.pointPadding&&(n=Math.ceil(n));x.prototype.translate.apply(a);E(a.points,function(d){var e=q(d.yBottom,p),g=999+Math.abs(e),g=Math.min(Math.max(-g,d.plotY),u.len+g),c=d.plotX+f,h=n,l=Math.min(g,e),G,z=Math.max(g,e)-l;Math.abs(z)<m&&m&&(z=m,G=!u.reversed&&!d.negative||u.reversed&&d.negative,l=Math.abs(l-p)>m?e-m:p-(G?m:0));d.barX=c;d.pointWidth=r;d.tooltipPos=b.inverted?[u.len+u.pos-b.plotLeft-
g,a.xAxis.len-c-h/2,z]:[c+h/2,g+u.pos-b.plotTop,z];d.shapeType="rect";d.shapeArgs=a.crispCol.apply(a,d.isNull?[d.plotX,u.len/2,0,0]:[c,l,h,z])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,b){var g=this.options,h,u=this.pointAttrToOptions||{};h=u.stroke||"borderColor";var p=u["stroke-width"]||"borderWidth",m=a&&a.color||this.color,d=a[h]||g[h]||this.color||
m,r=a[p]||g[p]||this[p]||0,u=g.dashStyle;a&&this.zones.length&&(m=(m=a.getZone())&&m.color||a.options.color||this.color);b&&(a=g.states[b],b=a.brightness,m=a.color||void 0!==b&&C(m).brighten(a.brightness).get()||m,d=a[h]||d,r=a[p]||r,u=a.dashStyle||u);h={fill:m,stroke:d,"stroke-width":r};g.borderRadius&&(h.r=g.borderRadius);u&&(h.dashstyle=u);return h},drawPoints:function(){var a=this,b=this.chart,g=a.options,n=b.renderer,u=g.animationLimit||250,p;E(a.points,function(m){var d=m.graphic;if(v(m.plotY)&&
null!==m.y){p=m.shapeArgs;if(d)d[b.pointCount<u?"animate":"attr"](l(p));else m.graphic=d=n[m.shapeType](p).attr({"class":m.getClassName()}).add(m.group||a.group);d.attr(a.pointAttribs(m,m.selected&&"select")).shadow(g.shadow,null,g.stacking&&!g.borderRadius)}else d&&(m.graphic=d.destroy())})},animate:function(a){var b=this,g=this.yAxis,h=b.options,u=this.chart.inverted,p={};n&&(a?(p.scaleY=.001,a=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(h.threshold))),u?p.translateX=a-g.len:p.translateY=a,b.group.attr(p)):
(p[u?"translateX":"translateY"]=g.pos,b.group.animate(p,F(B(b.options.animation),{step:function(a,d){b.group.attr({scaleY:Math.max(.001,d.pos)})}})),b.animate=null))},remove:function(){var a=this,b=a.chart;b.hasRendered&&E(b.series,function(b){b.type===a.type&&(b.isDirty=!0)});x.prototype.remove.apply(a,arguments)}})})(K);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)}})})(K);(function(a){var B=a.pick,C=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,F=this.chart,v=2*(a.slicedOffset||0),l=F.plotWidth-2*v,F=F.plotHeight-
2*v,q=a.center,q=[B(q[0],"50%"),B(q[1],"50%"),a.size||"100%",a.innerSize||0],x=Math.min(l,F),t,n;for(t=0;4>t;++t)n=q[t],a=2>t||2===t&&/%$/.test(n),q[t]=C(n,[l,F,x,q[2]][t])+(a?v:0);q[3]>q[2]&&(q[3]=q[2]);return q}}})(K);(function(a){var B=a.addEvent,C=a.defined,E=a.each,F=a.extend,v=a.inArray,l=a.noop,q=a.pick,x=a.Point,t=a.Series,n=a.seriesType,h=a.setAnimation;n("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return null===this.y?
void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var b=this,h=b.points,u=b.startAngleRad;a||(E(h,function(a){var g=
a.graphic,d=a.shapeArgs;g&&(g.attr({r:a.startR||b.center[3]/2,start:u,end:u}),g.animate({r:d.r,start:d.start,end:d.end},b.options.animation))}),b.animate=null)},updateTotals:function(){var a,g=0,h=this.points,u=h.length,p,m=this.options.ignoreHiddenPoint;for(a=0;a<u;a++)p=h[a],0>p.y&&(p.y=null),g+=m&&!p.visible?0:p.y;this.total=g;for(a=0;a<u;a++)p=h[a],p.percentage=0<g&&(p.visible||!m)?p.y/g*100:0,p.total=g},generatePoints:function(){t.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();
var b=0,h=this.options,u=h.slicedOffset,p=u+(h.borderWidth||0),m,d,r,l=h.startAngle||0,f=this.startAngleRad=Math.PI/180*(l-90),l=(this.endAngleRad=Math.PI/180*(q(h.endAngle,l+360)-90))-f,n=this.points,e=h.dataLabels.distance,h=h.ignoreHiddenPoint,y,c=n.length,w;a||(this.center=a=this.getCenter());this.getX=function(b,c){r=Math.asin(Math.min((b-a[1])/(a[2]/2+e),1));return a[0]+(c?-1:1)*Math.cos(r)*(a[2]/2+e)};for(y=0;y<c;y++){w=n[y];m=f+b*l;if(!h||w.visible)b+=w.percentage/100;d=f+b*l;w.shapeType=
"arc";w.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*m)/1E3,end:Math.round(1E3*d)/1E3};r=(d+m)/2;r>1.5*Math.PI?r-=2*Math.PI:r<-Math.PI/2&&(r+=2*Math.PI);w.slicedTranslation={translateX:Math.round(Math.cos(r)*u),translateY:Math.round(Math.sin(r)*u)};m=Math.cos(r)*a[2]/2;d=Math.sin(r)*a[2]/2;w.tooltipPos=[a[0]+.7*m,a[1]+.7*d];w.half=r<-Math.PI/2||r>Math.PI/2?1:0;w.angle=r;p=Math.min(p,e/5);w.labelPos=[a[0]+m+Math.cos(r)*e,a[1]+d+Math.sin(r)*e,a[0]+m+Math.cos(r)*p,a[1]+d+Math.sin(r)*
p,a[0]+m,a[1]+d,0>e?"center":w.half?"right":"left",r]}},drawGraph:null,drawPoints:function(){var a=this,g=a.chart.renderer,h,u,p,m,d=a.options.shadow;d&&!a.shadowGroup&&(a.shadowGroup=g.g("shadow").add(a.group));E(a.points,function(b){if(null!==b.y){u=b.graphic;m=b.shapeArgs;h=b.sliced?b.slicedTranslation:{};var r=b.shadowGroup;d&&!r&&(r=b.shadowGroup=g.g("shadow").add(a.shadowGroup));r&&r.attr(h);p=a.pointAttribs(b,b.selected&&"select");u?u.setRadialReference(a.center).attr(p).animate(F(m,h)):(b.graphic=
u=g[b.shapeType](m).addClass(b.getClassName()).setRadialReference(a.center).attr(h).add(a.group),b.visible||u.attr({visibility:"hidden"}),u.attr(p).attr({"stroke-linejoin":"round"}).shadow(d,r))}})},searchPoint:l,sortByAngle:function(a,g){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*g})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:l},{init:function(){x.prototype.init.apply(this,arguments);var a=this,g;a.name=q(a.name,"Slice");
g=function(b){a.slice("select"===b.type)};B(a,"select",g);B(a,"unselect",g);return a},setVisible:function(a,g){var b=this,h=b.series,p=h.chart,m=h.options.ignoreHiddenPoint;g=q(g,m);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,h.options.data[v(b,h.data)]=b.options,E(["graphic","dataLabel","connector","shadowGroup"],function(d){if(b[d])b[d][a?"show":"hide"](!0)}),b.legendItem&&p.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),m&&(h.isDirty=!0),g&&p.redraw())},
slice:function(a,g,l){var b=this.series;h(l,b.chart);q(g,!0);this.sliced=this.options.sliced=a=C(a)?a:!this.sliced;b.options.data[v(this,b.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(b.x,b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}})})(K);(function(a){var B=
a.addEvent,C=a.arrayMax,E=a.defined,F=a.each,v=a.extend,l=a.format,q=a.map,x=a.merge,t=a.noop,n=a.pick,h=a.relativeLength,b=a.Series,g=a.seriesTypes,A=a.stableSort;a.distribute=function(a,b){function g(a,b){return a.target-b.target}var d,h=!0,u=a,f=[],p;p=0;for(d=a.length;d--;)p+=a[d].size;if(p>b){A(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(p=d=0;p<=b;)p+=a[d].size,d++;f=a.splice(d-1,a.length)}A(a,g);for(a=q(a,function(a){return{size:a.size,targets:[a.target]}});h;){for(d=a.length;d--;)h=
a[d],p=(Math.min.apply(0,h.targets)+Math.max.apply(0,h.targets))/2,h.pos=Math.min(Math.max(0,p-h.size/2),b-h.size);d=a.length;for(h=!1;d--;)0<d&&a[d-1].pos+a[d-1].size>a[d].pos&&(a[d-1].size+=a[d].size,a[d-1].targets=a[d-1].targets.concat(a[d].targets),a[d-1].pos+a[d-1].size>b&&(a[d-1].pos=b-a[d-1].size),a.splice(d,1),h=!0)}d=0;F(a,function(a){var b=0;F(a.targets,function(){u[d].pos=a.pos+b;b+=u[d].size;d++})});u.push.apply(u,f);A(u,g)};b.prototype.drawDataLabels=function(){var a=this,b=a.options,
g=b.dataLabels,d=a.points,h,q,f=a.hasRendered||0,t,e,y=n(g.defer,!0),c=a.chart.renderer;if(g.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(g),e=a.plotGroup("dataLabelsGroup","data-labels",y&&!f?"hidden":"visible",g.zIndex||6),y&&(e.attr({opacity:+f}),f||B(a,"afterAnimate",function(){a.visible&&e.show(!0);e[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),q=g,F(d,function(d){var f,m=d.dataLabel,r,k,u=d.connector,p=!0,w,y={};h=d.dlOptions||d.options&&d.options.dataLabels;
f=n(h&&h.enabled,q.enabled)&&null!==d.y;if(m&&!f)d.dataLabel=m.destroy();else if(f){g=x(q,h);w=g.style;f=g.rotation;r=d.getLabelConfig();t=g.format?l(g.format,r):g.formatter.call(r,g);w.color=n(g.color,w.color,a.color,"#000000");if(m)E(t)?(m.attr({text:t}),p=!1):(d.dataLabel=m=m.destroy(),u&&(d.connector=u.destroy()));else if(E(t)){m={fill:g.backgroundColor,stroke:g.borderColor,"stroke-width":g.borderWidth,r:g.borderRadius||0,rotation:f,padding:g.padding,zIndex:1};"contrast"===w.color&&(y.color=g.inside||
0>g.distance||b.stacking?c.getContrast(d.color||a.color):"#000000");b.cursor&&(y.cursor=b.cursor);for(k in m)void 0===m[k]&&delete m[k];m=d.dataLabel=c[f?"text":"label"](t,0,-9999,g.shape,null,null,g.useHTML,null,"data-label").attr(m);m.addClass("highcharts-data-label-color-"+d.colorIndex+" "+(g.className||"")+(g.useHTML?"highcharts-tracker":""));m.css(v(w,y));m.add(e);m.shadow(g.shadow)}m&&a.alignDataLabel(d,m,g,null,p)}})};b.prototype.alignDataLabel=function(a,b,g,d,h){var m=this.chart,f=m.inverted,
r=n(a.plotX,-9999),e=n(a.plotY,-9999),u=b.getBBox(),c,p=g.rotation,l=g.align,q=this.visible&&(a.series.forceDL||m.isInsidePlot(r,Math.round(e),f)||d&&m.isInsidePlot(r,f?d.x+1:d.y+d.height-1,f)),t="justify"===n(g.overflow,"justify");q&&(c=g.style.fontSize,c=m.renderer.fontMetrics(c,b).b,d=v({x:f?m.plotWidth-e:r,y:Math.round(f?m.plotHeight-r:e),width:0,height:0},d),v(g,{width:u.width,height:u.height}),p?(t=!1,f=m.renderer.rotCorr(c,p),f={x:d.x+g.x+d.width/2+f.x,y:d.y+g.y+{top:0,middle:.5,bottom:1}[g.verticalAlign]*
d.height},b[h?"attr":"animate"](f).attr({align:l}),r=(p+720)%360,r=180<r&&360>r,"left"===l?f.y-=r?u.height:0:"center"===l?(f.x-=u.width/2,f.y-=u.height/2):"right"===l&&(f.x-=u.width,f.y-=r?0:u.height)):(b.align(g,null,d),f=b.alignAttr),t?this.justifyDataLabel(b,g,f,u,d,h):n(g.crop,!0)&&(q=m.isInsidePlot(f.x,f.y)&&m.isInsidePlot(f.x+u.width,f.y+u.height)),g.shape&&!p&&b.attr({anchorX:a.plotX,anchorY:a.plotY}));q||(b.attr({y:-9999}),b.placed=!1)};b.prototype.justifyDataLabel=function(a,b,g,d,h,l){var f=
this.chart,m=b.align,e=b.verticalAlign,r,c,u=a.box?0:a.padding||0;r=g.x+u;0>r&&("right"===m?b.align="left":b.x=-r,c=!0);r=g.x+d.width-u;r>f.plotWidth&&("left"===m?b.align="right":b.x=f.plotWidth-r,c=!0);r=g.y+u;0>r&&("bottom"===e?b.verticalAlign="top":b.y=-r,c=!0);r=g.y+d.height-u;r>f.plotHeight&&("top"===e?b.verticalAlign="bottom":b.y=f.plotHeight-r,c=!0);c&&(a.placed=!l,a.align(b,null,h))};g.pie&&(g.pie.prototype.drawDataLabels=function(){var g=this,h=g.data,m,d=g.chart,r=g.options.dataLabels,l=
n(r.connectorPadding,10),f=n(r.connectorWidth,1),t=d.plotWidth,e=d.plotHeight,y,c=r.distance,w=g.center,D=w[2]/2,v=w[1],x=0<c,k,A,B,E,O=[[],[]],N,J,S,Q,P=[0,0,0,0];g.visible&&(r.enabled||g._hasPointLabels)&&(b.prototype.drawDataLabels.apply(g),F(h,function(a){a.dataLabel&&a.visible&&(O[a.half].push(a),a.dataLabel._pos=null)}),F(O,function(b,f){var h,u,p=b.length,n,y,G;if(p)for(g.sortByAngle(b,f-.5),0<c&&(h=Math.max(0,v-D-c),u=Math.min(v+D+c,d.plotHeight),n=q(b,function(a){if(a.dataLabel)return G=
a.dataLabel.getBBox().height||21,{target:a.labelPos[1]-h+G/2,size:G,rank:a.y}}),a.distribute(n,u+G-h)),Q=0;Q<p;Q++)m=b[Q],B=m.labelPos,k=m.dataLabel,S=!1===m.visible?"hidden":"inherit",y=B[1],n?void 0===n[Q].pos?S="hidden":(E=n[Q].size,J=h+n[Q].pos):J=y,N=r.justify?w[0]+(f?-1:1)*(D+c):g.getX(J<h+2||J>u-2?y:J,f),k._attr={visibility:S,align:B[6]},k._pos={x:N+r.x+({left:l,right:-l}[B[6]]||0),y:J+r.y-10},B.x=N,B.y=J,null===g.options.size&&(A=k.width,N-A<l?P[3]=Math.max(Math.round(A-N+l),P[3]):N+A>t-l&&
(P[1]=Math.max(Math.round(N+A-t+l),P[1])),0>J-E/2?P[0]=Math.max(Math.round(-J+E/2),P[0]):J+E/2>e&&(P[2]=Math.max(Math.round(J+E/2-e),P[2])))}),0===C(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),x&&f&&F(this.points,function(a){var b;y=a.connector;if((k=a.dataLabel)&&k._pos&&a.visible){S=k._attr.visibility;if(b=!y)a.connector=y=d.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(g.dataLabelsGroup),y.attr({"stroke-width":f,stroke:r.connectorColor||
a.color||"#666666"});y[b?"attr":"animate"]({d:g.connectorPath(a.labelPos)});y.attr("visibility",S)}else y&&(a.connector=y.destroy())}))},g.pie.prototype.connectorPath=function(a){var b=a.x,g=a.y;return n(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),g,"C",b,g,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),g,"L",a[2],a[3],"L",a[4],a[5]]},g.pie.prototype.placeDataLabels=function(){F(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?
(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))})},g.pie.prototype.alignDataLabel=t,g.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,g=this.options,d=g.center,r=g.minSize||80,l,f;null!==d[0]?l=Math.max(b[2]-Math.max(a[1],a[3]),r):(l=Math.max(b[2]-a[1]-a[3],r),b[0]+=(a[3]-a[1])/2);null!==d[1]?l=Math.max(Math.min(l,b[2]-Math.max(a[0],a[2])),r):(l=Math.max(Math.min(l,b[2]-a[0]-a[2]),r),b[1]+=(a[0]-a[2])/2);l<b[2]?(b[2]=l,b[3]=Math.min(h(g.innerSize||
0,l),l),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f});g.column&&(g.column.prototype.alignDataLabel=function(a,g,h,d,r){var m=this.chart.inverted,f=a.series,l=a.dlBox||a.shapeArgs,e=n(a.below,a.plotY>n(this.translatedThreshold,f.yAxis.len)),u=n(h.inside,!!this.options.stacking);l&&(d=x(l),0>d.y&&(d.height+=d.y,d.y=0),l=d.y+d.height-f.yAxis.len,0<l&&(d.height-=l),m&&(d={x:f.yAxis.len-d.y-d.height,y:f.xAxis.len-d.x-d.width,width:d.height,height:d.width}),u||(m?(d.x+=e?
0:d.width,d.width=0):(d.y+=e?d.height:0,d.height=0)));h.align=n(h.align,!m||u?"center":e?"right":"left");h.verticalAlign=n(h.verticalAlign,m||u?"middle":e?"top":"bottom");b.prototype.alignDataLabel.call(this,a,g,h,d,r)})})(K);(function(a){var B=a.Chart,C=a.each,E=a.pick,F=a.addEvent;B.prototype.callbacks.push(function(a){function l(){var l=[];C(a.series,function(a){var q=a.options.dataLabels,n=a.dataLabelCollections||["dataLabel"];(q.enabled||a._hasPointLabels)&&!q.allowOverlap&&a.visible&&C(n,function(h){C(a.points,
function(a){a[h]&&(a[h].labelrank=E(a.labelrank,a.shapeArgs&&a.shapeArgs.height),l.push(a[h]))})})});a.hideOverlappingLabels(l)}l();F(a,"redraw",l)});B.prototype.hideOverlappingLabels=function(a){var l=a.length,q,v,t,n,h,b,g,A,u,p=function(a,b,g,h,f,l,e,u){return!(f>a+g||f+e<a||l>b+h||l+u<b)};for(v=0;v<l;v++)if(q=a[v])q.oldOpacity=q.opacity,q.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(v=0;v<l;v++)for(t=a[v],q=v+1;q<l;++q)if(n=a[q],t&&n&&t.placed&&n.placed&&0!==
t.newOpacity&&0!==n.newOpacity&&(h=t.alignAttr,b=n.alignAttr,g=t.parentGroup,A=n.parentGroup,u=2*(t.box?0:t.padding),h=p(h.x+g.translateX,h.y+g.translateY,t.width-u,t.height-u,b.x+A.translateX,b.y+A.translateY,n.width-u,n.height-u)))(t.labelrank<n.labelrank?t:n).newOpacity=0;C(a,function(a){var b,g;a&&(g=a.newOpacity,a.oldOpacity!==g&&a.placed&&(g?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=g,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var B=a.addEvent,
C=a.Chart,E=a.createElement,F=a.css,v=a.defaultOptions,l=a.defaultPlotOptions,q=a.each,x=a.extend,t=a.fireEvent,n=a.hasTouch,h=a.inArray,b=a.isObject,g=a.Legend,A=a.merge,u=a.pick,p=a.Point,m=a.Series,d=a.seriesTypes,r=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,d=b.pointer,e=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(void 0!==d&&d!==b.hoverPoint)d.onMouseOver(a)};q(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?
a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(q(a.trackerGroups,function(b){if(a[b]){a[b].addClass("highcharts-tracker").on("mouseover",e).on("mouseout",function(a){d.onTrackerMouseOut(a)});if(n)a[b].on("touchstart",e);a.options.cursor&&a[b].css(F).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,d=b.trackByArea,e=[].concat(d?a.areaPath:a.graphPath),g=e.length,c=a.chart,h=c.pointer,m=c.renderer,l=c.options.tooltip.snap,
u=a.tracker,k,p=function(){if(c.hoverSeries!==a)a.onMouseOver()},t="rgba(192,192,192,"+(r?.0001:.002)+")";if(g&&!d)for(k=g+1;k--;)"M"===e[k]&&e.splice(k+1,0,e[k+1]-l,e[k+2],"L"),(k&&"M"===e[k]||k===g)&&e.splice(k,0,"L",e[k-2]+l,e[k-1]);u?u.attr({d:e}):a.graph&&(a.tracker=m.path(e).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:t,fill:d?t:"none","stroke-width":a.graph.strokeWidth()+(d?0:2*l),zIndex:2}).add(a.group),q([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",
p).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(n)a.on("touchstart",p)}))}};d.column&&(d.column.prototype.drawTracker=a.drawTrackerPoint);d.pie&&(d.pie.prototype.drawTracker=a.drawTrackerPoint);d.scatter&&(d.scatter.prototype.drawTracker=a.drawTrackerPoint);x(g.prototype,{setItemEvents:function(a,b,d){var e=this,f=e.chart,c="highcharts-legend-"+(a.series?"point":"series")+"-active";(d?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.seriesGroup.addClass(c);
b.css(e.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?e.itemStyle:e.itemHiddenStyle);f.seriesGroup.removeClass(c);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):t(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=E("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,
"click",function(b){t(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});v.legend.itemStyle.cursor="pointer";x(C.prototype,{showResetZoom:function(){var a=this,b=v.lang,d=a.options.chart.resetZoomButton,e=d.theme,g=e.states,c="chart"===d.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},e,g&&g.hover).attr({align:d.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,
!1,c)},zoomOut:function(){var a=this;t(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var d,g=this.pointer,e=!1,h;!a||a.resetSelection?q(this.axes,function(a){d=a.zoom()}):q(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;g[b.isXAxis?"zoomX":"zoomY"]&&(d=b.zoom(a.min,a.max),b.displayBtn&&(e=!0))});h=this.resetZoomButton;e&&!h?this.showResetZoom():!e&&b(h)&&(this.resetZoomButton=h.destroy());d&&this.redraw(u(this.options.chart.animation,a&&a.animation,100>this.pointCount))},
pan:function(a,b){var d=this,e=d.hoverPoints,f;e&&q(e,function(a){a.setState()});q("xy"===b?[1,0]:[1],function(b){b=d[b?"xAxis":"yAxis"][0];var c=b.horiz,e=a[c?"chartX":"chartY"],c=c?"mouseDownX":"mouseDownY",g=d[c],h=(b.pointRange||0)/2,k=b.getExtremes(),m=b.toValue(g-e,!0)+h,h=b.toValue(g+b.len-e,!0)-h,r=h<m,g=r?h:m,m=r?m:h,h=Math.min(k.dataMin,k.min)-g,k=m-Math.max(k.dataMax,k.max);b.series.length&&0>h&&0>k&&(b.setExtremes(g,m,!1,!1,{trigger:"pan"}),f=!0);d[c]=e});f&&d.redraw(!1);F(d.container,
{cursor:"move"})}});x(p.prototype,{select:function(a,b){var d=this,e=d.series,f=e.chart;a=u(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;e.options.data[h(d,e.data)]=d.options;d.setState(a&&"select");b||q(f.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,e.options.data[h(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a,b){var d=this.series,e=d.chart,f=
e.tooltip,c=e.hoverPoint;if(this.series){if(!b){if(c&&c!==this)c.onMouseOut();if(e.hoverSeries!==d)d.onMouseOver();e.hoverPoint=this}!f||f.shared&&!d.noSharedTooltip?f||this.setState("hover"):(this.setState("hover"),f.refresh(this,a));this.firePointEvent("mouseOver")}},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");b&&-1!==h(this,b)||(this.setState(),a.hoverPoint=null)},importEvents:function(){if(!this.hasImportedEvents){var a=A(this.series.options.point,
this.options).events,b;this.events=a;for(b in a)B(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var d=Math.floor(this.plotX),e=this.plotY,f=this.series,c=f.options.states[a]||{},g=l[f.type].marker&&f.options.marker,h=g&&!1===g.enabled,m=g&&g.states&&g.states[a]||{},r=!1===m.enabled,k=f.stateMarkerGraphic,p=this.marker||{},n=f.chart,q=f.halo,t,v=g&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===c.enabled||a&&(r||h&&!1===m.enabled)||a&&p.states&&
p.states[a]&&!1===p.states[a].enabled)){v&&(t=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(f.pointAttribs(this,a)),t&&this.graphic.animate(t,u(n.options.chart.animation,m.animation,g.animation)),k&&k.hide();else{if(a&&m){g=p.symbol||f.symbol;k&&k.currentSymbol!==g&&(k=k.destroy());if(k)k[b?"animate":"attr"]({x:t.x,y:t.y});else g&&(f.stateMarkerGraphic=k=n.renderer.symbol(g,
t.x,t.y,t.width,t.height).add(f.markerGroup),k.currentSymbol=g);k&&k.attr(f.pointAttribs(this,a))}k&&(k[a&&n.isInsidePlot(d,e,n.inverted)?"show":"hide"](),k.element.point=this)}(d=c.halo)&&d.size?(q||(f.halo=q=n.renderer.path().add(v?f.markerGroup:f.group)),q[b?"animate":"attr"]({d:this.haloPath(d.size)}),q.attr({"class":"highcharts-halo highcharts-color-"+u(this.colorIndex,f.colorIndex)}),q.point=this,q.attr(x({fill:this.color||f.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):q&&q.point&&
q.point.haloPath&&q.animate({d:q.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});x(m.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&t(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,d=b.tooltip,e=b.hoverPoint;b.hoverSeries=null;if(e)e.onMouseOut();
this&&a.events.mouseOut&&t(this,"mouseOut");!d||a.stickyTracking||d.shared&&!this.noSharedTooltip||d.hide();this.setState()},setState:function(a){var b=this,d=b.options,e=b.graph,g=d.states,c=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(q([b.group,b.markerGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!g[a]||!1!==g[a].enabled)&&(a&&(c=g[a].lineWidth||c+(g[a].lineWidthPlus||0)),e&&!e.dashstyle))for(g={"stroke-width":c},e.attr(g);b["zone-graph-"+
d];)b["zone-graph-"+d].attr(g),d+=1},setVisible:function(a,b){var d=this,e=d.chart,f=d.legendItem,c,g=e.options.chart.ignoreHiddenSeries,h=d.visible;c=(d.visible=a=d.options.visible=d.userOptions.visible=void 0===a?!h:a)?"show":"hide";q(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(d[a])d[a][c]()});if(e.hoverSeries===d||(e.hoverPoint&&e.hoverPoint.series)===d)d.onMouseOut();f&&e.legend.colorizeItem(d,a);d.isDirty=!0;d.options.stacking&&q(e.series,function(a){a.options.stacking&&
a.visible&&(a.isDirty=!0)});q(d.linkedSeries,function(b){b.setVisible(a,!1)});g&&(e.isDirtyBox=!0);!1!==b&&e.redraw();t(d,c)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);t(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(K);(function(a){var B=a.Chart,C=a.each,E=a.inArray,F=a.isObject,v=a.pick,l=a.splat;B.prototype.setResponsive=function(a){var l=this.options.responsive;
l&&l.rules&&C(l.rules,function(l){this.matchResponsiveRule(l,a)},this)};B.prototype.matchResponsiveRule=function(l,x){var q=this.respRules,n=l.condition,h;h=n.callback||function(){return this.chartWidth<=v(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=v(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=v(n.minWidth,0)&&this.chartHeight>=v(n.minHeight,0)};void 0===l._id&&(l._id=a.uniqueKey());h=h.call(this);!q[l._id]&&h?l.chartOptions&&(q[l._id]=this.currentOptions(l.chartOptions),this.update(l.chartOptions,
x)):q[l._id]&&!h&&(this.update(q[l._id],x),delete q[l._id])};B.prototype.currentOptions=function(a){function q(a,h,b){var g,n;for(g in a)if(-1<E(g,["series","xAxis","yAxis"]))for(a[g]=l(a[g]),b[g]=[],n=0;n<a[g].length;n++)b[g][n]={},q(a[g][n],h[g][n],b[g][n]);else F(a[g])?(b[g]={},q(a[g],h[g]||{},b[g])):b[g]=h[g]||null}var t={};q(a,this.options,t);return t}})(K);(function(a){var B=a.addEvent,C=a.Axis,E=a.Chart,F=a.css,v=a.dateFormat,l=a.defined,q=a.each,x=a.extend,t=a.noop,n=a.Series,h=a.timeUnits;
a=a.wrap;a(n.prototype,"init",function(a){var b;a.apply(this,Array.prototype.slice.call(arguments,1));(b=this.xAxis)&&b.options.ordinal&&B(this,"updatedData",function(){delete b.ordinalIndex})});a(C.prototype,"getTimeTicks",function(a,g,n,u,p,m,d,r){var b=0,f,q,e={},t,c,w,D=[],x=-Number.MAX_VALUE,A=this.options.tickPixelInterval;if(!this.options.ordinal&&!this.options.breaks||!m||3>m.length||void 0===n)return a.call(this,g,n,u,p);c=m.length;for(f=0;f<c;f++){w=f&&m[f-1]>u;m[f]<n&&(b=f);if(f===c-1||
m[f+1]-m[f]>5*d||w){if(m[f]>x){for(q=a.call(this,g,m[b],m[f],p);q.length&&q[0]<=x;)q.shift();q.length&&(x=q[q.length-1]);D=D.concat(q)}b=f+1}if(w)break}a=q.info;if(r&&a.unitRange<=h.hour){f=D.length-1;for(b=1;b<f;b++)v("%d",D[b])!==v("%d",D[b-1])&&(e[D[b]]="day",t=!0);t&&(e[D[0]]="day");a.higherRanks=e}D.info=a;if(r&&l(A)){r=a=D.length;f=[];var k;for(t=[];r--;)b=this.translate(D[r]),k&&(t[r]=k-b),f[r]=k=b;t.sort();t=t[Math.floor(t.length/2)];t<.6*A&&(t=null);r=D[a-1]>u?a-1:a;for(k=void 0;r--;)b=f[r],
u=Math.abs(k-b),k&&u<.8*A&&(null===t||u<.8*t)?(e[D[r]]&&!e[D[r+1]]?(u=r+1,k=b):u=r,D.splice(u,1)):k=b}return D});x(C.prototype,{beforeSetTickPositions:function(){var a,g=[],h=!1,l,p=this.getExtremes(),m=p.min,d=p.max,r,n=this.isXAxis&&!!this.options.breaks,p=this.options.ordinal,f=this.chart.options.chart.ignoreHiddenSeries;if(p||n){q(this.series,function(b,d){if(!(f&&!1===b.visible||!1===b.takeOrdinalPosition&&!n)&&(g=g.concat(b.processedXData),a=g.length,g.sort(function(a,b){return a-b}),a))for(d=
a-1;d--;)g[d]===g[d+1]&&g.splice(d,1)});a=g.length;if(2<a){l=g[1]-g[0];for(r=a-1;r--&&!h;)g[r+1]-g[r]!==l&&(h=!0);!this.options.keepOrdinalPadding&&(g[0]-m>l||d-g[g.length-1]>l)&&(h=!0)}h?(this.ordinalPositions=g,l=this.val2lin(Math.max(m,g[0]),!0),r=Math.max(this.val2lin(Math.min(d,g[g.length-1]),!0),1),this.ordinalSlope=d=(d-m)/(r-l),this.ordinalOffset=m-l*d):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0}this.isOrdinal=p&&h;this.groupIntervalFactor=null},val2lin:function(a,g){var b=
this.ordinalPositions;if(b){var h=b.length,l,m;for(l=h;l--;)if(b[l]===a){m=l;break}for(l=h-1;l--;)if(a>b[l]||0===l){a=(a-b[l])/(b[l+1]-b[l]);m=l+a;break}g=g?m:this.ordinalSlope*(m||0)+this.ordinalOffset}else g=a;return g},lin2val:function(a,g){var b=this.ordinalPositions;if(b){var h=this.ordinalSlope,l=this.ordinalOffset,m=b.length-1,d;if(g)0>a?a=b[0]:a>m?a=b[m]:(m=Math.floor(a),d=a-m);else for(;m--;)if(g=h*m+l,a>=g){h=h*(m+1)+l;d=(a-g)/(h-g);break}return void 0!==d&&void 0!==b[m]?b[m]+(d?d*(b[m+
1]-b[m]):0):a}return a},getExtendedPositions:function(){var a=this.chart,g=this.series[0].currentDataGrouping,h=this.ordinalIndex,l=g?g.count+g.unitName:"raw",p=this.getExtremes(),m,d;h||(h=this.ordinalIndex={});h[l]||(m={series:[],chart:a,getExtremes:function(){return{min:p.dataMin,max:p.dataMax}},options:{ordinal:!0},val2lin:C.prototype.val2lin},q(this.series,function(b){d={xAxis:m,xData:b.xData,chart:a,destroyGroupedData:t};d.options={dataGrouping:g?{enabled:!0,forced:!0,approximation:"open",units:[[g.unitName,
[g.count]]]}:{enabled:!1}};b.processData.apply(d);m.series.push(d)}),this.beforeSetTickPositions.apply(m),h[l]=m.ordinalPositions);return h[l]},getGroupIntervalFactor:function(a,g,h){var b;h=h.processedXData;var l=h.length,m=[];b=this.groupIntervalFactor;if(!b){for(b=0;b<l-1;b++)m[b]=h[b+1]-h[b];m.sort(function(a,b){return a-b});m=m[Math.floor(l/2)];a=Math.max(a,h[0]);g=Math.min(g,h[l-1]);this.groupIntervalFactor=b=l*m/(g-a)}return b},postProcessTickInterval:function(a){var b=this.ordinalSlope;return b?
this.options.breaks?this.closestPointRange:a/(b/this.closestPointRange):a}});a(E.prototype,"pan",function(a,g){var b=this.xAxis[0],h=g.chartX,l=!1;if(b.options.ordinal&&b.series.length){var m=this.mouseDownX,d=b.getExtremes(),r=d.dataMax,n=d.min,f=d.max,t=this.hoverPoints,e=b.closestPointRange,m=(m-h)/(b.translationSlope*(b.ordinalSlope||e)),v={ordinalPositions:b.getExtendedPositions()},e=b.lin2val,c=b.val2lin,w;v.ordinalPositions?1<Math.abs(m)&&(t&&q(t,function(a){a.setState()}),0>m?(t=v,w=b.ordinalPositions?
b:v):(t=b.ordinalPositions?b:v,w=v),v=w.ordinalPositions,r>v[v.length-1]&&v.push(r),this.fixedRange=f-n,m=b.toFixedRange(null,null,e.apply(t,[c.apply(t,[n,!0])+m,!0]),e.apply(w,[c.apply(w,[f,!0])+m,!0])),m.min>=Math.min(d.dataMin,n)&&m.max<=Math.max(r,f)&&b.setExtremes(m.min,m.max,!0,!1,{trigger:"pan"}),this.mouseDownX=h,F(this.container,{cursor:"move"})):l=!0}else l=!0;l&&a.apply(this,Array.prototype.slice.call(arguments,1))});n.prototype.gappedPath=function(){var a=this.options.gapSize,g=this.points.slice(),
h=g.length-1;if(a&&0<h)for(;h--;)g[h+1].x-g[h].x>this.closestPointRange*a&&g.splice(h+1,0,{isNull:!0});return this.getGraphPath(g)}})(K);(function(a){function B(){return Array.prototype.slice.call(arguments,1)}function C(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,E(this.pointArrayMap,["y"]))}var E=a.pick,F=a.wrap,v=a.each,l=a.extend,q=a.fireEvent,x=a.Axis,t=a.Series;l(x.prototype,{isInBreak:function(a,h){var b=a.repeat||Infinity,g=a.from,l=a.to-a.from;h=h>=g?(h-
g)%b:b-(g-h)%b;return a.inclusive?h<=l:h<l&&0!==h},isInAnyBreak:function(a,h){var b=this.options.breaks,g=b&&b.length,l,u,p;if(g){for(;g--;)this.isInBreak(b[g],a)&&(l=!0,u||(u=E(b[g].showPoints,this.isXAxis?!1:!0)));p=l&&h?l&&!u:l}return p}});F(x.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var h=this.tickPositions,b=this.tickPositions.info,g=[],l;for(l=0;l<h.length;l++)this.isInAnyBreak(h[l])||g.push(h[l]);this.tickPositions=
g;this.tickPositions.info=b}});F(x.prototype,"init",function(a,h,b){b.breaks&&b.breaks.length&&(b.ordinal=!1);a.call(this,h,b);if(this.options.breaks){var g=this;g.isBroken=!0;this.val2lin=function(a){var b=a,h,m;for(m=0;m<g.breakArray.length;m++)if(h=g.breakArray[m],h.to<=a)b-=h.len;else if(h.from>=a)break;else if(g.isInBreak(h,a)){b-=a-h.from;break}return b};this.lin2val=function(a){var b,h;for(h=0;h<g.breakArray.length&&!(b=g.breakArray[h],b.from>=a);h++)b.to<a?a+=b.len:g.isInBreak(b,a)&&(a+=b.len);
return a};this.setExtremes=function(a,b,g,h,d){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange;x.prototype.setExtremes.call(this,a,b,g,h,d)};this.setAxisTranslation=function(a){x.prototype.setAxisTranslation.call(this,a);var b=g.options.breaks;a=[];var h=[],m=0,d,l,n=g.userMin||g.min,f=g.userMax||g.max,t,e;for(e in b)l=b[e],d=l.repeat||Infinity,g.isInBreak(l,n)&&(n+=l.to%d-n%d),g.isInBreak(l,f)&&(f-=f%d-l.from%d);for(e in b){l=b[e];t=l.from;
for(d=l.repeat||Infinity;t-d>n;)t-=d;for(;t<n;)t+=d;for(;t<f;t+=d)a.push({value:t,move:"in"}),a.push({value:t+(l.to-l.from),move:"out",size:l.breakSize})}a.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});b=0;t=n;for(e in a)l=a[e],b+="in"===l.move?1:-1,1===b&&"in"===l.move&&(t=l.value),0===b&&(h.push({from:t,to:l.value,len:l.value-t-(l.size||0)}),m+=l.value-t-(l.size||0));g.breakArray=h;q(g,"afterBreaks");g.transA*=(f-g.min)/(f-n-m);g.min=n;g.max=
f}}});F(t.prototype,"generatePoints",function(a){a.apply(this,B(arguments));var h=this.xAxis,b=this.yAxis,g=this.points,l,n=g.length,p=this.options.connectNulls,m;if(h&&b&&(h.options.breaks||b.options.breaks))for(;n--;)l=g[n],m=null===l.y&&!1===p,m||!h.isInAnyBreak(l.x,!0)&&!b.isInAnyBreak(l.y,!0)||(g.splice(n,1),this.data[n]&&this.data[n].destroyElements())});a.Series.prototype.drawBreaks=function(a,h){var b=this,g=b.points,l,n,p,m;a&&v(h,function(d){l=a.breakArray||[];n=a.isXAxis?a.min:E(b.options.threshold,
a.min);v(g,function(b){m=E(b["stack"+d.toUpperCase()],b[d]);v(l,function(d){p=!1;if(n<d.from&&m>d.to||n>d.from&&m<d.from)p="pointBreak";else if(n<d.from&&m>d.from&&m<d.to||n>d.from&&m>d.to&&m<d.from)p="pointInBreak";p&&q(a,p,{point:b,brk:d})})})})};F(a.seriesTypes.column.prototype,"drawPoints",C);F(a.Series.prototype,"drawPoints",C)})(K);(function(a){var B=a.arrayMax,C=a.arrayMin,E=a.Axis,F=a.defaultPlotOptions,v=a.defined,l=a.each,q=a.extend,x=a.format,t=a.isNumber,n=a.merge,h=a.pick,b=a.Point,g=
a.Tooltip,A=a.wrap,u=a.Series.prototype,p=u.processData,m=u.generatePoints,d=u.destroy,r={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e",
"-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},G={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},f=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",
[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],z={sum:function(a){var b=a.length,c;if(!b&&a.hasNulls)c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var b=a.length;a=z.sum(a);t(a)&&b&&(a/=b);return a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?B(a):a.hasNulls?null:void 0},low:function(a){return a.length?C(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-
1]:a.hasNulls?null:void 0},ohlc:function(a,b,c,d){a=z.open(a);b=z.high(b);c=z.low(c);d=z.close(d);if(t(a)||t(b)||t(c)||t(d))return[a,b,c,d]},range:function(a,b){a=z.low(a);b=z.high(b);if(t(a)||t(b))return[a,b]}};u.groupData=function(a,b,c,d){var e=this.data,f=this.options.data,g=[],k=[],h=[],l=a.length,m,r,n=!!b,w=[[],[],[],[]];d="function"===typeof d?d:z[d];var p=this.pointArrayMap,u=p&&p.length,q,v=0;for(q=r=0;q<=l&&!(a[q]>=c[0]);q++);for(q;q<=l;q++){for(;(void 0!==c[v+1]&&a[q]>=c[v+1]||q===l)&&
(m=c[v],this.dataGroupInfo={start:r,length:w[0].length},r=d.apply(this,w),void 0!==r&&(g.push(m),k.push(r),h.push(this.dataGroupInfo)),r=q,w[0]=[],w[1]=[],w[2]=[],w[3]=[],v+=1,q!==l););if(q===l)break;if(p){m=this.cropStart+q;m=e&&e[m]||this.pointClass.prototype.applyOptions.apply({series:this},[f[m]]);var y,x;for(y=0;y<u;y++)x=m[p[y]],t(x)?w[y].push(x):null===x&&(w[y].hasNulls=!0)}else m=n?b[q]:null,t(m)?w[0].push(m):null===m&&(w[0].hasNulls=!0)}return[g,k,h]};u.processData=function(){var a=this.chart,
b=this.options.dataGrouping,c=!1!==this.allowDG&&b&&h(b.enabled,a.options.isStock),d=this.visible||!a.options.chart.ignoreHiddenSeries,g;this.forceCrop=c;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==p.apply(this,arguments)&&c&&d){this.destroyGroupedData();var l=this.processedXData,m=this.processedYData,k=a.plotSizeX,a=this.xAxis,r=a.options.ordinal,n=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(n){this.isDirty=g=!0;d=a.getExtremes();c=d.min;d=d.max;r=r&&a.getGroupIntervalFactor(c,
d,this)||1;k=n*(d-c)/k*r;n=a.getTimeTicks(a.normalizeTimeTickInterval(k,b.units||f),Math.min(c,l[0]),Math.max(d,l[l.length-1]),a.options.startOfWeek,l,this.closestPointRange);l=u.groupData.apply(this,[l,m,n,b.approximation]);m=l[0];r=l[1];if(b.smoothed){b=m.length-1;for(m[b]=Math.min(m[b],d);b--&&0<b;)m[b]+=k/2;m[0]=Math.max(m[0],c)}this.currentDataGrouping=n.info;this.closestPointRange=n.info.totalRange;this.groupMap=l[2];v(m[0])&&m[0]<a.dataMin&&(a.min===a.dataMin&&(a.min=m[0]),a.dataMin=m[0]);
this.processedXData=m;this.processedYData=r}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=g}};u.destroyGroupedData=function(){var a=this.groupedData;l(a||[],function(b,c){b&&(a[c]=b.destroy?b.destroy():null)});this.groupedData=null};u.generatePoints=function(){m.apply(this);this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};A(b.prototype,"update",function(b){this.dataGroup?a.error(24):b.apply(this,[].slice.call(arguments,1))});A(g.prototype,"tooltipFooterHeaderFormatter",
function(b,d,c){var e=d.series,f=e.tooltipOptions,g=e.options.dataGrouping,h=f.xDateFormat,k,l=e.xAxis,m=a.dateFormat;return l&&"datetime"===l.options.type&&g&&t(d.key)?(b=e.currentDataGrouping,g=g.dateTimeLabelFormats,b?(l=g[b.unitName],1===b.count?h=l[0]:(h=l[1],k=l[2])):!h&&g&&(h=this.getXDateFormat(d,f,l)),h=m(h,d.key),k&&(h+=m(k,d.key+b.totalRange-1)),x(f[(c?"footer":"header")+"Format"],{point:q(d.point,{key:h}),series:e})):b.call(this,d,c)});u.destroy=function(){for(var a=this.groupedData||
[],b=a.length;b--;)a[b]&&a[b].destroy();d.apply(this)};A(u,"setOptions",function(a,b){a=a.call(this,b);var c=this.type,d=this.chart.options.plotOptions,e=F[c].dataGrouping;G[c]&&(e||(e=n(r,G[c])),a.dataGrouping=n(e,d.series&&d.series.dataGrouping,d[c].dataGrouping,b.dataGrouping));this.chart.options.isStock&&(this.requireSorting=!0);return a});A(E.prototype,"setScale",function(a){a.call(this);l(this.series,function(a){a.hasProcessed=!1})});E.prototype.getGroupPixelWidth=function(){var a=this.series,
b=a.length,c,d=0,f=!1,g;for(c=b;c--;)(g=a[c].options.dataGrouping)&&(d=Math.max(d,g.groupPixelWidth));for(c=b;c--;)(g=a[c].options.dataGrouping)&&a[c].hasProcessed&&(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/d||b&&g.forced)&&(f=!0);return f?d:0};E.prototype.setDataGrouping=function(a,b){var c;b=h(b,!0);a||(a={forced:!1,units:null});if(this instanceof E)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else l(this.chart.options.series,
function(b){b.dataGrouping=a},!1);b&&this.chart.redraw()}})(K);(function(a){var B=a.each,C=a.Point,E=a.seriesType,F=a.seriesTypes;E("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},threshold:null,states:{hover:{lineWidth:3}}},{pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,
a.high,a.low,a.close]},pointValKey:"high",pointAttribs:function(a,l){l=F.column.prototype.pointAttribs.call(this,a,l);var q=this.options;delete l.fill;l["stroke-width"]=q.lineWidth;l.stroke=a.options.color||(a.open<a.close?q.upColor||this.color:this.color);return l},translate:function(){var a=this,l=a.yAxis,q=!!a.modifyValue,x=["plotOpen","yBottom","plotClose"];F.column.prototype.translate.apply(a);B(a.points,function(t){B([t.open,t.low,t.close],function(n,h){null!==n&&(q&&(n=a.modifyValue(n)),t[x[h]]=
l.toPixels(n,!0))})})},drawPoints:function(){var a=this,l=a.chart;B(a.points,function(q){var v,t,n,h,b=q.graphic,g,A=!b;void 0!==q.plotY&&(b||(q.graphic=b=l.renderer.path().add(a.group)),b.attr(a.pointAttribs(q,q.selected&&"select")),t=b.strokeWidth()%2/2,g=Math.round(q.plotX)-t,n=Math.round(q.shapeArgs.width/2),h=["M",g,Math.round(q.yBottom),"L",g,Math.round(q.plotY)],null!==q.open&&(v=Math.round(q.plotOpen)+t,h.push("M",g,v,"L",g-n,v)),null!==q.close&&(v=Math.round(q.plotClose)+t,h.push("M",g,v,
"L",g+n,v)),b[A?"attr":"animate"]({d:h}).addClass(q.getClassName(),!0))})},animate:null},{getClassName:function(){return C.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}})})(K);(function(a){var B=a.defaultPlotOptions,C=a.each,E=a.merge,F=a.seriesType,v=a.seriesTypes;F("candlestick","ohlc",E(B.column,{states:{hover:{lineWidth:2}},tooltip:B.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff"}),{pointAttribs:function(a,
q){var l=v.column.prototype.pointAttribs.call(this,a,q),t=this.options,n=a.open<a.close,h=t.lineColor||this.color;l["stroke-width"]=t.lineWidth;l.fill=a.options.color||(n?t.upColor||this.color:this.color);l.stroke=a.lineColor||(n?t.upLineColor||h:h);q&&(a=t.states[q],l.fill=a.color||l.fill,l.stroke=a.stroke||l.stroke);return l},drawPoints:function(){var a=this,q=a.chart;C(a.points,function(l){var t=l.graphic,n,h,b,g,v,u,p,m=!t;void 0!==l.plotY&&(t||(l.graphic=t=q.renderer.path().add(a.group)),t.attr(a.pointAttribs(l,
l.selected&&"select")).shadow(a.options.shadow),v=t.strokeWidth()%2/2,u=Math.round(l.plotX)-v,n=l.plotOpen,h=l.plotClose,b=Math.min(n,h),n=Math.max(n,h),p=Math.round(l.shapeArgs.width/2),h=Math.round(b)!==Math.round(l.plotY),g=n!==l.yBottom,b=Math.round(b)+v,n=Math.round(n)+v,v=[],v.push("M",u-p,n,"L",u-p,b,"L",u+p,b,"L",u+p,n,"Z","M",u,b,"L",u,h?Math.round(l.plotY):b,"M",u,n,"L",u,g?Math.round(l.yBottom):n),t[m?"attr":"animate"]({d:v}).addClass(l.getClassName(),!0))})}})})(K);(function(a){var B=
a.addEvent,C=a.each,E=a.merge,F=a.noop,v=a.Renderer,l=a.seriesType,q=a.seriesTypes,x=a.TrackerMixin,t=a.VMLRenderer,n=a.SVGRenderer.prototype.symbols;l("flags","column",{pointRange:0,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],
forceCrop:!0,init:a.Series.prototype.init,pointAttribs:function(a,b){var g=this.options,h=a&&a.color||this.color,l=g.lineColor,n=a&&a.lineWidth;a=a&&a.fillColor||g.fillColor;b&&(a=g.states[b].fillColor,l=g.states[b].lineColor,n=g.states[b].lineWidth);return{fill:a||h,stroke:l||h,"stroke-width":n||g.lineWidth||0}},translate:function(){q.column.prototype.translate.apply(this);var a=this.options,b=this.chart,g=this.points,l=g.length-1,n,p,m=a.onSeries;n=m&&b.get(m);var a=a.onKey||"y",m=n&&n.options.step,
d=n&&n.points,r=d&&d.length,t=this.xAxis,f=t.getExtremes(),v=0,e,x,c;if(n&&n.visible&&r)for(v=(n.pointXOffset||0)+(n.barW||0)/2,n=n.currentDataGrouping,x=d[r-1].x+(n?n.totalRange:0),g.sort(function(a,b){return a.x-b.x}),a="plot"+a[0].toUpperCase()+a.substr(1);r--&&g[l]&&!(n=g[l],e=d[r],e.x<=n.x&&void 0!==e[a]&&(n.x<=x&&(n.plotY=e[a],e.x<n.x&&!m&&(c=d[r+1])&&void 0!==c[a]&&(n.plotY+=(n.x-e.x)/(c.x-e.x)*(c[a]-e[a]))),l--,r++,0>l)););C(g,function(a,c){var d;void 0===a.plotY&&(a.x>=f.min&&a.x<=f.max?
a.plotY=b.chartHeight-t.bottom-(t.opposite?t.height:0)+t.offset-b.plotTop:a.shapeArgs={});a.plotX+=v;(p=g[c-1])&&p.plotX===a.plotX&&(void 0===p.stackIndex&&(p.stackIndex=0),d=p.stackIndex+1);a.stackIndex=d})},drawPoints:function(){var a=this.points,b=this.chart,g=b.renderer,l,n,p=this.options,m=p.y,d,r,q,f,t,e,v,c=this.yAxis;for(r=a.length;r--;)q=a[r],v=q.plotX>this.xAxis.len,l=q.plotX,f=q.stackIndex,d=q.options.shape||p.shape,n=q.plotY,void 0!==n&&(n=q.plotY+m-(void 0!==f&&f*p.stackDistance)),t=
f?void 0:q.plotX,e=f?void 0:q.plotY,f=q.graphic,void 0!==n&&0<=l&&!v?(f||(f=q.graphic=g.label("",null,null,d,null,null,p.useHTML).attr(this.pointAttribs(q)).css(E(p.style,q.style)).attr({align:"flag"===d?"left":"center",width:p.width,height:p.height,"text-align":p.textAlign}).addClass("highcharts-point").add(this.markerGroup),f.shadow(p.shadow)),0<l&&(l-=f.strokeWidth()%2),f.attr({text:q.options.title||p.title||"A",x:l,y:n,anchorX:t,anchorY:e}),q.tooltipPos=b.inverted?[c.len+c.pos-b.plotLeft-n,this.xAxis.len-
l]:[l,n]):f&&(q.graphic=f.destroy())},drawTracker:function(){var a=this.points;x.drawTrackerPoint.apply(this);C(a,function(b){var g=b.graphic;g&&B(g.element,"mouseover",function(){0<b.stackIndex&&!b.raised&&(b._y=g.y,g.attr({y:b._y-8}),b.raised=!0);C(a,function(a){a!==b&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:F,buildKDTree:F,setClip:F});n.flag=function(a,b,g,l,n){return["M",n&&n.anchorX||a,n&&n.anchorY||b,"L",a,b+l,a,b,a+g,b,a+g,b+l,a,b+l,"Z"]};C(["circle","square"],
function(a){n[a+"pin"]=function(b,g,h,l,p){var m=p&&p.anchorX;p=p&&p.anchorY;"circle"===a&&l>h&&(b-=Math.round((l-h)/2),h=l);b=n[a](b,g,h,l);m&&p&&b.push("M",m,g>p?g:g+l,"L",m,p);return b}});v===t&&C(["flag","circlepin","squarepin"],function(a){t.prototype.symbols[a]=n[a]})})(K);(function(a){function B(a,b,g){this.init(a,b,g)}var C=a.addEvent,E=a.Axis,F=a.correctFloat,v=a.defaultOptions,l=a.defined,q=a.destroyObjectProperties,x=a.doc,t=a.each,n=a.fireEvent,h=a.hasTouch,b=a.isTouchDevice,g=a.merge,
A=a.pick,u=a.removeEvent,p=a.wrap,m={height:b?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:a.svg&&!b,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};v.scrollbar=g(!0,m,v.scrollbar);B.prototype={init:function(a,b,h){this.scrollbarButtons=
[];this.renderer=a;this.userOptions=b;this.options=g(m,b);this.chart=h;this.size=A(this.options.size,this.options.height);b.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,b=this.options,g=this.size,f;this.group=f=a.g("scrollbar").attr({zIndex:b.zIndex,translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,r:b.trackBorderRadius||0,height:g,width:g}).add(f);this.track.attr({fill:b.trackBackgroundColor,stroke:b.trackBorderColor,
"stroke-width":b.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(f);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:g,width:g,r:b.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=a.path(this.swapXY(["M",-3,g/4,"L",-3,2*g/3,"M",0,g/4,"L",0,2*g/3,"M",3,g/4,"L",3,2*g/3],b.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({fill:b.barBackgroundColor,
stroke:b.barBorderColor,"stroke-width":b.barBorderWidth});this.scrollbarRifles.attr({stroke:b.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1)},position:function(a,b,g,f){var d=this.options.vertical,e=0,h=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=g;this.xOffset=this.height=f;
this.yOffset=e;d?(this.width=this.yOffset=g=e=this.size,this.xOffset=b=0,this.barWidth=f-2*g,this.x=a+=this.options.margin):(this.height=this.xOffset=f=b=this.size,this.barWidth=g-2*f,this.y+=this.options.margin);this.group[h]({translateX:a,translateY:this.y});this.track[h]({width:g,height:f});this.scrollbarButtons[1].attr({translateX:d?0:g-b,translateY:d?f-e:0})},drawScrollbarButton:function(a){var b=this.renderer,d=this.scrollbarButtons,f=this.options,g=this.size,e;e=b.g().add(this.group);d.push(e);
e=b.rect().addClass("highcharts-scrollbar-button").add(e);e.attr({stroke:f.buttonBorderColor,"stroke-width":f.buttonBorderWidth,fill:f.buttonBackgroundColor});e.attr(e.crisp({x:-.5,y:-.5,width:g+1,height:g+1,r:f.buttonBorderRadius},e.strokeWidth()));e=b.path(this.swapXY(["M",g/2+(a?-1:1),g/2-3,"L",g/2+(a?-1:1),g/2+3,"L",g/2+(a?2:-2),g/2],f.vertical)).addClass("highcharts-scrollbar-arrow").add(d[a]);e.attr({fill:f.buttonArrowColor})},swapXY:function(a,b){var d=a.length,f;if(b)for(b=0;b<d;b+=3)f=a[b+
1],a[b+1]=a[b+2],a[b+2]=f;return a},setRange:function(a,b){var d=this.options,f=d.vertical,g=d.minWidth,e=this.barWidth,h,c,m=this.rendered&&!this.hasDragged?"animate":"attr";l(e)&&(a=Math.max(a,0),h=e*a,this.calculatedWidth=c=F(e*Math.min(b,1)-h),c<g&&(h=(e-g+c)*a,c=g),g=Math.floor(h+this.xOffset+this.yOffset),e=c/2-.5,this.from=a,this.to=b,f?(this.scrollbarGroup[m]({translateY:g}),this.scrollbar[m]({height:c}),this.scrollbarRifles[m]({translateY:e}),this.scrollbarTop=g,this.scrollbarLeft=0):(this.scrollbarGroup[m]({translateX:g}),
this.scrollbar[m]({width:c}),this.scrollbarRifles[m]({translateX:e}),this.scrollbarLeft=g,this.scrollbarTop=0),12>=c?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===d.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show()),this.rendered=!0)},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var d=a.chart.pointer.normalize(b),f=a.options.vertical?"chartY":"chartX",g=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][f]||(d=a.cursorToScrollbarPosition(d)[f],
f=a[f],f=d-f,a.hasDragged=!0,a.updatePosition(g[0]+f,g[1]+f),a.hasDragged&&n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;a.initPositions=[a.from,a.to];a.grabbedCenter=
!0};a.buttonToMinClick=function(b){var d=F(a.to-a.from)*a.options.step;a.updatePosition(F(a.from-d),F(a.to-d));n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var d=(a.to-a.from)*a.options.step;a.updatePosition(a.from+d,a.to+d);n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.trackClick=function(b){var d=a.chart.pointer.normalize(b),f=a.to-a.from,g=a.y+a.scrollbarTop,e=a.x+a.scrollbarLeft;a.options.vertical&&d.chartY>g||!a.options.vertical&&
d.chartX>e?a.updatePosition(a.from+f,a.to+f):a.updatePosition(a.from-f,a.to-f);n(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=F(1-F(b-a)),b=1);0>a&&(b=F(b-a),a=0);this.from=a;this.to=b},update:function(a){this.destroy();
this.init(this.chart.renderer,g(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,g=this.scrollbarGroup.element,f=this.mouseDownHandler,l=this.mouseMoveHandler,e=this.mouseUpHandler,a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[g,"mousedown",f],[x,"mousemove",l],[x,"mouseup",e]];h&&a.push([g,"touchstart",f],[x,"touchmove",l],[x,"touchend",
e]);t(a,function(a){C.apply(null,a)});this._events=a},removeEvents:function(){t(this._events,function(a){u.apply(null,a)});this._events=void 0},destroy:function(){var a=this.chart.scroller;this.removeEvents();t(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy())},this);a&&(a.scrollbar=null,q(a.scrollbarButtons))}};p(E.prototype,"init",function(a){var b=this;a.apply(b,[].slice.call(arguments,1));b.options.scrollbar&&b.options.scrollbar.enabled&&
(b.options.scrollbar.vertical=!b.horiz,b.options.startOnTick=b.options.endOnTick=!1,b.scrollbar=new B(b.chart.renderer,b.options.scrollbar,b.chart),C(b.scrollbar,"changed",function(a){var d=Math.min(A(b.options.min,b.min),b.min,b.dataMin),g=Math.max(A(b.options.max,b.max),b.max,b.dataMax)-d,e;b.horiz&&!b.reversed||!b.horiz&&b.reversed?(e=d+g*this.to,d+=g*this.from):(e=d+g*(1-this.from),d+=g*(1-this.to));b.setExtremes(d,e,!0,!1,a)}))});p(E.prototype,"render",function(a){var b=Math.min(A(this.options.min,
this.min),this.min,this.dataMin),d=Math.max(A(this.options.max,this.max),this.max,this.dataMax),f=this.scrollbar,g;a.apply(this,[].slice.call(arguments,1));f&&(this.horiz?f.position(this.left,this.top+this.height+this.offset+2+(this.opposite?0:this.axisTitleMargin),this.width,this.height):f.position(this.left+this.width+2+this.offset+(this.opposite?this.axisTitleMargin:0),this.top,this.width,this.height),isNaN(b)||isNaN(d)||!l(this.min)||!l(this.max)?f.setRange(0,0):(g=(this.min-b)/(d-b),b=(this.max-
b)/(d-b),this.horiz&&!this.reversed||!this.horiz&&this.reversed?f.setRange(g,b):f.setRange(1-b,1-g)))});p(E.prototype,"getOffset",function(a){var b=this.horiz?2:1,d=this.scrollbar;a.apply(this,[].slice.call(arguments,1));d&&(this.chart.axisOffset[b]+=d.size+d.options.margin)});p(E.prototype,"destroy",function(a){this.scrollbar&&(this.scrollbar=this.scrollbar.destroy());a.apply(this,[].slice.call(arguments,1))});a.Scrollbar=B})(K);(function(a){function B(a){this.init(a)}var C=a.addEvent,E=a.Axis,F=
a.Chart,v=a.color,l=a.defaultOptions,q=a.defined,x=a.destroyObjectProperties,t=a.doc,n=a.each,h=a.erase,b=a.extend,g=a.grep,A=a.hasTouch,u=a.isNumber,p=a.isObject,m=a.isTouchDevice,d=a.merge,r=a.pick,G=a.removeEvent,f=a.Scrollbar,z=a.Series,e=a.seriesTypes,y=a.wrap,c=[].concat(a.defaultDataGroupingUnits),w=function(a){var b=g(arguments,u);if(b.length)return Math[a].apply(0,b)};c[4]=["day",[1,2,3,4]];c[5]=["week",[1,2,3]];e=void 0===e.areaspline?"line":"areaspline";b(l,{navigator:{height:40,margin:25,
maskInside:!0,handles:{backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:v("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",outlineWidth:1,series:{type:e,color:"#335cad",fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:c},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,shadow:!1,threshold:null},xAxis:{className:"highcharts-navigator-xaxis",
tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});B.prototype={drawHandle:function(a,b){var c=this.chart.renderer,d=this.handles;this.rendered||(d[b]=c.path(["M",-4.5,.5,"L",3.5,.5,3.5,15.5,-4.5,15.5,
-4.5,.5,"M",-1.5,4,"L",-1.5,12,"M",.5,4,"L",.5,12]).attr({zIndex:10-b}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][b]).add(),c=this.navigatorOptions.handles,d[b].attr({fill:c.backgroundColor,stroke:c.borderColor,"stroke-width":1}).css({cursor:"ew-resize"}));d[b][this.rendered&&!this.hasDragged?"animate":"attr"]({translateX:Math.round(this.scrollerLeft+this.scrollbarHeight+parseInt(a,10)),translateY:Math.round(this.top+this.height/2-8)})},update:function(a){this.destroy();
d(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(a,b,c,d){var e=this.chart,f=e.renderer,g,k,h,l;l=this.scrollbarHeight;var m=this.xAxis,n=this.navigatorOptions,p=n.maskInside,w=this.height,t=this.top,v=this.navigatorEnabled,D=this.outlineHeight,x;x=this.rendered;if(u(a)&&u(b)&&(!this.hasDragged||q(c))&&(this.navigatorLeft=g=r(m.left,e.plotLeft+l),this.navigatorWidth=k=r(m.len,e.plotWidth-2*l),this.scrollerLeft=h=g-l,this.scrollerWidth=l=l=k+2*l,c=r(c,m.translate(a)),
d=r(d,m.translate(b)),u(c)&&Infinity!==Math.abs(c)||(c=0,d=l),!(m.translate(d,!0)-m.translate(c,!0)<e.xAxis[0].minRange))){this.zoomedMax=Math.min(Math.max(c,d,0),k);this.zoomedMin=Math.min(Math.max(this.fixedWidth?this.zoomedMax-this.fixedWidth:Math.min(c,d),0),k);this.range=this.zoomedMax-this.zoomedMin;b=Math.round(this.zoomedMax);a=Math.round(this.zoomedMin);!x&&v&&(this.navigatorGroup=c=f.g("navigator").attr({zIndex:3}).add(),this.leftShade=f.rect().addClass("highcharts-navigator-mask"+(p?"-inside":
"")).attr({fill:n.maskFill}).css(p&&{cursor:"ew-resize"}).add(c),p||(this.rightShade=f.rect().addClass("highcharts-navigator-mask").attr({fill:n.maskFill}).add(c)),this.outline=f.path().addClass("highcharts-navigator-outline").attr({"stroke-width":n.outlineWidth,stroke:n.outlineColor}).add(c));if(v){f=x&&!this.hasDragged?"animate":"attr";p=this.outline.strokeWidth();p/=2;x=t+p;this.leftShade[f](n.maskInside?{x:g+a,y:t,width:b-a,height:w}:{x:g,y:t,width:a,height:w});if(this.rightShade)this.rightShade[f]({x:g+
b,y:t,width:k-b,height:w});this.outline[f]({d:["M",h,x,"L",g+a-p,x,g+a-p,x+D,"L",g+b-p,x+D,"L",g+b-p,x,h+l,x].concat(n.maskInside?["M",g+a+p,x,"L",g+b-p,x]:[])});this.drawHandle(a+p,0);this.drawHandle(b+p,1)}this.scrollbar&&(this.scrollbar.hasDragged=this.hasDragged,this.scrollbar.position(this.scrollerLeft,this.top+(v?this.height:-this.scrollbarHeight),this.scrollerWidth,this.scrollbarHeight),this.scrollbar.setRange(a/k,b/k));this.rendered=!0}},addEvents:function(){var a=this.chart,b=a.container,
c=this.mouseDownHandler,d=this.mouseMoveHandler,e=this.mouseUpHandler,f;f=[[b,"mousedown",c],[b,"mousemove",d],[t,"mouseup",e]];A&&f.push([b,"touchstart",c],[b,"touchmove",d],[t,"touchend",e]);n(f,function(a){C.apply(null,a)});this._events=f;this.series&&this.series[0]&&C(this.series[0].xAxis,"foundExtremes",function(){a.scroller.modifyNavigatorAxisExtremes()});C(a,"redraw",function(){var a=this.scroller,b=a&&(a.baseSeries&&a.baseSeries[0]&&a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,
b.max)})},removeEvents:function(){this._events&&(n(this._events,function(a){G.apply(null,a)}),this._events=void 0);this.removeBaseSeriesEvents()},removeBaseSeriesEvents:function(){var a=this.baseSeries||[];this.navigatorEnabled&&a[0]&&!1!==this.navigatorOptions.adaptToUpdatedData&&(n(a,function(a){G(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&G(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var b=a.options,c=b.navigator,e=c.enabled,b=b.scrollbar,g=b.enabled,
h=e?c.height:0,l=g?b.height:0;this.handles=[];this.scrollbarButtons=[];this.elementsToDestroy=[];this.chart=a;this.setBaseSeries();this.height=h;this.scrollbarHeight=l;this.scrollbarEnabled=g;this.navigatorEnabled=e;this.navigatorOptions=c;this.scrollbarOptions=b;this.outlineHeight=h+l;var n=this,p,r,e=n.baseSeries;n.mouseDownHandler=function(b){b=a.pointer.normalize(b);var c=n.zoomedMin,d=n.zoomedMax,e=n.top,f=n.scrollerLeft,g=n.scrollerWidth,k=n.navigatorLeft,l=n.navigatorWidth,w=n.scrollbarPad||
0,q=n.range,t=b.chartX,u=b.chartY;b=a.xAxis[0];var v,x=m?10:7;u>e&&u<e+h&&(Math.abs(t-c-k)<x?(n.grabbedLeft=!0,n.otherHandlePos=d,n.fixedExtreme=b.max,a.fixedRange=null):Math.abs(t-d-k)<x?(n.grabbedRight=!0,n.otherHandlePos=c,n.fixedExtreme=b.min,a.fixedRange=null):t>k+c-w&&t<k+d+w?(n.grabbedCenter=t,n.fixedWidth=q,r=t-c):t>f&&t<f+g&&(d=t-k-q/2,0>d?d=0:d+q>=l&&(d=l-q,v=n.getUnionExtremes().dataMax),d!==c&&(n.fixedWidth=q,c=p.toFixedRange(d,d+q,null,v),b.setExtremes(c.min,c.max,!0,null,{trigger:"navigator"}))))};
n.mouseMoveHandler=function(b){var c=n.scrollbarHeight,d=n.navigatorLeft,e=n.navigatorWidth,f=n.scrollerLeft,g=n.scrollerWidth,k=n.range,h;b.touches&&0===b.touches[0].pageX||(b=a.pointer.normalize(b),h=b.chartX,h<d?h=d:h>f+g-c&&(h=f+g-c),n.grabbedLeft?(n.hasDragged=!0,n.render(0,0,h-d,n.otherHandlePos)):n.grabbedRight?(n.hasDragged=!0,n.render(0,0,n.otherHandlePos,h-d)):n.grabbedCenter&&(n.hasDragged=!0,h<r?h=r:h>e+r-k&&(h=e+r-k),n.render(0,0,h-r,h-r+k)),n.hasDragged&&n.scrollbar&&n.scrollbar.options.liveRedraw&&
(b.DOMType=b.type,setTimeout(function(){n.mouseUpHandler(b)},0)))};n.mouseUpHandler=function(b){var c,d,e=b.DOMEvent||b;if(n.hasDragged||"scrollbar"===b.trigger)n.zoomedMin===n.otherHandlePos?c=n.fixedExtreme:n.zoomedMax===n.otherHandlePos&&(d=n.fixedExtreme),n.zoomedMax===n.navigatorWidth&&(d=n.getUnionExtremes().dataMax),c=p.toFixedRange(n.zoomedMin,n.zoomedMax,c,d),q(c.min)&&a.xAxis[0].setExtremes(c.min,c.max,!0,n.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:e});
"mousemove"!==b.DOMType&&(n.grabbedLeft=n.grabbedRight=n.grabbedCenter=n.fixedWidth=n.fixedExtreme=n.otherHandlePos=n.hasDragged=r=null)};var b=a.xAxis.length,g=a.yAxis.length,t=e&&e[0]&&e[0].xAxis||a.xAxis[0];a.extraBottomMargin=n.outlineHeight+c.margin;a.isDirtyBox=!0;n.navigatorEnabled?(n.xAxis=p=new E(a,d({offset:0},{breaks:t.options.breaks,ordinal:t.options.ordinal},c.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",isX:!0,type:"datetime",index:b,height:h,offsetLeft:l,offsetRight:-l,keepOrdinalPadding:!0,
startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1})),n.yAxis=new E(a,d(c.yAxis,{id:"navigator-y-axis",alignTicks:!1,height:h,offset:0,index:g,zoomEnabled:!1})),e||c.series.data?n.addBaseSeries():0===a.series.length&&y(a,"redraw",function(b,c){0<a.series.length&&!n.series&&(n.setBaseSeries(),a.redraw=b);b.call(a,c)})):n.xAxis=p={translate:function(b,c){var d=a.xAxis[0],e=d.getExtremes(),f=a.plotWidth-2*l,g=w("min",d.options.min,e.dataMin),d=w("max",d.options.max,e.dataMax)-g;return c?
b*d/f+g:f*(b-g)/d},toFixedRange:E.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=n.scrollbar=new f(a.renderer,d(a.options.scrollbar,{margin:n.navigatorEnabled?0:10}),a),C(n.scrollbar,"changed",function(b){var c=n.navigatorWidth,d=c*this.to,c=c*this.from;n.hasDragged=n.scrollbar.hasDragged;n.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType)&&setTimeout(function(){n.mouseUpHandler(b)})}));n.addBaseSeriesEvents();n.addEvents()},getUnionExtremes:function(a){var b=
this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:r(d&&d.min,w("min",e.min,b.dataMin,c.dataMin,c.min)),dataMax:r(d&&d.max,w("max",e.max,b.dataMax,c.dataMax,c.max))});return f},setBaseSeries:function(a){var b=this.chart,c=this.baseSeries=[];a=a||b.options&&b.options.navigator.baseSeries||0;this.series&&(this.removeBaseSeriesEvents(),n(this.series,function(a){a.destroy()}));n(b.series||[],function(b,d){(b.options.showInNavigator||(d===a||b.options.id===a)&&
!1!==b.options.showInNavigator)&&c.push(b)});this.xAxis&&!this.xAxis.fake&&this.addBaseSeries()},addBaseSeries:function(){var a=this,b=a.chart,c=a.series=[],e=a.baseSeries,f,g,h=a.navigatorOptions.series,l,m={enableMouseTracking:!1,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0};e?n(e,function(e,k){m.name="Navigator "+(k+1);f=e.options||{};l=f.navigatorOptions||{};g=d(f,m,h,l);k=l.data||h.data;a.hasNavigatorData=a.hasNavigatorData||
!!k;g.data=k||f.data&&f.data.slice(0);e.navigatorSeries=b.initSeries(g);c.push(e.navigatorSeries)}):(g=d(h,m),g.data=h.data,a.hasNavigatorData=!!g.data,c.push(b.initSeries(g)));this.addBaseSeriesEvents()},addBaseSeriesEvents:function(){var a=this,c=a.baseSeries||[];c[0]&&c[0].xAxis&&C(c[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);!1!==this.navigatorOptions.adaptToUpdatedData&&n(c,function(c){c.xAxis&&(C(c,"updatedData",this.updatedDataHandler),c.userOptions.events=b(c.userOptions.event,
{updatedData:this.updatedDataHandler}));C(c,"remove",function(){this.navigatorSeries&&(h(a.series,this.navigatorSeries),this.navigatorSeries.remove(),delete this.navigatorSeries)})},this)},modifyNavigatorAxisExtremes:function(){var a=this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.scroller,b=this.getExtremes(),c=b.dataMin,d=b.dataMax,b=b.max-b.min,e=a.stickToMin,
f=a.stickToMax,g,h,l=a.series&&a.series[0],m=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(e&&(h=c,g=h+b),f&&(g=d,e||(h=Math.max(g-b,l&&l.xData?l.xData[0]:-Number.MAX_VALUE))),m&&(e||f)&&u(h)&&(this.min=this.userMin=h,this.max=this.userMax=g));a.stickToMin=a.stickToMax=null},updatedDataHandler:function(){var a=this.chart.scroller,b=this.navigatorSeries;a.stickToMin=u(this.xAxis.min)&&this.xAxis.min<=this.xData[0];a.stickToMax=Math.round(a.zoomedMax)>=Math.round(a.navigatorWidth);
b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],b.setData(this.options.data,!1,null,!1))},destroy:function(){this.removeEvents();this.xAxis&&(h(this.chart.xAxis,this.xAxis),h(this.chart.axes,this.xAxis));this.yAxis&&(h(this.chart.yAxis,this.yAxis),h(this.chart.axes,this.yAxis));n(this.series||[],function(a){a.destroy&&a.destroy()});n("series xAxis yAxis leftShade rightShade outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&
this[a].destroy&&this[a].destroy();this[a]=null},this);n([this.handles,this.elementsToDestroy],function(a){x(a)},this)}};a.Navigator=B;y(E.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,g=e.navigator,e=e.rangeSelector,h;this.isXAxis&&(g&&g.enabled||e&&e.enabled)&&("x"===f?d.resetZoomButton="blocked":"y"===f?h=!1:"xy"===f&&(d=this.previousZoom,q(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==h?h:a.call(this,b,
c)});y(F.prototype,"init",function(a,b,c){C(this,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=this.navigator=new B(this)});a.call(this,b,c)});y(F.prototype,"getMargins",function(a){var b=this.legend,c=b.options,d=this.scroller,e,f;a.apply(this,[].slice.call(arguments,1));d&&(e=d.xAxis,f=d.yAxis,d.top=d.navigatorOptions.top||this.chartHeight-d.height-d.scrollbarHeight-this.spacing[2]-("bottom"===c.verticalAlign&&c.enabled&&!c.floating?b.legendHeight+
r(c.margin,10):0),e&&f&&(e.options.top=f.options.top=d.top,e.setAxisSize(),f.setAxisSize()))});y(z.prototype,"addPoint",function(b,c,d,e,f){var g=this.options.turboThreshold;g&&this.xData.length>g&&p(c,!0)&&this.chart.scroller&&a.error(20,!0);b.call(this,c,d,e,f)});y(F.prototype,"addSeries",function(a,b,c,d){a=a.call(this,b,!1,d);this.scroller&&this.scroller.setBaseSeries();r(c,!0)&&this.redraw();return a});y(z.prototype,"update",function(a,b,c){a.call(this,b,!1);this.chart.scroller&&this.chart.scroller.setBaseSeries();
r(c,!0)&&this.chart.redraw()})})(K);(function(a){function B(a){this.init(a)}var C=a.addEvent,E=a.Axis,F=a.Chart,v=a.css,l=a.createElement,q=a.dateFormat,x=a.defaultOptions,t=x.global.useUTC,n=a.defined,h=a.destroyObjectProperties,b=a.discardElement,g=a.each,A=a.extend,u=a.fireEvent,p=a.Date,m=a.isNumber,d=a.merge,r=a.pick,G=a.pInt,f=a.splat,z=a.wrap;A(x,{rangeSelector:{buttonTheme:{"stroke-width":0,width:28,height:18,padding:2,zIndex:7},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666666"}}});
x.lang=d(x.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});B.prototype={clickButton:function(a,b){var c=this,d=c.chart,e=c.buttonOptions[a],h=d.xAxis[0],l=d.scroller&&d.scroller.getUnionExtremes()||h||{},k=l.dataMin,n=l.dataMax,p,q=h&&Math.round(Math.min(h.max,r(n,h.max))),u=e.type,v,l=e._range,x,y,z,A=e.dataGrouping;if(null!==k&&null!==n){d.fixedRange=l;A&&(this.forcedDataGrouping=!0,E.prototype.setDataGrouping.call(h||{chart:this.chart},A,!1));if("month"===u||"year"===
u)h?(u={range:e,max:q,dataMin:k,dataMax:n},p=h.minFromRange.call(u),m(u.newMax)&&(q=u.newMax)):l=e;else if(l)p=Math.max(q-l,k),q=Math.min(p+l,n);else if("ytd"===u)if(h)void 0===n&&(k=Number.MAX_VALUE,n=Number.MIN_VALUE,g(d.series,function(a){a=a.xData;k=Math.min(a[0],k);n=Math.max(a[a.length-1],n)}),b=!1),q=c.getYTDExtremes(n,k,t),p=x=q.min,q=q.max;else{C(d,"beforeRender",function(){c.clickButton(a)});return}else"all"===u&&h&&(p=k,q=n);c.setSelected(a);h?h.setExtremes(p,q,r(b,1),null,{trigger:"rangeSelectorButton",
rangeSelectorButton:e}):(v=f(d.options.xAxis)[0],z=v.range,v.range=l,y=v.min,v.min=x,C(d,"load",function(){v.range=z;v.min=y}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,d=c.buttons||[].concat(b.defaultButtons),e=c.selected,f=function(){var a=
b.minInput,c=b.maxInput;a&&a.blur&&u(a,"blur");c&&c.blur&&u(c,"blur")};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=d;this.unMouseDown=C(a.container,"mousedown",f);this.unResize=C(a,"resize",f);g(d,b.computeButtonRange);void 0!==e&&d[e]&&this.clickButton(e,!1);C(a,"load",function(){C(a.xAxis[0],"setExtremes",function(c){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==c.trigger&&"updatedData"!==c.trigger&&b.forcedDataGrouping&&this.setDataGrouping(!1,!1)})})},
updateButtonStates:function(){var a=this.chart,b=a.xAxis[0],c=Math.round(b.max-b.min),d=!b.hasVisibleSeries,a=a.scroller&&a.scroller.getUnionExtremes()||b,f=a.dataMin,h=a.dataMax,a=this.getYTDExtremes(h,f,t),l=a.min,k=a.max,n=this.selected,p=m(n),q=this.options.allButtonsEnabled,r=this.buttons;g(this.buttonOptions,function(a,e){var g=a._range,m=a.type,t=a.count||1;a=r[e];var w=0;e=e===n;var u=g>h-f,v=g<b.minRange,x=!1,y=!1,g=g===c;("month"===m||"year"===m)&&c>=864E5*{month:28,year:365}[m]*t&&c<=864E5*
{month:31,year:366}[m]*t?g=!0:"ytd"===m?(g=k-l===c,x=!e):"all"===m&&(g=b.max-b.min>=h-f,y=!e&&p&&g);m=!q&&(u||v||y||d);g=e&&g||g&&!p&&!x;m?w=3:g&&(p=!0,w=2);a.state!==w&&a.setState(w)})},computeButtonRange:function(a){var b=a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if("month"===b||"year"===b)a._range=864E5*{month:30,year:365}[b]*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this[a+"Input"];n(b)&&
(d.previousValue=d.HCTime,d.HCTime=b);d.value=q(c.inputEditDateFormat||"%Y-%m-%d",d.HCTime);this[a+"DateBox"].attr({text:q(c.inputDateFormat||"%b %e, %Y",d.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];v(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){v(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function b(){var a=
p.value,b=(h.inputDateParser||Date.parse)(a),d=e.xAxis[0],f=e.scroller&&e.scroller.xAxis?e.scroller.xAxis:d,g=f.dataMin,f=f.dataMax;b!==p.previousValue&&(p.previousValue=b,m(b)||(b=a.split("-"),b=Date.UTC(G(b[0]),G(b[1])-1,G(b[2]))),m(b)&&(t||(b+=6E4*(new Date).getTimezoneOffset()),n?b>c.maxInput.HCTime?b=void 0:b<g&&(b=g):b<c.minInput.HCTime?b=void 0:b>f&&(b=f),void 0!==b&&d.setExtremes(n?b:d.min,n?d.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})))}var c=this,e=c.chart,f=e.renderer.style||{},
g=e.renderer,h=e.options.rangeSelector,k=c.div,n="min"===a,p,q,r=this.inputGroup;this[a+"Label"]=q=g.label(x.lang[n?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(r);r.offset+=q.width+5;this[a+"DateBox"]=g=g.label("",r.offset).addClass("highcharts-range-input").attr({padding:2,width:h.inputBoxWidth||90,height:h.inputBoxHeight||17,stroke:h.inputBoxBorderColor||"#cccccc","stroke-width":1,"text-align":"center"}).on("click",function(){c.showInput(a);
c[a+"Input"].focus()}).add(r);r.offset+=g.width+(n?10:0);this[a+"Input"]=p=l("input",{name:a,className:"highcharts-range-selector",type:"text"},{top:e.plotTop+"px"},k);q.css(d(f,h.labelStyle));g.css(d({color:"#333333"},f,h.inputStyle));v(p,A({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:f.fontSize,fontFamily:f.fontFamily,left:"-9em"},h.inputStyle));p.onfocus=function(){c.showInput(a)};p.onblur=function(){c.hideInput(a)};p.onchange=b;p.onkeypress=function(a){13===
a.keyCode&&b()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=r((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},getYTDExtremes:function(a,b,c){var d=new p(a),e=d[p.hcGetFullYear]();c=c?p.UTC(e,0,1):+new p(e,0,1);b=Math.max(b||0,c);d=d.getTime();return{max:Math.min(a||d,d),min:b}},render:function(a,b){var c=this,d=c.chart,e=d.renderer,f=d.container,h=d.options,k=h.exporting&&!1!==h.exporting.enabled&&h.navigation&&h.navigation.buttonOptions,
m=h.rangeSelector,p=c.buttons,h=x.lang,q=c.div,q=c.inputGroup,t=m.buttonTheme,u=m.buttonPosition||{},v=m.inputEnabled,y=t&&t.states,z=d.plotLeft,B,C=this.getPosition(),E=c.group,F=c.rendered;!1!==m.enabled&&(F||(c.group=E=e.g("range-selector-buttons").add(),c.zoomText=e.text(h.rangeSelectorZoom,r(u.x,z),15).css(m.labelStyle).add(E),B=r(u.x,z)+c.zoomText.getBBox().width+5,g(c.buttonOptions,function(a,b){p[b]=e.button(a.text,B,0,function(){c.clickButton(b);c.isActive=!0},t,y&&y.hover,y&&y.select,y&&
y.disabled).attr({"text-align":"center"}).add(E);B+=p[b].width+r(m.buttonSpacing,5)}),!1!==v&&(c.div=q=l("div",null,{position:"relative",height:0,zIndex:1}),f.parentNode.insertBefore(q,f),c.inputGroup=q=e.g("input-group").add(),q.offset=0,c.drawInput("min"),c.drawInput("max"))),c.updateButtonStates(),E[F?"animate":"attr"]({translateY:C.buttonTop}),!1!==v&&(q.align(A({y:C.inputTop,width:q.offset,x:k&&C.inputTop<(k.y||0)+k.height-d.spacing[0]?-40:0},m.inputPosition),!0,d.spacingBox),n(v)||(d=E.getBBox(),
q[q.alignAttr.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b)),c.rendered=!0)},update:function(a){var b=this.chart;d(!0,b.options.rangeSelector,a);this.destroy();this.init(b)},destroy:function(){var a=this.minInput,d=this.maxInput,c;this.unMouseDown();this.unResize();h(this.buttons);a&&(a.onfocus=a.onblur=a.onchange=null);d&&(d.onfocus=d.onblur=d.onchange=null);for(c in this)this[c]&&"chart"!==c&&(this[c].destroy?this[c].destroy():this[c].nodeType&&b(this[c])),
this[c]!==B.prototype[c]&&(this[c]=null)}};E.prototype.toFixedRange=function(a,b,c,d){var e=this.chart&&this.chart.fixedRange;a=r(c,this.translate(a,!0));b=r(d,this.translate(b,!0));c=e&&(b-a)/e;.7<c&&1.3>c&&(d?a=b-e:b=a+e);m(a)||(a=b=void 0);return{min:a,max:b}};E.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],c,d=this.max,f,g,h=function(a,c){var d=new Date(a);d["set"+b](d["get"+b]()+c);return d.getTime()-a};m(a)?(c=d-a,g=a):(c=d+h(d,-a.count),this.chart&&
(this.chart.fixedRange=d-c));f=r(this.dataMin,Number.MIN_VALUE);m(c)||(c=f);c<=f&&(c=f,void 0===g&&(g=h(c,a.count)),this.newMax=Math.min(c+g,this.dataMax));m(d)||(c=void 0);return c};z(F.prototype,"init",function(a,b,c){C(this,"init",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new B(this))});a.call(this,b,c)});a.RangeSelector=B})(K);(function(a){var B=a.addEvent,C=a.isNumber;a.Chart.prototype.callbacks.push(function(a){function E(){v=a.xAxis[0].getExtremes();C(v.min)&&q.render(v.min,
v.max)}var v,l=a.scroller,q=a.rangeSelector,x,t;l&&(v=a.xAxis[0].getExtremes(),l.render(v.min,v.max));q&&(t=B(a.xAxis[0],"afterSetExtremes",function(a){q.render(a.min,a.max)}),x=B(a,"redraw",E),E());B(a,"destroy",function(){q&&(x(),t())})})})(K);(function(a){var B=a.arrayMax,C=a.arrayMin,E=a.Axis,F=a.Chart,v=a.defined,l=a.each,q=a.extend,x=a.format,t=a.inArray,n=a.isNumber,h=a.isString,b=a.map,g=a.merge,A=a.pick,u=a.Point,p=a.Renderer,m=a.Series,d=a.splat,r=a.SVGRenderer,G=a.VMLRenderer,f=a.wrap,
z=m.prototype,e=z.init,y=z.processData,c=u.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(c,e,f){var l=h(c)||c.nodeName,k=arguments[l?1:0],m=k.series,n=a.getOptions(),p,q=A(k.navigator&&k.navigator.enabled,n.navigator.enabled,!0),r=q?{startOnTick:!1,endOnTick:!1}:null,t={marker:{enabled:!1,radius:2}},u={shadow:!1,borderWidth:0};k.xAxis=b(d(k.xAxis||{}),function(a){return g({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},n.xAxis,
a,{type:"datetime",categories:null},r)});k.yAxis=b(d(k.yAxis||{}),function(a){p=A(a.opposite,!0);return g({labels:{y:-2},opposite:p,showLastLabel:!1,title:{text:null}},n.yAxis,a)});k.series=null;k=g({chart:{panning:!0,pinchType:"x"},navigator:{enabled:q},scrollbar:{enabled:A(n.scrollbar.enabled,!0)},rangeSelector:{enabled:A(n.rangeSelector.enabled,!0)},title:{text:null},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:t,spline:t,area:t,areaspline:t,arearange:t,areasplinerange:t,
column:u,columnrange:u,candlestick:u,ohlc:u}},k,{isStock:!0,chart:{inverted:!1}});k.series=m;return l?new F(c,k,f):new F(k,e)};f(E.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&(d.x=0),void 0===d.align&&(d.align="right"),b[c]=1,"right"):a.call(this,[].slice.call(arguments,1))});f(E.prototype,"getPlotLinePath",function(a,
c,d,e,f,g){var k=this,m=this.isLinked&&!this.series?this.linkedParent.series:this.series,p=k.chart,q=p.renderer,r=k.left,u=k.top,w,x,y,z,D=[],B=[],C,E;if("colorAxis"===k.coll)return a.apply(this,[].slice.call(arguments,1));B=function(a){var c="xAxis"===a?"yAxis":"xAxis";a=k.options[c];return n(a)?[p[c][a]]:h(a)?[p.get(a)]:b(m,function(a){return a[c]})}(k.coll);l(k.isXAxis?p.yAxis:p.xAxis,function(a){if(v(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=v(a.options[b])?
p[b][a.options[b]]:p[b][0];k===b&&B.push(a)}});C=B.length?[]:[k.isXAxis?p.yAxis[0]:p.xAxis[0]];l(B,function(a){-1===t(a,C)&&C.push(a)});E=A(g,k.translate(c,null,null,e));n(E)&&(k.horiz?l(C,function(a){var b;x=a.pos;z=x+a.len;w=y=Math.round(E+k.transB);if(w<r||w>r+k.width)f?w=y=Math.min(Math.max(r,w),r+k.width):b=!0;b||D.push("M",w,x,"L",y,z)}):l(C,function(a){var b;w=a.pos;y=w+a.len;x=z=Math.round(u+k.height-E);if(x<u||x>u+k.height)f?x=z=Math.min(Math.max(u,x),k.top+k.height):b=!0;b||D.push("M",w,
x,"L",y,z)}));return 0<D.length?q.crispPolyLine(D,d||1):null});E.prototype.getPlotBandPath=function(a,b){b=this.getPlotLinePath(b,null,null,!0);a=this.getPlotLinePath(a,null,null,!0);var c=[],d;if(a&&b&&a.toString()!==b.toString())for(d=0;d<a.length;d+=6)c.push("M",a[d+1],a[d+2],"L",a[d+4],a[d+5],b[d+4],b[d+5],b[d+1],b[d+2],"z");else c=null;return c};r.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+
2]=a[c+5]=Math.round(a[c+2])+b%2/2);return a};p===G&&(G.prototype.crispPolyLine=r.prototype.crispPolyLine);f(E.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});f(E.prototype,"drawCrosshair",function(a,b,c){var d,e;a.call(this,b,c);if(v(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){a=this.chart;var f=this.options.crosshair.label,g=this.horiz;d=this.opposite;e=this.left;var h=this.top,l=this.crossLabel,m,n=f.format,
p="",r="inside"===this.options.tickPosition,t=!1!==this.crosshair.snap,u=0;b||(b=this.cross&&this.cross.e);m=g?"center":d?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";l||(l=this.crossLabel=a.renderer.label(null,null,null,f.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:f.align||m,padding:A(f.padding,8),r:A(f.borderRadius,3),zIndex:2}).add(this.labelGroup),l.attr({fill:f.backgroundColor||
this.series[0]&&this.series[0].color||"#666666",stroke:f.borderColor||"","stroke-width":f.borderWidth||0}).css(q({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},f.style)));g?(m=t?c.plotX+e:b.chartX,h+=d?0:this.height):(m=d?this.width+e:0,h=t?c.plotY+h:b.chartY);n||f.formatter||(this.isDatetimeAxis&&(p="%b %d, %Y"),n="{value"+(p?":"+p:"")+"}");b=t?c[this.isXAxis?"x":"y"]:this.toValue(g?b.chartX:b.chartY);l.attr({text:n?x(n,{value:b}):f.formatter.call(this,b),x:m,y:h,visibility:"visible"});
b=l.getBBox();if(g){if(r&&!d||!r&&d)h=l.y-b.height}else h=l.y-b.height/2;g?(d=e-b.x,e=e+this.width-b.x):(d="left"===this.labelAlign?e:0,e="right"===this.labelAlign?e+this.width:a.chartWidth);l.translateX<d&&(u=d-l.translateX);l.translateX+b.width>=e&&(u=-(l.translateX+b.width-e));l.attr({x:m+u,y:h,anchorX:g?m:this.opposite?0:a.chartWidth,anchorY:g?this.opposite?a.chartHeight:0:h+b.height/2})}});z.init=function(){e.apply(this,arguments);this.setCompare(this.options.compare)};z.setCompare=function(a){this.modifyValue=
"value"===a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};z.processData=function(){var a,b=-1,c,d,e,f;y.apply(this,arguments);if(this.xAxis&&this.processedYData)for(c=this.processedXData,d=this.processedYData,e=d.length,this.pointArrayMap&&(b=t("close",this.pointArrayMap),-1===b&&(b=t(this.pointValKey||
"y",this.pointArrayMap))),a=0;a<e-1;a++)if(f=-1<b?d[a][b]:d[a],n(f)&&c[a+1]>=this.xAxis.min&&0!==f){this.compareValue=f;break}};f(z,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));this.modifyValue&&(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=C(b),this.dataMax=B(b))});E.prototype.setCompare=function(a,b){this.isXAxis||(l(this.series,function(b){b.setCompare(a)}),A(b,!0)&&this.chart.redraw())};u.prototype.tooltipFormatter=function(b){b=b.replace("{point.change}",
(0<this.change?"+":"")+a.numberFormat(this.change,A(this.series.tooltipOptions.changeDecimals,2)));return c.apply(this,[b])};f(m.prototype,"render",function(a){this.chart.is3d&&this.chart.is3d()||this.chart.polar||!this.xAxis||(!this.clipBox&&this.animate?(this.clipBox=g(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}):this.clipBox&&(this.clipBox.width=
this.xAxis.len,this.clipBox.height=this.yAxis.len));a.call(this)})})(K);return K});

},{}],3:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );

},{}],4:[function(require,module,exports){
//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

function isUndefined(input) {
    return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i in momentProperties) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _ordinalParseLenient.
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return this._months;
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return this._monthsShort;
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    //can't just apply() to create a date:
    //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
    var date = new Date(y, m, d, h, M, s, ms);

    //the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    //the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return this._weekdays;
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    ordinalParse: defaultOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
        hooks.createFromInputFallback(config);
    }
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse)) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }

    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (typeof(input) === 'object') {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        } else {
            return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this[units + 's']();
}

function makeGetter(name) {
    return function () {
        return this._data[name];
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    s: 45,  // seconds to minute
    m: 45,  // minutes to hour
    h: 22,  // hours to day
    d: 26,  // days to month
    M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
}

function humanize (withSuffix) {
    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.17.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

},{}]},{},[1]);
