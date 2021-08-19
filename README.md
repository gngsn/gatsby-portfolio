<br/>

# kyeongsun Park | Portfolio

### 🔗 &nbsp; [visit MYSITE !](https://kyeongsun.com/)

<br/>

## 📚 &nbsp; Project Stack

Following items are core frontend technologies used in this project (2021.08) :

- Gatsby <!-- v3.11.1 -->
- React <!-- v17.0.1 -->
- Redux <!-- v7.2.4 -->
- Graphql <!-- v15.4.0 -->
- Apollo Client <!-- v3.4.7 -->
- formik <!-- v2.2.9 -->
- chart.js <!-- v3.5.0 -->
- Slick <!-- v0.28.1 -->
- Sass <!-- v1.37.5 -->

<br/>

## 🏗 &nbsp; Project Architecture

```
 +- Build  -+        +-   CI   -+           +--    CD   ---+            +- Content -+
|           |        |          |           |              |  webhook  |            |
|  Gatsby   |  push  |  Github  |  publish  | Gatsby Cloud |  <----->  | Contentful |
|  GraphQL  |  --->  |  Action  |   ---->   |  AWS Route53 |   fetch   |            |
|           |        |          |           |              |  content  |            |
+-----------+        +----------+           +--------------+           +------------+

```

<br/>

## 💻 &nbsp; Run on your machine

``` bash
# clone the project
$ git clone https://github.com/gngsn/gatsby-portfolio.git

# install modules
$ cd gatsby-portfolio
$ npm install

# build
$ npm run build

# develop 
$ npm run develop
⠀
⠀  You can now view my-first-gatsby-site in the browser.
⠀  http://localhost:8000/
⠀
```