import { PrismaClient } from "@prisma/client";

declare global {
    var cli: PrismaClient | undefined;

}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "production") globalThis.prisma = client;

export default client;