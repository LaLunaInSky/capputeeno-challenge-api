import CrudSelectAProduct from "../../../drizzle/cruds/select_a_product.crud.js";

const FunctionShowOnlyOneProduct = async (
    id: string
) => {
    try {
        const product = await CrudSelectAProduct(id);

        return product;
    } catch(error) {
        console.log(`Error: ${error.message}`);
    }
};

export default FunctionShowOnlyOneProduct;