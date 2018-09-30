/* eslint guard-for-in: 0, no-restricted-syntax: 0, no-useless-escape: 0 */
const _emailValidator = val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  val,
)

const _minLengthValidator = (val, minLength) => val.length >= minLength

const _equalToValidator = (val, checkValue) => val === checkValue

const validate = (val, rules, connectedValue) => {
  let isValid = true
  for (const rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && _emailValidator(val)
        break
      case 'minLength':
        isValid = isValid && _minLengthValidator(val, rules[rule])
        break
      case 'equalTo':
        isValid = isValid && _equalToValidator(val, connectedValue[rule])
        break
      default:
        isValid = true
        break
    }
  }
  return isValid
}

export default validate
