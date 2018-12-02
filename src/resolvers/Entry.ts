import { EntryResolvers } from '../generated/graphqlgen';

export const Entry: EntryResolvers.Type = {
  ...EntryResolvers.defaultResolvers,

  createdBy: ({ id }, args, ctx) => {
    return ctx.prisma.entry({ id }).createdBy();
  },
};
