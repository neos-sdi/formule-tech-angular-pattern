export interface Computer{
 compute(num1: number, num2: number): string
}

export interface GenericComputer{
  compute(num1: number, num2: number, strategy: Operators): string
}

export enum Operators{
  add,
  substract,
  multiply,
  divide
}
