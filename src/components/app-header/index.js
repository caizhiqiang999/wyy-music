import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'
import { headerLinks } from '../../common/local-data'

export default memo(function ZQAppHeader() {

  const showSelectItem = (item, index) => {
    if(index < 3 || index === 5) {
      return <NavLink to={item.link} exact>{item.title}<i className='sprite_01 icon'></i></NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'></a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.id} className='item'>
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} className='input'/>
          <div className='right'>
            <button className='btn'>创作者中心</button>
            <a href='#/' className='login'>登录</a>
          </div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
      
    </HeaderWrapper>
  )
})
