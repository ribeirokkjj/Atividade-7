function question10() {
    let nome = prompt("Nome do funcionário");
    let salario = Number(prompt("Salário bruto:"));

    let desconto = 1-0.08;
    let liquido = salario * desconto;
    let valorDescontado = salario - liquido;

    alert("Nome: "+nome);
    alert("Salário bruto: "+salario)
    alert("Desconto do INSS: " + valorDescontado)
    alert("Líquido: " +liquido)
}
