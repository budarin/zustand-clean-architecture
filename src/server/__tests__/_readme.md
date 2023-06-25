# Playwrite tests

## Тесты для сервис- воркера

Перед тем как приступать к тестированию сервис воркера необходимо дождаться пока он вступит в свои права

```ts
// await a promise that resolves when the page is controlled.
// Ensure you include clients.claim() in your activate handler!
await page.evaluate(async () => {
    await new Promise((resolve) => {
        if (navigator.serviceWorker.controller) {
            // If we're already controlled, resolve immediately.
            resolve(true);
        } else {
            // Otherwise, resolve after controllerchange fires.
            navigator.serviceWorker.addEventListener('controllerchange', () => resolve(true));
        }
    });
});
```

и лишь затем запрашивать у страницы выполнить код на странице: делать вызовы `fetch` и другие обращения к сервис воркеру

```ts
const todosStore = await page.evaluate(async () => {
    const req = await fetch('/api/get_todos');
    return req.json();
});

expect(todosStore.icons).toEqual(serverInitialState.icons);
```
