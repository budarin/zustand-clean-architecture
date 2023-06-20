declare const __DEV__: boolean;

declare module '*.css';
declare module '*.mp3';
declare module '*.wav';
declare module '*.svg';
declare module '*.png';
declare module '*.gif';

interface Window {
    loadingPromise: Promise<boolean>;
    scriptLoadError?: () => void;
    navigator: {
        msMaxTouchPoints?: number;
    };
}

type Optional<T> = T | undefined;
type List<T> = T[];
type Keys<T> = keyof T;
type Values<T, Keys> = T[Keys];
type NumberLike = string | number;
type Id = number;
type TimeStamp = number;
type UnknownObject = Record<string, unknown>;
type LikeEntity<T> = Partial<T> | { [key: string]: unknown };

type JdonRpcError<E> = {
    code: number;
    error: string;
    data?: E;
};

type JsonRpcResult<T, E extends unknown = unknown> =
    | {
          result: T;
          error?: never;
      }
    | {
          result?: never;
          error: JdonRpcError<E>;
      };
