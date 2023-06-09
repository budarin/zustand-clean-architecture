# app/selectors

Папка selectors содержит хуки и функции, которые предназначены для извлечения данных из хранилища. Селекторы имеют полное знание о структуре хранилища, поэтому они используются в контейнерах и пользовательских сценариях (useCases) для извлечения необходимых данных.

Одна из основных целей селекторов - абстрагировать приложение от конкретной реализации хранилища. Они позволяют контейнерам и пользовательским сценариям работать с данными, не завися от того, каким образом эти данные хранятся и организованы в сторе. Это упрощает поддержку и изменение структуры хранилища, поскольку изменения в хранилище могут быть выполнены только в селекторах, без необходимости вносить изменения в контейнеры и пользовательские сценарии.

Важно отметить, что селекторы не должны импортировать ничего, кроме знаний о домене (моделях данных) и хуков React. Они не должны иметь прямых зависимостей от других модулей, таких как сервисы или адаптеры. Такой подход позволяет сделать селекторы максимально переиспользуемыми и независимыми от внешних факторов.

Использование селекторов помогает улучшить структуру и модульность вашего приложения, а также делает код более понятным и легко поддерживаемым.

Размещение селекторов в одной папке помогает избежать появления дубликатов селекторов и позволяет качественно подойти к их разработке.
