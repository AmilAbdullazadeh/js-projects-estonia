import { useCallback, useMemo, useRef, useState } from 'react'

export const useInput = (initialValue = null) => {
    const [value, setValue] = useState(initialValue)
    const inputRef = useRef(null)

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, [])

    const reset = useCallback(() => {
        setValue('')
        inputRef.current.focus()
    }, [])

    const bind = useMemo(() => {
      return {
        value,
        onChange: handleChange,
        ref: inputRef,
      };
    }, [handleChange, value]);

    return [value, bind, reset]
}