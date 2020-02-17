import BuildResult from './BuildResult'
import Definitions from './Definitions'
import GetTimesAverage from './GetTimesAverage'

describe('BuildResult tests', () => {
    const definitions = Definitions()
    const getTimesAverage = GetTimesAverage({ definitions })
    describe('Given well extracted data', () => {
        const extractedData = {
            '1': { country: 'PT', times: [ 10, 5 ] },
            '2': { country: 'US', times: [ 10 ] },
            '3': { country: 'JP', times: [] }
        }
        const build = BuildResult({ definitions, getTimesAverage })
        it('build result', () => {
            const result = build(extractedData)
            const expected = [
                '3 0.00',
                '1 7.50',
                '2 10.00',
                'JP 0.00',
                'PT 7.50',
                'US 10.00'
            ]
            expect(result).toEqual(expected)
        })
    })
})

