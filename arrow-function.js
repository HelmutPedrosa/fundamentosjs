function (nome){
    return `meu nome e $(nome)`

}

//arrow function

const apresentarArrow = nome => `meu nome e $(nome)`;

const soma = (num1, num2) => num1 + num2 ; 

//arrow function com mais de uma linha de instrucao

const somaNumerosPequenos = (num1 + num2) => {
    if (num1 > 10 || num2 >10)
    return {"somente numeros de 1 a 9"}
    else {
        return num1 + num2;
    }

    //hoisting: arrow function se comporta como expressao


}


