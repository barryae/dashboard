import * as React from "react"

interface ModalProps {
    handleClose: any
    show: boolean
    children: any
}

export const Modal: React.FC<ModalProps> = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    )

}