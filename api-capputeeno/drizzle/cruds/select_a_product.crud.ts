import { eq } from "drizzle-orm"
import databaseConnection from "../database_connection.js"
import productsTable from "../schema.js"

const CrudSelectAProduct = async (
    id: string
) => {
    const data = await databaseConnection.select().from(productsTable).where(eq(productsTable.id, id));

    if (
        !data || data === undefined || data.length < 1
    ) {
        throw new Error(`The product with ID "${id}" was not found`)
    }

    return data;
};

export default CrudSelectAProduct;