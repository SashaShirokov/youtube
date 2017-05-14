import MyHTML from "./MyHTML";
import UrlCreator from "./UrlCreator";
import Pages from "./Pages";

let html = new MyHTML();
let pages = new Pages(15);
let host = 'https://www.googleapis.com/youtube/v3/';
let apiKey = 'AIzaSyA9QmZaBDFOz84EtIstlZJXFgykHuTOz9U';
let numberOfItems = 15;

class SearchResult {
    constructor() {
        this.ourRequest = new XMLHttpRequest();
        this.btn = document.getElementById("btn");
        this.list = document.getElementById("list");
        this.search = document.getElementById("search");
        this.pageNavNumbers = document.getElementById("pageNav");
        this.tempPageToken;
        this.myWindow = document.body;
        this.events();
    }

    anotherRequest() {
      if (this.list.children.length - pages.length >= 6) {
        this.getData();
      }
    }

    events() {
        this.btn.addEventListener("click", this.getResult.bind(this));
        this.search.addEventListener("keypress", this.enterKey.bind(this));
        this.pageNavNumbers.children[4].addEventListener("click", this.anotherRequest.bind(this));
        this.list.addEventListener("mousedown", this.anotherRequest.bind(this));
        this.list.addEventListener("touchstart", this.anotherRequest.bind(this));
        window.addEventListener("resize", this.myResize.bind(this));
    }

    test() {
        pages.sendRegargds(html.slider, html.arrayOfItems);
    }

    getResult() {
        this.tempPageToken = false;
        pages.reset();
        this.getData();
    }

    enterKey(e) {
        if( e.which === 13) {
            this.tempPageToken = false;
            pages.reset();
            this.getData();
        }
    }

    getData() {
      this.testurl = new UrlCreator(host, apiKey, "video", "snippet", numberOfItems, this.search.value);
      this.url = this.testurl.createURL();
      if (this.tempPageToken) {
          this.url = this.url + '&pageToken=' + this.tempPageToken;
      } else {
          this.list.innerHTML = " ";
          html.arrayOfItems = [];
      }
      let that = this;
      this.ourRequest.open("GET", this.url);
      this.ourRequest.onload = function() {
          this.test1 = new XMLHttpRequest();
          this.ourData = JSON.parse(that.ourRequest.responseText);
          that.tempPageToken = this.ourData.nextPageToken;
          this.idArray = this.ourData.items.map(function (x) {
              return x.id.videoId;
          }).join(',');
          this.url2 = that.testurl.createURLID(this.idArray);
          let _this = this;
          this.test1.open("GET", this.url2);
          this.test1.onload = function() {
              this.ourData2 = JSON.parse(_this.test1.responseText);
              html.createItems(this.ourData2);
              that.test();
          }
          this.test1.send();
      }
      this.ourRequest.send();
    }

    myResize() {
      pages.scaleOnResize();
  	}
}

export default SearchResult;
