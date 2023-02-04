import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

// export const connection = ()=> {
//   const con = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     waitForConnections: true,
//     connectionLimit: 3,
//   });
//   return con;
// }
export const connection = () => {
  const con = mysql.createPool({
    host: 'us-east.connect.psdb.cloud',
    user: 'tj2xbswqtczta25wf4gi',
    password: 'pscale_pw_C9ECO9rDmxsoAPmo6W7OwFyEcbRMEIiFb41nx82LKVW',
    database: 'mydbonline',
    waitForConnections: true,
 connectionLimit: 3,
 ssl:{
  "rejectUnauthorized":true
 }
  });
  return con;
};

require('dotenv').config();

// const connection = mysql.createConnection(process.env.DATABASE_URL)
// console.log('Connected to PlanetScale!')
// connection.end()

// export const connection = () => {
//   const con = mysql.createConnection(
//     'mysql://tj2xbswqtczta25wf4gi:pscale_pw_C9ECO9rDmxsoAPmo6W7OwFyEcbRMEIiFb41nx82LKVW@us-east.connect.psdb.cloud/mydbonline?ssl={"rejectUnauthorized":true}'
//   );

// const con = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   waitForConnections: true,
//   connectionLimit: 3,
// // });
// return con;
// };
