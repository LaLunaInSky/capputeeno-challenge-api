CREATE TABLE "products" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"category" text NOT NULL,
	"price_in_cents" integer NOT NULL,
	"sales" integer NOT NULL,
	"created_at" date NOT NULL
);
