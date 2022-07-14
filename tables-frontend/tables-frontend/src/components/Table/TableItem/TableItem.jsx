import React from "react"

const TableItem = (props) => {
    return <>
        <tr>
            <td>{ props.date }</td>
            <td>{ props.title }</td>
            <td>{ props.count }</td>
            <td>{ props.distance }</td>
        </tr>
    </>
}

export default TableItem 