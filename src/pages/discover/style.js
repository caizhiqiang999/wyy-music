import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  height: 35px;
  background-color: #C20C0C;

  .c-1 {
    display: flex;
    line-height: 35px;

    div {
      margin-right: 40px;
    }
    :nth-child(1) {
      margin-left: 150px;
    }
    a {
      color: #fff;
      padding:4px 10px;
    }
    .active, a:hover {
      background-color: #9B0909;
      border-radius: 10px;
      text-decoration: none;
    }
  }
`