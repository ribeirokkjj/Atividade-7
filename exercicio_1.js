function question1() {

    let total = 0;
    let boolean = true;
    let numero = 0;

    while (boolean) {
        numero = parseInt(prompt("Digite um número:"));
        if (!isNaN(numero)) {
            total = total + numero;
            boolean = confirm("Deseja adicionar outro número?");
        } else {
            alert("Valor inválido")
        }
    }
    alert("o total é: " + total);
}
