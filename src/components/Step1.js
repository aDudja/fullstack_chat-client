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
    email: yup
        .string()
        .email("Некорректный Email")
        .required("Email обязательное поле"),
    password: yup.string()
        .required('Пароль не указан')
        .min(8, 'Пароль слишком короткий - должно быть не менее 8 символов')
        .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы')
})

const Step1 = ({email, setRegUserData}) => {
    const history = useHistory()
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {email},
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = ({email, password}) => {
        history.push("/register/step2")
        setRegUserData({email, password})
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register("email")}
                id="email"
                type="email"
                label="Email"
                name="email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
                autoFocus
            />
            <Input
                {...register("password")}
                type="password"
                label="Пароль"
                name="password"
                required
                error={!!errors.password}
                helperText={errors?.password?.message}
            />
            <PrimaryButton>Далее</PrimaryButton>
        </Form>
    )
}

const mapStateToProps = state => ({
        email: state.reg.email,
        password: state.reg.password
    })

export default connect(mapStateToProps, {setRegUserData})(Step1)