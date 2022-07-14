const CHANGE_SELECT_COLUMN_PARAMS = 'CHANGE_SELECT_COLUM_PARAMS'
const CHANGE_SELECT_CONDITION_PARAMS = 'CHANGE_SELECT_CONDITION_PARAMS'
const CHANGE_FILTER_INPUT_VALUE = 'CHANGE_FILTER_INPUT_VALUE'
const RESET_VALUE = 'RESET_VALUE'

export const COLUMN_TITLE_NAME = 'Название'
export const COLUMN_TITLE_COUNT = 'Количество'
export const COLUMN_TITLE_DISTANCE = 'Расстояние'

export const CONDIT_TITLE_EQL = 'Проверка на равенство'
export const CONDIT_TITLE_BIGGER = 'Должно быть больше'
export const CONDIT_TITLE_SMALLER = 'Должно быть меньше'
export const CONDIT_TITLE_INCLUDES = 'Должно содержать'

export const initalState = {
    columnParams: COLUMN_TITLE_NAME,
    conditionParams: CONDIT_TITLE_EQL,
    filterInputValue: ''
}
export const columnParamsAC = (tColumnParams) => {
    return {
        type: CHANGE_SELECT_COLUMN_PARAMS,
        tColumnParams
    }
}

export const conditionParamsAC = (tConditionParams) => {
    return {
        type: CHANGE_SELECT_CONDITION_PARAMS,
        tConditionParams
    }
}

export const filterInputAC = (tFilterInputValue) => {
    return {
        type: CHANGE_FILTER_INPUT_VALUE,
        tFilterInputValue
    }
}

export const resetAC = () => {
    return {
        type: RESET_VALUE
    }
}

const headerReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SELECT_COLUMN_PARAMS:
            return {
                ...state, 
                columnParams: action.tColumnParams
            }
        case CHANGE_SELECT_CONDITION_PARAMS:
            return {
                ...state,
                conditionParams: action.tConditionParams
            }
        case CHANGE_FILTER_INPUT_VALUE:
            return {
                ...state, 
                filterInputValue: action.tFilterInputValue
            }
        case RESET_VALUE:
            return state
        default:
            return state
    }
}

export default headerReducer