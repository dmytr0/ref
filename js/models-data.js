// js/models-data.js
const RAW_BASE_REPO_URL = 'https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master';
const BASE_REPO_URL = 'https://github.com/dmytr0/glory_to_ukraine/tree/master';

const modelsData = [
    {
        id: 'digital-night-v1-2',
        title: 'Digital Night v1.2 — корпус для нічного FPV',
        tags: ['fpv', 'digital-night', 'night-vision', 'dji', 'vista', 'case'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/digital-night-v1-2.md',
        description: "Корпус для електроніки **Digital Night v1.2** — модуля нічного FPV-відео на базі **DJI Vista** з аналоговою нічною камерою.\n\nСигнал камери **CVBS** перетворюється на HDMI за допомогою конвертера AV → HDMI, а адаптер DJI to HDMI передає його на вхід камери DJI Vista. Електроніка розміщується в одному компактному корпусі, який монтується на раму перед стеком.\n\n## Деталі для 3D-друку\n\n- **Корпус** — `digital_night_body_v1.2.stl`, габарити **40,4 × 58,3 × 20 мм**.\n- **Кришка** — `digital_night_lid_v1.2.stl`.\n- **Логотип** — `logo_v1.2.stl`: окрема вставка в паз кришки глибиною **0,7 мм**. Для двоколірного друку імпортуйте кришку та логотип у спільній системі координат, не змінюючи їхнього розташування.\n\n## Що встановлюється всередині\n\nЗнизу вгору:\n\n1. Плата конвертера **AV → HDMI**.\n2. **Matek mini power hub** — живлення 12 В для конвертера та аналогової камери.\n3. Адаптер **DJI to HDMI**.\n\nHDMI-роз'єм доступний через виріз у корпусі — шлейф до Vista можна під'єднати без розбирання блока.\n\n## Кріплення\n\n- **2 × M2** — саморізи для кришки (отвори ⌀1,9 мм).\n- **1 × M2** — кріплення нижнього фланця до рами (отвір ⌀1,7 мм).\n\n## Схема та складання\n\nСхема підключення, фотографії складання та STL-файли є у [проєкті Digital Night v1.2 на GitHub](https://github.com/dmytr0/glory_to_ukraine/tree/master/digital_night/v1.2).\n\n**Важливо:** це корпус для конкретної електронної конфігурації. Перед монтажем перевірте сумісність плат, живлення і розташування роз'ємів.\n",
        images: [
            `${RAW_BASE_REPO_URL}/digital_night/v1.2/media/12.jpg`,
            `${RAW_BASE_REPO_URL}/digital_night/v1.2/media/10.jpg`,
            `${RAW_BASE_REPO_URL}/digital_night/v1.2/media/11.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/digital_night/v1.2/media/12.jpg`,
        detailsUrl: `${BASE_REPO_URL}/digital_night/v1.2`
    },
    {
        id: 'xt90-to-2xt60',
        title: 'Перехідник XT90 → 2×XT60',
        tags: ['fpv', 'xt90', 'xt60', 'adapter', 'soldering'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/xt90-to-2xt60.md',
        description: "**Розгалужувач XT90 → 2 × XT60** із 3D-друкованим корпусом і шаблоном для фіксації конекторів під час пайки.\n\nПроєкт містить послідовність фотографій збірки: розташування роз'ємів у шаблоні, нанесення флюсу, пайку та встановлення вузла в корпус.\n\n## Збірка\n\n1. Встановіть роз'єми **XT90** і **2 × XT60** у друкований шаблон.\n2. Нанесіть флюс та запаяйте контактні з'єднання.\n3. Переверніть вузол, пропаяйте зворотний бік і перевірте якість з'єднань.\n4. Переконайтеся, що немає випадкових перемичок або крапель припою між контактами; перевірте полярність та відсутність короткого замикання мультиметром.\n5. Помістіть вузол у корпус. За інструкцією автора, для фіксації можна використати **гвинт M3 завдовжки 8–14 мм** та/або герметик.\n\n## Файли та фотографії\n\nУ [папці моделі на GitHub](https://github.com/dmytr0/glory_to_ukraine/tree/master/Other_staff/XT90_to_XT60x2) доступні файли конструкції та [покрокова фотоінструкція](https://github.com/dmytr0/glory_to_ukraine/blob/master/Other_staff/XT90_to_XT60x2/README.md).\n\n**Увага:** перед підключенням навантаження перевірте правильність розпайки, ізоляцію й допустимий струм для з'єднувачів, проводів і всієї збірки.\n",
        images: [
            `${RAW_BASE_REPO_URL}/Other_staff/XT90_to_XT60x2/media/7.jpg`,
            `${RAW_BASE_REPO_URL}/Other_staff/XT90_to_XT60x2/media/6.jpg`,
            `${RAW_BASE_REPO_URL}/Other_staff/XT90_to_XT60x2/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/Other_staff/XT90_to_XT60x2/media/3.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/Other_staff/XT90_to_XT60x2/media/7.jpg`,
        detailsUrl: `${BASE_REPO_URL}/Other_staff/XT90_to_XT60x2`
    },
    {
        id: 'yagi-adjustable',
        title: 'Ягі — стенд для налаштування',
        tags: ['yagi', 'antenna', 'vna', 'adjustable', 'radio'],
        category: 'antennas',
        descriptionFile: 'descriptions/yagi-adjustable.md',
        description: "## Ягі — стенд для налаштування\n\nМодель для підбору геометрії антени Ягі перед виготовленням постійної версії. Вібратор закріплений нерухомо, а рефлектор і директор(и) пересуваються вздовж основи. Це дає змогу швидко знайти робочі відстані під свою частоту, пруток і вузол живлення.\n\nПісля вимірювань готовий бум під знайдені параметри можна згенерувати у [параметричній моделі Ягі](https://paramodels-3d.dimonick.win/models/yagi-antenna).\n\n### Друк\n\n- [Основа, 330 мм](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/Yagi_adjustable/Body.stl) ×1. На столі Bambu Lab 255 мм деталь не вміщується прямо, але вміщується по діагоналі.\n- `vibrator_X.stl` ×1 — нерухомий тримач активного вібратора під діаметр прутка X: 1.5, 1.8, 2, 2.5 або 3.5 мм.\n- `element_adjustable_X.stl` або `element_adjustable_X_wide.stl` — по одному рухомому тримачу для кожного рефлектора та директора. Варіант `_wide` має ширший тримач; для прутка 3.5 мм є тільки він.\n\n### Діапазони переміщення\n\n- Рефлектор: до 90 мм від вібратора.\n- Один директор: до 180 мм від вібратора.\n\nПосадка прутка фіксована: обирайте STL точно під його діаметр. Результат перевіряйте VNA — стенд потрібен саме для підбору, а не гарантує роботу антени без вимірювань.\n\n[Відкрити всі файли моделі на GitHub](https://github.com/dmytr0/glory_to_ukraine/tree/master/Yagi_adjustable)\n",
        images: [
            `${RAW_BASE_REPO_URL}/Yagi_adjustable/media/1.png`,
            `${RAW_BASE_REPO_URL}/Yagi_adjustable/media/anim.gif`
        ],
        preview: `${RAW_BASE_REPO_URL}/Yagi_adjustable/media/1.png`,
        detailsUrl: `${BASE_REPO_URL}/Yagi_adjustable`
    },
    {
        id: 'paramodels-yagi-antenna',
        title: 'Антена Ягі (Alfa version)',
        tags: ['yagi', 'antenna', 'petg', 'vna', 'parametric'],
        category: 'antennas',
        descriptionFile: 'descriptions/paramodels-yagi-antenna.md',
        description: "## Антена Ягі (Alfa version)\n\nПараметричний PETG-бум для Ягі на 2–5 елементів. Конфігуратор розраховує довжини, дозволяє встановити ручні відстані та експортує STL або STEP.\n\n### Корисна інформація\n\n- Задайте кількість і переріз елементів, цільову частоту та потрібні відстані.\n- Auto та таблиці DK7ZB — стартові дані, а не заміна вимірювання VNA або RF-моделювання.\n- Не масштабуйте готовий STL у слайсері: це зіпсує посадки. Змініть параметри в конфігураторі та експортуйте знову.\n- Друкуйте бум пласкою основою до столу; довгі буми не діляться автоматично.\n\n[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/yagi-antenna/)\n",
        images: ['https://paramodels-3d.dimonick.win/model-previews/yagi-antenna.png'],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/yagi-antenna.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/yagi-antenna/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'paramodels-fpv-static-camera-mount',
        title: 'Статичне кріплення FPV-камери',
        tags: ['fpv', 'camera', 'mount', 'parametric'],
        category: 'fpv-cam-mounts',
        descriptionFile: 'descriptions/paramodels-fpv-static-camera-mount.md',
        description: "## Статичне кріплення FPV-камери\n\nПараметричне кріплення камери: виберіть шаблон рами та камери або задайте розміри вручну.\n\n### Корисна інформація\n\n- Перед експортом звірте міжосьові відстані, отвори та зазори між камерою, стійками й щоками.\n- Після експорту поверніть STL на 90° навколо осі Y і покладіть на площину друку.\n- Для жорсткого кріплення використовуйте щонайменше 3 периметри та заповнення від 30%.\n\n[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/fpv-static-camera-mount/)\n",
        images: ['https://paramodels-3d.dimonick.win/model-previews/fpv-static-camera-mount.png'],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/fpv-static-camera-mount.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/fpv-static-camera-mount/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'paramodels-fpv-battery-holder',
        title: 'Тримач великої батареї FPV',
        tags: ['fpv', 'battery', 'accumulator', 'holder', 'platform', 'parametric'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/paramodels-fpv-battery-holder.md',
        description: `## Тримач великої батареї FPV

Параметрична площадка для великої FPV-батареї з чотирма кутовими бортиками та фіксацією стрепами. Монтажні отвори налаштовуються під раму дрона.

### Налаштування моделі

- Два варіанти конструкції: окремі вуха під стрепи (V1) або прорізи в кутиках (V2).
- Внутрішня довжина та ширина площадки, товщина дна й стінок.
- Відстані між монтажними отворами, їхній діаметр, поздовжній зсув і фаски.
- Готові розрахункові конфігурації батарей на елементах 21700.

Перед друком виміряйте батарею разом з ізоляцією та додайте потрібний зазор. Розміри пресетів розрахункові й не перевірялися на реальних батареях. Перевірте сумісність монтажних отворів із рамою.

[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/fpv-battery-holder/)`,
        images: ['https://paramodels-3d.dimonick.win/model-previews/fpv-battery-holder.png'],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/fpv-battery-holder.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/fpv-battery-holder/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'paramodels-fpv-rx-mount',
        title: 'Універсальний тримач RX',
        tags: ['fpv', 'rx', 'antenna', 'mount', 'parametric'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/paramodels-fpv-rx-mount.md',
        description: "## Універсальний тримач RX\n\nКріплення RX до двох стійок рами з параметрами під конкретну геометрію.\n\n### Корисна інформація\n\n- Виміряйте відстань між центрами стійок, їхній зовнішній діаметр, потрібну висоту та виліт.\n- До експорту перевірте, що тримач не зачіпає пропелери, проводи та інші компоненти.\n- Друкуйте плоскою нижньою гранню; для основної форми підтримки зазвичай не потрібні.\n\n[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/fpv-rx-mount/)\n",
        images: ['https://paramodels-3d.dimonick.win/model-previews/fpv-rx-mount.png'],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/fpv-rx-mount.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/fpv-rx-mount/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'paramodels-fpv-rx-vtx-universal-mount',
        title: 'Універсальне кріплення RX / VTX',
        tags: ['fpv', 'rx', 'vtx', 'antenna', 'mount', 'parametric'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/paramodels-fpv-rx-vtx-universal-mount.md',
        description: "## Універсальне кріплення RX / VTX\n\nБаза зі стійками під раму та окремі поворотні тримачі антен для RX або VTX.\n\n### Корисна інформація\n\n- Оберіть шаблон рами або задайте міжосьову відстань, діаметр отворів і висоту стійок вручну.\n- STL і STEP містять окремі тіла: їх можна друкувати разом або розділити у слайсері.\n- Короткий боковий тримач сумісний лише з аналоговою версією; звичайний підходить обом, але виступає на 12 мм більше.\n- Рекомендований матеріал: Elastan D70/D100; PETG можливий, але поворотні частини надягаються суттєво тугіше.\n\n[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/fpv-rx-vtx-universal-mount/)\n",
        images: [
            'https://paramodels-3d.dimonick.win/model-previews/fpv-rx-vtx-universal-mount.png',
            'media/paramodels-rx-vtx-digital.png'
        ],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/fpv-rx-vtx-universal-mount.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/fpv-rx-vtx-universal-mount/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'paramodels-fpv-vtx-antenna-mount',
        title: 'Тримач VTX-антени',
        tags: ['fpv', 'vtx', 'antenna', 'mount', 'parametric'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/paramodels-fpv-vtx-antenna-mount.md',
        description: "## Тримач VTX-антени\n\nПараметричне кріплення одного пігтейла VTX на верхню кришку дрона.\n\n### Корисна інформація\n\n- Перед експортом звірте всі розміри та перегляньте 3D-модель на артефакти.\n- Після експорту поверніть STL на 90° навколо осі X — на бік.\n- Використовуйте підтримки та перевірте прилягання подовжень бази й перемичок до столу.\n\n[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/fpv-vtx-antenna-mount/)\n",
        images: ['https://paramodels-3d.dimonick.win/model-previews/fpv-vtx-antenna-mount.png'],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/fpv-vtx-antenna-mount.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/fpv-vtx-antenna-mount/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'paramodels-fpv-vtx-antenna-mount-digital',
        title: 'Тримач VTX-антени Digital',
        tags: ['fpv', 'vtx', 'antenna', 'digital', 'parametric'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/paramodels-fpv-vtx-antenna-mount-digital.md',
        description: "## Тримач VTX-антени Digital\n\nПараметричне кріплення двох пігтейлів цифрового VTX; внутрішній кут між площинами антен — 135°.\n\n### Корисна інформація\n\n- Перед експортом звірте розміри та огляньте модель на артефакти.\n- Після експорту поверніть STL на 90° навколо осі X — на бік.\n- Використовуйте підтримки; перед друком перевірте прилягання бази й перемичок до столу.\n\n[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/fpv-vtx-antenna-mount-digital/)\n",
        images: ['https://paramodels-3d.dimonick.win/model-previews/fpv-vtx-antenna-mount-digital.png'],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/fpv-vtx-antenna-mount-digital.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/fpv-vtx-antenna-mount-digital/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'paramodels-fpv-leg',
        title: 'FPV нога',
        tags: ['fpv', 'leg', 'support', 'zip-tie', 'parametric'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/paramodels-fpv-leg.md',
        description: "## FPV нога\n\nПараметрична опора з пазами під стяжки та автоматичними підсилювальними перемичками для великої висоти.\n\n### Корисна інформація\n\n- Висота задає відстань від верху основи до нижньої точки ноги; ширина — товщину деталі.\n- Пази під стяжки фіксовані: 8 × 4 мм. Крайні мають однаковий відступ, проміжні розподіляються рівномірно.\n- З підсиленням від 100 мм додається нижня перемичка, від 160 мм — ще й верхня.\n- Для друку використовуйте багато периметрів: орієнтир — 10–20 стінок.\n\n[Відкрити конфігуратор](https://paramodels-3d.dimonick.win/models/fpv-leg/)\n",
        images: ['https://paramodels-3d.dimonick.win/model-previews/fpv-leg.png'],
        preview: 'https://paramodels-3d.dimonick.win/model-previews/fpv-leg.png',
        detailsUrl: 'https://paramodels-3d.dimonick.win/models/fpv-leg/',
        detailsLabel: '⚙️ Відкрити конфігуратор'
    },
    {
        id: 'peakfpv-antenna-mount',
        title: 'Кріплення VTX Peakfpv THOR T35/T67',
        tags: ['manta10', 'mark4v2', 'xl10v7', 'vtx'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/thor-antenna-mount.md',
        description: "Маунт кріплення VTX **Peakfpv THOR T35/T67** без пігтейлу з підтримкою антени.\n\n[Кріплення універсальне. ⌀ 5mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/THOR_vtx_mount/thor_mount_universal_5mm.stl)\n\n[Кріплення універсальне. ⌀ 6mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/THOR_vtx_mount/thor_mount_universal_6mm.stl)\n\n[Фіксатор антени](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/THOR_vtx_mount/sma_fixture.stl)\n\nПідтримувані рами:\n\n- Manta 10\n- XL10V7. Потрібен [спейсер 5mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/THOR_vtx_mount/xl10v7_spacer_5mm.stl) OR [спейсер 6mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/THOR_vtx_mount/xl10v7_spacer_6mm.stl)\n- Mark4V2. Потрібен [спейсер 5mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/THOR_vtx_mount/mark4v2_spacer_5mm.stl) OR [спейсер 6mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/THOR_vtx_mount/mark4v2_spacer_6mm.stl)\n\n",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/THOR_vtx_mount/media/1.png`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/THOR_vtx_mount/media/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/THOR_vtx_mount/media/3.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/THOR_vtx_mount/media/4.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/THOR_vtx_mount/media/5.jpg`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/THOR_vtx_mount/media/1.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount/THOR_vtx_mount`
    },

    {
        id: 'dji-antenna-mount',
        title: 'Складний тримач цифрових антен DJI',
        tags: ['manta10', 'mark4v2', 'dji', 'digital'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/dji-antenna-mount.md',
        description: "## Тримач цифрових антен на передню частину рами\n\n    Можливо підійде під walksnail, але не тестовано.\n\nТакож можливо встановлення на manta10 сзаду-вниз (див. фото)\n\n### Друк:\n- Тримач антен x1\n    - [Універсальний](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/manta10/v0.3/D_ant_mount_ditch_manta10_v0.3.stl) підходить під різні бази.\n- База тримача антен x1\n    - [Manta10](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/manta10/v0.3/foldable_ant_mount_base_manta10_v0.3.stl)\n    - [Mark4V2](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/foldable_ant_mount_base_mark4_v0.3.stl)\n\n\n    Для збірки потрібен гвинт **M3x30** (від стеку)",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/manta10_rear_bottom.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/2.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount/`
    },


    {
        id: 'rx_2.4_foldable_mount',
        title: 'Складний тримач RX 2.4 антен',
        tags: ['manta10', 'mark4v2', 'rx', '2.4'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/rx_2.4_foldable_mount.md',
        description: "* Версія V1.0 - складається трошки вбік щоб антена не впиралась в верхню кришку рами. Для дронів в стопку підхоядть [спейсери середні 50mm](#fpv_stack_spacers)\n* Версія V0.3 - складається рівно. Для дронів в стопку підхоядть [спейсери великі 90mm](#fpv_stack_spacers) (або трошки менше, масштабування).\n\n    Антени на інші частоти не тестовані. \n    Також довші антени можуть заважати складати кріплення.\n\n### Друк v1.0:\n- Тримач антен x1\n  - [Універсальний](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/manta10/v1.0/rx_ant_mount_manta_10_v1.0.stl) підходить під різні бази.\n- База тримача антен x1\n  - [Manta10](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/manta10/v1.0/foldable_ant_mount_base_manta10_v1.0.stl) універсальна на верх.\n\n### Друк v0.3:\n- Тримач антен x1\n    - [Універсальний](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/manta10/v0.3/rx_ant_mount_manta_10_v0.3.stl) підходить під різні бази.\n- База тримача антен x1\n    - [Manta10](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/manta10/v0.3/foldable_ant_mount_base_manta10_v0.3.stl) універсальна на верх.\n    - [Manta10](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/manta10/v0.3/foldable_back_standoff_ant_mount_base_manta10_v0.3.stl) варіант на задні стійки. Зручно якщо треба XT90 стандартний і сзаду більше нічого немає.\n    - [Mark4V2](https://raw.githubusercontent.com/dmytr0/glory_to_ukraine/refs/heads/master/FPV_ANT_mount/foldable_ant_mount_base_mark4_v0.3.stl) універсальна на верх.\n\n\n    Для збірки потрібен гвинт **M3x30** (від стеку)",
        images: [
            `media/rx_2.4_v1.0.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/3.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/4.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/7.png`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/5.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/6.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/manta10/v0.3/media/4.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },
    {
        id: 'static-camera-mounts',
        title: 'Статичні кріплення для FPV камер',
        tags: ['static', 'camera', 'mount', 'dji', 'o3', 'o4', 'vtx', 'mark4v2', 'manta10', 'xl10v6', 'xl10v7', 'apex', 'flyflex', 'pidr', 'cx10', 'waveshare', 'custom'],
        category: 'fpv-cam-mounts',
        descriptionFile: 'descriptions/static-camera-mounts.md',
        description: "Колекція фіксованих кріплень для різних FPV камер та під різні рами.\n\n### Як обрати:\nПерша частина назви файлу вказує на раму:\n- v1 — **Mark4V1**, v2 — **Mark4V2** (префікси з README автора).\n- m4v1 / m4v2 — позначення версій Mark4V1 / Mark4V2; перед друком звірте геометрію кріплення зі своєю рамою.\n- custom -> невідомі мені назви рам. Розміри вказані в назві, наприклад: **w30.4** - відстань між стійками 30.4мм, **h37** - висота стійок 37мм\n- Інші мають бути зрозумілі з назви\n\n## Підтримувані рами\n\n- **Mark4V2**\n- **XL10V6/V7** \n- **Manta 10**\n- Інші рами присутні або за запитом\n\n\n## Потрібне кріплення під іншу раму або камеру?\n\n- Виміряйте __[відстань між центрами стійок](https://hole-distance.dimonick.win/)__ і висоту стійок вашої рами.\n- Використовуйте __[цю тулзу для](https://paramodels-3d.dimonick.win/models/fpv-static-camera-mount)__ побудови моделі за своїми параметрами\n\n---\n**Контакт для запитів**:\n\n<a href=\"https://t.me/dimonick\" target=\"_blank\">\n<img src=\"https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white\" alt=\"Telegram Link\"/>\n</a>\n",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/m4v2_o4_static_2.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/m4v2_o4_static_1.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/3.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static/media/m4v2_o4_static_2.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/Static`
    },
    {
        id: 'fpv_power_wire_soldering_helper',
        title: 'Хелпер пайки силових',
        tags: ['helper'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/fpv_power_wire_soldering_helper.md',
        description: "### Хелпер для пайки силових за інструкцією Social Drone UA\n    \n    Приклад розміщення для друку. Звернуть увагу як друкувати CAP.stl на картинці №3\n\n## [Інструкція](https://lizard-innovation-0ff.notion.site/SDUA-78aa5b77323f42eca06a9260f028d619)\n",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/3.jpg`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_power_wire_soldering_HELPER/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_power_wire_soldering_HELPER`
    },

    {
        id: 'ant_arm_support',
        title: 'Підтримка довгих антен (Beta)',
        tags: ['antenna', 'mark4v1', 'mark4v2'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/ant_arm_support.md',
        description: " (Beta) Немає відгуків про реальне застосування\n\n- [aux_ant_arm_L.stl](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/aux_ant_arm_L.stl)\n- [aux_ant_arm_R.stl](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/aux_ant_arm_R.stl)\n- [aux_ant_long_arm_L.stl](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/aux_ant_long_arm_L.stl)\n- [aux_ant_long_arm_R.stl](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/aux_ant_long_arm_R.stl)\n",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/2.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },

    {
        id: 'ant_arm_mount',
        title: 'Кріплення антени на промінь',
        tags: ['antenna', 'mark4v1', 'mark4v2', 'mount', 'arm', 'manta10', 'xl10v6', 'xl10v7'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/ant_arm_mount.md',
        description: "Особливо корисно для текстолітових антен, так як їх щільне прилягання до променів помітно змінює характеристики антени. \n\n### [Завантажити](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/rx_arm.stl)",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/4.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/3.png`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/4.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },

    {
        id: 'front_vtx_ant_mount_wings',
        title: 'Кріплення антен на передню частину рами (wings)',
        tags: ['antenna', 'mark4v1', 'mark4v2', 'mount', 'xl10v6', 'xl10v7'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/front_vtx_ant_mount_wings.md',
        description: "Під SMA пігтейли для антен VTX на перед рами.\n\n- [xl10v7 SMA wings](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/xl10v7_sma_front_wings.stl)\n- [mark4v2 SMA wings](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/m4v2_d_sma_front_wings.stl)\n\n ",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/xl10v7.png`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/sma_wings.png`,
            `${RAW_BASE_REPO_URL}/FPV_ANT_mount/5.png`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_ANT_mount/5.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },

    {
        id: 'vtx_ant_mount_1',
        title: 'Кріплення антени VTX назад (long)',
        tags: ['antenna', 'mark4v2', 'mount'],
        category: 'fpv-antenna-mounts',
        descriptionFile: 'descriptions/vtx_ant_mount_1.md',
        description: "## SMA маунт довгий\n\nПідходить для довгих пігтейлів.\n\n- [mark4v2 SMA](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_ANT_mount/m4v2_sma_5mm.stl)\n",
        images: [
            `media/vtx_ant_mount_1.png`
        ],
        preview: `media/vtx_ant_mount_1.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_ANT_mount`
    },

    {
        id: 'povorotna-camera-mount-v3',
        title: 'Поворотна камера V3',
        tags: ['camera', 'mount', 'servo', 'rotating', 'mark4v1', 'mark4v2', 'manta10', 'dji', 'o3', 'o4', 'caddx', 'ratel', 'runcam', 'thermo'],
        category: 'fpv-cam-mounts',
        descriptionFile: 'descriptions/povorotna-camera-mount-v3.md',
        description: "Поворотне кріплення для FPV камер з сервоприводом. Підтримує різні розміри камер і різні рами.\n\n---\n### [Інструкція з складання](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_CAMERA_MOUNT/Povorotna/V3/README.md)\n\n---\n\n## Вибір камери:\n- **19mm_cam.V3.stl** - де 19мм це ширина камери (зазвичай і висота окрім певних моделей)\n- **20mm** - O3 Unit\n- **dji_cam** - O4 PRO Unit, O3 Unit\n- Всі інші підбирати по розміру\n- **Подвійні кріплення** (double_19_20mm_cam.V3(BETA).stl, double_23mm_cam_M2.V3(BETA).stl)\n\n## Для збірки потрібно:\n- Серво Emax ES09MA\n- PTFE трубка ID3mm OD5mm\n- Гвинт M3x8/M3x10 x1\n- Шуруп M1.2x5 x2 для качалки серви\n- Фіксатор різьби (бажано)\n\n## Підтримувані рами:\n- Mark4V2\n- Manta10\n- XL10V6\n- XL10V7\n- fiberform\n- iflight\n- custom -> невідомі мені назви рам. Розміри вказані в назві, наприклад: **w30** - відстань між стійками 30мм, **h35** - висота стійок 35мм\n\n---\n    \n    Захист (armor) може давати додаткові вібрації, тому підходить більше для тестування.\n\n## Потрібне кріплення під іншу раму або камеру?\n\n[Виміряйте відстань між центрами стійок](https://hole-distance.dimonick.win/) і висоту стійок вашої рами.\n\n**Контакт для запитів**:\n\n<a href=\"https://t.me/dimonick\" target=\"_blank\">\n<img src=\"https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white\" alt=\"Telegram Link\"/>\n</a>\n",
        images: [
            'media/povorotna_v3.png',
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/4.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/2.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/media/3.jpg`
        ],
        preview: 'media/povorotna_v3.png',
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3`
    },

    {
        id: 'povorotna-camera-mount-v3-wide',
        title: 'Поворотна камера V3 широка',
        tags: ['camera', 'mount', 'servo', 'rotating', 'mark4v2', 'manta10', 'caddx', '640ca', '384ca', 'AC640', 'wide', '28mm', 'thermal'],
        category: 'fpv-cam-mounts',
        descriptionFile: 'descriptions/povorotna-camera-mount-v3-wide.md',
        description: "## Широке поворотне кріплення камери — BETA\n\nПризначене для камер **CADDX 640CA / 384CA** розміром **27 × 37 × 40 мм**, для рам **Mark4V2 / Manta10**.\n\n### Для складання\n\n- Серва **Emax ES09MA**.\n- PTFE-трубка з внутрішнім діаметром **3 мм** і зовнішнім **5 мм**.\n- Гвинт **M3×10 — 1 шт.**\n- Шурупи **M1.2×5 — 2 шт.** для качалки серви.\n- Фіксатор різьби — за потреби.\n\nПеред друком перевірте сумісність камери та рами. Модель має статус BETA.\n\n[README автора](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta/README.md)\n\n\n## Потрібне кріплення під іншу раму або камеру?\n\n[Виміряйте відстань між центрами стійок](https://hole-distance.dimonick.win/) і висоту стійок вашої рами.\n\n**Контакт для запитів**:\n\n<a href=\"https://t.me/dimonick\" target=\"_blank\">\n<img src=\"https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white\" alt=\"Telegram Link\"/>\n</a>\n",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta/media/1.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta/media/9.png`,
            `media/povorotna-camera-mount-v3-wide.png`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta/media/1.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/Povorotna/V3/wide_beta`
    },

    {
        id: 'digital_vtx_stand',
        title: 'Підставка для цифрових VTX',
        tags: ['DJI', 'dji', 'o3', 'o4', 'xl10v7', 'manta10', 'mark4v2'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/digital_vtx_stand.md',
        description: "Іноді треба підняти vtx для більш зручного монтажу. У випадку рами XL10V7 і [поворотки v3](/index.html#povorotna-camera-mount-v3) це необхідність щоб вліз vtx спереду.\n\n----\n\n- [O3 Unit universal](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_CAMERA_MOUNT/DJI_O3_stand.stl)\n- [O4 Pro Unit universal](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_CAMERA_MOUNT/DJI_O4_pro_stand.stl)\n- [XL10V7 будь який VTX](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_CAMERA_MOUNT/vtx_stand_xl10v7.stl)\n- [Special XL10V7 коли основа рами внизу 🤪](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_CAMERA_MOUNT/vtx_stand_xl10v7_inv.stl)",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/dji_O3_stand.png`,
            `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/dji_O4_pro_stand.png`,
            `media/xl10V7_vtx_stand.png`,
            `media/xl10V7_inv_vtx_stand.png`
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_CAMERA_MOUNT/dji_O4_pro_stand.png`,
        detailsUrl: `${BASE_REPO_URL}/FPV_CAMERA_MOUNT/`
    },
    {
        id: 'fpv_stack_spacers',
        title: 'FPV проставки для стопки дронів',
        tags: ['fpv', 'spacer'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/fpv_stack_spacers.md',
        description: "Проставки між дронами для зручного складання стопкою якщо щось заважає.\n\nПроставки можна пробувати трошки збільшувати або зменьшувати тільки по Z осі в слайсері, але без фанатизму.\n\nДва варіанти:\n- невеликі спесери на раму\n- на мотори,\n\n---\nФайли для друку:\n\n- [Високі 90mm під мотори 3115 (рекомендую)](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/bell_extender_light_90.stl)\n- [Високі 90mm під мотори 3115 (суцільний)](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/bell_extender_90.stl)\n- [Середні 50mm під мотори 3115](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/bell_extender_light_50.stl)\n- [mark4v2 перед part](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/mark4v2%20spacer.stl)\n- [mark4v2 зад part](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/mark4v2%20spacer%20back.stl)\n- [xl10v6 перед part 28mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/28_spacer_xl10v6_Front.stl)\n- [xl10v6 зад part 28mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/28_spacer_xl10v6_Rear.stl)\n- [xl10v6 перед part 12mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/12_spacer_xl10v6_Front.stl)\n- [xl10v6 зад part 12mm](https://github.com/dmytr0/glory_to_ukraine/blob/master/FPV_stack_spacers/12_spacer_xl10v6_Rear.stl)\n",
        images: [
            `${RAW_BASE_REPO_URL}/FPV_stack_spacers/3.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_stack_spacers/1.jpg`,
            `${RAW_BASE_REPO_URL}/FPV_stack_spacers/2.jpg`,
        ],
        preview: `${RAW_BASE_REPO_URL}/FPV_stack_spacers/3.jpg`,
        detailsUrl: `${BASE_REPO_URL}/FPV_stack_spacers`
    },

    {
        id: 'fpv_stack_adapters',
        title: 'FPV stack адаптери',
        tags: ['fpv', 'adapter'],
        category: 'fpv-misc',
        descriptionFile: 'descriptions/fpv_stack_adapters.md',
        description: "## FPV stack адаптери\n\nДруковані адаптери для встановлення електронного стека з міжцентровою відстанню кріплення **30,5 мм** на раму з іншим розташуванням монтажних отворів.\n\n### Доступні варіанти\n\n- **30,5 → 44 мм** — адаптер між кріпленням стека 30,5 мм і монтажними точками 44 мм.\n- **30,5 → 35 мм** — адаптер між кріпленням стека 30,5 мм і монтажними точками 35 мм.\n\n### Перед друком і встановленням\n\nВиміряйте відстані між центрами отворів стека й рами та виберіть відповідний STL. Перевірте діаметри отворів, довжину гвинтів, доступний простір і зазор до електроніки та проводів.\n\n### Файли моделі\n\n- [STL: 44_to_30.5_stack_adapter](https://github.com/dmytr0/glory_to_ukraine/blob/master/stack_mount/44_to_30.5_stack_adapter.stl)\n- [STL: 30.5_to_35_adapter](https://github.com/dmytr0/glory_to_ukraine/blob/master/stack_mount/30.5_to_35_adapter.stl)\n- [Папка проєкту з фотографіями](https://github.com/dmytr0/glory_to_ukraine/tree/master/stack_mount)\n",
        images: [
            `${RAW_BASE_REPO_URL}/stack_mount/media/44_stack_adapter_1.jpg`,
            `${RAW_BASE_REPO_URL}/stack_mount/media/44_stack_adapter_2.jpg`,
            `media/30.5_to_35_adapter.png`
        ],
        preview: `${RAW_BASE_REPO_URL}/stack_mount/media/44_stack_adapter_1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/stack_mount`
    },

    {
        id: 'smoke_extractor',
        title: 'Витяжка диму від пайки',
        tags: ['Solder', 'smoke', 'extractor', 'esp32c3', 'fan'],
        category: 'misc',
        descriptionFile: 'descriptions/smoke_extractor.md',
        description: "Автономна витяжка диму від пайки: 120мм кулер + фільтр з активованого вугілля.\n\nЖивлення від LiIon (21700 x1 або 18650 x2) з зарядкою TP4056, регулювання обертів енкодером.\n\n[Прошивка (ESP32C3)](https://github.com/dmytr0/SmokeExtractor) · [BOM та інструкція](https://github.com/dmytr0/glory_to_ukraine/blob/master/SmokeExtractor/README.md)\n\nДрук:\n- [Передня частина корпусу](https://github.com/dmytr0/glory_to_ukraine/blob/master/SmokeExtractor/BodyFront.stl)\n- [Задня частина корпусу](https://github.com/dmytr0/glory_to_ukraine/blob/master/SmokeExtractor/BodyRear.stl)\n- Ручка енкодера: [велика](https://github.com/dmytr0/glory_to_ukraine/blob/master/SmokeExtractor/encoder_handle_big.stl) або [мала](https://github.com/dmytr0/glory_to_ukraine/blob/master/SmokeExtractor/encoder_handle_small.stl)\n\nЗбірка на клей.\n",
        images: [
            `${RAW_BASE_REPO_URL}/SmokeExtractor/media/1.jpg`,
            `${RAW_BASE_REPO_URL}/SmokeExtractor/media/2.png`,
            `${RAW_BASE_REPO_URL}/SmokeExtractor/media/3.png`,
            `${RAW_BASE_REPO_URL}/SmokeExtractor/media/4.png`,
            `${RAW_BASE_REPO_URL}/SmokeExtractor/media/5.png`
        ],
        preview: `${RAW_BASE_REPO_URL}/SmokeExtractor/media/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/SmokeExtractor`
    },

    {
        id: 'solder_stand',
        title: 'Тримач котушки припою',
        tags: ['Solder'],
        category: 'misc',
        descriptionFile: 'descriptions/solder_stand.md',
        description: "Тримач котушки припою\n\nПідходить під котушки типу Cynel, LAOA, Mechanic або інші з внутрішнім діаметром від 19мм до 21мм і зовнішнім діаметром до 67мм.\n\n\n### Для складання\n\n- Упорний підшипник **AXK0821**.\n- Сталевий прут **2 мм**, довжина **понад 70 мм**.\n- Стопорне кільце **1,5 мм**.\n- Антиковзні ніжки — опційно.\n\nАвтор рекомендує друкувати **широку версію** для кращої стійкості. Вузька версія більше підходить для малих легких котушок.\n\n[README автора](https://github.com/dmytr0/glory_to_ukraine/blob/master/For_soldering/Solder_stand/README.md)\n",
        images: [
            `${RAW_BASE_REPO_URL}/For_soldering/Solder_stand/media/12.jpg`,
            `${RAW_BASE_REPO_URL}/For_soldering/Solder_stand/media/anim1.gif`,
            `media/solder_stand.png`,
        ],
        preview: `${RAW_BASE_REPO_URL}/For_soldering/Solder_stand/media/12.jpg`,
        detailsUrl: `${BASE_REPO_URL}/For_soldering/Solder_stand`
    },

    {
        id: 'pd_qc_module',
        title: 'PD/QC модуль від XT60',
        tags: ['PD', 'QC', 'XT60', 'Charger'],
        category: 'misc',
        descriptionFile: 'descriptions/pd_qc_module.md',
        description: "Модуль який з FPV батареї робить USB зарядку з підтримкою Power Delivery/ Quick Charge потожністю до 60 Ватт.\n\nМоже бути корисно як військовим у польових умовах, так і дроноробам/дронолюбам у польових умовах або під час блекаутів.\n\nUSB-A та USB-C роз'єми.\n\nЄ дві версії з вольтметром і без.\n\nДрук:\n- Body:\n  - [Варіант з вольтметром](https://github.com/dmytr0/glory_to_ukraine/blob/master/PD_QC_module/Body_VM_v2.stl)\n  - [Варіант без вольтметра](https://github.com/dmytr0/glory_to_ukraine/blob/master/PD_QC_module/Body_v2.stl)\n- [Кришка для обох варіантів](https://github.com/dmytr0/glory_to_ukraine/blob/master/PD_QC_module/cover_v2.stl)",
        images: [
            `${RAW_BASE_REPO_URL}/PD_QC_module/5.jpg`,
            `media/pd-qc.png`,
            `media/pd-qc-vm.png`,
            `${RAW_BASE_REPO_URL}/PD_QC_module/3.jpg`,
            `${RAW_BASE_REPO_URL}/PD_QC_module/7.jpg`,
        ],
        preview: `${RAW_BASE_REPO_URL}/PD_QC_module/5.jpg`,
        detailsUrl: `${BASE_REPO_URL}/PD_QC_module`
    },

    {
        id: 'rk6006_xy5008_box',
        title: 'Компактний корпус для DCDC модулів RK6006/XY5008',
        tags: ['rk6006', 'xy5008', 'xy5005', 'XT60', 'DCDC', 'Box', 'Case'],
        category: 'misc',
        descriptionFile: 'descriptions/rk6006_xy5008_box.md',
        description: "Компактний корпус під DCDC перетворювачі типу XY5008/XY5005, Riden RK6006,  або аналогічного формфактору.\n\nВиходи **XT60**\n\n### [Інструкція](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/RK6006_XY5008_Box/README.md)",
        images: [
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/1.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/2.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/3.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/Portable_Lab_PowerSupply/RK6006_XY5008_Box`
    },

    {
        id: 'portable_lab_power_supply',
        title: 'Портативний автономний блок живлення на 50V',
        tags: ['rk6006', 'xy5008', 'xy5005', 'XT60', 'DCDC', 'Box', 'Case'],
        category: 'misc',
        descriptionFile: 'descriptions/portable_lab_power_supply.md',
        description: "Живлення від вбудованих 13S аккумуляторів 21700. \n\n    ! Напруга на виході буде завжди меньше ніж заряд акумуляторів\n\n_Може бути корисним в польових умовах або під час блекаутів._\n\nДрук:\n- [Передня панель](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/frontPanel.stl) x1\n- [Ліва стінка](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/L_wall.stl) x1\n- [Права стінка](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/R_wall.stl) x1\n- [Основа](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/base.stl) x1\n- [21700x13 холдер](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/bat_13.stl) x2\n- [Пластина кріпдлення BMS](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/bms_fixture.stl)  x1\n- [Корпус для фільтра повітря](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/filter_body.stl)  x1 Optional.\n- Верхня кришка  x1:\n  - [з індикатором заряду](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/top_s_indicator.stl)\n  - [без індикатору](https://github.com/dmytr0/glory_to_ukraine/blob/master/Portable_Lab_PowerSupply/MINI_autonomous/top_s.stl)",
        images: [
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/2.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/1.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/3.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/4.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/5.jpg`,
            `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/6.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous/2.jpg`,
        detailsUrl: `${BASE_REPO_URL}/Portable_Lab_PowerSupply/MINI_autonomous`
    },

    {
        id: 'rf_power_meter_mod',
        title: 'Корпус під RF потужномір з модифікацією',
        tags: ['powermeter'],
        category: 'misc',
        descriptionFile: 'descriptions/rf_power_meter_mod.md',
        description: "    (Beta version)\n\nКорпус для бюджетного RF power meter модифікованого додатковим дисплеєм для виводу потужності в міліватах\n\n[Інструкція](https://github.com/dmytr0/glory_to_ukraine/blob/master/RF_power_meter/README.md)\n\nДрук:\n- [Основа](https://github.com/dmytr0/glory_to_ukraine/blob/master/RF_power_meter/body.stl)\n- [Кришка](https://github.com/dmytr0/glory_to_ukraine/blob/master/RF_power_meter/cover.stl)\n",
        images: [
            `${RAW_BASE_REPO_URL}/RF_power_meter/1.jpg`,
            `media/powermeter.png`
        ],
        preview: `${RAW_BASE_REPO_URL}/RF_power_meter/1.jpg`,
        detailsUrl: `${BASE_REPO_URL}/RF_power_meter`
    },

    {
        id: 'spool_holder_roller',
        title: 'Роликовий тримач котушок 0,75–3 кг',
        tags: ['spool holder'],
        category: 'misc',
        descriptionFile: 'descriptions/spool_holder_roller.md',
        description: "Роликовий тримач котушки філаменту з боковими підтримками від сльоту котушки.\n\nПідходить під різні котушки від 0.75 до 3кг -> Ширина до 130мм діаметр від 180мм до 270мм (Обмеження для 3 роликового варіанту)\n\n\nЄ версія на **два** ролики і на **три** (третя спереду). \nЯкщо тримач закріплений то третій ролик запобігатиме вильоту котушки з тримача у випадку поганої намотки.\n\n### [Інструкція](https://github.com/dmytr0/glory_to_ukraine/blob/master/spool_holder_roller/README.md)\n",
        images: [
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/1.png`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/2.png`,
            `media/spool_holder_roller_x2.png`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/3.jpg`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/4.jpg`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/5.jpg`,
            `${RAW_BASE_REPO_URL}/spool_holder_roller/media/6.jpg`
        ],
        preview: `${RAW_BASE_REPO_URL}/spool_holder_roller/media/2.png`,
        detailsUrl: `${BASE_REPO_URL}/spool_holder_roller`
    },

    {
        id: 'powerbank_x16',
        title: 'Павербанк 16x21700',
        tags: ['powerbank'],
        category: 'misc',
        descriptionFile: 'descriptions/powerbank_x16.md',
        description: "Корпус для повербанку з 16 елементів 21700 і модуля до 100W\n",
        images: [
            'media/powerbank_16.png',
            `${RAW_BASE_REPO_URL}/powerbanka_16x21700/3.jpg`,
            `${RAW_BASE_REPO_URL}/powerbanka_16x21700/1.jpg`,
            `${RAW_BASE_REPO_URL}/powerbanka_16x21700/2.jpg`

        ],
        preview: `media/powerbank_16.png`,
        detailsUrl: `${BASE_REPO_URL}/powerbanka_16x21700`
    },

    {
        id: 'silica_gel_box',
        title: 'Бокс для сілікагеля (осушувач)',
        tags: ['drybox', 'silica-gel'],
        category: 'misc',
        descriptionFile: 'descriptions/silica_gel_box.md',
        description: "Бокс для силікагеля.\n\nРозмір 130x120x18mm\n\nШирина прорізів 1.8мм - для гранул більше 2mm\n",
        images: [
            'media/silica_gel_box.png'
        ],
        preview: `media/silica_gel_box.png`,
        detailsUrl: `${BASE_REPO_URL}/silicagel_box`
    }


];

const CATEGORIES = {
    'antennas': 'Антени',
    'fpv-antenna-mounts': 'FPV маунти антен',
    'fpv-cam-mounts': 'FPV маунти камер',
    'fpv-misc': 'FPV різне',
    'misc': 'Різне'
};
