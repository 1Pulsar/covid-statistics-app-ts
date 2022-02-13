import React from "react";
import style from "./ModalWindow.module.css"

type ModalWindowPropsType = {
    modalWindowIsActive: boolean,
    toggleModalWindow:any
}

export const ModalWindow:React.FC<ModalWindowPropsType> = ({children, modalWindowIsActive, toggleModalWindow}) => {

    const modalWrapper = modalWindowIsActive ? `${style.modalWrapper} ${style.active}` : style.modalWrapper
    const modalWindow = modalWindowIsActive ? `${style.modalWindow} ${style.active}` : style.modalWindow

    return (
        <div className={modalWrapper} onClick={() => toggleModalWindow(false)}>
            <div className={modalWindow} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}