import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secundary: string,
            ternary: string,
            quaternary: string,
            background: string,
            background_gray: string,
            text: string,
            text_button: string,
            text_light: string,
            border: string,
        }
    }
}