import { 
    COLUMN_TITLE_NAME,
    COLUMN_TITLE_DISTANCE,
    COLUMN_TITLE_COUNT,
    CONDIT_TITLE_EQL,
    CONDIT_TITLE_BIGGER,
    CONDIT_TITLE_SMALLER,
    CONDIT_TITLE_INCLUDES
} from "../components/Reducers/HeaderReducer"

const sort = (arr, sortParams) => {
    switch (sortParams.columnParams) {
        case COLUMN_TITLE_COUNT:
            return cntCaseFunc(arr, sortParams.conditionParams, sortParams.filterInputValue)
        case COLUMN_TITLE_NAME:
            return titleCaseFunc(arr, sortParams.conditionParams, sortParams.filterInputValue)
        case COLUMN_TITLE_DISTANCE:
            return distanceCaseFunc(arr, sortParams.conditionParams, sortParams.filterInputValue)
        default:
            return arr
    }    
}

const cntCaseFunc = (arr, conditionParams, value) => {
    switch(conditionParams) {
        case CONDIT_TITLE_EQL:
            return arr.filter(elnmt => elnmt._count === parseInt(value))
        case CONDIT_TITLE_INCLUDES:
            return arr.filter(elnmt => elnmt._count.toString().includes(value))
        case CONDIT_TITLE_BIGGER:
            return arr.filter(elnmt => elnmt._count > parseInt(value))
        case CONDIT_TITLE_SMALLER:
            return arr.filter(elnmt => elnmt._count < parseInt(value))
        default:
            return arr
    }
}


const titleCaseFunc = (arr, conditionParams, value) => {
    switch(conditionParams) {
        case CONDIT_TITLE_EQL:
            return arr.filter(elnmt => elnmt._title === value)
        case CONDIT_TITLE_INCLUDES:
            return arr.filter(elnmt => elnmt._title.includes(value))
        case CONDIT_TITLE_BIGGER:
            return arr.filter(elnmt => elnmt._title > value)
        case CONDIT_TITLE_SMALLER:
            return arr.filter(elnmt => elnmt._title < value)
        default:
            return arr
    }
}


const distanceCaseFunc = (arr, conditionParams, value) => {
    switch(conditionParams) {
        case CONDIT_TITLE_EQL:
            return arr.filter(elnmt => elnmt._distance === parseInt(value))
        case CONDIT_TITLE_INCLUDES:
            return arr.filter(elnmt => elnmt._distance.toString().includes(value))
        case CONDIT_TITLE_BIGGER:
            return arr.filter(elnmt => elnmt._distance > parseInt(value))
        case CONDIT_TITLE_SMALLER:
            return arr.filter(elnmt => elnmt._distance < parseInt(value))
        default:
            return arr
    }
}


export default sort