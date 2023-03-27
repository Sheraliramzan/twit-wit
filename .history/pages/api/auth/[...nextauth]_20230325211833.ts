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
                
            }
        }),
    ]
});
