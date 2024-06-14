/* eslint-disable no-console */
// eslint-disable-next-line no-shadow
import express, {Request, Response} from 'express';

/**
 * The express application instance.
 *
 */
const app = express();

/**
 * The port the server will listen on.
 *
 */
const port = process.env.PORT || 3000;

// app.get('/endpoint/:param', (req: Request, res: Response) => {
//   try {
//     const {some} = req.params;
//     res.status(200).json({some});
//   } catch (error) {
//     console.error('Error occurred:', error);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// });

/**
 * Health check endpoint, for launching integration tests / checking if the server is running
 * without having to query the main endpoint.
 *
 */
app.get('/healthCheck', (req: Request, res: Response) => {
  res.status(200).json({ok: true});
});

/**
 * Endpoint not found / bad query handler.
 *
 */
app.use((req: Request, res: Response) => {
  res.status(400).json({
    error: 'Endpoint not found/ Bad query, check if your query is correct.'
  });
});

/**
 * Parses the tsv file, feeds the data structure (queryMapByTimeStamp) and starts the server.
 *
 */
// eslint-disable-next-line require-await
app.listen(port, async () => {
  try {
    console.log('Ready');
  } catch (error) {
    console.error('Error occurred while parsing the tsv file and processing data:', error);
    throw error;
  }
});
