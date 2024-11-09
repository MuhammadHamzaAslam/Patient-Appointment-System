import connectDB from "@/lib/connectDB";
import { UserModal } from "@/lib/models/userModal";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

async function HandleLogin(obj) {
  await connectDB();
  const user = await UserModal.findOne({ email: obj.email });
  if (user) {
    return user;
  } else {
    let newUser = await UserModal(obj);
    newUser = newUser.save();
    return newUser
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        // console.log("account =>" , account);
        console.log("profile =>", profile);
        let obj = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          picture: profile.picture,
        };
        const user = await HandleLogin(obj);
        return user; // Do different verification for other providers that don't have `email_verified`
      }
    },
    async jwt({ token }) {
      const user = await HandleLogin({email : token.email})
      // console.log("user in jwt" , user);
      token._id = user._id
      token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user._id = token._id
      session.user.role = token.role
      return session
    },
  },
});
