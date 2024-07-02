import { ButtonRed, ButtonWhite } from "./styles"

function Button({ Children, red, ...props }) {

    return (
        <>
            { red ? (
                    <ButtonRed {...props}>{Children}</ButtonRed>
                ) : (
                    <ButtonWhite {...props}>{Children}</ButtonWhite>
            )}

        </>

    )

}

export default Button