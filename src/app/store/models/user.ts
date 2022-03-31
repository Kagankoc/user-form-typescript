export interface UserInfo {
    userId:string;
    name?:string;
    birthDate?:Date;
    lastLogin?:Date;
    registerDate?:Date;
}
interface User {
    userList : UserInfo[]   
}

type UserState = Readonly<User>;

export default UserState;