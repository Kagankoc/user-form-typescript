import React,{ FC, useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EditForm from "../components/EditForm";
import { Button, ButtonRow, Container, FormElement, FormRow, Seperator, Title } from "../components/FormItems";
import Modal, { ModalType } from "../components/Modal";
import Table from "../components/Table";
import { useAppDispatch, useAppSelector } from "../hooks";
import paths from "../paths";
import { deleteUser, editUser, getUsers } from "../store/actions/userActions";
import { UserInfo } from "../store/models/user";
import { LoginContainer } from "./Login";

const StyledButton = styled(Button)`
position:absolute;
right:20px;
top:20px;
`;
const DashBoardContainer =styled(LoginContainer)`
    width:65%;
    height:fit-content;
`;
const tableHeaders = [
    "User ID",
    "User Name",
    "BirthDate",
    "Register Date",
    "User Login Date"
]

const Dashboard : FC = () => {
    const [selectedUser,setSelectedUser] = useState<UserInfo>();
    const [isEditModalVisible,setIsEditModalVisible]  = useState<boolean>(false);
    const [isDeleteModalVisible,setIsDeleteModalVisible]  = useState<boolean>(false);
    const [tableData,setTableData] =useState<UserInfo[]>([]);
    const {userList} = useAppSelector((state)=>({
        userList:state.user.userList
    }),shallowEqual);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleEditUser = () => {
        if(selectedUser){
            setIsEditModalVisible(true);
        } 
    }
    const handleDeleteUser = () => {
        dispatch(deleteUser(selectedUser));
        dispatch(getUsers());
    }
    const userEdit = (formValues:UserInfo) => {
        setSelectedUser(undefined);
        dispatch(editUser(formValues));
        dispatch(getUsers());
    }
    useEffect(()=> {
        setTableData(userList);
    },[userList])
    
    return (
        <Container>
            <Title>User Admin Board</Title>
            {isEditModalVisible?<EditForm
                handleEdit={userEdit}
                onClose={()=>setIsEditModalVisible(false)}
                selectedUser={selectedUser}
            ></EditForm>: null}
            {isDeleteModalVisible?<Modal
                description={`User with the Name : ${selectedUser?.name} will be deleted. Do you Confirm?`}
                onCancel={()=> setIsDeleteModalVisible(false)}
                submitText="Yes"
                cancelText="Cancel"
                onSubmit={()=> {handleDeleteUser(); setIsDeleteModalVisible(false)}}
                type={ModalType.Confirmation}
                title={"User Deletion"}
            ></Modal>:null}
            {userList.length 
            ?<DashBoardContainer> 
                 <FormRow>
                <FormElement>
                    <Button onClick ={handleEditUser} type="button" >Edit User </Button>
                </FormElement>
                <FormElement>
                    <Button onClick ={()=>setIsDeleteModalVisible(true)} type="button">Delete User</Button>
                </FormElement>
            </FormRow>
            <Seperator />
                <Table headers={tableHeaders} tableData={tableData} onSelect={setSelectedUser} selectedItem={selectedUser} />
            </DashBoardContainer>
            :<Title>No User is Left</Title>}
            <ButtonRow>
            <StyledButton onClick={()=> navigate(paths.LOGIN)}>Logout</StyledButton>
            </ButtonRow>    
        </Container>

    )
}

export default Dashboard;