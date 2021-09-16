import * as React from 'react';

// material-ui
import {Checkbox, FormControlLabel, Grid, Typography, TextField} from '@material-ui/core';

import {connect} from 'react-redux';

import * as actions from 'store/actions';
import {fetchSectionAttributes} from "store/actions";

/*
This component servers as a page content for any user section attribute group.
All the fields will be fetched under the attribute group and iterated to display in this component.
 */

function ConfigurableForm({sectionData, fetchSectionAttributes}) {
    return (
        <>
            <Typography variant="h5" gutterBottom sx={{mb: 2}}>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField required id="firstNameBasic" name="firstName" label="First name" fullWidth
                               autoComplete="given-name"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="lastNameBasic" name="lastName" label="Last name" fullWidth
                               autoComplete="family-name"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1Basic"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="address2Basic" name="address2" label="Address line 2" fullWidth
                               autoComplete="shipping address-line2"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="cityBasic" name="city" label="City" fullWidth
                               autoComplete="shipping address-level2"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="stateBasic" name="state" label="State/Province/Region" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="zipBasic" name="zip" label="Zip / Postal code" fullWidth
                               autoComplete="shipping postal-code"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="countryBasic" name="country" label="Country" fullWidth
                               autoComplete="shipping country"/>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </>
    );
}

const mapStateToProps = state => ({
    sectionData: state.sectionForm
})

const mapDispatchToProps = dispatch => ({
    fetchSectionAttributes: () => dispatch(actions.fetchSectionAttributes())
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurableForm)
