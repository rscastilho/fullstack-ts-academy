import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

export const connection = () => {
  const con = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 3,
    ssl: {
      //linha quando estiver localhost
      rejectUnauthorized: false,
      //alterar para linha abaixo quando colocar no planetscale
      //rejectUnauthorized: true,
    },
  });
  return con;
};