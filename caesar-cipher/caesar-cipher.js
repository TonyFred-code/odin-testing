function caesarCipher(str, key) {
  if (typeof str !== 'string' || typeof key !== 'number') {
    throw new Error(
      'Invalid input. The input string must be a string, and the key must be a number.'
    );
  }

  const baseLower = 'a'.charCodeAt(0);
  const baseUpper = 'A'.charCodeAt(0);

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let base, upperBound;

    if (/[a-z]/.test(char)) {
      base = baseLower;
      upperBound = baseLower + 25;
    } else if (/[A-Z]/.test(char)) {
      base = baseUpper;
      upperBound = baseUpper + 25;
    } else {
      // Not an alphabet character, leave unchanged
      result += char;
      continue;
    }

    const shiftedCharCode =
      ((char.charCodeAt(0) - base + key + 26) % 26) + base;
    result += String.fromCharCode(shiftedCharCode);
  }

  return result;
}

module.exports = caesarCipher;