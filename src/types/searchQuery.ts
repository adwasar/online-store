export class SearchQuery {
    constructor(searchString: string) {
        console.log(searchString);
        this.product = NaN;
        this.categories = [];
        this.brands = [];
        this.price = [NaN, NaN];
        this.quantity = [NaN, NaN];
        this.sorting = '';
        this.pageSize = '';
        this.search = '';
    }

    public product: number;
    public categories: string[];
    public brands: string[];
    public price: [number, number];
    public quantity: [number, number];
    public sorting: string;
    public search: string;
    public pageSize: string;
}