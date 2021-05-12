import React, {useState} from "react"
import Contact from "./Contact";
import {connect} from "react-redux";
import {getUsers, searchMode} from "../redux/actions";

const Contacts = ({searchMode, getUsers, isSearchMode, users, token}) => {
    const [inputValue, setInputValue] = useState('')

    const inputOnFocusHandler = () => {
        searchMode(true)
        getUsers(token)
    }

    const onChangeHandler = (e) => {
        setInputValue(e.target.value.toLowerCase())
    }

    return (
        <div className="contacts">
            <input
                className="contacts__search"
                placeholder="Поиск"
                type="text"
                value={inputValue}
                onChange={onChangeHandler}
                onFocus={inputOnFocusHandler}
                onBlur={()=>searchMode(false)}
            />
            {
                isSearchMode
                    ?
                    ( users.length
                            ?
                            [...users].filter((u)=>`${u.name} ${u.surname}`.toLowerCase().indexOf(inputValue)>=0)
                                .map((user) => <Contact
                                    key={user._id}
                                    fullname={`${user.name} ${user.surname}`}
                                    avatar={user.avatar}
                        />)
                            :
                        <p>Ничего не найдено</p>
                    )

                    :
                    <>
                        <Contact fullname="Илон Маск"
                                 avatar="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
                                 text="Чертежи по новой Tesla"
                                 qty={null}
                                 time="15:32"/>
                        <Contact fullname="Alina Pocelyiko"
                                 avatar="https://source.unsplash.com/user/erondu/110x110"
                                 text="Антон ты где?"
                                 qty="1"
                                 time="11:32"/>
                        <Contact fullname="Стив Джобс"
                                 avatar="https://commons.bmstu.wiki/images/e/e9/Stevejobs_j.jpeg"
                                 text="Ответь!"
                                 qty="1"
                                 time="11:32"/>
                    </>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    isSearchMode: state.search.searchMode,
    users: state.search.users,
    token: state.auth.token
})

export default connect(mapStateToProps, {searchMode, getUsers})(Contacts)