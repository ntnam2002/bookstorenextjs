import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";

import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import QuantityField from "../QuantityField";

AddToCart.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCart({ onSubmit = null }) {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .required("Nhập vào số lượng muốn mua")
            .min(1, "Số lượng nhỏ nhất là 1")
            .typeError("Please enter a number"),
    });

    const form = useForm({
        defaultValue: {
            quantity: 1,
            value: 1,
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            {/* <QuantityField name="quantity" label="Số lượng" form={form} /> */}
            <Button type="submit" variant="contained" color="primary">
                ADD TO CART
            </Button>
        </form>
    );
}

export default AddToCart;
