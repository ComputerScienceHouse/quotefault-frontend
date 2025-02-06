import { useApi } from "../../API/API"

const Kevlar = () => {
  const { apiPut } = useApi()

  const result = apiPut("/api/kevlar")

  return result
}

export default Kevlar
