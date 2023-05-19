#!/usr/bin/env zx

import { $ } from 'zx';

$.shell = 'bash';
$.verbose = false;

await $`git fetch -p && for branch in \`git branch -vv --no-color | grep ': gone]' | awk '{print $1}'\`; do git branch -D $branch; done;`;
await $`git pull --tags origin "$(git branch | grep -E '^\* ' | sed 's/^\* //g')"`;

try {
    await $`yarn outdated --silent`;
    console.log('Обнаружены изменения в зависимостях. Выполняется установка...');
} catch (p) {
    console.log('Изменений в зависимостях не обнаружено.');
}
