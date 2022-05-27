import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
//import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from 'lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // })
  ],

  // database: process.env.DATABASE_URL,
  secret: process.env.SECRET,

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  jwt: {
    secret: process.env.SECRET, //use the random secret token you used for .env also here
    encryption: true
  },

  pages: {},

  callbacks: {},

  events: {},

  theme: "light",

  debug: true,
  adapter: PrismaAdapter(prisma)
})