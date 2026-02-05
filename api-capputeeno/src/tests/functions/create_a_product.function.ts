import { faker } from "@faker-js/faker";
import CrudInsertProduct from "../../../drizzle/cruds/insert_product.crud.js";

const FunctionCreateAProduct = async (
    name: string,
    image_url: string,
    category: string,
) => {
    const new_product = {
        id: faker.string.uuid(),
        name,
        description: faker.lorem.paragraph(),
        image_url,
        category,
        price_in_cents: faker.number.int({
            min: 2000,
            max: 10000,
        }),
        sales: faker.number.int(40),
        created_at: `${faker.date.past()}`,
    };

    await CrudInsertProduct(
        new_product,
    );
};

export default FunctionCreateAProduct;