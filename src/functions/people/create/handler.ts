import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import peopleService from 'src/people/service/index';

const people = async (event: APIGatewayProxyEvent, context: Context):Promise<APIGatewayProxyResult> => {
  const bodyPeople = JSON.parse(event.body) as {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string
  };

  const idPeople = await peopleService.savePeople(bodyPeople);

  return formatJSONResponse({
    idPeople,
    awsRequestId: context.awsRequestId
  });
};

export const main = people;
