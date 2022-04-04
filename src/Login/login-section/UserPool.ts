import {CognitoUserPool} from "amazon-cognito-identity-js"

const userPool = {
    UserPoolId: process.env.AWS_COGNITO_USERPOOL_KEY as string,
    ClientId: process.env.AWS_COGNITO_CLIENT_KEY as string,
}

export default new CognitoUserPool(userPool)
