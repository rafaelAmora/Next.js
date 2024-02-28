// pages/static.tsx

import { NextPage } from "next"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

type ApiResponse = {
  name: string
  timestamp: Date
}

const Static: NextPage = () => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(`/api/hello`).then((res) => res.json())
    setClientSideData(data)
  }

  return (
    <Container tag="main">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <Row>
        <Col>
          <h3>Gerado estaticamente durante o build:</h3>
        </Col>

        <Col>
          <h3>Gerado no cliente: {clientSideData?.timestamp.toDateString()}</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Static
