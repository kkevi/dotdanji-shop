export type IntlLocaleKey = 'ko' | 'en'

export type IntlStoreState = {
    locale: IntlLocaleKey
}

export type RootStoreInitialState = {
    intlStoreData: IntlStoreState
}
