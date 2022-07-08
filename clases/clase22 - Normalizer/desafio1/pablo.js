const util = require("util");
const { schema, normalize } = require("normalizr");

const empresa = require("./empresa.json");

function print(obj) {
  console.log(util.inspect(obj, false, 12, true));
}

// comenzamos a usar normalizr
const gerenteSchema = new schema.Entity("gerente");
const encargadoSchema = new schema.Entity("encargado");
const empleadoSchema = new schema.Entity("empleado");

const empresaSchema = new schema.Entity("empresa", {
  gerente: gerenteSchema,
  encargado: encargadoSchema,
  empleados: [empleadoSchema],
});

const normalizeEmpresa = normalize(empresa, empresaSchema);

print(normalizeEmpresa);
