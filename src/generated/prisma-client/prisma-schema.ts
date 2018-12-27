export const typeDefs = /* GraphQL */ `type AggregateEntry {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Entry {
  id: ID!
  subject: String!
  amount: Float!
  currency: String!
  entryDate: DateTime!
  receiptDate: DateTime!
  receiptNumber: String!
  project: Project!
  receipt: String
  comment: String
  createdBy: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type EntryConnection {
  pageInfo: PageInfo!
  edges: [EntryEdge]!
  aggregate: AggregateEntry!
}

input EntryCreateInput {
  subject: String!
  amount: Float!
  currency: String
  entryDate: DateTime!
  receiptDate: DateTime!
  receiptNumber: String!
  project: ProjectCreateOneWithoutEntriesInput!
  receipt: String
  comment: String
  createdBy: UserCreateOneWithoutEntriesInput!
}

input EntryCreateManyWithoutCreatedByInput {
  create: [EntryCreateWithoutCreatedByInput!]
  connect: [EntryWhereUniqueInput!]
}

input EntryCreateManyWithoutProjectInput {
  create: [EntryCreateWithoutProjectInput!]
  connect: [EntryWhereUniqueInput!]
}

input EntryCreateWithoutCreatedByInput {
  subject: String!
  amount: Float!
  currency: String
  entryDate: DateTime!
  receiptDate: DateTime!
  receiptNumber: String!
  project: ProjectCreateOneWithoutEntriesInput!
  receipt: String
  comment: String
}

input EntryCreateWithoutProjectInput {
  subject: String!
  amount: Float!
  currency: String
  entryDate: DateTime!
  receiptDate: DateTime!
  receiptNumber: String!
  receipt: String
  comment: String
  createdBy: UserCreateOneWithoutEntriesInput!
}

type EntryEdge {
  node: Entry!
  cursor: String!
}

enum EntryOrderByInput {
  id_ASC
  id_DESC
  subject_ASC
  subject_DESC
  amount_ASC
  amount_DESC
  currency_ASC
  currency_DESC
  entryDate_ASC
  entryDate_DESC
  receiptDate_ASC
  receiptDate_DESC
  receiptNumber_ASC
  receiptNumber_DESC
  receipt_ASC
  receipt_DESC
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EntryPreviousValues {
  id: ID!
  subject: String!
  amount: Float!
  currency: String!
  entryDate: DateTime!
  receiptDate: DateTime!
  receiptNumber: String!
  receipt: String
  comment: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input EntryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  subject: String
  subject_not: String
  subject_in: [String!]
  subject_not_in: [String!]
  subject_lt: String
  subject_lte: String
  subject_gt: String
  subject_gte: String
  subject_contains: String
  subject_not_contains: String
  subject_starts_with: String
  subject_not_starts_with: String
  subject_ends_with: String
  subject_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  entryDate: DateTime
  entryDate_not: DateTime
  entryDate_in: [DateTime!]
  entryDate_not_in: [DateTime!]
  entryDate_lt: DateTime
  entryDate_lte: DateTime
  entryDate_gt: DateTime
  entryDate_gte: DateTime
  receiptDate: DateTime
  receiptDate_not: DateTime
  receiptDate_in: [DateTime!]
  receiptDate_not_in: [DateTime!]
  receiptDate_lt: DateTime
  receiptDate_lte: DateTime
  receiptDate_gt: DateTime
  receiptDate_gte: DateTime
  receiptNumber: String
  receiptNumber_not: String
  receiptNumber_in: [String!]
  receiptNumber_not_in: [String!]
  receiptNumber_lt: String
  receiptNumber_lte: String
  receiptNumber_gt: String
  receiptNumber_gte: String
  receiptNumber_contains: String
  receiptNumber_not_contains: String
  receiptNumber_starts_with: String
  receiptNumber_not_starts_with: String
  receiptNumber_ends_with: String
  receiptNumber_not_ends_with: String
  receipt: String
  receipt_not: String
  receipt_in: [String!]
  receipt_not_in: [String!]
  receipt_lt: String
  receipt_lte: String
  receipt_gt: String
  receipt_gte: String
  receipt_contains: String
  receipt_not_contains: String
  receipt_starts_with: String
  receipt_not_starts_with: String
  receipt_ends_with: String
  receipt_not_ends_with: String
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [EntryScalarWhereInput!]
  OR: [EntryScalarWhereInput!]
  NOT: [EntryScalarWhereInput!]
}

type EntrySubscriptionPayload {
  mutation: MutationType!
  node: Entry
  updatedFields: [String!]
  previousValues: EntryPreviousValues
}

input EntrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EntryWhereInput
  AND: [EntrySubscriptionWhereInput!]
  OR: [EntrySubscriptionWhereInput!]
  NOT: [EntrySubscriptionWhereInput!]
}

input EntryUpdateInput {
  subject: String
  amount: Float
  currency: String
  entryDate: DateTime
  receiptDate: DateTime
  receiptNumber: String
  project: ProjectUpdateOneRequiredWithoutEntriesInput
  receipt: String
  comment: String
  createdBy: UserUpdateOneRequiredWithoutEntriesInput
}

input EntryUpdateManyDataInput {
  subject: String
  amount: Float
  currency: String
  entryDate: DateTime
  receiptDate: DateTime
  receiptNumber: String
  receipt: String
  comment: String
}

input EntryUpdateManyMutationInput {
  subject: String
  amount: Float
  currency: String
  entryDate: DateTime
  receiptDate: DateTime
  receiptNumber: String
  receipt: String
  comment: String
}

input EntryUpdateManyWithoutCreatedByInput {
  create: [EntryCreateWithoutCreatedByInput!]
  delete: [EntryWhereUniqueInput!]
  connect: [EntryWhereUniqueInput!]
  disconnect: [EntryWhereUniqueInput!]
  update: [EntryUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [EntryUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [EntryScalarWhereInput!]
  updateMany: [EntryUpdateManyWithWhereNestedInput!]
}

input EntryUpdateManyWithoutProjectInput {
  create: [EntryCreateWithoutProjectInput!]
  delete: [EntryWhereUniqueInput!]
  connect: [EntryWhereUniqueInput!]
  disconnect: [EntryWhereUniqueInput!]
  update: [EntryUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [EntryUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [EntryScalarWhereInput!]
  updateMany: [EntryUpdateManyWithWhereNestedInput!]
}

input EntryUpdateManyWithWhereNestedInput {
  where: EntryScalarWhereInput!
  data: EntryUpdateManyDataInput!
}

input EntryUpdateWithoutCreatedByDataInput {
  subject: String
  amount: Float
  currency: String
  entryDate: DateTime
  receiptDate: DateTime
  receiptNumber: String
  project: ProjectUpdateOneRequiredWithoutEntriesInput
  receipt: String
  comment: String
}

input EntryUpdateWithoutProjectDataInput {
  subject: String
  amount: Float
  currency: String
  entryDate: DateTime
  receiptDate: DateTime
  receiptNumber: String
  receipt: String
  comment: String
  createdBy: UserUpdateOneRequiredWithoutEntriesInput
}

input EntryUpdateWithWhereUniqueWithoutCreatedByInput {
  where: EntryWhereUniqueInput!
  data: EntryUpdateWithoutCreatedByDataInput!
}

input EntryUpdateWithWhereUniqueWithoutProjectInput {
  where: EntryWhereUniqueInput!
  data: EntryUpdateWithoutProjectDataInput!
}

input EntryUpsertWithWhereUniqueWithoutCreatedByInput {
  where: EntryWhereUniqueInput!
  update: EntryUpdateWithoutCreatedByDataInput!
  create: EntryCreateWithoutCreatedByInput!
}

input EntryUpsertWithWhereUniqueWithoutProjectInput {
  where: EntryWhereUniqueInput!
  update: EntryUpdateWithoutProjectDataInput!
  create: EntryCreateWithoutProjectInput!
}

input EntryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  subject: String
  subject_not: String
  subject_in: [String!]
  subject_not_in: [String!]
  subject_lt: String
  subject_lte: String
  subject_gt: String
  subject_gte: String
  subject_contains: String
  subject_not_contains: String
  subject_starts_with: String
  subject_not_starts_with: String
  subject_ends_with: String
  subject_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  entryDate: DateTime
  entryDate_not: DateTime
  entryDate_in: [DateTime!]
  entryDate_not_in: [DateTime!]
  entryDate_lt: DateTime
  entryDate_lte: DateTime
  entryDate_gt: DateTime
  entryDate_gte: DateTime
  receiptDate: DateTime
  receiptDate_not: DateTime
  receiptDate_in: [DateTime!]
  receiptDate_not_in: [DateTime!]
  receiptDate_lt: DateTime
  receiptDate_lte: DateTime
  receiptDate_gt: DateTime
  receiptDate_gte: DateTime
  receiptNumber: String
  receiptNumber_not: String
  receiptNumber_in: [String!]
  receiptNumber_not_in: [String!]
  receiptNumber_lt: String
  receiptNumber_lte: String
  receiptNumber_gt: String
  receiptNumber_gte: String
  receiptNumber_contains: String
  receiptNumber_not_contains: String
  receiptNumber_starts_with: String
  receiptNumber_not_starts_with: String
  receiptNumber_ends_with: String
  receiptNumber_not_ends_with: String
  project: ProjectWhereInput
  receipt: String
  receipt_not: String
  receipt_in: [String!]
  receipt_not_in: [String!]
  receipt_lt: String
  receipt_lte: String
  receipt_gt: String
  receipt_gte: String
  receipt_contains: String
  receipt_not_contains: String
  receipt_starts_with: String
  receipt_not_starts_with: String
  receipt_ends_with: String
  receipt_not_ends_with: String
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  createdBy: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [EntryWhereInput!]
  OR: [EntryWhereInput!]
  NOT: [EntryWhereInput!]
}

input EntryWhereUniqueInput {
  id: ID
  receiptNumber: String
}

scalar Long

type Mutation {
  createEntry(data: EntryCreateInput!): Entry!
  updateEntry(data: EntryUpdateInput!, where: EntryWhereUniqueInput!): Entry
  updateManyEntries(data: EntryUpdateManyMutationInput!, where: EntryWhereInput): BatchPayload!
  upsertEntry(where: EntryWhereUniqueInput!, create: EntryCreateInput!, update: EntryUpdateInput!): Entry!
  deleteEntry(where: EntryWhereUniqueInput!): Entry
  deleteManyEntries(where: EntryWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  entries(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  users: UserCreateManyWithoutProjectsInput
  entries: EntryCreateManyWithoutProjectInput
}

input ProjectCreateManyWithoutUsersInput {
  create: [ProjectCreateWithoutUsersInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutEntriesInput {
  create: ProjectCreateWithoutEntriesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutEntriesInput {
  name: String!
  users: UserCreateManyWithoutProjectsInput
}

input ProjectCreateWithoutUsersInput {
  name: String!
  entries: EntryCreateManyWithoutProjectInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  users: UserUpdateManyWithoutProjectsInput
  entries: EntryUpdateManyWithoutProjectInput
}

input ProjectUpdateManyDataInput {
  name: String
}

input ProjectUpdateManyMutationInput {
  name: String
}

input ProjectUpdateManyWithoutUsersInput {
  create: [ProjectCreateWithoutUsersInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneRequiredWithoutEntriesInput {
  create: ProjectCreateWithoutEntriesInput
  update: ProjectUpdateWithoutEntriesDataInput
  upsert: ProjectUpsertWithoutEntriesInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutEntriesDataInput {
  name: String
  users: UserUpdateManyWithoutProjectsInput
}

input ProjectUpdateWithoutUsersDataInput {
  name: String
  entries: EntryUpdateManyWithoutProjectInput
}

input ProjectUpdateWithWhereUniqueWithoutUsersInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutUsersDataInput!
}

input ProjectUpsertWithoutEntriesInput {
  update: ProjectUpdateWithoutEntriesDataInput!
  create: ProjectCreateWithoutEntriesInput!
}

input ProjectUpsertWithWhereUniqueWithoutUsersInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutUsersDataInput!
  create: ProjectCreateWithoutUsersInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  entries_every: EntryWhereInput
  entries_some: EntryWhereInput
  entries_none: EntryWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  entry(where: EntryWhereUniqueInput!): Entry
  entries(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry]!
  entriesConnection(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EntryConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Roles {
  Owner
  Admin
  Employee
}

type Subscription {
  entry(where: EntrySubscriptionWhereInput): EntrySubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  role: Roles!
  entries(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry!]
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  role: Roles!
  entries: EntryCreateManyWithoutCreatedByInput
  projects: ProjectCreateManyWithoutUsersInput
}

input UserCreateManyWithoutProjectsInput {
  create: [UserCreateWithoutProjectsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutEntriesInput {
  create: UserCreateWithoutEntriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEntriesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  role: Roles!
  projects: ProjectCreateManyWithoutUsersInput
}

input UserCreateWithoutProjectsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  role: Roles!
  entries: EntryCreateManyWithoutCreatedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  role: Roles!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: Roles
  role_not: Roles
  role_in: [Roles!]
  role_not_in: [Roles!]
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  role: Roles
  entries: EntryUpdateManyWithoutCreatedByInput
  projects: ProjectUpdateManyWithoutUsersInput
}

input UserUpdateManyDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  role: Roles
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  password: String
  role: Roles
}

input UserUpdateManyWithoutProjectsInput {
  create: [UserCreateWithoutProjectsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutProjectsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutProjectsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutEntriesInput {
  create: UserCreateWithoutEntriesInput
  update: UserUpdateWithoutEntriesDataInput
  upsert: UserUpsertWithoutEntriesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutEntriesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  role: Roles
  projects: ProjectUpdateManyWithoutUsersInput
}

input UserUpdateWithoutProjectsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  role: Roles
  entries: EntryUpdateManyWithoutCreatedByInput
}

input UserUpdateWithWhereUniqueWithoutProjectsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutProjectsDataInput!
}

input UserUpsertWithoutEntriesInput {
  update: UserUpdateWithoutEntriesDataInput!
  create: UserCreateWithoutEntriesInput!
}

input UserUpsertWithWhereUniqueWithoutProjectsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: Roles
  role_not: Roles
  role_in: [Roles!]
  role_not_in: [Roles!]
  entries_every: EntryWhereInput
  entries_some: EntryWhereInput
  entries_none: EntryWhereInput
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`