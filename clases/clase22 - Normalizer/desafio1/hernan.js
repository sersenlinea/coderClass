
const empleado = new schema.Entity('empleado');

const empresa_norm = new schema.Entity('empresa_norm', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
})
