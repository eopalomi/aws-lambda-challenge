import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import planetService from 'src/planet/service/index';

const people = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body) as {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: Array<string>,
    films: Array<string>,
    created: string,
    edited: string,
    url: string
  };

  const planet = await planetService.savePlanet(body);

  return formatJSONResponse({
    planet
  }, 200);
};

export const main = people;
