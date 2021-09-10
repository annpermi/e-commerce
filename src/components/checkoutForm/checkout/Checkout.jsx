import React, { useState } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={0} className={classes.stepper}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                {/* {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />} */}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;
