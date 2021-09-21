import { Action } from "@ngrx/store";

// Selector
export const messages = (obj:IState)=>obj.berichten;

export interface IProductState
{
  name:string;
}

export interface IState
{
  berichten:string[];
  product:IProductState;
}

export class NieuwAction implements Action
{
  type: string = "[Message] nieuw";

  constructor(public payload:string)
  {

  }

}
