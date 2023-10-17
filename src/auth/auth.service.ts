import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) { }

    public async signIn(username: string, password: string): Promise<string> {
        // @TODO: check user exists in DB

        return 'Sign in was successfull';
    }
}
