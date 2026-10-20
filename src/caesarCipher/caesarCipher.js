export function caesarCipher(str, shift) {
  let shiftedStr = "";

  // Fix looping errors (shift by 27 is the same as shift by 1)
  shift = shift % 26;

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    // Test if char is from a to z or A to Z
    if ((charCode > 64 && charCode < 91) 
      || (charCode > 96 && charCode < 123)) {
      let shiftedCharCode = charCode + shift;

      shiftedCharCode = testBounds(shiftedCharCode, charCode);

      let shiftedChar = String.fromCharCode(shiftedCharCode);

      shiftedStr = shiftedStr + shiftedChar;
    } 
    else {
      shiftedStr = shiftedStr + str[i];
    }
  }

  return shiftedStr;
}

function testBounds(shiftedCharCode, charCode) {
  // Test if shifted code has overflowed from A to Z
  if (shiftedCharCode < 65) {
    shiftedCharCode = 91 - (65 - shiftedCharCode);
  } 
  // Test if shifted code has overflowed from Z to A
  else if (shiftedCharCode > 90 && 
            charCode > 64 && 
            charCode < 91) {
    shiftedCharCode = 64 + (shiftedCharCode - 90);
  } 
  // Test if shifted code has overflowed from a to z
  else if (shiftedCharCode < 97 && 
            charCode > 96 &&
            charCode < 123) {
    shiftedCharCode = 123 - (97 - shiftedCharCode)
  } 
  // Test if shifted code has overflowed from a to a
  else if (shiftedCharCode > 122
            && charCode > 96
            && charCode < 123) {
    shiftedCharCode = 96 + (shiftedCharCode - 122); 
  }
  return shiftedCharCode;
}