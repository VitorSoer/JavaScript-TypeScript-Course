export class Writer {
  private _tool: Tool | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log(`I can't write without a tool...`);
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`I'm writing with a ${this.name}...`);
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`I'm writing using a ${this.name}...`);
  }
}

const writer = new Writer('Monseur');
const typewriter = new Typewriter('Canon typewriter');
const pen = new Pen('Bic');

writer.write();

writer.tool = pen;
writer.write();

writer.tool = typewriter;
writer.write();
