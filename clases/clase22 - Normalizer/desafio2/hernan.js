const empleado = new schema.Entity('empleado');

const empresa_norm = new schema.Entity('empresa_norm', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
})


const normalEmpresa = normalize(empresa, empresa_norm)
console.log("Normalizado:");
print(normalEmpresa)


console.log('DesNormalizado')
const denormalEmpresa = denormalize(normalEmpresa.result, empresa_norm, normalEmpresa.entities)
print(denormalEmpresa)

console.log('Long original: ', JSON.stringify(empresa).length)
console.log('Long normalizado: ', JSON.stringify(normalEmpresa).length)
console.log('Long denormalizado: ', JSON.stringify(denormalEmpresa).length)
