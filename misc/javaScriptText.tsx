export const javaScriptTextArray: string[] = [];
javaScriptTextArray.push(`const permutations = arr => {~
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;~
  return arr.reduce(~
    (acc, item, i) =>~
      acc.concat(~
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [~
          item,~
          ...val,~
        ])~
      ),~
    []~
  );~
};~
`)
javaScriptTextArray.push(`const bucketSort = (arr, size = 5) => {~
  const min = Math.min(...arr);~
  const max = Math.max(...arr);~
  const buckets = Array.from(~
    { length: Math.floor((max - min) / size) + 1 },~
    () => []~
  );~
  arr.forEach(val => {~
    buckets[Math.floor((val - min) / size)].push(val);~
  });~
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);~
};~
const permutations = arr => {~
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;~
  return arr.reduce(~
    (acc, item, i) =>~
      acc.concat(~
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [~
          item,~
          ...val,~
        ])~
      ),~
    []~
  );~
};~
`)
javaScriptTextArray.push(`const quickSort = arr => {~
  const a = [...arr];~
  if (a.length < 2) return a;~
  const pivotIndex = Math.floor(arr.length / 2);~
  const pivot = a[pivotIndex];~
  const [lo, hi] = a.reduce(~
    (acc, val, i) => {~
      if (val < pivot || (val === pivot && i != pivotIndex)) {~
        acc[0].push(val);~
      } else if (val > pivot) {~
        acc[1].push(val);~
      }~
      return acc;~
    },~
    [[], []]~
  );~
  return [...quickSort(lo), pivot, ...quickSort(hi)];~
};~
`)

javaScriptTextArray.push(`const caesarCipher = (str, shift, decrypt = false) => {~
  const s = decrypt ? (26 - shift) % 26 : shift;~
  const n = s > 0 ? s : 26 + (s % 26);~
  return [...str]~
    .map((l, i) => {~
      const c = str.charCodeAt(i);~
      if (c >= 65 && c <= 90)~
        return String.fromCharCode(((c - 65 + n) % 26) + 65);~
      if (c >= 97 && c <= 122)~
        return String.fromCharCode(((c - 97 + n) % 26) + 97);~
      return l;~
    })~
    .join('');~
};~
`)
