import React from 'react'
import mystyle from "../Style/Section.module.css"
export default function Section(props) {
  return (
    <div>
        <h1 className={mystyle.heading}>This is Section Componenet and {props.name_to_section}</h1>
    </div>
  )
}
