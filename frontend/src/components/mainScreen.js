import React from 'react'
import { Container , Row} from 'react-bootstrap'
import { Volunteer } from './volunteer/volunteer'

export const MainScreen = ({children}) => {
  return (
    <div className='mainback'>
        <Container>
            <Row>
                <div className='page'>
                    <Volunteer/>
                    <hr/>
                    {children}

                </div>
            </Row>
        </Container>
    </div>
  )
}
