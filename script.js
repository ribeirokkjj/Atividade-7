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

// question1();

function question2() {
    let count = 0;
    let timer = setInterval(() => {
        count = count + 1;

        if (count <= 10) {
    alert("Contagem para o lançamento: " + count);
} else if (count == 11) {
    alert("Lançamento realizado!");
}  else {
    alert("Já lançou kkkkkk pode sair");
}
}, 1000);
}

// question2();

function question3() {
    let totalBruto = 0;
    let totalGasto = 0;
    let bruto = 0;
    let gasto = 0;

    for (let i = 1; i < 13; i++) {
        bruto = parseFloat(prompt("Digite o valor bruto do mês " + i + ": "));
        totalBruto = totalBruto + bruto;
        gasto = parseFloat(prompt("Digite o valor gasto do mês " + i + ": "));
        totalGasto = totalGasto + gasto;
    }
    let saldo = totalBruto - totalGasto;
    alert("O ganho bruto anual é " + totalBruto)
    alert("O gasto anual é " + totalGasto)
    alert("O saldo anual é " + saldo)
    if (saldo > 0) {
    alert("A empresa teve superávit");
    } else {
    alert("A empresa teve prejuízo");
    }
}

// question3();