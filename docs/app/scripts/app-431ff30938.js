!function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var s=i(1);new(function(t){return t&&t.__esModule?t:{default:t}}(s).default)},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),a=i(2),h=s(a),l=i(3),u=s(l),o=i(4),c=s(o),d=new h.default,m=new c.default(15),p=function(){function t(){n(this,t),this.ourRequest=new XMLHttpRequest,this.btn=document.getElementById("btn"),this.list=document.getElementById("list"),this.search=document.getElementById("search"),this.pageNavNumbers=document.getElementById("pageNav"),this.tempPageToken,this.myWindow=document.body,this.events()}return r(t,[{key:"anotherRequest",value:function(){this.list.children.length-m.length>=6&&this.getData()}},{key:"events",value:function(){this.btn.addEventListener("click",this.getResult.bind(this)),this.search.addEventListener("keypress",this.enterKey.bind(this)),this.pageNavNumbers.children[4].addEventListener("click",this.anotherRequest.bind(this)),this.list.addEventListener("mousedown",this.anotherRequest.bind(this)),this.list.addEventListener("touchstart",this.anotherRequest.bind(this)),window.addEventListener("resize",this.myResize.bind(this))}},{key:"test",value:function(){m.sendRegargds(d.slider,d.arrayOfItems)}},{key:"getResult",value:function(){this.tempPageToken=!1,m.reset(),this.getData()}},{key:"enterKey",value:function(t){13===t.which&&(this.tempPageToken=!1,m.reset(),this.getData())}},{key:"getData",value:function(){this.testurl=new u.default("https://www.googleapis.com/youtube/v3/","AIzaSyA9QmZaBDFOz84EtIstlZJXFgykHuTOz9U","video","snippet",15,this.search.value),this.url=this.testurl.createURL(),this.tempPageToken?this.url=this.url+"&pageToken="+this.tempPageToken:(this.list.innerHTML=" ",d.arrayOfItems=[]);var t=this;this.ourRequest.open("GET",this.url),this.ourRequest.onload=function(){this.test1=new XMLHttpRequest,this.ourData=JSON.parse(t.ourRequest.responseText),t.tempPageToken=this.ourData.nextPageToken,this.idArray=this.ourData.items.map(function(t){return t.id.videoId}).join(","),this.url2=t.testurl.createURLID(this.idArray);var e=this;this.test1.open("GET",this.url2),this.test1.onload=function(){this.ourData2=JSON.parse(e.test1.responseText),d.createItems(this.ourData2),t.test()},this.test1.send()},this.ourRequest.send()}},{key:"myResize",value:function(){m.scaleOnResize()}}]),t}();e.default=p},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=function(){function t(){i(this,t),this.slider,this.list=document.getElementById("slider__list"),this.arrayOfItems=[],this.createHeader()}return s(t,[{key:"createHeader",value:function(){this.header=document.createElement("header"),this.div=document.createElement("div"),this.title=document.createElement("h1"),document.body.appendChild(this.header),this.header.appendChild(this.div),this.div.appendChild(this.title),this.title.innerHTML='<a href="https://www.youtube.com" target="blank"><i class="fa fa-youtube" aria-hidden="true"></i></a> youTube for <span>everyOne :)</span>',this.title.firstChild.setAttribute("class","header__logo"),this.div.appendChild(document.createElement("input")),this.div.appendChild(document.createElement("button")),this.input=this.div.children[1],this.search=this.div.children[2],this.search.innerHTML="search",this.input.setAttribute("type","text"),this.input.setAttribute("placeholder","looking for..."),this.search.setAttribute("type","button"),this.header.setAttribute("class","header"),this.div.setAttribute("class","wrapper"),this.title.setAttribute("class","header__title"),this.input.setAttribute("class","header__input"),this.input.setAttribute("id","search"),this.search.setAttribute("class","btn"),this.search.setAttribute("id","btn"),this.createSlider(),this.createPageNav()}},{key:"createSlider",value:function(){this.slider=document.createElement("div"),this.carousel=document.createElement("div"),this.list=document.createElement("ul"),document.body.appendChild(this.slider),this.slider.appendChild(this.carousel),this.carousel.appendChild(this.list),this.slider.setAttribute("class","slider"),this.slider.classList.add("hidden"),this.carousel.setAttribute("class","slider__carousel"),this.list.setAttribute("class","slider__list"),this.list.setAttribute("id","list")}},{key:"createItems",value:function(t){this.slider.classList.remove("hidden");for(var e=0;e<t.items.length;e++)this.listItem=document.createElement("li"),this.contentItem=document.createElement("div"),this.imgContainer=document.createElement("div"),this.image=document.createElement("img"),this.title=document.createElement("h2"),this.description=document.createElement("p"),this.iconsContainer=document.createElement("div"),this.listItem.appendChild(this.contentItem),this.contentItem.appendChild(this.imgContainer),this.imgContainer.appendChild(this.image),this.contentItem.appendChild(this.title),this.contentItem.appendChild(this.description),this.contentItem.appendChild(this.iconsContainer),this.iconsContainer.appendChild(document.createElement("p")),this.iconsContainer.appendChild(document.createElement("p")),this.iconsContainer.appendChild(document.createElement("p")),this.iconsContainer.appendChild(document.createElement("p")),this.listItem.setAttribute("class","item"),this.contentItem.setAttribute("class","item__content"),this.imgContainer.setAttribute("class","item__imgContainer"),this.image.setAttribute("class","item__photo"),this.title.setAttribute("class","item__title"),this.description.setAttribute("class","item__description"),this.iconsContainer.setAttribute("class","item__icons"),this.iconsContainer.setAttribute("id","icons"),this.link='<a href="https://www.youtube.com/watch?v='+t.items[e].id+'" target="_blank">'+t.items[e].snippet.title+"</a>",this.image.src=t.items[e].snippet.thumbnails.medium.url,this.title.innerHTML=this.link,this.description.innerHTML=t.items[e].snippet.description,this.iconsContainer.childNodes[0].innerHTML="<i class='fa fa-user-circle'></i>"+t.items[e].snippet.channelTitle,this.iconsContainer.childNodes[1].innerHTML="<i class='fa fa-calendar'></i>"+t.items[e].snippet.publishedAt.slice(0,10),this.iconsContainer.childNodes[2].innerHTML='<i class="fa fa-eye"></i>'+t.items[e].statistics.viewCount,this.iconsContainer.childNodes[3].innerHTML='<i class="fa fa-thumbs-o-up"></i>'+t.items[e].statistics.likeCount,this.arrayOfItems.push(this.listItem),this.list.appendChild(this.listItem);this.pageNav.classList.remove("hidden")}},{key:"createPageNav",value:function(){this.pageNav=document.createElement("div"),this.prev=document.createElement("button"),this.numberLeft=document.createElement("button"),this.numberCenter=document.createElement("button"),this.numberRight=document.createElement("button"),this.next=document.createElement("button"),this.prev.innerHTML="<<",this.next.innerHTML=">>",this.numberLeft.innerHTML="1",this.numberCenter.innerHTML="2",this.numberRight.innerHTML="3",document.body.appendChild(this.pageNav),this.pageNav.appendChild(this.prev),this.pageNav.appendChild(this.numberLeft),this.pageNav.appendChild(this.numberCenter),this.pageNav.appendChild(this.numberRight),this.pageNav.appendChild(this.next),this.prev.setAttribute("type","button"),this.prev.setAttribute("id","prev"),this.numberLeft.setAttribute("type","button"),this.numberCenter.setAttribute("type","button"),this.numberRight.setAttribute("type","button"),this.next.setAttribute("type","button"),this.next.setAttribute("id","next"),this.pageNav.setAttribute("class","pageNav"),this.pageNav.classList.add("hidden"),this.numberLeft.setAttribute("class","btn"),this.numberCenter.setAttribute("class","btn"),this.numberRight.setAttribute("class","btn"),this.next.setAttribute("class","btn"),this.prev.classList.add("btn","btn--marg"),this.numberCenter.classList.add("btn--marg","btn--numbers"),this.numberRight.classList.add("btn--marg","btn--numbers"),this.numberLeft.classList.add("btn--marg","btn--numbers","btn--active"),this.pageNav.classList.add("hide"),this.pageNav.setAttribute("id","pageNav")}}]),t}();e.default=n},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=function(){function t(e,s,n,r,a,h){i(this,t),this.serverURL=e,this.key="?key="+s,this.type=n?"&type="+n:"",this.part="&part="+r,this.maxResults=a?"&maxResults="+a:"",this.q=h?"&q="+encodeURIComponent(h):"",this.id,this.completeURL}return s(t,[{key:"createURL",value:function(){return this.completeURL=this.serverURL+"search/"+this.key+this.type+this.part+this.maxResults+this.q,this.completeURL}},{key:"createURLID",value:function(t){return this.url=this.serverURL+"videos/"+this.key+"&id="+t+this.part+",statistics",this.url}}]),t}();e.default=n},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=function(){function t(e){i(this,t),this.pageNavNumbers=document.getElementById("pageNav"),this.list=document.getElementById("list"),this.length=0,this.itemsOnPage=1,this.numberOfItems=0,this.index=0,this.numberOfPage=1,this.direction="",this.numberOfActiveBtn=1,this.stopScroll=!0,this.start,this.range,this.eventsHandler()}return s(t,[{key:"eventsHandler",value:function(){this.pageNavNumbers.children[0].addEventListener("click",this.movePageBack.bind(this)),this.pageNavNumbers.children[1].addEventListener("click",this.moveToPage.bind(this)),this.pageNavNumbers.children[2].addEventListener("click",this.moveToPage.bind(this)),this.pageNavNumbers.children[3].addEventListener("click",this.moveToPage.bind(this)),this.pageNavNumbers.children[4].addEventListener("click",this.movePageForward.bind(this)),this.list.addEventListener("mousedown",this.mouseMoveStart.bind(this)),this.list.addEventListener("mouseup",this.mouseMoveEnd.bind(this)),this.list.addEventListener("touchstart",this.mouseMoveStart.bind(this)),this.list.addEventListener("touchend",this.mouseMoveEnd.bind(this))}},{key:"scaleOnResize",value:function(){if(this.list.parentNode.parentNode.clientWidth>1400)for(var t=0;t<this.list.children.length;t++)this.list.children[t].style.width=this.list.parentNode.parentNode.clientWidth/4+"px";else if(this.list.parentNode.parentNode.clientWidth>1e3&&this.list.parentNode.parentNode.clientWidth<1399)for(var e=0;e<this.list.children.length;e++)this.list.children[e].style.width=this.list.parentNode.parentNode.clientWidth/3+"px";else if(this.list.parentNode.parentNode.clientWidth>550&&this.list.parentNode.parentNode.clientWidth<999)for(var i=0;i<this.list.children.length;i++)this.list.children[i].style.width=this.list.parentNode.parentNode.clientWidth/2+"px";else for(var s=0;s<this.list.children.length;s++)this.list.children[s].style.width=this.list.parentNode.parentNode.clientWidth/1+"px"}},{key:"sendRegargds",value:function(t,e){if(t.clientWidth>1400){var i=this;e.map(function(e){return i.numberOfItems=4,e.style.width=t.clientWidth/4+"px"})}else if(t.clientWidth>1e3&&t.clientWidth<1399){var s=this;e.map(function(e){return s.numberOfItems=3,e.style.width=t.clientWidth/3+"px"})}else if(t.clientWidth>600&&t.clientWidth<999){var n=this;e.map(function(e){return n.numberOfItems=2,e.style.width=t.clientWidth/2+"px"})}else{var r=this;e.map(function(e){return r.numberOfItems=1,e.style.width=t.clientWidth/1+"px"})}this.length=this.list.children.length}},{key:"moveToPage",value:function(t){t.target.innerHTML-this.numberOfActiveBtn==-1?this.movePageBack(this.stopScroll):t.target.innerHTML-this.numberOfActiveBtn==-2?(this.movePageBack(this.stopScroll),this.movePageBack(this.stopScroll)):t.target.innerHTML-this.numberOfActiveBtn==1?this.movePageForward(this.stopScroll):t.target.innerHTML-this.numberOfActiveBtn==2?(this.movePageForward(this.stopScroll),this.movePageForward(this.stopScroll)):console.log("hello!"),this.numberOfPage=this.numberOfActiveBtn,this.createActiveBtn(this.numberOfPage)}},{key:"movePageForward",value:function(){this.numberOfPage++;for(var t=this.index;t<this.numberOfItems+this.index;t++)this.list.children[t].style.display="none",this.length--;this.index+=this.numberOfItems,this.createActiveBtn(this.numberOfPage),this.numberOfPage>3&&(this.direction="forward",this.scrollNumbers(this.direction))}},{key:"movePageBack",value:function(){this.numberOfPage<=1?this.numberOfPage=1:this.numberOfPage--,this.index<1&&(this.index=0);for(var t=this.index-1;t>this.index-this.numberOfItems-1;t--)this.list.children[t].style.display="initial",this.length++;this.index-=this.numberOfItems,this.createActiveBtn(this.numberOfPage),this.numberOfPage>2&&(this.direction="back",this.scrollNumbers(this.direction))}},{key:"scrollNumbers",value:function(t){if("forward"===t)for(var e=1;e<4;e++)this.pageNavNumbers.children[e].innerHTML=Number(this.pageNavNumbers.children[e].innerHTML)+1;else if("back"===t)for(var i=3;i>0;i--)this.pageNavNumbers.children[i].innerHTML=Number(this.pageNavNumbers.children[i].innerHTML)-1}},{key:"createActiveBtn",value:function(t){for(var e=0;e<this.pageNavNumbers.children.length;e++)this.pageNavNumbers.children[e].classList.remove("btn--active");t>3?this.pageNavNumbers.children[3].classList.add("btn--active"):t<1?this.pageNavNumbers.children[1].classList.add("btn--active"):this.pageNavNumbers.children[t].classList.add("btn--active"),this.numberOfActiveBtn=t}},{key:"mouseMoveStart",value:function(t){t.preventDefault(),"mousedown"===t.type?this.start=t.clientX:"touchstart"===t.type&&(this.start=t.touches[0].pageX)}},{key:"mouseMoveEnd",value:function(t){t.preventDefault(),"mouseup"===t.type?(this.range=t.clientX-this.start,this.range<-10?this.movePageForward():this.range>10&&this.movePageBack()):"touchend"===t.type&&(this.range=t.changedTouches[0].pageX-this.start,this.range<-10?this.movePageForward():this.range>10&&this.movePageBack())}},{key:"reset",value:function(){for(var t=1;t<4;t++)this.pageNavNumbers.children[t].innerHTML=t;for(var e=0;e<this.pageNavNumbers.children.length;e++)this.pageNavNumbers.children[e].classList.remove("btn--active");this.pageNavNumbers.children[1].classList.add("btn--active"),this.index=0,this.numberOfPage=1,this.numberOfActiveBtn=1}}]),t}();e.default=n}]);