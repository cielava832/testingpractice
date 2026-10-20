export function reverseStr(str) {
  let rev = "";

  for (let i = 1; i < str.length + 1; i++) {
    rev = rev + str[str.length - i];
  }

  return rev;
}