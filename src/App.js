import React from "react";
import {
  Grid,
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Label,
} from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./button.js";

import flag from "./flag.png";
import hm from "./human.jpg";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={flag} centered />
        </Grid.Row>
        <Grid.Row>
        <Buttons/>
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment alternate"/>
          댓글을 달아주세요
        </Header>
      </Divider>

      <Comments />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="microchip" />
          Contact Me
        </Header>
      </Divider>
      <br />

      <div>
        <Grid centered>
          <Button circular color="facebook" icon="facebook" onClick = {()=> alert("준비중입니다.")}/>
          <Button circular color="instagram" icon="instagramr" onClick = {()=> window.open("https://www.instagram.com/")} />
          <Button circular color="youtube" icon="youtube" onClick = {()=> window.open("https://www.youtube.com/channel/UC7ue1pZBUYiz_S3OKE7g_cQ")}/>
          <Button circular color="google plus" icon="google plus" onClick = {()=> alert("준비중입니다.")}/>
        </Grid>
      </div>
    </div>
  );
}

export default App;
