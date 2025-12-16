import { useEffect, useState } from "react";
import type { ProductData } from "../types/product";
import { Product } from "./Product";

export function ProductList() {
    const [products] = useState<ProductData[]>([
        { name: "Product 1", description: "Description 1", price: 1000 },
        { name: "Product 2", description: "Description 2", price: 2000 },
        { name: "Product 3", description: "Description 3", price: 3000 },
        { name: "Product 4", description: "Description 4", price: 4000 },
        { name: "Product 5", description: "Description 5", price: 5000 },

    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(products.reduce((sum, product) => sum + product.price, 0));
    }, [products]);
    return (
        <div>
            <div>
                <h3>Össz ár: {totalPrice}</h3>
            </div>
            <div>
                {products.map((p) =>(
                    <Product key={p.name} product={p} />
                ))}
            </div>
        </div>
    );
}