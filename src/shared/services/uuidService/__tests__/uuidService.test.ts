import { UUID } from "../../types";
import uniqueIdentifierService from "../uuidService";

const isUUID = (id: any): id is UUID => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

  return typeof id === "string" && uuidRegex.test(id);
};

describe("uniqueIdentifierService", () => {
  const uuidService = uniqueIdentifierService();

  describe("Given service uniqueIdentifierService", () => {
    const uuidService = uniqueIdentifierService();

    test("When service is invoked then returned object should contain expected methods", () => {
      expect(uuidService.generate).toBeDefined();
      expect(typeof uuidService.generate).toBe("function");
    });
  });

  describe("Given generate()", () => {
    const uuidService = uniqueIdentifierService();

    test("When method is invoked then a string of type UUID should be returned", () => {
      const uuid = uuidService.generate();

      expect(isUUID(uuid)).toBe(true);
    });
  });
});
