'use client';

import { sendMailLetter } from '@/services/sendEmail';
import { Button, Field, Flex, Input, Stack, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    setErrorMsg('');
    setSuccessMsg('');
    try {
      if (!formRef.current) {
        setErrorMsg('Form reference is not available.');
        return;
      }
      const response = await sendMailLetter(formRef.current);

      if (response.message === 'success') {
        reset();
        setSuccessMsg('Thank you!🌟 I’ll respond as soon as possible.');
      } else {
        setErrorMsg('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMsg(
        'Failed to send message. Please check your connection and try again.',
      );
      console.error('Error sending email:', error);
    }
  };

  return (
    <Flex flexDir="column" width={{ base: '270px', sm: '450px' }}>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <Stack gap="2" align="flex-start" w="full">
          <Field.Root invalid={!!errors.name}>
            <Field.Label>Name</Field.Label>
            <Input
              {...register('name', { required: 'Please enter your name' })}
              _invalid={{ borderColor: '#be4646' }}
            />
            <Field.ErrorText color="#be4646">
              {errors.name?.message}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email</Field.Label>
            <Input
              {...register('email', {
                required: 'Please enter your Email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Please enter a valid email',
                },
              })}
              _invalid={{ borderColor: '#be4646' }}
            />
            <Field.ErrorText color="#be4646">
              {errors.email?.message}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.message}>
            <Field.Label>Message</Field.Label>
            <Input
              {...register('message', {
                required: 'Please enter your message',
              })}
              _invalid={{ borderColor: '#be4646' }}
            />
            <Field.ErrorText color="#be4646">
              {errors.message?.message}
            </Field.ErrorText>
          </Field.Root>

          <Button type="submit" mt={2}>
            Send me a message
            <span>→</span>
          </Button>
        </Stack>
      </form>

      {errorMsg && (
        <Text
          color="#be4646"
          fontSize={{ base: '0.8rem', sm: '1rem' }}
          mt={4}
          textAlign="center"
        >
          {errorMsg}
        </Text>
      )}

      {successMsg && (
        <Text
          color="#2f855a"
          fontSize={{ base: '0.8rem', sm: '1rem' }}
          mt={4}
          textAlign="center"
        >
          {successMsg}
        </Text>
      )}
    </Flex>
  );
};
export default ContactForm;
