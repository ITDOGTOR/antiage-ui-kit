# Anti-Age UI-Kit

# Краткое описание

Проект создан по шаблону библиотеки `tsdx`. В нём используется семантическое версионирование `semantic-release`.
Собирается проект с помощью `Rollup`.

## Установка проекта

- Настроить git для избежания конфликта `LF` и `CRLF` (**_опционально_**)

```
git config --global core.autocrlf 'input'
```

- Склонировать репозиторий
- Установить зависимости

``` bash
npm install
```

## Архитектура

```
src/
  index.ts // корень UI-Kit, реэкспорты компонентов и их стилей
  ui-kit.css // CSS-переменным по Opium.Fill
  components/ // компоненты UI-Kit
    NameComponent // шаблон компонента
      NameComponent.tsx // компонент
      NameComponent.css // стили
      NameComponent.test.ts // тесты
      NameComponent.stories.tsx // storybook компонента
      NameComponent.types.ts // типы компонента
      index.ts // реэкспорт компонента по дефолту
  assets // компоненты svg
    NameAsset.tsx // компонент svg
    SvgAssets.stories.tsx // список svg, которые можно использовать
    index.ts // реэкспорт компонентов
```

## Npm Scripts

- `npm run prepare` - Установить Husky
- `npm run build` - Сборка проекта
- `npm run test` - Запуск тестов
- `npm run size` - Проверка собранного проекта на ограничение по весу
- `npm run lint` - Выявление несоответствий и авто-исправление кодового стиля в `.js/.ts` файлах
- `npm run stylelint` - Выявление несоответствий и авто-исправление кодового стиля в `.css` файлах
- `npm run semantic-release` - Выпуск новой версии проекта в релиз
- `npm run storybook` - Запуск `Storybook` в `development` режиме
- `npm run build-storybook` - Выпуск `Storybook` проекта через `GitHub Pages`
- `npm run generate NameComponent` - Создание шаблона компонента UI-Kit компонента
- `npm run svgr` - Создание svg-компонентов из .svg. _Файлы нужно класть в папку `assets`_

## Git Branching

Наименования веток:

- `feat/name-feat` - новая фича
- `fix/name-fix` - исправление бага
- `docs/name-docs` - добавление или изменение документации
- `style/name-style` - изменения, которые не влияют на работу кода
- `refactor/name-refactor` - изменения без новой функциональности, без исправления бага
- `perf/name-perf` - изменения повышающее производительность
- `test/name-test` - добавление или изменение тестов
- `chore/name-chore` - изменения процесса сборки, вспомогательных инструментов, библиотек

## Commits Naming

В проекте используется `semantic-release`, поэтому у коммитов должно быть оформленное по всем правилам название.
Это нужно для определения следующего номера версии проекта. Все правила взяты
из ["Соглашение о коммитах"](https://www.conventionalcommits.org/ru/v1.0.0/) **К прочтению ОБЯЗАТЕЛЬНО!**

Сообщение коммита должно быть следующей структуры:

```
<тип>[необязательный контекст]: <описание>

[необязательное тело]

[необязательная(ые) сноска(и)]
```

- Тип должен браться из классификации разрешённых типов, например `feat`.
- Контекст берётся исходя над чем велась работа, например `(Button)`.
- Описание должно быть в повелительном наклонении, например `add secondary color`.

Классификация типов:

- `feat` - новая фича
- `fix` - исправление бага
- `docs` - добавление или изменение документации
- `style` - изменения, которые не влияют на работу кода
- `refactor` - изменения без новой функциональности, без исправления бага
- `perf` - изменения повышающее производительность
- `test` - добавление или изменение тестов
- `chore` - изменения процесса сборки, вспомогательных инструментов, библиотек

## GitHub Actions

- `main` - Запуск проекта на 14 и 16 версиях `Node.js` (Выполняется автоматически при каждом `push` в удалённый
	репозиторий)
- `release` - Выпуск новой версии (Выполняется автоматически при `push` или `merge` в `master`)
- `size` - Проверка проекта на лимит по весу (Выполняется автоматически при каждом `PullRequest`)
- `storybook` - Обновление `Storybook` на `GitHub Pages`

## Workflow

- Каждый компонент должен быть выполнен по шаблону. Команда для создания шаблона описана в разделе `Npm Scripts`
- Каждый `svg` должен быть превращён в svg-компонент. Команда для превращения описана в разделе `Npm Scripts`
- Каждый svg-компонент должен отображаться в `SvgAssets`.
- В конце разработки задача должна пройти `Сode Review` от любого разработчика из команды
- После успешного релиза новой версии, разработчик должен запустить `GitHub Action` `storybook`

## Code Review

- Ревью проводится для каждого участника команды, вне зависимости от уровня
- Время на ревью должно быть не больше 20 минут
- У ревью самый высокий приоритет, должно быть выполнено в течение 30 минут

Список проверок на ревью:

- Архитектура
- Реализация компонента (функциональности, дизайн и т.д)
- Наименование функций, переменных, типов и т.д.
- Наличие тестов и Storybook-документации

Приоритеты:

- 🔥 - важно, нужно исправить в первую очередь
- ❓ - нужно обсудить и принять решение
- 💬 - править необязательно, принимай решение сам
- 👍 - всё правильно, ревью завершено
