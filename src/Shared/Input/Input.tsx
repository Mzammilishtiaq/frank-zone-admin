
export interface InputProps {
  label: string;
  labelClass: string;
  type: any;
  placeholder: string;
  name: string;
}

function Input(props: InputProps) {
  return (
    <div className='w-full'>
      <div className=''>
        <span className={`text-sm font-normal ${props.labelClass}`}>{props.label}</span>
        <span className='text-red-500'>*</span>
      </div>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={`border-2 rounded  bg-transparent outline-transparent w-full  px-2 py-3 placeholder:text-xs placeholder:font-normal`}
      />
    </div>
  )
}

export default Input
