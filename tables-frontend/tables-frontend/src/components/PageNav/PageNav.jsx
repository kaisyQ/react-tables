import React from "react"
import { NavLink } from 'react-router-dom'
import makePageNavArr from './makePageNavArr'
import styleClasses from './PageNav.module.css'

const PageNav = (props) => {
    return <div>
        { makePageNavArr(props.totalCount).map((elmnt, index) => <NavLink key={index} to={`/${index+1}`} className={styleClasses.pageNavBtn}>{ elmnt }</NavLink>) }
    </div>
}

export default PageNav