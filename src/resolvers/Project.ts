import { ProjectResolvers } from '../generated/graphqlgen';

export const Project: ProjectResolvers.Type = {
  ...ProjectResolvers.defaultResolvers,
  users: ({ id }, args, ctx) => {
    return ctx.prisma.project({ id }).users();
  },
  entries: ({ id }, args, ctx) => {
    return ctx.prisma.project({ id }).entries();
  },
};
