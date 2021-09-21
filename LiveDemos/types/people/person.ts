import {IIntroducable} from './iintroducable';

export class Person implements IIntroducable
{
    protected name: string;

    public set Name(nm:string)
    {
        this.name = nm;
    }
    public get Name(): string
    {
        return this.name;
    }

    constructor(name:string, private age:number = 1)
    {
        this.name = name;
    }

    public intro() : void {
        console.log(`Naam: ${this.name}, leeftijd: ${this.age}`);
    }
}



