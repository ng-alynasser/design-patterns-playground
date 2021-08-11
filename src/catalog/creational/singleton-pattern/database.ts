export class Database {
  private static instance: Database;

  private constructor() {}

  static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }

    return this.instance;
  }

  query(statement: string): void {
    console.log(statement);
  }
}
