import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, Button, Grommet, Header } from "grommet";
import { Moon, Sun } from "grommet-icons";
import NGTTheme from "../styles/theme";
import { useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  type ThemeProps = 'light' | 'dark'
  const [themeState, setThemeState] = useState<ThemeProps>("light")
  return (
    <Grommet theme={NGTTheme} themeMode={themeState}>
      <Box height="100vh" width="100vw">
        <Header background="#353B41">
          <img
            style={{ maxWidth: "150px", padding: "10px" }}
            src="https://www.ngt.academy/wp-content/uploads/2021/06/ngtacademy-white.png"
          />
          <Button
            icon={themeState === 'light' ? <Moon /> : <Sun/>}
            onClick={() => {
              // TODO
              setThemeState(themeState === 'light' ? 'dark' : 'light')
            }}
          />
        </Header>
        <Component {...pageProps} />
      </Box>
    </Grommet>
  );
};

export default MyApp;
