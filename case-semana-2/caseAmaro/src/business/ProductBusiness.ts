import ProductDatabase from "../database/ProductDatabase"
import { Product } from "../model/Product"
import { IdGenerator } from "../services/IdGenerator"

export default class ProductBusiness {
    public createProduct = async (input: any) => {
        const name = input.name
        const tags = input.tags

        if(!name || typeof name !== "string") {
            throw new Error("Parametro 'name' inválido")   
        }

        if(!tags || typeof tags !== "string") {
            throw new Error("Parametro 'name' inválido")   
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
        
        const product = new Product(
            id,
            name,
            tags
        )

        const productDatabase = new ProductDatabase()
        await productDatabase.criaProduct(product)
    }
}