import { expect, config } from "chai";
import { apiCallGet, apiCallPost } from "./processOrder";
import fs = require("fs");
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Test apiCalls", () => {
  it("Test apiCallGet using axios.get mock and JSON payload file", async() => {
    const fileLink = fs.readFileSync("./inputLayout.json");
    const parameters = JSON.parse(fileLink.toString("utf8"));

    const workUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const replyMessage = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
    const compareResult = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    const mock = new MockAdapter(axios);
    
    mock.onGet(workUrl).reply(200, replyMessage);
    const resp = await apiCallGet(parameters)
      .catch((err) => {
        console.log("The Error: " + err);
      });
    expect(resp.data).to.eql(compareResult);
  });
  it("Test apiCallPost using axios.post mock and JSON payload file", async () => {
    const fileLink = fs.readFileSync("./inputLayout.json");
    const parameters = JSON.parse(fileLink.toString("utf8"));
    const mockUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const replyMessage = "It has been POSTED";
    const body = {
      prodIdAlias: "WS5",
      parameters,
    };
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Basic UnlhblRlc3Q6Y2RzMTAwMQ==",
    };
    const mock = new MockAdapter(axios);
    mock.onPost(mockUrl).reply(201, replyMessage);
    const resp = await apiCallPost(parameters)
      .catch((err: any) => {
        console.log("The Error: " + err);
      });
    expect(resp.data).to.eql("It has been POSTEDx");
  });  
});
