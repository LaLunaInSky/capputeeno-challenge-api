import DataBaseProducts from "../../../drizzle/base_products.data.js";
import CrudSelectAllProducts from "../../../drizzle/cruds/select_all_products.crud.js";
import FunctionCreateAProduct from "./create_a_product.function.js";

const FunctionCreateAllProducts = async () => {
    try {
        await CrudSelectAllProducts();

        console.log("Error: The Projects already exist")
    } catch(error) {
        for (
            let count = 0;
            count < 5;
            count++
        ) {
            DataBaseProducts.map(
                (product) => {
                    FunctionCreateAProduct(
                        product.name,
                        product.image_url,
                        product.category
                    );
                }
            );
        }
    
        console.log("All products where created successfully");
    }
    
};

export default FunctionCreateAllProducts;