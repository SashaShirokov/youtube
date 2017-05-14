class Pages {
    constructor(num) {
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

    eventsHandler() {
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

    scaleOnResize() {
      if (this.list.parentNode.parentNode.clientWidth > 1400) {
          for( let i = 0; i < this.list.children.length; i ++) {
              this.list.children[i].style.width = this.list.parentNode.parentNode.clientWidth / 4 + "px";
          }
      } else if (this.list.parentNode.parentNode.clientWidth > 1000 && this.list.parentNode.parentNode.clientWidth < 1399){
          for( let i = 0; i < this.list.children.length; i ++) {
              this.list.children[i].style.width = this.list.parentNode.parentNode.clientWidth / 3 + "px";
          }
      } else if (this.list.parentNode.parentNode.clientWidth > 550 && this.list.parentNode.parentNode.clientWidth < 999) {
          for( let i = 0; i < this.list.children.length; i ++) {
              this.list.children[i].style.width = this.list.parentNode.parentNode.clientWidth / 2 + "px";
          }
      } else {
          for( let i = 0; i < this.list.children.length; i ++) {
              this.list.children[i].style.width = this.list.parentNode.parentNode.clientWidth / 1 + "px";
          }
      }
    }

    sendRegargds(slider, arr) {
        if (slider.clientWidth > 1400) {
            let that = this;
            arr.map(function(x) {
                that.numberOfItems = 4;
                return x.style.width = slider.clientWidth / 4 + "px";
            });
        } else if (slider.clientWidth > 1000 && slider.clientWidth < 1399){
            let that = this;
            arr.map(function(x) {
                that.numberOfItems = 3;
                return x.style.width = slider.clientWidth / 3 + "px";
            });
        } else if (slider.clientWidth > 600 && slider.clientWidth < 999) {
            let that = this;
            arr.map(function(x) {
                that.numberOfItems = 2;
                return x.style.width = slider.clientWidth / 2 + "px";
            });
        } else {
            let that = this;
            arr.map(function(x) {
                that.numberOfItems = 1;
                return x.style.width = slider.clientWidth / 1 + "px";
            });
        }
        this.length = this.list.children.length;
    }

    moveToPage(e) {
        if (e.target.innerHTML - this.numberOfActiveBtn  === -1) {
            this.movePageBack(this.stopScroll)
        } else if (e.target.innerHTML - this.numberOfActiveBtn  === -2) {
            this.movePageBack(this.stopScroll)
            this.movePageBack(this.stopScroll)
        } else if (e.target.innerHTML - this.numberOfActiveBtn  === 1) {
            this.movePageForward(this.stopScroll);
        } else if (e.target.innerHTML - this.numberOfActiveBtn  === 2) {
            this.movePageForward(this.stopScroll);
            this.movePageForward(this.stopScroll);
        } else {
            console.log("hello!");
        }
        this.numberOfPage = this.numberOfActiveBtn;
        this.createActiveBtn(this.numberOfPage);
    }

    movePageForward() {
          this.numberOfPage ++;
          for( let i = this.index; i < this.numberOfItems + this.index; i ++) {
              this.list.children[i].style.display = "none";
              this.length --;
          }

          this.index += this.numberOfItems;
          this.createActiveBtn(this.numberOfPage);

          if (this.numberOfPage > 3) {
            this.direction = "forward";
            this.scrollNumbers(this.direction);
          }
    }

    movePageBack() {
        if (this.numberOfPage <= 1) {
            this.numberOfPage = 1;
        } else {
            this.numberOfPage --;
        }

        if (this.index < 1) {
            this.index = 0;
        }

        for( let i = this.index - 1; i > (this.index - this.numberOfItems) - 1; i --) {
            this.list.children[i].style.display = "initial";
            this.length ++;
        }
        this.index -= this.numberOfItems;
        this.createActiveBtn(this.numberOfPage);

        if (this.numberOfPage > 2) {
          this.direction = "back";
          this.scrollNumbers(this.direction);
        }
    }

    scrollNumbers(direc) {
      if (direc === "forward") {
        for (let i = 1; i < 4; i ++) {
          this.pageNavNumbers.children[i].innerHTML = Number(this.pageNavNumbers.children[i].innerHTML) + 1;
        }
      } else if(direc === "back") {
        for (let i = 3; i > 0; i --) {
          this.pageNavNumbers.children[i].innerHTML = Number(this.pageNavNumbers.children[i].innerHTML) - 1;
        }
      }
    }

    createActiveBtn(num) {
        for (let i = 0; i < this.pageNavNumbers.children.length; i ++) {
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

    mouseMoveStart(e) {      
        if (e.type === 'mousedown') {
            e.preventDefault();
            this.start = e.clientX;
        } else if (e.type === 'touchstart') {
            e.stopPropagation();
            this.start = e.touches[0].pageX;
        }
    }

    mouseMoveEnd(e) {
        e.stopPropagation();
        if (e.type === 'mouseup') {
            e.preventDefault();
            this.range = e.clientX - this.start;
            if (this.range < -10) {
                this.movePageForward();
                this.resetSwipe();
            } else if (this.range > 10) {
                this.movePageBack();
                this.resetSwipe();
            }
        } else if (e.type === 'touchend') {
            e.stopPropagation();
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

    resetSwipe() {
        this.start = null;
        this.range = null;
    }

    reset() {
      for (let i = 1; i < 4; i ++) {
        this.pageNavNumbers.children[i].innerHTML = i;
      }
      for (let i = 0; i < this.pageNavNumbers.children.length; i ++) {
          this.pageNavNumbers.children[i].classList.remove("btn--active");
      }
      this.pageNavNumbers.children[1].classList.add("btn--active");
      this.index = 0;
      this.numberOfPage = 1;
      this.numberOfActiveBtn = 1;
    }
}

export default Pages;
