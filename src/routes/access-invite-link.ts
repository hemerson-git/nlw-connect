import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { subscribeToEvent } from '../functions/subscribe-to-event'
import { env } from '../env'
import { AccessInviteLink } from '../functions/access-invite-link'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberId',
    {
      schema: {
        summary: 'Access Invite link and redirects user',
        tags: ['Referral'],
        params: z.object({
          subscriberId: z.string().min(3).max(255),
        }),
        response: {
          200: z.object({}),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await AccessInviteLink({ subscriberId })

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
