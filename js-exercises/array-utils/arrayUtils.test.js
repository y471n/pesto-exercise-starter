import { forEach } from './arrayUtils';

describe('forEach', () => {
  test('should run callback exactly the length of array', () => {
    const testArray = [1, 2, 3];
    const lengthOfArray = testArray.length;
    let callbackIterationCount = 0;
    const callback = () => {
      callbackIterationCount += 1;
    };
    forEach(testArray, callback);
    expect(callbackIterationCount).toBe(lengthOfArray);
  });

  test('should run on each element once', () => {
    const testArray = [1, 2, 3];
    const resultArray = [];
    const callback = (el) => resultArray.push(el * 2);
    forEach(testArray, callback);
    for (let i = 0; i < testArray.length; i += 1) {
      expect(resultArray[i]).toBe(testArray[i] * 2);
    }
  });
});
