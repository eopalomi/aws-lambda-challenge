import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import peopleService from 'src/people/service/index';

const people = async (event: APIGatewayProxyEvent):Promise<APIGatewayProxyResult> => {
  const {idPeople} = event.pathParameters as {idPeople: string}
  
  const people = await peopleService.getPeople(idPeople);

  return formatJSONResponse({
    people
  });
};

export const main = people;
