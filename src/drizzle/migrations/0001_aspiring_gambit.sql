ALTER TABLE "subscription" RENAME TO "subscriptions";--> statement-breakpoint
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscription_email_unique";--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_email_unique" UNIQUE("email");