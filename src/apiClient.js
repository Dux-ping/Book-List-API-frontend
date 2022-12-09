import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }
  authentificatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      throw error;
    });
  }

  async login(email, password) {
    return axios({
      method: "post",
      url: `${url}auth`,
      data: { email, password },
    }).catch((error) => {
      throw error;
    });
  }

  getAds() {
    return this.authentificatedCall("get", url);
  }

  addAd(name, price) {
    return this.authentificatedCall("post", url, { name, price });
  }

  removeAd(id) {
    return this.authentificatedCall("delete", `${url}${id}`);
  }

  updateAd(id, name, price) {
    return this.authentificatedCall("put", `${url}${id}`, { name, price });
  }
}
