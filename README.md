# Як додавати нові моделі

## Покрокова інструкція:

### 1. Файли вже в іншому репозиторії
Всі зображення та STL файли зберігаються в основному репозиторії з моделями.
Цей репозиторій тільки для каталогу!

### 2. Додавання нової моделі
Відкрийте файл `js/models-data.js` та додайте новий об'єкт:

```javascript
{
    id: 'унікальний-id',
        title
:
    'Назва моделі',
        tags
:
    ['тег1', 'тег2'],
        category
:
    'fpv-antenna-mounts',
        description
:
    `# Назва
    
Опис в markdown з посиланнями на зображення:

![Фото](${RAW_BASE_REPO_URL}/images/модель/фото.jpg)`,
        images
:
    [
        `${RAW_BASE_REPO_URL}/images/модель/main.jpg`,
        `${RAW_BASE_REPO_URL}/images/модель/side.jpg`
    ],
        preview
:
    `${RAW_BASE_REPO_URL}/images/модель/main.jpg`,
        downloadUrl
:
    `${RAW_BASE_REPO_URL}/files/модель.stl`,
        previewUrl
:
    `${RAW_BASE_REPO_URL}/preview/модель.html`,
        dateAdded
:
    '2025-01-XX'
}
```

### 3. Налаштування
1. Змініть `BASE_REPO_URL` на початку файлу на URL вашого репо з моделями
2. Всі посилання автоматично будуть вказувати на той репозиторій

### 4. Категорії
- `fpv-antenna-mounts` - FPV маунти антен  
- `fpv-gimbals` - FPV поворотки
- `fpv-misc` - FPV різне
- `misc` - Різне

Це все! Тільки редагуєте `models-data.js` - файли беруться з іншого репо.# ref