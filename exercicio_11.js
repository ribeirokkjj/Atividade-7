function question11() {
    let salario = Number(prompt("Salário bruto:"));
    let taxa = 0.08

    if (salario <= 1000) {
    } else if (salario <= 1500) {
        taxa = 0.085
    } else {
        taxa = 0.09
    }
    let desconto = 1-0.08;
    let liquido = salario * desconto;
    let valorDescontado = salario - liquido;

    alert("Salário bruto: "+salario);
    alert("Taxa de desconto: "+taxa);
    alert("Desconto do INSS: " + valorDescontado);
    alert("Líquido: " +liquido);
}
