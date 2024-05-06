import * as MaterialTailwind from '@material-tailwind/react'

declare module '@material-tailwind/react' {
    interface ButtonProps {
        placeholder?
        onPointerEnterCapture?
        onPointerLeaveCapture?
        children?
    }

    interface NavbarProps {
        placeholder?
        onPointerEnterCapture?
        onPointerLeaveCapture?
        children?    }

    interface TypographyProps {
        placeholder?
        onPointerEnterCapture?
        onPointerLeaveCapture?
        children?
    }
}
