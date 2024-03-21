import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Orden2} from '../models';
import {Orden2Repository} from '../repositories';

export class Orden2Controller {
  constructor(
    @repository(Orden2Repository)
    public orden2Repository : Orden2Repository,
  ) {}

  @post('/orden2s')
  @response(200, {
    description: 'Orden2 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Orden2)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden2, {
            title: 'NewOrden2',
            exclude: ['idOrden'],
          }),
        },
      },
    })
    orden2: Omit<Orden2, 'idOrden'>,
  ): Promise<Orden2> {
    return this.orden2Repository.create(orden2);
  }

  @get('/orden2s/count')
  @response(200, {
    description: 'Orden2 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Orden2) where?: Where<Orden2>,
  ): Promise<Count> {
    return this.orden2Repository.count(where);
  }

  @get('/orden2s')
  @response(200, {
    description: 'Array of Orden2 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Orden2, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Orden2) filter?: Filter<Orden2>,
  ): Promise<Orden2[]> {
    return this.orden2Repository.find(filter);
  }

  @patch('/orden2s')
  @response(200, {
    description: 'Orden2 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden2, {partial: true}),
        },
      },
    })
    orden2: Orden2,
    @param.where(Orden2) where?: Where<Orden2>,
  ): Promise<Count> {
    return this.orden2Repository.updateAll(orden2, where);
  }

  @get('/orden2s/{id}')
  @response(200, {
    description: 'Orden2 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Orden2, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Orden2, {exclude: 'where'}) filter?: FilterExcludingWhere<Orden2>
  ): Promise<Orden2> {
    return this.orden2Repository.findById(id, filter);
  }

  @patch('/orden2s/{id}')
  @response(204, {
    description: 'Orden2 PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Orden2, {partial: true}),
        },
      },
    })
    orden2: Orden2,
  ): Promise<void> {
    await this.orden2Repository.updateById(id, orden2);
  }

  @put('/orden2s/{id}')
  @response(204, {
    description: 'Orden2 PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() orden2: Orden2,
  ): Promise<void> {
    await this.orden2Repository.replaceById(id, orden2);
  }

  @del('/orden2s/{id}')
  @response(204, {
    description: 'Orden2 DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orden2Repository.deleteById(id);
  }
}
