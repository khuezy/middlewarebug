import NextAuth, { NextAuthOptions } from 'next-auth'
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter"
import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import Google from 'next-auth/providers/google'

const client = DynamoDBDocument.from(new DynamoDB({}), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true
  }
})
export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'select_account'
        }
      }
    })
  ],
  adapter: DynamoDBAdapter(client),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  },
}
export default NextAuth(authOptions)