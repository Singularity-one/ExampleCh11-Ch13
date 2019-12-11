  
import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClasses():string{
        return this.model.getProducts().length ==5 ? "bg-success" : "bg-warning";
    }

    fontSizeWithUnits: string ="30px";
    fontSizeWithoutUnits: string="30";

    getProduct(key: number): Product{
        return this.model.getProduct(key);
    }

    getProducts(): Product[]{
        return this.model.getProducts();
    }

    getProductCount(): number{
        console.log("getProductCount invoked");
        return this.getProducts().length;
    }

    targetName: string='Kayak';
    counter: number=1;

    get nextProduct(): Product{
        return this.model.getProducts().shift();
    }

    getProductPrice(index:　number):number{
        return Math.floor(this.getProduct(index).price);
    }

}