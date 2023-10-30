import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    public async signIn(username: string, password: string): Promise<string> {
        // @TODO: check user exists in DB

        return 'Sign in was successfull';
    }
}
