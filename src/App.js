import React from "react";
import { create } from 'jss';
import rtl from 'jss-rtl';
import theme from "./theme/theme";
import { ThemeProvider } from '@mui/material/styles';
import IndexScreen from "./screens";
import { CssBaseline } from "@mui/material";
import { getDirection } from "./localization";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { StylesProvider, jssPreset } from '@mui/styles';
import createCache from '@emotion/cache';
function App() {
  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });
  
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return getDirection() === "rtl" ? (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <div dir="rtl">
          <IndexScreen />
        </div>
        </StylesProvider>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div dir="ltr">
        <IndexScreen />
      </div>
    </ThemeProvider>
  )
}

export default App;
