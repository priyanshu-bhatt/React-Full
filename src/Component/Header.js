import Section from "./Section"

function Header(props){
    return(
        <div>
            <h1> Hello My name is Header and {props.name}</h1>
            <Section name_to_section={props.name}/>
        </div>
    )
}
export default Header