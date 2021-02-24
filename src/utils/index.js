export const dealWithData = (data) => {
  if(data >= 10000) {
    const newData = parseInt(data / 10000)
    return newData + '万'
  } else {
    return data
  }
}