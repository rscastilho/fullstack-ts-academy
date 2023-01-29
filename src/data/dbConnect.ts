import mysql from 'mysql2';

export const connection = ()=> {
  const con = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 3,
  });
  return con;
}


