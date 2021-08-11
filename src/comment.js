import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";

import hm from "./human.jpg";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Avatar src={hm} />
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      commentsList: [],
    };
  }

  render() {
    return (
      <Comment.Group style={{ marginLeft: "600px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.state.commentsList.map((comments) => (
          <SingleComment content={comments} />
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글을 입력해주세요"
            onChange = {(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() =>
              this.setState( (prevState) => {
                return {
                  commentsList: [...prevState.commentsList, this.state.inputContent],
                };
              })
            }
          />
        </Form>
        <br />
      </Comment.Group>
    );
  }
}

export default Comments;
