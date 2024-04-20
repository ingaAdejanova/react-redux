const currentDate = new Date()

export const getCurrentMonth = () => {
  return currentDate.getMonth() + 1
}

export const getCurrentDay = () => {
  return currentDate.getDate()
}
