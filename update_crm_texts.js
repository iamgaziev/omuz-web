const fs = require('fs');

const enPath = 'c:/Users/mk/Desktop/Omuz TJ/omuz/messages/en.json';
const ruPath = 'c:/Users/mk/Desktop/Omuz TJ/omuz/messages/ru.json';
const tjPath = 'c:/Users/mk/Desktop/Omuz TJ/omuz/messages/tj.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ru = JSON.parse(fs.readFileSync(ruPath, 'utf8'));
const tj = JSON.parse(fs.readFileSync(tjPath, 'utf8'));

// EN updates
en.hero.slides[1].subtitle = "Comprehensive management systems for academies and educational institutions.";
en.hub.crm.desc = "Management system for academies and student tracking.";

// RU updates
ru.products_crm.subtitle = "Идеальный журнал студентов и система управления академией";
ru.products_crm.description = "Оптимизируйте работу вашего учебного заведения с помощью нашей специализированной системы. От зачисления студентов до отслеживания посещаемости и успеваемости — Omuz CRM справится со всем.";
ru.products_crm.features.payments.title = "Отслеживание успеваемости";
ru.products_crm.features.payments.desc = "Отслеживайте успеваемость студентов, создавайте отчеты и управляйте планами уроков.";
ru.products_crm.stats.centers = "Академий";
ru.products_crm.stats.users = "Активных преподавателей";
ru.products_crm.stats.transactions = "Студентов отслеживается";
ru.products_crm.items["0"].q = "Как CRM поможет моей академии?";
ru.products_crm.items["0"].a = "Наша CRM автоматизирует отслеживание студентов, расписание и журналы успеваемости, позволяя преподавателям сосредоточиться на обучении.";
ru.product_crm.desc = "Оптимизируйте работу вашей академии и студенческие журналы.";
ru.product_crm.features = [
  "База студентов и преподавателей",
  "Отслеживание успеваемости и посещаемости",
  "Академическая отчетность",
  "Оптимизация расписания"
];
ru.hero.slides[1].subtitle = "Комплексные системы управления для академий и образовательных учреждений.";
ru.hub.crm.desc = "Система управления для академий и отслеживания студентов.";

// TJ updates
tj.products_crm.subtitle = "Беҳтарин журнали донишҷӯён ва системаи идоракунии академия";
tj.products_crm.description = "Кори муассисаи таълимии худро бо системаи махсуси мо осон кунед. Аз қабули донишҷӯён то назорати давомот ва пешрафт — хуллас Omuz CRM ҳамаи инро идора мекунад.";
tj.products_crm.features.payments.title = "Назорати пешрафт";
tj.products_crm.features.payments.desc = "Пешрафти донишҷӯёнро назорат кунед, ҳисоботҳо таҳия кунед ва нақшаҳои дарсиро идора кунед.";
tj.products_crm.stats.centers = "Академияҳо";
tj.products_crm.stats.users = "Устодони фаъол";
tj.products_crm.stats.transactions = "Донишҷӯёни фарогирифташуда";
tj.products_crm.items["0"].q = "CRM ба академияи ман чӣ гуна кӯмак мерасонад?";
tj.products_crm.items["0"].a = "CRM-и мо назорати донишҷӯён, ҷадвал ва журналҳои пешрафтро автоматӣ мекунад, ки ба устодон имкон медиҳад диққати худро ба таълим равона кунанд.";
tj.product_crm.desc = "Кори академия ва журналҳои донишҷӯёнро осон кунед.";
tj.product_crm.features = [
  "Пойгоҳи донишҷӯён ва устодон",
  "Назорати пешрафт ва давомот",
  "Ҳисоботи академӣ",
  "Оптимизатсияи ҷадвал"
];
tj.hero.slides[1].subtitle = "Системаҳои мукаммали идоракунӣ барои академияҳо ва муассисаҳои таълимӣ.";
tj.hub.crm.desc = "Системаи идоракунӣ барои академияҳо ва назорати донишҷӯён.";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2), 'utf8');
fs.writeFileSync(ruPath, JSON.stringify(ru, null, 2), 'utf8');
fs.writeFileSync(tjPath, JSON.stringify(tj, null, 2), 'utf8');

console.log("All locale files updated with student academy focus.");
