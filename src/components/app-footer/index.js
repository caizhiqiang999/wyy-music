import React, { memo } from 'react'

import { FooterWrapper } from './style'

export default memo(function ZQAppFooter() {
  return (
    <FooterWrapper>
      <div className='wrap-v2 content'>
        <div className='left'>
          <div className='left-one'>
            <a>服务条款</a>
            <i>|</i>
            <a>隐私政策</a>
            <i>|</i>
            <a>儿童隐私政策</a>
            <i>|</i>
            <a>版权诉讼指引</a>
            <i>|</i>
            <a>意见反馈</a>
            <i>|</i>
          </div>
          <div className='left-two'>
            <span className='span-one'>网易公司版权所有@1997-2021</span>
            <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
          </div>
          <div className='left-three'>
            <span className='span-one'>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：<a href='#/'>ncm5990@163.com</a></span>
          </div>
          <div className='left-four'>
            <a href='#/' className='a-one'>粤B2-20090191-18 工业和信息化部备案管理系统网站</a>
            <a href='#/'>浙公网安备 33010902002564号</a>
          </div>
        </div>
        <div className='right'>
          <div>
            <a></a>
            <p>用户认证</p>
          </div>
          <div>
            <a></a>
            <p>独立音乐人</p>
          </div>
          <div>
            <a></a>
            <p>赞赏</p>
          </div>
          <div>
            <a></a>
            <p>视频奖励</p>
          </div>
          
        </div>
      </div>
    </FooterWrapper>
  )
})