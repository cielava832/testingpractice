export function capitalize(str) {
  let firstLtr = str[0];
  let rest = str.substring(1);

  firstLtr = firstLtr.toUpperCase();

  return firstLtr + rest; 
}