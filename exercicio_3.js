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
