import React, { useState, useEffect } from 'react'
import styles from '.././pages/admin/AdminDashMain.module.css'
import { Badge, Box, Button, Card, CardBody, CardFooter, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'

const AdminDashMain = ({ type }) => {
    const [data, setData] = useState(null)
    const [del,setDelete] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:4500/admin/${type}`);
                const data = await response.json();
                console.log(data.data)
                setData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [type,del]);
    const arr = data ? data : [{ id: 1, name: "Amaan", role: "doctor", email: "amaan@gmail.com", password: "1234", department: "cardio", description: "He Bad. Very Bad. He Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Baddd!!!", createdAt: "273672637", updatedAt: "8237823" }, { id: 2, name: "Zeeshan", role: "doctor", email: "zeeshan@gmail.com", password: "1234", department: "neuro", description: "He GVery Fantastic!!", createdAt: "273672637", updatedAt: "8237823" }]
    const dImages = ["https://img.freepik.com/premium-vector/doctor-profile-with-medical-service-icon_617655-48.jpg?w=2000", "https://www.sketchappsources.com/resources/source-image/doctor-illustration-hamamzai.png", "https://www.browardhealth.org/-/media/bh_doctor_images/631299.jpg", "https://app.doctornow.hk/wp-content/uploads/Doctor-pana-1.png", "https://static.vecteezy.com/system/resources/thumbnails/002/896/807/small/female-doctor-using-her-digital-tablet-free-vector.jpg", "https://static.vecteezy.com/system/resources/previews/006/042/381/original/female-doctor-with-stethoscope-free-vector.jpg", "https://thumbs.dreamstime.com/z/female-doctor-vector-illustration-family-flat-cartoon-style-design-186907994.jpg"]
    const handleDelete = async (id, delType) => {
        try {
            const res = await fetch(`http://localhost:4500/admin/${delType==="doctor" ? "Doctor_delete" : "Patient_delete"}/${id}`, {
                method: 'DELETE',
            })
            const data = await res.json();
            setDelete(data)
        }
        catch (err) {
            console.error(`Error deleting ${delType}:`, err);
        }
    }
    return (
        <div className={styles.container}>
            {/* Add more components and content here */}
            {type === "doctor" ? data?.map((el) =>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    variant='outline'
                    mb={4}
                    width={"80%"}
                    minWidth={"80%"}
                    key={el.id}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={dImages[Math.floor(Math.random() * dImages.length)]} alt='Caffe Latte'
                    />

                    <Stack
                        mt={{ base: 2, sm: 0 }}
                        flexWrap="wrap"
                        width={"98%"}

                    >
                        <CardBody>
                            <Heading size="md">{el.name}</Heading>
                            <Badge
                                variant="solid"
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
                            <Text fontSize={["12px", "14px", "18px"]}>
                                <strong>{el.email}</strong>
                            </Text>
                            <Button variant="solid" colorScheme="blue" width={["8%", "10%", "20%"]} fontSize={["10px", "12px", "14px"]} onClick={() => handleDelete(el.id, "doctor")}>
                                Delete
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            ) : <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4,1fr)' }}
                gap={5}
            >
                {data?.map((user) => (
                    <GridItem key={user.id}>
                        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign={"center"}>
                            <Image
                                src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
                                alt={user.name}
                                boxSize="150px"
                                objectFit="cover"
                                mb={4}
                                m={"auto"}
                            />
                            <Text fontWeight="bold" fontSize="lg" mb={1}>
                                {user.name}
                            </Text>
                            <Text fontSize="md" mb={2}>
                                {user.email}
                            </Text>
                            <Button colorScheme="blue" width={["10%", "20%", "30%"]} fontSize={["10px", "12px", "14px"]} onClick={() => handleDelete(user.id, "patient")}>Delete</Button>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
            }
        </div>
    )
}

export default AdminDashMain
