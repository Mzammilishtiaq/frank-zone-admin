import { Button } from '@mui/base/Button';


export interface ButtonsProps {
  label?: string;
  type: any;
  isLoading?: boolean;
  color?: any;
  disabled?: boolean;
  variant?: any;
  styleClass?: string;
  icon?: any;
  handleButtonClick?: any;
  leftIconClass?: string;
  labelClass?: string;
}


function CustomButton(props: ButtonsProps) {
  const handleClick = () => {
    props.handleButtonClick?.();
  };
  return (
    <>
      <Button
        className={`inline-flex items-center justify-center rounded-md font-normal focus:ring-0 focus:ring-offset-0  ${props.styleClass}`}
        type={props.type}
        onClick={handleClick}
        disabled={props.disabled}
        >
        <div className={props.leftIconClass}>{props.icon}</div>
        <div className={props.labelClass}>{props.label}</div>

      </Button>
    </>
  )
}

export default CustomButton
