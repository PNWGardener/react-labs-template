import { absFill } from 'common/styles'
import { Stack } from '@mui/material'
import { AppBar, Toolbar } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { relative } from 'node:path/win32'

const Main = styled('main')({
  background: '#282c34',
  flex: 'auto',
  flexFlow: 'column',
  position: 'relative',
})

export type LayoutProps = {
  showToolbar?: boolean
}

const AppToolbar = () => (
  <AppBar sx={{ flex: 'none' }}>
    <Toolbar></Toolbar>
  </AppBar>
)

const LayoutContainer: React.FC = ({ children }) => (
  <Stack sx={{ ...absFill() }} direction="column">
    {children}
  </Stack>
)

export const MainLayout: React.FC<LayoutProps> = (props) => {
  const { showToolbar = true, children } = props
  return (
    <LayoutContainer>
      {showToolbar && <AppToolbar />}
      <Main>{children}</Main>
    </LayoutContainer>
  )
}
