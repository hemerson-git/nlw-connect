import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { subscribeToEvent } from '../functions/subscribe-to-event'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscription',
    {
      schema: {
        summary: 'Subscribe to an event',
        tags: ['Subscription'],
        body: z.object({
          name: z.string().min(3).max(255),
          email: z.string().email(),
          referrer: z.string().nullish(),
        }),
      },
    },
    async (request, reply) => {
      const { email, name, referrer } = request.body

      const { subscriberId } = await subscribeToEvent({
        email,
        name,
        referrerId: referrer,
      })

      return reply.status(201).send({ subscriberId })
    }
  )
}
