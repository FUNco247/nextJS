# This repository is my study note at [Nomad coder](https://nomadcoders.co/) about Next.js (beginner class)

## 1. Pages

### Filename in pages folder will be directly used as routes. "about.js" file will be opoend when request to "/about"

- The component inside index.js file will be rendered at home url ["/"], It is only exception

- Name of function(component) in file is not important

- If you want to show your component in the page, you should set `export deafualt` to your component

- You can use jsx component without import "React". But, if you want to use hooks like "useState()", you must import

## 2. CSR vs SSR

### One of the best features of Next.js is `static pre rendering`

- CSR

  1. It means that the browser makes all user interface (UI).

  2. Browser get the javascript and it makes UI (React way).

  3. If user disable javascript in their browser, they can not see anything.

  4. Under very slow network environment, User only can see white box in the beginning becaue they only get empty `<div id = "root"></div>`

- SSR

  1. Next.js is going to pre generate HTML and send it to user

  2. If user disable javascript in their browser, they can see your HTML at least

  3. Under very slow network environment, User can see your HTML structure fast instead of white empty box while calling javascript

  4. After sending the HTML first, when the JavaScript transmission is completed, it becomes a React app in the browser. It is `Hydration`

## 3. Routing

### import Link from "next/link"

- Why should not use `<a>` tag.

  1. Next.js makes warning to acnhor tag, because acnhor tag makes whole pages going to be reloaded.

  2. It is very similar reason why use `<Link>` component in React.js

  3. You can not pass props or className to `<Link>` component in Next.js (defference from React). So recommand to use like this &rarr; `<Link href="/hello"><a ...some props...> Hello </a></Link>`

## CSS Modules

### CSS file name should be end ".module.css"

- why? and what is module.css

  1. To import css as a javascript object

  2. A classname imported as a module will be changed to avoid overlap. So you can use same className in other component
