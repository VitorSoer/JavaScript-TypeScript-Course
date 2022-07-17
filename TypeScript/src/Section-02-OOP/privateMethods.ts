export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Connected at: ${this.host} | User: ${this.user} | Password: ${this.password}`,
    );
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      return Database.database;
    }
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const databaseOne = Database.getDatabase('localhost', 'root', '123456');

databaseOne.connect();

const databaseTwo = Database.getDatabase('localhost', 'sonserina', '123456');
databaseTwo.connect();
