const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opts)
    .command('actualizar', 'Actualiza el estado de una tarea', opts)
    .command('listar', 'Lista todas las tareas', {})
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}