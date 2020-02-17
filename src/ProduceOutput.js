const ProduceOutput = ({ logger }) => {
    return (outputAsArray) => {
        outputAsArray.forEach(line => logger.log(line))
    }
}

export default ProduceOutput
