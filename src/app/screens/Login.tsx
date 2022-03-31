import React, { FC, useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Container, Seperator, TextInput,Button ,Form, Title, Subtitle, LineSeperator, ButtonRow} from '../components/FormItems';
import {useNavigate} from 'react-router-dom';
import paths from '../paths';
import { useAppDispatch } from '../hooks';
import { login } from '../store/actions/authActions';
import styled from 'styled-components';
import { getUsers } from '../store/actions/userActions';
import Modal, { ModalType } from '../components/Modal';

export const LoginContainer = styled.div`
${()=> ({
    display:'flex',
    boxSizing:"border-box",
    width:"50%",
    height:"50%",
    flexDirection:'column',
    marginBottom:"20px",
    alignItems:"center",
    border:  "1px solid black",
    borderRadius: "30px",
    marginTop:"5%",
})}
`;
export const RegisterButton=styled(Button) `
    margin:10px;
    background-color:#232b38;
`;
const LoginScreen : FC = ()=> {
    
    const {handleSubmit,control,register} = useForm({});

    const [errorMessage,setErrorMessage] =useState<string>("");
    const navigate = useNavigate();
    const dispatch:any = useAppDispatch();
    const registerFields= useCallback(()=> {
        register("name");
        register('password')
    }, [register]);

    useEffect(()=> {
        registerFields();
    },[registerFields]);

    const onSubmit = async (formValues:any) :Promise<void> => {
        const {name,password} = formValues;
        console.log(formValues);
        
         dispatch(login(name,password)).then((res:any)=> {
            if(!res.payload.error) {
                dispatch(getUsers());
                navigate(paths.DASHBOARD);    
            }
            else{
                setErrorMessage(res.payload.error);
            }
        })
    };

    return (
    <Container>
        
        <Title>
           USER-LISTING FORM
        </Title>
        {
            errorMessage 
            ? <Modal 
                description={errorMessage}
                onCancel={()=>setErrorMessage('')}
                title={"Error"}
                submitText="OK"
                type={ModalType.Error}
            />
            :null}
        <Seperator />
        <LoginContainer>
            <Subtitle>
                Login
            </Subtitle>
            <LineSeperator />
            
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    render={({field:{onChange,value}})=> (
                        <TextInput onChange={onChange} placeholder="User Name" value={value}/>
                )}
            />
            <Seperator />
                <Controller
                control={control}
                name="password"
                render={({field:{onChange,value}})=> (
                 <TextInput onChange={onChange} placeholder="Password" value={value} type="password"/>
            )}
            />
                <Seperator />
                <ButtonRow>
                    <RegisterButton onClick={()=>navigate(paths.REGISTER)}>Register</RegisterButton>
                    <Button type='submit'>Login</Button>
                    
            </ButtonRow>
               
            </Form>
        </LoginContainer>
    </Container>
    );
}

export default LoginScreen;