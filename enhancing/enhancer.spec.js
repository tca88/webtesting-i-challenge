const { succeed, repair, fail, get } = require("./enhancer.js");
const enhancer = require("./enhancer.js");
// test away!

it("runs the test", () => {
  const expected = true;
  const actual = true;
  expect(actual).toBe(expected);
  expect(true).toBe(true);
});

describe("enhancer.js", () => {
  // REPAIR FUNCTION TEST
  describe("repair() method", () => {
    //returns a new item with the durability restored to 100.
    it("should return a new item with the durability restored to 100. ", () => {
      const itemTest = {
        name: "test",
        durability: 5,
        enhancement: 10
      };
      expect(enhancer.repair(itemTest).durability).toBe(100);
    });
  });

  // SUCCEED FUNCTION TEST
  describe("succeed() method", () => {
    //returns a new item with the durability restored to 100.
    it("should return a new item object modified according to the rules defined by the client for enhancement success. ", () => {
      const itemTest2 = {
        name: "test",
        durability: 5,
        enhancement: 10
      };
      expect(enhancer.succeed(itemTest2).enhancement).toBe(11);
    });

    it("should return a new item object modified according to the rules defined by the client for enhancement success. ", () => {
      const itemTest2 = {
        name: "test",
        durability: 5,
        enhancement: 20
      };
      expect(enhancer.succeed(itemTest2).enhancement).toBe(20);
    });
  });

  // FAIL FUNCTION TEST
  describe("fail() method", () => {
    //returns a new item with the durability restored to 100.
    it("returns a new item object modified according to the rules defined by the client for enhancement failure.", () => {
      const itemTest = {
        name: "test",
        durability: 20,
        enhancement: 15
      };
      expect(enhancer.fail(itemTest).durability).toBe(10);
      expect(enhancer.fail(itemTest).enhancement).toBe(15);
    });

    it("returns a new item object modified according to the rules defined by the client for enhancement failure.", () => {
      const itemTest = {
        name: "test",
        durability: 20,
        enhancement: 17
      };
      expect(enhancer.fail(itemTest).durability).toBe(10);
      expect(enhancer.fail(itemTest).enhancement).toBe(16);
    });
  });

  // GET FUNCTION TEST
  describe("get() method", () => {
    //returns a new item with the durability restored to 100.
    it("returns a new item object modified according to the rules defined by the client for ehancement criteria.", () => {
      const itemTest = {
        name: "Iron Fist",
        durability: 20,
        enhancement: 0
      };
      expect(enhancer.get(itemTest).name).toBe("Iron Fist");
    });

    it("returns a new item object modified according to the rules defined by the client for ehancement criteria.", () => {
      const itemTest = {
        name: "Jessica Jones",
        durability: 20,
        enhancement: 17
      };
      expect(enhancer.get(itemTest).name).toBe("Jessica Jones [+ 17]");
    });
  });
});
