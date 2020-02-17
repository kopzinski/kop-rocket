import ExtractData from "./ExtractData"
import Definitions from './Definitions'

describe('ExtractCompiledData tests', () => {
    const definitions = Definitions()
    const getSourceFile = jest.fn()

    const lines = [
        '3',
        '1 PT',
        '2 US',
        '3 JP',
        '3',
        '1 1 10',
        '2 1 5',
        '3 2 10',
        ''
    ]
    const readFile = jest.fn(() => Promise.resolve(lines)  )

    describe('Given 3 users from different countries', () => {
        describe('and 3 tasks for some users', () => {
            const expected = {
                '1': { country: 'PT', times: [ 10, 5 ] },
                '2': { country: 'US', times: [ 10 ] },
                '3': { country: 'JP', times: [] }
            }

            const extract = ExtractData({ definitions, readFile, getSourceFile })
            it('returns well formatted result', () => {
                extract().then(compiledData => {
                    expect(compiledData).toEqual(expected)
                })
            })
        })
    })
})
