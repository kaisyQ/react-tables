import React from "react"
import styleClasses from './Header.module.css'
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"
import { columnParamsAC, conditionParamsAC, filterInputAC } from "../Reducers/HeaderReducer"
import sort from "../../logic/sort"

const Header = (props) => {

    const handleClick = (e) => {
        console.log(props.tableItems, props.state)
        const newArr = sort(props.tableItems, props.state)
        props.setTmpTableItems(newArr)
    }

    const showAllBtnClick = (e) => {
        props.setTmpTableItems(props.tableItems)
    }
    const changeColumnParams = (e) => {
        props.dispatch(columnParamsAC(e.target.value))
    }

    const changeConditionParams = (e) => {
        props.dispatch(conditionParamsAC(e.target.value))
    }

    const changeFilterInputValue = (e) => {
        props.dispatch(filterInputAC(e.target.value))
    }

    return <header className={styleClasses.header}>
        <Form.Select onChange={changeColumnParams}>
            <option value={'Название'}>Название</option>
            <option value={'Количество'}>Количество</option>
            <option value={'Расстояние'}>Расстояние</option>
        </Form.Select>
        <Form.Select onChange={changeConditionParams}>
            <option value={'Проверка на равентво'}>Проверка на равентво</option>
            <option value={'Должно содержать'}>Должно содержать</option>
            <option value={'Должно быть больше'}>Должно быть больше</option>
            <option value={'Должно быть меньше'}>Должно быть меньше</option>
        </Form.Select>
        <Form.Control onChange={changeFilterInputValue} value={props.state.filterInputValue}type="text" placeholder="Ваше значение" />
        <Button onClick={handleClick}>Получить результат</Button>
        <Button onClick={showAllBtnClick}>Показать все</Button>
    </header>
}
export default Header