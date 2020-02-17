const BuildResult = ({ definitions, getTimesAverage }) => {
    const { spacer } = definitions

    const outputStringLine = ([id, avg]) => `${id}${spacer}${avg}`
    const compareOutputLine = (a, b) => a[1] - b[1]

    return (extractedData) => {
        const userAvgArray = []
        const countryData = {}
        Object.entries(extractedData).forEach(([userId, { country, times }]) => {
            userAvgArray.push([userId, getTimesAverage(times)])
            if (countryData[country]) {
                countryData[country].push(...times)
            } else {
                countryData[country] = [...times]
            }
        })

        const countryAvgArray = Object.entries(countryData)
            .map(([countryId, times]) => {
                return [countryId, getTimesAverage(times)]
            })

        const userResult = userAvgArray
            .sort(compareOutputLine)
            .map(outputStringLine)

        const countryResult = countryAvgArray
            .sort(compareOutputLine)
            .map(outputStringLine)

        return [ ...userResult, ...countryResult ]
    }
}

export default BuildResult
