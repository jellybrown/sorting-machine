import { quickAsc, quickDes } from './sort';

const caseOne = [17, 4, 88, 56, 66, 2, 6, 32, 19];
const caseTwo = [17, 4, 88, 56, 66, 2, 6, 32, 19];

it('ASC', () => {
  expect(quickAsc(caseOne)).toEqual([2, 4, 6, 17, 19, 32, 56, 66, 88]);
});

it('DESC', () => {
  expect(quickDes(caseTwo)).toEqual([88, 66, 56, 32, 19, 17, 6, 4, 2]);
});
