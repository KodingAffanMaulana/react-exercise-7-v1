import React from "react"
import { Link } from "react-router-dom"
import people from "../assets/people.jpeg"
import planets from "../assets/planets.jpeg"
import movies from "../assets/movies.jpeg"
import { Container } from "@chakra-ui/react"
import { Card, Image, SimpleGrid, CardBody, Heading } from "@chakra-ui/react"

const Home = () => {
  return (
    //  Align the Container to middle vertically
    <Container>
      <SimpleGrid columns={3} spacing={2} marginTop={200}>
        {/* People */}
        <Card>
          <CardBody>
            <Link to="/star-wars/people">
              <Heading as="h3" size="sm" textAlign="center" padding="0 0 10px 0">People</Heading>
              <Image src={people} />
            </Link>
          </CardBody>
        </Card>

        {/* Planets */}
        <Card>
          <CardBody>
            <Link to="/star-wars/planets">
              <Heading as="h3" size="sm" textAlign="center" padding="0 0 10px 0">Planets</Heading>
              <Image src={planets} />
            </Link>
          </CardBody>
        </Card>

        {/* Movies */}
        <Card>
          <CardBody>
            <Link to="/star-wars/movies">
              <Heading as="h3" size="sm" textAlign="center" padding="0 0 10px 0">Movies</Heading>
              <Image src={movies} />
            </Link>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Container>
  )
}

export default Home