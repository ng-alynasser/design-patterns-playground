import { FurnitureFactory } from "./furniture-factory";
import { ModernFurnitureFactory } from "./modern-furniture-factory";
import { VictorianFurnitureFactory } from "./victorian-furniture-factory";
import { Chair } from "./chair";
import { Table } from "./table";

export class ApplicationConfiguration {
  private readonly furnitureFactory: FurnitureFactory;

  constructor(private readonly config: { modern: true }) {
    if (this.config.modern) {
      this.furnitureFactory = new ModernFurnitureFactory();
    } else {
      this.furnitureFactory = new VictorianFurnitureFactory();
    }
  }

  getFactory(): FurnitureFactory {
    return this.furnitureFactory;
  }
}

export class Application {
  private readonly chair: Chair;
  private readonly table: Table;

  constructor(private readonly factory: FurnitureFactory) {
    this.chair = this.factory.createChair();
    this.table = this.factory.createTable();
  }

  getChairInfo() {
    console.log(this.chair.hasLegs());
    this.chair.sitOn();
  }

  getTableInfo() {
    console.log(this.table.getShape());
    console.log(this.table.getNumberOfLegs());
  }
}

const appConfig = new ApplicationConfiguration({ modern: true });
const factory = appConfig.getFactory();
const app = new Application(factory);

app.getChairInfo();
app.getTableInfo();
