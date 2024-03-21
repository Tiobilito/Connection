import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'cliente'}}
})
export class Cliente extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_cliente', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: false},
  })
  idCliente: number;

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
    length: 30,
    generated: false,
    postgresql: {columnName: 'correo', dataType: 'character varying', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  correo?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 10,
    generated: false,
    postgresql: {columnName: 'telefono', dataType: 'character varying', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  telefono?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 10,
    generated: false,
    postgresql: {columnName: 'telefono2', dataType: 'character varying', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  telefono2?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
