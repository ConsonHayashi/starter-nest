import { Repository } from 'typeorm';

export abstract class RestService<Entity, Repo extends Repository<Entity>> {

  constructor(

    private repo: Repo
  ) { }

  async inIds(ids: number[]): Promise<Entity[]> {
    return await this.repo.findByIds(ids);
  }

  async count(): Promise<number> {
    return await this.repo.count();
  }

  page(pageNumber: number, sizeNubmer: number, sample?: Entity): Promise<Entity[]> {
    if (!sample) return this.repo.find({ skip: pageNumber, take: sizeNubmer })
  }

  // save(entities: Entity[]): Promise<Entity[]> {
  //   this.repo.save(entities)
  // }

  // delete(entities: Entity[]): Promise<Entity[]> {
  //   this.repo.delete(entities.map(e => e.getId()))
  // }

}