import type { AuthOptions, User as UserType } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcryptjs from 'bcryptjs'
import { findUserByEmail } from '../mongodb/fetchingUsers'

export const authConfig: AuthOptions = {
    session: {
        strategy: 'jwt',
    },

    providers: [
        CredentialsProvider({
            name: 'Email and Password',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@gmail.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            authorize: async (credentials) => {
                const data = await findUserByEmail(credentials!.email)
                const { user } = data

                if (user && bcryptjs.compareSync(credentials!.password, user.password)) {
                    return {
                        id: user._id,
                        name: user.username,
                        email: user.email,
                        image: user.profilePic,
                        isAdmin: user.isAdmin,
                    } as UserType
                }

                throw new Error('Invalid email or password')
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }: any) {
            if (user?.id) token.id = user.id
            if (user?.isAdmin) token.isAdmin = user.isAdmin
            return token
        },

        async session({ session, token }) {
            if (token?.id) session.user.id = token.id
            if (token?.isAdmin) session.user.isAdmin = token.isAdmin
            return session
        },
    },

    pages: {
        signIn: '/auth/signin'
    }
}