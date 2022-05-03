import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { RestResourceResponse } from './payload/RestResource';

export abstract class RestHttp<Entity, Service extends RestService<Entity, Entity>> {
  constructor(private service: Service) { }

  public abstract getResourceName(): string;

  @ApiOperation({ description: "getOpenAPI" })
  @Get('api')
  public getOpenApi(): RestResourceResponse<Entity> {
    return new RestResourceResponse(this.getResourceName());
  }
  @ApiOperation({ description: "getInIds" })
  @Get("id/{resourceIdsJoinInComma}")
  public inIds(@Param() resourceIdsJoinInComma: string): RestResourceResponse<Entity> {
    const split: number[] = resourceIdsJoinInComma.split(",").map(e => parseInt(e, 10));
    let entitys: Entity[] = this.service.inIds(split);
    return new RestResourceResponse(this.getResourceName(), entitys)
  }

  @ApiOperation({ description: "getInPages" })
  @Get("page/{page}/size/{size}")
  public page(@Param() page: string, @Param() size: string): RestResourceResponse<Entity> {
    let pageNumber, sizeNubmer;
    try {
      pageNumber = parseInt(page, 10);
      sizeNubmer = parseInt(size, 10);
    } catch (exception) {
      pageNumber = 0;
      sizeNubmer = 0;
    }
    const entities: Entity[] = this.service.page(pageNumber, sizeNubmer);
    const count = this.service.count();
    const res: RestResourceResponse<Entity> = new RestResourceResponse<Entity>(this.getResourceName(), entities);
    res.setPageHelper(pageNumber, count, sizeNubmer)
    return res;
  }

  @ApiOperation({ description: "getInPages" })
  @Get("page/{page}/size/{size}/sample/{sample}/")
  public pageSample(@Param() page: string, @Param() size: string, @Param() sample: Entity): RestResourceResponse<Entity> {
    let pageNumber, sizeNubmer;
    try {
      pageNumber = parseInt(page, 10);
      sizeNubmer = parseInt(size, 10);
    } catch (exception) {
      pageNumber = 0;
      sizeNubmer = 0;
    }
    const entities: Entity[] = this.service.page(pageNumber, sizeNubmer, sample);
    const count = this.service.count();
    const res: RestResourceResponse<Entity> = new RestResourceResponse<Entity>(this.getResourceName(), entities);
    res.setPageHelper(pageNumber, count, sizeNubmer, sample.toString())
    return res;
  }

  @ApiOperation({ description: "create" })
  @Post()
  public create(@Body() entities: Entity[]) {
    const saved: Entity[] = this.service.save(entities);
    return new RestResourceResponse<Entity>(this.getResourceName(), saved)
  }


  @ApiOperation({ description: "update" })
  @Put()
  public update(@Body() entities: Entity[]) {
    const updated: Entity[] = this.service.save(entities);
    return new RestResourceResponse<Entity>(this.getResourceName(), updated)
  }

  @ApiOperation({ description: "delete" })
  @Delete()
  public delete(@Body() entities: Entity[]) {
    const deleted: Entity[] = this.service.delete(entities);
    return new RestResourceResponse<Entity>(this.getResourceName(), deleted)
  }
}


export abstract class RestService<Entity, Repo> {

  constructor(private Repo) { }

  inIds(split: number[]): Entity[] {
    throw new Error('Method not implemented.');
  }

  count(): number {
    throw new Error('Method not implemented.');
  }

  page(pageNumber: number, sizeNubmer: number, sample?: Entity): Entity[] {
    throw new Error('Method not implemented.');
  }

  save(entities: Entity[]): Entity[] {
    throw new Error('Method not implemented.');
  }

  delete(entities: Entity[]): Entity[] {
    throw new Error('Method not implemented.');
  }

}