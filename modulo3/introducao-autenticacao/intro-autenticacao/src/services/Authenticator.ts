import jwt from 'jsonwebtoken';
import { authenticatorData } from '../types';

export default class Authenticator {
    generateToken = (payload: authenticatorData) => {
        return jwt.sign(
            payload,
            "senhaSuperSegura",
            {
                expiresIn: "5h"
            }
        )
    }

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token, "senhaSuperSegura",
        )

        return tokenData
    }
}