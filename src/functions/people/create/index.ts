//import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';
import schema from './schema';

export const createPeople = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'people',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
