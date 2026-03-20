function question5() {
    let number = parseInt(prompt("Digite um número"));
    if (number % 2 == 1) {
        alert("é ímpar")
    } else {
        alert("é par")
    }
    number++
    alert("Agora o número foi transformado para: " + number)
}
