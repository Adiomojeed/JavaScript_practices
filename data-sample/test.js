/**
 * Check oldest student
 * check youngest student
 * student with the highest CGPA
 * Top 10 students with the lowest CGPA
 * Top 10 youngest and Oldest
 * Youngest student of highest level
 * Statistics of Mode of Entry, States, Departments
 * Statistics of First Class, second class (upper and lowe) and third class for each and entire level(s)
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


function checkSmallestStudentParam (testData, testParam, value) {
    let oldest = testData.reduce((present, next) => {
        if (present[value] < next[value]) return present
        else return next
    })
    return (`${testParam}: ${oldest['firstName']} ${oldest['lastName']} at ${oldest[value]}`)
}

// Format - checkSmallestStudentParam('Lowest CGPA', 'cgpa') 


// Top 10 Students with Highest Datas
function studentWithHighestData (data, value) {
    let cgpa = data.map(x => {
        return {name: x['firstName'], value: x[value]}
    })
    cgpa.sort((a, b) => {
        return b['value'] - a['value']
    })

    return cgpa.slice(0, 10).sort((x, y) => {
        return x['name'] > y['name']
    })
}

function studentWithHighestCgpa () {
    return studentWithHighestData(data, 'cgpa')
}

function studentWithHighestAge () {
    return studentWithHighestData(data, 'age')
}

console.log(studentWithHighestAge())

// Youngest student of the highest level
function youngestOfHighestLevel (data) {
    let highestLevelString = checkBiggestStudentParam(data, 'Highest level', 'level')
    let highestLevel= highestLevelString.slice(highestLevelString.length - 3, highestLevelString.length)
    let students = data.filter(x => x['level'] == highestLevel)
    return checkSmallestStudentParam(students, 'Youngest', 'age')
}

// console.log(youngestOfHighestLevel(data))


// Statistics of various criteria
function statistics (data, value) {
    let statistics = data.map(x => x[value])
    let exactStatistics = new Set(statistics)
    let statisticsArray = []
    for (let value of exactStatistics) {
        statisticsArray.push(value)
    }
    let filteredstatistics = statisticsArray.map(b => statistics.filter(a => a == b))
    let newStatistics = filteredstatistics.map(c => `${((c.length/statistics.length) * 100).toFixed(2)}%`)
    let statisticsObj = Object.create({})
    for (let i = 0; i < statisticsArray.length; i++) {
        statisticsObj[statisticsArray[i]] = newStatistics[i]
    }
    return statisticsObj
}


function statisticsOfEntry () {
    return statistics(data, 'mode_of_entry')
}

function statisticsOfRegion () {
    return statistics(data, 'state')
}

function statisticsOfDepartment () {
    return statistics(data, 'department')
}


// Statistics of Grade for general and individual level
function statisticsOfGrade (data, level) {
    let cgpa
    if (level && level <= 400) {
        cgpa = data.map(x => {
            if (x['level'] == level) return x['cgpa']
        })
    }
    else {
        cgpa = data.map(x => x['cgpa'])
    }
    let first = cgpa.filter(x => x >= 3.6)
    let secondUp = cgpa.filter(x => x < 3.6 && x >= 2.8)
    let secondLow = cgpa.filter(x => x < 2.8 && x >= 2.2)
    let third = cgpa.filter(x => x < 2.2 && x >= 1.6)
    let classArray = []
    let classList = ['First Class', 'Second Upper', 'Second Lower', 'third']
    classArray.push(first, secondUp, secondLow, third)
    let classObj = Object.create({})
    let classStat = classArray.map(x => `${((x.length/cgpa.length) * 100).toFixed(2)}%`)
    for (let i = 0; i < classStat.length; i++) {
        classObj[classList[i]] = classStat[i]
    }
    return classObj
}

// general stat
function generalStat () {
    return statisticsOfGrade(data)
}

function levelStat100 () {
    return statisticsOfGrade(data, 100)
}

function levelStat200 () {
    return statisticsOfGrade(data, 200)
}

function levelStat300 () {
    return statisticsOfGrade(data, 300)
}

function levelStat400 () {
    return statisticsOfGrade(data, 400)
}
