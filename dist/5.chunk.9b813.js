webpackJsonp([5],{"5Oj0":function(e){e.exports={register:"register__10ihI",logo:"logo__gmSNK",main:"main__1YEin"}},"93k0":function(e){e.exports={inherit:"inherit__eHCdh",display:"display__2l107",logo:"logo__2qJtn",form:"form__sLEuc",formChild:"formChild__27DqH",formChildReset:"formChildReset__3dE5v",strike:"strike__1Lw-F",link2:"link2__YXP6T",regBtn:"regBtn__17kEI"}},opUN:function(e,t,o){"use strict";function r(e,t,o,r){for(r=0,t=t.split?t.split("."):t;e&&r<t.length;)e=e[t[r++]];return void 0===e?o:e}function s(e,t,o){var s=t.split("."),a=e.__lsc||(e.__lsc={});return a[t+o]||(a[t+o]=function(t){for(var a=t&&t.target||this,n={},i=n,l="string"==typeof o?r(t,o):a.nodeName?a.type.match(/^che|rad/)?a.checked:a.value:t,c=0;c<s.length-1;c++)i=i[s[c]]||(i[s[c]]=!c&&e.state[s[c]]||{});i[s[c]]=l,e.setState(n)})}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o("KM04"),l=o("93k0"),c=o.n(l),p=o("hYMD"),u=o("Qpw7"),d=s,h=o("/QC5");o.d(t,"a",function(){return O});var m=Object(i.h)("span",null,"OR"),f=Object(i.h)("a",{href:"/forgot-password"},"forgot password?"),b=Object(i.h)("p",null,"To change user info:"),w=Object(i.h)("p",null,"To change password:"),O=function(e){function t(){var t=a(this,e.call(this));return t.handleSubmit=function(e){e.preventDefault();var o={name:t.state.name,email:t.state.email,password:t.state.password,new_password:t.state.new_password,confirm_password:t.state.confirm_password},r={path:t.props.path,formData:o};Object(p.d)(r).then(function(e){console.log("validateAccountForm(): ",e),e.status?t.props.path===u.RESET_PATH?alert(e.message):Object(h.route)("/profile",!0):alert(e.message)}).catch(function(e){alert(e)})},t.componentWillUnmount=function(){Object(p.a)()},t.routeToRegister=t.routeToRegister.bind(t),t.handleSubmit=t.handleSubmit.bind(t),t}return n(t,e),t.prototype.routeToRegister=function(){Object(h.route)("/register",!0)},t.prototype.render=function(e,t){var o=e.path,r=t.name,s=t.email,a=t.password,n=t.new_password,l=t.confirm_password,p=Object(i.h)("div",{class:c.a.display},Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},Object(i.h)("input",{class:c.a.formChild,id:"email",name:"email",type:"email",placeholder:"email address",value:s,onInput:d(this,"email"),required:!0}),Object(i.h)("input",{class:c.a.formChild,id:"password",name:"password",type:"password",placeholder:"password",value:a,onInput:d(this,"password"),required:!0}),Object(i.h)("div",null,Object(i.h)("button",{class:c.a.formChild},"LOGIN"))),Object(i.h)("div",{class:c.a.form},Object(i.h)("div",{class:c.a.strike},m),Object(i.h)("button",{type:"button",className:[c.a.formChild,c.a.regBtn].join(" "),onClick:this.routeToRegister},"CREATE AN ACCOUNT")),Object(i.h)("p",{class:c.a.link2},f));return o===u.REGISTER_PATH&&(p=Object(i.h)("div",{class:c.a.display},Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},Object(i.h)("input",{class:c.a.formChild,name:"name",type:"text",placeholder:"firstname lastname",value:r,onInput:d(this,"name"),required:!0}),Object(i.h)("input",{class:c.a.formChild,id:"email",name:"email",type:"email",placeholder:"email address",value:s,onInput:d(this,"email"),required:!0}),Object(i.h)("input",{class:c.a.formChild,id:"password",name:"password",type:"password",placeholder:"password",value:a,onInput:d(this,"password"),required:!0}),Object(i.h)("input",{class:c.a.formChild,name:"confirm_password",type:"password",placeholder:"confirm password",value:l,onInput:d(this,"confirm_password"),required:!0}),Object(i.h)("button",{class:c.a.formChild},"SUBMIT")))),o===u.RESET_PATH&&(p=Object(i.h)("div",null,Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},b,Object(i.h)("input",{class:c.a.formChildReset,name:"name",type:"text",placeholder:"Enter new name",value:r,onInput:d(this,"name")}),Object(i.h)("input",{class:c.a.formChildReset,id:"email",name:"email",type:"email",placeholder:"Enter new email address",value:s,onInput:d(this,"email")}),Object(i.h)("button",{class:c.a.formChildReset},"Update Info")),Object(i.h)("form",{class:c.a.form,onSubmit:this.handleSubmit},w,Object(i.h)("input",{class:c.a.formChildReset,id:"password",name:"password",type:"password",placeholder:"Enter current password",value:a,onInput:d(this,"password"),required:!0}),Object(i.h)("input",{class:c.a.formChildReset,name:"new_password",type:"password",placeholder:"Enter new password",value:n,onInput:d(this,"new_password"),required:!0}),Object(i.h)("input",{class:c.a.formChildReset,name:"confirm_password",type:"password",placeholder:"Confirm new password",value:l,onInput:d(this,"confirm_password"),required:!0}),Object(i.h)("button",{class:c.a.formChildReset},"Reset Password")))),Object(i.h)("div",{class:c.a.inherit},Object(i.h)("img",{class:c.a.logo,src:"../../assets/icons/leaflet/SVG/darkLogo.svg",alt:"Navi logo"}),p)},t}(i.Component)},qIAH:function(e,t,o){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"default",function(){return p});var a=o("KM04"),n=(o.n(a),o("5Oj0")),i=o.n(n),l=(o("opUN"),Object(a.h)("div",null,Object(a.h)("a",{href:"/reset-password"},"Reset password"))),c=Object(a.h)("div",null,Object(a.h)("a",{href:"/signout"},"Sign Out")),p=function(e){function t(){return r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return Object(a.h)("div",{class:i.a.main},l,c)},t}(a.Component)}});
//# sourceMappingURL=5.chunk.9b813.js.map