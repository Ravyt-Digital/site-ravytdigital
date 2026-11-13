import {sqliteTable,integer,text} from "drizzle-orm/sqlite-core";
// Last validated reference quotation persists across Worker restarts.
export const exchangeRates = sqliteTable("ravyt_exchange_rates", {
 id: integer("id").primaryKey(),
 payload: text("payload").notNull(),
 checked: integer("checked").notNull(),
});

export const commercialRequests = sqliteTable('ravyt_commercial_requests', {
  id: text('id').primaryKey().notNull(),
  reference: text('reference').notNull(),
  kind: text('kind').notNull(),
  name: text('name').notNull(),
  business: text('business').notNull(),
  contact: text('contact').notNull(),
  description: text('description').notNull(),
  plan: text('plan'),
  referral: text('referral'),
  utmSource: text('utm_source'),
  utmMedium: text('utm_medium'),
  utmCampaign: text('utm_campaign'),
  createdAt: text('created_at').notNull(),
  status: text('status').notNull().default('recebido'),
});
