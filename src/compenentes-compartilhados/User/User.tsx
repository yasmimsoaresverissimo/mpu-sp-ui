import React, { useState } from 'react'
import { Grid } from '@mui/material' 
import Input from '../Input/Input'
import Button from '../Button/Button';
import ModalDoc from './ModalDoc/ModalDoc';
import './User.css'

function User () {

    const [openModal,setOpenModal] = useState <boolean>(false);

    return <>
        <Grid item xs={4}>
            <Input label="Responsável pela assinatura"/>
        </Grid>
        <Grid item xs={0.7}>
            <div className='but'>
                <Button onClick={()=> setOpenModal(!openModal)}>...</Button>
            </div>
        </Grid>
        <Grid item xs={5}>
            <Input label="Nome completo" disabled/>
        </Grid>

        <ModalDoc 
        isOpen={openModal} 
        setOpenModal={setOpenModal}
        
        />
    </>

}

export default User