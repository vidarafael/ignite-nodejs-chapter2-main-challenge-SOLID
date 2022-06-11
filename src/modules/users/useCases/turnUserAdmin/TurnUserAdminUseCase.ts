import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }

    this.usersRepository.turnAdmin(user);

    return user;
  }
}

export { TurnUserAdminUseCase };