import React from 'react';
import { toast } from 'react-toastify';

import { checkTodoConstraints } from './checkTodoConstraints';
import { checkIconConstraints } from './checkIconConstraints';
import { checkStatusConstraints } from './checkStatusConstraints';
import { checkCategoryConstraints } from './checkCategoryConstraints';
import { everyIsEmptyArrayOrUndefined } from '../validation_utils/everyIsEmptyArrayOrUndefined';

export function checkEntityPayload(payload: EntitiesPayload, store: State) {
    if (payload && everyIsEmptyArrayOrUndefined(payload) === false) {
        const iconIds = {} as IdsHash;
        const statusIds = {} as IdsHash;
        const categoryIds = {} as IdsHash;

        let isValidIcon = true;
        let isValidStatus = true;
        let isValidCategory = true;
        let isValidTodo = true;

        const { todos, categories, statuses, icons } = payload;

        if (icons && icons.length > 0) {
            isValidIcon = checkIconConstraints(payload, icons, iconIds);
        }

        if (statuses && statuses.length > 0) {
            isValidStatus = checkStatusConstraints(payload, statuses, statusIds);
        }

        if (categories && categories.length > 0) {
            isValidCategory = checkCategoryConstraints(payload, store, categories, iconIds, categoryIds);
        }

        if (todos && todos.length > 0) {
            isValidTodo = checkTodoConstraints(payload, store, todos, categoryIds, statusIds);
        }

        if (!(isValidIcon && isValidStatus && isValidCategory && isValidTodo)) {
            toast.error(
                <>
                    <p>
                        Некоторые данные не будут отображены из-за ошибок при их обработке. Однако, мы уже занимаемся
                        решением этой проблемы, поэтому не стоит беспокоиться.
                    </p>
                    <p>Если вы заметите неправильное отображение данных, обновите страницу или попробуйте позже.</p>
                </>,
                { autoClose: false },
            );
        }
    }
}
