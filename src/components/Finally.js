import React from 'react'
import {Form} from "./Form"
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {Input} from "./Input";
import {PrimaryButton} from "./PrimaryButton";
import {registration} from "../redux/actions";


const Finally = ({email, password, name, surname, files, registration}) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email,
            password,
            name,
            surname,
            files
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register("email")}
                id="email"
                type="email"
                label="Email"
                name="email"
            />
            <Input
                {...register("password")}
                id="password"
                type="password"
                label="Пароль"
                name="password"
            />
            <Input
                {...register("name")}
                id="name"
                type="text"
                label="Имя"
                name="name"
            />
            <Input
                {...register("surname")}
                id="surname"
                type="text"
                label="Фамилия"
                name="surname"
            />
            <PrimaryButton>Создать пользователя</PrimaryButton>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    email: state.reg.email,
    password: state.reg.password,
    name: state.reg.name,
    surname: state.reg.surname
})

export default connect(mapStateToProps, {registration})(Finally)