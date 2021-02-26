import styled from 'styled-components'
import logo1 from '../../../assets/img/progress_bar.png'
import logo2 from '../../../assets/img/sprite_icon.png'


export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .player-bar {
    display: flex;
    margin-top: 12px;
    .player {
      .prev {
        width: 28px;
        height: 28px;
        background-position: 0 -130px;
      }
      .play {
        width: 36px;
        height: 36px;
        background-position: 0 ${props => props.isPlaying ? '-165px' : '-204px'};
        margin: 0 5px;
      }
      .next {
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
      }
    }
    .progress {
      display: flex;
      margin-left: 25px;
      .img {
        img {
        width: 34px;
        height: 34px;
        border-radius: 10px;
        border: 1px solid black;
        }
      }
      .progress-right {
        margin-left: 20px;
        color: #fff;

        .detail {
          :first-of-type span {
            margin-right: 10px;
            margin-left: 6px;
          }
        }
        .show {
          display: flex;
          color: #fff;
          .time {
            margin-left: 10px;
            .cut {
              margin: 0 3px;
            }
          }
        }

        .ant-slider {
          width: 493px;
          margin-top: 1px;

        .ant-slider-rail {
          height: 9px;
          background: url(${logo1}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${logo1}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${logo2}) 0 -250px;
        }
      }
    }

    }
  }
`
export const Operator = styled.div`
  display: flex;
  position: relative;
  margin-top: 5px;
  margin-left: 20px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    margin-top: -12px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`