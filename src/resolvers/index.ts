import { Resolvers } from '../generated/graphqlgen';

import { Query } from './Query';
import { User } from './User';
import { Entry } from './Entry';
import { Project } from './Project';
import { Mutation } from './Mutation';
import { AuthPayload } from './AuthPayload';

export const resolvers: Resolvers = {
  Query,
  User,
  Entry,
  Project,
  Mutation,
  AuthPayload,
};
