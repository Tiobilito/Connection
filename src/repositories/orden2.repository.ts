import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Orden2, Orden2Relations} from '../models';

export class Orden2Repository extends DefaultCrudRepository<
  Orden2,
  typeof Orden2.prototype.id_orden,
  Orden2Relations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Orden2, dataSource);
  }
}
