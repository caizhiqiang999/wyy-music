export const dealWithData = (data) => {
  if(data >= 10000) {
    const newData = parseInt(data / 10000)
    return newData + '万'
  } else {
    return data
  }
}

export const changeTime = (time) => {
  const newTime = Math.ceil(time / 1000)
  const minutes = Math.floor(newTime / 60)
  const seconds = newTime - minutes * 60
  let showSeconds = 0
  if(seconds >= 10){
    showSeconds = seconds
  } else {
    showSeconds = `0${seconds}`
  }
  return `0${minutes}:${showSeconds}`
}

export const playSrc = (id) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}