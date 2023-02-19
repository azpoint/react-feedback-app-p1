
function Button({children, version, type, isDisable}) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
        {children}
    </button>
    )
}

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisable: false
}

export default Button