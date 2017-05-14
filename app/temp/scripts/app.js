/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _SearchResult = __webpack_require__(1);

	var _SearchResult2 = _interopRequireDefault(_SearchResult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _SearchResult2.default();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MyHTML = __webpack_require__(2);

	var _MyHTML2 = _interopRequireDefault(_MyHTML);

	var _UrlCreator = __webpack_require__(3);

	var _UrlCreator2 = _interopRequireDefault(_UrlCreator);

	var _Pages = __webpack_require__(4);

	var _Pages2 = _interopRequireDefault(_Pages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var html = new _MyHTML2.default();
	var pages = new _Pages2.default(15);
	var host = 'https://www.googleapis.com/youtube/v3/';
	var apiKey = 'AIzaSyA9QmZaBDFOz84EtIstlZJXFgykHuTOz9U';
	var numberOfItems = 15;

	var SearchResult = function () {
	    function SearchResult() {
	        _classCallCheck(this, SearchResult);

	        this.ourRequest = new XMLHttpRequest();
	        this.btn = document.getElementById("btn");
	        this.list = document.getElementById("list");
	        this.search = document.getElementById("search");
	        this.pageNavNumbers = document.getElementById("pageNav");
	        this.tempPageToken;
	        this.myWindow = document.body;
	        this.events();
	    }

	    _createClass(SearchResult, [{
	        key: "anotherRequest",
	        value: function anotherRequest() {
	            if (this.list.children.length - pages.length >= 6) {
	                this.getData();
	            }
	        }
	    }, {
	        key: "events",
	        value: function events() {
	            this.btn.addEventListener("click", this.getResult.bind(this));
	            this.search.addEventListener("keypress", this.enterKey.bind(this));
	            this.pageNavNumbers.children[4].addEventListener("click", this.anotherRequest.bind(this));
	            this.list.addEventListener("mousedown", this.anotherRequest.bind(this));
	            this.list.addEventListener("touchstart", this.anotherRequest.bind(this));
	            window.addEventListener("resize", this.myResize.bind(this));
	        }
	    }, {
	        key: "test",
	        value: function test() {
	            pages.sendRegargds(html.slider, html.arrayOfItems);
	        }
	    }, {
	        key: "getResult",
	        value: function getResult() {
	            this.tempPageToken = false;
	            pages.reset();
	            this.getData();
	        }
	    }, {
	        key: "enterKey",
	        value: function enterKey(e) {
	            if (e.which === 13) {
	                this.tempPageToken = false;
	                pages.reset();
	                this.getData();
	            }
	        }
	    }, {
	        key: "getData",
	        value: function getData() {
	            this.testurl = new _UrlCreator2.default(host, apiKey, "video", "snippet", numberOfItems, this.search.value);
	            this.url = this.testurl.createURL();
	            if (this.tempPageToken) {
	                this.url = this.url + '&pageToken=' + this.tempPageToken;
	            } else {
	                this.list.innerHTML = " ";
	                html.arrayOfItems = [];
	            }
	            var that = this;
	            this.ourRequest.open("GET", this.url);
	            this.ourRequest.onload = function () {
	                this.test1 = new XMLHttpRequest();
	                this.ourData = JSON.parse(that.ourRequest.responseText);
	                that.tempPageToken = this.ourData.nextPageToken;
	                this.idArray = this.ourData.items.map(function (x) {
	                    return x.id.videoId;
	                }).join(',');
	                this.url2 = that.testurl.createURLID(this.idArray);
	                var _this = this;
	                this.test1.open("GET", this.url2);
	                this.test1.onload = function () {
	                    this.ourData2 = JSON.parse(_this.test1.responseText);
	                    html.createItems(this.ourData2);
	                    that.test();
	                };
	                this.test1.send();
	            };
	            this.ourRequest.send();
	        }
	    }, {
	        key: "myResize",
	        value: function myResize() {
	            pages.scaleOnResize();
	        }
	    }]);

	    return SearchResult;
	}();

	exports.default = SearchResult;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MyHTML = function () {
	        function MyHTML() {
	                _classCallCheck(this, MyHTML);

	                this.slider;
	                this.list = document.getElementById("slider__list");
	                this.arrayOfItems = [];
	                this.createHeader();
	        }

	        _createClass(MyHTML, [{
	                key: 'createHeader',
	                value: function createHeader() {
	                        this.header = document.createElement('header');
	                        this.div = document.createElement('div');
	                        this.title = document.createElement('h1');
	                        document.body.appendChild(this.header);
	                        this.header.appendChild(this.div);
	                        this.div.appendChild(this.title);

	                        this.title.innerHTML = '<a href="https://www.youtube.com" target="blank"><i class="fa fa-youtube" aria-hidden="true"></i></a> youTube for <span>everyOne :)</span>';
	                        this.title.firstChild.setAttribute("class", "header__logo");
	                        this.div.appendChild(document.createElement('input'));
	                        this.div.appendChild(document.createElement('button'));

	                        this.input = this.div.children[1];
	                        this.search = this.div.children[2];
	                        this.search.innerHTML = "search";
	                        this.input.setAttribute('type', 'text');
	                        this.input.setAttribute('placeholder', 'looking for...');
	                        this.search.setAttribute('type', 'button');

	                        this.header.setAttribute('class', 'header');
	                        this.div.setAttribute('class', 'wrapper');
	                        this.title.setAttribute('class', 'header__title');
	                        this.input.setAttribute('class', 'header__input');
	                        this.input.setAttribute('id', 'search');
	                        this.search.setAttribute('class', 'btn');
	                        this.search.setAttribute('id', 'btn');

	                        this.createSlider();
	                        this.createPageNav();
	                }
	        }, {
	                key: 'createSlider',
	                value: function createSlider() {
	                        this.slider = document.createElement("div");
	                        this.carousel = document.createElement("div");
	                        this.list = document.createElement('ul');

	                        document.body.appendChild(this.slider);
	                        this.slider.appendChild(this.carousel);
	                        this.carousel.appendChild(this.list);

	                        this.slider.setAttribute("class", "slider");
	                        this.slider.classList.add('hidden');
	                        this.carousel.setAttribute('class', 'slider__carousel');
	                        this.list.setAttribute('class', 'slider__list');
	                        this.list.setAttribute('id', 'list');
	                }
	        }, {
	                key: 'createItems',
	                value: function createItems(data) {
	                        this.slider.classList.remove('hidden');

	                        for (var i = 0; i < data.items.length; i++) {
	                                this.listItem = document.createElement('li');
	                                this.contentItem = document.createElement('div');
	                                this.imgContainer = document.createElement('div');
	                                this.image = document.createElement("img");
	                                this.title = document.createElement("h2");
	                                this.description = document.createElement("p");
	                                this.iconsContainer = document.createElement("div");

	                                this.listItem.appendChild(this.contentItem);
	                                this.contentItem.appendChild(this.imgContainer);
	                                this.imgContainer.appendChild(this.image);
	                                this.contentItem.appendChild(this.title);
	                                this.contentItem.appendChild(this.description);
	                                this.contentItem.appendChild(this.iconsContainer);
	                                this.iconsContainer.appendChild(document.createElement("p"));
	                                this.iconsContainer.appendChild(document.createElement("p"));
	                                this.iconsContainer.appendChild(document.createElement("p"));
	                                this.iconsContainer.appendChild(document.createElement("p"));

	                                this.listItem.setAttribute('class', 'item');
	                                this.contentItem.setAttribute('class', 'item__content');
	                                this.imgContainer.setAttribute('class', 'item__imgContainer');
	                                this.image.setAttribute('class', 'item__photo');
	                                this.title.setAttribute('class', 'item__title');
	                                this.description.setAttribute('class', 'item__description');
	                                this.iconsContainer.setAttribute('class', 'item__icons');
	                                this.iconsContainer.setAttribute('id', 'icons');

	                                this.link = '<a href="https://www.youtube.com/watch?v=' + data.items[i].id + '" target="_blank">' + data.items[i].snippet.title + '</a>';
	                                this.image.src = data.items[i].snippet.thumbnails.medium.url;
	                                this.title.innerHTML = this.link;
	                                this.description.innerHTML = data.items[i].snippet.description;
	                                this.iconsContainer.childNodes[0].innerHTML = "<i class='fa fa-user-circle'></i>" + data.items[i].snippet.channelTitle;
	                                this.iconsContainer.childNodes[1].innerHTML = "<i class='fa fa-calendar'></i>" + data.items[i].snippet.publishedAt.slice(0, 10);
	                                this.iconsContainer.childNodes[2].innerHTML = '<i class="fa fa-eye"></i>' + data.items[i].statistics.viewCount;
	                                this.iconsContainer.childNodes[3].innerHTML = '<i class="fa fa-thumbs-o-up"></i>' + data.items[i].statistics.likeCount;

	                                this.arrayOfItems.push(this.listItem);
	                                this.list.appendChild(this.listItem);
	                        }
	                        this.pageNav.classList.remove('hidden');
	                }
	        }, {
	                key: 'createPageNav',
	                value: function createPageNav() {
	                        this.pageNav = document.createElement("div");
	                        this.prev = document.createElement('button');

	                        this.numberLeft = document.createElement('button');
	                        this.numberCenter = document.createElement('button');
	                        this.numberRight = document.createElement('button');

	                        this.next = document.createElement('button');
	                        this.prev.innerHTML = "<<";
	                        this.next.innerHTML = ">>";
	                        this.numberLeft.innerHTML = "1";
	                        this.numberCenter.innerHTML = "2";
	                        this.numberRight.innerHTML = "3";

	                        document.body.appendChild(this.pageNav);
	                        this.pageNav.appendChild(this.prev);
	                        this.pageNav.appendChild(this.numberLeft);
	                        this.pageNav.appendChild(this.numberCenter);
	                        this.pageNav.appendChild(this.numberRight);
	                        this.pageNav.appendChild(this.next);

	                        this.prev.setAttribute('type', 'button');
	                        this.prev.setAttribute('id', 'prev');
	                        this.numberLeft.setAttribute('type', 'button');
	                        this.numberCenter.setAttribute('type', 'button');
	                        this.numberRight.setAttribute('type', 'button');
	                        this.next.setAttribute('type', 'button');
	                        this.next.setAttribute('id', 'next');
	                        this.pageNav.setAttribute('class', 'pageNav');
	                        this.pageNav.classList.add('hidden');

	                        this.numberLeft.setAttribute('class', 'btn');
	                        this.numberCenter.setAttribute('class', 'btn');
	                        this.numberRight.setAttribute('class', 'btn');
	                        this.next.setAttribute('class', 'btn');
	                        this.prev.classList.add('btn', 'btn--marg');
	                        this.numberCenter.classList.add('btn--marg', 'btn--numbers');
	                        this.numberRight.classList.add('btn--marg', 'btn--numbers');
	                        this.numberLeft.classList.add('btn--marg', 'btn--numbers', "btn--active");
	                        this.pageNav.classList.add('hide');
	                        this.pageNav.setAttribute('id', 'pageNav');
	                }
	        }]);

	        return MyHTML;
	}();

	exports.default = MyHTML;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UrlCreator = function () {
	    function UrlCreator(serverURL, key, type, part, maxNumber, q) {
	        _classCallCheck(this, UrlCreator);

	        this.serverURL = serverURL;
	        this.key = "?key=" + key;
	        this.type = type ? '&type=' + type : '';
	        this.part = '&part=' + part;
	        this.maxResults = maxNumber ? '&maxResults=' + maxNumber : '';
	        this.q = q ? '&q=' + encodeURIComponent(q) : '';
	        this.id;
	        this.completeURL;
	    }

	    _createClass(UrlCreator, [{
	        key: 'createURL',
	        value: function createURL() {
	            this.completeURL = this.serverURL + 'search/' + this.key + this.type + this.part + this.maxResults + this.q;
	            return this.completeURL;
	        }
	    }, {
	        key: 'createURLID',
	        value: function createURLID(id) {
	            this.url = this.serverURL + 'videos/' + this.key + '&id=' + id + this.part + ',statistics';
	            return this.url;
	        }
	    }]);

	    return UrlCreator;
	}();

	exports.default = UrlCreator;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pages = function () {
	    function Pages(num) {
	        _classCallCheck(this, Pages);

	        this.pageNavNumbers = document.getElementById("pageNav");
	        this.list = document.getElementById('list');
	        this.length = 0;
	        this.itemsOnPage = 1;
	        this.numberOfItems = 0;
	        this.index = 0;
	        this.numberOfPage = 1;
	        this.direction = '';
	        this.numberOfActiveBtn = 1;
	        this.stopScroll = true;
	        this.start;
	        this.range;
	        this.eventsHandler();
	    }

	    _createClass(Pages, [{
	        key: 'eventsHandler',
	        value: function eventsHandler() {
	            this.pageNavNumbers.children[0].addEventListener("click", this.movePageBack.bind(this));
	            this.pageNavNumbers.children[1].addEventListener("click", this.moveToPage.bind(this));
	            this.pageNavNumbers.children[2].addEventListener("click", this.moveToPage.bind(this));
	            this.pageNavNumbers.children[3].addEventListener("click", this.moveToPage.bind(this));
	            this.pageNavNumbers.children[4].addEventListener("click", this.movePageForward.bind(this));

	            this.list.addEventListener("mousedown", this.mouseMoveStart.bind(this));
	            this.list.addEventListener("mouseup", this.mouseMoveEnd.bind(this));
	            this.list.addEventListener("touchstart", this.mouseMoveStart.bind(this));
	            this.list.addEventListener("touchend", this.mouseMoveEnd.bind(this));
	        }
	    }, {
	        key: 'scaleOnResize',
	        value: function scaleOnResize() {
	            if (this.list.parentNode.parentNode.clientWidth > 1400) {
	                for (var i = 0; i < this.list.children.length; i++) {
	                    this.list.children[i].style.width = this.list.parentNode.parentNode.clientWidth / 4 + "px";
	                }
	            } else if (this.list.parentNode.parentNode.clientWidth > 1000 && this.list.parentNode.parentNode.clientWidth < 1399) {
	                for (var _i = 0; _i < this.list.children.length; _i++) {
	                    this.list.children[_i].style.width = this.list.parentNode.parentNode.clientWidth / 3 + "px";
	                }
	            } else if (this.list.parentNode.parentNode.clientWidth > 550 && this.list.parentNode.parentNode.clientWidth < 999) {
	                for (var _i2 = 0; _i2 < this.list.children.length; _i2++) {
	                    this.list.children[_i2].style.width = this.list.parentNode.parentNode.clientWidth / 2 + "px";
	                }
	            } else {
	                for (var _i3 = 0; _i3 < this.list.children.length; _i3++) {
	                    this.list.children[_i3].style.width = this.list.parentNode.parentNode.clientWidth / 1 + "px";
	                }
	            }
	        }
	    }, {
	        key: 'sendRegargds',
	        value: function sendRegargds(slider, arr) {
	            if (slider.clientWidth > 1400) {
	                var that = this;
	                arr.map(function (x) {
	                    that.numberOfItems = 4;
	                    return x.style.width = slider.clientWidth / 4 + "px";
	                });
	            } else if (slider.clientWidth > 1000 && slider.clientWidth < 1399) {
	                var _that = this;
	                arr.map(function (x) {
	                    _that.numberOfItems = 3;
	                    return x.style.width = slider.clientWidth / 3 + "px";
	                });
	            } else if (slider.clientWidth > 600 && slider.clientWidth < 999) {
	                var _that2 = this;
	                arr.map(function (x) {
	                    _that2.numberOfItems = 2;
	                    return x.style.width = slider.clientWidth / 2 + "px";
	                });
	            } else {
	                var _that3 = this;
	                arr.map(function (x) {
	                    _that3.numberOfItems = 1;
	                    return x.style.width = slider.clientWidth / 1 + "px";
	                });
	            }
	            this.length = this.list.children.length;
	        }
	    }, {
	        key: 'moveToPage',
	        value: function moveToPage(e) {
	            if (e.target.innerHTML - this.numberOfActiveBtn === -1) {
	                this.movePageBack(this.stopScroll);
	            } else if (e.target.innerHTML - this.numberOfActiveBtn === -2) {
	                this.movePageBack(this.stopScroll);
	                this.movePageBack(this.stopScroll);
	            } else if (e.target.innerHTML - this.numberOfActiveBtn === 1) {
	                this.movePageForward(this.stopScroll);
	            } else if (e.target.innerHTML - this.numberOfActiveBtn === 2) {
	                this.movePageForward(this.stopScroll);
	                this.movePageForward(this.stopScroll);
	            } else {
	                console.log("hello!");
	            }
	            this.numberOfPage = this.numberOfActiveBtn;
	            this.createActiveBtn(this.numberOfPage);
	        }
	    }, {
	        key: 'movePageForward',
	        value: function movePageForward() {
	            this.numberOfPage++;
	            for (var i = this.index; i < this.numberOfItems + this.index; i++) {
	                this.list.children[i].style.display = "none";
	                this.length--;
	            }

	            this.index += this.numberOfItems;
	            this.createActiveBtn(this.numberOfPage);

	            if (this.numberOfPage > 3) {
	                this.direction = "forward";
	                this.scrollNumbers(this.direction);
	            }
	        }
	    }, {
	        key: 'movePageBack',
	        value: function movePageBack() {
	            if (this.numberOfPage <= 1) {
	                this.numberOfPage = 1;
	            } else {
	                this.numberOfPage--;
	            }

	            if (this.index < 1) {
	                this.index = 0;
	            }

	            for (var i = this.index - 1; i > this.index - this.numberOfItems - 1; i--) {
	                this.list.children[i].style.display = "initial";
	                this.length++;
	            }
	            this.index -= this.numberOfItems;
	            this.createActiveBtn(this.numberOfPage);

	            if (this.numberOfPage > 2) {
	                this.direction = "back";
	                this.scrollNumbers(this.direction);
	            }
	        }
	    }, {
	        key: 'scrollNumbers',
	        value: function scrollNumbers(direc) {
	            if (direc === "forward") {
	                for (var i = 1; i < 4; i++) {
	                    this.pageNavNumbers.children[i].innerHTML = Number(this.pageNavNumbers.children[i].innerHTML) + 1;
	                }
	            } else if (direc === "back") {
	                for (var _i4 = 3; _i4 > 0; _i4--) {
	                    this.pageNavNumbers.children[_i4].innerHTML = Number(this.pageNavNumbers.children[_i4].innerHTML) - 1;
	                }
	            }
	        }
	    }, {
	        key: 'createActiveBtn',
	        value: function createActiveBtn(num) {
	            for (var i = 0; i < this.pageNavNumbers.children.length; i++) {
	                this.pageNavNumbers.children[i].classList.remove("btn--active");
	            }
	            if (num > 3) {
	                this.pageNavNumbers.children[3].classList.add("btn--active");
	            } else if (num < 1) {
	                this.pageNavNumbers.children[1].classList.add("btn--active");
	            } else {
	                this.pageNavNumbers.children[num].classList.add("btn--active");
	            }
	            this.numberOfActiveBtn = num;
	        }
	    }, {
	        key: 'mouseMoveStart',
	        value: function mouseMoveStart(e) {
	            e.stopPropagation();
	            if (e.type === 'mousedown') {
	                this.start = e.clientX;
	            } else if (e.type === 'touchstart') {
	                this.start = e.touches[0].pageX;
	            }
	        }
	    }, {
	        key: 'mouseMoveEnd',
	        value: function mouseMoveEnd(e) {
	            e.stopPropagation();
	            if (e.type === 'mouseup') {
	                this.range = e.clientX - this.start;
	                if (this.range < -10) {
	                    this.movePageForward();
	                    this.resetSwipe();
	                } else if (this.range > 10) {
	                    this.movePageBack();
	                    this.resetSwipe();
	                }
	            } else if (e.type === 'touchend') {
	                this.range = e.changedTouches[0].pageX - this.start;
	                if (this.range < -10) {
	                    this.movePageForward();
	                    this.resetSwipe();
	                } else if (this.range > 10) {
	                    this.movePageBack();
	                    this.resetSwipe();
	                }
	            }
	        }
	    }, {
	        key: 'resetSwipe',
	        value: function resetSwipe() {
	            this.start = null;
	            this.range = null;
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            for (var i = 1; i < 4; i++) {
	                this.pageNavNumbers.children[i].innerHTML = i;
	            }
	            for (var _i5 = 0; _i5 < this.pageNavNumbers.children.length; _i5++) {
	                this.pageNavNumbers.children[_i5].classList.remove("btn--active");
	            }
	            this.pageNavNumbers.children[1].classList.add("btn--active");
	            this.index = 0;
	            this.numberOfPage = 1;
	            this.numberOfActiveBtn = 1;
	        }
	    }]);

	    return Pages;
	}();

	exports.default = Pages;

/***/ }
/******/ ]);