class MyHTML {
    constructor() {
        this.slider;
        this.list = document.getElementById("slider__list")
        this.arrayOfItems = [];
        this.createHeader();
    }

    createHeader() {
        this.header = document.createElement('header');
        this.div = document.createElement('div');
        this.title = document.createElement('h1')
        document.body.appendChild(this.header);
        this.header.appendChild(this.div);
        this.div.appendChild(this.title);

        this.title.innerHTML = '<a href="https://www.youtube.com" target="blank"><i class="fa fa-youtube" aria-hidden="true"></i></a> youTube for <span>everyOne :)</span>';
        this.title.firstChild.setAttribute("class", "header__logo");
        this.div.appendChild(document.createElement('input'));
        this.div.appendChild(document.createElement('button'));

        this.input = this.div.children[1];
        this.search = this.div.children[2];
        this.search.innerHTML = "search"
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

    createSlider() {
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

    createItems(data) {
        this.slider.classList.remove('hidden');

        for (let i = 0; i < data.items.length; i ++) {
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

    createPageNav() {
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
}

export default MyHTML;
