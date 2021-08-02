# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
It was created to solve the problem of sharing "props" down the component tree as with props drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
"actions" = what the user does causes a chain of events that calls the "action" to be executed.
"reducers" = these take the new state, and add it to the store with the initialState.
"store" = A storage system outside of the application

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
It allows us to pause what the user did and decide if it needs to be rerouted or continue as is.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
This is my second time through, and this time I like Redux so much! It makes so much sense to have all your state outside your application and just be able to call it as and where needed. Second favorite is Context API, and it makes so much sense to only have to call your props where you need it inside your components instead of having to props drill. 