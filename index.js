let heroName = 'Guimbly'
let heroExp = 9000
let msgStart = "O Herói "
let msgEnd = ' está no nivel '

if(heroExp <= 1000){
    console.log(msgStart + heroName + msgEnd +'Ferro!')
    }

else if(heroExp > 1000 && heroExp <= 2000){
    console.log(msgStart + heroName + msgEnd +'Bronze!')
    }

else if(heroExp > 2000 && heroExp <= 5000){
    console.log(msgStart + heroName + msgEnd +'Prata!')
    }

else if(heroExp > 5000 && heroExp <= 6000){
        console.log('Range não especificado no exercicio, 5000 ~ 6000. Talvez seja um ranking secreto.')
        }

else if(heroExp > 6000 && heroExp <= 7000){
    console.log(msgStart + heroName + msgEnd +'Ouro!')
    }

else if(heroExp > 7000 && heroExp <= 8000){
    console.log(msgStart + heroName + msgEnd +'Platina!')
    }

else if(heroExp > 8000 && heroExp <= 9000){
    console.log(msgStart + heroName + msgEnd +'Ascendente!')
    }

else if(heroExp > 9000 && heroExp <= 10000){
    console.log(msgStart + heroName + msgEnd +'Imortal!')
    }

else if(heroExp > 10000){
        console.log(msgStart + heroName + msgEnd +'Radiante!')
        }
else{
    console.log('Temos um problema em descobrir seu ranking... Você é pro?')
    }
