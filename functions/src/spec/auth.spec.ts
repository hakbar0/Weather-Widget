import "jest";
import axios from "axios";

import { fbAuth } from "../../config/config";

const getidToken = async () => {
  const { email, password, returnSecureToken, APIKEY, gURL } = fbAuth;
  const res = await axios({
    method: "POST",
    url: `${gURL}${APIKEY}`,
    data: { email, password, returnSecureToken },
  });
  return res;
};

describe("Able to authetnicate and get idToken", () => {
  it("Response recieved 200", async () => {
    const res = await getidToken();
    expect(res.status).toBe(200);
  });
});
