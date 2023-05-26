import { Request, Response } from 'express';
import loginService from '../services/login.services';
import { TypeResponse } from '../types/responseType';

async function loginServices(req: Request, res: Response) {
  const servicesResponse:TypeResponse = await loginService.LoginUser(req.body);

  if (servicesResponse.status !== 200) {
    return res.status(servicesResponse.status)
      .json(servicesResponse.data);
  }
  res.status(200).json(servicesResponse.data);
}

export default {
  loginServices,
};