// export const largeText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam porta, ex at malesuada luctus, erat risus porta lectus, eget consequat mi ex quis sapien.Nam ac tincidunt tortor.Aliquam et placerat orci, sit amet ultrices eros.Vivamus quis sollicitudin ante, id maximus dui.Quisque posuere suscipit tortor, id sagittis turpis auctor at.Aliquam erat volutpat.Donec scelerisque eros urna, et dictum risus congue a.Pellentesque bibendum purus consectetur vehicula ultrices.Donec sit amet velit pulvinar, tristique mauris vitae, mattis enim.Quisque eget malesuada nunc, quis viverra nisi.Donec dignissim et massa vel vulputate.Curabitur vehicula ipsum a nisl elementum lacinia quis eget tortor.Donec vitae imperdiet ex, at elementum dui.Cras nisl quam, varius vel rhoncus convallis, pretium ac nulla.Etiam at nisl sed ex faucibus condimentum in condimentum ante.Phasellus volutpat consectetur neque, sed aliquam lectus dignissim et. Maecenas eget lectus quis turpis pretium congue.Mauris vitae urna urna.Cras maximus neque eu hendrerit placerat.Proin orci orci, vehicula non justo vitae, pulvinar interdum dolor.Maecenas ante turpis, efficitur sit amet orci vitae, mattis vulputate erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut vitae ante purus.Sed molestie dolor scelerisque bibendum convallis.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quis risus a neque lobortis vestibulum vel hendrerit orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed at auctor orci.Praesent commodo ut sem dignissim maximus.Duis sem lorem, dapibus eget lacinia id, volutpat vel eros.Integer id enim justo.In consectetur ornare diam et laoreet.Ut id ullamcorper mauris.Quisque id pharetra nunc, eget lobortis ante.Etiam ac urna rutrum, ornare sem ut, tempus turpis. Mauris sit amet enim vel diam consequat semper nec vel quam.Proin vitae condimentum nisl.Duis quis eros in purus iaculis ullamcorper.Praesent et turpis ac nibh consectetur vulputate ut commodo urna.Nam arcu mauris, semper eget auctor ac, rutrum eget lacus.Aenean vel erat ex.Proin iaculis lacinia nisl et venenatis.Nulla facilisis sem at tempor auctor.Fusce ullamcorper pretium porttitor.Proin dictum suscipit odio, eget tincidunt velit dignissim pretium. Pellentesque quis pharetra lacus, congue consequat tellus.Pellentesque tincidunt maximus consectetur.Nunc leo lacus, dapibus sed finibus id, vestibulum id sem.Quisque et mauris sem.Cras nec enim eu libero sodales ullamcorper.Sed viverra magna vel euismod ullamcorper.Pellentesque at fermentum est, rhoncus commodo nulla.Phasellus tempus enim ex, porttitor accumsan sapien posuere lobortis.Etiam vel est ut odio congue vulputate.In a scelerisque est.Vivamus vel purus vel quam porttitor accumsan sit amet nec eros. ";
export const textArray: string[] = [];
textArray.push(`const permutations = arr => {~
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
textArray.push(`const bucketSort = (arr, size = 5) => {~
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
textArray.push(`const quickSort = arr => {~
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

textArray.push(`const caesarCipher = (str, shift, decrypt = false) => {~
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
