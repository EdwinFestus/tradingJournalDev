interface Props {
    label: string;
    type?: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}


export default function Input({
    label,
    type = "text",
    value,
    onChange,
}: Props ) {
    
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
                { label }
            </label>

            <input 
                type={type}
                value={value}
                onChange={onChange}
                
                className="
                    w-full
                    px-4
                    py-3
                    border
                    rounded-xl
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "
            />
        </div>
    )
}