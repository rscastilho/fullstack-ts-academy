import app from './application/server/server';
const port = process.env.PORT || 3333;



app.app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});


