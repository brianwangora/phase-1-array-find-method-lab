// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
      ]
function superbowlWin(record) {
    for (const win of record) {
        if (win.result === "W") {
            return(win.year)
        }
        
    }
}    
console.log(superbowlWin(record))
