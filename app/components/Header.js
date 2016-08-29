import React, { Component, PropTypes } from 'react'

class Header extends Component {
   render() {
      return (
         <div className='header'>
            <a href='https://www.labelinsight.com' target='_blank'>
               <img src='https://www.labelinsight.com/hubfs/LabelInsight_May2016/Images/li_logo_horizontal_white.svg?t=1472243352509' />
            </a>
         </div>
      )
   }
}

export default Header
