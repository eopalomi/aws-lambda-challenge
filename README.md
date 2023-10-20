## Documentación para el Uso de API-CHALLENGE 
## Introducción 
La API-CHALLENGE esta desarrollada usando Serverless y desplegada en AWS utilizando Node.js con DynamoDB como base de datos. Esta API, inspirada en el universo de Star Wars y se integra con SWAPI (Star Wars API), permite llevar a cabo operaciones con información relacionada a los planetas y personas del mundo de Star Wars, incluye 3 scripts para pruebas, testing y despliegue en aws.

## Dependencias 🔧
Para instalar todas las dependencias, ejecute el siguiente comando:

```
npm install
```

## Ejecutar la Aplicación Localmente ⚙️
Utiliza este comando para ejecutar la aplicación localmente en tu entorno de desarrollo.
```
npm run sls:dev
```

## Pruebas Unitarias 📋
Las pruebas unitarias se realizan utilizando la libreria Jest, ejecuta este comando para iniciar las pruebas.
```
npm run test
```

## Despliegue 🚀
Para realizar el despliegue, se utiliza el comando deploy del framework Serverless, pero antes hay que configurar las credenciales de nuestro provider que es aws.

Ejecutar reemplazando key y secret proporcionados por aws:
```
serverless config credentials --provider aws --key key --secret secret --profile deploy-aws-dev
```
Ejecutar para iniciar el despliegue del Lambda
```
npm run deploy
```

## Como usar
La APP expone 3 endpoints en el puerto 3000

GET (Obtener información planetas):
```
http://localhost:3000/develop/planet/{idPlaneta}
```

GET (Obtener información personas):
```
http://localhost:3000/develop/people/{idPeople}
```

POST (Obtener información personas):
```
http://localhost:3000/develop/people

BODY para el request:

{
    "name":"Leia",
    "height":"160",
    "mass":"500",
    "hair_color":"blonde",
    "skin_color":"green",
    "eye_color":"gold",
    "birth_year":"2077/01/01",
    "gender":"female"
}
```
En la respuesta a la peticion se envia el ID de la persona, la que se puede usar en el endpoint GET para obtener la informacion de la persona.

## Construido con 🛠️

_Algunas de las tecnologias usadas_:

* [Serverless](https://www.serverless.com/) - Marco de desarrollado para crear aplicaciones en AWS Lambda
* [Typescript](https://www.typescriptlang.org/) - Lenguaje de programación con tipos estáticos
* [Jest](https://jestjs.io/) - Framework de pruebas unitarias e integración
* [DynamoDB](aws.amazon.com/es/pm/dynamodb/) - Servicio de base de datos NoSQL rápido y flexible en la nube

## GRACIAS 🎁