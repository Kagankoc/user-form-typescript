import { FC, useCallback, useEffect } from "react"
import { Controller, useForm } from "react-hook-form";
import { UserInfo } from "../store/models/user"
import { Button, ButtonRow, Form, Seperator, Subtitle, TextInput } from "./FormItems";
import { ModalContainer, Overlay } from "./Modal";


export interface EditFormProps {
    selectedUser?:UserInfo;
    handleEdit:(formValues:any)=>void;
    onClose:()=>void;
}

const EditForm : FC<EditFormProps> = ({selectedUser,handleEdit,onClose}) => {
    const {handleSubmit,control,register} = useForm<UserInfo>({defaultValues:selectedUser});
    const registerFields= useCallback(()=> {
        register("name");
        register('birthDate')
    }, [register]);

    useEffect(()=> {
        registerFields();
    },[registerFields]);
    const onSubmit = (formValues:any) => {
        handleEdit(formValues);
        onClose();
    }
    const formatDate = (date?:string) => {
        if(date) {
            const dateValue = new Date(date);
            const formatDate = dateValue.getDate() < 10 ? `0${dateValue.getDate()}`:dateValue.getDate();
            const formatMonth = dateValue.getMonth() < 10 ? `0${dateValue.getMonth()+1}`: dateValue.getMonth();
            const formattedDate = [dateValue.getFullYear(), formatMonth, formatDate].join('-');
            return formattedDate;
        }
    }
    return (
        <Overlay>
            <ModalContainer>
                <Subtitle>Edit User</Subtitle>
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
                name="birthDate"
                render={({field:{onChange,value}})=> (
                 <TextInput onChange={(event)=> {onChange(formatDate(event.target.value))}} placeholder="BirthDate" value={formatDate(value?.toString())} type="date" />
            )}
            />
                <Seperator />
                <ButtonRow>
                    <Button onClick={()=> onClose()}>Cancel</Button>
                    <Button type='submit'>OK</Button>
                    
            </ButtonRow>
               
            </Form>
            </ModalContainer>
        </Overlay>
    )
}

export default EditForm;