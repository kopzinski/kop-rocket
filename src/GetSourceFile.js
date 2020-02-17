const GetSourceFile = () => {
    return () => {
        return process.argv[2]
    }
}

export default GetSourceFile
