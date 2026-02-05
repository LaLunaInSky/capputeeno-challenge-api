import databaseConnection from "../database_connection.js";
import productsTable from "../schema.js";

const CrudSelectAllProducts = async () => {
    const data = await databaseConnection.select().from(productsTable);

    if (!data || data === undefined || data.length < 1) {
        throw new Error("No registered products found");
    }

    return data;
};

export default CrudSelectAllProducts;