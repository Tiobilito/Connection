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
import {Empleado2} from '../models';
import {Empleado2Repository} from '../repositories';

export class Empleado2Controller {
  constructor(
    @repository(Empleado2Repository)
    public empleado2Repository : Empleado2Repository,
  ) {}

  @post('/empleado2s')
  @response(200, {
    description: 'Empleado2 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Empleado2)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleado2, {
            title: 'NewEmpleado2',
            
          }),
        },
      },
    })
    empleado2: Empleado2,
  ): Promise<Empleado2> {
    return this.empleado2Repository.create(empleado2);
  }

  @get('/empleado2s/count')
  @response(200, {
    description: 'Empleado2 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Empleado2) where?: Where<Empleado2>,
  ): Promise<Count> {
    return this.empleado2Repository.count(where);
  }

  @get('/empleado2s')
  @response(200, {
    description: 'Array of Empleado2 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Empleado2, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Empleado2) filter?: Filter<Empleado2>,
  ): Promise<Empleado2[]> {
    return this.empleado2Repository.find(filter);
  }

  @patch('/empleado2s')
  @response(200, {
    description: 'Empleado2 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleado2, {partial: true}),
        },
      },
    })
    empleado2: Empleado2,
    @param.where(Empleado2) where?: Where<Empleado2>,
  ): Promise<Count> {
    return this.empleado2Repository.updateAll(empleado2, where);
  }

  @get('/empleado2s/{id}')
  @response(200, {
    description: 'Empleado2 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Empleado2, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Empleado2, {exclude: 'where'}) filter?: FilterExcludingWhere<Empleado2>
  ): Promise<Empleado2> {
    return this.empleado2Repository.findById(id, filter);
  }

  @patch('/empleado2s/{id}')
  @response(204, {
    description: 'Empleado2 PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleado2, {partial: true}),
        },
      },
    })
    empleado2: Empleado2,
  ): Promise<void> {
    await this.empleado2Repository.updateById(id, empleado2);
  }

  @put('/empleado2s/{id}')
  @response(204, {
    description: 'Empleado2 PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() empleado2: Empleado2,
  ): Promise<void> {
    await this.empleado2Repository.replaceById(id, empleado2);
  }

  @del('/empleado2s/{id}')
  @response(204, {
    description: 'Empleado2 DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empleado2Repository.deleteById(id);
  }
}
