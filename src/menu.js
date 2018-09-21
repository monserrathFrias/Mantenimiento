import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class Menu extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div className="otros">
        <Button icon  color='black' >
          <Icon name='bell outline' />
        </Button>
        <Button icon color='black' >
          <Icon name='address card outline' />
        </Button>
        <Button icon  color='black'>
          <Icon name='sign-in alternate' />
        </Button>

      <div className="BarraArri">
        <Button onClick={this.handleButtonClick} icon color='black'>
          <Icon name='bars' />
        </Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Inicio
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='briefcase' />
              Maquinas
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='calendar plus outline' />
              Nuevo Mantenimiento
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher >
            <Segment basic>
              <Header as='h'>Menu de Areas</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      </div>
    );
  }
}

export default Menu;
