const fs = require('fs');

const ruPath = 'c:/Users/mk/Desktop/Omuz TJ/omuz/messages/ru.json';
const tjPath = 'c:/Users/mk/Desktop/Omuz TJ/omuz/messages/tj.json';

const ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));
const tj = JSON.parse(fs.readFileSync(tjPath, 'utf8'));

ru.testimonials.jamshed_role = "Генеральный директор, TechForward";
ru.testimonials.malika_role = "HR Директор, Bank Eskhata";
ru.testimonials.davron_role = "Финансовый менеджер, Somon Air";

tj.testimonials.jamshed_role = "Директори генералӣ, TechForward";
tj.testimonials.malika_role = "Директори HR, Bank Eskhata";
tj.testimonials.davron_role = "Менеҷери молиявӣ, Somon Air";

fs.writeFileSync(ruPath, JSON.stringify(ru, null, 2), 'utf8');
fs.writeFileSync(tjPath, JSON.stringify(tj, null, 2), 'utf8');

console.log("Roles added");
