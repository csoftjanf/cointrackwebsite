webpackJsonp([4],{fTJO:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("WT6e"),t=u("bfOx"),i=(u("sd2D"),u("zb9+")),a=u("0XM+"),o=u("fln1"),d=function(){function l(l,n,u,e){this.sharedService=l,this.serverdata=n,this.router=u,this.alertService=e,this.model={},this.loading=!1,this.sparklineLineData=[],this.sparklineLineData2=[],this.sparklineLineData3=[],this.sparklineLineData4=[],this.sparklineLineData5=[],this.sparklineLineData6=[],this.sparklineLineData7=[],this.sparklineLineData8=[],this.sparklineLineData9=[],this.sparklineLineData10=[],this.sparklineLineOptions={type:"line",width:"100%",height:50,lineColor:"#fea6a4",fillColor:"rgba(0,0,0,0)",lineWidth:2,maxSpotColor:"#ff6b68",minSpotColor:"#ff6b68",spotColor:"#ff6b68",spotRadius:4,highlightSpotColor:"#ff6b68",highlightLineColor:"#ff6b68"},this.sService=l}return l.prototype.ngOnInit=function(){var l=this;this.sService.sidebarVisible=!1,this.coinlist=[],this.serverdata.GetPublicCrypto().subscribe(function(n){l.coinlist=n,l.coinlist.forEach(function(n){l.UpdateDate=n.mcap.valueDate,"1"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData.push(n.currentValue)}),"2"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData2.push(n.currentValue)}),"3"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData3.push(n.currentValue)}),"4"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData4.push(n.currentValue)}),"5"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData5.push(n.currentValue)}),"6"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData6.push(n.currentValue)}),"7"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData7.push(n.currentValue)}),"8"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData8.push(n.currentValue)}),"9"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData9.push(n.currentValue)}),"10"==n.mcap.rank&&n.coinHistory.forEach(function(n){l.sparklineLineData10.push(n.currentValue)})})},function(l){l.error instanceof Error?console.log("An error occurred:",l.error.message):console.log("Backend returned code "+l.status+", body was: "+l.error)})},l.prototype.login=function(){this.router.navigate(["/login"])},l.prototype.GotToCoinView=function(l){this.router.navigate(["publiccoin",l])},l.prototype.SetColor=function(l){return l>0?"#00b894":"#ff7675"},l}(),c=function(){},r=u("9pkN"),s=u("Sk7D"),p=function(){function l(l){this.el=l}return l.prototype.ngOnInit=function(){jQuery(this.el.nativeElement).sparkline(this.dataset,this.options)},l}(),f=u("Xjw4"),m=e["\u0275crt"]({encapsulation:0,styles:[[".pagetitle[_ngcontent-%COMP%]{font-size:2rem;margin:0;font-weight:700}.prompt[_ngcontent-%COMP%]{font-size:1.3rem;margin:0;font-weight:500;text-align:left}.listitem[_ngcontent-%COMP%]{font-size:1.5rem;margin:0}.errormessage[_ngcontent-%COMP%]{font-size:1.3rem;margin:0;font-weight:500;text-align:center;color:red}.disclaimer[_ngcontent-%COMP%]{font-weight:500;text-align:center;color:#000;font-size:14px}#ppBody[_ngcontent-%COMP%]{font-size:11pt;width:100%;margin:0 auto;text-align:justify}#ppHeader[_ngcontent-%COMP%]{font-family:verdana;font-size:21pt;width:100%;margin:0 auto;color:#add8e6}.blueText[_ngcontent-%COMP%]{font-family:verdana;font-size:11pt;width:100%;margin:0 auto;color:#add8e6}.ppConsistencies[_ngcontent-%COMP%]{display:none}.displaycol[_ngcontent-%COMP%]{text-align:right;padding:5px;font-weight:600}"]],data:{}});function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["CoinTrack Data as at: ","  ",""])),e["\u0275ppd"](2,2),e["\u0275ppd"](3,2)],null,function(l,n){var u=n.component;l(n,1,0,e["\u0275unv"](n,1,0,l(n,2,0,e["\u0275nov"](n.parent,0),u.UpdateDate,"fullDate")),e["\u0275unv"](n,1,1,l(n,3,0,e["\u0275nov"](n.parent,0),u.UpdateDate,"shortTime")))})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData)},null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData2)},null)}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData3)},null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData4)},null)}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData5)},null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData6)},null)}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData7)},null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData8)},null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData9)},null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](2,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"sparkline",[],null,null,null,null,null)),e["\u0275did"](5,81920,null,0,p,[e.ElementRef],{options:[0,"options"],dataset:[1,"dataset"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "]))],function(l,n){var u=n.component;l(n,5,0,u.sparklineLineOptions,u.sparklineLineData10)},null)}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,80,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](2,0,null,null,77,"div",[["class","card"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.GotToCoinView(l.context.$implicit.mcap.id)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](4,0,null,null,74,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](6,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,5,"h6",[["class","card-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](9,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275eld"](11,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](14,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"div",[["class","col-md-4 col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Rank"])),(l()(),e["\u0275eld"](17,0,null,null,2,"div",[["class","col-md-8 col-sm-8 displaycol"]],null,null,null,null,null)),(l()(),e["\u0275ted"](18,null,["",""])),e["\u0275ppd"](19,1),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](21,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"div",[["class","col-md-4 col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Price :"])),(l()(),e["\u0275eld"](24,0,null,null,2,"div",[["class","col-md-8 col-sm-8 displaycol"]],null,null,null,null,null)),(l()(),e["\u0275ted"](25,null,["$",""])),e["\u0275ppd"](26,2),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](28,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"div",[["class","col-md-4 col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Change 7D :"])),(l()(),e["\u0275eld"](31,0,null,null,2,"div",[["class","col-md-8 col-sm-8 displaycol"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](32,null,["",""])),e["\u0275ppd"](33,2),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](35,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,1,"div",[["class","col-md-4 col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Change 24H :"])),(l()(),e["\u0275eld"](38,0,null,null,2,"div",[["class","col-md-8 col-sm-8 displaycol"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](39,null,["",""])),e["\u0275ppd"](40,2),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](42,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"div",[["class","col-md-4 col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Change 1H :"])),(l()(),e["\u0275eld"](45,0,null,null,2,"div",[["class","col-md-8 col-sm-8 displaycol"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](46,null,["",""])),e["\u0275ppd"](47,2),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](50,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](53,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](56,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](59,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](62,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](65,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](68,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](71,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](74,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](77,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "]))],function(l,n){l(n,50,0,"1"==n.context.$implicit.mcap.rank),l(n,53,0,"2"==n.context.$implicit.mcap.rank),l(n,56,0,"3"==n.context.$implicit.mcap.rank),l(n,59,0,"4"==n.context.$implicit.mcap.rank),l(n,62,0,"5"==n.context.$implicit.mcap.rank),l(n,65,0,"6"==n.context.$implicit.mcap.rank),l(n,68,0,"7"==n.context.$implicit.mcap.rank),l(n,71,0,"8"==n.context.$implicit.mcap.rank),l(n,74,0,"9"==n.context.$implicit.mcap.rank),l(n,77,0,"10"==n.context.$implicit.mcap.rank)},function(l,n){var u=n.component;l(n,9,0,e["\u0275inlineInterpolate"](1,"","assets/icon/"+n.context.$implicit.mcap.coinimage,"")),l(n,12,0,n.context.$implicit.mcap.name),l(n,18,0,e["\u0275unv"](n,18,0,l(n,19,0,e["\u0275nov"](n.parent.parent,1),n.context.$implicit.mcap.rank))),l(n,25,0,e["\u0275unv"](n,25,0,l(n,26,0,e["\u0275nov"](n.parent.parent,1),n.context.$implicit.mcap.price_aud,"1.2-4"))),l(n,31,0,u.SetColor(n.context.$implicit.mcap.percent_change_7d)),l(n,32,0,e["\u0275unv"](n,32,0,l(n,33,0,e["\u0275nov"](n.parent.parent,2),n.context.$implicit.mcap.percent_change_7d/100,"1.2-4"))),l(n,38,0,u.SetColor(n.context.$implicit.mcap.percent_change_24h)),l(n,39,0,e["\u0275unv"](n,39,0,l(n,40,0,e["\u0275nov"](n.parent.parent,2),n.context.$implicit.mcap.percent_change_24h/100,"1.2-4"))),l(n,45,0,u.SetColor(n.context.$implicit.mcap.percent_change_1h)),l(n,46,0,e["\u0275unv"](n,46,0,l(n,47,0,e["\u0275nov"](n.parent.parent,2),n.context.$implicit.mcap.percent_change_1h/100,"1.2-4")))})}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](3,802816,null,0,f.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n  "]))],function(l,n){l(n,3,0,n.component.coinlist)},null)}function _(l){return e["\u0275vid"](0,[e["\u0275pid"](0,f.d,[e.LOCALE_ID]),e["\u0275pid"](0,f.e,[e.LOCALE_ID]),e["\u0275pid"](0,f.p,[e.LOCALE_ID]),(l()(),e["\u0275eld"](3,0,null,null,11,"section",[["class","content--full"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](5,0,null,null,4,"header",[["class","content__title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](8,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](13,16384,null,0,f.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,u.coinlist),l(n,13,0,u.coinlist)},null)}var E=e["\u0275ccf"]("app-home",d,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,_,m)),e["\u0275did"](1,114688,null,0,d,[a.a,i.a,t.l,o.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=u("/CuN"),b=u("F6a+"),$=u("oZUJ"),T=u("O46L"),M=u("xvT5"),P=u("fAE3"),H=u("GRaa"),S=u("euY1"),z=u("RaSy");u.d(n,"PublicModuleNgFactory",function(){return F});var F=e["\u0275cmf"](c,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,s.a,E]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,f.n,f.m,[e.LOCALE_ID,[2,f.s]]),e["\u0275mpd"](4608,V.a,V.a,[]),e["\u0275mpd"](4608,b.a,b.a,[e.ComponentFactoryResolver,e.NgZone,e.Injector,V.a,e.ApplicationRef]),e["\u0275mpd"](4608,$.a,$.a,[]),e["\u0275mpd"](4608,T.a,T.a,[]),e["\u0275mpd"](512,f.b,f.b,[]),e["\u0275mpd"](512,t.n,t.n,[[2,t.s],[2,t.l]]),e["\u0275mpd"](512,M.a,M.a,[]),e["\u0275mpd"](512,P.a,P.a,[]),e["\u0275mpd"](512,H.ChartsModule,H.ChartsModule,[]),e["\u0275mpd"](512,S.a,S.a,[]),e["\u0275mpd"](512,c,c,[]),e["\u0275mpd"](256,z.a,{autoClose:!0},[]),e["\u0275mpd"](1024,t.j,function(){return[[{path:"",component:d}]]},[])])})}});