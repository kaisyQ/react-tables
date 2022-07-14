const PAGE_SIZE = 10

const makePageNavArr = (totalCount) => {
    const countOfPageNavItems = Math.ceil(totalCount / PAGE_SIZE)
    const res = []
    for(let i = 1; i <= countOfPageNavItems; ++i) {
        res.push(i)
    }
    return res
}

export default makePageNavArr