import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Dispositivo, DispositivoRelations} from '../models';

export class DispositivoRepository extends DefaultCrudRepository<
  Dispositivo,
  typeof Dispositivo.prototype.idDispo,
  DispositivoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Dispositivo, dataSource);
  }
}
