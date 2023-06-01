import "../css/style.css"
const Button = ({color,children})=>{
    return(
        <button className= 'w-full p-2 font-medium text-lg  bg-blue-500 text-white'>{children}</button>
     )
        
}

export default Button