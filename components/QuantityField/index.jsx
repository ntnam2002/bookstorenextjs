import { Box, makeStyles, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';


QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
};

const useStyle = makeStyles(() => ({
    root: {},

    box: {
        display: 'flex',
        flexflow: 'row nowrap',
        maxWidth: '200px',
    },
}))
function QuantityField(props) {
    const classes = useStyle();
    const { form, name, label } = props;
    const { formState, setValue } = form;
    const { errors } = formState;
    const hasError = errors[name];
    return (
        <div>
            <FormControl variant="outlined" fullWidth margin='normal' size='small'>
                <Typography />

                <Controller
                    control={form.control}
                    name={name}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                    }) => (
                        <Box className={classes.box}>
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) - 1)}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <OutlinedInput
                                id={name}
                                type='number'
                                value={value}
                                onChange={onChange}
                            />
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) + 1)}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </Box>
                    )}
                />
                <FormHelperText error={!!hasError}>
                    {errors[name]?.message}
                </FormHelperText>
            </FormControl>

        </div>
    );
}

export default QuantityField;