


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
        let  valid:  boolean =  true;
        if(password && password.length < 8){
            reasons.push(PasswordErrors.SHORT);
            valid = false;
        }
        // check for uppercase
        if(!password.split('').some(character=> character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90 )){
            reasons.push(PasswordErrors.NO_UPPER_CASE);
            valid = false;
        }
        // check for lower case
        if(!password.split('').some(character=> character.charCodeAt(0)>= 97 && character.charCodeAt(0) <= 122 )){
            reasons.push(PasswordErrors.NO_LOWER_CASE);
            valid = false;
        }
        return {valid, reasons};
    }

}