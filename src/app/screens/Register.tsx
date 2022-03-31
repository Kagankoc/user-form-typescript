import React, { FC, useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Container, Seperator, TextInput,Button ,Form, Title, Subtitle, LineSeperator, ButtonRow} from '../components/FormItems';
import Modal, { ModalType } from '../components/Modal';
import { useAppDispatch } from '../hooks';
import paths from '../paths';
import { registerUser } from '../store/actions/authActions';
import { getUsers } from '../store/actions/userActions';
import { LoginContainer as RegisterContainer, RegisterButton } from './Login';

const RegisterScreen : FC = ()=> {
    
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

        dispatch(registerUser(name,password)).then((res:any)=> {
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
        <RegisterContainer>
            <Subtitle>
                Register
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
                    <Button onClick={()=>navigate(paths.LOGIN)}>Sign In Instead</Button>
                    <RegisterButton type="submit" > Sign Up </RegisterButton>
                   
                </ButtonRow>
               
            </Form>
        </RegisterContainer>
    </Container>
    );
}

export default RegisterScreen;