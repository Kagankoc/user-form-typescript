import { ActionCreator as ReduxActionCreator } from 'redux';

type Payload = Promise<any> | any;
type Meta = any;

export interface StandardAction<Payload,Meta = undefined> {
    type:string;
    payload?: Payload;
    error?:any;
    meta?:Meta;
    errorTime?:Date;
}

export type Action = StandardAction<Payload,Meta>;

export interface ActionCreator extends ReduxActionCreator<Action> {};