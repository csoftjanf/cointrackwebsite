(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lzlj:function(l,n,a){"use strict";a.d(n,"a",function(){return t}),a.d(n,"d",function(){return e}),a.d(n,"b",function(){return d}),a.d(n,"c",function(){return i});var u=a("CcnG"),t=(a("FVSy"),a("Fzqc"),a("Wf4p"),u["\u0275crt"]({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:24px;border-radius:2px}.mat-card:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-card .mat-divider{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider{left:auto;right:0}.mat-card .mat-divider.mat-divider-inset{position:static;margin:0}.mat-card.mat-card-flat{box-shadow:none}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle,.mat-card-title{display:block;margin-bottom:16px}.mat-card-actions{margin-left:-16px;margin-right:-16px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 48px);margin:0 -24px 16px -24px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-footer{display:block;margin:0 -24px -24px -24px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 4px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header-text{margin:0 8px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0}.mat-card-lg-image,.mat-card-md-image,.mat-card-sm-image{margin:-8px 0}.mat-card-title-group{display:flex;justify-content:space-between;margin:0 -8px}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}@media (max-width:599px){.mat-card{padding:24px 16px}.mat-card-actions{margin-left:-8px;margin-right:-8px}.mat-card-image{width:calc(100% + 32px);margin:16px -16px}.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}.mat-card-header{margin:-8px 0 0 0}.mat-card-footer{margin-left:-16px;margin-right:-16px}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-24px}.mat-card>.mat-card-actions:last-child{margin-bottom:-16px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function e(l){return u["\u0275vid"](2,[u["\u0275ncd"](null,0),u["\u0275ncd"](null,1)],null,null)}var d=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function i(l){return u["\u0275vid"](2,[u["\u0275ncd"](null,0),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),u["\u0275ncd"](null,1),u["\u0275ncd"](null,2)],null,null)}},sqig:function(l,n,a){"use strict";a.r(n);var u=a("CcnG"),t=a("F8bt"),e=function(){function l(l,n){this.route=l,this.serverdata=n,this.inprogress=!0,this.barChartLabels=[],this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLegend=!1,this.barChartType="line"}return l.prototype.ngOnInit=function(){var l=this;this.inprogress=!0,this.sub=this.route.params.subscribe(function(n){l.CoinType=n.id,l.GetCoinViewGeneralData()})},l.prototype.GetCoinViewGeneralData=function(){var l=this;this.serverdata.PublicCoinviewData(this.CoinType,"1").subscribe(function(n){l._coinview=n;var a=[];l.barChartData=[{data:[],label:"Aud Coin Value"}],l.barChartLabels=[],l._coinview.coinHistory.forEach(function(n){a.push(n.currentValue),l.barChartLabels.push(n.valueDate)});var u=JSON.parse(JSON.stringify(l.barChartData));u[0].data=a,l.barChartData=u,l.inprogress=!1},function(l){l.error instanceof Error?console.log("An error occurred:",l.error.message):console.log("Backend returned code "+l.status+", body was: "+l.error)})},l.prototype.showgraph=function(l){var n=this;this.barChartLabels=[],this.serverdata.PublicCoinviewData(this.CoinType,l.toString()).subscribe(function(l){n._coinview=l;var a=[];n.barChartData=[{data:[],label:"Aud Coin Value"}],n.barChartLabels=[],n._coinview.coinHistory.forEach(function(l){a.push(l.currentValue),n.barChartLabels.push(l.valueDate)});var u=JSON.parse(JSON.stringify(n.barChartData));u[0].data=a,n.barChartData=u},function(l){l.error instanceof Error?console.log("An error occurred:",l.error.message):console.log("Backend returned code "+l.status+", body was: "+l.error)})},l.prototype.SetColor=function(l){return l>0?"#00b894":"#ff7675"},l}(),d=function(){},i=a("t68o"),r=a("zbXB"),o=a("NvT6"),c=a("Blfk"),s=a("dWZg"),m=a("Ip0R"),p=a("wFw1"),v=a("lzlj"),h=a("FVSy"),b=a("TtEo"),g=a("LC5p"),f=a("FbN9"),w=a("8mMr"),x=a("bujt"),C=a("UodH"),_=a("lLAP"),y=a("xdbM"),k=a("ZYCi"),D=u["\u0275crt"]({encapsulation:0,styles:[["mat-card[_ngcontent-%COMP%]{margin:3em auto}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.loading-indicator[_ngcontent-%COMP%]:before{content:'';display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}"]],data:{}});function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","loading-indicator"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["color","accent"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,o.b,o.a)),u["\u0275did"](2,49152,null,0,c.d,[u.ElementRef,s.a,[2,m.c],[2,p.a],c.a],{color:[0,"color"],mode:[1,"mode"]},null)],function(l,n){l(n,2,0,"accent","indeterminate")},function(l,n){l(n,1,0,"NoopAnimations"===u["\u0275nov"](n,2)._animationMode,u["\u0275nov"](n,2).diameter,u["\u0275nov"](n,2).diameter)})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,79,"mat-card",[["class","mat-card"]],null,null,null,v.d,v.a)),u["\u0275did"](1,49152,null,0,h.a,[],null,null),(l()(),u["\u0275eld"](2,0,null,0,7,"mat-card-header",[["class","mat-card-header"]],null,null,null,v.c,v.b)),u["\u0275did"](3,49152,null,0,h.d,[],null,null),(l()(),u["\u0275eld"](4,0,null,1,5,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),u["\u0275did"](5,16384,null,0,h.f,[],null,null),(l()(),u["\u0275eld"](6,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),u["\u0275ted"](7,null,[" "," as at "," ",""])),u["\u0275ppd"](8,2),u["\u0275ppd"](9,2),(l()(),u["\u0275eld"](10,0,null,0,69,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u["\u0275did"](11,16384,null,0,h.c,[],null,null),(l()(),u["\u0275eld"](12,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Rank :"])),(l()(),u["\u0275eld"](15,0,null,null,1,"div",[["class","col-md-3 displaycol"]],null,null,null,null,null)),(l()(),u["\u0275ted"](16,null,["",""])),(l()(),u["\u0275eld"](17,0,null,null,0,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](18,0,null,null,0,"div",[["class","col-md-3 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](19,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](20,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Price Aud :"])),(l()(),u["\u0275eld"](22,0,null,null,2,"div",[["class","col-md-3 displaycol"]],null,null,null,null,null)),(l()(),u["\u0275ted"](23,null,["",""])),u["\u0275ppd"](24,2),(l()(),u["\u0275eld"](25,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Price USD :"])),(l()(),u["\u0275eld"](27,0,null,null,2,"div",[["class","col-md-3 displaycol"]],null,null,null,null,null)),(l()(),u["\u0275ted"](28,null,["",""])),u["\u0275ppd"](29,2),(l()(),u["\u0275eld"](30,0,null,null,0,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](32,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](33,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,b.b,b.a)),u["\u0275did"](34,49152,null,0,g.a,[],null,null),(l()(),u["\u0275eld"](35,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Change 1h :"])),(l()(),u["\u0275eld"](38,0,null,null,2,"div",[["class","col-md-3 displaycol"]],[[4,"color",null]],null,null,null,null)),(l()(),u["\u0275ted"](39,null,["",""])),u["\u0275ppd"](40,2),(l()(),u["\u0275eld"](41,0,null,null,0,"div",[["class","col-md-7 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](42,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](43,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Change 24h :"])),(l()(),u["\u0275eld"](45,0,null,null,2,"div",[["class","col-md-3 displaycol"]],[[4,"color",null]],null,null,null,null)),(l()(),u["\u0275ted"](46,null,["",""])),u["\u0275ppd"](47,2),(l()(),u["\u0275eld"](48,0,null,null,0,"div",[["class","col-md-7 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](49,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](50,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Change 7 d :"])),(l()(),u["\u0275eld"](52,0,null,null,2,"div",[["class","col-md-3 displaycol"]],[[4,"color",null]],null,null,null,null)),(l()(),u["\u0275ted"](53,null,["",""])),u["\u0275ppd"](54,2),(l()(),u["\u0275eld"](55,0,null,null,0,"div",[["class","col-md-7 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](56,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](57,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](58,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,b.b,b.a)),u["\u0275did"](59,49152,null,0,g.a,[],null,null),(l()(),u["\u0275eld"](60,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](61,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Max Supply :"])),(l()(),u["\u0275eld"](63,0,null,null,2,"div",[["class","col-md-3 displaycol"]],null,null,null,null,null)),(l()(),u["\u0275ted"](64,null,["",""])),u["\u0275ppd"](65,2),(l()(),u["\u0275eld"](66,0,null,null,0,"div",[["class","col-md-7 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](67,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](68,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Market cap AUD :"])),(l()(),u["\u0275eld"](70,0,null,null,2,"div",[["class","col-md-3 displaycol"]],null,null,null,null,null)),(l()(),u["\u0275ted"](71,null,["$",""])),u["\u0275ppd"](72,2),(l()(),u["\u0275eld"](73,0,null,null,1,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Market cap USD :"])),(l()(),u["\u0275eld"](75,0,null,null,2,"div",[["class","col-md-3 displaycol"]],null,null,null,null,null)),(l()(),u["\u0275ted"](76,null,["$",""])),u["\u0275ppd"](77,2),(l()(),u["\u0275eld"](78,0,null,null,0,"div",[["class","col-md-2 prompt"]],null,null,null,null,null)),(l()(),u["\u0275eld"](79,0,null,null,0,"div",[["class","col-md-2 prompt"]],null,null,null,null,null))],null,function(l,n){var a=n.component;l(n,6,0,u["\u0275inlineInterpolate"](1,"","assets/icon/"+a._coinview.mcap.coinimage,"")),l(n,7,0,a._coinview.mcap.name,u["\u0275unv"](n,7,1,l(n,8,0,u["\u0275nov"](n.parent,0),a._coinview.mcap.valueDate,"fullDate")),u["\u0275unv"](n,7,2,l(n,9,0,u["\u0275nov"](n.parent,0),a._coinview.mcap.valueDate,"shortTime"))),l(n,16,0,a._coinview.mcap.rank),l(n,23,0,u["\u0275unv"](n,23,0,l(n,24,0,u["\u0275nov"](n.parent,1),a._coinview.mcap.price_aud,"1.2-4"))),l(n,28,0,u["\u0275unv"](n,28,0,l(n,29,0,u["\u0275nov"](n.parent,1),a._coinview.mcap.price_usd,"1.2-4"))),l(n,33,0,u["\u0275nov"](n,34).vertical?"vertical":"horizontal",u["\u0275nov"](n,34).vertical,u["\u0275nov"](n,34).inset),l(n,38,0,a.SetColor(a._coinview.mcap.percent_change_1h)),l(n,39,0,u["\u0275unv"](n,39,0,l(n,40,0,u["\u0275nov"](n.parent,2),a._coinview.mcap.percent_change_1h/100,"1.2-2"))),l(n,45,0,a.SetColor(a._coinview.mcap.percent_change_24h)),l(n,46,0,u["\u0275unv"](n,46,0,l(n,47,0,u["\u0275nov"](n.parent,2),a._coinview.mcap.percent_change_24h/100,"1.2-2"))),l(n,52,0,a.SetColor(a._coinview.mcap.percent_change_7d)),l(n,53,0,u["\u0275unv"](n,53,0,l(n,54,0,u["\u0275nov"](n.parent,2),a._coinview.mcap.percent_change_7d/100,"1.2-2"))),l(n,58,0,u["\u0275nov"](n,59).vertical?"vertical":"horizontal",u["\u0275nov"](n,59).vertical,u["\u0275nov"](n,59).inset),l(n,64,0,u["\u0275unv"](n,64,0,l(n,65,0,u["\u0275nov"](n.parent,1),a._coinview.mcap.max_supply,"1.2-4"))),l(n,71,0,u["\u0275unv"](n,71,0,l(n,72,0,u["\u0275nov"](n.parent,1),a._coinview.mcap.market_cap_aud,"1.2-4"))),l(n,76,0,u["\u0275unv"](n,76,0,l(n,77,0,u["\u0275nov"](n.parent,1),a._coinview.mcap.market_cap_usd,"1.2-4")))})}function M(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,22,"mat-card",[["class","mat-card"]],null,null,null,v.d,v.a)),u["\u0275did"](1,49152,null,0,h.a,[],null,null),(l()(),u["\u0275eld"](2,0,null,0,20,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u["\u0275did"](3,16384,null,0,h.c,[],null,null),(l()(),u["\u0275eld"](4,0,null,null,1,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Price history"])),(l()(),u["\u0275eld"](6,0,null,null,12,"mat-toolbar",[["class","mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,f.b,f.a)),u["\u0275did"](7,4243456,null,1,w.a,[u.ElementRef,s.a,m.c],null,null),u["\u0275qud"](603979776,1,{_toolbarRows:1}),(l()(),u["\u0275eld"](9,0,null,0,9,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,2,"button",[["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==l.component.showgraph(1)&&u),u},x.b,x.a)),u["\u0275did"](11,180224,null,0,C.b,[u.ElementRef,s.a,_.e,[2,p.a]],null,null),(l()(),u["\u0275ted"](-1,0,["1 day"])),(l()(),u["\u0275eld"](13,0,null,null,2,"button",[["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==l.component.showgraph(7)&&u),u},x.b,x.a)),u["\u0275did"](14,180224,null,0,C.b,[u.ElementRef,s.a,_.e,[2,p.a]],null,null),(l()(),u["\u0275ted"](-1,0,["7 days"])),(l()(),u["\u0275eld"](16,0,null,null,2,"button",[["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==l.component.showgraph(30)&&u),u},x.b,x.a)),u["\u0275did"](17,180224,null,0,C.b,[u.ElementRef,s.a,_.e,[2,p.a]],null,null),(l()(),u["\u0275ted"](-1,0,["30 days"])),(l()(),u["\u0275eld"](19,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](20,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](21,0,null,null,1,"canvas",[["baseChart",""]],null,null,null,null,null)),u["\u0275did"](22,737280,null,0,y.BaseChartDirective,[u.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],legend:[4,"legend"]},null)],function(l,n){var a=n.component;l(n,22,0,a.barChartData,a.barChartLabels,a.barChartOptions,a.barChartType,a.barChartLegend)},function(l,n){l(n,6,0,u["\u0275nov"](n,7)._toolbarRows.length,!u["\u0275nov"](n,7)._toolbarRows.length),l(n,10,0,u["\u0275nov"](n,11).disabled||null,"NoopAnimations"===u["\u0275nov"](n,11)._animationMode),l(n,13,0,u["\u0275nov"](n,14).disabled||null,"NoopAnimations"===u["\u0275nov"](n,14)._animationMode),l(n,16,0,u["\u0275nov"](n,17).disabled||null,"NoopAnimations"===u["\u0275nov"](n,17)._animationMode)})}function S(l){return u["\u0275vid"](0,[u["\u0275pid"](0,m.d,[u.LOCALE_ID]),u["\u0275pid"](0,m.e,[u.LOCALE_ID]),u["\u0275pid"](0,m.s,[u.LOCALE_ID]),(l()(),u["\u0275eld"](3,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,3,"a",[["class","btn btn-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,a){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,6).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&t),t},null,null)),u["\u0275did"](6,671744,null,0,k.m,[k.k,k.a,m.i],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](7,1),(l()(),u["\u0275ted"](-1,null,["Back"])),(l()(),u["\u0275eld"](9,0,null,null,2,"header",[["class","content__title"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Coin Overview "])),(l()(),u["\u0275eld"](12,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,b.b,b.a)),u["\u0275did"](15,49152,null,0,g.a,[],null,null),(l()(),u["\u0275and"](16777216,null,null,1,null,L)),u["\u0275did"](17,16384,null,0,m.l,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,R)),u["\u0275did"](19,16384,null,0,m.l,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,M)),u["\u0275did"](21,16384,null,0,m.l,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var a=n.component;l(n,6,0,l(n,7,0,"/home")),l(n,17,0,1==a.inprogress),l(n,19,0,a._coinview),l(n,21,0,a._coinview)},function(l,n){l(n,5,0,u["\u0275nov"](n,6).target,u["\u0275nov"](n,6).href),l(n,14,0,u["\u0275nov"](n,15).vertical?"vertical":"horizontal",u["\u0275nov"](n,15).vertical,u["\u0275nov"](n,15).inset)})}var I=u["\u0275ccf"]("app-home",e,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,S,D)),u["\u0275did"](1,114688,null,0,e,[k.a,t.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),A=a("gIcY"),E=a("M2Lx"),O=a("Wf4p"),j=a("eDkP"),N=a("Fzqc"),T=a("uGex"),V=a("o3x0"),F=a("jQLj"),z=a("de3e"),P=a("/VYK"),q=a("seP3"),B=a("b716"),G=a("4c35"),J=a("qAlS"),H=a("SMsm"),K=a("y4qS"),U=a("BHnd"),W=a("9It4"),Y=a("vvyD");a.d(n,"publiccoinviewModuleNgFactory",function(){return Z});var Z=u["\u0275cmf"](d,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,r.b,r.a,I]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,m.n,m.m,[u.LOCALE_ID,[2,m.x]]),u["\u0275mpd"](4608,A.r,A.r,[]),u["\u0275mpd"](4608,E.a,E.a,[]),u["\u0275mpd"](4608,O.b,O.b,[]),u["\u0275mpd"](4608,j.c,j.c,[j.i,j.e,u.ComponentFactoryResolver,j.h,j.f,u.Injector,u.NgZone,m.c,N.b]),u["\u0275mpd"](5120,j.j,j.k,[j.c]),u["\u0275mpd"](5120,T.a,T.b,[j.c]),u["\u0275mpd"](5120,V.b,V.c,[j.c]),u["\u0275mpd"](4608,V.d,V.d,[j.c,u.Injector,[2,m.h],[2,V.a],V.b,[3,V.d],j.e]),u["\u0275mpd"](4608,F.i,F.i,[]),u["\u0275mpd"](5120,F.a,F.b,[j.c]),u["\u0275mpd"](4608,O.a,O.t,[[2,O.e],s.a]),u["\u0275mpd"](1073742336,m.b,m.b,[]),u["\u0275mpd"](1073742336,y.ChartsModule,y.ChartsModule,[]),u["\u0275mpd"](1073742336,A.p,A.p,[]),u["\u0275mpd"](1073742336,A.f,A.f,[]),u["\u0275mpd"](1073742336,N.a,N.a,[]),u["\u0275mpd"](1073742336,O.j,O.j,[[2,O.c]]),u["\u0275mpd"](1073742336,s.b,s.b,[]),u["\u0275mpd"](1073742336,O.s,O.s,[]),u["\u0275mpd"](1073742336,C.c,C.c,[]),u["\u0275mpd"](1073742336,E.b,E.b,[]),u["\u0275mpd"](1073742336,z.a,z.a,[]),u["\u0275mpd"](1073742336,P.c,P.c,[]),u["\u0275mpd"](1073742336,q.d,q.d,[]),u["\u0275mpd"](1073742336,B.c,B.c,[]),u["\u0275mpd"](1073742336,G.f,G.f,[]),u["\u0275mpd"](1073742336,J.a,J.a,[]),u["\u0275mpd"](1073742336,j.g,j.g,[]),u["\u0275mpd"](1073742336,O.q,O.q,[]),u["\u0275mpd"](1073742336,O.o,O.o,[]),u["\u0275mpd"](1073742336,T.d,T.d,[]),u["\u0275mpd"](1073742336,H.a,H.a,[]),u["\u0275mpd"](1073742336,w.b,w.b,[]),u["\u0275mpd"](1073742336,h.e,h.e,[]),u["\u0275mpd"](1073742336,g.b,g.b,[]),u["\u0275mpd"](1073742336,c.c,c.c,[]),u["\u0275mpd"](1073742336,K.o,K.o,[]),u["\u0275mpd"](1073742336,U.a,U.a,[]),u["\u0275mpd"](1073742336,W.a,W.a,[]),u["\u0275mpd"](1073742336,V.g,V.g,[]),u["\u0275mpd"](1073742336,_.a,_.a,[]),u["\u0275mpd"](1073742336,F.j,F.j,[]),u["\u0275mpd"](1073742336,O.u,O.u,[]),u["\u0275mpd"](1073742336,O.l,O.l,[]),u["\u0275mpd"](1073742336,Y.a,Y.a,[]),u["\u0275mpd"](1073742336,k.n,k.n,[[2,k.s],[2,k.k]]),u["\u0275mpd"](1073742336,d,d,[]),u["\u0275mpd"](256,O.d,O.g,[]),u["\u0275mpd"](1024,k.i,function(){return[[{path:"",component:e}],[{path:"",component:e}]]},[])])})}}]);