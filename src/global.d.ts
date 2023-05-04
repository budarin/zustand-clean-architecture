declare module '*.module.css';

type Optional<T> = T | undefined;
type List<T> = T[];
type NumberLike = string | number;

type LocalFile = File;
type Image = LocalFile;

type TimeStamp = number;
type DateString = string;

type Keys<T> = keyof T;
type Values<T, Keys> = T[Keys];

type UnknownObject = Record<string, unknown>;
