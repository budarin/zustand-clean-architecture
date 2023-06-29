-   передавать в компоненты контейнеры а не коллекции и модели

-   использовать хуки для повторяющейся утилитпрной работы

-   использование стора вне компонента React - `CalendarContainer -> onCalendarSelectDate` (нигде кроме Zustand нельзя обратиться к Store в обработчике события потому что хуки можно использовать только в компоненте а в Zustand и такое можно!) Если бы ни эта замечательная возможность нам пришлось бы ради обработчика события писать контейнер для `CalendarBody` и пробрасывать его в `Calendar`. Так же доступ к стору вне React позволяет запустить крон по выявлению просроченных задач, разгружая React и упрощая код компонент и их тестирование

-   вся логика стора изолирована и не зависит ни от чего: ее можно переиспользовать путем копирования в другой проект ее можно протестировать и забыть о ней

-   все операции с данными в сторе находятся в юзкейсах и селесторах - контейнеры используют только юзкейсы и селекторы это дает кучу преимуществ: контейнеры ничего не знают о сторе, нет дублирования кода и логки легко тестировать и рефакторить

-   можно создавать изолированные сторы для безопасности и изолированности данных. К примеру: `credentialStore` - данные случайно не утекут в другой селектор

-   если в селекторе создается и отдается клиенту не прямая ссылка из стора - обязательно в хуке 2м параметром передавать `shallow`!