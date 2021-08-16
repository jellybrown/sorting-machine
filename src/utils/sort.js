// @param 정렬하고자 하는 배열
export const quickAsc = (arr) => {
  // basecase
  if (arr.length <= 1) {
    return arr;
  }

  // recursive case
  let pivot = [arr.shift()];
  let groupLeft = [];
  let groupRight = [];

  for (let i in arr) {
    if (arr[i] < pivot) {
      groupLeft.push(arr[i]);
    } else {
      groupRight.push(arr[i]);
    }
  }

  return quickAsc(groupLeft).concat(pivot, quickAsc(groupRight));
};

// @param 정렬하고자 하는 배열
export const quickDes = (arr) => {
  // basecase
  if (arr.length <= 1) {
    return arr;
  }

  // recursive case
  let pivot = [arr.shift()];
  let groupLeft = [];
  let groupRight = [];

  for (let i in arr) {
    if (arr[i] > pivot) {
      groupLeft.push(arr[i]);
    } else {
      groupRight.push(arr[i]);
    }
  }

  return quickDes(groupLeft).concat(pivot, quickDes(groupRight));
};
