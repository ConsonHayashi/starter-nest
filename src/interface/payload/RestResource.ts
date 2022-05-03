import * as pkg from 'package.json';

export class RestResourceResponse<Entity> {
  resourceName: string;
  helper: RestResourceName;
  entities: Entity[];

  constructor(resourceName: string, entityList?: Entity[]) {
    this.resourceName = resourceName;
    this.helper = RestResourceName.resource(resourceName);
    if (entityList) {
      this.entities = entityList;
    }
  }

  public setPageHelper(pageNumber: number, count: number, sizeNumber: number, sample?: string) {
    this.helper = new RestResourceName(this.resourceName, pageNumber, count, sizeNumber, sample)
  }
}

class RestResourceName {
  resourceName: string = "";
  getIdsResource: string = "";
  getIdSample: string = "";
  getAllResource: string = "";
  getAllSample: string = "";
  getAllLikeResource: string = "";
  getAllLikeSample: string = "";
  postResource: string = "";
  postSample: string = "";
  putResource: string = "";
  putSample: string = "";
  deleteResource: string = "";
  deleteSample: string = "";

  pagePattern = new RegExp("(?<resource>[\\s\\S]*)/page/(?<page>[\\s\\S]*)/size/(?<size>[\\s\\S]*)/sample/(?<sample>[\\s\\S]*)");
  pageLikeResultResource = `%s/page/%s/size/%s/sample/%s`;
  pageResultResource = `%s/page/%s/size/%s/`;
  prePage: string = "";
  currentPage: string = "";
  nextPage: string = "";
  pageNumber: number = 0;
  sizeNumber: number = 0;
  count: number = 0;
  sample: string = ""


  constructor(resourceName: string, pageNumber?: number, count?: number, sizeNumber?: number, sample?: string) {
    this.resourceName = resourceName;
    this.getIdsResource = this.getGetIdsResource("${id}");
    this.getIdSample = this.getGetIdSample();
    this.getAllResource = this.getGetAllResource("${page}", "${size}");
    this.getAllSample = this.getGetAllSample();
    this.getAllLikeResource = this.getGetAllLikeResource("${page}", "${szie}", "${sample}");
    this.getAllLikeSample = this.getGetAllLikeSample();
    this.postResource = this.getPostResource();
    this.postSample = this.getPostSample();
    this.putResource = this.getPutResource();
    this.putSample = this.getPutSample();
    this.deleteResource = this.getDeleteResource();
    this.deleteSample = this.getDeleteSample();
    if (count) {
      this.count = count;
    }
    if (pageNumber) {
      this.pageNumber = pageNumber;
    }
    if (sizeNumber) {
      this.sizeNumber = sizeNumber;
    }
    if (pageNumber && count && sizeNumber && !sample) {
      this.currentPage = `${Constant.REST_API_PREFIX + this.resourceName}/page/${pageNumber}/size/${sizeNumber}`
      if (pageNumber * sizeNumber < count) {
        this.nextPage = `${Constant.REST_API_PREFIX + this.resourceName}/page/${pageNumber + 1}/size/${sizeNumber}`
      }
      if (pageNumber > 0) {
        this.prePage = `${Constant.REST_API_PREFIX + this.resourceName}/page/${pageNumber - 1}/size/${sizeNumber}`
      }
    }
    if (pageNumber && count && sizeNumber && sample) {
      this.currentPage = `${Constant.REST_API_PREFIX + this.resourceName}/page/${pageNumber}/size/${sizeNumber}/sample/${sample}`
      if (pageNumber * sizeNumber < count) {
        this.nextPage = `${Constant.REST_API_PREFIX + this.resourceName}/page/${pageNumber + 1}/size/${sizeNumber}/sample/${sample}`
      }
      if (pageNumber > 0) {
        this.prePage = `${Constant.REST_API_PREFIX + this.resourceName}/page/${pageNumber - 1}/size/${sizeNumber}/sample/${sample}`
      }
    }
  }


  public static resource(resourceName: string) {
    return new RestResourceName(resourceName);
  }

  private getGetIdsResource(ids) {
    return Constant.REST_API_PREFIX + this.resourceName + "/id/" + ids;
  }

  private getGetIdSample() {
    return "GET " + Constant.REST_API_PREFIX + this.resourceName + "/id/1,2";
  }

  private getGetAllResource(page, size) {
    return Constant.REST_API_PREFIX + this.resourceName + "/page/" + page + "/size/" + size;
  }

  private getGetAllSample() {
    return "GET " + Constant.REST_API_PREFIX + this.resourceName + "/page/0/size/1000";
  }

  private getGetAllLikeResource(page, size, sample) {
    return Constant.REST_API_PREFIX + this.resourceName + "/page/" + page + "/size/" + size + "/sample/" + sample;
  }

  private getGetAllLikeSample() {
    return "GET " + Constant.REST_API_PREFIX + this.resourceName + "/page/0/size/1000/sample/{id:1}";
  }

  private getPostResource() {
    return Constant.REST_API_PREFIX + this.resourceName;
  }

  private getPostSample() {
    return "POST " + Constant.REST_API_PREFIX + this.resourceName + "\n PAYLOAD {id:1,name:\"create\"}";
  }

  private getPutResource() {
    return Constant.REST_API_PREFIX + this.resourceName;
  }

  private getPutSample() {
    return "PUT " + Constant.REST_API_PREFIX + this.resourceName + "\n PAYLOAD {id:1,name:\"update\"}";
  }

  private getDeleteResource() {
    return Constant.REST_API_PREFIX + this.resourceName;
  }

  private getDeleteSample() {
    return "DELETE " + Constant.REST_API_PREFIX + this.resourceName + "\n PAYLOAD {id:1,name:\"update\"}";
  }

}


class Constant {
  static REST_API_PREFIX = `${pkg.name}/${pkg.version}/`
}