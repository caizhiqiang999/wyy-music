import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
  .song-top {
    width: 140px;
    height: 140px;
    position: relative;
    margin-bottom: 5px;

    img {
      width: 100%;
    }
    .cover {
      width: 140px;
      height: 140px;
      position: absolute;
      top: 0;
      left: 0;
      background-position: 0 0;
    }
    .info {
      width: 140px;
      height: 27px;
      position: relative;
      position: absolute;
      bottom: 0;
      left: 0;
      background-position: 0 -537px;
      display: flex;

      div:nth-child(1) {
        margin: auto 5px;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }
      div:nth-child(2) {
        color: #ccc;
        margin: auto 5px;
      }
      div:nth-child(3) {
        width: 16px;
        height: 17px;
        background-position: 0 0;
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translate(0, -50%);
      }
    }

  }
`