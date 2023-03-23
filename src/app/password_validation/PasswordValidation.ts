


export enum PasswordErrors {
    SHORT = 'Password is too short!',
    NO_UPPER_CASE = 'Upper case letter required!',
    NO_LOWER_CASE = 'Lower case letter required!'
}
export interface CheckResult {
    valid: boolean,
    reasons: PasswordErrors[]
}

export class PasswordValidation{
    constructor(){}
    public checkPassword(password: string): CheckResult{
        const reasons: PasswordErrors[] = [];

        this.checkForLength(password, reasons) 
        this.checkForUpperCase(password, reasons)  
        this.checkForLowerCase(password, reasons);
        return {valid: reasons.length? false: true , reasons};
    }
    private checkForLength(password: string ,reasons: PasswordErrors[]): void {
        if(password && password.length < 8){
            reasons.push(PasswordErrors.SHORT);
        }
    }
    // check for uppercase
    private checkForUpperCase(password: string ,reasons: PasswordErrors[]): void {
        if(password &&!password.split('').some(character=> character.charCodeAt(0)>= 65 && character.charCodeAt(0) <= 90 )){
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }
    }
    // check for lower case
    private checkForLowerCase(password: string ,reasons: PasswordErrors[]): void {
        if(password &&!password.split('').some(character=> character.charCodeAt(0)>= 97 && character.charCodeAt(0) <= 122 )){
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }
    }
}