import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userIsAdmin = this.usersRepository.findById(user_id);

    if (!user_id) {
      throw new Error("No permission to list users");
    }

    if (userIsAdmin.admin === false) {
      throw new Error("No permission to list users");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
