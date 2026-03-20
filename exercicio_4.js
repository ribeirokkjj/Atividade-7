function question4() {
    let valores = [];
    for ( let i = 1; i <= 4; i++) {
        valores.push(Number(prompt("Digite o " + i + "º número")))
    }

    valores.sort((a, b) => b - a)
    alert("Valores em ordem decrescente: " + valores)
}
