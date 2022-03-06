
//import AppExternalApi from "./app/components/pages/external-api/external-api.component";
import { listStoneDisease, stoneDisease, Validation } from "../src/app/services/laboratory/laboratory";

describe('Prueba de laboratorio', () => {
  const obj = {
    identity: '2',
    names: '2',
    sugarPercentage: 10,
    fatPercentage: 10,
    oxygenPercentage: 80
  };
  it("Validación de campos", async () => {
    const rta = Validation(obj);
    expect(rta).toEqual(true);
  });
  it("Creacion de examenes", async () => {
    const rta = stoneDisease(obj);
    expect(rta).toEqual(true);
  });
  it("Resultado de examenes", async () => {
    const rta = listStoneDisease() ? listStoneDisease() : [];
    console.log(rta.length)
    expect(rta.length).toEqual(1);
  });
});