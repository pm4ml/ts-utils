import setItem from './setItem';
import getItem from './getItem';
import removeItem from './removeItem';

describe("tests the localstorage JSON helpers", () => {

  const testObject = { name: 'test' };
  describe("tests the real implementation", () => {

    it("Should set and get a JSON object", () => {
      setItem('item', testObject);
      expect(getItem('item')).toEqual(testObject);
    });

    it("Should set and get a JSON object", () => {
      setItem('item', testObject);
      removeItem('item');
      expect(getItem('item')).toEqual(undefined);
    });
  });

  describe("tests the localstorage prototypes are been called", () => {

    beforeAll(() => {
      global.Storage.prototype.setItem = jest.fn((key, value) => {
        return null;
      });
      global.Storage.prototype.getItem = jest.fn((key) => {
        return null;
      });
      global.Storage.prototype.removeItem = jest.fn((key) => {
        return null;
      });
    });

    afterEach(() => {
      // return our mocks to their original values
      // THIS IS VERY IMPORTANT to avoid polluting future tests!
      global.Storage.prototype.setItem.mockReset();
      global.Storage.prototype.getItem.mockReset();
    });


    it("Should set primitive values", () => {
      ['1', 2, null, true, false ].forEach((primitive) => {
        setItem('item', primitive);
        expect(localStorage.setItem).toHaveBeenCalledWith('item', JSON.stringify(primitive));
      });
    });

    it("Should set the JSON string value", () => {
      setItem('item', testObject);
      expect(localStorage.setItem).toHaveBeenCalledWith('item', JSON.stringify(testObject));
    });

    it("Should remove a value if undefined is passed", () => {
      setItem('item', undefined);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });

  });


});