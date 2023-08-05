import {ReactNode} from 'react'

export interface iModal { 
    titulo: string;
    children: ReactNode;
    isOp: any
    onCl: any
}