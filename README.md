# links.anav.dev 🔗

This is a link management web application I built for myself. The user-facing site (homepage) looks like a links in bio page similar to LinkTree, while the admin dashboard lets me organize my links by shortening and rerouting them.

[demo.webm](https://github.com/user-attachments/assets/e9b231ee-83b7-48f9-8dce-e0510824e58d)

## Technologies Used

- SvelteKit 5
- TailwindCSS
- Prisma ORM
- Neon PostgreSQL
- Umami Analytics

## Getting Started

This apps styling is based on my personal website, [anav.dev](https://anav.dev). This applies for both the user and admin pages. So if you want to use this for yourself, you will have to change all the styling yourself.

If you are ok with that, first fork and clone the repo. Then, run `pnpm install` to download all the dependencies. Now, set up your environmental variables. Make a `.env` file in the root of your project with the following variables:

```sh
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/database
PASSWORD=secure-password
```

The `PASSWORD` variable will hold your actual password, which you will have to enter in the login page. Once you have added your variables, run `pnpm dev` to view it on [localhost:5173](http://localhost:5173).
  
## Learning Resources

- [SvelteKit Drag And Drop List](https://youtu.be/sFX525V3dMs)
- [Add Prisma ORM To SvelteKit](https://www.prisma.io/blog/sveltekit-prisma-kvCOEoeQlC)
- [SvelteKit 5 Docs](https://svelte.dev/)
