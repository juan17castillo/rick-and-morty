import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import moxios from "moxios";
import * as api from "../api";


Enzyme.configure({adapter: new EnzymeAdapter()});

describe("get all characters", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("All characters are returned", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 1,
      });
    });
    // await api.fetchCharacters().then((response) => {
    //   console.log("HEREEEE", response.data.results[0].id);
    // });
    return await api.fetchCharacters().then((response) => {
      expect(response.data.results[0].id).toBe(1);
    });
  });
});
