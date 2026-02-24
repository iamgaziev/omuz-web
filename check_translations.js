const fs = require('fs');

const en = JSON.parse(fs.readFileSync('c:/Users/mk/Desktop/Omuz TJ/omuz/messages/en.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('c:/Users/mk/Desktop/Omuz TJ/omuz/messages/ru.json', 'utf8'));
const tj = JSON.parse(fs.readFileSync('c:/Users/mk/Desktop/Omuz TJ/omuz/messages/tj.json', 'utf8'));

function flatten(obj, prefix = '') {
  let result = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flatten(obj[key], prefix + key + '.'));
    } else {
      result[prefix + key] = obj[key];
    }
  }
  return result;
}

const flatEn = flatten(en);
const flatRu = flatten(ru);
const flatTj = flatten(tj);

console.log("=== Missing or English in RU ===");
for (const key in flatEn) {
  if (!flatRu[key]) {
    console.log(`[MISSING RU] ${key}`);
  } else if (flatRu[key] === flatEn[key] && /[a-zA-Z]/.test(flatEn[key])) {
    console.log(`[SAME AS EN RU] ${key}: ${flatRu[key]}`);
  }
}

console.log("\n=== Missing or English in TJ ===");
for (const key in flatEn) {
  if (!flatTj[key]) {
    console.log(`[MISSING TJ] ${key}`);
  } else if (flatTj[key] === flatEn[key] && /[a-zA-Z]/.test(flatEn[key])) {
    console.log(`[SAME AS EN TJ] ${key}: ${flatTj[key]}`);
  }
}
