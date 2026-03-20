function question7() {
    let codigo = prompt("Escolha o picolé pelo código para saber o preço: \n a - Chocolate\n b - Morango\n c - Creme \n d - Manga\n e - Melancia \n f - Vanilla Ice \n g - Céu Azul \n h - Brownie\n i - Hawaiano")
    let valor = null;

    switch (codigo){
        case "a":
            valor = 1.5
            break;
                    case "b":
            valor = 2.5
            break;
                    case "c":
            valor = 2.5
            break;
                    case "d":
            valor = 3.2
            break;
                    case "e":
            valor = 3.4
            break;
                    case "f":
            valor = 3
            break;
                    case "g":
            valor = 3.6
            break;
                    case "h":
            valor = 4
            break;
                    case "i":
            valor = 5
            break;
    }
    if (valor == null) {
        alert("Escolha um código existente!")
    }

    if (valor != null) {
        alert("O valor do picolé é R$"+valor)
    }

}


