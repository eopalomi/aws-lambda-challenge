//import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

export const findByIdPeople = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'people/{idPeople}'
      },
    },
  ],
};
