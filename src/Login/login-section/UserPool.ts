import {CognitoUserPool} from "amazon-cognito-identity-js"
//aws cognito api data
const userPool = {
    UserPoolId: process.env.NEXT_PUBLIC_AWS_USERPOOL_KEY as string,
    ClientId: process.env.NEXT_PUBLIC_AWS_CLIENT_KEY as string,
}

export default new CognitoUserPool(userPool)
