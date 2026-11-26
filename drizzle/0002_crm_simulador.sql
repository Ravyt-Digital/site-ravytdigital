ALTER TABLE `ravyt_commercial_requests` ADD `source` text DEFAULT 'formulario' NOT NULL;
--> statement-breakpoint
ALTER TABLE `ravyt_commercial_requests` ADD `estimate_total` integer;
--> statement-breakpoint
ALTER TABLE `ravyt_commercial_requests` ADD `estimate_pending` integer;
--> statement-breakpoint
ALTER TABLE `ravyt_commercial_requests` ADD `segment` text;
--> statement-breakpoint
ALTER TABLE `ravyt_commercial_requests` ADD `crm_synced_at` text;
