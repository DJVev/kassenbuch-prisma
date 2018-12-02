import { Prisma, User } from './generated/prisma-client';

export interface Context {
  prisma: Prisma;
  request: any;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface User {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
}
