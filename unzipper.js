
const unzipper = require('unzipper');
const fs = require('fs')

const zipFile = './2023-01-04-dump.zip'

// const requiredFiles = ['B_ACTIVITY.DAT', 'B_CHARGE.DAT', 'B_CLAIM.DAT', 'B_CLAIMSTATUS.DAT',]
const requiredFiles = ['INS_PARTIES.DAT', 'B_CHARGE.DAT',]

async function main() {
    const files = []
    const directory = await unzipper.Open.file(zipFile);
    let fileName = ''
    for await (let file of directory.files) {
        fileName = file.path.split('/')[1];
        if (requiredFiles.includes(fileName)) {
            file
                .stream()
                .pipe(fs.createWriteStream(`${fileName}`))
                .on('finish', (() => {
                    console.log('file created');
                    fs.unlink(file.path.split('/')[1], () => {
                        console.log('file remove ');
                    })
                }))
            files.push(fileName)
        }
    }
    return files;
}

; (async () => {
    let files = await main();

    console.log('filesList', files);
})();