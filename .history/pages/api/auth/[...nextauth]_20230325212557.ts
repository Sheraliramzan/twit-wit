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
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            asyc authorize(credentials) {
                if(!credentials?.username || !credentials?.password) {
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
            }
        }),
    ]
});
