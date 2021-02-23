import styled from 'styled-components'

import logo from '../../../../assets/img/download.png'
import logo2 from '../../../../assets/img/banner_sprite.png'

export const TopBannerWrapper = styled.div`
  height: 285px;
  background: url(${props => props.bgImage}) center center/6000px;
  .banner {
    display: flex;
    justify-content: space-between;
    height: 100%;
    position: relative;

    .left {
      width: 75%;
      img {
        height: 285px;
      }
    }

    .right {
      width: 25%;
      background: url(${logo});
    }

    .btn-left {
      position: absolute;
      width: 37px;
      height: 63px;
      background-image: url(${logo2});
      left: -68px;
      top: 40%;
      background-position: 0 -360px;
      background-color: transparent;
    }
    .btn-right {
      position: absolute;
      width: 37px;
      height: 63px;
      background-image: url(${logo2});
      right: -68px;
      top: 40%;
      background-position: 0 -508px;
      background-color: transparent;
    }

    .btn-left:hover, .btn-right:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  
`