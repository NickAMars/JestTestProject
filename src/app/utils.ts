
export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string [],
    length: number,
    extraInfo: Object | undefined
}

class StringUtils {
    toUpperCase(arg: string){
        if(!arg){
            throw new Error("Invalid arguments");
        }
        return arg.toUpperCase();
    }
    getStringInfo(arg: string): stringInfo{
        return {
            lowerCase: arg.toLowerCase(),
            upperCase: arg.toUpperCase(),
            characters: Array.from(arg),
            length: arg.length,
            extraInfo: {message: `your parameter was ${arg}`}
        }
    }
}

export default StringUtils
// export function toUpperCase(arg: string){
//     return arg.toUpperCase();
// }

// export type stringInfo = {
//      lowerCase: string,
//      upperCase: string,
//      characters: string [],
//      length: number,
//      extraInfo: Object | undefined
// }


// export function getStringInfo(arg: string): stringInfo{
//     return {
//         lowerCase: arg.toLowerCase(),
//         upperCase: arg.toUpperCase(),
//         characters: Array.from(arg),
//         length: arg.length,
//         extraInfo: {message: `your parameter was ${arg}`}
//     }
// }