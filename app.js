
// Modulos que se importan 
require('colors');
const { inquirerMenu, pausa, leerInput,listaTareasBorrar, confirmar } = require('./helper/inquirer');
const Tareas = require('./models/tareas');
const { guardarBD,leerDB } = require('./helper/guardarArchivo');
//const { mostrarMenu, pausa } = require('./helper/mensajes')


console.clear();


const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){ //Cargar Tareas
        // establecer las tareas 
        tareas.cargarTareasFromArray(tareasDB);
        
    }
   

   
    
    do {
        // Imprimir el menú
        opt = await inquirerMenu();
        

        switch (opt) {
            case '1':
                // crear opcion 
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                console.log(desc);
                break;

            case '2':
                //listar las opciones
                /* console.log(tareas.listadoArr) */
                tareas.listadoCompleto();
                break;

                case '3':// Listar Completadas
                tareas.listadoPendientesCompletadas(true);
                break;

                case '4': // listar Pendientes 
                tareas.listadoPendientesCompletadas(false);
                break;

                case '6': // Borrar Tarea 
                const id = await listaTareasBorrar(tareas.listadoArr);
                const ok =  await  confirmar('¿seguro?');

                // Preguntar si esta seguro
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea Borrada')
                }
                console.log({ok})
                break;
        }


        //guardar en archivo 
        guardarBD(tareas. listadoArr);

        await pausa();

    } while (opt !== '0');


    /* pausa(); */
}

main();