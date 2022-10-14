

export interface IProductDB {
    id: string,
    name: string,
    tags: string
}

export class Product {
    constructor(
        private id: string,
        private name: string,
        private tags: string
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTags = (newTags: string) => {
        this.tags = newTags
    }
}
