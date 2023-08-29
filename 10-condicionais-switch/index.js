let nomeFilme = 'Vingadores' :

switch ('nomeFilme') {

    case 'Vingadores':

        console.log('e o filme dos vingadores')

        break

    case 'Batman vs Superman':

        console.log('E o filme do Batman vs Superman')

        break
    default:
        console.log('e outro filme')
        break
}

let avaliacao = 1
switch (avaliacao) {
    case 1:
    case 2:
        console.log('filme ruim')
        break
    case 3:
    case 4:
        console.log('filme mediano')
        break
    case 5:
    
        console.log('filme excelente')
        break
    default:
        console.log('nota invalida')
        break
}