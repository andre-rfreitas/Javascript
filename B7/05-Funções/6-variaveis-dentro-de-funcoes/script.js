let count = 0 //var de escopo global, foi criado fora pode ser usado dentro
    
function add() {
    let count = 0 // var de escopo local (tem preferencia)
    count ++
}

add()
add()

console.log(count)