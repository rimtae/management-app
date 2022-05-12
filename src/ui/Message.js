import styled, {css} from "styled-components";

const Pstyled = styled.p `

padding: 10px;
border: 1px solid lightgray;
background: #f0f0f0;
border-radius: 6px;
${props => {
    if(props.type ==='error')
        return css`
        
        border-color : transparent;
        background-color: red;
        color: white;
        
        `;
    
    else if(props.type === 'success')
        return css`
        border-color: transparent;
        background-color : yellow;
        color : black;
        `;
}}


`;




function Message({text,type}){
    return(
        <>
            {text && (
                <Pstyled type={type} className={type} >{text}</Pstyled>
            )}</>
    );
}

export default Message;