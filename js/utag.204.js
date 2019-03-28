//tealium universal tag - utag.204 ut4.0.201902110735, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
(function(a,t){var c=a.document.createElement("script");c.src="https://cdn.exactag.com/js/exactag.js";a.document.body.appendChild(c);var e=a.setInterval(function(){var c=!1;try{c=function(){return"object"===typeof a.exactag}.call()}catch(n){}
c&&(a.clearInterval(e),t.call(undefined,a.exactag))},100);})(top,function(exactag){var xctg="xctg";var cookie={name:"xctg",ttl:14,domain:".lufthansa.com"};var marketToEncId={DE:"cf45812c95abebc5d84c2c54de39b98d",US:"ad04299404107ba837ed18c4568c801d",FR:"bc573864331a9e42e4511de6f678aa83",IT:"97d0145823aeb8ed80617be62e08bdcc",CN:"efb76cff97aaf057654ef2f38cd77d73",IN:"5c50b4df4b176845cd235b6a510c6903",UK:"46031b3d04dc90994ca317a7c55c4289",ES:"6ba3af5d7b2790e73f0de32e5c8c1798",AT:"0771fc6f0f4b1d7d1bb73bbbe14e0e31",CH:"21fe5b8ba755eeaece7a450849876228",PL:"6dd4e10e3296fa63738371ec0d5df818",RU:"42a3964579017f3cb42b26605b9ae8ef",SE:"1c54985e4f95b7819ca0357c0cb9a09f"},campaignIdToEncId={1119:"cf45812c95abebc5d84c2c54de39b98d",1120:"ad04299404107ba837ed18c4568c801d",1626:"bc573864331a9e42e4511de6f678aa83",1627:"97d0145823aeb8ed80617be62e08bdcc",1628:"efb76cff97aaf057654ef2f38cd77d73",1629:"5c50b4df4b176845cd235b6a510c6903",1630:"46031b3d04dc90994ca317a7c55c4289",1631:"6ba3af5d7b2790e73f0de32e5c8c1798",1632:"0771fc6f0f4b1d7d1bb73bbbe14e0e31",1633:"21fe5b8ba755eeaece7a450849876228",1634:"6dd4e10e3296fa63738371ec0d5df818",1635:"42a3964579017f3cb42b26605b9ae8ef",1636:"1c54985e4f95b7819ca0357c0cb9a09f"},campaignIds=getKeys(campaignIdToEncId),markets=getKeys(marketToEncId),encIdToMarket=invert(marketToEncId),encIdToCampaignId=invert(campaignIdToEncId);function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";domain="+cookie.domain+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return false;}
function getKeys(obj){var keys=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){keys.push(key);}}
return keys;}
function invert(obj){var newObj={};for(var prop in obj){if(obj.hasOwnProperty(prop)){newObj[obj[prop]]=prop;}}
return newObj;}
function translateMarketToEncId(market){try{debug("translating "+market+" to encId");return marketToEncId[market.toUpperCase()];}catch(e){}
return false;}
function getCampaign(){debug("checking cookie for encId ");var encId=getCookie(cookie.name);if(encId){debug("cookie found: "+encId);return encId;}
debug("no cookie found");encId=getEncId();if(encId){debug("found encId "+encId);setCookie(cookie.name,encId,cookie.ttl);return encId;}
return false;}
function getMarket(encId){try{var market=encIdToMarket[encId];return market.toLowerCase();}catch(e){}
return false;}
function getCampaignId(encId){try{return encIdToCampaignId[encId];}catch(e){}
return false;}
function debug(){try{var debug=getCookie("exactag_debug");if(debug){var args=Array.slice(arguments);console.log("debug:",args.shift(),args.length>0?args:null);}}catch(e){}}
function getEncIdByMarket(pattern,url){debug("trying to match pattern "+pattern+" against url "+url);var market=new RegExp(pattern,"i").exec(url)[1];if(market){return translateMarketToEncId(market);}
return false;}
function getCurrentPage(){return b.current_page.toLowerCase();}
function getContentGroup(){var contentGroup="";if(b.current_page.toLowerCase()==="seo page"&&b["js_page.mmPageID"]){contentGroup=b["js_page.mmPageID"].split("-").length>=3?b["js_page.mmPageID"].split("-")[2]:b["js_page.mmPageID"];}else if(b["page.category.category1"]){contentGroup=b["page.category.category1"];}
return contentGroup;}
function getSiteGroup(){var contentGroup=getContentGroup(),currentPage=getCurrentPage(),pattern;if(currentPage==="seo page"){var lineItem=null;switch(contentGroup){case"content_ond":case"content_country":case"content_area":case"content_region":case"content_generic":case"content_dest":case"content_from":case"content_related":case"content_travel":case"content_index":case"content_dest_first_class":case"content_campaign":case"content_404":lineItem=contentGroup.split(/_(.+)/)[1];break;default:lineItem="other";break;}
return["content",lineItem].join("/");}
return[contentGroup.replace(/[\s-]/g,"_"),currentPage.replace(/[\s-]/g,"_")].join("/");}
function getWtMcId(){if(typeof b.wt_campaign!=="undefined"){return b.wt_campaign;}
return false;}
function getUtmSource(){if(typeof b.utm_source!=="undefined"){return b.utm_source.toLowerCase();}
return null;}
function getUtmMedium(){if(typeof b.utm_medium!=="undefined"){return b.utm_medium.toLowerCase();}
return null;}
function getUtmCampaign(){if(typeof b.utm_campaign!=="undefined"){return b.utm_campaign.toLowerCase();}
return null;}
function isMetaSearcherClick(){var mcId=getWtMcId();var pattern=["(meta_)(?:[^_]+_[",markets.join("|"),"])"].join("");return new RegExp(pattern,"i").test(mcId);}
function isEmailClickWithoutRedirect(){if(getEncIdFromUrlParam()){return false;}
var mcId=getWtMcId();var pattern=["(NLemail_)(?:[^_]+_[",markets.join("|"),"])"].join("");return new RegExp(pattern,"i").test(mcId);}
function isFseClick(){return getUtmMedium()=="fse";}
function getEncIdFromUrlParam(url){try{url=url||document.location.toString();var campaignId=new RegExp([xctg,"=(",campaignIds.join("|"),")"].join(""),"i").exec(url)[1];var encId=campaignIdToEncId[campaignId];if(encId){return encId;}}catch(e){return false;}}
function getEncId(){var url=document.location.toString(),encId,pattern;debug("trying to determine encId - "+url);try{encId=getEncIdFromUrlParam(url);if(encId){trace(1,url);return encId;}}catch(e){debug("unable to find exactag encId in URL param "+xctg);}
try{var utmContent=getUtmCampaign();if(utmContent){pattern=["(",markets.join("|"),")_(?:[A-Za-z]){2}(?:_|$)"].join("");encId=getEncIdByMarket(pattern,utmContent);if(encId){trace(4,utmContent);return encId;}}else throw"Undefined variable utmContent";}catch(e){debug("unable to fetch market from JS variable utmContent");}
try{var mcId=getWtMcId();if(mcId){pattern=["(",markets.join("|"),")_(?:[A-Za-z]){2}(?:_|$)"].join("");encId=getEncIdByMarket(pattern,mcId);if(encId){trace(2,mcId);return encId;}}else throw"Undefined variable WT.mc_id";}catch(e){debug("unable to fetch market from JS variable WT.mc_id");}
try{if(typeof b.market!=="undefined"){encId=translateMarketToEncId(b.market);if(encId){trace(3,b.market);return encId;}}else throw"Undefined variable utag_data.market";}catch(e){debug("unable to fetch market from JS variable utag_data.market");}
return false;}
function isConversion(){return(typeof(b.confirmation_type)!=="undefined");}
function getPax(){var pax_string="";if(typeof b.pax_adult_amt!=="undefined"&&typeof b.pax_child_amt!=="undefined"&&typeof b.pax_baby_amt!=="undefined"){pax_string=[b.pax_adult_amt.toString(),b.pax_child_amt.toString(),b.pax_baby_amt.toString()].join(";");}
return pax_string;}
function getRandomId(length){var i,rid="",possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(i=0;i<length;i++){rid+=possible.charAt(Math.floor(Math.random()*possible.length));}
return rid;}
function trace(choice,data){var cfg={choice:choice,data:data,ts:Date.now(),uid:getRandomId(12)};setCookie(cookie.name+"_trace",JSON.stringify(cfg),cookie.ttl);}
function track(cfg){try{var trace=JSON.parse(getCookie(cookie.name+"_trace"));cfg.traceUid=trace.uid;cfg.traceData=trace.data;cfg.traceTs=trace.ts;cfg.traceChoice=trace.choice;}catch(e){debug("unable to get trace from cookie: "+e.message);}
exactag.track(cfg);}
var campaign,cfg,market;if(isConversion()){try{campaign=getCampaign();if(campaign){market=getMarket(campaign);cfg={trackingURL:"https://m.exactag.com",campaign:campaign,sitegroup:"Conversion Sale",level:b.cabin_class||"",orderid:b["transaction.transactionId"]||"",totalprice:b.BFNetfareEUR||"",revenue:b.revenueEUR||"",area:"",language:b.language||"",market:b.market||"",portal:b.portal||"",bk_type:b.confirmation_type||"",bk_pax:getPax(),bk_classdetail:b.booking_class_detail||"",bk_departuredate:b.outboundDate||"",bk_promocode:b["transaction.total.voucher.voucherId"]||"",bk_returndate:b.inboundDate||"",bk_flighttype:b.BFT||"",bk_taxes:b.taxesEUR||"",bk_tickets:b.tickets||"",bk_traveltype:b.trip_type||"",bk_cat:b.anc_list||"",bk_catprices:b.anc_price_list||"",bk_destination:b.destination_airport||"",bk_origin:b.departure_airport||"",bk_custstatus:b.customerStatus||"",bk_coupons:"",insu_total:b.anc_price_insu||"",car_total:b.anc_price_car||"",rail_fare:b.anc_price_railAndFly||"",bk_yq_total:b.YQEUR||"",bk_opc_total:b.OPCEUR||"",bk_seatres_total:b.anc_price_seat||"",bk_baggage_total:b.anc_price_baggage||"",bk_hotel_total:""};if(isMetaSearcherClick()||isEmailClickWithoutRedirect()){cfg.createClickFor=getWtMcId();}
if(isFseClick()){cfg.extLi=([market,getUtmMedium()]).join("-");cfg.extPu=getUtmSource();cfg.extProvId=296;}
track(cfg);}}catch(e){debug("unable to send exactag tracking call: "+e.message);}}else{try{campaign=getCampaign();if(campaign){market=getMarket(campaign);cfg={trackingURL:"https://m.exactag.com",campaign:campaign,sitegroup:getSiteGroup(),bk_destination:b.destination_airport||"",bk_origin:b.departure_airport||""};if(typeof b.exactag_session_referrer!=="undefined"){cfg.referrer=b.exactag_session_referrer;}
if(isMetaSearcherClick()||isEmailClickWithoutRedirect()){cfg.createClickFor=getWtMcId();}
if(isFseClick()){cfg.extLi=([market,getUtmMedium()]).join("-");cfg.extPu=getUtmSource();cfg.extProvId=296;}
track(cfg);}}catch(e){debug("unable to send exactag tracking call: "+e.message);}}});}};utag.o[loader].loader.LOAD(id);})("204","lufthansa.main");}catch(error){utag.DB(error);}
