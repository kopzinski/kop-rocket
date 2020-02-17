const ExtractData = ({ definitions, readFile, getSourceFile }) => {
    const {
        userIndexDescriptor,
        spacer,
        userIdIndex,
        userCountryIndex,
        taskUserIdIndex,
        taskTimeSpentIndex
    } = definitions

    const lineValidation = lineAsArray => lineAsArray.length && !!lineAsArray[0]

    return async () => {
        return readFile(getSourceFile()).then(lines => {
            const numberOfUsers = parseInt(lines[userIndexDescriptor], 10)
            const tasksIndexDescriptor = numberOfUsers + 1
            return lines.reduce((compiledData, lineAsString, lineIndex) => {
                const lineAsArray = lineAsString.split(spacer)

                if (lineValidation(lineAsArray)) {
                    if ( lineIndex <= numberOfUsers && lineIndex > 0) {
                        compiledData[lineAsArray[userIdIndex]] = { country: lineAsArray[userCountryIndex], times: [] }
                    }
                    if ( lineIndex > tasksIndexDescriptor) {
                        compiledData[lineAsArray[taskUserIdIndex]].times.push(parseFloat(lineAsArray[taskTimeSpentIndex]))
                    }
                }

                return compiledData
            }, {})
        })
    }
}

export default ExtractData
