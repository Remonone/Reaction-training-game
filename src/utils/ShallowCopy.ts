export const shallowCopy = (obj: any) => {
    return JSON.parse(JSON.stringify(obj))
}