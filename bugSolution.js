The solution involves ensuring the component using `useNavigate` is within the router context.  This often means restructuring the component tree to include a `Route` component, or providing the navigation prop from the component that is in context. 

```javascript
//Correct Usage with Route
function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); 
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}

// Route to ensure the correct context
<Route path="/parent" element={<MyComponent/>}/>
```

```javascript
//Correct Usage by passing navigate as prop
function ParentComponent({navigate}){
  return <MyComponent navigate={navigate}/>
}

function MyComponent({navigate}) {
  const handleClick = () => {
    navigate('/home'); 
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}

//Route declaration
<Route path="/" element={<ParentComponent navigate={useNavigate()}/>}/>
```