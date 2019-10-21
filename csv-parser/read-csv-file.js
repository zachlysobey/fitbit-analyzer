const fs = require('fs')
const csvParse = require('csv-parse')

// https://csv.js.org/parse/options/
const csvParseOptions = {
    columns: true,
    // cast: (value, context) =>
    //     context.quoting || context.header ? value : Number(value),
}

async function readCsvFile(fileName) {
    const fileContents = await readFile(fileName)
    let csvStrings = splitToSections(fileContents)

    const csvDocs = csvStrings.map(s => {
        const [name, ...rows] = s.split('\n')
        const body = rows.join('\n')
        return [name, body]
    })
    const parsed = await Promise.all(
        csvDocs.slice(0, 3).map(async ([name, body]) => {
            return [name, await parse(body)]
        }),
    )

    const result = parsed.reduce((acc, [name, parsed]) => {
        return {
            ...acc,
            [name]: parsed,
        }
    }, {})

    console.log(JSON.stringify({ result }, null, 2))

    return result
}

async function parse(csvString) {
    return new Promise((resolve, reject) => {
        csvParse(csvString, csvParseOptions, (err, data) =>
            err ? reject(err) : resolve(data),
        )
    })
}

function chopOffBodyHeader(csvString) {
    return csvString.substr('5')
}

function splitToSections(csvString) {
    return csvString.split('\n\n')
}

async function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) =>
            err ? reject(err) : resolve(data),
        )
    })
}

module.exports = {
    readCsvFile,
}
