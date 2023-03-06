import { useContext } from "react";
import NavigationContext from "../context/Navigation";
import classNames from "classnames";

function Link({to,children, className, activeClassName}){

    const {navigate, currentPath}=useContext(NavigationContext);

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
      );
    

    const handleNavigate=(event)=>{
        if(event.metaKey || event.crtlKey)
        {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleNavigate}>{children}</a>;

}

export default Link;