import React, { Suspense } from 'react'
import { SuspenseWithPerf, AuthCheck, useUser } from 'reactfire'

const Home: React.FC = () => {
  const { data: user } = useUser()

  return (
    <div>{user}</div>
  )
}

const WrappedHome: React.FC = () => {
  return <Suspense fallback={null}>
    <AuthCheck fallback={null}>
      <Home />
    </AuthCheck>
  </Suspense>
}

export default WrappedHome
