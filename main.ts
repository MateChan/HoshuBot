import { Webhook } from "https://deno.land/x/discord_webhook@1.0.0/mod.ts";

const webhook = new Webhook(Deno.env.get("DISCORD_WEBHOOK_URL") ?? "");

Deno.cron("hoshu", "* * * * *", () => {
  const border = 1 / (5 * 24 * 60);
  const rand = Math.random();
  console.log({ border, rand });
  if (rand < border) {
    console.log("保守");
    webhook.post("保守");
  }
});
