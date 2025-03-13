import { useWindowSize } from 'react-use'

type ColumnReturn = {
    columnsNum: number
    columnsGutter: number
    fontSize: number
    width: number
}

export function useColumn(): ColumnReturn {
    const { width } = useWindowSize()

    const getColumns = (width: number) => {
        if (width < 768) return 2
        if (width < 1024) return 3
        return 4
    }

    const getColumnGutter = (width: number) => {
        if (width < 768) return 8
        return 16
    }

    function getFontSize(width: number) {
        if (width < 768) return 10
        if (width < 1024) return 14
        return 16
    }

    const columnsNum = getColumns(width)
    const columnsGutter = getColumnGutter(width)
    const fontSize = getFontSize(width)

    return {
        columnsNum,
        columnsGutter,
        fontSize,
        width
    }
}
