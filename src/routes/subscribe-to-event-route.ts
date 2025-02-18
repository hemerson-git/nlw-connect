import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/subscription",
    {
      schema: {
        summary: "Subscribe to an event",
        tags: ["Subscription"],
        body: z.object({
          name: z.string().min(3).max(255),
          email: z.string().email(),
        }),
      },
    },
    (request, reply) => {
      const { email, name } = request.body;

      return reply.status(201).send({ email, name });
    }
  );
};
