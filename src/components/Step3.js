import React from 'react'
import {useHistory} from 'react-router-dom'
import {PrimaryButton} from "./PrimaryButton"
import {Form} from "./Form"
import {FileInput} from "./FileInput"
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {setRegUserData} from "../redux/actions";


const Step3 = ({files, setRegUserData}) => {
    const history = useHistory()
    const {control, handleSubmit} = useForm({
        defaultValues: {
            files
        }
    })

    const onSubmit = ({files}) => {
        history.push("/register/finally")
        setRegUserData({files})
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput name="files" control={control}/>
            <PrimaryButton>Далее</PrimaryButton>
        </Form>
    )
}

const mapStateToProps = (state) => ({
    files: state.reg.files
})

export default connect(mapStateToProps, {setRegUserData})(Step3)