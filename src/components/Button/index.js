import React from "react"
import Button from "@material-ui/core/Button"
import clsx from "clsx"
import styles from "./styles"

export default (props) => {
  const { children, className, ...rest } = props
  const classes = styles(props)
  return (
    <Button className={clsx(classes.button, className)} {...rest}>{children}</Button>
  )
}
