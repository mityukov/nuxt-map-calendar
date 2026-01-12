export const useSchema = async () => {
    const client = useSanctumClient()
    const schema = useState('schema', () => shallowRef(null))

    if (schema.value === null) {
        const {data} = await client('/api/v1/schema/kartazamerov')
        schema.value = data
    }

    return schema
};
