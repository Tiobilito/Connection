import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'dispositivo'}}
})
export class Dispositivo extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated: false,
    id: 1,
    postgresql: {columnName: 'id_dispo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: false},
  })
  idDispo: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 50,
    generated: false,
    postgresql: {columnName: 'sn', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  sn?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 30,
    generated: false,
    postgresql: {columnName: 'tipo_dis', dataType: 'character varying', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  tipoDis: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated: false,
    postgresql: {columnName: 'id_cliente', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: false},
  })
  idCliente: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 40,
    generated: false,
    postgresql: {columnName: 'modelo', dataType: 'character varying', dataLength: 40, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  modelo?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 100,
    generated: false,
    postgresql: {columnName: 'estado_fisi', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  estadoFisi: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 100,
    generated: false,
    postgresql: {columnName: 'esta_recep', dataType: 'character varying', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  estaRecep: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 30,
    generated: false,
    postgresql: {columnName: 'color', dataType: 'character varying', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  color: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 30,
    generated: false,
    postgresql: {columnName: 'marca', dataType: 'character varying', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  marca: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 300,
    generated: false,
    postgresql: {columnName: 'caso', dataType: 'character varying', dataLength: 300, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  caso?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    generated: false,
    postgresql: {columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: false},
  })
  fecha?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    generated: false,
    postgresql: {columnName: 'inventario', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: false},
  })
  inventario?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dispositivo>) {
    super(data);
  }
}

export interface DispositivoRelations {
  // describe navigational properties here
}

export type DispositivoWithRelations = Dispositivo & DispositivoRelations;
