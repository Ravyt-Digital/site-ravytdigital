import {sqliteTable,integer,text} from "drizzle-orm/sqlite-core";
// Last validated reference quotation persists across Worker restarts.
export const exchangeRates = sqliteTable("ravyt_exchange_rates", {
 id: integer("id").primaryKey(),
 payload: text("payload").notNull(),
 checked: integer("checked").notNull(),
});
