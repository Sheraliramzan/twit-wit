import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../libs/prismadb';

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProviders({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            asyc authorize(credentials) {
                if(!credentials?.username || !credentials?.password) {
                    throw new Error('Please provide a username and password');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        e
                    },
                });
            }
        }),
    ]
});
