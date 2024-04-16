import { PrismaClient } from  "@prisma/client"
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        name:"Alice",
        email: "alice@prisma.io",
        posts:{
            create: {title: "Hello World"}
        },
        profile:{
            create: {bio: "I like turtles"}
            
        }
    })

    const allUsers = await prisma.user.findMany({
        include: {
            post: true,
            profile: true
        }
    })
    console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })