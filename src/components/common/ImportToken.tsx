import { useEffect, useMemo, useState } from "react"
import { Modal, useMantineTheme, Button, Text, Loader, TextInput, Group, Alert, Center, Avatar, Stack, Title, Grid, Container, Paper } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { IconAlertCircle, IconAlertOctagon, IconCheck, IconDownload, IconSearch } from "@tabler/icons"
import { BigNumber } from "bignumber.js"
import { CONTRACT } from "../../configs/appconfig"
import { useLocation } from "react-router-dom"

function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

const ImportTokenModal = (props: any) => {
    const [tokenFound, setTokenFound] = useState<null | any>(null)
    const [searchedToken, setSearchedToken] = useState("")
    const [error, setError] = useState<null | any>(null)
    const [searching, setSearching] = useState(false)
    const [adding, setAdding] = useState(false)
    const theme = useMantineTheme()

    let query = useQuery();


    const getTokenMetadata = () => {
        const wallet = window.walletConnection
        if (wallet) {
            setError(null)
            if (searchedToken === "" || searchedToken === null) {
                showNotification({
                    message: "Enter token address",
                    color: "red",
                    icon: <IconAlertOctagon />
                })
                return
            }
            setSearching(true)
            wallet.account().viewFunction(searchedToken, "ft_metadata", {}, "3000000000000000").then((res: any) => {
                setTokenFound(res)
            }).catch((err: any) => {
                setError("Something went wrong, check the token address and try again")
            }).finally(() => {
                setSearching(false)
            })
        }
    }

    const registerContract = () => {
        const wallet = window.walletConnection
        const amt = new BigNumber(1).multipliedBy(10 ** 24).toFixed()
        if (wallet) {
            wallet.account().functionCall(searchedToken, "storage_deposit", { "account_id": CONTRACT }, 100000000000000, amt).then((res: any) => {
            }).catch((err: any) => {

            })
        }
    }


    const importToken = () => {
        const wallet = window.walletConnection
        const contract = window.contract
        if (wallet && contract) {
            setAdding(true)
            contract.add_token({
                token: searchedToken, metadata: {
                    address: searchedToken,
                    name: tokenFound.name || "",
                    symbol: tokenFound.symbol || "",
                    icon: tokenFound.icon || "",
                    decimals: tokenFound.decimals,
                }
            }).then((res: any) => {
                console.log("token added", res)
                showNotification({
                    message: "Token added successfully",
                    color: "green"
                })
                registerContract()
            }).catch((err: any) => {
                console.log("add token error", err)
                showNotification({
                    message: "Could not import token",
                    color: "red"
                })
            }).finally(() => {
                setAdding(false)
            })
        }
    }

    const wait = useMemo(() => {
        return {
            q: query.get("transactionHashes")
        }
    }, [query])

    useEffect(() => {
        if (wait?.q) {
            showNotification({
                message: "Import successful",
                color: "green",
                icon: <IconCheck />
            })
        }
    }, [wait])

    return (
        <Container py="xl">
            <Paper radius="lg" p="xs">
                <Title order={1} weight={500} mb="xl">Import Token</Title>
                <Grid my="md">
                    <Grid.Col xs={8}>
                        <TextInput value={searchedToken} onChange={e => setSearchedToken(e.target.value)} placeholder='Search by token address' />
                    </Grid.Col>
                    <Grid.Col xs={4}>
                        <Button onClick={getTokenMetadata} color="primary" leftIcon={<IconSearch />}>
                            SEARCH
                        </Button>
                    </Grid.Col>
                </Grid>
                <div className="py-3">
                    {searching && (
                        <div className="d-flex justify-content-center py-2">
                            <Loader variant='bars' />
                        </div>
                    )}
                    {
                        !searching && tokenFound && !error && (
                            <>
                                <Title order={4} align="start" my="md">{searchedToken}</Title>
                                <Group className="row">
                                    <Avatar src={tokenFound?.icon} size="lg" />
                                    <Stack spacing={0}>
                                        <Text>{tokenFound?.name}</Text>
                                        {/* <Text size="sm">{searchedToken}</Text> */}
                                        <Text size="xs">{tokenFound?.symbol}</Text>
                                        <Text size="sm">Decimals: {tokenFound?.decimals}</Text>
                                    </Stack>
                                </Group>
                                <Center my="md">
                                    <Button color={"green"} radius="xl" onClick={importToken} rightIcon={adding ? <Loader size={18} /> : <IconDownload />}>Import Token</Button>
                                </Center>
                            </>
                        )
                    }

                    {
                        error && (
                            <Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color="red">
                                Something is wrong with the address you entered.
                            </Alert>
                        )
                    }
                </div>
            </Paper>
        </Container>
    );
}

export default ImportTokenModal