import CrudDeleteAllProducts from "../../../drizzle/cruds/delete_all_products.crud.js"

const FunctionDeleteAllProducts = async () => {
    try {
        await CrudDeleteAllProducts();
    } catch(error) {
        console.log(error);
    }
};

export default FunctionDeleteAllProducts;