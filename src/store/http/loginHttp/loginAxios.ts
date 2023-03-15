import { http } from "./loginHttp";
import { message } from "antd";

const LOGIN_URL = `${process.env.REACT_APP_LOGIN_URL}/api/userlogin`;

export const loginAxios = {
    getUserAxios(payload:any){
        return Method.dataQuery( payload, LOGIN_URL )
    },
    createOrUpdateUserAxios(payload:any){
        return Method.dataQuery( payload, LOGIN_URL )
    }
}

const Method = {
    async dataQuery(body: any,baseUrl: any) {
      let url: any = baseUrl;
      return await new Promise((resolve, reject) => {        
        http.post(url, {
          query: body,
        }, {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'access-control-allow-origin': '*',
        //   }
        }).then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status === 212) {
            return resolve({
              status: 4,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: "Something went wrong.",
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        }).catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 401) {
                let unauthorizedStatus = err.response.status;
                if (unauthorizedStatus === 401) {
                  // logout();
                  message.error("401 unauthorized");
                }
              } else {
                return reject({
                  status: 5,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 5,
              error: err,
            });
          }
        });
      });
    },
    
    async postFile(body: any, baseUrl: any) {
      let url: any = baseUrl;
      return await new Promise((resolve, reject) => {
        fetch(url, {
          body: body,
          method: "post",
        //   headers: {
        //     'access-control-allow-origin': '*',
        //     'Authorization': localStorage.authToken
        //   }
        }).then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else if (result.status === 212) {
            return resolve({
              status: 4,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: "Something went wrong.",
              });
            } else {
              return reject({
                status: 4,
                error: "Something went wrong.",
              });
            }
          }
        }).catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status === 401) {
                let unauthorizedStatus = err.response.status;
                if (unauthorizedStatus === 401) {
                //   logout();
                  message.error("401 unauthorized");
                }
              } else {
                return reject({
                  status: 5,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 5,
              error: err,
            });
          }
        });
      });
    },
    }