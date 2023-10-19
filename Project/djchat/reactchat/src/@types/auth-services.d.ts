export interface AuthServiceProps{
    login: (username:string,password:string) => any;
    logout : () => void;
    isLoggedIn : boolean;
    refreshAccessToken: () => Promise<void>
    register : (username:string, password:string) => Promise<any>;
}



