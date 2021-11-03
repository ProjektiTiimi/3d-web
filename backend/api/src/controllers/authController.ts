import '../auth/passportHandler';
import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import * as jwt from 'jsonwebtoken';
import { SECRETKEY } from '../config/config'

export class AuthController {
    public authenticateJWT(req: Request, res: Response, next: NextFunction){
        passport.authenticate('jwt', function(err, user, info){
            if (err){
                return res.status(401).json({
                    status: 'error',
                    code: 'Unauthorized'
                })
            }

            if (!user){
                return res.status(401).json({
                    status: 'error',
                    code: 'Unauthorized'
                })
            } else {
                return next();
            }
        }) (req, res, next)
    }

    public authorizeJWT(req: Request, res: Response, next: NextFunction){
        passport.authenticate('jwt', function(err, user, jwtToken){
            if (err){
                return res.status(401).json({
                    status: 'error',
                    code: 'Unauthorized'
                })
            }

            if (!user){
                return res.status(401).json({
                    status: 'error',
                    code: 'Unauthorized'
                })
            } else {
                const scope = req.baseUrl.split('/').slice(-1)[0];
                const authScope = jwtToken.scope;
                if (authScope && authScope.indexOf(scope) > -1) {
                    return next
                }
                else { 
                    return res.status(401).json({
                        status: 'error',
                        code: 'unauthorized'
                    })
                }
            }
        })(req,res, next)
    }

}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Verify token, first check if the token is in the http headers
    // On postman use Headers and add key: x-access-token
    let token = req.headers['x-access-token']?.toString();

    // No token provided
    if (!token){
        return res.status(403).json({
            message: "No auth token provided"
        })
    }
    // Check if token is authorized
    jwt.verify(token, SECRETKEY, (err: any, decoded: any )=>{
        if (err){
            return res.status(401).json({
                message: "Unauthorized access token"
            })
        }

        // Everything is ok, proceed to next function
        next();
    })
}

const authJwt = {
    verifyToken: verifyToken
}

export default authJwt;