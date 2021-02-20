import styled from 'styled-components'
import logo from '../../assets/img/sprite_footer_02.png'

export const FooterWrapper = styled.div`
  height: 300px;
  border-top: 1px #666 solid;

  .content {
    display: flex;
    justify-content: space-between;
    color: #666;

    .left {
      .left-one {
        margin-top: 20px;
        i {
          margin: 0 8px;
        }
      }
      .left-two {
        margin: 5px 0;
        .span-one {
          margin-right: 10px;
        }
      }
      .left-three {
        .span-one {
          margin-right: 10px;
        }
      }
      .left-four {
        margin: 5px 0;
        .a-one {
          margin-right: 10px;
        }
      }
    }

    .right {
      display: flex;
      margin-top: 40px;
      a {
        display: block;
        width: 50px;
        height: 45px;
        background-image: url(${logo});
        background-size: 110px 450px;
      }
      p {
        text-align: center;
      }
      div:nth-child(1) {
        margin-right: 30px;
        a {
          background-position: -60px -101px;
        }
      }
      div:nth-child(2) a {
        background-position: 0 0;
      }
      div:nth-child(3) {
        margin-right: 30px;
        margin-left: 17px;
        a {
          background-position: -60px -50px;
        }
      }
      div:nth-child(4) a {
        background-position: 0 -101px;
      }
    }
  }
`