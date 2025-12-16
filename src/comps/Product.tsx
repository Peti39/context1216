import type { ProductData } from "../types/product";

type ProductProps = {
    product : ProductData;
};

export function Product( { product } : ProductProps ) {
    //toFixed(2)
    return (
        <div>
            <h2>{ product.name }</h2>
            <p>{ product.description }</p>
            <p>{ product.price}</p>
        </div>
    );
}