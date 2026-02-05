import databaseConnection from "../database_connection.js";
import productsTable from "../schema.js";

const CrudDeleteAllProducts = async () => {
    try {
        await databaseConnection.delete(productsTable);

        console.log("All products have been deleted");
    } catch(error) {
        console.log(error);
    }
};

export default CrudDeleteAllProducts;