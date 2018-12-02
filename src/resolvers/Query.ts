import { QueryResolvers } from '../generated/graphqlgen';
import { getUserId } from '../utils';
import { Context } from '../types';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  me: (parent: any, args: any, context: Context) => {
    const userId = getUserId(context);
    return context.prisma.user({ id: userId });
  },
  entry: (parent, { id }: any, context) => {
    return context.prisma.entry({ id });
  },
};
