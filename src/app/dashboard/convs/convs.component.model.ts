export class ConvsComponentModel {

    public name: string;
    public description: string;
  
    constructor() {
      this.name = '';
      this.description = '';
    }
  
    public clone(): ConvsComponentModel {
      let clonedModel: ConvsComponentModel = new ConvsComponentModel();
  
      clonedModel.name = this.name;
      clonedModel.description = this.description;
  
      return clonedModel;
    }
  }