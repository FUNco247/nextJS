# This repository is my study note at [Nomad coder](https://nomadcoders.co/) about Next.js (beginner class)

## 1. Pages in Next.js

- Filename in pages folder will be directly used as routes. "about.js" file will be opoend when request to "/about"

  1. The component inside index.js file will be rendered at home url ["/"], It is only exception
  2. Name of function(component) in file is not important
  3. If you want to show your component in the page, you should set `export deafualt` to your component
  4. You can use jsx component without import "React". But, if you want to use hooks like "useState()", you must import

## 2. 404 page

- Next.js gives you beautiful 404 page for free. You can customize it
