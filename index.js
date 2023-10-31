let heroName = 'Guimbly'
let heroExp = 0
switch(heroExp){
    case heroExp <= 1000:
        console.log("O Herói " + heroName + 'está no nivel Ferro!')
    break

    case heroExp > 1000 && heroExp <= 2000:
        console.log("O Herói " + heroName + 'está no nivel Bronze!')
    break

    case heroExp > 2000 && heroExp <= 5000:
        console.log("O Herói " + heroName + 'está no nivel Prata!')
    break

    case heroExp > 6000 && heroExp <= 7000:
        console.log("O Herói " + heroName + 'está no nivel Ouro!')
    break

    case heroExp > 7000 && heroExp <= 8000:
        console.log("O Herói " + heroName + 'está no nivel Platina!')
    break

    case heroExp > 8000 && heroExp <= 9000:
        console.log("O Herói " + heroName + 'está no nivel Ascendente!')
    break

    case heroExp > 9000 && heroExp <= 10000:
        console.log("O Herói " + heroName + 'está no nivel Imortal!')
    break

    case heroExp > 10000:
        console.log("O Herói " + heroName + 'está no nivel Radiante!')
    break
}