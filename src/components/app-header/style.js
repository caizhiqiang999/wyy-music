import styled from 'styled-components'
import hot from '../../assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    font-size: 14px;

    .item {
      position: relative;
      a {
        display: block;
        padding: 0 19px;
        color: #fff;
      }

      a:hover, a:active, .active {
        text-decoration: none;
        background-color: #000;
      }

      .active .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }

      :nth-child(6) a {
        position: relative;
        ::after {
          position: absolute;
          width: 28px;
          height: 19px;
          content: '';
          top: 20px;
          right: -15px;
          background-image: url(${hot});
          background-position: -190px 0;
        }
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  
  .input {
    width: 158px;
    height: 32px;
    border-radius: 30px;
    margin: auto;
  }

  .right {
    display: flex;

    .btn {
      display: block;
      width: 100px;
      height: 32px;
      margin: auto 18px auto 12px;
      background-color: #242424;
      border: 1px #fff solid;
      border-radius: 30px;
      color: #fff;
    }

    .login {
      line-height: 70px;
    }
  }
`