import { NextFunction, Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import _userRepository from '../../repository/userRepository/userRepository';
import { connection } from './../../data/dbConnect';
import fs from 'fs';

export const avatarExists = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);

  const pickAvatar = await _userRepository.pickAvatar(+req.params.id);
  const pickedAvatar: RowDataPacket[] = await connection().promise().query(pickAvatar.query, pickAvatar.fields);
  console.log(pickedAvatar);

  pickedAvatar[0].map((imgEncontrada: any) => {
    fs.readdir('src/public/avatar', (err, data) => {
      data.map((img) => {
        if (img === imgEncontrada.avatar) {
          fs.unlinkSync(`src/public/avatar/${imgEncontrada.avatar}`);
          return;
        } else {
          next();
        }
      });
    });
  });
  next()
};
