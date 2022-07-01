import React, { useState } from 'react'
import { Success } from './component/index'
import { Input, Box,  FormControl, FormLabel, Heading, Select, Button, Text } from '@chakra-ui/react'
import { v4  as uuidv4} from 'uuid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Zoom from 'react-reveal/Zoom';

export const Form = () => {

  const schema = yup.object({
    name: yup.string().required('Este campo es requerido, rellenarlo'),
    surname: yup.string().required('Este campo es requerido, rellenarlo'),
    email: yup.string().required('Este campo es requerido, rellenar email'),
    country: yup.string().required('Este campo es requerido, rellenarlo'),
    phone: yup.string().required('Este campo es requerido, rellenarlo'),
    jobs: yup.string().required('Este campo es requerido, rellenarlo'),
  }).required();

  const [isSuccess, setIsSuccess] = useState(true);

  const handleSuccess = () => {
    
    setTimeout(function(){
      setIsSuccess(false)
    }, 500);

  }

  const onFormSubmit = (data) => {
    console.log('data', data)
    localStorage.setItem(`formData-${uuidv4()}`, JSON.stringify(data))
    handleSuccess()
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      country: '',
      phone: '',
      jobs: '',
    },
  })

  return(
    <Zoom>
      {isSuccess ? (
        <Box sx={styleMain}>
          <Box mb='40px' textAlign='center'>
            <Heading fontSize='md' 
            color='text.titleForm'
            letterSpacing='0.7px'
            >
              ¡Inscríbete y reserva tu lugar ahora!
            </Heading>
          </Box>
          <form onSubmit={handleSubmit((data) => {
            onFormSubmit(data)
          })}>
            <>
              <FormControl isRequired mb='20px'>
                <FormLabel htmlFor='nombre' sx={styles}>Nombre</FormLabel>
                <Input 
                  type='text'
                  {...register('name')}
                  variant='outline'
                  fontFamily='heading'
                />
                <Text sx={stylesError}>{errors.name?.message}</Text>
              </FormControl>

              <FormControl isRequired mb='20px'>
                <FormLabel htmlFor='apellido' sx={styles}>Apellido</FormLabel>
                <Input 
                  type='text'
                  {...register('surname')}
                  variant='outline'
                  fontFamily='heading'
                />
                <Text sx={stylesError}>{errors.surname?.message}</Text>
              </FormControl>
              
              <FormControl isRequired mb='20px'>
                <FormLabel htmlFor='email' sx={styles}>Correo electronico del trabajo</FormLabel>
                <Input 
                  type='email'
                  {...register('email')}
                  variant='outline'
                  fontFamily='heading'
                />
                <Text sx={stylesError}>{errors.email?.message}</Text>
              </FormControl>

              <FormControl isRequired mb='20px'>
                <Text sx={styles} mb='5px' size='lg'> 
                  pais
                </Text>
                <Select
                  bg='white' 
                  {...register('country')} 
                  height='50px'
                  borderColor='borders.grayDefault'
                  _focus={{
                    borderColor:'badge',
                    outline:'none',
                    boxShadow: '0 0 0 1px var(--chakra-colors-badge)',
                  }}
                  placeholder='Seleccion un Pais'
                  fontSize='16px'
                  _hover={{
                    borderColor:'borders.grayDefault'
                  }}
                  fontFamily='heading'
                  color='text.titleForm'
                  >
                  <option value='option1'>Argentina</option>
                  <option value='option2'>Bolivia</option>
                  <option value='option3'>Brasil</option>
                  <option value='option4'>Chile</option>
                  <option value='option5'>Colombia</option>
                  <option value='option6'>Ecuador</option>
                  <option value='option7'>Guyana</option>
                  <option value='option8'>Guyana Francesa</option>
                  <option value='option9'>Paraguay</option>
                  <option value='option10'>Perú</option>
                  <option value='option11'>Suriname</option>
                  <option value='option12'>Uruguay</option>
                  <option value='option13'>Venezuela</option>
                </Select>
                <Text sx={stylesError}>{errors.country?.message}</Text>
              </FormControl>

              <FormControl isRequired mb='20px'>
                <FormLabel htmlFor='numero de telefono' sx={styles}>Numero de telefono</FormLabel>
                <Input 
                  type='number'
                  {...register('phone')}
                  variant='outline'
                  fontFamily='heading'
                />
                <Text sx={stylesError}>{errors.phone?.message}</Text>
              </FormControl>

              <FormControl isRequired mb='20px'>
                <FormLabel htmlFor='puesto de trabajo' sx={styles}>Puesto de trabajo</FormLabel>
                <Input 
                  type='text'
                  {...register('jobs')}
                  variant='outline'
                  fontFamily='heading'
                />
                <Text sx={stylesError}>{errors.jobs?.message}</Text>
              </FormControl>
              
            </>
            <Box>
              <Button type="submit" 
                variant='solidPrimary'
                fontFamily='heading'
              >
                Inscríbete
              </Button>
            </Box>
          </form>
        </Box>
      ) : (
        <>
          <Box sx={styleMain} h='600px' display='flex'>
              <Success setIsSuccess={setIsSuccess}/>
          </Box>
        </>
      )}
    </Zoom>
  )
}

const styles = {
  fontSize:'0xs',
  color:'text.titleForm',
  fontWeight:'600',
  fontFamily:'heading'
}

const stylesError = {
fontSize:'mini',
color:'badge',
letterSpacing:'0.80px'
}

const styleMain = {
boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
bg:'backgroundForm', 
p:{ base:' 48px 15px', lg:'48px' },
'.scale': {
  width:'100%',
  display:'flex'
}
}