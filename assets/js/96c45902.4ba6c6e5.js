"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[30098],{3526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=t(85893),a=t(11151);const o={id:"navigation-actions",title:"CommonActions reference",sidebar_label:"CommonActions"},s=void 0,r={id:"navigation-actions",title:"CommonActions reference",description:"A navigation action is an object containing at least a type property. Internally, the action can be handled by routers with the getStateForAction method to return a new state from an existing navigation state.",source:"@site/versioned_docs/version-7.x/navigation-actions.md",sourceDirName:".",slug:"/navigation-actions",permalink:"/docs/7.x/navigation-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigation-actions.md",tags:[],version:"7.x",frontMatter:{id:"navigation-actions",title:"CommonActions reference",sidebar_label:"CommonActions"},sidebar:"docs",previous:{title:"useTheme",permalink:"/docs/7.x/use-theme"},next:{title:"StackActions",permalink:"/docs/7.x/stack-actions"}},c={},h=[{value:"Common actions",id:"common-actions",level:2},{value:"navigate",id:"navigate",level:3},{value:"reset",id:"reset",level:3},{value:"Rewriting the history with <code>reset</code>",id:"rewriting-the-history-with-reset",level:4},{value:"goBack",id:"goback",level:3},{value:"setParams",id:"setparams",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["A navigation action is an object containing at least a ",(0,i.jsx)(n.code,{children:"type"})," property. Internally, the action can be handled by ",(0,i.jsx)(n.a,{href:"/docs/7.x/custom-routers",children:"routers"})," with the ",(0,i.jsx)(n.code,{children:"getStateForAction"})," method to return a new state from an existing ",(0,i.jsx)(n.a,{href:"/docs/7.x/navigation-state",children:"navigation state"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Each navigation actions can contain at least the following properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"})," (required) - A string which represents the name of the action."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"payload"})," (options) - An object containing additional information about the action. For example, it will contain ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"params"})," for ",(0,i.jsx)(n.code,{children:"navigate"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source"})," (optional) - The key of the route which should be considered as the source of the action. This is used for some actions to determine which route to apply the action on. By default, ",(0,i.jsx)(n.code,{children:"navigation.dispatch"})," adds the key of the route that dispatched the action."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target"})," (optional) - The key of the ",(0,i.jsx)(n.a,{href:"/docs/7.x/navigation-state",children:"navigation state"})," the action should be applied on."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It's important to highlight that dispatching a navigation action doesn't throw any error when the action is unhandled (similar to when you dispatch an action that isn't handled by a reducer in redux and nothing happens)."}),"\n",(0,i.jsx)(n.h2,{id:"common-actions",children:"Common actions"}),"\n",(0,i.jsxs)(n.p,{children:["The library exports several action creators under the ",(0,i.jsx)(n.code,{children:"CommonActions"})," namespace. You should use these action creators instead of writing action objects manually."]}),"\n",(0,i.jsx)(n.h3,{id:"navigate",children:"navigate"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"navigate"})," action allows to navigate to a specific route. It takes the following arguments:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - ",(0,i.jsx)(n.em,{children:"string"})," - A destination name of the screen in the current or a parent navigator."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"})," - ",(0,i.jsx)(n.em,{children:"object"})," - Params to use for the destination route."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"common-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.navigate({\n    name: 'Profile',\n    params: {\n      user: 'jane',\n    },\n  })\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In a stack navigator (",(0,i.jsx)(n.a,{href:"/docs/7.x/stack-navigator",children:"stack"})," or ",(0,i.jsx)(n.a,{href:"/docs/7.x/native-stack-navigator",children:"native stack"}),"), calling ",(0,i.jsx)(n.code,{children:"navigate"})," with a screen name will have the following behavior:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you're already on a screen with the same name, it will update its params and not push a new screen."}),"\n",(0,i.jsx)(n.li,{children:"If you're on a different screen, it will push the new screen onto the stack."}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.a,{href:"/docs/7.x/screen#getid",children:(0,i.jsx)(n.code,{children:"getId"})})," prop is specified, and another screen in the stack has the same ID, it will navigate to that screen and update its params instead."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"navigate"})," action can also accepts an object as the argument with the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - ",(0,i.jsx)(n.em,{children:"string"})," - A destination name of the screen in the current or a parent navigator"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"})," - ",(0,i.jsx)(n.em,{children:"object"})," - Params to use for the destination route."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"merge"})," - ",(0,i.jsx)(n.em,{children:"boolean"})," - Whether we should merge the params of the current route with the provided ",(0,i.jsx)(n.code,{children:"params"}),". Defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path"})," - ",(0,i.jsx)(n.em,{children:"string"})," - The path (from deep link or universal link) to associate with the screen."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"reset",children:"reset"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"reset"})," action allows to reset the ",(0,i.jsx)(n.a,{href:"/docs/7.x/navigation-state",children:"navigation state"})," to the given state. It takes the following arguments:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state"})," - ",(0,i.jsx)(n.em,{children:"object"})," - The new ",(0,i.jsx)(n.a,{href:"/docs/7.x/navigation-state",children:"navigation state"})," object to use."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"common-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.reset({\n    index: 1,\n    routes: [\n      { name: 'Home' },\n      {\n        name: 'Profile',\n        params: { user: 'jane' },\n      },\n    ],\n  })\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The state object specified in ",(0,i.jsx)(n.code,{children:"reset"})," replaces the existing ",(0,i.jsx)(n.a,{href:"/docs/7.x/navigation-state",children:"navigation state"})," with the new one. This means that if you provide new route objects without a key, or route objects with a different key, it'll remove the existing screens for those routes and add new screens."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to preserve the existing screens but only want to modify the state, you can pass a function to ",(0,i.jsx)(n.code,{children:"dispatch"})," where you can get the existing state. Then you can change it as you like (make sure not to mutate the existing state, but create new state object for your changes). and return a ",(0,i.jsx)(n.code,{children:"reset"})," action with the desired state:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(state => {\n  // Remove all the screens after `Profile`\n  const index = state.routes.findIndex(r => r.name === 'Profile');\n  const routes = state.routes.slice(0, index + 1);\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n});\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,i.jsx)(n.a,{href:"/docs/7.x/navigation-state",children:"navigation state"})," state object except ",(0,i.jsx)(n.code,{children:"index"})," and ",(0,i.jsx)(n.code,{children:"routes"}),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue."]})}),"\n",(0,i.jsxs)(n.h4,{id:"rewriting-the-history-with-reset",children:["Rewriting the history with ",(0,i.jsx)(n.code,{children:"reset"})]}),"\n",(0,i.jsxs)(n.p,{children:["Since the ",(0,i.jsx)(n.code,{children:"reset"})," action can update the navigation state with a new state object, it can be used to rewrite the navigation history. However, rewriting the history to alter the back stack is not recommended in most cases:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It can lead to a confusing user experience, as users expect to be able to go back to the screen they were on before."}),"\n",(0,i.jsx)(n.li,{children:"When supporting the Web platform, the browser's history will still reflect the old navigation state, so users will see the old screen if they use the browser's back button - resulting in 2 different experiences depending on which back button the user presses."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So if you have such a use case, consider a different approach - e.g. updating the history once the user navigates back to the screen that has changed."}),"\n",(0,i.jsx)(n.h3,{id:"goback",children:"goBack"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"goBack"})," action creator allows to go back to the previous route in history. It doesn't take any arguments."]}),"\n",(0,i.jsx)("samp",{id:"common-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.goBack());\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to go back from a particular route, you can add a ",(0,i.jsx)(n.code,{children:"source"})," property referring to the route key and a ",(0,i.jsx)(n.code,{children:"target"})," property referring to the ",(0,i.jsx)(n.code,{children:"key"})," of the navigator which contains the route:"]}),"\n",(0,i.jsx)("samp",{id:"common-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.goBack(),\n  source: route.key,\n  target: state.key,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, the key of the route which dispatched the action is passed as the ",(0,i.jsx)(n.code,{children:"source"})," property and the ",(0,i.jsx)(n.code,{children:"target"})," property is ",(0,i.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"setparams",children:"setParams"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"setParams"})," action allows to update params for a certain route. It takes the following arguments:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"})," - ",(0,i.jsx)(n.em,{children:"object"})," - required - New params to be merged into existing route params."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"common-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.setParams({ user: 'Wojtek' }));\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to set params for a particular route, you can add a ",(0,i.jsx)(n.code,{children:"source"})," property referring to the route key:"]}),"\n",(0,i.jsx)("samp",{id:"common-actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.setParams({ user: 'Wojtek' }),\n  source: route.key,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"source"})," property is explicitly set to ",(0,i.jsx)(n.code,{children:"undefined"}),", it'll set the params for the focused route."]})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);