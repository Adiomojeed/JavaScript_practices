/**
 * Check oldest student
 * check youngest student
 * student with the highest CGPA
 * Top 10 students with the lowest CGPA
 * Top 10 youngest and Oldest
 * Youngest student of highest level
 * Statistics of Mode of Entry
 */


const data = require('./ewe-sample.json')


/**
 * testData: the array to be used in testing
 * testParam: Student's parameter to check; Highest, Biggest
 * value: The value of the parameter: age, cgpa
 */
function checkBiggestStudentParam (testData, testParam, value) {
    let oldest = testData.reduce((present, next) => {
        if (present[value] > next[value]) return present
        else return next
    })
    return (`${testParam}: ${oldest['firstName']} ${oldest['lastName']} at ${oldest[value]}`)
}

// Format - checkBiggestStudentParam('Highest CGPA', 'cgpa') 
console.log(checkBiggestStudentParam(data, 'Highest CGPA', 'cgpa'))


/**
 * testData: the array to be used in testing
 * testParam: Student's parameter to check; Smallest, Lowest
 * value: The value of the parameter: age, cgpa
 */
function checkSmallestStudentParam (testData, testParam, value) {
    let oldest = testData.reduce((present, next) => {
        if (present[value] < next[value]) return present
        else return next
    })
    return (`${testParam}: ${oldest['firstName']} ${oldest['lastName']} at ${oldest[value]}`)
}

// Format - checkSmallestStudentParam('Lowest CGPA', 'cgpa') 
console.log(checkSmallestStudentParam(data, 'Lowest CGPA', 'cgpa'))


// Top 10 Students with Highest CGPA
function studentWithHighestCgpa (data) {
    let cgpa = data.map(x => {
        return {name: x['firstName'], cgpa: x['cgpa']}
    })
    cgpa.sort((a, b) => {
        return b['cgpa'] - a['cgpa']
    })

    return cgpa.slice(0, 10).sort((x, y) => {
        return x['name'] > y['name']
    })
}

console.log(studentWithHighestCgpa(data))


// Youngest student of the highest level
function youngestOfHighestLevel (data) {
    let highestLevelString = checkBiggestStudentParam(data, 'Highest level', 'level')
    let highestLevel= highestLevelString.slice(highestLevelString.length - 3, highestLevelString.length)
    let students = data.filter(x => x['level'] == highestLevel)
    return checkSmallestStudentParam(students, 'Youngest', 'age')
}

console.log(youngestOfHighestLevel(data))


// Statistics of Mode of Entry
function statisticsOfEntry (data) {
    let mode = data.map(x => x['mode_of_entry'])
    let exactMode = new Set (mode)
    let modeArray = []
    for (let value of exactMode) {
        modeArray.push(value)
    }
    let filteredMode = modeArray.map(b => mode.filter(a => a == b))
    let modeStatistics = filteredMode.map(c => `${((c.length/mode.length) * 100).toFixed(2)}%`)
    return `${modeArray} = ${modeStatistics}`
}

console.log(statisticsOfEntry(data))