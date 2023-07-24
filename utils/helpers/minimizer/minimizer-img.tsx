'use client'
import { useState, useEffect, FC } from 'react'
import Image from 'next/image'
import { helpImportImage } from './help-import-image'

interface IPropsMinimizer {
    priority?: boolean
    placeholderSrc: string
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    style?: {
        [key: string]: string | number
    }
    mini?: boolean
}

export const MinimizerIMG: FC<IPropsMinimizer> = (props) => {
    const [imgSrc, setImgSrc] = useState(props.placeholderSrc)
    const classes = ` progresive ${imgSrc === props.placeholderSrc ? 'loading' : 'loaded'
        }`

    useEffect(() => {
        const img = helpImportImage()
        img.src = props.src
        img.onload = () => {
            setImgSrc(props.src)
        }
    }, [props.src])

    return (
        <Image
            priority={props.priority}
            src={imgSrc}
            alt={props.alt || ''}
            width={props.width}
            height={props.height}
            className={props.className + classes}
            style={{
                ...props.style,
                minWidth: `${!props.mini && '100%'}`,
                objectFit: 'cover'
            }}
        />
    )
}