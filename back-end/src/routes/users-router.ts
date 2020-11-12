import { Router } from 'express';
import UserService from '../services/UsersService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new UserService();

  const user = await createUser.excute({
    name,
    email,
    password,
  });

  user.password = 'hidden';

  return response.json(user);
});

export default usersRouter;
