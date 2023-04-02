const { join } = require('path')
const {
    readdirSync,
    lstatSync
} = require('fs')

const defaultLanguage = 'en';

const languages = readdirSync(join(__dirname, '../locales')).filter((fileName) => {
    const joinedPath = join(join(__dirname, '../locales'), fileName)
    const isDirectory = lstatSync(joinedPath).isDirectory()
    return isDirectory
});

// console.log("\n\n\n\n\n\n\n\n\n\nlanguages: ", languages)

languages.splice(languages.indexOf(defaultLanguage), 1);
languages.unshift(defaultLanguage);

module.exports = {
    languages,
    defaultLanguage,
};
