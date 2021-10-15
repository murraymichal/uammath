function generate() {
    let arr = ['1a', '1b', '1c', '2a', '3aa',
        '2b',
        '3ab',
        '3ba',
        '4a',
        '4b',
        '2c',
        '2d',
        '3bb',]
    arr.sort()
    var arrr = arr.map(e => template(e)).join('\n')
    console.log(arrr)
}

var template = (n) => {
    return `<div> <label for="${n}"><a><button id=${n}>${n}</button></a></label>
        <img name='${n}' src='./${n}.png' /> 
    </div>`
}

generate()