import Core from './Core'

describe('Core tests', () => {
    describe('Given core is called', () => {
        describe('And ExtractData returns something', () => {
            describe('And BuildResult just returns the param received', () => {
                const extractData = jest.fn(() => Promise.resolve('something'))
                const buildResult = jest.fn((param) => param)
                const produceOutput = jest.fn()

                const { count } = Core({ extractData, buildResult, produceOutput })
                count()

                it('calls extractData', () => {
                    expect(extractData).toHaveBeenCalled()
                })
                it('calls buildResult with something', () => {
                    expect(buildResult).toHaveBeenCalledWith('something')
                })
                it('calls produceOutput with something', () => {
                    expect(produceOutput).toHaveBeenCalledWith('something')
                })
            })
        })
    })
})
