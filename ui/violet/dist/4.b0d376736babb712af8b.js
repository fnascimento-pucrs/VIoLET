(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/cdV":function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){},a=e("pMnS"),r=e("ZYCi"),i=function(){function n(n,t){var e=this;this.translate=n,this.router=t,this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en");var l=this.translate.getBrowserLang();this.translate.use(l.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?l:"en"),this.router.events.subscribe(function(n){n instanceof r.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.ngOnInit=function(){},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n.prototype.changeLang=function(n){this.translate.use(n)},n}(),s=e("A7o+"),u=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#7f00ff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["VIoLET - Graphical Management Tool"]))],null,null)}var d=e("Ip0R"),g=function(){function n(n,t){var e=this;this.translate=n,this.router=t,this.isActive=!1,this.collapsed=!1,this.showMenu="",this.pushRightClass="push-right",this.collapsedEvent=new l.EventEmitter,this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var o=this.translate.getBrowserLang();this.translate.use(o.match(/en|fr|ur|es|it|fa|de/)?o:"en"),this.router.events.subscribe(function(n){n instanceof r.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.toggleCollapsed=function(){this.collapsed=!this.collapsed,this.collapsedEvent.emit(this.collapsed)},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n}(),p=l["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#7f00ff;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:.2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#7f00ff;border:0;border-radius:0;color:#fff;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#7200e6;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#7f00ff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#7200e6}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#7f00ff;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#7200e6}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}.toggle-button[_ngcontent-%COMP%]{position:fixed;width:236px;cursor:pointer;padding:12px;bottom:0;color:#fff;background:#7f00ff;border-top:1px solid #999;transition:.2s ease-in-out}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}.toggle-button[_ngcontent-%COMP%]:hover{background:#7200e6;color:#fff}.collapsed[_ngcontent-%COMP%]{width:50px}.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}"]],data:{}});function C(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,27,"nav",[["class","sidebar"]],null,null,null,null,null)),l["\u0275did"](1,278528,null,0,d.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](2,{sidebarPushRight:0,collapsed:1}),(n()(),l["\u0275eld"](3,0,null,null,7,"div",[["class","toggle-button"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.toggleCollapsed()&&l),l},null,null)),l["\u0275did"](4,278528,null,0,d.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](5,{collapsed:0}),(n()(),l["\u0275eld"](6,0,null,null,0,"i",[["class","fa fa-fw fa-bars"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xa0 "])),(n()(),l["\u0275eld"](8,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](9,null,["",""])),l["\u0275pid"](131072,s.i,[s.j,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](11,0,null,null,16,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),l["\u0275eld"](12,0,null,null,10,"a",[["class","list-group-item"],["routerLink","/setup"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==l["\u0275nov"](n,13).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),l["\u0275did"](13,671744,[[2,4]],0,r.n,[r.l,r.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),l["\u0275did"](14,1720320,null,2,r.m,[r.l,l.ElementRef,l.Renderer2,l.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),l["\u0275qud"](603979776,1,{links:1}),l["\u0275qud"](603979776,2,{linksWithHrefs:1}),l["\u0275pad"](17,1),(n()(),l["\u0275eld"](18,0,null,null,0,"i",[["class","fa fa-fw fa-cogs"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xa0 "])),(n()(),l["\u0275eld"](20,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](21,null,["",""])),l["\u0275pid"](131072,s.i,[s.j,l.ChangeDetectorRef]),(n()(),l["\u0275eld"](23,0,null,null,4,"div",[["class","header-fields"]],null,null,null,null,null)),(n()(),l["\u0275eld"](24,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.rltAndLtr()&&l),l},null,null)),(n()(),l["\u0275eld"](25,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),l["\u0275eld"](26,0,null,null,0,"i",[["class","fa fa-arrows-h"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\xa0 RTL/LTR"]))],function(n,t){var e=t.component;n(t,1,0,"sidebar",n(t,2,0,e.isActive,e.collapsed)),n(t,4,0,"toggle-button",n(t,5,0,e.collapsed)),n(t,13,0,"/setup"),n(t,14,0,n(t,17,0,"router-link-active"))},function(n,t){n(t,9,0,l["\u0275unv"](t,9,0,l["\u0275nov"](t,10).transform("Collapse"))),n(t,12,0,l["\u0275nov"](t,13).target,l["\u0275nov"](t,13).href),n(t,21,0,l["\u0275unv"](t,21,0,l["\u0275nov"](t,22).transform("Setup")))})}var f=function(){function n(){}return n.prototype.ngOnInit=function(){},n.prototype.receiveCollapsed=function(n){this.collapedSideBar=n},n}(),M=l["\u0275crt"]({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:100px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]],data:{}});function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,c,u)),l["\u0275did"](1,114688,null,0,i,[s.j,r.l],null,null),(n()(),l["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,[[null,"collapsedEvent"]],function(n,t,e){var l=!0;return"collapsedEvent"===t&&(l=!1!==n.component.receiveCollapsed(e)&&l),l},C,p)),l["\u0275did"](3,49152,null,0,g,[s.j,r.l],null,{collapsedEvent:"collapsedEvent"}),(n()(),l["\u0275eld"](4,0,null,null,4,"section",[["class","main-container"]],null,null,null,null,null)),l["\u0275did"](5,278528,null,0,d.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](6,{collapsed:0}),(n()(),l["\u0275eld"](7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l["\u0275did"](8,212992,null,0,r.p,[r.b,l.ViewContainerRef,l.ComponentFactoryResolver,[8,null],l.ChangeDetectorRef],null,null)],function(n,t){var e=t.component;n(t,1,0),n(t,5,0,"main-container",n(t,6,0,e.collapedSideBar)),n(t,8,0)},null)}var O=l["\u0275ccf"]("app-layout",f,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,_,M)),l["\u0275did"](1,114688,null,0,f,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),P=e("gIcY"),h=e("ebCm"),m=e("vw6C"),b=e("t/Na"),v=function(){},y=e("C9m0");e.d(t,"LayoutModuleNgFactory",function(){return w});var w=l["\u0275cmf"](o,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,O]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[l.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,P.j,P.j,[]),l["\u0275mpd"](4608,h.a,h.a,[]),l["\u0275mpd"](4608,m.a,m.a,[b.c]),l["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),l["\u0275mpd"](1073742336,r.o,r.o,[[2,r.u],[2,r.l]]),l["\u0275mpd"](1073742336,v,v,[]),l["\u0275mpd"](1073742336,s.g,s.g,[]),l["\u0275mpd"](1073742336,y.a,y.a,[]),l["\u0275mpd"](1073742336,P.i,P.i,[]),l["\u0275mpd"](1073742336,P.a,P.a,[]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,r.j,function(){return[[{path:"",component:f,children:[{path:"",redirectTo:"setup",pathMatch:"prefix"},{path:"setup",loadChildren:"./setup/setup.module#SetupModule"}]}]]},[])])})}}]);