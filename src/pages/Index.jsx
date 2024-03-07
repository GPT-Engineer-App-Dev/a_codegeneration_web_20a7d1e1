import { Box, VStack, Heading, Text, Input, Button, Textarea, Container, Image, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const toast = useToast();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleGenerateClick = () => {
    // Simulating code generation
    if (!inputText) {
      toast({
        title: "Input required",
        description: "Please enter text to generate code.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const generatedCode = `// Generated code based on input: ${inputText}\nconsole.log('Hello, World!');`;
    setOutputText(generatedCode);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Box>
          <Image src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZ2VuZXJhdGlvbnxlbnwwfHx8fDE3MDk4MDE3Njh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Code Generation" />
        </Box>
        <Heading as="h1" size="xl">
          Code Generator <FaRocket />
        </Heading>
        <Text>Welcome to our Code Generation website. Enter your specifications below and generate the code snippets you need!</Text>
        <Textarea placeholder="Enter your specifications" value={inputText} onChange={handleInputChange} size="md" />
        <Button colorScheme="blue" leftIcon={<FaRocket />} onClick={handleGenerateClick}>
          Generate Code
        </Button>
        {outputText && (
          <Box p={4} w="full" borderWidth="1px" borderRadius="lg" borderColor="gray.200">
            <Text as="pre" fontSize="sm">
              {outputText}
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
