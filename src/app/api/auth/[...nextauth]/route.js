import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // Add user id and other GitHub data to session
      session.user.id = token.sub
      session.user.login = token.login
      return session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and GitHub login to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.login = profile.login
      }
      return token
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }
