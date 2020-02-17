const Core = ({ extractData, buildResult, produceOutput }) => {
  const count = () => {
    return extractData().then(compiledData => {
      const builtData = buildResult(compiledData)
      produceOutput(builtData)
    })
  }

  return {
    count
  }
}

export default Core
