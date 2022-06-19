import express from 'express';

const app = express();

app.use(express.json());

// app.use('/specifications', specificationsRouter);

app.listen(3333, () => console.log('server is running on: 3333!'));
