import { useState, useEffect } from 'react'
import { setLocalThunk } from '../actions/local'
import { useAppDispatch, useAppSelector } from '../hooks'
import { AuthIdDoesNotMatch } from './Authenticated'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '../styles/imports'

export function AllProfiles() {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.localReducer)

  useEffect(() => {
    dispatch(setLocalThunk())
  }, [dispatch])

  const [showUsers, setShowUsers] = useState(false)

  const urlPath = useLocation().pathname
  const isLocal = urlPath.indexOf('local') !== -1

  const navigate = useNavigate()

  const handleViewProfile = () => {
    setShowUsers(true)
  }

  const filteredUsers = isLocal
    ? users.filter((user) => user.user_status === 'local')
    : users.filter((user) => user.user_status === 'international')

  return (
    <>
      <Container sx={{ py: 8, marginTop: '100px' }} maxWidth="md">
        <Button
          variant="outlined"
          onClick={() => {
            navigate(`/all-profiles/${isLocal ? 'international' : 'local'}`)
          }}
          className="button-style"
          sx={{ marginBottom: '25px', fontSize: '12px !important' }}
        >
          {isLocal ? 'Show International' : 'Show Local'}
        </Button>

        <Grid container spacing={4}>
          {filteredUsers.map((user) => (
            <AuthIdDoesNotMatch key={user.id} id={user?.auth_id}>
              <Grid item xs={12} sm={6} md={6}>
                {showUsers ? null : (
                  <Link
                    to={`/${user.id}`}
                    onClick={handleViewProfile}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card
                      sx={{
                        width: '100%',
                        height: '100%',
                        margin: 0,
                        borderRadius: '30px !important',
                        border: '1px solid',
                        borderColor: '#397fb54f',
                        boxShadow: 'none',
                        // bgcolor: '#424242',
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 2,
                          borderRadius: '30px',
                          width: '380px',
                          height: '380px',
                          objectFit: 'cover',
                          objectPosition: 'center center',
                          overflow: 'hidden',
                        }}
                        image={`data:image/jpeg;base64,${user?.profile_img}`}
                        alt="placeholder image"
                      />
                      <CardContent sx={{ flexGrow: 1, padding: 3 }}>
                        <Typography
                          color="#10466f"
                          align="center"
                          sx={{
                            fontWeight: '600',
                            fontSize: '22px !important',
                          }}
                        >
                          {user.first_name}
                        </Typography>

                        <Typography
                          color="#10466f"
                          align="center"
                          sx={{
                            fontWeight: '400',
                            fontSize: '18px !important',
                            marginBottom: '1.2em',
                          }}
                        >
                          {user.city}, {user.country_origin}
                        </Typography>

                        <Typography
                          color="#10466f"
                          align="center"
                          sx={{
                            fontWeight: '400',
                            fontSize: '16px !important',
                            fontStyle: 'italic',
                          }}
                        >
                          &quot;{user.sharing_one}&quot;
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </Grid>
            </AuthIdDoesNotMatch>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default AllProfiles
