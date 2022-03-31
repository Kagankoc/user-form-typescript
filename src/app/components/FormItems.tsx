import styled from 'styled-components';


export const Container = styled.div`
    ${()=> ({
    display:'flex',
    boxSizing:"border-box",
    width:"90%",
    height:"90%",
    flexDirection:'column',
    paddingLeft:"20px",
    marginBottom:"20px",
    alignItems:"center",
    })}
`;
export const Wrapper = styled.div`
    ${()=> ({
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#DBE0E6",
    height:window.innerHeight,
    })}
`;
export const TextInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 20px;
    padding: 23px 20px 15px;
    border: 1px solid black;
    border-radius: 3px;
    margin:10px 0;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    font-family :"GothamBold";

`;

export const Button = styled.button`
    width : 171px;
    height:40px;
    color:white;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    cursor:pointer;
    background-color:#005093;
    margin:10px;
`;

export const TextField = styled.text``;

export const Form = styled.form`
   position:relative;
   width:fit-content;
   margin-top:5%;
`;

export const FormElement = styled.div`
    width:250px;
    display:flex;
    justify-content:center;
`;

export const Seperator = styled.div`
    padding:10px 0;
`;

export const FormRow = styled.div`
    display:flex;
    width:100%;
    margin:10px;
    justify-content:space-around;
`;
export const ButtonRow = styled(FormRow)`
    justify-content:space-between;
    margin:10px 0;
`;
export const Title = styled.h1`
    margin: 10px 0;
    color:#333d47;
    font-style:italic;
    font-size:34px;
    font-family:GothamBold;
`;
export const Subtitle =styled.h3`
margin: 10px 0;
color:#333d47;
font-style:italic;
font-size:21px;
font-family:GothamBold;
`;

export const LineSeperator = styled.div`
    width:100%;
    border-top:1px solid black;
    margin-bottom:10px;
`;
