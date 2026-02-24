const fs = require('fs');

const enPath = './messages/en.json';
const ruPath = './messages/ru.json';
const tjPath = './messages/tj.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));
const tj = JSON.parse(fs.readFileSync(tjPath, 'utf8'));

// Keys specific to Online Omuz
const onlineKeys = [
    // Products online section
    ['products_online', 'subtitle'],
    ['products_online', 'platform_text'],
    // Product online object (if exists)
    ['product_online', 'desc'],
    ['product_online', 'cta'],
    ['product_online', 'platform_text'],
    // Hero slide 2
    ['hero', 'slides', 2, 'title'],
    ['hero', 'slides', 2, 'subtitle'],
    // Hub online
    ['hub', 'online', 'desc'],
    ['hub', 'online', 'hint']
];

function updateNestedObject(obj, path, replaceFn) {
    let current = obj;
    for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) return; // Does not exist
        current = current[path[i]];
    }
    const lastKey = path[path.length - 1];
    if (current && typeof current[lastKey] === 'string') {
        current[lastKey] = replaceFn(current[lastKey]);
    }
}

onlineKeys.forEach(path => {
    // English: System -> Platform, Systems -> Platforms
    updateNestedObject(en, path, str => str.replace(/System/g, 'Platform').replace(/system/g, 'platform'));

    // Russian: Система -> Платформа, системы -> платформы
    updateNestedObject(ru, path, str => str
        .replace(/Система/g, 'Платформа')
        .replace(/система/g, 'платформа')
        .replace(/систему/g, 'платформу')
        .replace(/системой/g, 'платформой')
        .replace(/Системы/g, 'Платформы')
        .replace(/системе/g, 'платформе')
        // Adjective forms if any
        .replace(/Системаи/g, 'Платформаи') // Tajik
        .replace(/системаи/g, 'платформаи') // Tajik
    );

    // Tajik: Система -> Платформа
    updateNestedObject(tj, path, str => str
        .replace(/Система/g, 'Платформа')
        .replace(/система/g, 'платформа')
        .replace(/Системаи/g, 'Платформаи')
        .replace(/системаи/g, 'платформаи')
    );
});

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(ruPath, JSON.stringify(ru, null, 2), 'utf8');
fs.writeFileSync(tjPath, JSON.stringify(tj, null, 2), 'utf8');

console.log('Successfully reverted Online Omuz terminology back to platform.');
