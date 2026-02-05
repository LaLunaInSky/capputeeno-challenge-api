import { date, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

const productsTable = pgTable("products", {
    id: uuid("id").primaryKey().notNull(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    image_url: text("image_url").notNull(),
    category: text("category").notNull(),
    price_in_cents: integer("price_in_cents").notNull(),
    sales: integer("sales").notNull(),
    created_at: text("created_at").notNull(),
});

export default productsTable;
