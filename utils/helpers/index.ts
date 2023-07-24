export const round2 = (n: number) => Math.round(n * 100 + Number.EPSILON) / 100

export const plainObject = (mongoObj: any) => {
    return JSON.parse(JSON.stringify(mongoObj))
}