const Button = ({testFlag = false}) => {

  return (
    <>
      <button data-testid="button">Click me</button>
        {testFlag && <p>Coverage test</p>}
    </>
  )
}

export default Button
