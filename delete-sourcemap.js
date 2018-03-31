const fs = require('fs')

function deleteMaps(dir) {
    fs.readdir(dir, function(err, files) {
        files.forEach((file) => {
            if(/\.map$/.test(file)) {
                fs.unlinkSync(dir+file)
            } else {
                fs.readFile(dir+file, 'utf8', (err, data) => {
                    let result = data.split('\n')
                    console.log(result.length)
                    if (result[result.length-1] !== undefined && result.length > 1) {
                        fs.writeFileSync(dir+file, result.slice(0, result.length-1).join('\n'))
                    }
                })
            }
        })
    })
}

['./build/static/css/', './build/static/js/'].map(deleteMaps)