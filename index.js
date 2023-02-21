function findMatching(array, name) {
    // const selectedDriver = []
    // for (const driver of array) {
    //     if (driver === name) {
    //         selectedDriver.push(name)
    //     } else if (driver.toUpperCase() === name.toUpperCase()) {
    //         selectedDriver.push(name.toLowerCase())

    //     }
    // }
    // return selectedDriver
    // return array.filter((driver) => {
    //     // check if names match even if letters aren't same case
    //     // if (driver === name) {
    //     //     return name
    //     if (driver.toUpperCase() === name.toUpperCase()) {
    //         return name
    //     }
    // })
    return array.filter((driver) => driver.toUpperCase() === name.toUpperCase())

}


function fuzzyMatch(array, providedLetters) {
    return array.filter((driver) => driver[0] === providedLetters[0])
}

function matchName(array, string) {
    return array.filter((driver) => driver.name === string)
}
