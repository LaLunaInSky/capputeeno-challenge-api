import CrudSelectAllProducts from "../../../drizzle/cruds/select_all_products.crud.js";

const FunctionShowAllProducts = async () => {
    try {
        const products = await CrudSelectAllProducts();
    
        return products;
    } catch(error) {
        console.log(`Error: ${error.message}`);
    }
};

export default FunctionShowAllProducts;