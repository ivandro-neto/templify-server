import { PrismaClient } from "@prisma/client"

export const client = new PrismaClient()

export const connect = async () =>{
  try {
    await client.$connect();
    return console.log("Connected.")
  } catch (error) {
      console.error("Cannot connect to the database...", error.message)
  }
}

export const disconnect = async () => await client.$disconnect()