```tsx
type MyComponent = {...}

const MyComponent: FC<MyComponent> = ({...})=> {...}

// regular HTML input element
type InputElementProps = ComponentProps<'input'>;

// ComponentProps works for both regular elements and the custom ones
type CustomInputProps = ComponentProps<typeof CustomInput>;

type SomeComponent = {
    display: CSSProperties['display'];
};
```
