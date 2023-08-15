export const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
export const validatePassword = (password) => /^(?=.{6,})/.test(password)
