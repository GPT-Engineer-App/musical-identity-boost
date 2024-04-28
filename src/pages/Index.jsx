import { Box, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaMusic, FaGlobeAmericas, FaUsers, FaChartLine, FaDollarSign, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxFY3VhZG9yaWFuJTIwYXJ0aXN0fGVufDB8fHx8MTcxNDI2NjcwNHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" alt="Ecuadorian Artist" />
        <Heading as="h1" size="xl">
          Plan de Marketing
        </Heading>
        <Text fontSize="lg">Convertirme en el Artista Más Importante de Ecuador</Text>

        <HStack spacing={4} align="center">
          <Icon as={FaMusic} w={6} h={6} />
          <Text fontWeight="bold">Identidad Artística y Diferenciación</Text>
        </HStack>
        <Text>Destacar una identidad musical única que refleje la diversidad cultural de Ecuador y resuene con audiencias globales.</Text>

        <HStack spacing={4} align="center">
          <Icon as={FaGlobeAmericas} w={6} h={6} />
          <Text fontWeight="bold">Alcance y Conexión con la Audiencia</Text>
        </HStack>
        <Text>Expandir el alcance a nivel nacional e internacional, estableciendo una conexión genuina con la audiencia.</Text>

        <HStack spacing={4} align="center">
          <Icon as={FaUsers} w={6} h={6} />
          <Text fontWeight="bold">Impacto Social y Cultural</Text>
        </HStack>
        <Text>Contribuir a la comunidad y ser un modelo a seguir en la industria musical ecuatoriana.</Text>

        <HStack spacing={4} align="center">
          <Icon as={FaChartLine} w={6} h={6} />
          <Text fontWeight="bold">Métricas de Éxito</Text>
        </HStack>
        <Text>Utilizar métricas como crecimiento de seguidores, reproducciones de música y reconocimiento de marca para medir el progreso.</Text>

        <HStack spacing={4} align="center">
          <Icon as={FaDollarSign} w={6} h={6} />
          <Text fontWeight="bold">Presupuesto y Recursos</Text>
        </HStack>
        <Text>Definir un presupuesto claro y utilizar recursos eficientemente para maximizar el retorno de la inversión.</Text>

        <HStack spacing={4} align="center">
          <Icon as={FaHandshake} w={6} h={6} />
          <Text fontWeight="bold">Colaboración y Comunicación</Text>
        </HStack>
        <Text>Mantener una comunicación abierta con el equipo de marketing para ajustar estrategias según sea necesario.</Text>

        <Button colorScheme="blue" rightIcon={<FaMusic />}>
          Empezar el Viaje
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
