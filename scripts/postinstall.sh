#!/bin/sh

set -e

hasChanges=$(yarn outdated --silent)

if [ -n "$hasChanges" ]; then
  echo "Обнаружены изменения в зависимостях. Выполняется установка..."
  yarn install
else
  echo "Изменений в зависимостях не обнаружено."
fi