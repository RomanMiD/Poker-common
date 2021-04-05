import { UserBase } from "../../user-base.interface";
import { ResponseWrapper } from "../response-wrapper.interface";


export interface LoginResponse extends ResponseWrapper<LoginResponseData> {

}

export interface LoginResponseData {
  token: string;
  user: UserBase;
}
