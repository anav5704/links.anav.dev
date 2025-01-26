import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const links = await prisma.link.createMany({
        data: [
            {
                title: 'Personal Website',
                subtitle: 'Professional portfolio',
                slug: 'portfolio',
                url: 'https://mywebsite.com',
            },
            {
                title: 'GitHub Profile',
                subtitle: 'Open source projects',
                slug: 'github',
                url: 'https://github.com/username',
            },
            {
                title: 'LinkedIn',
                subtitle: 'Professional network',
                slug: 'linkedin',
                url: 'https://linkedin.com/in/username',
            },
            {
                title: 'Twitter',
                subtitle: 'Social media profile',
                slug: 'twitter',
                url: 'https://twitter.com/username',
            },
            {
                title: 'Medium Blog',
                subtitle: 'Technical writing',
                slug: 'blog',
                url: 'https://medium.com/@username',
            },
            {
                title: 'Dribbble',
                subtitle: 'Design portfolio',
                slug: 'design',
                url: 'https://dribbble.com/username',
            },
            {
                title: 'Stack Overflow',
                subtitle: 'Developer profile',
                slug: 'stackoverflow',
                url: 'https://stackoverflow.com/users/username',
            },
            {
                title: 'CodePen',
                subtitle: 'Frontend projects',
                slug: 'codepen',
                url: 'https://codepen.io/username',
            },
            {
                title: 'Dev.to',
                subtitle: 'Community writings',
                slug: 'devto',
                url: 'https://dev.to/username',
            },
            {
                title: 'YouTube Channel',
                subtitle: 'Tech tutorials',
                slug: 'youtube',
                url: 'https://youtube.com/c/username',
            }
        ]
    })

    console.log('10 links seeded successfully')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })