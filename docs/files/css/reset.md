# css reset

```css
#app {
    width: 100%;
    height: 100%;
}

*:not(#addresstextarea):not(input, textarea) {
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}

* {
    box-sizing: border-box;
    touch-action: manipulation;
}


body,
html {
    margin: 0 auto;
    font: 28px/1.5 PingFang-SC, Arial, Helvetica, sans-serif;
    background: #F4F4F4;
    color: #333;
    min-width: 320px;
    max-width: 750px;
    position: relative;
    vertical-align: baseline;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-overflow-scrolling: touch;
}

body {
    -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
}

img {
    border: none;
    vertical-align: middle;
}

a,
img,
button,
input,
textarea,
li,
span,
div,
i {
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}

i,
address,
em {
    font-style: normal;
}

li {
    list-style-type: none;
}

dl,
p,
dd,
h1,
h2,
h3 {
    margin: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
}

strong,
b,
h1,
h2,
h3,
h4,
h5 {
    font-weight: normal;
    font-size: 100%;
}

a,
button,
input {
    font-size: inherit;
    font-family: inherit;
    text-decoration: none;
    color: inherit;
    outline: none;
    border: 0;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
    background: none;
    margin: 0;
    padding: 0;
    text-align: left;
    appearance: button;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #ccc;
}

input,
text {
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
}

article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary {
    display: block;
}

:focus {
    outline: none;
}

.clearfix {
    zoom: 1;

    &::after {
        content: "";
        clear: both;
        height: 0;
        visibility: hidden;
        display: block;
    }
}

[v-cloak] {
    display: none;
}

/*media query*/
@media screen and (min-width: 320px) and (max-width: 359px) {
    html {
        font-size: 12px;
    }
}

@media screen and (min-width: 360px) and (max-width: 374px) {
    html {
        font-size: 13px;
    }
}

@media screen and (min-width: 375px) and (max-width: 413px) {
    html {
        font-size: 14px;
    }
}

@media screen and (min-width: 414px) and (max-width: 639px) {
    html {
        font-size: 16px;
    }
}

@media screen and (min-width: 640px) {
    html {
        font-size: 18px;
    }
}
```