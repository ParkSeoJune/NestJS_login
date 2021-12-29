import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { Login } from './dto/LoginDto';


// 요청, 응답에 대홰서는 모름
@Injectable()
export class LoginService {
    private login: Login[] = [
      new Login('par1', '박서준')
    ];

    findAll() : Promise<Login[]> {
        return new Promise((resolve) => // 
            setTimeout(
                () => resolve(this.login),
                100,
            ),
        );
    }

    findOne(id:string) : Login | object {
        const foundOne = this.login.filter(login => login.id === id);
        return foundOne.length ? foundOne[0] : {msg: 'nothing'};
    }

    saveUser(loginDto: Login) : void {
        this.login = [...this.login, loginDto];
    }
}

