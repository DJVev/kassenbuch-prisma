import { MutationResolvers } from '../generated/graphqlgen';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { APP_SECRET } from '../utils';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup: async (_: any, { firstName, lastName, email, password, projectName }, context: any) => {
    const project = await context.prisma.project({ name: projectName });
    console.log(project);
    if (!project) throw new Error('Project not found');
    const hashedPassword = await hash(password, 10);
    const user = await context.prisma.createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
  login: async (parent: any, { email, password }, context: any) => {
    const user = await context.prisma.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid password');
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
};
