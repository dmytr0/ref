### 1. Файли вже в іншому репозиторії
Всі зображення та STL файли зберігаються в основному репозиторії з моделями.
Цей репозиторій тільки для каталогу!

### 2. Додавання нової моделі
У файл `js/models-data.js` додайте новий об'єкт:

```javascript
{
    id: 'id1',
    title: 'name1',
    tags: ['tag1', 'tag2'],
    category: 'misc',
    descriptionFile: 'descriptions/id1.md',
    images: [
        `${RAW_BASE_REPO_URL}/1.jpg`,
        `${RAW_BASE_REPO_URL}/2.jpg`
    ],
    preview: `${RAW_BASE_REPO_URL}/1.jpg`,
    detailsUrl: `${BASE_REPO_URL}/mount`
}
```
