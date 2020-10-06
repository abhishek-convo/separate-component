export class SettingsComponentModel {
  public name: string;
  public description: string;

  constructor() {
    this.name = '';
    this.description = '';
  }

  public clone(): SettingsComponentModel {
    let clonedModel: SettingsComponentModel = new SettingsComponentModel();

    clonedModel.name = this.name;
    clonedModel.description = this.description;

    return clonedModel;
  }
}
