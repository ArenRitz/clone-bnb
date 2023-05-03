# Clone-BnB

Welcome to **Clone-BnB**, an Airbnb clone project built with the aim to learn TypeScript and Next.js! This project is a fun, casual, and light-hearted take on creating an Airbnb-like application. 🏡✨

You can check out the live demo of Clone-BnB here: [https://clone-bnb-beta.vercel.app/](https://clone-bnb-beta.vercel.app/)


## Tech Stack & Libraries

Clone-BnB leverages a powerful combination of cutting-edge technologies and libraries to create a seamless and engaging user experience. The core components of the tech stack include:

- **TypeScript**: TypeScript serves as the foundation of the project, offering type safety and improved code readability.
- **Next.js 13**: The application takes advantage of the latest Next.js release, which delivers automatic static optimization, server-side rendering, and API routes for a robust development experience.
- **Prisma**: I used Prisma as the ORM to simplify database management, making data access and manipulation more efficient and convenient.
- **TailwindCSS**: TailwindCSS, a utility-first CSS framework, streamlines the process of styling UI components, allowing for rapid development without the need for custom CSS classes.
- **Zustand**: Zustand, a lightweight state management library, enables easy management and sharing of state across components.

In addition to these core technologies, you'll find a range of other libraries and frameworks in the `package.json` file. Feel free to explore the repository for a comprehensive overview!

## Getting Started

To set up Clone-BnB on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/ArenRitz/clone-bnb.git
   ```
2. Navigate to the project folder:
   ```
   cd clone-bnb
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env.local` file in the root directory of the project and add the following environment variables:

   ```
   DATABASE_URL=<your_database_url>
   NEXTAUTH_SECRET=<your_nextauth_secret>
   GITHUB_ID=<your_github_id>
   GITHUB_SECRET=<your_github_secret>
   GOOGLE_ID=<your_google_id>
   GOOGLE_CLIENT_SECRET=<your_google_client_secret>
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   ```

   Replace the placeholder values with your actual API keys and other required information.

5. Run the development server:
   ```
   npm run dev
   ```
6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application running.

Now you're all set to explore and work on Clone-BnB locally!

Have fun exploring Clone-BnB, and feel free to drop a ⭐ if you like the project! Happy coding! 😄