import ContactForm from '@/components/ContactForm';
import { Flex } from '@chakra-ui/react';
import React from 'react';

const ContactPage = () => {
  return (
    <Flex gap={4} height="100vh" p={8} justify="center" pt={16}>
      <ContactForm />
    </Flex>
  );
};

export default ContactPage;
