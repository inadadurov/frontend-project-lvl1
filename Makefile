install:
	npm ci
# Эта команда полезна при первом клонировании репозитория (или после удаления node_modules).
# npm ci игнорирует package.json пакета и устанавливает модули руководствуясь локфайлом (package-lock.json). 
# Это позволяет создавать воспроизводимые сборки: вы получаете именно то, что ожидаете при каждой установке.

brain-games: #запуск приложения
	node bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .