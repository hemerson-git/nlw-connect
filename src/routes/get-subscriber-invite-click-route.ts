import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInviteClicks } from '../functions/get-subscriber-invite-clicks'

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscriber/:subscriberId/ranking/clicks',
      {
        schema: {
          summary: 'Get subscriber invite clicks',
          tags: ['Referral'],
          params: z.object({
            subscriberId: z.string().min(3).max(255),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = request.params

        const { count } = await getSubscriberInviteClicks({ subscriberId })

        return { count }
      }
    )
  }
