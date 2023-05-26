import bcrypt from 'bcryptjs';
import jwtUtils from '../auth/jwt.utils';
import UserModel from '../database/models/user.model';
import { Login } from '../types/login.type';
import { TypeResponse } from '../types/responseType';

async function LoginUser(login: Login): Promise<TypeResponse> {
  if (!login.username || !login.password) {
    return {
      status: 400,
      data: { message: '"username" and "password" are required' },
    };
  }

  const usuario = await UserModel.findOne({ where: { username: login.username } });

  if (!usuario || !bcrypt.compareSync(login.password, usuario.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { username, password } = usuario.dataValues;
  const token = jwtUtils.generateToken({ username, password });
  return { status: 200, data: { token } };
}

export default {
  LoginUser,
};