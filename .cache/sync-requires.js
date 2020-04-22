const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/eduardpredescu/Desktop/Projects/iquit/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/eduardpredescu/Desktop/Projects/iquit/src/pages/index.tsx"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/Users/eduardpredescu/Desktop/Projects/iquit/src/pages/page-2.tsx")))
}

