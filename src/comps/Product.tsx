import type { ProductData } from "../types/product";
import { useContext } from "react";
import { CurrencyContext } from "../contexts/currancyContext";

type ProductProps = {
    product : ProductData;
};

export function Product( { product } : ProductProps ) {
    const currencyCtx = useContext(CurrencyContext);
    
    return (
        <div className="product-card">
            <h2>{ product.name }</h2>
            <p>{ product.description }</p>
            <p>{ currencyCtx.format(product.price)}</p>
        </div>
    );
}