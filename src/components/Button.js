import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({children,primary,secondary,succes,warning,danger,outline,rounded,...rest}){
    const cl=classNames(rest.className,
        'flex items-center px-3 py-1.5 mx-4 my-3',{
        'bg-sky-600 border-sky-700 text-white':primary,
        'bg-gray-700 border-gray-900 text-white':secondary,
        'bg-green-600 border-green-700 text-white':succes,
        'bg-yellow-600 border-yellow-700 text-white':warning,
        'bg-red-600 border-red-700 text-white':danger,
        'rounded-md':rounded,
        'border-2':outline,
        'bg-white text-sky-700':primary && outline,
        'text-gray-900':secondary && outline,
        'bg-white text-green-700':succes && outline,
        'bg-white text-yellow-700':warning && outline,
        'bg-white text-red-700':danger && outline,
    });
    return(
    <button {...rest} className={cl}>
        {children}
    </button>);
}

Button.propTypes={
    validateProps: function({primary,secondary,succes,warning,danger}){
        const val=Number(!!primary)+Number(!!secondary)+Number(!!succes)+Number(!!warning)+Number(!!danger);
        if(val>1){
            return new Error("Invalid props!!!");
        }
    }
}

export default Button;