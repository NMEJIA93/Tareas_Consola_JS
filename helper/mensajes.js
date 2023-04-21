const { promises } = require('dns');
const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('==============================='.green);
        console.log('     Seleccione una Opción     '.blue);
        console.log('=============================== \n'.green);

        console.log(`${'1.'.green} Crear Tareas`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tareas`);
        console.log(`${'0.'.green} Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una Opción: ', (opt) => {
            readline.close();

            resolve(opt);
        });
    })





}

const pausa = () => {

    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });
    
    })
   
}

module.exports = {
    mostrarMenu, pausa
}