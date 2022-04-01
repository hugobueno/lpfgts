import React, { useEffect, useState } from 'react';
import { ContainerCongratulation } from './styles';
import Lottie from 'react-lottie'
import animateFile from '../../../public/lotties/85744-success.json'

interface IProps {
    open: boolean,
    setOpen: (open: boolean) => void
}

const Congratulation: React.FC<IProps> = ({ open, setOpen }) => {
    const [pause, setPause] = useState(true)
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animateFile,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        if (open) {
            setPause(false)
            setTimeout(() => {
                setOpen(false)
            }, 3000)
        }
    }, [open])

    return (
        <ContainerCongratulation open={open}>
            <Lottie
                options={defaultOptions}
                height={"100%"}
                width={"100%"}
                isPaused={pause}
            />
        </ContainerCongratulation>
    )
}

export default Congratulation;