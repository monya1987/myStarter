(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1TCz":function(e,n,t){"use strict";t.r(n);var r=t("0iUn"),o=t("sLSF"),a=t("MI3g"),c=t("a7VT"),u=t("Tit0"),i=t("q1tI"),f=t.n(i),l=t("8Bbg"),s=t.n(l),p=t("/MKj"),d=t("ANjH"),h=t("1mXj"),v=t.n(h),g=function(e){return"@@redux-saga/"+e},y=g("CANCEL_PROMISE"),m=g("CHANNEL_END"),b=g("IO"),E=g("MATCH"),w=g("MULTICAST"),x=g("SAGA_ACTION"),S=g("SELF_CANCELLATION"),k=g("TASK"),j=g("TASK_CANCEL"),A=g("TERMINATE"),O=g("LOCATION"),C=t("wx14"),T=t("zLVn"),D=function(e){return null===e||void 0===e},N=function(e){return null!==e&&void 0!==e},P=function(e){return"function"===typeof e},R=function(e){return"string"===typeof e},L=Array.isArray,I=function(e){return e&&P(e.then)},M=function(e){return e&&P(e.next)&&P(e.throw)},F=function e(n){return n&&(R(n)||H(n)||P(n)||L(n)&&n.every(e))},_=function(e){return e&&P(e.take)&&P(e.close)},q=function(e){return P(e)&&e.hasOwnProperty("toString")},H=function(e){return Boolean(e)&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype},U=function(e){return _(e)&&e[w]};var G=function(e){return function(){return e}}(!0),K=function(){},B=function(e){return e};"function"===typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var X=function(e,n){Object(C.a)(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(t){e[t]=n[t]})},z=function(e,n){var t;return(t=[]).concat.apply(t,n.map(e))};function J(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}function V(e){var n=!1;return function(){n||(n=!0,e())}}var W=function(e){throw e},Y=function(e){return{value:e,done:!0}};function Q(e,n,t){void 0===n&&(n=W),void 0===t&&(t="iterator");var r={meta:{name:t},next:e,throw:n,return:Y,isSagaIterator:!0};return"undefined"!==typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function Z(e,n){var t=n.sagaStack;console.error(e),console.error(t)}var $=function(e){return Array.apply(null,new Array(e))},ee=function(e){return function(n){return e(Object.defineProperty(n,x,{value:!0}))}},ne=function(e){return e===A},te=function(e){return e===j},re=function(e){return ne(e)||te(e)};function oe(e,n){var t=Object.keys(e),r=t.length;var o,a=0,c=L(e)?$(r):{},u={};return t.forEach(function(e){var t=function(t,u){o||(u||re(t)?(n.cancel(),n(t,u)):(c[e]=t,++a===r&&(o=!0,n(c))))};t.cancel=K,u[e]=t}),n.cancel=function(){o||(o=!0,t.forEach(function(e){return u[e].cancel()}))},u}function ae(e){return{name:e.name||"anonymous",location:ce(e)}}function ce(e){return e[O]}var ue="Channel's Buffer overflow!",ie=1,fe=3,le=4;function se(e,n){void 0===e&&(e=10);var t=new Array(e),r=0,o=0,a=0,c=function(n){t[o]=n,o=(o+1)%e,r++},u=function(){if(0!=r){var n=t[a];return t[a]=null,r--,a=(a+1)%e,n}},i=function(){for(var e=[];r;)e.push(u());return e};return{isEmpty:function(){return 0==r},put:function(u){var f;if(r<e)c(u);else switch(n){case ie:throw new Error(ue);case fe:t[o]=u,a=o=(o+1)%e;break;case le:f=2*e,t=i(),r=t.length,o=t.length,a=0,t.length=f,e=f,c(u)}},take:u,flush:i}}var pe=function(e){return se(e,le)},de="TAKE",he="PUT",ve="ALL",ge="RACE",ye="CALL",me="CPS",be="FORK",Ee="JOIN",we="CANCEL",xe="SELECT",Se="ACTION_CHANNEL",ke="CANCELLED",je="FLUSH",Ae="GET_CONTEXT",Oe="SET_CONTEXT",Ce=function(e,n){var t;return(t={})[b]=!0,t.combinator=!1,t.type=e,t.payload=n,t};function Te(e,n){return void 0===e&&(e="*"),F(e)?Ce(de,{pattern:e}):U(e)&&N(n)&&F(n)?Ce(de,{channel:e,pattern:n}):_(e)?Ce(de,{channel:e}):void 0}function De(e,n){return D(n)&&(n=e,e=void 0),Ce(he,{channel:e,action:n})}function Ne(e){var n=Ce(ve,e);return n.combinator=!0,n}function Pe(e){var n=Ce(ge,e);return n.combinator=!0,n}function Re(e,n){var t,r=null;return P(e)?t=e:(L(e)?(r=e[0],t=e[1]):(r=e.context,t=e.fn),r&&R(t)&&P(r[t])&&(t=r[t])),{context:r,fn:t,args:n}}function Le(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return Ce(ye,Re(e,t))}function Ie(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return Ce(be,Re(e,t))}function Me(){var e={};return e.promise=new Promise(function(n,t){e.resolve=n,e.reject=t}),e}var Fe=Me,_e=[],qe=0;function He(e){try{Ke(),e()}finally{Be()}}function Ue(e){_e.push(e),qe||(Ke(),Xe())}function Ge(e){try{return Ke(),e()}finally{Xe()}}function Ke(){qe++}function Be(){qe--}function Xe(){var e;for(Be();!qe&&void 0!==(e=_e.shift());)He(e)}var ze=function(e){return function(n){return e.some(function(e){return Qe(e)(n)})}},Je=function(e){return function(n){return e(n)}},Ve=function(e){return function(n){return n.type===String(e)}},We=function(e){return function(n){return n.type===e}},Ye=function(){return G};function Qe(e){var n="*"===e?Ye:R(e)?Ve:L(e)?ze:q(e)?Ve:P(e)?Je:H(e)?We:null;if(null===n)throw new Error("invalid pattern: "+e);return n(e)}var Ze={type:m},$e=function(e){return e&&e.type===m};function en(e){void 0===e&&(e=pe());var n=!1,t=[];return{take:function(r){n&&e.isEmpty()?r(Ze):e.isEmpty()?(t.push(r),r.cancel=function(){J(t,r)}):r(e.take())},put:function(r){if(!n){if(0===t.length)return e.put(r);t.shift()(r)}},flush:function(t){n&&e.isEmpty()?t(Ze):t(e.flush())},close:function(){if(!n){n=!0;var e=t;t=[];for(var r=0,o=e.length;r<o;r++)(0,e[r])(Ze)}}}}function nn(){var e=function(){var e,n=!1,t=[],r=t,o=function(){r===t&&(r=t.slice())},a=function(){n=!0;var e=t=r;r=[],e.forEach(function(e){e(Ze)})};return(e={})[w]=!0,e.put=function(e){if(!n)if($e(e))a();else for(var o=t=r,c=0,u=o.length;c<u;c++){var i=o[c];i[E](e)&&(i.cancel(),i(e))}},e.take=function(e,t){void 0===t&&(t=Ye),n?e(Ze):(e[E]=t,o(),r.push(e),e.cancel=V(function(){o(),J(r,e)}))},e.close=a,e}(),n=e.put;return e.put=function(e){e[x]?n(e):Ue(function(){n(e)})},e}var tn=0,rn=1,on=2,an=3;function cn(e,n){var t=e[y];P(t)&&(n.cancel=t),e.then(n,function(e){n(e,!0)})}var un,fn=0,ln=function(){return++fn};function sn(e){e.isRunning()&&e.cancel()}var pn=((un={})[de]=function(e,n,t){var r=n.channel,o=void 0===r?e.channel:r,a=n.pattern,c=n.maybe,u=function(e){e instanceof Error?t(e,!0):!$e(e)||c?t(e):t(A)};try{o.take(u,N(a)?Qe(a):null)}catch(i){return void t(i,!0)}t.cancel=u.cancel},un[he]=function(e,n,t){var r=n.channel,o=n.action,a=n.resolve;Ue(function(){var n;try{n=(r?r.put:e.dispatch)(o)}catch(c){return void t(c,!0)}a&&I(n)?cn(n,t):t(n)})},un[ve]=function(e,n,t,r){var o=r.digestEffect,a=fn,c=Object.keys(n);if(0!==c.length){var u=oe(n,t);c.forEach(function(e){o(n[e],a,u[e],e)})}else t(L(n)?[]:{})},un[ge]=function(e,n,t,r){var o=r.digestEffect,a=fn,c=Object.keys(n),u=L(n)?$(c.length):{},i={},f=!1;c.forEach(function(e){var n=function(n,r){f||(r||re(n)?(t.cancel(),t(n,r)):(t.cancel(),f=!0,u[e]=n,t(u)))};n.cancel=K,i[e]=n}),t.cancel=function(){f||(f=!0,c.forEach(function(e){return i[e].cancel()}))},c.forEach(function(e){f||o(n[e],a,i[e],e)})},un[ye]=function(e,n,t,r){var o=n.context,a=n.fn,c=n.args,u=r.task;try{var i=a.apply(o,c);if(I(i))return void cn(i,t);if(M(i))return void Sn(e,i,u.context,fn,ae(a),!1,t);t(i)}catch(f){t(f,!0)}},un[me]=function(e,n,t){var r=n.context,o=n.fn,a=n.args;try{var c=function(e,n){D(e)?t(n):t(e,!0)};o.apply(r,a.concat(c)),c.cancel&&(t.cancel=c.cancel)}catch(u){t(u,!0)}},un[be]=function(e,n,t,r){var o=n.context,a=n.fn,c=n.args,u=n.detached,i=r.task,f=function(e){var n=e.context,t=e.fn,r=e.args;try{var o=t.apply(n,r);if(M(o))return o;var a=!1;return Q(function(e){return a?{value:e,done:!0}:(a=!0,{value:o,done:!I(o)})})}catch(c){return Q(function(){throw c})}}({context:o,fn:a,args:c}),l=function(e,n){return e.isSagaIterator?{name:e.meta.name}:ae(n)}(f,a);Ge(function(){var n=Sn(e,f,i.context,fn,l,u,K);u?t(n):n.isRunning()?(i.queue.addTask(n),t(n)):n.isAborted()?i.queue.abort(n.error()):t(n)})},un[Ee]=function(e,n,t,r){var o=r.task,a=function(e,n){if(e.isRunning()){var t={task:o,cb:n};n.cancel=function(){e.isRunning()&&J(e.joiners,t)},e.joiners.push(t)}else e.isAborted()?n(e.error(),!0):n(e.result())};if(L(n)){if(0===n.length)return void t([]);var c=oe(n,t);n.forEach(function(e,n){a(e,c[n])})}else a(n,t)},un[we]=function(e,n,t,r){var o=r.task;n===S?sn(o):L(n)?n.forEach(sn):sn(n),t()},un[xe]=function(e,n,t){var r=n.selector,o=n.args;try{t(r.apply(void 0,[e.getState()].concat(o)))}catch(a){t(a,!0)}},un[Se]=function(e,n,t){var r=n.pattern,o=en(n.buffer),a=Qe(r),c=function n(t){$e(t)||e.channel.take(n,a),o.put(t)},u=o.close;o.close=function(){c.cancel(),u()},e.channel.take(c,a),t(o)},un[ke]=function(e,n,t,r){t(r.task.isCancelled())},un[je]=function(e,n,t){n.flush(t)},un[Ae]=function(e,n,t,r){t(r.task.context[n])},un[Oe]=function(e,n,t,r){var o=r.task;X(o.context,n),t()},un);function dn(e,n){return e+"?"+n}function hn(e){var n=e.name,t=e.location;return t?n+"  "+dn(t.fileName,t.lineNumber):n}function vn(e){var n=z(function(e){return e.cancelledTasks},e);return n.length?["Tasks cancelled due to error:"].concat(n).join("\n"):""}var gn=null,yn=[],mn=function(e){e.crashedEffect=gn,yn.push(e)},bn=function(){gn=null,yn.length=0},En=function(e){gn=e},wn=function(){var e=yn[0],n=yn.slice(1),t=e.crashedEffect?function(e){var n=ce(e);return n?n.code+"  "+dn(n.fileName,n.lineNumber):""}(e.crashedEffect):null;return["The above error occurred in task "+hn(e.meta)+(t?" \n when executing effect "+t:"")].concat(n.map(function(e){return"    created by "+hn(e.meta)}),[vn(yn)]).join("\n")};function xn(e,n,t,r,o,a,c){var u,i,f,l=tn,s=null,p=[],d=Object.create(t),h=function(e,n,t){var r,o=[],a=!1;function c(e){n(),i(),t(e,!0)}function u(n){o.push(n),n.cont=function(u,i){a||(J(o,n),n.cont=K,i?c(u):(n===e&&(r=u),o.length||(a=!0,t(r))))}}function i(){a||(a=!0,o.forEach(function(e){e.cont=K,e.cancel()}),o=[])}return u(e),{addTask:u,cancelAll:i,abort:c,getTasks:function(){return o}}}(n,function(){p.push.apply(p,h.getTasks().map(function(e){return e.meta.name}))},v);function v(n,t){if(t){if(l=on,mn({meta:o,cancelledTasks:p}),g.isRoot){var r=wn();bn(),e.onError(n,{sagaStack:r})}f=n,s&&s.reject(n)}else n===j?l=rn:l!==rn&&(l=an),i=n,s&&s.resolve(n);g.cont(n,t),g.joiners.forEach(function(e){e.cb(n,t)}),g.joiners=null}var g=((u={})[k]=!0,u.id=r,u.meta=o,u.isRoot=a,u.context=d,u.joiners=[],u.queue=h,u.cancel=function(){l===tn&&(l=rn,h.cancelAll(),v(j,!1))},u.cont=c,u.end=v,u.setContext=function(e){X(d,e)},u.toPromise=function(){return s?s.promise:(s=Fe(),l===on?s.reject(f):l!==tn&&s.resolve(i),s.promise)},u.isRunning=function(){return l===tn},u.isCancelled=function(){return l===rn||l===tn&&n.status===rn},u.isAborted=function(){return l===on},u.result=function(){return i},u.error=function(){return f},u);return g}function Sn(e,n,t,r,o,a,c){var u=e.finalizeRunEffect(function(n,t,r){if(I(n))cn(n,r);else if(M(n))Sn(e,n,f.context,t,o,!1,r);else if(n&&n[b]){var a=pn[n.type];a(e,n.payload,r,l)}else r(n)});s.cancel=K;var i={meta:o,cancel:function(){i.status===tn&&(i.status=rn,s(j))},status:tn},f=xn(e,i,t,r,o,a,c),l={task:f,digestEffect:p};return c.cancel=f.cancel,s(),f;function s(e,t){try{var o;t?(o=n.throw(e),bn()):te(e)?(i.status=rn,s.cancel(),o=P(n.return)?n.return(j):{done:!0,value:j}):o=ne(e)?P(n.return)?n.return():{done:!0}:n.next(e),o.done?(i.status!==rn&&(i.status=an),i.cont(o.value)):p(o.value,r,s)}catch(a){if(i.status===rn)throw a;i.status=on,i.cont(a,!0)}}function p(n,t,r,o){void 0===o&&(o="");var a,c=ln();function i(t,o){a||(a=!0,r.cancel=K,e.sagaMonitor&&(o?e.sagaMonitor.effectRejected(c,t):e.sagaMonitor.effectResolved(c,t)),o&&En(n),r(t,o))}e.sagaMonitor&&e.sagaMonitor.effectTriggered({effectId:c,parentEffectId:t,label:o,effect:n}),i.cancel=K,r.cancel=function(){a||(a=!0,i.cancel(),i.cancel=K,e.sagaMonitor&&e.sagaMonitor.effectCancelled(c))},u(n,c,i)}}var kn=function(e){void 0===e&&(e={});var n,t=e,r=t.context,o=void 0===r?{}:r,a=t.channel,c=void 0===a?nn():a,u=t.sagaMonitor,i=Object(T.a)(t,["context","channel","sagaMonitor"]);function f(e){var t=e.getState,r=e.dispatch;return n=function(e,n){for(var t=e.channel,r=void 0===t?nn():t,o=e.dispatch,a=e.getState,c=e.context,u=void 0===c?{}:c,i=e.sagaMonitor,f=e.effectMiddlewares,l=e.onError,s=void 0===l?Z:l,p=arguments.length,h=new Array(p>2?p-2:0),v=2;v<p;v++)h[v-2]=arguments[v];var g,y=n.apply(void 0,h),m=ln();if(i&&(i.rootSagaStarted=i.rootSagaStarted||K,i.effectTriggered=i.effectTriggered||K,i.effectResolved=i.effectResolved||K,i.effectRejected=i.effectRejected||K,i.effectCancelled=i.effectCancelled||K,i.actionDispatched=i.actionDispatched||K,i.rootSagaStarted({effectId:m,saga:n,args:h})),f){var b=d.d.apply(void 0,f);g=function(e){return function(n,t,r){return b(function(n){return e(n,t,r)})(n)}}}else g=B;var E={channel:r,dispatch:ee(o),getState:a,sagaMonitor:i,onError:s,finalizeRunEffect:g};return Ge(function(){var e=Sn(E,y,u,m,ae(n),!0,K);return i&&i.effectResolved(m,e),e})}.bind(null,Object(C.a)({},i,{context:o,channel:c,dispatch:r,getState:t,sagaMonitor:u})),function(e){return function(n){u&&u.actionDispatched&&u.actionDispatched(n);var t=e(n);return c.put(n),t}}}return f.run=function(){return n.apply(void 0,arguments)},f.setContext=function(e){X(o,e)},f},jn={imgServer:"https://jira.ecentria.tools/"},An=t("Jo+v"),On=t.n(An),Cn=t("4mXO"),Tn=t.n(Cn),Dn=t("pLtp"),Nn=t.n(Dn),Pn=t("hfKm"),Rn=t.n(Pn);function Ln(e,n,t){return n in e?Rn()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function In(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Nn()(t);"function"===typeof Tn.a&&(r=r.concat(Tn()(t).filter(function(e){return On()(t,e).enumerable}))),r.forEach(function(n){Ln(e,n,t[n])})}return e}var Mn={data:[],loading:!1},Fn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"RECORDS/FETCH":case"RECORDS/FETCH_FAILED":return In({},e,{loading:!0,data:[]});case"RECORDS/SET":return In({},e,{loading:!1,data:n.payload});default:return e}},_n=Object(d.c)({config:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:jn},demo:Fn}),qn=t("ln6h"),Hn=t.n(qn),Un=function(e){return{done:!0,value:e}},Gn={};function Kn(e){return _(e)?"channel":q(e)?String(e):P(e)?e.name:String(e)}function Bn(e,n,t){var r,o,a,c=n;function u(n,t){if(c===Gn)return Un(n);if(t&&!o)throw c=Gn,t;r&&r(n);var u=t?e[o](t):e[c]();return c=u.nextState,a=u.effect,r=u.stateUpdater,o=u.errorState,c===Gn?Un(n):a}return Q(u,function(e){return u(null,e)},t)}function Xn(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];var a,c={done:!1,value:Te(e)},u=function(e){return a=e};return Bn({q1:function(){return{nextState:"q2",effect:c,stateUpdater:u}},q2:function(){return{nextState:"q1",effect:(e=a,{done:!1,value:Ie.apply(void 0,[n].concat(r,[e]))})};var e}},"q1","takeEvery("+Kn(e)+", "+n.name+")")}function zn(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return Ie.apply(void 0,[Xn,e,n].concat(r))}var Jn=t("eVuF"),Vn=t.n(Jn),Wn=function(e){return new Vn.a(function(n,t){fetch("/static/demo.json?".concat(e),{credentials:"include"}).then(function(e){if(200===e.status)return e;throw new Error(e.statusText)}).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){return t({error:e})})})},Yn=Hn.a.mark(Zn),Qn=Hn.a.mark($n);function Zn(e){var n,t;return Hn.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Pe({res:Le(Wn,e.passDemoField),timeout:0});case 2:if(n=r.sent,t=n.res,!n.timeout){r.next=10;break}return r.next=8,De({type:"RECORDS/FETCH_FAILED"});case 8:r.next=12;break;case 10:return r.next=12,De({type:"RECORDS/SET",payload:t});case 12:case"end":return r.stop()}},Yn)}function $n(){return Hn.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zn("RECORDS/FETCH",Zn);case 2:case"end":return e.stop()}},Qn)}var et=$n,nt=Hn.a.mark(tt);function tt(){return Hn.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne([Le(et)]);case 2:case"end":return e.stop()}},nt)}var rt=kn(),ot=Object(d.e)(_n,Object(d.a)(v.a,rt));rt.run(tt);var at=function(e){function n(){return Object(r.default)(this,n),Object(a.default)(this,Object(c.default)(n).apply(this,arguments))}return Object(u.default)(n,e),Object(o.default)(n,[{key:"render",value:function(){return f.a.createElement(p.a,{store:ot},f.a.createElement(f.a.Fragment,null,this.props.children))}}]),n}(f.a.Component),ct=function(e){function n(){return Object(r.default)(this,n),Object(a.default)(this,Object(c.default)(n).apply(this,arguments))}return Object(u.default)(n,e),Object(o.default)(n,[{key:"render",value:function(){var e=this.props,n=e.Component,t=e.pageProps;return f.a.createElement(l.Container,null,f.a.createElement(at,null,f.a.createElement(n,t)))}}]),n}(s.a);n.default=ct},"1mXj":function(e,n,t){(function(e){!function(n){"use strict";function t(e,n){e.super_=n,e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,n){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),n&&n.length&&Object.defineProperty(this,"path",{value:n,enumerable:!0})}function o(e,n,t){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:n,enumerable:!0}),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,n){a.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function c(e,n){c.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:n,enumerable:!0})}function u(e,n,t){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:n,enumerable:!0}),Object.defineProperty(this,"item",{value:t,enumerable:!0})}function i(e,n,t){var r=e.slice((t||n)+1||e.length);return e.length=n<0?e.length+n:n,e.push.apply(e,r),e}function f(e){var n="undefined"==typeof e?"undefined":S(e);return"object"!==n?n:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,n,t,r,s,p,d){d=d||[];var h=(s=s||[]).slice(0);if("undefined"!=typeof p){if(r){if("function"==typeof r&&r(h,p))return;if("object"===("undefined"==typeof r?"undefined":S(r))){if(r.prefilter&&r.prefilter(h,p))return;if(r.normalize){var v=r.normalize(h,p,e,n);v&&(e=v[0],n=v[1])}}}h.push(p)}"regexp"===f(e)&&"regexp"===f(n)&&(e=e.toString(),n=n.toString());var g="undefined"==typeof e?"undefined":S(e),y="undefined"==typeof n?"undefined":S(n),m="undefined"!==g||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),b="undefined"!==y||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!m&&b)t(new a(h,n));else if(!b&&m)t(new c(h,e));else if(f(e)!==f(n))t(new o(h,e,n));else if("date"===f(e)&&e-n!==0)t(new o(h,e,n));else if("object"===g&&null!==e&&null!==n)if(d.filter(function(n){return n.lhs===e}).length)e!==n&&t(new o(h,e,n));else{if(d.push({lhs:e,rhs:n}),Array.isArray(e)){var E;for(e.length,E=0;E<e.length;E++)E>=n.length?t(new u(h,E,new c(void 0,e[E]))):l(e[E],n[E],t,r,h,E,d);for(;E<n.length;)t(new u(h,E,new a(void 0,n[E++])))}else{var w=Object.keys(e),x=Object.keys(n);w.forEach(function(o,a){var c=x.indexOf(o);c>=0?(l(e[o],n[o],t,r,h,o,d),x=i(x,c)):l(e[o],void 0,t,r,h,o,d)}),x.forEach(function(e){l(void 0,n[e],t,r,h,e,d)})}d.length=d.length-1}else e!==n&&("number"===g&&isNaN(e)&&isNaN(n)||t(new o(h,e,n)))}function s(e,n,t,r){return r=r||[],l(e,n,function(e){e&&r.push(e)},t),r.length?r:void 0}function p(e,n,t){if(e&&n&&t&&t.kind){for(var r=e,o=-1,a=t.path?t.path.length-1:0;++o<a;)"undefined"==typeof r[t.path[o]]&&(r[t.path[o]]="number"==typeof t.path[o]?[]:{}),r=r[t.path[o]];switch(t.kind){case"A":!function e(n,t,r){if(r.path&&r.path.length){var o,a=n[t],c=r.path.length-1;for(o=0;o<c;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":delete a[r.path[o]];break;case"E":case"N":a[r.path[o]]=r.rhs}}else switch(r.kind){case"A":e(n[t],r.index,r.item);break;case"D":n=i(n,t);break;case"E":case"N":n[t]=r.rhs}return n}(t.path?r[t.path[o]]:r,t.index,t.item);break;case"D":delete r[t.path[o]];break;case"E":case"N":r[t.path[o]]=t.rhs}}}function d(e){return"color: "+A[e].color+"; font-weight: bold"}function h(e,n,t,r){var o=s(e,n);try{r?t.groupCollapsed("diff"):t.group("diff")}catch(e){t.log("diff")}o?o.forEach(function(e){var n=e.kind,r=function(e){var n=e.kind,t=e.path,r=e.lhs,o=e.rhs,a=e.index,c=e.item;switch(n){case"E":return[t.join("."),r,"\u2192",o];case"N":return[t.join("."),o];case"D":return[t.join(".")];case"A":return[t.join(".")+"["+a+"]",c];default:return[]}}(e);t.log.apply(t,["%c "+A[n].text,d(n)].concat(k(r)))}):t.log("\u2014\u2014 no diff \u2014\u2014");try{t.groupEnd()}catch(e){t.log("\u2014\u2014 diff end \u2014\u2014 ")}}function v(e,n,t,r){switch("undefined"==typeof e?"undefined":S(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,k(t)):e[r];case"function":return e(n);default:return e}}function g(e,n){var t=n.logger,r=n.actionTransformer,o=n.titleFormatter,a=void 0===o?function(e){var n=e.timestamp,t=e.duration;return function(e,r,o){var a=["action"];return a.push("%c"+String(e.type)),n&&a.push("%c@ "+r),t&&a.push("%c(in "+o.toFixed(2)+" ms)"),a.join(" ")}}(n):o,c=n.collapsed,u=n.colors,i=n.level,f=n.diff,l="undefined"==typeof n.titleFormatter;e.forEach(function(o,s){var p=o.started,d=o.startedTime,g=o.action,y=o.prevState,m=o.error,b=o.took,E=o.nextState,x=e[s+1];x&&(E=x.prevState,b=x.started-p);var S=r(g),k="function"==typeof c?c(function(){return E},g,o):c,j=w(d),A=u.title?"color: "+u.title(S)+";":"",O=["color: gray; font-weight: lighter;"];O.push(A),n.timestamp&&O.push("color: gray; font-weight: lighter;"),n.duration&&O.push("color: gray; font-weight: lighter;");var C=a(S,j,b);try{k?u.title&&l?t.groupCollapsed.apply(t,["%c "+C].concat(O)):t.groupCollapsed(C):u.title&&l?t.group.apply(t,["%c "+C].concat(O)):t.group(C)}catch(e){t.log(C)}var T=v(i,S,[y],"prevState"),D=v(i,S,[S],"action"),N=v(i,S,[m,y],"error"),P=v(i,S,[E],"nextState");if(T)if(u.prevState){var R="color: "+u.prevState(y)+"; font-weight: bold";t[T]("%c prev state",R,y)}else t[T]("prev state",y);if(D)if(u.action){var L="color: "+u.action(S)+"; font-weight: bold";t[D]("%c action    ",L,S)}else t[D]("action    ",S);if(m&&N)if(u.error){var I="color: "+u.error(m,y)+"; font-weight: bold;";t[N]("%c error     ",I,m)}else t[N]("error     ",m);if(P)if(u.nextState){var M="color: "+u.nextState(E)+"; font-weight: bold";t[P]("%c next state",M,E)}else t[P]("next state",E);f&&h(y,E,t,k);try{t.groupEnd()}catch(e){t.log("\u2014\u2014 log end \u2014\u2014")}})}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},O,e),t=n.logger,r=n.stateTransformer,o=n.errorTransformer,a=n.predicate,c=n.logErrors,u=n.diffPredicate;if("undefined"==typeof t)return function(){return function(e){return function(n){return e(n)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(n){return e(n)}}};var i=[];return function(e){var t=e.getState;return function(e){return function(f){if("function"==typeof a&&!a(t,f))return e(f);var l={};i.push(l),l.started=x.now(),l.startedTime=new Date,l.prevState=r(t()),l.action=f;var s=void 0;if(c)try{s=e(f)}catch(e){l.error=o(e)}else s=e(f);l.took=x.now()-l.started,l.nextState=r(t());var p=n.diff&&"function"==typeof u?u(t,f):n.diff;if(g(i,Object.assign({},n,{diff:p})),i.length=0,l.error)throw l.error;return s}}}}var m,b,E=function(e,n){return function(e,n){return new Array(n+1).join(e)}("0",n-e.toString().length)+e},w=function(e){return E(e.getHours(),2)+":"+E(e.getMinutes(),2)+":"+E(e.getSeconds(),2)+"."+E(e.getMilliseconds(),3)},x="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},j=[];m="object"===("undefined"==typeof e?"undefined":S(e))&&e?e:window,(b=m.DeepDiff)&&j.push(function(){"undefined"!=typeof b&&m.DeepDiff===s&&(m.DeepDiff=b,b=void 0)}),t(o,r),t(a,r),t(c,r),t(u,r),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,n,t){e&&n&&l(e,n,function(r){t&&!t(e,n,r)||p(e,n,r)})},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,n,t){if(e&&n&&t&&t.kind){var r,o,a=e;for(o=t.path.length-1,r=0;r<o;r++)"undefined"==typeof a[t.path[r]]&&(a[t.path[r]]={}),a=a[t.path[r]];switch(t.kind){case"A":!function e(n,t,r){if(r.path&&r.path.length){var o,a=n[t],c=r.path.length-1;for(o=0;o<c;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":case"E":a[r.path[o]]=r.lhs;break;case"N":delete a[r.path[o]]}}else switch(r.kind){case"A":e(n[t],r.index,r.item);break;case"D":case"E":n[t]=r.lhs;break;case"N":n=i(n,t)}return n}(a[t.path[r]],t.index,t.item);break;case"D":case"E":a[t.path[r]]=t.lhs;break;case"N":delete a[t.path[r]]}}},enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof b},enumerable:!0},noConflict:{value:function(){return j&&(j.forEach(function(e){e()}),j=null),s},enumerable:!0}});var A={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},O={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.dispatch,t=e.getState;return"function"==typeof n||"function"==typeof t?y()({dispatch:n,getState:t}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};n.defaults=O,n.createLogger=y,n.logger=C,n.default=C,Object.defineProperty(n,"__esModule",{value:!0})}(n)}).call(this,t("yLpj"))},"4mXO":function(e,n,t){e.exports=t("7TPF")},"7TPF":function(e,n,t){t("AUvm"),e.exports=t("WEpk").Object.getOwnPropertySymbols},"8Bbg":function(e,n,t){e.exports=t("B5Ud")},B5Ud:function(e,n,t){"use strict";var r=t("KI45"),o=r(t("0iUn")),a=r(t("sLSF")),c=r(t("MI3g")),u=r(t("a7VT")),i=r(t("Tit0")),f=r(t("ln6h")),l=t("KI45");n.__esModule=!0,n.Container=E,n.createUrl=x,n.default=void 0;var s=l(t("htGi")),p=l(t("+oT+")),d=l(t("q1tI")),h=l(t("17x9")),v=t("Bu4q");n.AppInitialProps=v.AppInitialProps;var g=t("nOHt");function y(e){return m.apply(this,arguments)}function m(){return(m=(0,p.default)(f.default.mark(function e(n){var t,r,o;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Component,r=n.ctx,e.next=3,(0,v.loadGetInitialProps)(t,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var b=function(e){function n(){return(0,o.default)(this,n),(0,c.default)(this,(0,u.default)(n).apply(this,arguments))}return(0,i.default)(n,e),(0,a.default)(n,[{key:"getChildContext",value:function(){return{router:(0,g.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,n){throw e}},{key:"render",value:function(){var e=this.props,n=e.router,t=e.Component,r=e.pageProps,o=x(n);return d.default.createElement(E,null,d.default.createElement(t,(0,s.default)({},r,{url:o})))}}]),n}(d.default.Component);function E(e){return e.children}n.default=b,b.childContextTypes={router:h.default.object},b.origGetInitialProps=y,b.getInitialProps=y;var w=(0,v.execOnce)(function(){0});function x(e){var n=e.pathname,t=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),n},get asPath(){return w(),t},back:function(){w(),e.back()},push:function(n,t){return w(),e.push(n,t)},pushTo:function(n,t){w();var r=t?n:"",o=t||n;return e.push(r,o)},replace:function(n,t){return w(),e.replace(n,t)},replaceTo:function(n,t){w();var r=t?n:"",o=t||n;return e.replace(r,o)}}}},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=t("1TCz");return{page:e.default||e}}])}},[["GcxT",1,0]]]);