import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
});

export { authOptions as GET, authOptions as POST };
