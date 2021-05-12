import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {useHistory} from 'react-router-dom'

import {Input} from "./Input";
import {PrimaryButton} from "./PrimaryButton";
import {Form} from "./Form";
import {yupResolver} from "@hookform/resolvers/yup";
import {connect} from "react-redux";
import {setRegUserData} from "../redux/actions";

const schema = yup.object().shape({
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Имя не должно содержать цифры")
        .required("Имя обязательное поле"),
    surname: yup
        .string()
        .matches(/^([^0-9]*)$/, "Фамилия не должна содержать цифры")
        .required("Фамилия обязательное поле"),
})

const Step2 = ({name, surname, setRegUserData}) => {
    const history = useHistory()
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: {name, surname}
    })

    const onSubmit = ({name, surname}) => {
        history.push("/register/step3")
        setRegUserData({name, surname})
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register("name")}
                id="name"
                type="text"
                label="Имя"
                name="name"
                required
                error={!!errors.name}
                helperText={errors?.name?.message}
                autoFocus
            />
            <Input
                {...register("surname")}
                type="text"
                label="Фамилия"
                name="surname"
                required
                error={!!errors.surname}
                helperText={errors?.surname?.message}
            />
            <PrimaryButton>Далее</PrimaryButton>
        </Form>
    )
}

const mapStateToProps = (state) => ({
        name: state.reg.name,
        surname: state.reg.surname
    })

export default connect(mapStateToProps, {setRegUserData})(Step2)