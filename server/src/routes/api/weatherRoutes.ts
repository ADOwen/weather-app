import { Router, type Request, type Response } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (_req: Request, res: Response) => {
  // TODO: GET weather data from city name
  // TODO: save city to search history
  res.json("HEre is the city name")
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  res.json("Here is the history");
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req: Request, res: Response) => {
  res.json(`You are trying to delete ${_req.params.id} `)
});

export default router;
