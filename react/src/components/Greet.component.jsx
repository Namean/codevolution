const Greet = props => {
    console.log(props);
    return <h1>Hello {props.name} a.k.a {props.herName}</h1>
}

export default Greet;