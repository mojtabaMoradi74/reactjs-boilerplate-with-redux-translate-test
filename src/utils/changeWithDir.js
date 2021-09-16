const changeWithDir = (first, second) => props => props.theme.direction === "ltr" ? first : second;

export default changeWithDir;