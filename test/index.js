const fs = require('fs');
const path = require('path');
const chai = require('chai');
const chaiFiles = require('chai-files');

chai.use(chaiFiles);

const expect = chai.expect;
const file = chaiFiles.file;

const dust2jsx = require('../src');

function readFile(filepath) {
    return fs.readFileSync(path.join(__dirname, '..', filepath), 'utf8');
}

describe('dust2jsx', () => {

    it('should be defined', () => {
        expect(dust2jsx).to.not.be.undefined;
    });

    it('should convert plain template', () => {
        const result = dust2jsx(readFile('test/examples/plain.dust.html'));
        expect(result).to.be.equal(file('test/examples/plain.jsx'));
    });
});
