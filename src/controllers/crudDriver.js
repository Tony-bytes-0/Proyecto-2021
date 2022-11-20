
const getAll = async (req, res, next) => {
    await console.log(req.body)
    res.send('se accedio a getAll !!! ')
}

const getOne = async (req, res, next) => {
    await console.log(req.body)
    res.send('se accedio a getONE !!! ')
}

const create = async (req, res, next) => {
    await console.log(req.body)
    res.send('se accedio a Create !!! ')
}

const putOne = async (req, res, next) => {
    await console.log(req.body)
    res.send('se accedio a Put !!! ')
}

const deleteOne = async (req, res, next) => {
    await console.log(req.body)
    res.send('se accedio a delete !!! ')
}

export default getAll