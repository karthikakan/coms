import classNames from "classnames";

function Panel({className,children,...rest}){
    const cl=classNames('border rounded p-3 shadow bg-white w-full',className);
    return <div {...rest} className={cl}>{children}</div>;
}

export default Panel;