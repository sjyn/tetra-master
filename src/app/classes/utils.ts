export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function generateUniqueRandomsInRange(numToGen: number, upperBound, lowerBound: number = 0): number[] {
  const arr = [];
  while (arr.length < numToGen) {
    const r = Math.floor(Math.random() * upperBound) + 1;
    if (arr.indexOf(r) === -1) {
      arr.push(r);
    }
  }
  return arr;
}

export function getRandom<T>(arr: T[], n: number): T[] {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function getOrDefault<T>(field: string, defaultValue: T, model?: any): T {
  return !!model ? model[field] : defaultValue;
}
