import ContactForm from '@/components/ContactForm';
import InstagramLogo from '@/components/icons/InstagramLogo';
import TikTokLogo from '@/components/icons/TikTokLogo';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ContactPage = () => {
  return (
    <Flex flexDir="column" gap={4} height="100vh" p={6} align="center" pt={12}>
      <Flex flexDir="column" align="center" justify="center" gap={4}>
        <Text fontSize={{ base: 'sm', sm: 'md' }}>You can reach me here</Text>
        <Flex gap={6}>
          <a
            href="https://www.instagram.com/denysksh_fpv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo />
          </a>

          <a
            href="https://www.tiktok.com/@denys.ksh.fpv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TikTokLogo />
          </a>
        </Flex>
        <Text fontSize={{ base: 'sm', sm: 'md' }}>
          Or send me an email using the form below
        </Text>
      </Flex>
      <ContactForm />
    </Flex>
  );
};

export default ContactPage;
