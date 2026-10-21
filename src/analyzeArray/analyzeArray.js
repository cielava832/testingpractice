export function analyzeArray(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i];
  }

  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  }
}