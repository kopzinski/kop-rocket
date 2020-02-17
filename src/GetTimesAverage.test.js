import GetTimesAverage from "./GetTimesAverage"
import Definitions from './Definitions'

describe('GetTimesAverage tests', () => {
    const definitions = Definitions()
    describe('Given times array with 5, 10 and 15 values', () => {
        it('returns 10.0 as average', () => {
            const expected = '10.00'
            const timesArray = [5, 10, 15]
            const average = GetTimesAverage({ definitions })
            expect(average(timesArray)).toEqual(expected)
        })
    })

    describe('Given times array with 2.1, 11.7 and 6.5 values', () => {
        it('returns 6.77 as average', () => {
            const expected = '6.77'
            const timesArray = [2.1, 11.7, 6.5]
            const average = GetTimesAverage({ definitions })
            expect(average(timesArray)).toEqual(expected)
        })
    })
})
