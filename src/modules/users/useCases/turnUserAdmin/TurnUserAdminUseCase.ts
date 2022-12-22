import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userNow = this.usersRepository.findById(user_id)

    if(!userNow) {
     throw new Error("User not Found!")
    }
    const user = this.usersRepository.turnAdmin(userNow)
    return user;
  }
}

export { TurnUserAdminUseCase };
