import Credentials from "next-auth/providers/credentials";
// import { getUserByEmail } from "./lib/user";
const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const user = { email: "alisadaintanvir@gmail.com", password: "ss" };

        if (
          user.email === credentials.email &&
          user.password === credentials.password
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
};

export default authConfig;
