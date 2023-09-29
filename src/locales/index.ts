import type { AstroGlobal } from "astro";

type TransStrings = typeof import("./en").default;

type Unstricten<T> = {
    [K in keyof T]: T[K] extends Record<string, unknown>
        ? Unstricten<T[K]>
        : T[K] extends string
        ? string
        : T[K];
};

type ResolvePropDeep<T, P> = P extends ""
    ? T
    : P extends `${infer Pre}.${infer Suf}`
    ? Pre extends keyof T
        ? ResolvePropDeep<T[Pre], Suf>
        : never
    : P extends keyof T
    ? T[P]
    : never;

type ObjectToDotProp<T extends object> = ObjectToDotPropInternal<T>[keyof T];

type ObjectToDotPropInternal<T extends object> = {
    [Key in keyof T]: Key extends string
        ? T[Key] extends Record<string, unknown>
            ? ObjectToDotProp<T[Key]> extends string
                ? // @ts-ignore "Type instantiation is excessively deep and possibly infinite"
                  `${Key}.${ObjectToDotProp<T[Key]>}`
                : never
            : Key
        : never;
};

export function defineLocale(strings: Unstricten<TransStrings>) {
    return strings;
}

const LocaleStrings = {
    de: () => import("./de"),
    en: () => import("./en"),
};

export const Locales = Object.keys(LocaleStrings);

export const getStaticPaths = () =>
    Object.keys(LocaleStrings).map(lang => ({ params: { lang } }));

export async function loadStrings(locale?: string) {
    if (!locale || !LocaleStrings[locale])
        throw new Error("Invalid locale " + locale);

    const { default: strings } = await LocaleStrings[locale]();

    return function <Trans extends ObjectToDotProp<TransStrings>>(
        trans: Trans,
        params?: Record<string, string>
    ): ResolvePropDeep<TransStrings, Trans> {
        let v: any = strings;
        for (const path of trans.split(".")) {
            v = v[path];
            if (!v) throw new Error("Missing translation " + trans);
        }

        if (typeof v !== "string")
            throw new Error("Missing translation " + trans);

        if (params)
            for (const [key, value] of Object.entries(params)) {
                v = v.replaceAll(`{{${key}}}`, value);
            }

        return v;
    };
}
