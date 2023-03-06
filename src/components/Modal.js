function Modal({onChange,children,action}){
    return(<div>
        <div onClick={onChange} className="fixed inset-0 bg-gray-300 opacity-80"> </div>
        <div className="fixed inset-60 bg-white">
            <div className="flex flex-col justify-between">
                {children}
            </div>
            <div className="flex justify-end">
                {action}
            </div>
        </div>
    </div>);
}

export default Modal;