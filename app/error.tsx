'use client'
import { useEffect } from "react"
import EmptyState from "./components/EmptyState"

interface ErrorStaateProps {
    error: Error
}


const ErrorState: React.FC<ErrorStaateProps> = ({ error }) => {

    useEffect(() => {

        console.error(error)

    }, [error])

    return (
        <EmptyState
            title="Error"
            subtitle="Something went wrong. Please try again later."
        />
    )

}

export default ErrorState