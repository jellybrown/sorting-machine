import { quickAsc, quickDes } from './sort';

const caseOne = [17, 4, 88, 56, 66, 2, 6, 32, 19];
const caseTwo = [66, 44, 2123, 555, 33, 11, 2];

it('ASC', () => {
  expect(quickAsc(caseOne)).toEqual([2, 4, 6, 17, 19, 32, 56, 66, 88]);
});

it('DESC', () => {
  expect(quickDes(caseTwo)).toEqual([2123, 555, 66, 44, 33, 11, 2]);
});
