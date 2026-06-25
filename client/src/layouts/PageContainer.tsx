
import type { ReactNode } from "react"; 


interface PageContainerProps {
    title: string;
    children: ReactNode;
} 

const PageContainer = ({title, children }: PageContainerProps ) => {
    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">{ title }</h1>

            { children }
        </div>
    )
} 

export default PageContainer;