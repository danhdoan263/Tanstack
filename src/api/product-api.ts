import { axiosClient } from "../axios/axiosClient";

export type Product = {
    products: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
        tags: string[];
        reviews: {
            rating: number;
            comment: string;
            date: string;
            reviewerName: string;
            reviewerEmail: string;
        }[];
        meta: {
            createdAt: string;
            updatedAt: string;
            barcode: string;
            qrCode: string;
        };
    }[],
    total: number;
    skip: number;
    limit: number;
}


export const ProductApi = {
    getAll: (): Promise<Product> => axiosClient.get('/products'),
    addProduct: (product: Product): Promise<Product> => axiosClient.post('/products/add',product)
}