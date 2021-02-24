import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  .new-album {
    width: 95%;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 0 auto;
    position: relative;

    .fpage, .spage {
      height: 130px;
      margin: 27px;
      display: flex !important;
      position: relative;

      .show {

        margin-right: 35px;
        .img {
          position: relative;
          img {
            width: 100px;
            height: 100px;
          }
          
        }
      }
    }

    .left {
      position: absolute;
      top: 50%;
      left: 5px;
      width: 15px;
      height: 17px;
      background-position: -260px -75px;
      transform: translate(0, -50%);
      border: 0;
    }
    .right {
      position: absolute;
      top: 50%;
      right: 3px;
      width: 15px;
      height: 17px;
      background-position: -300px -75px;
      transform: translate(0, -50%);
      border: 0;
    }
  }
`