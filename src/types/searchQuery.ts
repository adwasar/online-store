export class SearchQuery {
    constructor(searchString: string) {
        this.categories = [];
        this.brands = [];
        this.price = [NaN, NaN];
        this.quantity = [NaN, NaN];
        this.sorting = '';
        this.pageSize = '';
        this.name = '';
        const searchPairs = decodeURI(searchString).substring(1).split('&').map(el => el.split('='));
        for (let i = 0; i < searchPairs.length; i++) {
            switch (searchPairs[i][0].toUpperCase()) {
                case 'BRAND':
                    this.brands = searchPairs[i][1].split('|');
                    break;
                case 'CATEGORY':
                    this.categories = searchPairs[i][1].split('|');
                    break;
                case 'SORT':
                    this.sorting = searchPairs[i][1];
                    break;
                case 'SEARCH':
                    this.name = searchPairs[i][1];
                    break;
                case 'PRICE':
                    this.price = [Number(searchPairs[i][1].split('|')[0]),
                        Number(searchPairs[i][1].split('|')[1])];
                    break;
                case 'STOCK':
                    this.quantity = [Number(searchPairs[i][1].split('|')[0]),
                        Number(searchPairs[i][1].split('|')[1])];
                    break;
                case 'SIZE':
                    this.pageSize = searchPairs[i][1];
                    break;
            }
        }
        console.log(`searchString = ${searchString}`)
        console.log(this);
    }
    public categories: string[];
    public brands: string[];
    public price: [number, number];
    public quantity: [number, number];
    public sorting: string;
    public name: string;
    public pageSize: string;
}