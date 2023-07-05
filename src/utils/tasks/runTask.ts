export interface Task {
    stop: () => void;
}

export function runTask(callback: () => void, delay: number): Task {
    let timerId: NodeJS.Timeout;

    function run(): void {
        callback();
        timerId = setTimeout(run, delay);
    }

    function stop(): void {
        clearTimeout(timerId);
    }

    timerId = setTimeout(run, delay);

    return {
        stop: stop,
    };
}
