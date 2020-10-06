export class AnalyticsComponentModel {
  public name: string;
  public description: string;

  constructor() {
    this.name = '';
    this.description = '';
  }

  public clone(): AnalyticsComponentModel {
    let clonedModel: AnalyticsComponentModel = new AnalyticsComponentModel();

    clonedModel.name = this.name;
    clonedModel.description = this.description;

    return clonedModel;
  }
}
