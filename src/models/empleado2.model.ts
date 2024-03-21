import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'empleado2'}}
})
export class Empleado2 extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_empleado', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: false},
  })
  idEmpleado: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    generated: false,
    postgresql: {columnName: 'id_departamento', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: false},
  })
  idDepartamento?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 50,
    generated: false,
    postgresql: {columnName: 'nombre', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 50,
    generated: false,
    postgresql: {columnName: 'direccion', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 50,
    generated: false,
    postgresql: {columnName: 'colonia', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  colonia: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 50,
    generated: false,
    postgresql: {columnName: 'ciudad', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 25,
    generated: false,
    postgresql: {columnName: 'cp', dataType: 'character varying', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  cp: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 25,
    generated: false,
    postgresql: {columnName: 'rfc', dataType: 'character varying', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  rfc?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 30,
    generated: false,
    postgresql: {columnName: 'correo', dataType: 'character varying', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  correo?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    generated: false,
    postgresql: {columnName: 'sueldo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: false},
  })
  sueldo?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 15,
    generated: false,
    postgresql: {columnName: 'nss', dataType: 'character varying', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  nss?: string;

  @property({
    type: 'Binary',
    jsonSchema: {nullable: true},
    generated: false,
    postgresql: {columnName: 'imagen', dataType: 'bytea', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  imagen?: Buffer;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 20,
    generated: false,
    postgresql: {columnName: 'username', dataType: 'character varying', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  username?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 100,
    generated: false,
    postgresql: {columnName: 'contra', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  contra?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    generated: false,
    postgresql: {columnName: 'tipo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: false},
  })
  tipo?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empleado2>) {
    super(data);
  }
}

export interface Empleado2Relations {
  // describe navigational properties here
}

export type Empleado2WithRelations = Empleado2 & Empleado2Relations;
