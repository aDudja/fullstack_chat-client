import React from "react";
import Dropzone from "react-dropzone";
import {Controller} from "react-hook-form";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CloudUpload from "@material-ui/icons/CloudUpload";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fafafa",
        borderWidth: "2px",
        borderRadius: "2px",
        borderColor: "#eee",
        borderStyle: "dashed",
        textAlign: "center",
        cursor: "pointer",
        color: "#bdbdbd",
        padding: "10px",
        marginTop: "20px",
    },
    icon: {
        marginTop: "16px",
        color: "#bdbdbd",
        fontSize: "42px",
    },
    avatar: {
        width: "80px",
        height: "80px"
    },
    box: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px"
    }
}));

export const FileInput = ({control, name}) => {
    const styles = useStyles();
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({field: {onChange, onBlur, value}}) => (
                <>
                    <Dropzone onDrop={onChange} multiple={false}>
                        {({getRootProps, getInputProps}) => (
                            <Paper
                                variant="outlined"
                                className={styles.root}
                                {...getRootProps()}
                            >
                                <CloudUpload className={styles.icon}/>
                                <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                <p>Перетащите картинку или нажмите, чтобы выбрать</p>
                            </Paper>
                        )}
                    </Dropzone>
                        {value.map((f, index) => (
                            <Box key={index} className={styles.box}>
                                <Avatar src={URL.createObjectURL(f)} className={styles.avatar} />
                            </Box>
                        ))}
                </>
            )}
        />
    );
};