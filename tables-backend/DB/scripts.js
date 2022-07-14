
class DBScripts {
    constructor(client, pageCount) {
        this.client = client
        this.pageCount = pageCount
    }
    async getTables(uriPageId) {
        try {
            const leftInequality = (uriPageId - 1) * this.pageCount
            const rightInequality = uriPageId * this.pageCount
            const resTmp = await this.client.query(`SELECT * FROM TMPTABLE WHERE id > ${leftInequality} AND id <= ${rightInequality}`)
            const res = resTmp.rows.map(tableItem => { return {...tableItem, _date: tableItem._date.toLocaleString().split(',')[0].split('.').join('/')}})
            return res
        } catch (err) {
            console.error(err)
        }
        return null
    }
    async getTotalCount() {
        try {
            const resTmp = await this.client.query(`SELECT * FROM TMPTABLE`)
            return resTmp.rows.length
        } catch (err) {
            console.error(err)
        }
        return null
    }
}

export default DBScripts