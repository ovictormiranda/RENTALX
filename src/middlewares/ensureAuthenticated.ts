import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  //This token exist?
  if (!authHeader) {
    throw new AppError("Token missing!", 401)
  }

  // if exist, we have to unstructure it. Remember, the pattern is Bearer 'space'+ token, so lets break it.
  // ex: Bearer dasdbn8vdnfusf-safasddjer
  // just split by space and get the right side information to store in a variable called token.

  const [, token] = authHeader.split(" ")
  //once that we get the token, we need to verify it using a native function of JsonWebToken called 'verify', very sugestive.
  //to use that function we have to send to a token and our secret key that was made in AuthenticationUserUseCase
  //how does verify works? if thats all right, ok. U shall pass! But and if not?
  // if get some error, the verify calls an exception, so the better way to handle with it
  //is using a 'try catch'.
  try {
    //but, to use this token we have to decode his information.
    const { sub: user_id } = verify(
      token,
      "25df469aa0aac669b2d8d72e97a4188c"
    ) as IPayload;
    console.log(user_id);

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError ("User doesn't exist!", 401);
    }

    //sobreescrever tipo da biblioteca do express, verificar src/@types/express
    request.user = {
      id: user_id
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}


