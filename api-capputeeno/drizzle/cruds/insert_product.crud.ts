import databaseConnection from "../database_connection.js";
import productsTable from "../schema.js";

interface ProductData {
    id: string,
    name: string,
    description: string,
    image_url: string,
    category: string,
    price_in_cents: number,
    sales: number,
    created_at: string,
}

const CrudInsertProduct = async (
    product: ProductData
) => {
    try {
        await databaseConnection.insert(productsTable).values(product);
    } catch(error) {
        console.log(error);
    }
};

export default CrudInsertProduct;