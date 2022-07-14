import React from "react"
import Table from 'react-bootstrap/Table'
import PageNav from "../PageNav/PageNav"
import TableItem from "./TableItem/TableItem"
import { useEffect, useState } from 'react'
import { tableAPI } from '../../api/api'
import { useParams } from "react-router"

const TableBoard = (props) => {
    const { id } = useParams()
    const [totalCount, setTotalCount] = useState(0)
    
    useEffect(() => {
        if (id) {
            tableAPI.getTableRows(id).then(res => {
                props.setTmpTableItems(res.data.items)
                props.setTableItems(res.data.items)
                setTotalCount(res.data.totalCount)
            })
        } else {
            tableAPI.getTableRows().then(res => {
                props.setTmpTableItems(res.data.items)
                props.setTableItems(res.data.items)
                setTotalCount(res.data.totalCount)
            })
        }
    }, [id])

    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Расстояние</th>
                </tr>
            </thead>
            <tbody>
                { props.tmpTableItems.map(
                    tableItem => 
                        <TableItem 
                            key={tableItem.id}
                            title={tableItem._title}
                            date={tableItem._date}
                            count={tableItem._count}
                            distance={tableItem._distance}
                        />
                    ) 
                }
            </tbody>
        </Table>
        <PageNav totalCount={totalCount} />
    </>
}

export default TableBoard