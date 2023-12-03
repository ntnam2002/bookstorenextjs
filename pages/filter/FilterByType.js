import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

function FilterByType({ onChange }) {
    const [selectedTypes, setSelectedTypes] = useState([]);

    return (
        <>
            <CheckBox
                {...label}
                onChange={() => {
                    const isSelected = selectedTypes.some(
                        (selected) => selected.theloai === type.theloai,
                    );

                    let updatedSelectedTypes;

                    if (isSelected) {
                        updatedSelectedTypes = selectedTypes.filter(
                            (selected) => selected.theloai !== type.theloai,
                        );
                    } else {
                        updatedSelectedTypes = [...selectedTypes, type];
                    }

                    setSelectedTypes(updatedSelectedTypes);
                    handleTypeChange(updatedSelectedTypes);
                }}
            />
            <label className="fw-medium flex-grow-1">{type.theloai}</label>
        </>
    );
}

FilterByType.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default FilterByType;
