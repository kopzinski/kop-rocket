import fs from 'fs'
import Core from './Core'
import ExtractData from './ExtractData'
import Definitions from './Definitions'
import BuildResult from "./BuildResult"
import GetTimesAverage from './GetTimesAverage'
import ProduceOutput from './ProduceOutput'
import ReadFile from './ReadFile'
import GetSourceFile from './GetSourceFile'

const run = () => {
  const definitions = Definitions()
  const readFile = ReadFile({ definitions, fileSystem: fs })
  const getSourceFile = GetSourceFile()
  const extractData = ExtractData({ definitions, readFile, getSourceFile })
  const getTimesAverage = GetTimesAverage({ definitions })
  const buildResult = BuildResult({ definitions, getTimesAverage })
  const produceOutput = ProduceOutput({ logger: console })

  const { count } = Core({ extractData, buildResult, produceOutput })
  count()
}

run()
