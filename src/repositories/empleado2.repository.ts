import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Empleado2, Empleado2Relations} from '../models';

export class Empleado2Repository extends DefaultCrudRepository<
  Empleado2,
  typeof Empleado2.prototype.idEmpleado,
  Empleado2Relations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Empleado2, dataSource);
  }
}
