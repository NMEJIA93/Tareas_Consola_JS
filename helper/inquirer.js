
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { validate } = require('uuid');
require('colors');

const preguntas = {
    type: 'list',
    name: 'Opcion',
    message: '¿Que desea hacer?',
    /* choices: ['opt1', 'opt2', 'opt3'] */
    choices: [
        {
            value: '1',
            name: `${'1.'.green} Crear Tarea `
        },
        {
            value: '2',
            name: `${'2.'.green}  Listar Tarea`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar Tareas Completadas `
        },
        {
            value: '4',
            name: `${'4.'.green} Listar Tareas Pendientes `
        },
        {
            value: '5',
            name: `${'5.'.green} Complatar Tarea(s) `
        },
        {
            value: '6',
            name: `${'6.'.green} Eliminar Tarea `
        },
        {
            value: '0',
            name: `${'0.'.green} Salir `
        }
    ]
}



const inquirerMenu = async () => {
    console.clear();
    console.log('==============================='.green);
    console.log('     Seleccione una Opción     '.blue);
    console.log('=============================== \n'.green);

    const { Opcion } = await inquirer.prompt(preguntas);

    return Opcion;

}



const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.blue} para continuar\n`
        }
    ];
    console.log('\n')
    await inquirer.prompt(question);

}

const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor inrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}


const listaTareasBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, indice) => {

        const idx = `${indice + 1}.`.green
        return {
            value: tarea.id,
            name: `${idx} tarea. ${tarea.desc}`
        }
    });

    choices.unshift({
        
    })


    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;

}

const confirmar = async (message)=>{
    const question =[
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listaTareasBorrar,
    confirmar
}