export class ProductComponentModel {
  public name: string;
  public description: string;
  public grpName: string;
  constructor() {
    this.name = '';
    this.description = '';
    this.grpName = '';
  }

  public clone(): ProductComponentModel {
    let clonedModel: ProductComponentModel = new ProductComponentModel();

    clonedModel.name = this.name;
    clonedModel.description = this.description;
    clonedModel.grpName = this.grpName;

    return clonedModel;
  }
}
