import {CognitoUserPool} from "amazon-cognito-identity-js"
//aws cognito api data
const userPool = {
    UserPoolId: process.env.NEXT_PUBLIC_AWS_USERPOOL_KEY as string,
    ClientId: process.env.NEXT_PUBLIC_AWS_CLIENT_KEY as string,
}

export default new CognitoUserPool(userPool)

const CLIENT_ID = process.env.KAKAO_CLIENT_ID_KEY
const REDIRECT_URI = "https://shop.simbaat.com/login"
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
