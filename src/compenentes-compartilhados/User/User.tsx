import React from 'react'
import { Grid } from '@mui/material' 
import Input from '../Input/Input'

function User () {

    return <>
        <Grid item xs={4}>
            <Input label="Responsável pela assinatura"/>
        </Grid>
        <Grid item xs={5}>
            <Input label="Nome completo"/>
        </Grid>
    </>

}

export default User