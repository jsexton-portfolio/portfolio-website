// Regex representing portfolio cognito's user-pool password policy
// At least one lower case letter
// At least one upper case letter
// At least one digit
// At least one special character
// Minimum length of 8
// Maximum length of 99
export const passwordPolicyRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-“!@#%&/,><’:;|_~`])\S{8,99}$/
