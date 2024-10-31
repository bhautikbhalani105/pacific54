import apiInstance from "../../services/interceptor";

import { ISignInReq, IUserData } from "./types";

const ApiEndPoints = {
  userList: `admin/login`,
};

// API
export const authApi = {
  // SignIn
  signIn(data: ISignInReq): Promise<IApiSuccess<IUserData>> {
    return apiInstance.post(ApiEndPoints.userList, data);
  },
};
