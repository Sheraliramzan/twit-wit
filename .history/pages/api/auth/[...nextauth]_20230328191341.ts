import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../libs/prismadb';
import GithubProvider from 'next-auth/providers/github';

require('dotenv').config();



export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProviders({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password) {
                    throw new Error('Please provide a username and password');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user?.hashedPassword) {
                    throw new Error('No user found');
                }

                const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

                if (!isCorrectPassword) {
                    throw new Error('Incorrect password');
                }

                return user;
            }
        }),

        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID ,
            clientSecret: "abb140b8a8f54958e90cb7594a37d7353525fd7c"
        }),
    ],
    debug: process.env.NODE_ENV === 'development',

    session:{
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});
