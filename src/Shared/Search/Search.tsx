import React from 'react'
export interface searchProps{
    type:any;
    placeholder:string;
    icon:any;
    styleClass:string;
}
function Search({type,placeholder,icon,styleClass}:searchProps) {
  return (
    <div className={`w-full border border-gray-400 px-5 py-2 rounded flex items-center gap-2 ${styleClass}`}>
      <div className="text-gray-400">{icon}</div>
      <input type={type} placeholder={placeholder} className='w-full outline-transparent px-2 placeholder:text-gray-400 font-medium'/>
    </div>
  )
}

export default Search
