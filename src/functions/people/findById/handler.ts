import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import peopleService from 'src/people/service/index';

const people = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { idPeople } = event.pathParameters as { idPeople: string }

  const people = await peopleService.getPeople(idPeople);

  if (!people) {
    return formatJSONResponse({
      error: "people not found"
    }, 200);
  }

  return formatJSONResponse({
    people
  }, 200);
};

export const main = people;
