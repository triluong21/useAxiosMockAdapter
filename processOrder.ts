import axios from "axios";

export const apiCallGet = async (order: any): Promise<any> => {
    return new Promise<any>(async (resolve, reject) => {
        const body = {
            prodIdAlias: "WS5",
            order,
        };
        const config = { baseURL: "https://jsonplaceholder.typicode.com/todos/1" };
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Basic UnlhblRlc3Q6Y2RzMTAwMQ==",
        };
        try {
            const resp = axios.get(config.baseURL);
            if (resp) {
                resolve(resp);
            } else {
                reject("error");
            }
        } catch (error) {
            console.log("caught", error.message);
            reject("error");
        }
    });
};

export const apiCallPost = async (order: any): Promise<any> => {
    return new Promise<any>(async (resolve, reject) => {
        const body = {
            prodIdAlias: "WS5",
            order,
        };
        const config = { baseURL: "https://jsonplaceholder.typicode.com/todos/1" };
        const headers = {
            "Content-Type": "application/json",
            "Authorization": "Basic UnlhblRlc3Q6Y2RzMTAwMQ==",
        };
        try {
            const resp = axios.post(config.baseURL, body, { headers });
            if (resp) {
                resolve(resp);
            } else {
                reject("error");
            }
        } catch (error) {
            console.log("caught", error.message);
            reject("error");
        }
    });
};