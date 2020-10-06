export class ProductDetailsComponentModel {

  public name: string;
  public description: string;

  constructor() {
    this.name = '';
    this.description = '';
  }

  public clone(): ProductDetailsComponentModel {
    let clonedModel: ProductDetailsComponentModel = new ProductDetailsComponentModel();

    clonedModel.name = this.name;
    clonedModel.description = this.description;

    return clonedModel;
  }
}