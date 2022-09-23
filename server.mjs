import express from 'express'

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Railway')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
