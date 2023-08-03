import { Button } from "@mui/material"

export default function LogRegButton({label}){
    return(
        <Button variant="contained" className="mt-6 w-32" type="submit">{label}</Button>
    )
}