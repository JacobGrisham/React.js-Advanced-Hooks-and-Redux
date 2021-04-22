# [Robofriends App: React.js Advanced Hooks and Redux](https://jacobgrisham.github.io/React.js-Advanced-Hooks-and-Redux/)
### Coding project from the Udemy Course [The Complete Junior to Senior Web Developer Roadmap](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/)

![Demo](public/demo.gif)

## 💡Lessons Learned
- ES6 `map`
- Javascript Deconstructering
- React `Fragment`
- React `ErrorBoundary`
- React component nesting
- React folder organization
- Smart component (manages state) vs basic component
- Class stateful component vs functional stateful component
- React Hooks `useState` and `useEffect`
- Redux `connect` vs `useSelector` and `useDispatch`
- Redux middleware such as async actions using `redux-thunk` and logging using `redux-logger`
- Redux folder organization
- Website performance optimization using [WebPageTest](https://www.webpagetest.org/)
- React performance optimization using `React.memo`, `PureComponent`, and `shouldComponentUpdate`
- React debugging and performance optimization using Chrome Dev Tools Performace tab and React Developer Tools
- Progressive Web Applications (PWA)
- [Emotion](https://emotion.sh/docs/introduction) for styling components

## 🤔Senior Software Engineer Considerations
- Why Use React, What Came Before It?:
  - Precursor was jQuery, which uses imperative programming.
  - The problem with jQuery is that tracking and managing DOM changes were difficult, causing development slowdown when apps grow.
  - React is the solution for the view layer (web, mobile, desktop, VR, etc.).
  - React organizes html, css, and javascript based on components, which allows for re-use in other parts of your app, more DRY code.
  - React has one-way data flow: only children are aware of changes, parents aren't bothered since it doesn't affect them, which helps to decrease bugs.
  - React employs the Virtual DOM: "React bot" creates javascript object and automatically makes efficient changes to the DOM based on our inputs. This increases the performance of the web page and decreases bugs.
  - Analogy: We are no longer the painter holding the brush, we are now the artist directing the machine. More specifically, no more `querySelectorAll`, `getElementById`, and creating numerous event handlers.
  - React has a strong ecosystem and developer community.
- Why use React Hooks, What Came Before It?:
  - Stateful logic was bolted onto to the component. There was no way to (unscrew) abstract it and re-use it other components.
  - Lifecycle hooks within a component can grow to become unwieldy
  - Classes can increase the mental complexity since you have to track `this`, `this.state`
- Why use Redux?:
  - Share data between containers more easily. In React, you have to move the state up one layer to share data between/among components.
  - Manage large applications with complex state. React was built to manage the view, Redux was built to manage state.
  - Predictable state management using 3 principles:
    - Single source of truth. Centralized place to manage state for entire application.
    - State is read-only/immutable. Prevent unexpected errors.
    - Changes are made using pure functions. More predictable input/output relationship
- What is Redux, What Came Before It??:
  - 100's of Actions ==(middleware)==> 1 Reducer ====> 1 Store ==(React)==> Make Changes to DOM
  - jQuery was 1 Action ==> 1 Change in the DOM
  - Redux uses the Flux Pattern: Action --> Dispatcher --> Store --> View
  - Before the Flux Pattern was Model View Controller (MVC): Action --> Controller --> Many Models --> Many Views
- Performance Optimization
  - Front-end
    - Critical Render Path: use code splitting and avoid over-use of animations
    - Optimized Code: optimize for 'time to first meaningful paint' and 'time to interactive'
    - Progressive Web App

## 🚀 Getting Started

To run this project locally:
- In your terminal, navigate to the root folder and run the following commands
```
$ npm install
$ npm start
```

## 📣 Reference
- Section 4: React + Redux + Module Bundling of the Udemy Course [The Complete Junior to Senior Web Developer Roadmap](https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/)