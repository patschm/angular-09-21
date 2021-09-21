import { Person } from "./person";

export class Employee extends Person
{
    constructor(name: string,private job:string){
        super(name);
    }
    public intro()
    {
        console.log(`Naam: ${this.name}, beroep: ${this.job}`);  
    }
}