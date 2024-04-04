const validation = (schema) => {
    return {
        schema,
        validatorCompiler: ({ schema }) => {
            return data => schema.validate(data)
        }
    }
}

export default validation