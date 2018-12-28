import { MutationResolvers } from '../generated/graphqlgen';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { APP_SECRET } from '../utils';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  signup: async (_: any, { firstName, lastName, email, password, projectName }, context: any) => {
    let project = await context.prisma.project({ name: projectName });
    if (!project) {
      try {
        project = context.prisma.createProject({ name: projectName });
      } catch (error) {
        throw new Error('E0003: Project could not be created!');
      }
    }

    const user = await context.prisma.user({ email });
    if (user) throw new Error('E0004: A user with this email already exists!');

    const hashedPassword = await hash(password, 10);
    try {
      const newUser = await context.prisma.createUser({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        projects: [
          {
            connect: {
              name: project.name,
            },
          },
        ],
      });

      return {
        token: sign({ userId: user.id }, APP_SECRET),
        user: newUser,
      };
    } catch (error) {
      throw new Error('E0005: User could not be created' + error.message);
    }
  },

  login: async (parent: any, { email, password }, context: any) => {
    const user = await context.prisma.user({ email });
    if (!user) {
      throw new Error(`E0001: No user found for email: ${email}`);
    }

    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error('E0001: Invalid password');
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
};
