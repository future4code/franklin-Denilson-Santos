import { Request, Response } from "express";
import ProductBusiness from "../business/ProductBusiness";

export default class ProductController {
    public createProduct = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                tags: req.body.tags
            }
            
            const productBusiness = new ProductBusiness();
            const response = await productBusiness.createProduct(input)

            res.status(201).send(response)

        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
    
}