import { CheckResult, PasswordErrors, PasswordValidation } from "../../app/password_validation/PasswordValidation"


describe('PasswordValidation test suite', ()=>{
    let passwordValidation: PasswordValidation;
    beforeEach(()=>{
        passwordValidation = new PasswordValidation();
    })

    it('Should not have less than 8 chars', ()=>{
        const actual : CheckResult = passwordValidation.checkPassword('1234567');
        expect(actual.valid).toBeFalsy()
        expect(actual.reasons).toEqual(
            expect.arrayContaining([
                PasswordErrors.SHORT,  PasswordErrors.NO_LOWER_CASE,  PasswordErrors.NO_UPPER_CASE,  
            ])
        )
    })
    it('Should have at lease one upper case letter', ()=>{
        const actual : CheckResult = passwordValidation.checkPassword('abcdefghi');
        expect(actual.valid).toBeFalsy()
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })
    it('Should have at lease one lower case letter', ()=>{
        const actual : CheckResult = passwordValidation.checkPassword('ABCDEFGHI');
        expect(actual.valid).toBeFalsy()
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })
    it('Should have less than 8 chars and one upper case and one lower case', ()=>{
        const actual : CheckResult = passwordValidation.checkPassword('12345678Ab');
        expect(actual.valid).toBeTruthy()
    })
})