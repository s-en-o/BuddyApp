import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks'
import { styled } from '@mui/material/styles'
import { useEffect } from 'react'

import { Typography, AppBar, Toolbar, Box, Button } from '../styles/imports'

export default function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()
  const userInBothDB = useAppSelector((redux) =>
    redux.localReducer.find((person) => person.auth_id === user?.sub)
  )

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'whitesmoke',
    fontSize: '0.9em',
  })

  let prevScrollPos = window.pageYOffset
  let isScrolling = false

  function handleScroll() {
    const customAppBar = document.querySelector('.custom-appbar')
    if (customAppBar) {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos === 0) {
        customAppBar.classList.remove('scroll')
        customAppBar.classList.remove('new-state')
      } else if (prevScrollPos > currentScrollPos) {
        customAppBar.classList.remove('scroll')
        customAppBar.classList.add('new-state')
      } else {
        customAppBar.classList.add('scroll')
        customAppBar.classList.remove('new-state')
      }

      prevScrollPos = currentScrollPos
      isScrolling = false
    }
  }

  function scrollHandler() {
    if (!isScrolling) {
      window.requestAnimationFrame(handleScroll)
      isScrolling = true
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <AppBar variant="outlined" position="relative" className="custom-appbar">
      <Toolbar sx={{ justifyContent: 'space-between', margin: ' 0 1em' }}>
        <Box>
          <StyledLink to="/">
            <Typography
              variant="h3"
              sx={{
                fontSize: '1.8rem',
                fontWeight: '900',
                letterSpacing: '0.05em',
              }}
              className="logo"
            >
              Buddy
            </Typography>
          </StyledLink>
        </Box>
        <Typography
          variant="h6"
          color="inherit"
          align="right"
          style={{
            display: 'flex',
            letterSpacing: '0.01em',
            fontWeight: '400',
          }}
          noWrap
        >
          <IfAuthenticated>
            <Box sx={{ mx: 0 }}>
              <StyledLink to="/all-profiles/local" className="label">
                Locals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 3 }}>
              <StyledLink to="/all-profiles/international" className="label">
                Internationals
              </StyledLink>
            </Box>
            {/* Conditional Statement for Create Profile and My Profile  */}
            {userInBothDB ? (
              <Box sx={{ mx: 1 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to={`/${userInBothDB?.id}`}
                  className="button-style"
                >
                  My Profile
                </Button>
              </Box>
            ) : (
              <Box sx={{ mx: 1 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to="/create-profile"
                  className="button-style"
                >
                  Create Profile
                </Button>
              </Box>
            )}
            {/* --------------------------- */}
            <Box sx={{ mx: 1 }}>
              <Button
                variant="outlined"
                color="secondary"
                className="button-style"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </Box>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <Box sx={{ mx: 2 }}>
              <StyledLink
                to="/"
                onClick={() => loginWithRedirect()}
                className="label"
              >
                Locals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 2 }}>
              <StyledLink
                to="/"
                onClick={() => loginWithRedirect()}
                className="label"
              >
                Internationals
              </StyledLink>
            </Box>
            <Box sx={{ mx: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                className="login"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            </Box>
          </IfNotAuthenticated>
          {/* Buddy Navigation bar */}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
