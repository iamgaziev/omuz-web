const fs = require('fs');
const path = require('path');

const files = ['en.json', 'ru.json', 'tj.json'];
const basePath = path.join(__dirname, 'messages');

files.forEach(file => {
    const filePath = path.join(basePath, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Fix stats
    if (data.stats) {
        data.stats = {
            centers: file === 'en.json' ? "Education Centers" : file === 'ru.json' ? "Образовательные центры" : "Марказҳои таълимӣ",
            students: file === 'en.json' ? "Students" : file === 'ru.json' ? "Студенты" : "Донишҷӯён",
            experience: file === 'en.json' ? "Years of Experience" : file === 'ru.json' ? "Лет опыта" : "Соли таҷриба"
        };
    }

    // Fix contact_page duplicate/mess
    // It shouldn't be inside stats inside en.json (it got messed up), but we assign stats directly above.
    // And there might be a top-level contact_page we need to keep and just update `form`.
    if (!data.contact_page) data.contact_page = {};
    if (!data.contact_page.form) data.contact_page.form = {};

    data.contact_page.form.name = file === 'en.json' ? "Name" : file === 'ru.json' ? "Имя" : "Ном";
    data.contact_page.form.surname = file === 'en.json' ? "Surname" : file === 'ru.json' ? "Фамилия" : "Насаб";
    data.contact_page.form.study_location = file === 'en.json' ? "Where did you study?" : file === 'ru.json' ? "Где вы учились?" : "Дар куҷо таҳсил кардаед?";
    data.contact_page.form.phone = file === 'en.json' ? "Phone Number" : file === 'ru.json' ? "Номер телефона" : "Рақами телефон";

    // existing fields just in case
    data.contact_page.form.email = file === 'en.json' ? "Email" : file === 'ru.json' ? "Email" : "Почтаи электронӣ";
    data.contact_page.form.message = file === 'en.json' ? "Message" : file === 'ru.json' ? "Сообщение" : "Паём";
    data.contact_page.form.submit = file === 'en.json' ? "Send Message" : file === 'ru.json' ? "Отправить сообщение" : "Ирсоли паём";
    data.contact_page.form.success = file === 'en.json' ? "Message sent successfully!" : file === 'ru.json' ? "Сообщение успешно отправлено!" : "Паём бо муваффақият ирсол шуд!";
    data.contact_page.form.error = file === 'en.json' ? "Failed to send message. Please try again." : file === 'ru.json' ? "Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз." : "Ирсоли паём қатъ шуд. Лутфан, дубора кӯшиш кунед.";

    // Save back
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
});

console.log('Translations updated successfully');
