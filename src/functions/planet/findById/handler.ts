import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import planetService from 'src/planet/service/index';

const planet = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const { idPlanet } = event.pathParameters as { idPlanet: string }

  const planet = await planetService.getPlanet(idPlanet);

  if (!planet) {
    return formatJSONResponse({ error: 'Planeta no encontrado' }, 404);
  }

  return formatJSONResponse({
    planet
  }, 200);
};

export const main = planet;
