import { FC } from 'react';

type TestComponentProps = {
    hook: () => unknown;
};

const TestComponent: FC<TestComponentProps> = ({ hook }) => {
    hook();
    return null;
};

export default TestComponent;
