import React from 'react'
export interface searchProps{
    type:any;
    placeholder:string;
    icon:any;
}
function Search({type,placeholder,icon}:searchProps) {
  return (
    <div className='w-full border-2 border-gray-400 px-5 py-2 rounded flex items-center gap-2'>
      <div className="icon">{icon}</div>
      <input type={type} placeholder={placeholder} className='w-full outline-transparent px-2 placeholder:text-gray-400 font-medium'/>
    </div>
  )
}

export default Search
