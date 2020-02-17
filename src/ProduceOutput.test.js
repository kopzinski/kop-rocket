import ProduceOutput from "./ProduceOutput"

describe('ProduceOutput tests', () => {
    const log = jest.fn()
    const logger = { log }
    describe('Given an array with 2 elements', () => {
        const outputAsArray = ['something', 'another thing']
        const produce = ProduceOutput({ logger })
        produce(outputAsArray)

        it('calls log metheod twice', () => {
            expect(log).toHaveBeenCalledTimes(2)
        })
        it('calls log metheod with something', () => {
            expect(log).toHaveBeenCalledWith('something')
        })
        it('calls log metheod with another thing', () => {
            expect(log).toHaveBeenCalledWith('another thing')
        })
    })
})
