function convertFromDecimal(fromId, toBinaryId, toHexadecimalId) {
  var fromInput = document.getElementById(fromId);
  var toBinaryInput = document.getElementById(toBinaryId);
  var toHexadecimalInput = document.getElementById(toHexadecimalId);

  var decimal = parseInt(fromInput.value);

  // Converter para binário
  var binary = decimal.toString(2);
  toBinaryInput.value = binary;

  // Converter para hexadecimal
  var hexadecimal = decimal.toString(16);
  toHexadecimalInput.value = hexadecimal.toUpperCase();
}

// Função para converter de binário para decimal e hexadecimal
function convertFromBinary(fromId, toDecimalId, toHexadecimalId) {
  var fromInput = document.getElementById(fromId);
  var toDecimalInput = document.getElementById(toDecimalId);
  var toHexadecimalInput = document.getElementById(toHexadecimalId);

  var binary = fromInput.value;

  // Converter para decimal
  var decimal = parseInt(binary, 2);
  toDecimalInput.value = decimal;

  // Converter para hexadecimal
  var hexadecimal = decimal.toString(16);
  toHexadecimalInput.value = hexadecimal.toUpperCase();
}

// Função para converter de hexadecimal para decimal e binário
function convertFromHexadecimal(fromId, toDecimalId, toBinaryId) {
  var fromInput = document.getElementById(fromId);
  var toDecimalInput = document.getElementById(toDecimalId);
  var toBinaryInput = document.getElementById(toBinaryId);

  var hexadecimal = fromInput.value;

  // Converter para decimal
  var decimal = parseInt(hexadecimal, 16);
  toDecimalInput.value = decimal;

  // Converter para binário
  var binary = decimal.toString(2);
  toBinaryInput.value = binary;
}

// Função para copiar o valor para a área de transferência e exibir um alerta
function copyToClipboard(elementId) {
  var element = document.getElementById(elementId);
  element.select();
  element.setSelectionRange(0, 99999); // Para dispositivos móveis

  document.execCommand("copy");
  alert("Número copiado para a área de transferência!");
}
