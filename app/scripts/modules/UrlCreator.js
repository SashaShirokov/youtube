class UrlCreator {
    constructor(serverURL, key, type, part, maxNumber, q) {
        this.serverURL = serverURL;
        this.key = "?key=" + key;
        this.type = type ? '&type=' + type : '';
        this.part = '&part=' + part;
        this.maxResults = maxNumber ? '&maxResults=' + maxNumber : '';
        this.q = q ? '&q=' + encodeURIComponent(q) : '';
        this.id;
        this.completeURL;
    }

    createURL() {
        this.completeURL = this.serverURL + 'search/' + this.key + this.type  +  this.part + this.maxResults + this.q;
        return this.completeURL;
    }

    createURLID(id) {
        this.url = this.serverURL + 'videos/' + this.key + '&id=' + id + this.part + ',statistics';
        return this.url;
    }
}

export default UrlCreator;
