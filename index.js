function superbowlWin(record) {
    const winner = record.find(winYear)
    return (winner == undefined ? undefined : winner.year)
}



function winYear(year){
    return year.result == "W"
}























// function superbowlWin(record) {
//     const winner = record.find(newFunction)
//     return (winner == undefined ? undefined : winner.year)
    
// }


// function newFunction(win){
//     return win.result == 'W'
// }


