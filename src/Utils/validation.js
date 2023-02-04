const validationEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.')
}

const validationPassword = (password) => {
  return password?.toString().length > 6
}

const validationName = (name) => {
  return name?.toString().length > 2
}

const validationPhone = (phone) => {
  return phone?.toString().length >= 8
}

const validationConfirmPassword = (password, confirmPassword) => {
  return validationPassword(password) && password === confirmPassword
}

export {
  validationEmail,
  validationPassword,
  validationName,
  validationPhone,
  validationConfirmPassword
}