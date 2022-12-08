import { createStyles } from "@mantine/core";
import { getTheme } from '../../configs/appfunctions';


const bodyStyles = createStyles((theme) => ({
    title: {
        color: getTheme(theme) ? theme.white : "#242a49",
        fontSize: 100,
        fontWeight: 400,
        letterSpacing: -2,

        [theme.fn.smallerThan('md')]: {
            fontSize: 70,
        },
    },
    subtitle: {
        color: getTheme(theme) ? theme.white : "#242a49",
        fontSize: 50,
        fontWeight: 400,
        letterSpacing: -2,

        [theme.fn.smallerThan('md')]: {
            fontSize: 30,
        },
    },
    subtitle1: {
        color: getTheme(theme) ? theme.white : "#242a49",
        fontSize: 30,
        fontWeight: 400,
        letterSpacing: -2,

        [theme.fn.smallerThan('md')]: {
            fontSize: 20,
        },
    },
    text: {
        color: getTheme(theme) ? theme.white : "#242a49",
    },
    bold: {
        fontWeight: "bold",
    },
    dotted: {
        borderBottomColor: getTheme(theme) ? theme.colors.dark[3] : "#242a49",
        borderBottomStyle: "dotted",
        borderBottomWidth: "1px",
        cursor: "pointer",
        fontWeight: "bold"
    }
}));

export default bodyStyles
