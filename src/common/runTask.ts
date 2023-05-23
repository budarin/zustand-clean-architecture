export interface Task {
    stop: () => void;
}

export function runTask(callback: () => void, delay: number): Task {
    let timerId: NodeJS.Timeout;

    function run() {
        callback();
        timerId = setTimeout(run, delay);
    }

    function stop() {
        clearTimeout(timerId);
    }

    timerId = setTimeout(run, delay);

    return {
        stop: stop,
    };
}
