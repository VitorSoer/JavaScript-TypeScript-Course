export class Company {
  public readonly name: string;
  protected readonly cnpj: string;
  private readonly employees: Employe[] = [];

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmploye(employe: Employe): void {
    this.employees.push(employe);
  }

  showEmployees(): void {
    for (const employe of this.employees) {
      console.log(`Name: ${employe.firstNname} ${employe.lastNname} `);
    }
  }
}

export class Employe {
  constructor(
    public readonly firstNname: string,
    public readonly lastNname: string,
  ) {}
}

const firstEmploye = new Employe('Macron', 'Lafont');
const secondEmploye = new Employe('Joana', 'Maddison');
const thirdEmploye = new Employe('Manny', 'Man');

const firstCompany = new Company('Ford', '11.111.111/0001-11');

firstCompany.addEmploye(firstEmploye);
firstCompany.addEmploye(secondEmploye);
firstCompany.addEmploye(thirdEmploye);

console.log(firstCompany);
firstCompany.showEmployees();
