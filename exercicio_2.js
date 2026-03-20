function question2() {
    let count = 0;
    let timer = setInterval(() => {
        count = count + 1;

        if (count <= 10) {
            alert("Contagem para o lançamento: " + count);
        } else if (count == 11) {
            alert("Lançamento realizado!");
        }  else {
        }
    }, 1000);
}
