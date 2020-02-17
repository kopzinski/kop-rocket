const GetTimesAverage = ({ definitions }) => {
    const { floatStartStartValue, averageRoundFractionDigits } = definitions
    return (times) => {
        const sum = times.reduce((a, b) => a + b, floatStartStartValue);
        const avg = (sum / times.length) || floatStartStartValue
        return avg.toFixed(averageRoundFractionDigits)
    }
}

export default GetTimesAverage
