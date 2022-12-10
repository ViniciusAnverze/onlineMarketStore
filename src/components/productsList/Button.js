import React from 'react';

function Button({children, clicar, desabilitar}){
    return (
        <button onClick={clicar} className="btn btn-primary" disabled={desabilitar}>{children}</button>
    )
}

export default Button;