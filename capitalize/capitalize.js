function capitalize(string) {
  if (string.trim() === '') return '';

  return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;
