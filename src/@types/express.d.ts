declare namespace Express {
  //sobrescrevendo exportação que ja existe no request do express
  export interface Request {
    user: {
      id: string;
    };
  }
}
