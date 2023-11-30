import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";

const styles = {
    container: {
        padding: "16px",

        marginBottom: "16px",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "8px",
        marginBottom: "8px",
    },
    textField: {
        marginRight: "8px",
    },
    button: {
        marginTop: "8px",
    },
};

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        _minPrice: 0,
        _maxPrice: 0,
    });
    const handleSubmit = () => {
        if (onChange) {
            onChange(values);
            setValues({
                _maxPrice: 0,
                _minPrice: 0,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <Box style={styles.container}>
            <Typography variant="subtitle2">GIÁ</Typography>
            <Box style={styles.inputContainer}>
                <TextField
                    name="_minPrice"
                    value={values._minPrice}
                    onChange={handleChange}
                    style={styles.textField}
                />
                <span>-</span>
                <TextField
                    name="_maxPrice"
                    value={values._maxPrice}
                    onChange={handleChange}
                    style={styles.textField}
                />
            </Box>

            <Button
                variant="outlined"
                color="primary"
                onClick={handleSubmit}
                style={styles.button}
            >
                Áp dụng
            </Button>
        </Box>
    );
}

FilterByPrice.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default FilterByPrice;
