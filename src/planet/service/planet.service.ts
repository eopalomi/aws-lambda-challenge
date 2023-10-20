import axios, { AxiosResponse } from "axios";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import translate from 'translate-google';
import Planet from "src/planet/model/planet.model";

export default class PlanetService {
    constructor(private dynamoDBClient: DocumentClient) { }

    async getPlanet<T>(id: string): Promise<T | null> {
        try {
            const { data }: AxiosResponse<Planet> = await axios.get<Planet>(`https://swapi.dev/api/planets/${id}`);

            const keys = Object.keys(data);
            const translationPromises: Promise<{ key: string, translatedKey: string }>[] = [];

            keys.forEach((key) => {
                const translatedKeyPromise = translate(key.replaceAll('_', ' '), { from: 'en', to: 'es' })
                    .then((translatedKey) => {
                        const newKey = this.removeAccents(translatedKey.replaceAll(' ', '_'));
                        return { key, translatedKey: newKey };
                    })
                    .catch((error) => {
                        throw new Error(`Error translating key: ${key} Error: ${error}`);
                    });

                translationPromises.push(translatedKeyPromise);
            });

            const translatedKeys = await Promise.all(translationPromises);

            const translatedData: { [key: string]: string } = {};

            translatedKeys.forEach(({ key, translatedKey }) => {
                translatedData[translatedKey] = data[key];
            });

            return translatedData as T;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Código de estado HTTP:', error.response?.status);
                return null;
            } else {
                console.error('send to sentry logs, report Kibana:', error.message);
            }
        }
    }

    async savePlanet(planet: Planet): Promise<void> {
        await this.dynamoDBClient.put({
            TableName: 'planet',
            Item: planet
        }).promise();
    };

    private removeAccents(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}
