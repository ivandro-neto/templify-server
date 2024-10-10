import { PrismaClient } from "@prisma/client"

export const client = new PrismaClient()

export const connect = async () =>{
  try {
    await client.$connect();
    return console.log("Connected.")
  } catch (error) {
    throw new Error("Cannot connect to the database...")
  }
}

export const disconnect = async () => await client.$disconnect()