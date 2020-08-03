1. What problem does the context API help solve?

The problem that context API solve is being able to share state down the component tree, it prevents prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action are payloads of information that transfer data from the application to the store.

Reducers determine how the application state changes in response to the actions sent to the store.

Store contains the entire state tree of the application. The only way to change the state in the store is to dispatch an action on it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is stored locally. Application state when the same state information is used by multiple components and it need to be passed down the component tree.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows you to write action creators that return a function instead of an action. It chnages our action-creatos by delay the dispatch of an action or only dispatching if an condition it met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer Redux because the boiler plate gives me a better understanding of where state is coming from.
