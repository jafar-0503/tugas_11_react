import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Dimmer, Loader,
  Grid, Divider, Header, Icon, Search, Button,
  Image, Placeholder, List} from 'semantic-ui-react';


class App extends Component {
  render() {
    return(

      <Container fluid style={{ padding: '20px'}}>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Cari Document...
              </Header>

              <Search placeholder='Search document...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='file pdf outline' />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
    <Grid.Column width={5}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='very long' />
            <Placeholder.Line length='long' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column width={7}>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='very long' />
            <Placeholder.Line length='long' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column width={3}>
    <List>
      <h4>Website Terkait</h4>
      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.google.com' target='blank'>Google</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.Facebook.com' target='blank'>Facebook</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.semantic-ui.com' target='blank'>Semantic-ui</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.niomic.com' target='blank'>Niomic</a>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.React.com' target='blank'>React</a>
        </List.Content>
      </List.Item>
    </List>
    </Grid.Column>
      </Grid>
      </Container>
    )
  }
}

export default App;
