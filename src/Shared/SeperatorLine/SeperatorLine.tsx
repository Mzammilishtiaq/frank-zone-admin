interface IBorder {
    className?: string;
}

const SeperatorLine = (props: IBorder) => {
    return <span className={`border-[0.5px] w-full h-0 border-black-900 ${props.className}`} />;
};
export default SeperatorLine;
