import { relations } from "drizzle-orm";
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role", { enum: ["USER", "ADMIN"] })
    .default("USER")
    .notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP").notNull(),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP").notNull(),
});

export const categories = sqliteTable("categories", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull().unique(),
});

export const products = sqliteTable("products", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  description: text("description").notNull(),
  images: text("images", { mode: "json" }).$type<string[]>().notNull(),
  price: real("price").notNull(),
  stock: integer("stock").notNull(),
  categoryId: text("category_id").notNull(),
  brand: text("brand").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).defaultNow(),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP").notNull(),
});

/* RELACIONES */

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));

/* export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
})); */
