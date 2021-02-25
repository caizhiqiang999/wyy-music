import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 280px;
  .ranking {
    
    .pic {
      display: flex;
      position: relative;

      .img {
        margin: 20px 0 0 20px;
        position: relative;
      }

      img {
        width: 80px;
        height: 80px;
      }

      .right {
        margin: 25px 0 0 10px;
        p {
          font-size: 14px;
          color: #333;
          font-weight: 700;
        }
        .logo {
          display: flex;
          margin-top: 5px;
          .play {
            width: 22px;
            height: 22px;
            background-position: -267px -205px;
            margin-right: 10px;
          }
          .add {
            width: 22px;
            height: 22px;
            background-position: -300px -205px;
          }
        }
      }
    }
    .songp {
      margin: 28px 0 0 30px;
      width: 200px;
      .songs {
        position: relative;
        display: flex;
        margin-bottom: 12px;
        height: 20px;
        p {
          margin-right: 20px;
        }
        .mark {
          display: flex;
          justify-content: space-between;
          height: 17px;
          width: 80px;
          display: none;
          position: absolute;
          top: 0;
          right: 10px;
          .btn {
            width: 17px;
            height: 17px;
          }
          .mark-left {
            background-position: -267px -268px;
          }
          .mark-middle {
            background-position: 0 -700px;
          }
          .mark-right {
            background-position: -297px -268px;
          }
        }
        :hover .mark {
          display: block;
          display: flex;
        }
      }
      
    }
    .active {
      color: #c10d0c;
    }
    .find {
      margin-left: 150px;
    }
    a {
      color: black;
    }
  }
`