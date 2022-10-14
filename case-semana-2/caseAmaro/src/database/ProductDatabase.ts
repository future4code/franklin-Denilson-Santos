import { IProductDB, Product } from "../model/Product";
import { BaseDatabase } from "./BaseDatabase";

export default class ProductDatabase extends BaseDatabase{
    public toProductDBModel = (product: Product) => {
        const productDB: IProductDB = {
            id: product.getId(),
            name: product.getName(),
            tags: product.getTags()
        }

        return productDB
    }

    public criaProduct = async (product: Product) => {
        const productDB = this.toProductDBModel(product)
    }
}