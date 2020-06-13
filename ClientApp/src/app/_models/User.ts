import { Photo } from './Photo';

export interface User {
    id:number;
    userName:string;
    knownsAs:string;
    age:number;
    gender:string;
    created:Date;
    lastActive:Date;
    photoUrl:string;
    city:string;
    country:string;
    interests?:string;
    introduction?:string;
    lookingFor?:string;
    photos?:Photo;
    roles:string[];
}
