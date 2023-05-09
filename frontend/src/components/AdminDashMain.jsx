import React, { useState, useEffect } from 'react'
import styles from '.././pages/admin/AdminDashMain.module.css'
import { Badge, Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'

const AdminDashMain = ({ type }) => {
    const [data, setData] = useState(null)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`/admin/${type}`);
    //             const data = await response.json();
    //             setData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [type]);
    const arr = [{ id: 1, name: "Amaan", role: "doctor", email: "amaan@gmail.com", password: "1234", department: "cardio", description: "He Bad. Very Bad. He Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Baddd!!!", createdAt: "273672637", updatedAt: "8237823" }, { id: 2, name: "Zeeshan", role: "doctor", email: "zeeshan@gmail.com", password: "1234", department: "neuro", description: "He Good. Very Good. He Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Fantastic!!", createdAt: "273672637", updatedAt: "8237823" }]
    const dImages = ["https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=2000", "https://www.sketchappsources.com/resources/source-image/doctor-illustration-hamamzai.png", "https://www.browardhealth.org/-/media/bh_doctor_images/631299.jpg", "https://app.doctornow.hk/wp-content/uploads/Doctor-pana-1.png", "https://static.vecteezy.com/system/resources/thumbnails/002/896/807/small/female-doctor-using-her-digital-tablet-free-vector.jpg", "https://static.vecteezy.com/system/resources/previews/006/042/381/original/female-doctor-with-stethoscope-free-vector.jpg", "https://thumbs.dreamstime.com/z/female-doctor-vector-illustration-family-flat-cartoon-style-design-186907994.jpg"]
    return (
        <div className={styles.container}>
            <h1>Welcome</h1>

            {/* Add more components and content here */}
            {arr.map((el) =>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    variant='outline'
                    mb={4}
                    width={"80%"}
                    minWidth={"80%"}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={dImages[Math.floor(Math.random() * dImages.length)]} alt='Caffe Latte'
                    />

                    <Stack
                        mt={{ base: 2, sm: 0 }}
                        flexWrap="wrap"
                    >
                        <CardBody>
                            <Heading size="md">{el.name}</Heading>
                            <Badge
                                variant="solid"
                                variantColor="teal"
                                px={2}
                                bg="blue.700"
                                rounded="full"
                                mt={2}
                            >
                                {el.department}
                            </Badge>
                            <Text py={2}>{el.description}</Text>
                        </CardBody>
                        <CardFooter
                            display="flex"
                            justifyContent="space-between"
                            flexShrink={0}
                        >
                            <Text fontSize={["12px","14px","18px"]}>
                                <strong>{el.email}</strong>
                            </Text>
                            <Button variant="solid" colorScheme="blue" width={["8%","10%", "20%"]} fontSize={["10px","12px","14px"]}>
                                Delete
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            )}
        </div>
    )
}

export default AdminDashMain
