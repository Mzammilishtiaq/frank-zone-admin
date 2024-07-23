import React from 'react'
export interface searchProps{
    type:any;
    placeholder:string;
    icon:any;
    styleClass:string;
}
function Search({type,placeholder,icon,styleClass}:searchProps) {
  return (
    <div className={`w-full border border-[rgba(112, 112, 112, 0.3)] px-5 py-2 rounded-lg flex items-center gap-2 ${styleClass}`}>
      <div className="text-gray-400">{icon}</div>
      <input type={type} placeholder={placeholder} className='w-full outline-transparent px-2 placeholder:text-gray-500 placeholder:opacity-[0.3] font-medium'/>
    </div>
  )
}

export default Search
