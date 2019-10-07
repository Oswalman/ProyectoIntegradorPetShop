import React from 'react'
import { Container, Button, Link } from 'react-floating-action-button'



export default class floating_button extends React.Component {
    render() {
        return (
            <Container>
            <Link href="#"
                tooltip="Create note link"
                icon="far fa-sticky-note" />
            <Link href="#"
                tooltip="Add user link"
                icon="fas fa-user-plus" />
                className="fab-item btn btn-link btn-lg text-white"
            <Button
                tooltip="The big plus button!"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => alert('FAB Rocks!')} />
        </Container>
        )
    }
}

