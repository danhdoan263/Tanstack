import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { ProductApi, type Product } from "../api/product-api";
type QueryOptions = Omit<UseQueryOptions<Product>, 'queryKey' | 'queryFn'>;

export const useProducts = (options:QueryOptions) => {
    const getAll = useQuery<Product, Error>({
        ...options,
        queryKey:['products'],
        queryFn:ProductApi.getAll,
    })

    return{
        getAll
    }
}