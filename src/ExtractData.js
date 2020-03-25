const ExtractData = ({ definitions, readFile, getSourceFile }) => {
    const {
        userIndexDescriptor,
        spacer,
        userIdIndex,
        userCountryIndex,
        taskUserIdIndex,
        taskTimeSpentIndex
    } = definitions

    return async () => {
        return readFile(getSourceFile()).then(lines => {
            
            return lines.reduce((compiledData, lineAsString, lineIndex) => {             

                return "something"
            }, {})
        })
    }
}

export default ExtractData
