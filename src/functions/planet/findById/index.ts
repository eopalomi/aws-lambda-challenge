//import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export const findByIdPlanet = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'planet/{idPlanet}'
      },
    },
  ],
};
