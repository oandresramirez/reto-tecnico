import Swal from 'sweetalert2';

const alertError = (text) => {
    Swal.fire({
        title: 'Error.',
        html: text,
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
    });
}

const alertSuccess = (text) => {
    Swal.fire({
        title: 'Diagnóstico',
        html: text,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
    });
}


export {alertError, alertSuccess}