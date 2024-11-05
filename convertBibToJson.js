import fs from 'fs';
import bibtexParse from 'bibtex-parse-js';

// bibtex 파일을 JSON 형식으로 변환
const bibtexData = fs.readFileSync('./public/publications.bib', 'utf-8');
const jsonData = bibtexParse.toJSON(bibtexData);  // .entries 대신 .toJSON 사용

// JSON 파일로 저장
fs.writeFileSync('./public/publications.json', JSON.stringify(jsonData, null, 2));
console.log('BibTeX 파일이 JSON으로 변환되었습니다.');
