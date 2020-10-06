export class StatsComponentModel {

    public name: string;
    public description: string;
  
    constructor() {
      this.name = '';
      this.description = '';
    }
  
    public clone(): StatsComponentModel {
      let clonedModel: StatsComponentModel = new StatsComponentModel();
  
      clonedModel.name = this.name;
      clonedModel.description = this.description;
  
      return clonedModel;
    }
  }