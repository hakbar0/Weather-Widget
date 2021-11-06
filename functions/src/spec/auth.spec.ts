import "jest";
import axios from "axios";

import { fbAuth } from "../../config/config";

const getidToken = async (flag = true) => {
  try {
    const { email, password, returnSecureToken, gURL } = fbAuth;
    let { APIKEY } = fbAuth;

    if (!flag) APIKEY = "NOTVALIDAPIKEY";
    const res = await axios({
      method: "POST",
      url: `${gURL}${APIKEY}`,
      data: { email, password, returnSecureToken },
    });
    return res;
  } catch (err) {
    //Throw 400 error
    return { status: 400, data: "" };
  }
};

const authCreateDummyRoute = async (id: any) => {
  try {
    const res = await axios({
      method: "POST",
      url: `https://us-central1-weather-widget-7bd6d.cloudfunctions.net/createDummy`,
      headers: { Authorization: "Bearer " + id },
    });
    return res;
  } catch (err) {
    //Throw 400 error
    return { status: 401, data: "" };
  }
};

describe("Able to authenticate with Google and get idToken", () => {
  it("Response recieved 200", async () => {
    const res = await getidToken();
    expect(res.status).toBe(200);
  });
  it("Not able to authenticate with Google due to invalid key", async () => {
    const res = await getidToken(false);
    expect(res.status).toBe(400);
  });
  it("Able to authenticate with dummy route webhook", async () => {
    const id = await getidToken();
    const auth = await authCreateDummyRoute(id.data.idToken);
    expect(auth.status).toBe(200);
  });
  it("Auth fails without valid idtoken with dummy route", async () => {
    const auth = await authCreateDummyRoute("FAIL");
    expect(auth.status).toBe(401);
  });
});
