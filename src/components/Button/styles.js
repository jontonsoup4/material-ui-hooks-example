import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  button: {
    color: theme.palette.common.white,
    background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 80%)`,
    borderRadius: 30,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 4px 13px 0px",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 3,
    padding: theme.spacing(1.5, 3),
    transition: "box-shadow 0.15s ease 0s",
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.26) 0px 6px 20px 0px",
    },
  }
}))
