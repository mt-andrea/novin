import colors from "./colors"

const style = {
    btnPrim: {
        background: colors.redish,
        color: colors.white
    },
    btnSec: {
        color: colors.redish,
        border: 'solid 1px ' + colors.redish
    },
    btnDel: {
        background: colors.red,
        color: colors.white
    },
    content: {
        background: colors.lightPink,
        minHeight: '100vh',
    },
    footer: {
        background: colors.purple,
        color: colors.white,
        height: 55
    },
    link: {
        textDecoration: 'none',
        color: colors.white
    },
    message:{
        color: colors.red,
        fontWeight: 'bolder'
    }
}
export default style