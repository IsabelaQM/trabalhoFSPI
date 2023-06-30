
function convert(from) {
    var binaryInput = document.getElementById('binary');
    var decimalInput = document.getElementById('decimal');
    var hexadecimalInput = document.getElementById('hexadecimal');

    var binaryValue = binaryInput.value.trim();
    var decimalValue = decimalInput.value.trim();
    var hexadecimalValue = hexadecimalInput.value.trim();

    if (from === 'binary') {
        if (binaryValue !== '') {
            decimalValue = parseInt(binaryValue, 2).toString(10);
            hexadecimalValue = parseInt(binaryValue, 2).toString(16).toUpperCase();
        } else {
            decimalValue = '';
            hexadecimalValue = '';
        }
    } else if (from === 'decimal') {
        if (decimalValue !== '') {
            binaryValue = parseInt(decimalValue, 10).toString(2);
            hexadecimalValue = parseInt(decimalValue, 10).toString(16).toUpperCase();
        } else {
            binaryValue = '';
            hexadecimalValue = '';
        }
    } else if (from === 'hexadecimal') {
        if (hexadecimalValue !== '') {
            binaryValue = parseInt(hexadecimalValue, 16).toString(2);
            decimalValue = parseInt(hexadecimalValue, 16).toString(10);
        } else {
            binaryValue = '';
            decimalValue = '';
        }
    }

    binaryInput.value = binaryValue;
    decimalInput.value = decimalValue;
    hexadecimalInput.value = hexadecimalValue;

    document.getElementById('binaryResult').textContent = 'Binário: ' + binaryValue;
    document.getElementById('decimalResult').textContent = 'Decimal: ' + decimalValue;
    document.getElementById('hexadecimalResult').textContent = 'Hexadecimal: ' + hexadecimalValue;
}

function copyResult() {
    var result = "";
    var binaryResult = document.getElementById('binaryResult').textContent;
    var decimalResult = document.getElementById('decimalResult').textContent;
    var hexadecimalResult = document.getElementById('hexadecimalResult').textContent;

    result += binaryResult + "\n";
    result += decimalResult + "\n";
    result += hexadecimalResult;

    navigator.clipboard.writeText(result)
        .then(function () {
            alert('Resultado copiado para a área de transferência!');
        })
        .catch(function (error) {
            console.error('Erro ao copiar o resultado: ', error);
        });
}
