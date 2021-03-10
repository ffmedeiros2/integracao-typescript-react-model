import React from 'react';

interface IContadorValorProps {
    contador: number
}

export default function ContadorValor (props: IContadorValorProps) {
    return (
        <p>{props.contador}</p>
    )
}
