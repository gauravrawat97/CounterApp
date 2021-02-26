<div align="center">React Native Assignment 26-Feb-2021</div>

**Screenshots**
<div align='center'>
 
![Initial App](./Screenshots/Initial.png)
![Increment ](./Screenshots/Increment.png)
![Decrement](./Screenshots/Decrement.png)
![Reset ](./Screenshots/Reset.png)

</div>


**Life Cycle Of React Native**
<p>Mounting —  When the component is mounted.</p>
<p>Updating — When the state changes the component is updated (Rerender)
<p>Unmounting — the component is not needed and gets unmounted.


**Mounting**
<p>The order is:
<p>constructor(): We initialize states and bind methods here
<p>getDerivedStateFromProps(): It is called in mounting and updating phase.
<p>render():Used only in class component. It is pure and no state updation are done here
<p>componentDidMount(): Called Immediately after component is mounted. Mostly use to call API.
It is only called once during mounting


**Updating**
<p>getDerivedStateFromProps()
<p>shouldComponentUpdate(): Is used if we want to rerender the component or not. (true for rerender and false for no rerender.) Default is true
<p>render()
<p>getSnapshotBeforeUpdate():Called before the dom is actually updated
<p>componentDidUpdate():Called immediately after update occurs


**Unmounting**
<p>componentWillUnMount(): Called immediately before a component is unmounted or destroyed


**The order of lifecycle methods called in Parent and child component**

<p>During Mounting
<ul>
 
<li>Parent Constructor is called
<li>Parent getDerivedStateFromProps is called
<li>Parent Render method is called
<li>Child Constructor is called
<li>Child getDerivedStateFromProps is called
<li>Child Render method is called
<li>Child componentDidMount is called
<li>Parent componentDidMount is called
</ul>


When some update occur(state change)

i)Parent getDerivedStateFromProps is called
ii)Parent shouldComponentUpdate is called
iii)Parent Render method is called
iv)Child getDerivedStateFromProps is called
v)Child shouldComponentUpdate is called
vi)Child Render method is called
vii)Child getSnapshotBeforeUpdate is called
viii)Parent getSnapshotBeforeUpdate is called
ix)Child componentDidUpdate is called
x)Parent componentDidUpdate is called


Unmounting
i)Component is unmounted when we move to new component
