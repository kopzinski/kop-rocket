const ReadFile = ({ definitions, fileSystem }) => {
    const { encoding, lineSeparator } = definitions

    return (file) => {
        return new Promise(resolve => {
            const lines = []
            const stream = fileSystem.createReadStream(file, { encoding })
            stream.on('data', data => {
                lines.push( ...data.split(lineSeparator))
                stream.destroy()
            })
            stream.on('close', () => resolve(lines))
        })
    }
}

export default ReadFile
