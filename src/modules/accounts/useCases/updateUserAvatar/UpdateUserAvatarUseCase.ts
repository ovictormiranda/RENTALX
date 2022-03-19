import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
    //add avatar column on users table
    //yarn typeorm migration:create -n AlterUserAddAvatar


import { IUsersRepository } from "../../repositories/IUsersRepository";

    // Refactor user table with avatar column
    //set up multer upload
    // create a business rule to upload
    // create controller

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file}: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase }
