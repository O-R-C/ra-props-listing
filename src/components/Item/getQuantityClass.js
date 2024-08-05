export const getQuantityClass = (quantity) => {
  if (quantity <= 10) {
    return 'level-low'
  }

  if (quantity <= 20) {
    return 'level-medium'
  }

  return 'level-high'
}

export default getQuantityClass
