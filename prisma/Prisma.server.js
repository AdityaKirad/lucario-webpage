import { PrismaClient } from '@prisma/client';

let Prisma;

if (process.env.NODE_ENV === "production") {
    Prisma = new PrismaClient();
} else {
    if(!global.Prisma) {
        global.Prisma = new PrismaClient();
    }
    Prisma = global.Prisma;
}

export  { Prisma };