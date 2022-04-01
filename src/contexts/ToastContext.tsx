import { useContext, createContext, useState, useEffect } from 'react'
import ToastComponent from '../components/Toast'

interface IToast {
    title: string,
    mesage: string,
    type: 'success' | 'warning' | 'error' | 'loading'
}

interface IToastContext {
    open: boolean,
    setModal: (data: IToast) => void
}

const ToastContext = createContext<IToastContext>({
    open: false,
    setModal: (data: IToast) => { }
})

const Toast: React.FC = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalContent, setModalContent] = useState<IToast>()
    const DEAFULT_TIMEOUT = 5000

    const setModal = (data?: IToast) => {
        setOpenModal(true)
        setModalContent(data)
    }

    useEffect(() => {
        if (openModal && modalContent?.type != 'loading') {
            let time: any
            time = setTimeout(() => {
                setOpenModal(false)
            }, DEAFULT_TIMEOUT)
            return () => {
                clearTimeout(time)
            }
        }
    }, [openModal && modalContent])

    return (
        <ToastContext.Provider value={{ open: openModal, setModal }}>
            {children}
            <ToastComponent
                title={modalContent?.title || ''}
                message={modalContent?.mesage || ''}
                type={modalContent?.type || 'loading'}
            />
        </ToastContext.Provider>
    )
}

export default Toast

export const useToast = () => {
    const context = useContext(ToastContext)
    return context
}


