import {peopleService} from "../../../people/service/index";

let people;

describe('GET /${STAGE}/people', () => {
   beforeAll(async()=>{
      people = await peopleService.getPeople('af0fa0d3-2f1a-4158-ad92-ae4bed6b81a7');
   });

   test('La respuesta no debe ser vacia', async () => {
      expect(people).not.toBeNull();
      expect(people).not.toBeUndefined();
      expect(people).not.toBe({});
   }, 5000);

   test('La respuesta debe ser un objeto', () => {
      expect(typeof people).toBe('object');
    });

    test('La respuesta debe contener todas las propiedades requeridas', () => {
      const requiredProperties = ['eye_color', 'mass', 'height', 'hair_color', 'birth_year', 'skin_color', 'name', 'idPeople', 'gender'];
      requiredProperties.forEach((prop) => {
        expect(people).toHaveProperty(prop);
      });
    });

    test('Los tipos de las propiedades deben ser los correctos', () => {
      expect(typeof people.eye_color).toBe('string');
      expect(typeof people.mass).toBe('string');
      expect(typeof people.height).toBe('string');
      expect(typeof people.hair_color).toBe('string');
      expect(typeof people.birth_year).toBe('string');
      expect(typeof people.skin_color).toBe('string');
      expect(typeof people.name).toBe('string');
      expect(typeof people.idPeople).toBe('string');
      expect(typeof people.gender).toBe('string');
    });

    test('La longitud de la cadena idPeople debe ser 36', () => {
      expect(people.idPeople.length).toBe(36);
    });

    test('El valor de gender debe ser "male" o "female"', () => {
      const allowedGenders = ['male', 'female'];
      expect(allowedGenders).toContain(people.gender);
    });

    test('La fecha de nacimiento debe estar en formato "dd/mm/yyyy"', () => {
      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      expect(dateRegex.test(people.birth_year)).toBe(true);
    });
 
 });