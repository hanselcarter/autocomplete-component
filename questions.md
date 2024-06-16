1.  What is the difference between Component and PureComponent? Give an example where it might break my app.

    R:/On my experience the main difference is that a Pure component will not get rerendered if its parent rerenders, unless the pure component state or props have changed, and Component rerenders every time its parent rerenders Component will not care about shallow comparisson, Imagine if you have big tree on your React app, this can cause perfomace issues if the entire tree has to get re-render everytime a state changes even if its not part of the component it self, This can lead to browser consuming a lot of resources or lead into inifinte loops, also sometimes you might not even see any impact if you do not have a big tree or components do not react to anything into the tree.

2.  Context + ShouldComponentUpdate might be dangerous. Why is that?

    R:/ shouldComponentUpdate is used when you manually want to inspect nextProps for changes to those specific props and decide to render or not thus you should not modify state inside of shouldComponentUpdate so you should not use React Context inside shouldComponentUpdate this can lead to app not showing the correct state or not updating the state as intended showing wrong states or simply weird behaviors, to be honest shouldComponentUpdate is rearely used in modern react because now a days we only use function components and there alternatives such as React.memo() to improved performance and efficient rendering.

3.  Describe 3 ways to pass information from a component to its PARENT.

    R:/First one is by simply passing a callback function, function is passed thorugh props to the children and then childrens makes the call whenever its necessary.
    Second one is by using Global state managers such as Redux or zustand or React context Api, that way children can update global state by dispatching an action since global state is available across the whole app, parent will be able to access this update easily.
    Third one I have used mainly with input is using Refs react provides us with a useRef hook, parent component creates a ref and passes it to the child component then the child component uses the ref to call methods or set data in the parent component. For example

```
function ParentComponent() {
  const childRef = useRef();

  ...rest of the ParentComponent
  }
const ChildComponent = forwardRef((props, ref) => {

  useRefHandler(ref, () => ({
    sendData() {
      return "Data from Child";
    }
  }));

    ...rest of the ChildComponent
}
```

4. Give 2 ways to prevent components from re-rendering.

   R:/ First will be the most commonly used on my end is by using the useMemo hook, what use memo do is that memoizes a values by passing a dependency array making sure value gets calculated only if dependecies changes, this is usefull on expensive callation/complex logic thus reducing unnecessary computations and rendering updates.
   Second one is another classic which I have used a lot too is useCallback which basically memoizes callback functions based on their dependencies to prevent rerenders of child components that receive the callbacks as props.

   These two are lifesavers when it comes to performace issues inside expensive components.

5. What is a fragment and why do we need it?Give an example where it might break my app.

   R:/Fragment is a way to making sure you have a parent element in a group of elements without the neccesaty of adding extra nodes for example a div, divs might have some styling that you might not even need so Fragment allows to return this grouped elements without any hastle also JSX elements need to have a parent node, if you do not add a fragement for example

```return (

   <h1>Hello world</h1>
   <p>Description</p>

   ) This Code bove will throw an error
  but if you change it to
```

```return (
    <>
    <h1>Hello world</h1>
    <p>Description</p>
    </>
    ) This will be valid now due to fragment addition
```

Something I have seen too is the when using Fragment it can cause an issue with components that might require exactly one child element.

6. Give 3 examples of the HOCpattern.

   R:/ One of The HOC pattern I have used is for Protecting Routes, so you can create an HOC for private and public this way you can easily delegate route protection.
   Another one HOC is for laying out your app for example with top bars or side bars or These way you can abstract thos layout into an HOC and your application will have consitent layouts.
   Another is also for Error boundaries behavior in case you can the use to be send to different error pages based on the status of data fetching or any other error you can delegate this behavior to an HOC so your components do not worry about this and if something goes south you can have consistency error behavior through your application besides abstracting your logic HOC are very use full for consitency.

7. What's the difference in handling exceptions in promises, callbacks and async...await?

   R:/ Promises have a built in mechanism for handling exeptions which is the catch method which you can combine with other methods such as the then method, callbacks in the other hand they do not have a built in mechanism so you handle exceptions on your end you can get very creative this can let to teams not using a standar behavior and code can get out of hands very easily and there is where the famous callback hell begins hehehe, Aync await is the one I preffered and I used on my daily basis they do have a built in exeption handling mechanism which is the try-catch block, this lead to way more readeble code, async await have a better syntax the only trade would be that on leagcy projects this might not be supported, but I would say in conclusion you can get to the same point with either of them but when you work on porject readibility matters so projects can be more easy and efficient to provide maintenance.

8. How many arguments does setState take and why is it async.

   R:/ It can take the new state and an optional callback function. Well setState causes re-renders so is asynchronous mainly for performance gains and not causing weird delays to the user

9. List the steps needed to migratea Class to Function Component.

   R:/First thing would be of course Change the class to a function, then I would swap the the render method for the return one, then, The I would remove the contructor and list what I have inside of it for example the this.state and swap it for the modern hooks for example useState etc, I would convert class methods into functions and search the "this" word also list things that might break that are using "this" for example the event handler bindings since we do not bindings on function components and finally I would replace lifecycle methods which were heavily used back in the days with the modern react hooks which help you accomplish any logic you used to do with this famous lifecicle method for example with the useffect etc. My thought vven though Class components are still supported by react i would not recommed using in newer code since modern react libraries, hooks packages are being havily used for functional components

10. List a few ways styles can be used with components.

    R:/You can do inline styling on your JSX, or you can use css classes which is the one I used for the challenge, I like css to be separated from the component for readibility, you can use third party library such as StyledComponents for example to inject styles dynamically or the famous tailwind which i use a lot tailwind is a utility-first CSS since classes are descriptive and self-documenting it lets you style components fast and is highly customazible, there are also libraries such MUI which is a react components library they give already predefinied styled componets which are also customazible they also give you predefine behavior based on logic variants etc. There are more ways but these are the one I would say I have used the most through my careers now a days the way I style my components in newer projects is with tailwind.

11. How to render an HTML string coming from the server.

    R:/ you can use the dangerouslySetInnerHTML prop which is in React the replacement for using innerHTML in the browser DOM. However, you should be extremely cautious when doing this, as it can pose security risks if the HTML string contains malicious code, I have used this on a project for markup, task was to provide a text are are where the use could style text in the text are make it italic bold etc, so I needed to use dangerouslySetInnerHTML this in order to render that styled text which was coming from back-end in plain HTML
