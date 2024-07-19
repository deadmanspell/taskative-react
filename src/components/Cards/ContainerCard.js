import React from 'react'
import { AiOutlineMore, AiTwotoneMinusSquare } from 'react-icons/ai'
import { FaGrinHearts, FaPlus } from 'react-icons/fa'

const ContainerCard = ({ title, children }) => {
    return (
        <div className="bg-gray-700 text-white w-fit border shadow-md rounded-lg py-4 px-6 overflow-y-scroll">
            <div className="flex w-[250px] justify-between items-center">
                <label className="text-xl text-white">{title}</label>
                <button><FaPlus /></button>
            </div>
            {children}
        </div>
    )
}

export default ContainerCard