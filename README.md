<div align="center">React Native Assignment 26-Feb-2021</div>

<h3>Screenshots</h3>
<div align='center'>
 
![Initial App](./Screenshots/Initial.png)
![Increment ](./Screenshots/Increment.png)
![Decrement](./Screenshots/Decrement.png)
![Reset ](./Screenshots/Reset.png)

</div>


<h3>Life Cycle Of React Native</h3>
<p>Mounting —  When the component is mounted.</p>
<p>Updating — When the state changes the component is updated (Rerender)</p>
<p>Unmounting — the component is not needed and gets unmounted.</p>


<h3>Mounting</h3>
<p>The order is:</p>
<p>constructor(): We initialize states and bind methods here</p>
<p>getDerivedStateFromProps(): It is called in mounting and updating phase.</p>
<p>render():Used only in class component. It is pure and no state updation are done here</p>
<p>componentDidMount(): Called Immediately after component is mounted. Mostly use to call API.
It is only called once during mounting</p>


<h3>Updating</h3>
<p>getDerivedStateFromProps()</p>
<p>shouldComponentUpdate(): Is used if we want to rerender the component or not. (true for rerender and false for no rerender.) Default is true</p>
<p>render()</p>
<p>getSnapshotBeforeUpdate():Called before the dom is actually updated</p>
<p>componentDidUpdate():Called immediately after update occurs</p>


<h3>Unmounting</h3>
<p>componentWillUnMount(): Called immediately before a component is unmounted or destroyed</p>


<h3>The order of lifecycle methods called in Parent and child component</h3>

<p>During Mounting</p>
<ul>
 <li>Parent Constructor is called</li>
<li>Parent getDerivedStateFromProps is called</li>
<li>Parent Render method is called</li>
<li>Child Constructor is called</li>
<li>Child getDerivedStateFromProps is called</li>
<li>Child Render method is called</li>
<li>Child componentDidMount is called</li>
<li>Parent componentDidMount is called</li>
</ul>


<p>When some update occur(state change)</p>
<ul>
 <li>Parent getDerivedStateFromProps is called</li>
<li>Parent shouldComponentUpdate is called</li>
<li>Parent Render method is called</li>
<li>Child getDerivedStateFromProps is called
<li>Child shouldComponentUpdate is called</li>
<li>Child Render method is called</li>
<li>Child getSnapshotBeforeUpdate is called</li>
<li>Parent getSnapshotBeforeUpdate is called</li>
<li>Child componentDidUpdate is called</li>
<li>Parent componentDidUpdate is called</li>
</ul>

<h3>Unmounting</h3>
<ul>
 <li>Component is unmounted when we move to new component</li>
 </ul>
