# This repository is my study note at [Nomad coder](https://nomadcoders.co/) about Next.js (beginner class)

## 1. Pages in Next.js

### Filename in pages folder will be directly used as routes. "about.js" file will be opoend when request to "/about"

- The component inside index.js file will be rendered at home url ["/"], It is only exception

- Name of function(component) in file is not important

- If you want to show your component in the page, you should set `export deafualt` to your component

- You can use jsx component without import "React". But, if you want to use hooks like "useState()", you must import

## 2. CSR vs SSR

### One of the best features of Next.js is `static pre rendering`

- CSR mean that the browser makes all user interface (UI). Browser get the javascript and it makes UI (React way). If user disable javascript in their browser, they can not see anything.

-
