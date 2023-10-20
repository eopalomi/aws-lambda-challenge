import {peopleService} from "../../../people/service/index";

let people;

const body = {
  name: "Leia",
  height: "1.70cm",
  mass: "90",
  hair_color: "blonde",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "15/12/1997",
  gender: "female"
};

describe('GET /${STAGE}/people', () => {
  beforeAll(async()=>{
    people = await peopleService.savePeople(body);
  });

  test('La respuesta no debe ser vacia', async () => {
    expect(people).not.toBeNull();
    expect(people).not.toBeUndefined();
    expect(people).not.toBe({});
  }, 5000);

  test('La respuesta debe ser enviado el ID en string', () => {
      expect(typeof people).toBe('string');
  });

  test('La longitud del ID debe ser 36', () => {
    expect(people.idPeople.length).toBe(36);
  });
});