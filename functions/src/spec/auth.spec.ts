import "jest";
import axios from "axios";

import { fbAuth } from "../../config/config";

const getidToken = async (flag: boolean = true) => {
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
    return { status: 400 };
  }
};

describe("Able to authetnicate and get idToken", () => {
  it("Response recieved 200", async () => {
    const res = await getidToken();
    expect(res.status).toBe(200);
  });
  it("Response recieved should not be 200", async () => {
    const res = await getidToken(false);
    expect(res.status).toBe(400);
  });
});
