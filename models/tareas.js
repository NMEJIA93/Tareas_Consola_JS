
const Tarea = require('./tarea');



class Tareas {
    _listado = {}



    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }


    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }


    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        this.listadoArr.forEach((tarea, indice) => {
            const idx = `${indice + 1}`.green;
            const { desc, completado } = tarea;
            const estado = (completado) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${idx} --> ${desc} :: ${estado}`);

        });
    }

    listadoPendientesCompletadas(completadas = true) {
        let contador = 0;
        this.listadoArr.forEach((tarea) => {

            const { desc, completado } = tarea;
            const estado = (completado) ? 'Completada'.green : 'Pendiente'.red;
            if (completadas) {
                if (completado) {
                    contador += 1;
                    console.log(`${contador.toString().green} --> ${desc} :: ${estado}`);
                }

            } else {
                if (!completado) {
                    contador += 1;
                    console.log(`${contador.toString().green} --> ${desc} :: ${estado}`);
                    console.log('entre')

                }
            }


        });
    }



}

module.exports = Tareas;