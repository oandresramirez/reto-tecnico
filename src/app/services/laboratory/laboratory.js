import { alertError, alertSuccess } from "../alert/alert";

const Validation = (obj) => {
    if (!obj.sugarPercentage || !obj.fatPercentage || !obj.oxygenPercentage || !obj.identity || !obj.names) {
        alertError('Todos los campos son <b>obligatorios.</b>');
        return false;
    }
    if (obj.sugarPercentage > 100) {
        alertError('Porcentaje de <b>azúcar</b> no puede ser mayor a 100.');
        return false;
    }
    if (obj.fatPercentage > 100) {
        alertError('Porcentaje de <b>grasa</b> no puede ser mayor a 100.');
        return false;
    }
    if (obj.oxygenPercentage > 100) {
        alertError('Porcentaje de <b>oxígeno</b> no puede ser mayor a 100.');
        return false;
    }
    return true;
}

//Calculos de enfermedad
const stoneDisease = (obj) => {
    if (!Validation(obj)) {
        return;
    }
    let save = false;
    let rta = '';
    if (obj.sugarPercentage > 70 && obj.fatPercentage > 88.5 && obj.oxygenPercentage < 60) {
        alertSuccess('Tienen un riesgo <b>ALTO</b> de enfermar gravemente.');
        save = true;
        rta = 'Tienen un riesgo ALTO de enfermar gravemente.';
        console.log('Tienen un riesgo <b>ALTO</b> de enfermar gravemente.')
    }
    if ((obj.sugarPercentage >= 50 && obj.sugarPercentage <= 70) &&
        (obj.fatPercentage >= 62.2 && obj.fatPercentage <= 88.5) &&
        (obj.oxygenPercentage >= 60 && obj.oxygenPercentage <= 70)
    ) {
        alertSuccess('Tienen un riesgo <b>MEDIO</b> de enfermar gravemente.');
        save = true;
        rta = 'Tienen un riesgo MEDIO de enfermar gravemente.';
        console.log('Tienen un riesgo <b>MEDIO</b> de enfermar gravemente.')
    }
    if (obj.sugarPercentage < 50 && obj.fatPercentage < 62.2 && obj.oxygenPercentage > 70) {
        alertSuccess('Tienen un riesgo <b>BAJO</b> de enfermar gravemente.');
        save = true;
        rta = 'Tienen un riesgo BAJO de enfermar gravemente.';
        console.log('Tienen un riesgo <b>BAJO</b> de enfermar gravemente.')
    }
    if (save) {
        obj['msj'] = rta;
        insertStoneDisease(obj);
    }
    return save;
}

const insertStoneDisease = (data) => {
    let list = [];
    if (sessionStorage.getItem('listStoneDisease')) {
        list = JSON.parse(sessionStorage.getItem('listStoneDisease'));
        list.push(data)
        sessionStorage.setItem('listStoneDisease', JSON.stringify(list));
    } else {
        list.push(data)
        sessionStorage.setItem('listStoneDisease', JSON.stringify(list));
    }
}
const listStoneDisease = () => {
    return JSON.parse(sessionStorage.getItem('listStoneDisease'));
}


export { stoneDisease, listStoneDisease, Validation }