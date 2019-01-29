import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto:900');

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 100%;
    }

    body {
        background: linear-gradient(
            ${props => props.theme.colors.darkBlue},
            ${props => props.theme.colors.black}
        );
        background-repeat: no-repeat;
        color: ${props => props.theme.colors.grey};
        font-family: ${props => props.theme.fonts.body};
        margin: 0;
    }

    ul, ol, li {
        list-style-type: none;
        padding: 0;
        padding-inline-start: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`
