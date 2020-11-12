import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/ModelUsers';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class UserService {
  public async excute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address alreday used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default UserService;
