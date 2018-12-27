import { UserResolvers } from '../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  entries: ({ id }, args, ctx) => {
    return ctx.prisma.user({ id }).entries();
  },
  projects: ({ id }, args, ctx) => {
    return ctx.prisma.user({ id }).projects();
  },
};
