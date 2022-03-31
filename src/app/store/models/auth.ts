
interface Auth {
    userId?:string;
    userName?:string;
    password?:string;
    errorCount?:number;
    lastError?:Date;
    isLoggedIn:boolean;
}

type AuthState = Readonly<Auth>;

export default AuthState;