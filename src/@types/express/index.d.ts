// 1:26:46 Reescrevendo as Tipagem do express para conseguirmos colocar a sub dentro da request.user_id

declare namespace Express {
  export interface Request {
    user_id: string;
  }
}

