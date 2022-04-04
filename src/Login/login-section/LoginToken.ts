const CLIENT_ID = process.env.KAKAO_CLIENT_ID_KEY
const REDIRECT_URI = "https://shop.simbaat.com/login"
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
