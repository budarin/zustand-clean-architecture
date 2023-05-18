import { readdir } from 'fs';

const testFolder = './assets/site_icons';

readdir(testFolder, (err, files) => {
    files.forEach((file) => {
        console.log(file);
    });
});
