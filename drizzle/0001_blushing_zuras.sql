CREATE TABLE `ravyt_commercial_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`reference` text NOT NULL,
	`kind` text NOT NULL,
	`name` text NOT NULL,
	`business` text NOT NULL,
	`contact` text NOT NULL,
	`description` text NOT NULL,
	`plan` text,
	`referral` text,
	`utm_source` text,
	`utm_medium` text,
	`utm_campaign` text,
	`created_at` text NOT NULL,
	`status` text DEFAULT 'recebido' NOT NULL
);
