import React from 'react'
import Typography from "@material-ui/core/Typography"
import {Form} from "./Form";
import {Input} from "./Input";
import {PrimaryButton} from "./PrimaryButton"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import {connect} from "react-redux"
import {login} from "../redux/actions";


const Login = ({login}) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        const {email, password} = data
        login(email, password)
    }

    return (
        <>
            <Typography component="h2" variant="h5">Логин</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("email")}
                    id="email"
                    type="text"
                    label="Email"
                    name="email"
                    autoFocus
                />
                <Input
                    {...register("password")}
                    id="password"
                    type="password"
                    label="Пароль"
                    name="password"
                />
                <PrimaryButton>Вход</PrimaryButton>
            </Form>
            <Link to="/register">Регистрация</Link>
        </>
    )
}

export default connect(null, {login})(Login)