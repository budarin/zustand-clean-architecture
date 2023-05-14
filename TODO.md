# Todo

-   разобраться как отличать 1й моунт от ремоунта в StrictMode

-   если чекать чекбох на задаче в Inbox то 1й todo пропадает и появляется только в корзине и не появляется в категории работа

-   если удаляем активную категорию - ставить по умолчанию navigationFilter в inbox

-   в useCases должны быть только методы доступные компонентам (createIcon и др не должны там быть) вынести все функции в свои файлы (все что сейчас в useCases -> /domain/entities а в use cases только высокоуровневые функции с fetch alert toast ...)

-   как при обновлении сущности запретить вызов повторного обновления пока не завершилось текущее?
-   добавить constyraint check в сущности в сторе

-   useCases: иметь возможность отключать в хуке генерацию состояний (isLoading, error) и алерты чтобы если их не используем -не аффектить перерисовки

-   зачем нам еще триггерить setState в хуке если мы и так меняем состояние стейта??
-   создать класс ошибки для стора
-   use sound for error https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/ или этот код в нотификаторе https://stackoverflow.com/questions/52578406/playing-sound-in-react
-   использовать код use sound для переписывания хуков useCase для возвращения функции
-   нотификацию сделать сервисом как и localStorage
-   векторные иконки https://www.svgrepo.com/vectors/add/
-   проверка на уникальность справочных сущностей (category, status, icon_name)
-   in small screen touch areas should be minimum 24x24
-   use https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md для ограничения направления использования кода
-   на мобилах делать все побольше и не px а rem и em

<!--  -->

Unit tests:

напиши unit тесты для выделенного текста .
выод оформи в виде кода а не простого текста.
используй русский при написании заголовков тестов в describe и test.
не тупи - выводи оформленный коднапиши unit тесты для выделенного текста .

# tools

-   svg editor https://boxy-svg.com/app
