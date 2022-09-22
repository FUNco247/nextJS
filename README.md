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

## 4. CSS Modules

### CSS file name should be end ".module.css"

- why? and what is module.css

  1. To import css as a javascript object

  2. A classname imported as a module will be changed to avoid overlap. So you can use same className in other component

- Another way to add CSS `styled JSX`

  `styled jsx` is unique Next.js way to add style

  1. Open HTML style tag like &rarr; `<style jsx>{ '... normal css "INSIDE OF BACK TICK"...' }</style>`

  2. Styled jsx is isolated in the component(scope current component only).
     If you add style in index.js, It dosen't affect to your other components nav.js for example.

  3. If you add style in styled jsx way, Next.js add random className to your html tag.

  4. If you don't want to import CSS file and want to do inside one file, use styled jsx

- Global CSS

  - Module and styled jsx is isolated. So, to add global style like font-family, check below <br/><br/>

  1. First way is add `global` props to styled jsx &rarr; `<style jsx global>`
     But, It has problem. In Next.js... It should be considered on a page-by-page.
     If you add global jsx style to "home.js", It doesnt mean that it workf same in "about.js" page.
     Because there are no global style code in the "about.js" page.
     Global style in "home.js" affect to all component in "home.js" and not to other pages<br/>

  - Of course you don't want to copy & paste add `<style jsx global>` to all pages, Check `_app.js` <br/>

  1. Name of `_app.js` is should be `_app.js` (never change, absolute)

  2. Next.js will se `_app.js` file before rendering all other pages or components.
     So, If you do something in `_app.js`, It will affect to all components
     You can add global components or styles in here

  3. component function in the `_app.js` need two arguments like below

  ```javascript
  export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
      a {
        color : red;
      }
      </style>
    </>
  );
  }
  // Whole components will be rendered below <NavBar /> and whole "a" tag will be colored "red"
  ```

  - Or using `globals.css` you already got automatically
