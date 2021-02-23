import styled from 'styled-components'

export const HeaderRCMWrapper = styled.div`
    display: flex;
    width: 95%;
    height: 40px;
    margin: 20px auto;
    position: relative;
    border-bottom: 2px solid #C10D0C;

    div:nth-child(1) {
      display: flex;

      div:nth-child(1) {
        width: 33px;
        height: 33px;
        margin: auto 0;
        background-position: -225px -156px;
      }
      div:nth-child(2) {
        font-size: 20px;
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      }
    }

    .content {
      display: flex;
      margin-left: 0;
      line-height: 40px;

      div:nth-child(1) {
        margin-left: 20px;
      }

      span {
        margin: auto 15px;
      }
    }

    .more {
      display: flex;
      height: 20px;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translate(0, -50%);

      div:nth-child(2) {
        width: 12px;
        height: 12px;
        margin-left: 4px;
        background-position: 0 -240px;
        transform: translate(0, 25%);
      }
    }

`