import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepositorys";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({ email, password }: IRequest): Promise<IResponse>{
    // User exist?
    const user  = await this.usersRepository.findByEmail(email);

    if  (!user) {
      throw new AppError("Email or password incorrect!",)
    }

    // Password is correct?
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!")
    }

    // If all conditions above are correct, generate JsonWebToken
    const token = sign ({}, "25df469aa0aac669b2d8d72e97a4188c", {
      subject: user.id,
      expiresIn: "1d"
    });

    //tokenReturn do tipo IResponse
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase }
