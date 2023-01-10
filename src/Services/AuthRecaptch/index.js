import axios from 'axios'
import { KEY_CLIENT } from '../../Config/config'

export async function RecaptchaVerifieToken(token) {
    try {
        console.log(`RecaptchaVerifie token ${tokrn} `);
        return await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${KEY_CLIENT}&response=${token}`);
    } catch (e) {
        console.log(e.message)
    }
}